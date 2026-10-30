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
          <div className="grid items-start gap-7 sm:grid-cols-[minmax(0,250px)_minmax(0,1fr)]">
            {about.photo ? (
              <figure className="about-photo group relative aspect-[3/4] w-[min(100%,260px)] sm:w-full">
                <span aria-hidden="true" className="about-photo-frame" />
                <div className="relative h-full overflow-hidden rounded-lg shadow-sm">
                  <Image
                    src={about.photo.src}
                    alt={about.photo.alt}
                    fill
                    sizes="(min-width: 640px) 250px, 260px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[rgba(22,24,38,.85)] to-transparent"
                  />
                </div>
                {about.photoBadge && (
                  <figcaption className="about-photo-badge">
                    <span aria-hidden="true" className="diamond" />
                    <span className="flex flex-col leading-[1.3]">
                      <span className="text-[11px] text-neutral-500">{about.photoBadge.label}</span>
                      <span>{about.photoBadge.value}</span>
                    </span>
                  </figcaption>
                )}
              </figure>
            ) : (
              <div className="slot aspect-square w-[180px] rounded-lg text-[11px] text-neutral-500 shadow-sm">
                [ your photo ]
              </div>
            )}
            <p className="max-w-[540px] text-[17px] leading-[1.65] text-pretty text-neutral-400">
              {about.body}
            </p>
          </div>
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
