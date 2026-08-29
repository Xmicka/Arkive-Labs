"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Motion system: Lenis inertial smooth-scroll synced with GSAP ScrollTrigger.
 * Drives section reveals, light parallax, and metric count-ups. Rebuilds on
 * route change. Fully disabled under prefers-reduced-motion (content shown).
 */
export default function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    let disposed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsap: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ScrollTrigger: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tickerFns: any[] = [];

    (async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (disposed) return;

      gsap = gsapMod.gsap || gsapMod.default;
      ScrollTrigger = stMod.ScrollTrigger || stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.05,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis && lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      tickerFns.push(raf);
      gsap.ticker.lagSmoothing(0);

      // expose for route-change scroll reset
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__lenis = lenis;

      build();
    })();

    function build() {
      if (!gsap || !ScrollTrigger) return;
      ctx = gsap.context(() => {
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
          "footer > *",
        ];
        const genericTargets = [
          "main:not(.home) section:not([data-hero]) > *",
          "footer > *",
        ];

        const selector = (isHome ? homeTargets : genericTargets).join(",");
        const els = gsap.utils.toArray(selector) as HTMLElement[];

        // Hide up front (masked by the route-shell fade-in), then reveal in
        // batches as each group enters. batch() recomputes on refresh, so it
        // stays correct after fonts/images reflow the page.
        gsap.set(els, { autoAlpha: 0, y: 34 });
        ScrollTrigger.batch(els, {
          start: "top 90%",
          onEnter: (batch: HTMLElement[]) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
            }),
        });

        // Metric count-ups
        (gsap.utils.toArray(".metric-value") as HTMLElement[]).forEach(
          (el: HTMLElement) => {
            const raw = el.textContent || "";
            const match = raw.match(/\d+/);
            if (!match) return;
            const endVal = parseInt(match[0], 10);
            const pad = match[0].length;
            const suffix = raw.replace(/[\d]/g, "").trim(); // e.g. ×
            const obj = { v: 0 };
            gsap.to(obj, {
              v: endVal,
              duration: 1.6,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 90%" },
              onUpdate: () => {
                const n = Math.round(obj.v).toString().padStart(pad, "0");
                el.innerHTML = suffix
                  ? `${n}<em>${suffix}</em>`
                  : n;
              },
            });
          });

        // Light parallax on hero copy
        const heroCopy = document.querySelector(".hero-copy");
        if (heroCopy) {
          gsap.to(heroCopy, {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        // Recompute trigger positions once fonts/images settle — otherwise
        // reflow after web-font load leaves lower sections' triggers stale.
        ScrollTrigger.refresh();
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => ScrollTrigger.refresh());
        }
        if (document.readyState !== "complete") {
          window.addEventListener("load", () => ScrollTrigger.refresh(), {
            once: true,
          });
        }
        setTimeout(() => ScrollTrigger.refresh(), 800);
      });
    }

    return () => {
      disposed = true;
      if (ctx) ctx.revert();
      if (gsap) tickerFns.forEach((fn) => gsap.ticker.remove(fn));
      if (lenis) lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).__lenis) (window as any).__lenis = null;
    };
  }, [pathname]);

  return null;
}
