"use client";

import { useEffect, useState } from "react";

const WORDS = ["bold.", "curious.", "relentless.", "builders.", "unreasonable."];

/**
 * The gold serif accent in the hero headline cycles through the kinds
 * of people Arkive is built for. Pauses on the first word long enough
 * to read, then rotates on a calm loop. Respects reduced-motion.
 */
export default function RotatingWord() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let outTimer: ReturnType<typeof setTimeout>;
    const inTimer = setInterval(() => {
      setShown(false);
      outTimer = setTimeout(() => {
        setI((v) => (v + 1) % WORDS.length);
        setShown(true);
      }, 420);
    }, 2600);

    return () => {
      clearInterval(inTimer);
      clearTimeout(outTimer);
    };
  }, []);

  return (
    <em className={`rotating-word${shown ? " in" : " out"}`} aria-live="polite">
      {WORDS[i]}
    </em>
  );
}
