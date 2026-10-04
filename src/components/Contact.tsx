import { links, site } from "@/content";
import { externalProps } from "@/lib/external";
import { CopyEmailButton } from "./CopyEmailButton";

export function Contact() {
  const footerLinks = [
    { href: `mailto:${site.email}`, label: "Email", arrow: false },
    { href: links.linkedin, label: "LinkedIn", arrow: true },
    { href: links.github, label: "GitHub", arrow: true },
    { href: links.resume, label: "Résumé", arrow: true },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-1 px-(--page-x) pt-[clamp(80px,11vw,160px)] pb-10"
      style={{
        background:
          "radial-gradient(900px 500px at 10% 100%,rgba(93,82,148,.35),transparent 70%)",
      }}
    >
      <p>
        <span className="kicker">05 — Contact</span>
      </p>
      <h2
        id="contact-title"
        data-reveal
        className="mt-5 mb-10 text-[clamp(56px,10vw,160px)] leading-[.92] font-medium tracking-[-.055em]"
      >
        Let&apos;s build
        <br />
        <span className="text-accent">something great.</span>
      </h2>
      <CopyEmailButton email={site.email} />

      <footer>
        <div aria-hidden="true" className="rule-fade mt-[clamp(80px,10vw,140px)]" />
        <div className="flex flex-wrap justify-between gap-5 pt-6 text-[14px] text-neutral-500">
          <ul className="flex flex-wrap gap-7">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} {...externalProps(link.href)}>
                  {link.label}
                  {link.arrow && <span aria-hidden="true"> ↗</span>}
                </a>
              </li>
            ))}
          </ul>
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
        </div>
      </footer>
    </section>
  );
}
