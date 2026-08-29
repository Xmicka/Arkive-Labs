"use client";

import { useEffect } from "react";

/**
 * Global craft layer, mounted once in the root layout:
 *  - custom gold cursor (dot + trailing ring), disabled on touch
 *  - film-grain overlay for texture
 *  - top scroll-progress bar
 *  - magnetic pull on [data-magnetic] elements
 * All effects no-op on coarse pointers / reduced motion.
 */
export default function Craft() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const cleanups: Array<() => void> = [];

    // ---- Scroll progress ----
    const bar = document.querySelector<HTMLElement>(".scroll-progress-fill");
    if (bar) {
      let raf = 0;
      const onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const h =
            document.documentElement.scrollHeight - window.innerHeight;
          const p = h > 0 ? window.scrollY / h : 0;
          bar.style.transform = `scaleX(${p})`;
        });
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      });
    }

    // ---- Custom cursor + magnetic (fine pointers only) ----
    if (fine && !reduce) {
      document.body.classList.add("has-custom-cursor");
      const dot = document.querySelector<HTMLElement>(".cursor-dot");
      const ring = document.querySelector<HTMLElement>(".cursor-ring");

      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let rx = mx;
      let ry = my;
      let raf = 0;

      const loop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        if (dot) dot.style.transform = `translate(${mx}px, ${my}px)`;
        if (ring) ring.style.transform = `translate(${rx}px, ${ry}px)`;
        raf = requestAnimationFrame(loop);
      };
      loop();

      const onMove = (e: PointerEvent) => {
        mx = e.clientX;
        my = e.clientY;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      const interactive = 'a, button, [data-magnetic], input, textarea, select, [role="button"]';
      const onOver = (e: Event) => {
        if ((e.target as HTMLElement)?.closest?.(interactive))
          document.body.classList.add("cursor-hover");
      };
      const onOut = (e: Event) => {
        if ((e.target as HTMLElement)?.closest?.(interactive))
          document.body.classList.remove("cursor-hover");
      };
      document.addEventListener("pointerover", onOver);
      document.addEventListener("pointerout", onOut);

      // Magnetic pull
      const magnets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-magnetic]"),
      );
      const magHandlers: Array<() => void> = [];
      magnets.forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
        };
        const reset = () => {
          el.style.transform = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", reset);
        magHandlers.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", reset);
        });
      });

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        document.body.classList.remove("has-custom-cursor", "cursor-hover");
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerover", onOver);
        document.removeEventListener("pointerout", onOut);
        magHandlers.forEach((fn) => fn());
      });
    }

    // Scroll reveals are handled by the GSAP motion system in ScrollFX.

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="cursor" aria-hidden="true">
        <div className="cursor-dot" />
        <div className="cursor-ring" />
      </div>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-fill" />
      </div>
    </>
  );
}
