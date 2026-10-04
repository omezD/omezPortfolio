import { site } from "@/content";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#exp", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-6 bg-[rgba(22,24,38,.72)] px-(--page-x) py-4 backdrop-blur-[14px]">
      <a
        href="#top"
        className="mr-auto flex items-center gap-[10px] text-[16px] font-medium text-text hover:text-text"
      >
        <span
          aria-hidden="true"
          className="grid size-[30px] place-items-center rounded-md border border-accent text-[12px] tracking-[.04em] text-accent"
        >
          {site.initials}
        </span>
        {/* The name gives way to the nav on very narrow screens. */}
        <span className="max-[419px]:sr-only">{site.name}</span>
      </a>
      <nav
        aria-label="Primary"
        className="flex flex-wrap gap-[clamp(14px,2.4vw,30px)] text-[14px]"
      >
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className="text-neutral-400 hover:text-accent">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
