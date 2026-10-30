import { achievements, certifications, education, jobs } from "@/content";
import { SectionHeading } from "./SectionHeading";

const SUBHEAD = "mb-5 text-[12px] leading-[1.55] font-normal tracking-[.12em] text-neutral-500 uppercase";

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
              <h3 className="text-[24px] leading-[1.3] font-medium tracking-[-.02em]">{job.role}</h3>
              <span className="text-[15px] text-accent-300">
                {job.company}
                {job.location && <span className="text-neutral-500"> · {job.location}</span>}
              </span>
            </div>
            <div className="flex flex-col gap-4 pt-[22px]">
              <p className="text-[16px] leading-[1.6] text-pretty text-neutral-400">{job.description}</p>
              {job.tags && (
                <ul aria-label="Tools used" className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-[6px] bg-neutral-800 px-[10px] py-1 text-[12px] whitespace-nowrap text-neutral-100"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-[clamp(48px,7vw,96px)] grid gap-x-[clamp(32px,5vw,72px)] gap-y-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div data-reveal>
          <h3 className={SUBHEAD}>Education</h3>
          <div className="flex flex-col gap-4">
          {education.map((ed) => (
            <article
              key={ed.degree}
              className="card card-quote relative flex flex-col gap-3 overflow-hidden p-7"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-[radial-gradient(circle,rgba(145,132,217,.22),transparent_70%)]"
              />
              <span className="text-[13px] text-neutral-500">{ed.when}</span>
              <h4 className="text-[22px] leading-[1.25] font-medium tracking-[-.02em]">{ed.degree}</h4>
              <p className="text-[15px] leading-[1.5] text-accent-300">
                {ed.school}
                <span className="block text-[13px] text-neutral-500">{ed.location}</span>
              </p>
              <p className="text-[15px] leading-[1.6] text-pretty text-neutral-400">{ed.detail}</p>
            </article>
          ))}
          </div>
        </div>

        <div data-reveal>
          <h3 className={SUBHEAD}>Achievements</h3>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-4">
            {achievements.map((a) => (
              <li key={a.title} className="card card-quote flex flex-col gap-2 p-6">
                <span className="text-[clamp(26px,2.6vw,34px)] leading-none font-medium tracking-[-.03em] text-accent-300">
                  {a.figure}
                </span>
                <h4 className="mt-2 text-[16px] leading-[1.3] font-medium">{a.title}</h4>
                <p className="text-[14px] leading-[1.55] text-pretty text-neutral-400">{a.detail}</p>
              </li>
            ))}
          </ul>

          <h3 className={`${SUBHEAD} mt-12`}>Certifications</h3>
          <ul className="flex flex-col">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="rule-fade-bottom flex items-center justify-between gap-4 py-[14px]"
              >
                <span className="flex items-center gap-3 text-[15px] text-text">
                  <span aria-hidden="true" className="diamond" />
                  {c.name}
                </span>
                <span className="shrink-0 text-[13px] text-neutral-500">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
