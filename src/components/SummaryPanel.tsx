import type { ElementInfo } from '../data/elements';
import { CATEGORY_LABELS } from '../data/elements';
import type { PriceColorScale } from '../lib/colorScale';
import { formatCount, formatUsd } from '../lib/format';

export interface PriceSummary {
  total: number;
  count: number;
  cutoffElement: ElementInfo | undefined;
  mostExpensive: ElementInfo | undefined;
  leastExpensive: ElementInfo | undefined;
  estimatedShare: number;
}

interface SummaryPanelProps {
  summary: PriceSummary;
  hovered: ElementInfo | null;
  scale: PriceColorScale;
}

export function SummaryPanel({ summary, hovered, scale }: SummaryPanelProps) {
  const { total, count, mostExpensive, leastExpensive, estimatedShare } = summary;

  return (
    <section className="summary-panel" aria-live="polite">
      <div className="summary-headline">
        <span className="summary-eyebrow">Total cost for 1&nbsp;g of each</span>
        <span className="summary-total">{formatUsd(total)}</span>
        <span className="summary-sub">
          across {formatCount(count)} element{count === 1 ? '' : 's'} (Z 1–{summary.cutoffElement?.z})
        </span>
      </div>

      <div className="summary-stats">
        <div className="stat">
          <span className="stat-label">Priciest included</span>
          {mostExpensive ? (
            <span className="stat-value">
              <span
                className="swatch"
                style={{ background: scale.colorFor(mostExpensive.pricePerGram) }}
              />
              {mostExpensive.symbol} · {formatUsd(mostExpensive.pricePerGram)}/g
            </span>
          ) : (
            <span className="stat-value">—</span>
          )}
        </div>
        <div className="stat">
          <span className="stat-label">Cheapest included</span>
          {leastExpensive ? (
            <span className="stat-value">
              <span
                className="swatch"
                style={{ background: scale.colorFor(leastExpensive.pricePerGram) }}
              />
              {leastExpensive.symbol} · {formatUsd(leastExpensive.pricePerGram)}/g
            </span>
          ) : (
            <span className="stat-value">—</span>
          )}
        </div>
        <div className="stat">
          <span className="stat-label">Estimated prices</span>
          <span className="stat-value">{Math.round(estimatedShare * 100)}% of sum</span>
        </div>
      </div>

      <div className={`hover-card ${hovered ? 'is-active' : ''}`}>
        {hovered ? (
          <>
            <div
              className="hover-swatch"
              style={{ background: scale.colorFor(hovered.pricePerGram) }}
            >
              <span className="hover-symbol">{hovered.symbol}</span>
            </div>
            <div className="hover-info">
              <span className="hover-name">
                {hovered.name} <span className="hover-z">#{hovered.z}</span>
              </span>
              <span className="hover-category">{CATEGORY_LABELS[hovered.category]}</span>
              <span className="hover-price">
                {hovered.estimated ? '≈ ' : ''}
                {formatUsd(hovered.pricePerGram)} <span className="hover-unit">/ gram</span>
              </span>
            </div>
          </>
        ) : (
          <span className="hover-empty">Hover an element for details</span>
        )}
      </div>
    </section>
  );
}
