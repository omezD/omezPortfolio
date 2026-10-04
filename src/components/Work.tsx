import Image from "next/image";
import { projects, type Project } from "@/content";
import { externalProps } from "@/lib/external";
import { SectionHeading } from "./SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-reveal
      className="card card-project grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-[clamp(24px,4vw,56px)] p-[clamp(20px,3vw,36px)]"
    >
      <div className="flex flex-col justify-between gap-[22px]">
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center gap-3 text-[13px] text-neutral-500">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
            <span>{project.kind}</span>
          </div>
          <h3 className="text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-.035em]">
            {project.name}
          </h3>
          <p className="max-w-[520px] text-[17px] leading-[1.6] text-pretty text-neutral-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          <span className="text-[11px] tracking-[.1em] text-neutral-500 uppercase">How it works</span>
          <ol className="flex flex-wrap items-center gap-[6px] text-[13px]">
            {project.flow.map((step, i) => (
              <li key={step} className="inline-flex items-center gap-[6px]">
                <span className="rounded-[6px] bg-accent-900 px-[10px] py-[5px] whitespace-nowrap text-accent-200">
                  {step}
                </span>
                <span aria-hidden="true" className="text-accent-600">
                  {i < project.flow.length - 1 ? "→" : ""}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <ul aria-label="Built with" className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[6px] bg-neutral-800 px-[10px] py-1 text-[12px] whitespace-nowrap text-neutral-100"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-5 text-[14px] font-medium">
          <a href={project.liveUrl} {...externalProps(project.liveUrl)}>
            Live demo <span aria-hidden="true">↗</span>
            <span className="sr-only"> of {project.name}</span>
          </a>
          <a
            href={project.sourceUrl}
            {...externalProps(project.sourceUrl)}
            className="text-neutral-300 hover:text-accent-300"
          >
            Source on GitHub <span aria-hidden="true">↗</span>
            <span className="sr-only"> for {project.name}</span>
          </a>
        </div>
      </div>

      <div className="slot relative min-h-[300px] overflow-hidden rounded-md shadow-sm">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1000px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span className="px-4 text-[12px] text-neutral-500">
            [ {project.name} — screenshot / demo GIF ]
          </span>
        )}
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative z-1 px-(--page-x) py-(--section-y)"
    >
      <SectionHeading
        id="work-title"
        kicker="01 — Selected work"
        title="Things I've built end-to-end."
        className="mb-12"
        titleClassName="max-w-[820px]"
      />
      <div className="flex flex-col gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
