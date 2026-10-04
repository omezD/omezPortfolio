import { marqueeItems } from "@/content";

/** Decorative tech strip. The list is rendered twice so the -50% loop is seamless. */
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee-mask relative z-1 overflow-hidden bg-[rgba(35,37,50,.5)] py-[26px]"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) =>
          marqueeItems.map((item, i) => (
            <span
              key={`${copy}-${item}`}
              className={`inline-flex items-center gap-[44px] pr-[44px] text-[clamp(26px,3.2vw,44px)] font-medium tracking-[-.03em] whitespace-nowrap ${
                i % 2 ? "text-text" : "text-neutral-700"
              }`}
            >
              {item}
              <span className="size-2 rotate-45 rounded-[2px] bg-accent shadow-[0_0_12px_#9184d9]" />
            </span>
          )),
        )}
      </div>
    </div>
  );
}
