"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";

/** Fades and lifts every `[data-reveal]` element into view, once each. */
export function RevealObserver() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("rv-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) {
      el.classList.add("rv");
      io.observe(el);
    }

    return () => {
      io.disconnect();
      for (const el of els) el.classList.remove("rv", "rv-in");
    };
  }, []);

  return null;
}
