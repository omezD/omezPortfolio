import { features, heroChips, site } from "@/content";
import { Portrait } from "./Portrait";
import { TypedRole } from "./TypedRole";

const BUTTON =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-md border bg-[rgba(22,24,38,.5)] px-[22px] py-[14px] text-[15px] font-medium backdrop-blur-[8px]";

const CHIP_POSITIONS = ["chip-a", "chip-b", "chip-c"] as const;

export function Hero() {
  const [firstName, ...rest] = site.name.split(" ");

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative z-1 grid min-h-[min(92vh,980px)] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-end overflow-hidden px-(--page-x)"
    >
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="hero-word pointer-events-none absolute top-[8%] right-[-2vw] whitespace-nowrap select-none"
      >
        {site.heroWord}
      </div>

      <div className="relative z-3 flex flex-col gap-[clamp(22px,3vw,36px)] pt-[clamp(56px,9vw,120px)] pb-[clamp(48px,7vw,96px)]">
        {features.available && (
          <p className="inline-flex items-center gap-[10px] self-start rounded-full bg-[rgba(22,24,38,.6)] px-[14px] py-[7px] text-[13px] whitespace-nowrap text-neutral-300 shadow-sm backdrop-blur-[8px]">
            <span
              aria-hidden="true"
              className="size-[7px] animate-pulse-dot rounded-full bg-accent"
            />
            {site.availability}
          </p>
        )}

        <div className="flex flex-col gap-[10px]">
          <p className="text-[13px] tracking-[.18em] text-accent-300 uppercase">{site.tagline}</p>
          <h1 className="text-[clamp(84px,12.5vw,200px)] leading-[.86] font-medium tracking-[-.06em] [text-shadow:0_10px_60px_rgba(22,24,38,.8)]">
            {firstName}
            <br />
            {rest.join(" ")}
            <span className="text-accent [text-shadow:0_0_30px_rgba(145,132,217,.8)]">.</span>
          </h1>
        </div>

        <div aria-hidden="true" className="rule-hero" />

        <p className="min-h-[2.6em] max-w-[560px] text-[clamp(20px,2.2vw,30px)] leading-[1.3] tracking-[-.02em] text-pretty text-neutral-200">
          I build <TypedRole roles={site.roles} />
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className={`${BUTTON} border-accent text-accent hover:bg-[rgba(145,132,217,.14)] hover:text-accent-300`}
          >
            View my work <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#contact"
            className={`${BUTTON} border-divider text-text hover:bg-[rgba(233,233,237,.07)] hover:text-text`}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>

      <div className="relative z-2 flex min-h-[520px] items-end justify-center self-stretch">
        {/* Back to front: glow, two rings, indigo arch, portrait, chips. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[38%] left-1/2 aspect-square w-[min(70%,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
          style={{
            background:
              "radial-gradient(circle,rgba(145,132,217,.45),rgba(93,82,148,.18) 45%,transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[36%] left-1/2 aspect-square w-[min(78%,580px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(145,132,217,.25)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[36%] left-1/2 aspect-square w-[min(98%,740px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(145,132,217,.12)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-[62%] w-[min(92%,640px)] -translate-x-1/2 rounded-t-[320px]"
          style={{
            background: "linear-gradient(180deg,#262a60,#1d2040 55%,transparent)",
            boxShadow: "inset 0 1px 0 rgba(181,171,252,.35)",
          }}
        />

        <Portrait alt={`Portrait of ${site.name}`} />

        <ul className="contents">
          {heroChips.map((chip, i) => (
            <li key={chip.label} className={`chip ${CHIP_POSITIONS[i]}`}>
              <span aria-hidden="true" className="diamond" />
              <span className="flex flex-col leading-[1.3]">
                <span className="text-[11px] text-neutral-500">{chip.label}</span>
                <span>{chip.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 z-3 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[.18em] text-neutral-500 uppercase"
      >
        <span>Scroll</span>
        <span className="h-7 w-px bg-linear-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
