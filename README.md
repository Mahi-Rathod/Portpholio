# Mahesh Rathod — Portfolio

Production-ready Next.js 14 portfolio for **Mahesh Rathod**, full-stack software engineer.
Built with the App Router, TypeScript (strict), Tailwind CSS, shadcn/ui primitives,
Framer Motion, and React Flow / XYFlow for the interactive experience timeline.

## Stack

- **Framework**: Next.js 14 (App Router, Server Components by default)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS + design tokens (`app/globals.css`)
- **UI primitives**: shadcn/ui (Button, Card, Input, Textarea, Badge, Label, Form)
- **Animations**: Framer Motion
- **Visualization**: `@xyflow/react` (formerly React Flow)
- **Forms**: `react-hook-form` + `zod`
- **Fonts**: Syne (display), DM Sans (body), JetBrains Mono (mono) via `next/font`
- **SEO**: Metadata API + JSON-LD `Person` & `WebSite` schema, sitemap, robots

## Pages

| Route | Description |
| ----- | ----------- |
| `/`            | Hero, About, featured projects |
| `/experience`  | Interactive React Flow timeline + accessible fallback list |
| `/projects`    | Filterable grid of shipped projects |
| `/skills`      | Categorized skill matrix with animated proficiency bars |
| `/contact`     | shadcn Form + react-hook-form + zod validation |

## Architecture

```
app/
  layout.tsx           ← root metadata, JSON-LD, fonts, navbar/footer shell
  page.tsx             ← landing (Hero + About + FeaturedWork)
  experience/page.tsx  ← React Flow timeline
  projects/page.tsx    ← filterable grid
  skills/page.tsx      ← skill categories
  contact/page.tsx     ← contact form
  sitemap.ts           ← /sitemap.xml
  robots.ts            ← /robots.txt
  not-found.tsx        ← 404
components/
  ui/                  ← shadcn primitives (button/card/input/textarea/badge/label/form)
  Hero.tsx
  About.tsx
  FeaturedWork.tsx
  ExperienceFlow.tsx   ← React Flow ("use client") + static fallback list
  ProjectCard.tsx      ← tilt/glow card
  ProjectsGrid.tsx     ← filter logic ("use client")
  SkillBadge.tsx
  SkillsGrid.tsx
  ContactForm.tsx      ← react-hook-form + zod
  Navbar.tsx           ← sticky, blur backdrop, mobile menu
  Footer.tsx
  ScrollProgressBar.tsx
  SocialLinks.tsx
  SectionHeader.tsx
  structured-data.tsx  ← JSON-LD Person & WebSite schema
data/
  resume.ts            ← single source of truth for all content (typed)
lib/
  utils.ts             ← `cn`, `slugify`, `formatDateRange`
  motion.ts            ← shared Framer Motion variants
  hooks/
    use-active-section.ts
    use-scroll-progress.ts
public/
  favicon.svg
  resume.pdf           ← drop in your real PDF
  og-image.png         ← 1200×630 OG card
```

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

### Scripts

| Command | What it does |
| ------- | ------------ |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with the Next.js core-web-vitals config |
| `npm run typecheck` | `tsc --noEmit` strict typecheck |

## Customizing content

All resume content — name, title, tagline, experience, projects, skills, socials —
lives in `data/resume.ts`. Edit there and every page updates automatically.

```ts
// data/resume.ts
export const site: SiteConfig = {
  name: "Mahesh Rathod",
  title: "Full-Stack Software Engineer",
  url: "https://maheshrathod.dev",
  // ...
};
```

## SEO

- Per-page `Metadata` exports with descriptive titles & descriptions
- Canonical URLs on every page
- Open Graph + Twitter Card metadata (consumes `public/og-image.png`)
- JSON-LD `Person` schema with `sameAs` to socials and `knowsAbout` for skills
- Auto-generated `/sitemap.xml` and `/robots.txt`
- Semantic HTML: `<main>`, `<article>`, `<section>`, single `<h1>` per page
- All decorative SVGs marked `aria-hidden`; descriptive `alt` text where applicable

## License

MIT — feel free to fork and adapt for your own portfolio.
