import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/data/resume";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected engineering projects by ${site.name} — full-stack platforms, automation tools, and shipped products built with React, Next.js, and Node.js.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects · ${site.name}`,
    description: `Case studies and shipped projects by ${site.name}.`,
    url: `${site.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <article className="container py-32">
      <SectionHeader
        eyebrow="Projects"
        title="Things I've designed, built, and shipped."
        description="Filter by category to drill into full-stack, frontend, backend, and open-source work. Each card links to the source repo or live deployment when available."
      />
      <section className="mt-12">
        <ProjectsGrid />
      </section>
    </article>
  );
}
