import { jobs } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="exp"
      aria-labelledby="exp-title"
      className="relative z-1 px-(--page-x) py-(--section-y)"
    >
      <SectionHeading
        id="exp-title"
        kicker="03 — Experience"
        title="Where I've worked."
        className="mb-10"
      />
      <ol className="relative flex max-w-[1000px] flex-col pl-7">
        <li
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-1 w-px bg-linear-to-b from-accent via-divider via-30% to-transparent"
        />
        {jobs.map((job) => (
          <li
            key={`${job.when}-${job.role}`}
            data-reveal
            className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-10 gap-y-[10px] pt-6 pb-8"
          >
            <span
              aria-hidden="true"
              className="absolute top-[31px] -left-7 size-[9px] rounded-full border-[1.5px] border-accent bg-bg"
            />
            <div className="flex flex-col gap-[6px]">
              <span className="text-[13px] text-neutral-500">{job.when}</span>
              <h3 className="text-[24px] leading-[1.55] font-medium tracking-[-.02em]">{job.role}</h3>
              <span className="text-[15px] text-accent-300">{job.company}</span>
            </div>
            <p className="pt-[22px] text-[16px] leading-[1.6] text-pretty text-neutral-400">
              {job.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
