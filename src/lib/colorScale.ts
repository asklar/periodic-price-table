/**
 * Maps a price-per-gram (USD) onto a perceptually-pleasing colour using a
 * logarithmic scale, since prices span ~13 orders of magnitude.
 */

export interface ColorStop {
  /** Position along the gradient, 0 (cheapest) -> 1 (most expensive). */
  t: number;
  color: [number, number, number];
}

/**
 * Cheap -> expensive gradient (cool teal -> green -> amber -> red -> magenta).
 * Chosen to read well on a dark background and to keep adjacent price bands
 * visually distinct.
 */
const GRADIENT: ColorStop[] = [
  { t: 0.0, color: [34, 56, 84] }, // deep slate-blue (almost free)
  { t: 0.2, color: [38, 122, 142] }, // teal
  { t: 0.4, color: [54, 168, 110] }, // green
  { t: 0.55, color: [173, 200, 70] }, // chartreuse
  { t: 0.7, color: [240, 188, 60] }, // amber
  { t: 0.85, color: [231, 110, 52] }, // orange-red
  { t: 1.0, color: [212, 52, 121] }, // magenta (priceless)
];

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function sampleGradient(t: number): [number, number, number] {
  const clamped = Math.min(1, Math.max(0, t));
  for (let i = 0; i < GRADIENT.length - 1; i++) {
    const lo = GRADIENT[i];
    const hi = GRADIENT[i + 1];
    if (clamped >= lo.t && clamped <= hi.t) {
      const localT = (clamped - lo.t) / (hi.t - lo.t || 1);
      return [
        Math.round(lerp(lo.color[0], hi.color[0], localT)),
        Math.round(lerp(lo.color[1], hi.color[1], localT)),
        Math.round(lerp(lo.color[2], hi.color[2], localT)),
      ];
    }
  }
  return GRADIENT[GRADIENT.length - 1].color;
}

export function rgbToCss([r, g, b]: [number, number, number], alpha = 1): string {
  return alpha >= 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Builds a colour scale from the observed price range. Returns helpers to convert
 * a price to a normalised position (0..1) and to a CSS colour string.
 */
export function createPriceColorScale(prices: number[]) {
  const positive = prices.filter((p) => p > 0);
  const min = Math.min(...positive);
  const max = Math.max(...positive);
  const logMin = Math.log10(min);
  const logMax = Math.log10(max);
  const span = logMax - logMin || 1;

  const normalize = (price: number): number => {
    if (price <= 0) return 0;
    return (Math.log10(price) - logMin) / span;
  };

  const colorFor = (price: number, alpha = 1): string =>
    rgbToCss(sampleGradient(normalize(price)), alpha);

  return { min, max, normalize, colorFor };
}

export type PriceColorScale = ReturnType<typeof createPriceColorScale>;

/** A CSS linear-gradient string sampling the full gradient, for the legend bar. */
export function legendGradientCss(): string {
  const stops = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    stops.push(`${rgbToCss(sampleGradient(t))} ${(t * 100).toFixed(0)}%`);
  }
  return `linear-gradient(90deg, ${stops.join(', ')})`;
}

/** Readable text colour (black/white) for a given background brightness. */
export function readableTextColor([r, g, b]: [number, number, number]): string {
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#10151f' : '#f7fafc';
}

export { sampleGradient };
