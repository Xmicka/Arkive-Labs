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

    // ---- Magnetic buttons (fine pointers only) ----
    // Uses the native system cursor — reliable and familiar for clicking.
    if (fine && !reduce) {
      const magnets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-magnetic]"),
      );
      const magHandlers: Array<() => void> = [];
      magnets.forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
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
        magHandlers.forEach((fn) => fn());
      });
    }

    // Scroll reveals are handled by the GSAP motion system in ScrollFX.

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-fill" />
      </div>
    </>
  );
}
