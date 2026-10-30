"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/use-reduced-motion";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const COUNT_MS = 1400;
const MAX_TILT_DEG = 7;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target) || target === 0) return;
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / COUNT_MS);
    el.textContent = String(Math.round(target * easeOutCubic(t)));
    if (t < 1) requestAnimationFrame(step);
  };
  el.textContent = "0";
  requestAnimationFrame(step);
}

/**
 * Behaviour for the Selected work section, attached to the server-rendered
 * markup: staggered entrances, count-up stats, the drifting ghost text, cursor
 * spotlight and screenshot tilt. The card deck itself is <StackDeck />. Under reduced motion it does nothing, so the
 * section renders in its final state.
 */
export function WorkMotion() {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = anchor.current?.closest<HTMLElement>(".work");
    if (!section || prefersReducedMotion()) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-project]"));
    const head = section.querySelector<HTMLElement>(".work-head");
    const cleanups: (() => void)[] = [];

    // Hidden start states only apply once this class is on.
    section.classList.add("work-anim");

    // ── Entrances ───────────────────────────────────────────────────────────
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
          io.unobserve(el);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    if (head) io.observe(head);
    cards.forEach((card) => io.observe(card));
    cleanups.push(() => io.disconnect());

    // ── Ghost text drift ────────────────────────────────────────────────────
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const r = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (vh - r.top) / (r.height + vh)));
      section.style.setProperty("--sx", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    });

    // ── Spotlight + tilt (mouse only) ───────────────────────────────────────
    if (window.matchMedia(FINE_POINTER).matches) {
      for (const card of cards) {
        const browser = card.querySelector<HTMLElement>("[data-tilt]");
        let raf = 0;
        let ev: PointerEvent | null = null;

        const paint = () => {
          raf = 0;
          if (!ev) return;
          const r = card.getBoundingClientRect();
          card.style.setProperty("--px", `${ev.clientX - r.left}px`);
          card.style.setProperty("--py", `${ev.clientY - r.top}px`);
          if (browser) {
            const b = browser.getBoundingClientRect();
            const nx = (ev.clientX - (b.left + b.width / 2)) / b.width;
            const ny = (ev.clientY - (b.top + b.height / 2)) / b.height;
            const clamp = (v: number) => Math.max(-0.5, Math.min(0.5, v));
            browser.style.setProperty("--ry", `${(clamp(nx) * MAX_TILT_DEG * 2).toFixed(2)}deg`);
            browser.style.setProperty("--rx", `${(clamp(ny) * -MAX_TILT_DEG * 2).toFixed(2)}deg`);
          }
        };
        const onMove = (e: PointerEvent) => {
          ev = e;
          if (!raf) raf = requestAnimationFrame(paint);
        };
        const onLeave = () => {
          ev = null;
          browser?.style.setProperty("--rx", "0deg");
          browser?.style.setProperty("--ry", "0deg");
        };

        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", onLeave);
          if (raf) cancelAnimationFrame(raf);
        });
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
      section.classList.remove("work-anim");
      section.querySelectorAll(".is-in").forEach((el) => el.classList.remove("is-in"));
    };
  }, []);

  return <span ref={anchor} hidden />;
}
