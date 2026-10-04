import { testimonials } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section
      aria-labelledby="quotes-title"
      className="relative z-1 px-(--page-x) pb-(--section-y)"
    >
      <SectionHeading
        id="quotes-title"
        kicker="04 — Kind words"
        title="What people say."
        className="mb-10"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        {testimonials.map((quote) => (
          <figure
            key={quote.text}
            data-reveal
            className="card card-quote flex flex-col justify-between gap-7 p-7"
          >
            <blockquote className="text-[18px] leading-[1.55] text-pretty text-neutral-200">
              <span
                aria-hidden="true"
                className="mr-1 align-[-.3em] text-[28px] leading-[0] text-accent"
              >
                “
              </span>
              {quote.text}
            </blockquote>
            <figcaption className="flex items-center gap-3 text-[14px]">
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-full bg-accent-900 text-[13px] text-accent-300"
              >
                {quote.initials}
              </span>
              <span className="flex flex-col">
                <span className="font-medium text-text">{quote.name}</span>
                <span className="text-[13px] text-neutral-500">{quote.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
