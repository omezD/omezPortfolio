"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";

type Pose = "L" | "F" | "R";

/** How far past the photo's centre (in photo widths) the cursor must be to turn the head. */
const TURN_THRESHOLD = 0.22;
/** Touch devices have no cursor to follow, so the poses cycle instead. */
const TOUCH_CYCLE: Pose[] = ["F", "L", "F", "R"];
const TOUCH_CYCLE_MS = 2500;

const SIZES = "(min-width: 680px) 640px, 100vw";

export function Portrait({ alt }: { alt: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [pose, setPose] = useState<Pose>("F");

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = boxRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const d = (e.clientX - (r.left + r.width / 2)) / r.width;
      setPose(d < -TURN_THRESHOLD ? "L" : d > TURN_THRESHOLD ? "R" : "F");
    };

    const touchOnly = window.matchMedia("(hover: none)").matches;
    if (!touchOnly) {
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => window.removeEventListener("mousemove", onMove);
    }

    if (prefersReducedMotion()) return;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % TOUCH_CYCLE.length;
      setPose(TOUCH_CYCLE[i]);
    }, TOUCH_CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="portrait-frame relative w-[min(100%,640px)]">
      <div ref={boxRef} className="relative aspect-[1225/1284] w-full">
        <Image
          src="/portrait/left.webp"
          alt=""
          width={1225}
          height={1284}
          sizes={SIZES}
          preload
          className="portrait-img"
          style={{ opacity: pose === "L" ? 1 : 0 }}
        />
        <Image
          src="/portrait/front.webp"
          alt={alt}
          width={1247}
          height={1261}
          sizes={SIZES}
          preload
          className="portrait-img"
          style={{ opacity: pose === "F" ? 1 : 0 }}
        />
        <Image
          src="/portrait/right.webp"
          alt=""
          width={1225}
          height={1284}
          sizes={SIZES}
          preload
          className="portrait-img"
          style={{ opacity: pose === "R" ? 1 : 0 }}
        />
      </div>
    </div>
  );
}
