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

export interface ProjectStat {
  /** Counted up from 0 when the card scrolls in, so keep it a whole number. */
  value: number;
  /** Shown after the number, e.g. "+" or "%". */
  suffix?: string;
  label: string;
}

export interface Project {
  name: string;
  /** Category, e.g. "Restaurant website". */
  kind: string;
  year: string;
  /** Pill next to the category, e.g. "Live" or "Case study". */
  status: string;
  /** Pulse the status dot (use for projects that are live). */
  live?: boolean;
  description: string;
  /** Exactly three headline numbers. */
  stats: [ProjectStat, ProjectStat, ProjectStat];
  /** "How it works" steps, joined by arrows. */
  flow: string[];
  tags: string[];
  /** Leave out when there's no public deployment. */
  liveUrl?: string;
  sourceUrl: string;
  /** Screenshot, ideally 1440x900. Shown in a browser frame. */
  image: SiteImage;
  /** Address shown in the browser frame's bar. */
  displayUrl: string;
  /** Glow colour behind the screenshot, taken from the project's own brand. */
  tint: string;
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
  // TODO: the LinkedIn URL is a guess from the design. Replace it with your real profile.
  linkedin: "https://linkedin.com/in/amit",
  github: "https://github.com/omezD",
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
    name: "Plumeria Café",
    kind: "Restaurant website",
    year: "2026",
    status: "Live",
    live: true,
    description:
      "Website for a real café in Habra, West Bengal. The hero is a scroll-driven walk-in: 120 photo frames take you from the street sign, through the doors, to the counter. Then a real menu, gallery, reviews and a contact form that opens WhatsApp.",
    stats: [
      { value: 120, label: "frame scroll-scrubbed hero" },
      { value: 58, label: "menu items from the printed cards" },
      { value: 14, label: "dishes in the photo gallery" },
    ],
    flow: ["Scroll", "Canvas frames", "GSAP ScrollTrigger", "Menu & gallery", "WhatsApp"],
    tags: ["React 19", "Vite", "Tailwind CSS", "GSAP", "Lenis", "Netlify"],
    liveUrl: "https://plumeria-cafe-habra.netlify.app",
    sourceUrl: "https://github.com/omezD/Plumeria_Cafe",
    image: {
      src: "/projects/plumeria.webp",
      alt: "Plumeria Café home page: the lit café sign over the headline “Where every plate blooms.”",
    },
    displayUrl: "plumeria-cafe-habra.netlify.app",
    tint: "#e8a15a",
  },
  {
    name: "Learnexa",
    kind: "E-learning platform",
    year: "2026",
    status: "Case study",
    description:
      "A full e-learning platform for learners, faculty and admins. Faculty build courses with videos, PDFs and quizzes; admins approve and publish them; learners enroll, track progress and earn PDF certificates.",
    stats: [
      { value: 8, label: "Spring Boot services behind a gateway" },
      { value: 3, label: "roles: learner, faculty, admin" },
      { value: 6, label: "MySQL databases, one per service" },
    ],
    flow: ["Angular", "API gateway (JWT)", "Eureka", "Microservices", "MySQL"],
    tags: ["Java 17", "Spring Boot", "Spring Cloud", "Angular 20", "TypeScript", "MySQL"],
    sourceUrl: "https://github.com/omezD/Learnexa",
    image: {
      src: "/projects/learnexa.webp",
      alt: "Learnexa landing page: “Learn Today. Lead Tomorrow” with a course search bar.",
    },
    displayUrl: "localhost:4200",
    tint: "#2dd4bf",
  },
  {
    name: "Workvaro",
    kind: "HR & workforce SaaS",
    year: "2026",
    status: "Client project",
    description:
      "An employee management system for a growing company: people directory, leave and approvals, attendance with check-in, holidays and an org chart. Security first, with Keycloak sign-in, two-factor auth and encrypted bank details.",
    stats: [
      { value: 97, label: "automated API tests" },
      { value: 85, label: "requests in the Bruno collection" },
      { value: 256, suffix: "-bit", label: "AES-GCM field encryption" },
    ],
    flow: ["Angular", "Keycloak SSO", "Spring Cloud Gateway", "Services", "PostgreSQL"],
    tags: ["Java 17", "Spring Boot", "Keycloak", "Angular", "PostgreSQL", "Docker"],
    sourceUrl: "https://github.com/omezD/Workvaro",
    image: {
      src: "/projects/workvaro.webp",
      alt: "Workvaro manager dashboard: check-in clock, leave balances, team status and pending approvals.",
    },
    displayUrl: "localhost:4200/app/dashboard",
    tint: "#4ade80",
  },
  {
    name: "Tripzo",
    kind: "Travel stays marketplace",
    year: "2026",
    status: "Live",
    live: true,
    description:
      "An Airbnb-style marketplace where hosts list stays and travellers browse and review them. It has sign-up and login, Joi validation on every write, and an “Ask AI” trip planner powered by Google Gemini.",
    stats: [
      { value: 4, label: "Express routers: listings, reviews, users, AI" },
      { value: 3, label: "Mongoose models with Joi validation" },
      { value: 12, label: "server-rendered EJS views" },
    ],
    flow: ["EJS views", "Express", "Passport auth", "Mongoose", "MongoDB"],
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Passport", "Gemini AI"],
    liveUrl: "https://tripzo-app.onrender.com",
    sourceUrl: "https://github.com/omezD/Tripzo",
    image: {
      src: "/projects/tripzo.webp",
      alt: "Tripzo home page: a beach at sunset behind the headline “Travel. Stay. Belong.”",
    },
    displayUrl: "tripzo-app.onrender.com",
    tint: "#ff5a5f",
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
