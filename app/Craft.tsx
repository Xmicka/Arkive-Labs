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
      const arrow = document.querySelector<HTMLElement>(".cursor-arrow");

      let mx = window.innerWidth / 2;
      let my = window.innerHeight / 2;
      let cx = mx;
      let cy = my;
      let raf = 0;

      const loop = () => {
        // Precise pointer with just a touch of easing so it feels alive
        // without lagging behind like the old droplet.
        cx += (mx - cx) * 0.4;
        cy += (my - cy) * 0.4;
        if (arrow) arrow.style.transform = `translate(${cx}px, ${cy}px)`;
        raf = requestAnimationFrame(loop);
      };
      loop();

      const onMove = (e: PointerEvent) => {
        mx = e.clientX;
        my = e.clientY;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      const onDown = () => document.body.classList.add("cursor-down");
      const onUp = () => document.body.classList.remove("cursor-down");
      window.addEventListener("pointerdown", onDown);
      window.addEventListener("pointerup", onUp);

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
        document.body.classList.remove(
          "has-custom-cursor",
          "cursor-hover",
          "cursor-down",
        );
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointerup", onUp);
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
        <svg className="cursor-arrow" width="26" height="26" viewBox="0 0 26 26">
          <path
            d="M1 1 L1 20 L6.2 15 L9.6 22.6 L13 21.1 L9.7 13.7 L17.5 13.7 Z"
            fill="var(--gold-bright)"
            stroke="var(--ink)"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-fill" />
      </div>
    </>
  );
}
