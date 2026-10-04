"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Cursor glow + hero parallax. Writes CSS variables from a rAF loop instead of
 * going through React state: `--mx` / `--my` (-0.5..0.5 of the viewport) on the
 * element with id `parallaxTargetId`, and a transform on the glow itself.
 */
export function PointerEffects({
  glow,
  parallaxTargetId,
}: {
  glow: boolean;
  parallaxTargetId: string;
}) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = document.getElementById(parallaxTargetId);
    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      glowRef.current?.style.setProperty(
        "transform",
        `translate3d(${x + window.scrollX}px, ${y + window.scrollY}px, 0)`,
      );
      if (target && !prefersReducedMotion()) {
        target.style.setProperty("--mx", (x / window.innerWidth - 0.5).toFixed(4));
        target.style.setProperty("--my", (y / window.innerHeight - 0.5).toFixed(4));
      }
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
      target?.style.removeProperty("--mx");
      target?.style.removeProperty("--my");
    };
  }, [parallaxTargetId]);

  return glow ? <div ref={glowRef} aria-hidden="true" className="cursor-glow" /> : null;
}
