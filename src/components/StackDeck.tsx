"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";

/** Keep in sync with `.deck-on .deck-slot` in globals.css. */
const DECK_TOP = 104;
const DECK_STEP = 14;

/**
 * Scroll-linked card deck for the `[data-deck]` list next to it. Each
 * `[data-deck-item]` rises into place as it scrolls up (`--enter` 0→1), then
 * lifts and fades as the next card slides over it (`--stack` 0→1). Both are
 * tied to scroll position, so scrolling back reverses it. Off under reduced
 * motion, or when a card is too tall to fit below its sticky offset.
 */
export function StackDeck() {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const deck = anchor.current?.parentElement?.querySelector<HTMLElement>("[data-deck]");
    if (!deck || prefersReducedMotion()) return;
    const items = Array.from(deck.querySelectorAll<HTMLElement>("[data-deck-item]"));
    if (items.length < 2) return;

    const measure = () => {
      const fits = items.every(
        (el, i) => el.offsetHeight <= window.innerHeight - DECK_TOP - i * DECK_STEP - 24,
      );
      deck.classList.toggle("deck-on", fits);
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const on = deck.classList.contains("deck-on");
      const vh = window.innerHeight;
      items.forEach((el, i) => {
        if (!on) {
          el.style.removeProperty("--stack");
          el.style.removeProperty("--enter");
          return;
        }
        const top = el.getBoundingClientRect().top;
        const stickyTop = DECK_TOP + i * DECK_STEP;
        const enter = Math.min(1, Math.max(0, (vh - top) / (vh - stickyTop)));
        el.style.setProperty("--enter", enter.toFixed(4));

        const next = items[i + 1];
        let stack = 0;
        if (next) {
          const distance = next.getBoundingClientRect().top - top;
          stack = Math.min(1, Math.max(0, 1 - distance / el.offsetHeight));
        }
        el.style.setProperty("--stack", stack.toFixed(4));
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
      deck.classList.remove("deck-on");
      items.forEach((el) => {
        el.style.removeProperty("--stack");
        el.style.removeProperty("--enter");
      });
    };
  }, []);

  return <span ref={anchor} hidden />;
}
