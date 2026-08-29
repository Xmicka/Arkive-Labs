"use client";

import { useEffect } from "react";

/**
 * Re-mounts on every navigation, so each page eases in as one surface.
 * Also snaps scroll to the top on route change (via Lenis if present).
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, []);

  return <div className="route-shell">{children}</div>;
}
