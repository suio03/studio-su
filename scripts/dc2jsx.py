"""Convert the canvas design markup (x-dc HTML with {{holes}}) into JSX.

Usage: python3 scripts/dc2jsx.py <in.html> <out.jsx-fragment>
Holes {{name}} become references to `v.name`.
"""
import re
import sys
from html.parser import HTMLParser

VOID = {"img", "br", "input", "hr", "meta", "link"}
HOLE = re.compile(r"\{\{\s*([A-Za-z0-9_$]+)\s*\}\}")
ATTR_MAP = {"class": "className", "for": "htmlFor", "tabindex": "tabIndex",
            "viewbox": "viewBox", "readonly": "readOnly"}
EVENTS = {"onclick": "onClick", "onmousemove": "onMouseMove", "onmouseleave": "onMouseLeave",
          "onscroll": "onScroll", "onmouseenter": "onMouseEnter"}


def camel(name):
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), name)


def js_value(raw):
    """A string that may contain holes -> JS expression."""
    holes = HOLE.findall(raw)
    if not holes:
        return repr_js(raw)
    m = HOLE.fullmatch(raw.strip())
    if m:
        return "v." + m.group(1)
    tpl = HOLE.sub(lambda m: "${v." + m.group(1) + "}", raw.replace("`", "\\`"))
    return "`" + tpl + "`"


def repr_js(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"


def style_obj(css):
    # split on ; not inside parentheses
    parts, depth, cur = [], 0, ""
    for ch in css:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == ";" and depth == 0:
            parts.append(cur)
            cur = ""
        else:
            cur += ch
    parts.append(cur)
    items = []
    for p in parts:
        if ":" not in p:
            continue
        k, val = p.split(":", 1)
        k, val = k.strip(), val.strip()
        if not k:
            continue
        key = repr_js(k) if k.startswith("--") else camel(k)
        items.append(f"{key}: {js_value(val)}")
    return "{{ " + ", ".join(items) + " }}"


class Conv(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.out = []

    def attrs_jsx(self, tag, attrs):
        res = []
        for k, val in attrs:
            lk = k.lower()
            if lk in EVENTS:
                res.append(f"{EVENTS[lk]}={{{js_value(val).replace('v.', 'v.', 1)}}}")
                continue
            name = ATTR_MAP.get(lk, k)
            if not (name.startswith("data-") or name.startswith("aria-")):
                name = camel(name)
            if val is None:
                res.append(name)
            elif name == "style":
                res.append(f"style={style_obj(val)}")
            elif HOLE.search(val):
                res.append(f"{name}={{{js_value(val)}}}")
            else:
                res.append(f'{name}="{val}"')
        return (" " + " ".join(res)) if res else ""

    def handle_starttag(self, tag, attrs):
        a = self.attrs_jsx(tag, attrs)
        self.out.append(f"<{tag}{a}{' /' if tag in VOID else ''}>")

    def handle_startendtag(self, tag, attrs):
        self.out.append(f"<{tag}{self.attrs_jsx(tag, attrs)} />")

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        self.out.append(f"</{tag}>")

    def handle_data(self, data):
        data = data.replace("{", "{'{'}").replace("}", "{'}'}") if not HOLE.search(data) else data
        data = HOLE.sub(lambda m: "{v." + m.group(1) + "}", data)
        self.out.append(data)

    def handle_entityref(self, name):
        self.out.append(f"&{name};")

    def handle_charref(self, name):
        self.out.append(f"&#{name};")

    def handle_comment(self, data):
        pass


src = open(sys.argv[1], encoding="utf-8").read()
c = Conv()
c.feed(src)
open(sys.argv[2], "w", encoding="utf-8").write("".join(c.out))
