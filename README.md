# Amit Das — Portfolio

Single-page portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4, from the Nocturne design handoff.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` makes the production build; `npm run lint` runs ESLint.

## Edit the content

Everything you'd want to change lives in [`src/content.ts`](src/content.ts): name and tagline, typed roles, projects, toolkit, jobs, testimonials, links and feature flags. It is fully typed, so a missing field shows up as an editor error.

Still to fill in (search for `TODO`):

- `links.resume` is `#`, so the Résumé link is hidden. Drop a PDF in `public/` and point it there.
- Testimonials are placeholders and the section is switched off (`features.testimonials: false`). Add real quotes, ideally from LinkedIn recommendations, then switch it on.
- `githubProfile.publicRepos` is a fixed number; update it now and then.

Images go in `public/` and are referenced by path, e.g. `image: { src: "/projects/rag.webp", alt: "…" }`.

The GitHub card in the open-source band uses `githubProfile`; `features.githubGraph` adds a live contribution graph from ghchart.rshah.org.

## Where things are

| Path | What |
| --- | --- |
| `src/content.ts` | All copy and data |
| `src/app/globals.css` | Design tokens (`@theme`) and the few hand-written classes |
| `src/components/` | One component per section, plus the interactive pieces |
| `src/app/icon.svg`, `opengraph-image.tsx` | Favicon and social card |
| `public/portrait/` | The three portrait poses (WebP) |

Motion (marquee, parallax, typing, scroll reveals, pose cycling) is switched off under `prefers-reduced-motion`.

## Deploy to Vercel

1. Push this folder to its own GitHub repository.
2. Import the repository at vercel.com/new. The defaults are correct; no configuration is needed.
3. Optional: set `NEXT_PUBLIC_SITE_URL` to your custom domain (see `.env.example`). Without it, the Vercel production domain is used for Open Graph tags, `robots.txt` and the sitemap.
