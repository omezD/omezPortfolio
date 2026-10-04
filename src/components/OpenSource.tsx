import { features, links } from "@/content";
import { externalProps } from "@/lib/external";

export function OpenSource() {
  const username = links.github.replace(/\/+$/, "").split("/").pop();

  return (
    <section
      aria-labelledby="oss-title"
      className="relative z-1 px-(--page-x) pb-(--section-y)"
    >
      <div
        data-reveal
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-8 rounded-lg p-[clamp(28px,4vw,56px)]"
        style={{
          background:
            "linear-gradient(135deg,var(--color-section),var(--color-section-deep) 60%,var(--color-surface))",
        }}
      >
        <div className="flex flex-col gap-4">
          <span className="kicker text-accent-300">Open source</span>
          <h2
            id="oss-title"
            className="text-[clamp(32px,4vw,54px)] leading-[1.05] font-medium tracking-[-.035em]"
          >
            I build in public.
          </h2>
          <p className="max-w-[440px] text-[17px] leading-[1.6] text-neutral-300">
            Experiments, side projects and the source for everything on this page.
          </p>
          <a
            href={links.github}
            {...externalProps(links.github)}
            className="inline-flex self-start rounded-md border border-accent-300 px-5 py-3 text-[15px] font-medium whitespace-nowrap text-accent-200 hover:bg-[rgba(210,206,253,.1)] hover:text-accent-100"
          >
            Follow on GitHub&nbsp;<span aria-hidden="true">↗</span>
          </a>
        </div>

        {features.githubGraph && username ? (
          <div className="overflow-x-auto rounded-md bg-[rgba(22,24,38,.35)] p-4">
            {/* eslint-disable-next-line @next/next/no-img-element -- remote SVG, nothing for next/image to optimize */}
            <img
              src={`https://ghchart.rshah.org/9184d9/${username}`}
              alt={`GitHub contribution graph for ${username}`}
              loading="lazy"
              className="w-full min-w-[520px]"
            />
          </div>
        ) : (
          <div className="slot slot-light min-h-[180px] rounded-md px-4 text-[12px] text-neutral-400">
            [ GitHub contribution graph / pinned repos ]
          </div>
        )}
      </div>
    </section>
  );
}
