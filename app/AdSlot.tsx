"use client";

import { useEffect, useRef } from "react";
import { AD_CLIENT, AD_SLOTS, type AdKind } from "../lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const FORMAT: Record<AdKind, Record<string, string>> = {
  display: { "data-ad-format": "auto", "data-full-width-responsive": "true" },
  inArticle: { "data-ad-format": "fluid", "data-ad-layout": "in-article" },
  multiplex: { "data-ad-format": "autorelaxed" },
};

export default function AdSlot({ kind, className = "" }: { kind: AdKind; className?: string }) {
  const slot = AD_SLOTS[kind];
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Ask AdSense to fill this unit once; guard against double pushes.
    if (!slot || !ref.current || ref.current.dataset.adsbygoogleStatus) return;
    // Do not request an ad for a slot hidden at this screen size (AdSense
    // advises against loading ad units that start hidden).
    if (ref.current.offsetWidth === 0) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers or a not-yet-approved account: the slot simply stays collapsed.
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <aside className={`ad-slot ad-${kind} ${className}`} aria-label="Advertisement">
      {/* AdSense permits only "Advertisements" or "Sponsored Links" as a label. */}
      <span className="ad-label">Advertisements</span>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={kind === "inArticle" ? { display: "block", textAlign: "center" } : { display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        {...FORMAT[kind]}
      />
    </aside>
  );
}
