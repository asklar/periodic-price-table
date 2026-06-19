import type { ElementInfo } from '../data/elements';
import { ELEMENTS } from '../data/elements';
import type { PriceColorScale } from '../lib/colorScale';
import { ElementCell } from './ElementCell';

interface PeriodicTableProps {
  scale: PriceColorScale;
  cutoff: number;
  onSelect: (z: number) => void;
  onHover: (element: ElementInfo | null) => void;
}

export function PeriodicTable({ scale, cutoff, onSelect, onHover }: PeriodicTableProps) {
  return (
    <div className="periodic-table" role="grid" aria-label="Periodic table of the elements">
      {/* f-block connector labels */}
      <div className="fblock-note lanthanide-note" style={{ gridColumn: 3, gridRow: 6 }}>
        57–71
      </div>
      <div className="fblock-note actinide-note" style={{ gridColumn: 3, gridRow: 7 }}>
        89–103
      </div>
      <div className="fblock-spacer" style={{ gridColumn: '1 / -1', gridRow: 8 }} aria-hidden="true" />

      {ELEMENTS.map((element) => (
        <ElementCell
          key={element.z}
          element={element}
          scale={scale}
          included={element.z <= cutoff}
          isCutoff={element.z === cutoff}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}
