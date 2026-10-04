"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const TICK_MS = 55;
/** Ticks to hold the finished phrase before deleting (about 1.8s). */
const HOLD_TICKS = 32;

export function TypedRole({ roles }: { roles: string[] }) {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduced) return;
    let ri = 0;
    let chars = 0;
    let deleting = false;
    let hold = 0;

    const id = setInterval(() => {
      const full = roles[ri];
      if (hold > 0) {
        hold--;
        return;
      }
      if (!deleting && chars < full.length) chars++;
      else if (!deleting) {
        deleting = true;
        hold = HOLD_TICKS;
        return;
      } else if (chars > 0) chars--;
      else {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
      setTyped(roles[ri].slice(0, chars));
    }, TICK_MS);

    return () => clearInterval(id);
  }, [roles, reduced]);

  return (
    <>
      {/* Screen readers get the full list once instead of the animation. */}
      <span className="sr-only">{roles.join(" ")}</span>
      <span aria-hidden="true" className="text-accent-300">
        {reduced ? roles[0] : typed}
      </span>
      <span
        aria-hidden="true"
        className="ml-[3px] inline-block h-[.95em] w-[2px] animate-blink bg-accent align-[-.12em]"
      />
    </>
  );
}
