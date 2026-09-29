"use client";

import { useEffect, useRef } from "react";

/**
 * Signature hero visual — a gold "vortex": warped concentric rings seen in
 * perspective, converging to a point near the bottom centre, undulating slowly
 * like sound waves and tilting subtly toward the cursor. Ink + gold; calms to
 * near-still under reduced-motion.
 */
export default function HeroVortex() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let targetMx = 0;
    let mx = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      targetMx = e.clientX / window.innerWidth - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const RINGS = 40;
    const SEG = 72;
    const start = performance.now();

    const draw = (now: number) => {
      const t = reduce ? 6000 : now - start;
      const time = t * 0.00035;
      mx += (targetMx - mx) * 0.06;

      ctx.clearRect(0, 0, w, h);
      const cx = w / 2 + mx * 60;
      const cy = h * 0.9;
      const maxR = Math.max(w, h) * 0.9;
      ctx.lineWidth = 1;

      for (let i = 1; i <= RINGS; i++) {
        const p = i / RINGS;
        const rad = Math.pow(p, 1.85) * maxR;
        const ry = rad * 0.42;
        const phase = i * 0.42 + time * 1.6;
        // brighter toward the vanishing point, fainter at the wide outer rings
        const alpha = (1 - p) * 0.5 + 0.04;

        ctx.beginPath();
        for (let s = 0; s <= SEG; s++) {
          const a = (s / SEG) * Math.PI * 2;
          const warp = 1 + 0.055 * Math.sin(6 * a + phase);
          const x = cx + Math.cos(a) * rad * warp;
          const y = cy + Math.sin(a) * ry * warp;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(208, 169, 79, ${alpha})`;
        ctx.stroke();
      }

      // warm core glow at the vanishing point
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.4);
      g.addColorStop(0, "rgba(224, 189, 103, 0.14)");
      g.addColorStop(1, "rgba(224, 189, 103, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="hero-vortex" aria-hidden="true" />;
}
