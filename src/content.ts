/**
 * All of the site's copy and data lives here. Edit this file to update the
 * portfolio; the components only read from it.
 *
 * Anything written `[like this]` or marked TODO is a placeholder.
 */

/* ── Types ──────────────────────────────────────────────────────────────── */

export interface SiteImage {
  /** Path under /public (e.g. "/projects/rag.webp") or a full URL. */
  src: string;
  alt: string;
}

export interface Site {
  name: string;
  /** Monogram shown in the header and favicon. */
  initials: string;
  /** Eyebrow above the name in the hero. */
  tagline: string;
  /** <title> and Open Graph title. */
  title: string;
  /** Meta description. */
  description: string;
  email: string;
  /** Giant outlined word behind the hero. */
  heroWord: string;
  availability: string;
  /** Phrases typed after "I build ". */
  roles: string[];
}

export interface Links {
  linkedin: string;
  github: string;
  resume: string;
}

export interface Features {
  /** Radial accent glow that follows the cursor. */
  cursorGlow: boolean;
  /** Scrolling tech strip under the hero. */
  marquee: boolean;
  /** "Open to work" pill in the hero. */
  available: boolean;
  /** Fade-and-rise sections on scroll. */
  scrollReveal: boolean;
  /** Replace the open-source slot with a live contribution graph for `links.github`. */
  githubGraph: boolean;
}

export interface HeroChip {
  label: string;
  value: string;
}

export interface Project {
  name: string;
  /** Category and year, e.g. "Generative AI · 2026". */
  kind: string;
  description: string;
  /** "How it works" steps, joined by arrows. */
  flow: string[];
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  /** Screenshot or demo GIF. Leave out to show the placeholder slot. */
  image?: SiteImage;
}

export interface About {
  statement: string;
  body: string;
  /** Leave out to show the placeholder slot. */
  photo?: SiteImage;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Job {
  when: string;
  role: string;
  company: string;
  description: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
}

/* ── Content ────────────────────────────────────────────────────────────── */

export const site: Site = {
  name: "Amit Das",
  initials: "AD",
  tagline: "Software Engineer · Web Developer",
  title: "Amit Das — Software Engineer & Web Developer",
  description:
    "Amit Das builds solid Java and Spring Boot backends, React and Angular frontends, and generative AI features with Spring AI and RAG.",
  email: "das.amitt25@gmail.com",
  heroWord: "BUILD",
  availability: "Open to full-time roles & freelance work",
  roles: [
    "Spring Boot APIs.",
    "RAG apps with Spring AI.",
    "React & Angular frontends.",
    "GenAI features that ship.",
  ],
};

export const links: Links = {
  // TODO: these two URLs are guesses from the design. Replace with your real profiles.
  linkedin: "https://linkedin.com/in/amit",
  github: "https://github.com/amit",
  // TODO: drop a PDF in /public (e.g. /resume.pdf) and point this at it.
  resume: "#",
};

export const features: Features = {
  cursorGlow: true,
  marquee: true,
  available: true,
  scrollReveal: true,
  githubGraph: false,
};

/** Exactly three chips float around the portrait. */
export const heroChips: [HeroChip, HeroChip, HeroChip] = [
  { label: "Backend", value: "Java · Spring Boot" },
  { label: "Generative AI", value: "RAG · Spring AI" },
  { label: "Frontend", value: "React · Angular" },
];

export const marqueeItems: string[] = [
  "Java",
  "Spring Boot",
  "Spring AI",
  "RAG",
  "Generative AI",
  "React",
  "Angular",
  "JavaScript",
  "Web Design",
  "Deployment",
];

export const projects: Project[] = [
  {
    name: "RAG Chatbot",
    kind: "Generative AI · 2026",
    description:
      "A chatbot that answers from your own documents. It splits and embeds uploaded files, pulls the most relevant passages for each question, and has the LLM answer with sources cited, all through Spring AI.",
    flow: ["Docs", "Embeddings", "Vector store", "Spring AI", "Cited answer"],
    tags: ["Java", "Spring Boot", "Spring AI", "RAG", "React"],
    liveUrl: "#", // TODO
    sourceUrl: "#", // TODO
  },
  {
    name: "Employee Management SaaS",
    kind: "Full-stack SaaS · 2025",
    description:
      "A multi-tenant HR platform for employees, departments, attendance and roles. It has secure role-based access, a REST API and a responsive admin dashboard.",
    flow: ["Angular UI", "REST API", "Spring Security", "Database", "Deploy"],
    tags: ["Java", "Spring Boot", "Angular", "REST", "SQL"],
    liveUrl: "#", // TODO
    sourceUrl: "#", // TODO
  },
];

export const about: About = {
  statement:
    "I build software that holds up: solid Java backends, fast frontends, and AI features that actually help people.",
  body: "Most of my work runs on Spring Boot, React and Angular. Lately I've been building retrieval-augmented generation with Spring AI, so apps can answer questions from real company data. I do the whole job, from design to debugging to deployment.",
};

export const stackGroups: StackGroup[] = [
  { label: "Backend", items: ["Java", "Spring Boot", "REST APIs"] },
  { label: "Frontend", items: ["React", "Angular", "JavaScript", "Web Design"] },
  { label: "AI", items: ["Generative AI", "RAG", "Spring AI"] },
  { label: "Ship", items: ["Debugging", "Deployment"] },
];

export const jobs: Job[] = [
  {
    when: "2024 — Present",
    role: "Software Engineer",
    company: "[Company name]",
    description:
      "Build full-stack features with Spring Boot and React/Angular. Lead GenAI work, including RAG pipelines on Spring AI.",
  },
  {
    when: "2022 — 2024",
    role: "Web Developer",
    company: "[Company name]",
    description:
      "Designed and built responsive web apps, connected REST APIs, and owned debugging and production deployments.",
  },
];

export const testimonials: Testimonial[] = [
  {
    text: "Amit took our idea from a rough spec to a working product in weeks. Clean code and clear communication the whole way.",
    name: "[Client name]",
    role: "[Role, Company]",
    initials: "C1",
  },
  {
    text: "He knows the backend and frontend equally well. The RAG assistant he built is now used across our support team.",
    name: "[Manager name]",
    role: "[Role, Company]",
    initials: "M2",
  },
  {
    text: "Reliable, fast, and he actually cares about the details. I would hire him again without a second thought.",
    name: "[Colleague name]",
    role: "[Role, Company]",
    initials: "P3",
  },
];
