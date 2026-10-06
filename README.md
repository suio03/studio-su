# studiosu.dev

Portfolio site for Suyun Chen (Studio Sü) — Next.js App Router, static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

## Structure

- `src/components/Home.tsx` — page logic: scroll-driven horizontal work track, nav state, hello greeting cycle, eye tracking, card carousels and animation timing.
- `src/components/Markup.tsx` — page markup, generated from the canvas design (`Fresh.dc.html`) with `scripts/dc2jsx.py`, then hand-adjusted.
- `src/app/globals.css` — keyframes and shared classes.
- `public/work/` — project images (WebP).

The page is laid out on a 1440px-wide design canvas and scaled to the window width with CSS `zoom` (`--z`).
Section heights adapt to the window height. A dedicated mobile layout is still to come.

## Preview bundle

`preview/entry.tsx` renders the same page without the Next.js runtime, for sharing a live preview link:

```bash
npx esbuild preview/entry.tsx --bundle --minify --format=esm --jsx=automatic \
  --loader:.woff2=file --loader:.woff=file --asset-names=fonts/[name]-[hash] \
  --outdir=preview-dist --entry-names=app --define:process.env.NODE_ENV='"production"' --alias:@=./src
```

## Deploy

Static export. On Cloudflare Pages (or Netlify): build command `npm run build`, output directory `out`.
Every push to `main` redeploys.
