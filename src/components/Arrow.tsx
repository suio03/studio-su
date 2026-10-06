// One arrow drawn as SVG so every button's arrow has the same weight,
// instead of text glyphs (→ ↗) that each font draws differently.
const ROT = { right: 0, 'up-right': -45, up: -90, down: 90 } as const;

export function Arrow({ dir = 'right', size = '0.9em', weight = 1.8 }: { dir?: keyof typeof ROT; size?: string; weight?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, transform: `rotate(${ROT[dir]}deg)`, verticalAlign: '-0.1em' }}
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}
