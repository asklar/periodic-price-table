import type { PriceColorScale } from '../lib/colorScale';
import { legendGradientCss } from '../lib/colorScale';
import { formatUsd } from '../lib/format';

interface LegendProps {
  scale: PriceColorScale;
}

export function Legend({ scale }: LegendProps) {
  return (
    <div className="legend">
      <div className="legend-title">Price per gram (log scale)</div>
      <div className="legend-bar" style={{ background: legendGradientCss() }} />
      <div className="legend-axis">
        <span>{formatUsd(scale.min)}</span>
        <span>cheaper → pricier</span>
        <span>{formatUsd(scale.max)}</span>
      </div>
    </div>
  );
}
