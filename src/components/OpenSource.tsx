import Image from "next/image";
import { features, githubProfile, links } from "@/content";
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

        <a
          href={links.github}
          {...externalProps(links.github)}
          aria-label={`${githubProfile.name} on GitHub, @${githubProfile.username}`}
          className="gh-card group flex flex-col gap-5 rounded-lg bg-[rgba(22,24,38,.55)] p-[clamp(18px,2.4vw,26px)] text-text backdrop-blur-[8px] hover:text-text"
        >
          <div className="flex items-center gap-4">
            <span className="gh-avatar relative shrink-0">
              <Image
                src={githubProfile.avatar.src}
                alt=""
                width={160}
                height={160}
                sizes="72px"
                className="size-[72px] rounded-full object-cover"
              />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[20px] leading-tight font-medium tracking-[-.02em]">
                {githubProfile.name}
              </span>
              <span className="text-[14px] text-accent-300">@{githubProfile.username}</span>
              <span className="mt-1 text-[13px] text-neutral-500">
                {githubProfile.publicRepos} public repos · {githubProfile.location}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="ml-auto self-start text-[18px] text-accent transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
            >
              ↗
            </span>
          </div>
          <p className="text-[14px] leading-[1.6] text-pretty text-neutral-300">{githubProfile.bio}</p>
          {features.githubGraph && username && (
            <div className="flex flex-col gap-2">
              <span className="text-[11px] tracking-[.1em] text-neutral-500 uppercase">
                Contributions, last 12 months
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element -- remote SVG, nothing for next/image to optimize */}
              <img
                src={`https://ghchart.rshah.org/9184d9/${username}`}
                alt={`GitHub contribution graph for ${username}`}
                loading="lazy"
                className="gh-chart w-full"
              />
            </div>
          )}
        </a>
      </div>
    </section>
  );
}
