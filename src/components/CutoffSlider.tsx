import { ELEMENTS } from '../data/elements';

interface CutoffSliderProps {
  cutoff: number;
  onChange: (z: number) => void;
}

export function CutoffSlider({ cutoff, onChange }: CutoffSliderProps) {
  const element = ELEMENTS.find((e) => e.z === cutoff);

  return (
    <div className="cutoff-slider">
      <div className="cutoff-slider-head">
        <label htmlFor="cutoff-range" className="cutoff-label">
          Last element in the sum
        </label>
        <div className="cutoff-current">
          <span className="cutoff-symbol">{element?.symbol}</span>
          <span className="cutoff-meta">
            {element?.name} · Z&nbsp;=&nbsp;{cutoff}
          </span>
        </div>
      </div>

      <input
        id="cutoff-range"
        type="range"
        min={1}
        max={118}
        step={1}
        value={cutoff}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={`${element?.name}, atomic number ${cutoff}`}
        style={{ ['--fill' as string]: `${((cutoff - 1) / 117) * 100}%` }}
      />

      <div className="cutoff-scale">
        <span>1 · H</span>
        <span>118 · Og</span>
      </div>
    </div>
  );
}
