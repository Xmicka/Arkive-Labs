"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Motion system:
 *  - Lenis inertial smooth-scroll (the "feel").
 *  - IntersectionObserver reveals + metric count-ups — reliable, no
 *    scroll-position math, so nothing ever gets stuck hidden. A hard
 *    failsafe reveals everything after a few seconds regardless.
 * Fully disabled under prefers-reduced-motion (content shown as-is).
 */
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const cleanups: Array<() => void> = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null;
    let raf = 0;

    // ---- Lenis smooth scroll ----
    if (!reduce) {
      (async () => {
        const { default: Lenis } = await import("lenis");
        lenis = new Lenis({
          duration: 1.05,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).__lenis = lenis;
        const loop = (time: number) => {
          lenis.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      })();
    }

    // ---- Reveals (IntersectionObserver) ----
    const isHome = !!document.querySelector("main.home");
    const homeTargets = [
      ".pov-content",
      ".outcome-line > div",
      ".metric",
      ".capabilities .section-heading",
      ".capability-row",
      ".engine-lead",
      ".engine-col",
      ".systems .section-heading",
      ".system-feature",
      ".approach .section-heading",
      ".process-row",
      ".studio .section-index",
      ".studio-intro",
      ".founder",
      ".accountability > *",
      ".contact > *",
    ];
    const genericTargets = [
      "main:not(.home) section:not([data-hero]) > *",
    ];
    const selector = (isHome ? homeTargets : genericTargets).join(",");
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );

    if (!reduce && els.length && "IntersectionObserver" in window) {
      const vh = window.innerHeight;
      // Only hide what starts below the fold — above-fold never flashes.
      const hidden = els.filter(
        (el) => el.getBoundingClientRect().top > vh * 0.82,
      );
      hidden.forEach((el) => el.classList.add("reveal-init"));

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("is-revealed");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      hidden.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());

      // Failsafe: never let content stay hidden.
      const failsafe = window.setTimeout(() => {
        hidden.forEach((el) => el.classList.add("is-revealed"));
      }, 4500);
      cleanups.push(() => window.clearTimeout(failsafe));

      // Reveal-on-load anything already in view (belt and suspenders).
      requestAnimationFrame(() => {
        hidden.forEach((el) => {
          if (el.getBoundingClientRect().top < vh * 0.94) {
            el.classList.add("is-revealed");
          }
        });
      });
    }

    // ---- Metric count-ups (IntersectionObserver) ----
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>(".metric-value"),
    );
    if (counters.length && "IntersectionObserver" in window) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            cio.unobserve(el);
            const raw = el.textContent || "";
            const match = raw.match(/\d+/);
            if (!match) return;
            const end = parseInt(match[0], 10);
            const pad = match[0].length;
            const suffix = raw.replace(/\d/g, "").trim();
            const render = (val: number) => {
              const n = Math.round(val).toString().padStart(pad, "0");
              el.innerHTML = suffix ? `${n}<em>${suffix}</em>` : n;
            };
            if (reduce) {
              render(end);
              return;
            }
            const duration = 1500;
            const startT = performance.now();
            render(0);
            const tick = (now: number) => {
              const p = Math.min(1, (now - startT) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              render(eased * end);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.4 },
      );
      counters.forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());
    }

    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
      if (lenis) lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__lenis = null;
    };
  }, [pathname]);

  return null;
}
