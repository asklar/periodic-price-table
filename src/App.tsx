import { useEffect, useMemo, useState } from 'react';
import './styles/app.css';
import type { ElementInfo } from './data/elements';
import { ELEMENTS } from './data/elements';
import { createPriceColorScale } from './lib/colorScale';
import { PeriodicTable } from './components/PeriodicTable';
import { CutoffSlider } from './components/CutoffSlider';
import { SummaryPanel } from './components/SummaryPanel';
import type { PriceSummary } from './components/SummaryPanel';
import { Legend } from './components/Legend';
import { ThemeToggle } from './components/ThemeToggle';
import type { Theme } from './components/ThemeToggle';

const THEME_KEY = 'ppt-theme';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'dark';
}

export default function App() {
  const [cutoff, setCutoff] = useState(118);
  const [hovered, setHovered] = useState<ElementInfo | null>(null);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const scale = useMemo(
    () => createPriceColorScale(ELEMENTS.map((e) => e.pricePerGram)),
    [],
  );

  const summary = useMemo<PriceSummary>(() => {
    const included = ELEMENTS.filter((e) => e.z <= cutoff);
    let total = 0;
    let estimatedTotal = 0;
    let mostExpensive: ElementInfo | undefined;
    let leastExpensive: ElementInfo | undefined;

    for (const el of included) {
      total += el.pricePerGram;
      if (el.estimated) estimatedTotal += el.pricePerGram;
      if (!mostExpensive || el.pricePerGram > mostExpensive.pricePerGram) mostExpensive = el;
      if (!leastExpensive || el.pricePerGram < leastExpensive.pricePerGram) leastExpensive = el;
    }

    return {
      total,
      count: included.length,
      cutoffElement: included[included.length - 1],
      mostExpensive,
      leastExpensive,
      estimatedShare: total > 0 ? estimatedTotal / total : 0,
    };
  }, [cutoff]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-title-block">
          <h1 className="app-title">
            The Periodic Table of <span className="accent">Price</span>
          </h1>
          <p className="app-subtitle">
            Every element coloured by its price per gram — and what it would cost to buy
            1&nbsp;g of each, up to the element you choose.
          </p>
        </div>
        <ThemeToggle theme={theme} onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      </header>

      <div className="controls-row">
        <CutoffSlider cutoff={cutoff} onChange={setCutoff} />
        <div className="controls-actions">
          <button
            type="button"
            className="ghost-btn"
            onClick={() => setCutoff(118)}
            disabled={cutoff === 118}
          >
            Select all (118)
          </button>
          <button
            type="button"
            className="ghost-btn"
            onClick={() => setCutoff(1)}
            disabled={cutoff === 1}
          >
            Reset to H
          </button>
        </div>
      </div>

      <main className="app-main">
        <div className="table-wrap">
          <PeriodicTable
            scale={scale}
            cutoff={cutoff}
            onSelect={setCutoff}
            onHover={setHovered}
          />
          <Legend scale={scale} />
        </div>

        <aside className="app-aside">
          <SummaryPanel summary={summary} hovered={hovered} scale={scale} />
          <p className="hint">
            Tip: <strong>click any element</strong> or drag the slider to set the last
            element included in the running total.
          </p>
        </aside>
      </main>

      <footer className="app-footer">
        Prices are approximate, compiled offline for illustration only. Radioactive and
        synthetic elements (shown with “~”) have no real market; their values are rough
        order-of-magnitude estimates.
      </footer>
    </div>
  );
}
