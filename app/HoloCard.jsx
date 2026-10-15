'use client';

import { useRef } from 'react';

/**
 * Holographic tilt card: pointer-reactive 3D tilt + a gold holographic sheen
 * and glare that follow the cursor. Content stays fully visible. Event-driven
 * (no rAF), and on touch devices it simply renders flat.
 */
export default function HoloCard({ children, className = '' }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${(py - 0.5) * -8}deg`);
    el.style.setProperty('--ry', `${(px - 0.5) * 10}deg`);
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
    el.style.setProperty('--active', '1');
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--active', '0');
  };

  return (
    <div
      ref={ref}
      className="holo"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={`holo-inner ${className}`.trim()}>
        {children}
        <div className="holo-sheen" aria-hidden="true" />
        <div className="holo-glare" aria-hidden="true" />
      </div>
    </div>
  );
}
