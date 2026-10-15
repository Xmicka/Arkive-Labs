'use client';

import { useCallback, useEffect, useState } from 'react';

export default function CapabilityCarousel({ items }) {
  const n = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir) => setActive((a) => (a + dir + n) % n), [n]);

  useEffect(() => {
    if (paused || n <= 1) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 5000);
    return () => clearInterval(id);
  }, [paused, n]);

  // circular offset: nearest signed distance from the active index
  const offsetOf = (i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div
      className="capx"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="capx-stage">
        {items.map((item, i) => {
          const off = offsetOf(i);
          const abs = Math.abs(off);
          const isActive = off === 0;
          const style = {
            transform: `translateX(${off * 54}%) translateZ(${-abs * 220}px) rotateY(${off * -26}deg) scale(${isActive ? 1 : 0.92})`,
            opacity: abs > 1 ? 0 : isActive ? 1 : 0.32,
            zIndex: n - abs,
            pointerEvents: isActive ? 'auto' : 'none',
          };
          return (
            <article
              className={`capx-card${isActive ? ' is-active' : ''}`}
              style={style}
              key={item.number}
              aria-hidden={!isActive}
            >
              <div className="capx-card-top">
                <span className="capx-num">{item.number}</span>
                <p className="capx-name">{item.name}</p>
              </div>
              <h3 className="capx-statement">{item.statement}</h3>
              <p className="capx-desc">{item.description}</p>
              <div className="capx-includes">
                {item.includes.map((inc) => (
                  <span key={inc}>{inc}</span>
                ))}
              </div>
              <strong className="capx-outcome">
                <small>Designed outcome</small>
                {item.outcome}
              </strong>
            </article>
          );
        })}
      </div>

      <div className="capx-controls">
        <button
          type="button"
          className="capx-arrow"
          onClick={() => go(-1)}
          aria-label="Previous capability"
        >
          <span aria-hidden="true">&larr;</span>
        </button>
        <div className="capx-dots" role="tablist" aria-label="Capabilities">
          {items.map((item, i) => (
            <button
              key={item.number}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={item.name}
              className={`capx-dot${i === active ? ' is-on' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="capx-dot-label">{item.name}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="capx-arrow"
          onClick={() => go(1)}
          aria-label="Next capability"
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
