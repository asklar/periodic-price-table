import { memo } from 'react';
import type { ElementInfo } from '../data/elements';
import type { PriceColorScale } from '../lib/colorScale';
import { readableTextColor, sampleGradient } from '../lib/colorScale';
import { formatUsd } from '../lib/format';

interface ElementCellProps {
  element: ElementInfo;
  scale: PriceColorScale;
  included: boolean;
  isCutoff: boolean;
  onSelect: (z: number) => void;
  onHover: (element: ElementInfo | null) => void;
}

function ElementCellBase({
  element,
  scale,
  included,
  isCutoff,
  onSelect,
  onHover,
}: ElementCellProps) {
  const t = scale.normalize(element.pricePerGram);
  const rgb = sampleGradient(t);
  const textColor = readableTextColor(rgb);

  return (
    <button
      type="button"
      className={[
        'element-cell',
        `cat-${element.category}`,
        included ? 'is-included' : 'is-excluded',
        isCutoff ? 'is-cutoff' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        gridColumn: element.xpos,
        gridRow: element.ypos,
        ['--cell-color' as string]: scale.colorFor(element.pricePerGram),
        ['--cell-text' as string]: textColor,
      }}
      onClick={() => onSelect(element.z)}
      onMouseEnter={() => onHover(element)}
      onFocus={() => onHover(element)}
      onMouseLeave={() => onHover(null)}
      onBlur={() => onHover(null)}
      aria-label={`${element.name}, atomic number ${element.z}, approximately ${formatUsd(
        element.pricePerGram,
      )} per gram${element.estimated ? ' (estimated)' : ''}. Click to set as the last element in the sum.`}
      aria-pressed={isCutoff}
    >
      <span className="cell-z">{element.z}</span>
      <span className="cell-symbol">{element.symbol}</span>
      <span className="cell-name">{element.name}</span>
      <span className="cell-price">
        {element.estimated ? '~' : ''}
        {formatUsd(element.pricePerGram)}
      </span>
    </button>
  );
}

export const ElementCell = memo(ElementCellBase);
