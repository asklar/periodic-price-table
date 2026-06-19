/** USD currency / number formatting helpers. */

const compact = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 2,
});

/**
 * Formats a USD amount adaptively:
 * - tiny amounts (< 1 cent) get extra precision,
 * - small amounts show full cents,
 * - large amounts (>= 1,000,000) use compact notation (e.g. $1.2M, $3.4B).
 */
export function formatUsd(value: number): string {
  if (value === 0) return '$0.00';
  if (value < 0.01) {
    // Show a few significant digits for sub-cent prices.
    const digits = Math.min(8, Math.max(2, 2 - Math.floor(Math.log10(value))));
    return `$${value.toFixed(digits)}`;
  }
  if (value >= 1_000_000) {
    return compact.format(value);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);
}

/** Compact integer formatting, e.g. 1234 -> "1,234". */
export function formatCount(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}
