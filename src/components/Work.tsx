import Image from "next/image";
import type { CSSProperties } from "react";
import { links, projects, type Project } from "@/content";
import { externalProps } from "@/lib/external";
import { WorkMotion } from "./WorkMotion";

const TITLE = "Things I've built end-to-end.";

/** Inline CSS variables (stagger index, tint) without fighting React's style types. */
function vars(v: Record<string, string | number>) {
  return v as CSSProperties;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  // Stagger order for the entrance animation.
  let d = 0;

  return (
    <li className="project-slot" style={vars({ "--i": index })}>
      <article
        data-project
        aria-labelledby={`project-${index}`}
        className="project-card"
        style={vars({ "--tint": project.tint })}
      >
        <div aria-hidden="true" className="project-spot" />
        <div aria-hidden="true" className="project-dim" />

        <div className="project-body">
          <div className="pj-in flex items-center gap-4" style={vars({ "--d": d++ })}>
            <span aria-hidden="true" className="project-num">
              {num}
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-neutral-500">
              <span>
                {project.kind} · {project.year}
              </span>
              <span className="inline-flex items-center gap-[6px] rounded-full bg-accent-900 px-[9px] py-[2px] text-[12px] text-accent-200">
                <span
                  aria-hidden="true"
                  className={`size-[6px] rounded-full bg-accent ${project.live ? "animate-pulse-dot" : ""}`}
                />
                {project.status}
              </span>
            </div>
          </div>

          <h3
            id={`project-${index}`}
            className="pj-line text-[clamp(32px,3.8vw,52px)] leading-[1.02] font-medium tracking-[-.04em]"
            style={vars({ "--d": d++ })}
          >
            <span>{project.name}</span>
          </h3>

          <p
            className="pj-in max-w-[540px] text-[16px] leading-[1.6] text-pretty text-neutral-300"
            style={vars({ "--d": d++ })}
          >
            {project.description}
          </p>

          <dl className="grid grid-cols-3 gap-3">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="pj-in project-stat flex flex-col-reverse justify-end gap-1"
                style={vars({ "--d": d++ })}
              >
                <dt className="text-[12px] leading-[1.35] text-neutral-500">{stat.label}</dt>
                <dd className="text-[clamp(24px,2.4vw,32px)] leading-none font-medium tracking-[-.03em] text-text tabular-nums">
                  <span data-count={stat.value}>{stat.value}</span>
                  {stat.suffix && <span className="text-accent-300">{stat.suffix}</span>}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-[10px]">
            <span
              className="pj-in text-[11px] tracking-[.1em] text-neutral-500 uppercase"
              style={vars({ "--d": d++ })}
            >
              How it works
            </span>
            <ol className="project-flow flex flex-wrap items-center gap-[6px] text-[13px]">
              {project.flow.map((step, k) => (
                <li
                  key={step}
                  className="inline-flex items-center gap-[6px]"
                  style={vars({ "--k": k, "--d": d })}
                >
                  <span className="flow-chip rounded-[6px] bg-accent-900 px-[10px] py-[5px] whitespace-nowrap text-accent-200">
                    {step}
                  </span>
                  {k < project.flow.length - 1 && (
                    <span aria-hidden="true" className="flow-arrow text-accent-600">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <ul aria-label="Built with" className="flex flex-wrap gap-2">
            {project.tags.map((tag, k) => (
              <li
                key={tag}
                className="pj-tag rounded-[6px] bg-neutral-800 px-[10px] py-1 text-[12px] whitespace-nowrap text-neutral-100"
                style={vars({ "--k": k, "--d": d + 1 })}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="pj-in flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium" style={vars({ "--d": d + 2 })}>
            {project.liveUrl && (
              <a href={project.liveUrl} {...externalProps(project.liveUrl)} className="project-link">
                Live site <span aria-hidden="true">↗</span>
                <span className="sr-only"> of {project.name}</span>
              </a>
            )}
            <a
              href={project.sourceUrl}
              {...externalProps(project.sourceUrl)}
              className="project-link text-neutral-300 hover:text-accent-300"
            >
              Source on GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> for {project.name}</span>
            </a>
          </div>
        </div>

        <div className="project-visual">
          <div aria-hidden="true" className="project-halo" />
          <div className="browser" data-tilt>
            <div aria-hidden="true" className="browser-bar">
              <span className="browser-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="browser-url">{project.displayUrl}</span>
            </div>
            <div className="browser-screen">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 680px, 100vw"
              />
              <span aria-hidden="true" className="browser-shine" />
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export function Work() {
  const words = TITLE.split(" ");

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="work relative z-1 px-(--page-x) py-(--section-y)"
    >
      <WorkMotion />
      <div aria-hidden="true" className="work-ghost">
        Selected work — Selected work —
      </div>

      <div className="work-head relative mb-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
        <div className="flex flex-col gap-3">
          <span className="kicker">01 — Selected work</span>
          <h2
            id="work-title"
            aria-label={TITLE}
            className="max-w-[820px] text-[clamp(40px,5.5vw,76px)] leading-none font-medium tracking-[-.04em]"
          >
            {words.map((word, w) => (
              <span key={w} aria-hidden="true">
                <span className="word" style={vars({ "--w": w })}>
                  <span>{word}</span>
                </span>{" "}
              </span>
            ))}
          </h2>
        </div>
        <div className="work-meta flex flex-col items-start gap-2 text-[14px] text-neutral-400">
          <span>
            <span className="text-text tabular-nums">{String(projects.length).padStart(2, "0")}</span>{" "}
            projects · {[...new Set(projects.map((p) => p.year))].join(", ")}
          </span>
          <a href={links.github} {...externalProps(links.github)} className="project-link">
            Everything on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <ol className="project-list">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </ol>
    </section>
  );
}
