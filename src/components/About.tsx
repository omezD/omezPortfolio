import Image from "next/image";
import { about, stackGroups } from "@/content";

export function About() {
  return (
    <section
      id="stack"
      aria-labelledby="about-title"
      className="relative z-1 px-(--page-x) py-(--section-y)"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-[clamp(40px,6vw,96px)]">
        <div data-reveal className="flex flex-col gap-6">
          <h2 id="about-title" className="kicker font-normal">
            02 — About
          </h2>
          <p className="text-[clamp(26px,3vw,42px)] leading-[1.2] font-medium tracking-[-.03em] text-pretty">
            {about.statement}
          </p>
          <p className="max-w-[540px] text-[17px] leading-[1.65] text-pretty text-neutral-400">
            {about.body}
          </p>
          {about.photo ? (
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              width={360}
              height={360}
              sizes="180px"
              className="aspect-square w-[180px] rounded-lg object-cover shadow-sm"
            />
          ) : (
            <div className="slot aspect-square w-[180px] rounded-lg text-[11px] text-neutral-500 shadow-sm">
              [ your photo ]
            </div>
          )}
        </div>

        <div data-reveal className="flex flex-col gap-3">
          <h3 className="mb-2 text-[12px] leading-[1.55] font-normal tracking-[.12em] text-neutral-500 uppercase">
            Toolkit
          </h3>
          {stackGroups.map((group) => (
            <div
              key={group.label}
              className="rule-fade-bottom grid grid-cols-[90px_minmax(0,1fr)] items-center gap-4 py-[18px]"
            >
              <span id={`stack-${group.label}`} className="text-[14px] text-neutral-400">
                {group.label}
              </span>
              <ul aria-labelledby={`stack-${group.label}`} className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-divider px-3 py-[6px] text-[14px] whitespace-nowrap text-text transition-[border-color,color] duration-200 hover:border-accent hover:text-accent-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
