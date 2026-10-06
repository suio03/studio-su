'use client';

import React from 'react';
import { Nav, Sections } from './Markup';

/* ------------------------------------------------------------------ *
 * Design constants (all in "design px" — the page is drawn on a      *
 * 1440px-wide canvas and scaled to the window with CSS zoom).        *
 * ------------------------------------------------------------------ */
// Design canvas width on narrow screens: 420 on phones, 640 on small tablets.
const canvasFor = (w: number) => (w < 600 ? 420 : w < 900 ? 640 : 1440);
const MOBILE_BREAK = 900; // css px
const OVERFLOW = 5400; // horizontal distance the card track travels
const LEAD = 450; // scroll before the track starts moving
const TAIL = 840; // extra scroll that holds on the last card
const ABOUT_H = 1200;
const SPEED = 129; // ms per greeting while hovering "hello"

const WORDS = ['hello!', '你好!', 'Bonjour!', 'hey!', 'Hola!', 'こんにちは!', 'hi!', 'Ciao!', '안녕!', 'hello!', 'Hallo!', 'Olá!', 'hey!', 'G’day!'];
const SU_COLORS = ['#B795C8', '#64A7B4', '#DE9199', '#FFFFFF'];

const C = { bg: '#D0D873', ink: '#2B1840' };
const CJK = ", 'PingFang SC', 'Hiragino Sans', 'Noto Sans CJK SC', 'Apple SD Gothic Neo', sans-serif";
const F = {
  d: "'Bricolage Grotesque Variable', 'Bricolage Grotesque'" + CJK,
  b: "'Bricolage Grotesque Variable', 'Bricolage Grotesque', sans-serif",
  w: 800,
  ls: '-0.045em',
};

const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

type State = {
  mounted: boolean;
  st: number; // scroll position in design px
  zoom: number;
  vh: number; // viewport height in design px
  px: number;
  py: number;
  hi: number;
  t: number;
  hovering: boolean;
  tick: number;
  slide: number;
  mobile: boolean;
  canvas: number; // design canvas width in use
  tops: Record<string, number>; // section tops in design px
};

export default class Home extends React.Component<object, State> {
  state: State = { mounted: false, st: 0, zoom: 1, vh: 900, px: 12, py: 10, hi: 0, t: 0, hovering: false, tick: 0, slide: 0, mobile: false, canvas: 1440, tops: {} };

  private _ro: ResizeObserver | null = null;
  private _root = React.createRef<HTMLDivElement>();

  private _t: ReturnType<typeof setInterval> | null = null;
  private _car: ReturnType<typeof setInterval> | null = null;
  private _raf = 0;
  private _last = 0;
  private _scxT: number | null = null;
  private _rm = false;

  componentDidMount() {
    this._rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.measure();
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.measure);
    if (this._root.current && 'ResizeObserver' in window) {
      this._ro = new ResizeObserver(() => this.measureTops());
      this._ro.observe(this._root.current);
    }
    if (!this._rm) {
      this._car = setInterval(() => {
        const k = this.state.tick + 1;
        this.setState({ tick: k, slide: k % 2 });
      }, 6500);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.measure);
    this._ro?.disconnect();
    if (this._t) clearInterval(this._t);
    if (this._car) clearInterval(this._car);
    cancelAnimationFrame(this._raf);
  }

  measure = () => {
    const w = document.documentElement.clientWidth;
    const mobile = w < MOBILE_BREAK;
    const canvas = canvasFor(w);
    const zoom = w / canvas;
    document.documentElement.style.setProperty('--z', String(zoom));
    document.documentElement.style.setProperty('--cw', String(canvas - 40));
    this.setState({ mounted: true, mobile, canvas, zoom, vh: window.innerHeight / zoom, st: window.scrollY / zoom }, this.measureTops);
  };

  measureTops = () => {
    const tops: Record<string, number> = {};
    document.querySelectorAll<HTMLElement>('[data-sec]').forEach((el) => {
      tops[el.dataset.sec as string] = (el.getBoundingClientRect().top + window.scrollY) / this.state.zoom;
    });
    const old = this.state.tops;
    if (Object.keys(tops).some((k) => Math.abs((old[k] ?? -1) - tops[k]) > 1)) this.setState({ tops });
  };

  onScroll = () => {
    cancelAnimationFrame(this._raf);
    this._raf = requestAnimationFrame(() => this.setState({ st: window.scrollY / this.state.zoom }));
  };

  layout() {
    const vh = Math.max(700, this.state.vh);
    const heroH = Math.max(760, vh);
    const workH = vh + LEAD + OVERFLOW + TAIL;
    const contactH = Math.max(760, vh);
    const T = this.state.tops;
    const aboutTop = T.about ?? heroH + workH;
    const contactTop = T.contact ?? aboutTop + ABOUT_H;
    const workTop = T.work ?? heroH;
    const trackTop = Math.round(Math.max(150, (vh - 600) / 2 + 70));
    return { vh, heroH, workH, contactH, workTop, aboutTop, contactTop, trackTop, headTop: trackTop - 100 };
  }

  go(name: string | null) {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      const el = name ? document.querySelector<HTMLElement>(`[data-sec="${name}"]`) : null;
      const top = el ? el.getBoundingClientRect().top + window.scrollY : 0;
      window.scrollTo({ top, behavior: this._rm ? 'auto' : 'smooth' });
    };
  }

  renderVals() {
    const { mounted, st, mobile } = this.state;
    const L = this.layout();
    const rm = this._rm;
    // Before mount, use a fixed clock so server and client markup match.
    const now = mounted ? Date.now() : 0;
    const anim = (s: string) => (rm || !mounted ? 'none' : s);
    const rf: Record<string, string> = {};

    // Horizontal work track
    const p = Math.min(1, Math.max(0, (st - L.heroH - LEAD) / OVERFLOW));
    const tx = -p * OVERFLOW;

    // Scribix: scroll the screenshot only while its card is centred, after a short pause
    const centered = mobile || Math.abs(tx + 2140) < 260;
    if (centered) {
      if (!this._scxT) this._scxT = now;
    } else this._scxT = null;
    rf.sc1 = rm || !centered || !mounted ? 'none' : `scxDrift 90s linear ${2500 - (now - (this._scxT || now))}ms infinite`;

    [44, 56, 48, 60].forEach((sec, k) => {
      rf['pc' + k] = anim(`pxCol ${sec}s linear -${(now + k * 9000) % (sec * 1000)}ms infinite`);
    });
    for (let i = 0; i < 12; i++) {
      const d = (6 + ((i * 7) % 5)) * 1000;
      rf['lf' + i] = anim(`letterFloat ${d / 1000}s ease-in-out -${(now + i * 1300) % d}ms infinite`);
    }
    rf.mq = anim(`denloMarq 46s linear -${now % 46000}ms infinite`);
    ([[9, 'robotDrift'], [6.5, 'robotFloat'], [5.2, 'robotFloat'], [7.4, 'robotFloat'], [4.8, 'robotFloat'], [6.9, 'robotFloat'], [5.6, 'robotFloat'], [6.1, 'robotFloat'], [8, 'robotFloat'], [5, 'robotFloat']] as [number, string][]).forEach(([d, n], j) => {
      rf['rf' + j] = anim(`${n} ${d}s ease-in-out -${(now + j * 1370) % (d * 1000)}ms infinite`);
    });

    const hSize = mobile ? (this.state.canvas >= 640 ? 120 : 84) : 170;
    const suSize = Math.round(hSize * 1.2);
    const eyeW = Math.round(suSize * 0.2);
    const eyeH = Math.round(eyeW * 1.43);
    const pupil = Math.round(eyeW * 0.6);

    const up = st > 80;
    const contactOn = st >= L.contactTop - 400;
    const navDark = st >= L.contactTop - 80;
    const workOn = st >= L.workTop - 200 && st < L.aboutTop - 450;
    const aboutOn = st >= L.aboutTop - 450 && !contactOn;
    const tick = this.state.tick;

    return {
      ...rf,
      ...L,
      bg: C.bg,
      ink: C.ink,
      suColor: this.state.hovering ? SU_COLORS[Math.floor((this.state.t * SPEED) / 1200) % 4] : '#FFFFFF',
      iAlign: mobile ? 'left' : 'right',
      iJustify: mobile ? 'flex-start' : 'flex-end',
      bL: mobile ? '0' : 'auto',
      bR: mobile ? 'auto' : '0',
      limeBuddy: '#64A7B4',
      pupilC: C.ink,
      introColor: '#FFFFFF',
      navBg: navDark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.4)',
      navText: navDark ? '#FFFFFF' : C.ink,
      navBorder: navDark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.55)',
      fDisplay: F.d,
      fBody: F.b,
      fWeight: F.w,
      fLs: F.ls,
      hSize,
      suSize,
      h2Size: 48,
      h3Size: 96,
      eyeW,
      eyeH,
      pupil,
      eyeGap: Math.round(eyeW * 0.22),
      eyeL: Math.round(suSize * 0.05),
      eyeT: -Math.round(suSize * 0.07),
      pupL: Math.round((eyeW - pupil) / 2),
      pupT: Math.round((eyeH - pupil) / 2),
      hello: WORDS[this.state.hi],
      s0: this.state.slide === 0 ? 1 : 0,
      s1: this.state.slide === 1 ? 1 : 0,
      d0: this.state.slide === 0 ? 22 : 6,
      d1: this.state.slide === 1 ? 22 : 6,
      e0: tick % 3 === 0 ? 1 : 0,
      e1: tick % 3 === 1 ? 1 : 0,
      e2: tick % 3 === 2 ? 1 : 0,
      f0: tick % 3 === 0 ? 22 : 6,
      f1: tick % 3 === 1 ? 22 : 6,
      f2: tick % 3 === 2 ? 22 : 6,
      navY: up ? 24 : Math.round(L.vh - 102),
      navShadow: up ? '0 10px 30px rgba(0,0,0,0.18)' : '0 4px 14px rgba(0,0,0,0.12)',
      tx: Math.round(tx),
      pct: Math.round(p * 100),
      counter: '0' + Math.min(6, Math.floor(p * 6) + 1),
      px: this.state.px,
      py: this.state.py,
      goTop: this.go(null),
      goWork: this.go('work'),
      goAbout: this.go('about'),
      goContact: this.go('contact'),
      navWorkBg: workOn ? rgba(C.ink, 0.1) : 'transparent',
      navAboutBg: aboutOn ? rgba(C.ink, 0.1) : 'transparent',
      navContactBg: contactOn ? (navDark ? 'rgba(255,255,255,0.18)' : rgba(C.ink, 0.1)) : 'transparent',
      nudgeHello: () => {
        this._last = Date.now();
        if (this._t) return;
        this.setState({ hovering: true, t: 0, hi: 0 });
        this._t = setInterval(() => {
          if (Date.now() - this._last > 800) {
            if (this._t) clearInterval(this._t);
            this._t = null;
            this.setState({ hovering: false, hi: 0, t: 0 });
            return;
          }
          const t = this.state.t + 1;
          this.setState({ t, hi: t % WORDS.length });
        }, SPEED);
      },
      stopHello: () => {
        if (this._t) clearInterval(this._t);
        this._t = null;
        this.setState({ hovering: false, hi: 0, t: 0 });
      },
      onMove: (e: React.MouseEvent) => {
        const z = this.state.zoom;
        const mx = e.clientX / z;
        const my = e.clientY / z;
        const ex = 600;
        const ey = 400 - this.state.st;
        const cl = (val: number, m: number) => Math.max(-m, Math.min(m, val));
        const lim = Math.round((eyeW - pupil) / 2 + pupil * 0.35);
        const limY = Math.round((eyeH - pupil) / 2 + pupil * 0.3);
        this.setState({ px: cl((mx - ex) / 25, lim), py: cl((my - ey) / 25, limY) });
      },
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div
        ref={this._root}
        className={'page-root' + (this.state.mobile ? ' m' : '')}
        onMouseMove={v.onMove}
        style={{ background: v.bg, color: v.ink, fontFamily: v.fBody }}
      >
        <Sections v={v} />
        <Nav v={v} />
      </div>
    );
  }
}
