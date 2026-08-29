"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive gold constellation.
 * A living field of particles that drifts on its own, links nearby
 * neighbours with faint gold threads, and reacts to the cursor —
 * particles lean toward the pointer and the links brighten around it.
 * A slow-orbiting inner ring keeps Arkive's "signal" motif alive.
 * Falls back to a calm ambient drift on touch / reduced-motion.
 */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const GOLD = [208, 169, 79];
    const PAPER = [242, 240, 233];

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      gold: boolean;
      orbit?: { cx: number; cy: number; rad: number; a: number; speed: number };
    };

    let particles: P[] = [];

    const pointer = { x: -9999, y: -9999, active: false };
    const smooth = { x: -9999, y: -9999 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with area but stays bounded for performance.
      const target = Math.min(
        130,
        Math.max(46, Math.floor((width * height) / 12000)),
      );

      particles = [];
      for (let i = 0; i < target; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 0.7,
          gold: Math.random() < 0.32,
        });
      }

      // A small orbiting cluster anchored to the right — the "signal".
      const cx = width * 0.74;
      const cy = height * 0.44;
      const rings = [
        { count: 5, rad: Math.min(width, height) * 0.16, speed: 0.0016 },
        { count: 8, rad: Math.min(width, height) * 0.27, speed: -0.001 },
        { count: 11, rad: Math.min(width, height) * 0.38, speed: 0.0007 },
      ];
      rings.forEach((ring) => {
        for (let i = 0; i < ring.count; i++) {
          const a = (i / ring.count) * Math.PI * 2;
          particles.push({
            x: cx + Math.cos(a) * ring.rad,
            y: cy + Math.sin(a) * ring.rad,
            vx: 0,
            vy: 0,
            r: Math.random() * 1.4 + 0.9,
            gold: Math.random() < 0.6,
            orbit: { cx, cy, rad: ring.rad, a, speed: ring.speed },
          });
        }
      });
    };

    const LINK = 132;
    const LINK2 = LINK * LINK;

    let raf = 0;
    let t = 0;

    const rgba = (c: number[], a: number) =>
      `rgba(${c[0]},${c[1]},${c[2]},${a})`;

    const frame = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      // Ease the pointer for buttery reactions.
      if (pointer.active) {
        smooth.x += (pointer.x - smooth.x) * 0.12;
        smooth.y += (pointer.y - smooth.y) * 0.12;
      }

      for (const p of particles) {
        if (p.orbit) {
          p.orbit.a += p.orbit.speed * (reduce ? 0.4 : 1);
          let rad = p.orbit.rad;
          // The signal breathes toward the cursor.
          if (pointer.active) {
            const dx = smooth.x - p.orbit.cx;
            const dy = smooth.y - p.orbit.cy;
            const pull = Math.max(-16, Math.min(16, (dx + dy) * 0.02));
            rad += pull + Math.sin(t * 0.02 + p.orbit.a) * 4;
          } else {
            rad += Math.sin(t * 0.015 + p.orbit.a) * 4;
          }
          p.x = p.orbit.cx + Math.cos(p.orbit.a) * rad;
          p.y = p.orbit.cy + Math.sin(p.orbit.a) * rad;
        } else {
          p.x += p.vx * (reduce ? 0.3 : 1);
          p.y += p.vy * (reduce ? 0.3 : 1);

          // Cursor interaction: gentle attraction + close-range swirl.
          if (pointer.active && !reduce) {
            const dx = smooth.x - p.x;
            const dy = smooth.y - p.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 40000) {
              const d = Math.sqrt(d2) || 1;
              const f = (1 - d / 200) * 0.6;
              p.vx += (dx / d) * f * 0.12;
              p.vy += (dy / d) * f * 0.12;
              // perpendicular swirl for a lively feel
              p.vx += (-dy / d) * f * 0.05;
              p.vy += (dx / d) * f * 0.05;
            }
          }

          // Friction + drift floor keep it alive but never frantic.
          p.vx *= 0.96;
          p.vy *= 0.96;
          if (Math.abs(p.vx) < 0.05)
            p.vx += (Math.random() - 0.5) * 0.06;
          if (Math.abs(p.vy) < 0.05)
            p.vy += (Math.random() - 0.5) * 0.06;

          // Wrap around edges.
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          if (p.y > height + 20) p.y = -20;
        }
      }

      // Links.
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK2) continue;
          const d = Math.sqrt(d2);
          let alpha = (1 - d / LINK) * 0.5;

          // Brighten links near the cursor.
          if (pointer.active) {
            const mx = (a.x + b.x) / 2 - smooth.x;
            const my = (a.y + b.y) / 2 - smooth.y;
            const md = Math.sqrt(mx * mx + my * my);
            if (md < 170) alpha += (1 - md / 170) * 0.6;
          }

          const goldLink = a.gold || b.gold;
          ctx.strokeStyle = rgba(
            goldLink ? GOLD : PAPER,
            Math.min(0.75, alpha) * (goldLink ? 1 : 0.5),
          );
          ctx.lineWidth = goldLink ? 0.75 : 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes.
      for (const p of particles) {
        const near =
          pointer.active &&
          (p.x - smooth.x) ** 2 + (p.y - smooth.y) ** 2 < 26000;
        const c = p.gold ? GOLD : PAPER;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (near ? 1.7 : 1), 0, Math.PI * 2);
        ctx.fillStyle = rgba(c, p.gold ? 0.95 : 0.55);
        if (p.gold) {
          ctx.shadowColor = rgba(GOLD, 0.9);
          ctx.shadowBlur = near ? 18 : 8;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (!pointer.active) {
        smooth.x = x;
        smooth.y = y;
      }
      pointer.x = x;
      pointer.y = y;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    build();
    frame();

    window.addEventListener("resize", build);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
