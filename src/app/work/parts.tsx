import s from './case.module.css';

/* Shared building blocks for the case-study pages. `base` is the image folder under /public. */

export type Shot = { src: string; alt: string; label?: string; tone?: string; phone?: boolean; fill?: boolean };

export function Fig({ base, src, alt, cap, tone, phone }: { base: string; src: string; alt: string; cap?: string; tone?: string; phone?: boolean }) {
  return (
    <figure className={s.fig}>
      <div className={`${s.frame} ${phone ? s.phone : ''}`} style={tone ? { background: tone } : undefined}>
        <img src={base + src} alt={alt} loading="lazy" />
      </div>
      {cap && <figcaption>{cap}</figcaption>}
    </figure>
  );
}

/* Side-by-side screens in equal-height stages, so a landscape and a portrait image still balance. */
export function Cmp({ base, items, cap, short, tall }: { base: string; items: Shot[]; cap?: string; short?: boolean; tall?: boolean }) {
  return (
    <figure className={s.fig}>
      <div className={s.cmp} style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
        {items.map((it) => (
          <div key={it.src} className={`${s.stage} ${short ? s.short : ''} ${tall ? s.tall : ''} ${it.fill ? s.fill : ''}`} style={it.tone ? { background: it.tone } : undefined}>
            {it.label && <span className={s.chip}>{it.label}</span>}
            <img src={base + it.src} alt={it.alt} loading="lazy" className={it.phone ? s.phoneImg : undefined} />
          </div>
        ))}
      </div>
      {cap && <figcaption>{cap}</figcaption>}
    </figure>
  );
}
