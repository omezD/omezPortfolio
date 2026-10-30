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
  /** Show a live contribution graph (ghchart.rshah.org) in the GitHub card. */
  githubGraph: boolean;
  /** Show the "Kind words" section. Turn on once the quotes are real. */
  testimonials: boolean;
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
  /** Portrait photo, 3:4. Leave out to show the placeholder slot. */
  photo?: SiteImage;
  /** Small glass chip over the photo. */
  photoBadge?: { label: string; value: string };
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Job {
  when: string;
  role: string;
  company: string;
  /** e.g. "Remote" or "Jabalpur". */
  location?: string;
  description: string;
  tags?: string[];
}

export interface Education {
  when: string;
  degree: string;
  school: string;
  location: string;
  detail: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Achievement {
  /** Big figure, e.g. "400+". */
  figure: string;
  title: string;
  detail: string;
}

export interface GithubProfile {
  username: string;
  name: string;
  bio: string;
  /** Saved locally so the page doesn't depend on GitHub being reachable. */
  avatar: SiteImage;
  publicRepos: number;
  location: string;
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
  tagline: "Software Engineer · Web & AI",
  title: "Amit Das — Software Engineer, Web & AI",
  description:
    "Amit Das is a Digital Specialist Engineer at Infosys and a CSE '26 graduate of IIITDM Jabalpur, building Java and Spring Boot microservices, Angular and React frontends, and generative AI features with Spring AI and RAG.",
  email: "das.amitt25@gmail.com",
  heroWord: "BUILD",
  availability: "DSE @ Infosys · open to freelance projects",
  roles: [
    "Spring Boot microservices.",
    "RAG apps with Spring AI.",
    "Angular & React frontends.",
    "GenAI features that ship.",
  ],
};

export const links: Links = {
  linkedin: "https://www.linkedin.com/in/amit-das-1b177324a/",
  github: "https://github.com/omezD",
  // TODO: drop a PDF in /public (e.g. /resume.pdf) and point this at it.
  // While it's "#", the Résumé link is hidden.
  resume: "#",
};

export const features: Features = {
  cursorGlow: true,
  marquee: true,
  available: true,
  scrollReveal: true,
  githubGraph: true,
  // Off until the quotes below are real ones from real people.
  testimonials: false,
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
  "Microservices",
  "Angular",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
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
    "I build software that holds up: scalable backends, fast frontends, and AI features that actually help people.",
  body: "I'm a Digital Specialist Engineer at Infosys and a CSE '26 graduate of IIITDM Jabalpur. I work across the whole lifecycle, from requirements and design to development, testing, debugging and deployment: Java and Spring Boot microservices, Angular and React frontends, and AI applications built on Spring AI, RAG and LLMs. I'm most interested in where AI meets software engineering, and how to turn it into practical, scalable products.",
  photo: {
    src: "/about/amit.webp",
    alt: "Amit Das standing on a campus lawn in front of a building with tall white columns.",
  },
  photoBadge: { label: "Now", value: "DSE @ Infosys, Bangalore" },
};

export const stackGroups: StackGroup[] = [
  { label: "Languages", items: ["Java", "TypeScript", "JavaScript", "Python", "C++", "SQL"] },
  { label: "Backend", items: ["Spring Boot", "Spring Cloud", "Microservices", "Node.js", "Express", "REST APIs"] },
  { label: "Frontend", items: ["Angular", "React", "Next.js", "Tailwind CSS"] },
  { label: "AI", items: ["Spring AI", "RAG", "LLMs", "Prompt engineering", "Vector databases", "Gemini"] },
  { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { label: "Ship", items: ["Docker", "AWS", "Jenkins", "SonarQube", "Maven", "Git"] },
];

export const jobs: Job[] = [
  {
    when: "May 2026 — Present",
    role: "Digital Specialist Engineer",
    company: "Infosys",
    location: "Bangalore DC",
    description:
      "Building enterprise applications with Java 21, Spring Boot, Spring Cloud and Angular, including a microservices-based eLearning platform. Built Passport Sayaak, a RAG system on Spring AI: document splitting, embeddings, vector retrieval, query expansion and LLM answers. CI/CD with Jenkins, SonarQube and Artifactory; Docker and AWS (ECS, ECR).",
    tags: ["Java 21", "Spring Boot", "Spring AI", "RAG", "Angular", "Jenkins", "AWS"],
  },
  {
    when: "Apr 2025 — May 2025",
    role: "Software Engineer Intern",
    company: "Bluestock FinTech",
    location: "Remote",
    description:
      "Turned Figma designs into responsive, reusable React and Tailwind components, improving page load and render performance by 20%. Connected the UI to Express REST APIs with the backend team, making the app 25% more responsive.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Express", "Figma"],
  },
  {
    when: "Aug 2024 — Apr 2025",
    role: "Backend Developer, Fusion Portal",
    company: "FusionIIIT, IIITDM Jabalpur",
    location: "Jabalpur",
    description:
      "Built the notification service for the institute's ERP: 15+ REST APIs with sub-200ms latency, email-like inbox features, and PostgreSQL tuning that cut query time by 40%. Integrated it with 8 other module teams.",
    tags: ["Node.js", "Express", "PostgreSQL", "Next.js", "JWT"],
  },
];

export const education: Education[] = [
  {
    when: "Nov 2022 — Aug 2026",
    degree: "B.Tech, Computer Science and Engineering",
    school: "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
    location: "Jabalpur, Madhya Pradesh",
    detail:
      "CPI 7.7. Coursework in data structures and algorithms, operating systems, DBMS, computer networks, OOP and AI/ML.",
  },
  {
    when: "2020 — 2022",
    degree: "Higher Secondary (Class 12), PCM",
    school: "Prafullanagar Vidyamandir (HS)",
    location: "West Bengal",
    detail: "Physics, Chemistry and Mathematics. Class 10 from the same school in 2020.",
  },
];

export const certifications: Certification[] = [
  { name: "Google AI Essentials", issuer: "Google" },
  { name: "Advanced Computer Networks (Elite)", issuer: "NPTEL" },
  { name: "Object Oriented System Development Using UML, Java and Patterns", issuer: "NPTEL" },
  { name: "The Joy of Computing Using Python", issuer: "NPTEL" },
];

export const achievements: Achievement[] = [
  {
    figure: "400+",
    title: "LeetCode problems solved",
    detail: "Across core DSA patterns, with a peak contest rating of 1503 (OMEZ).",
  },
  {
    figure: "GRiD 7.0",
    title: "National semi-finalist",
    detail: "Reached the national semi-finals of Flipkart GRiD 7.0, a national-level technical competition.",
  },
  {
    figure: "10+",
    title: "Events led",
    detail: "As co-ordinator of the Business and Management Club, IIITDM Jabalpur (2022–2025).",
  },
];

export const githubProfile: GithubProfile = {
  username: "omezD",
  name: "Amit Das",
  bio: "Turning ideas into production-ready backends, dashboards and AI document assistants. Spring Boot · Angular · Spring AI.",
  avatar: { src: "/about/github-avatar.webp", alt: "GitHub avatar of omezD: a hooded developer at a laptop" },
  publicRepos: 20,
  location: "Bangalore, India",
};

/** Placeholders. Replace with real quotes, then set `features.testimonials` to true. */
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
