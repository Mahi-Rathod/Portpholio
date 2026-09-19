import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillsGrid } from "@/components/SkillsGrid";
import { site } from "@/data/resume";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical stack of ${site.name} — TypeScript, React, Next.js, Node.js, PostgreSQL, Redis, Prisma, Docker, AWS, BullMQ, and AI translation pipelines.`,
  alternates: { canonical: "/skills" },
  openGraph: {
    title: `Skills · ${site.name}`,
    description: `Technical skills and stack of ${site.name}.`,
    url: `${site.url}/skills`,
  },
};

export default function SkillsPage() {
  return (
    <article className="container py-32">
      <SectionHeader
        eyebrow="Skills"
        title="The stack I reach for, end-to-end."
        description="Grouped by layer — languages, frontend, backend, data, DevOps, testing, and AI automation. Proficiency reflects shipped, production work."
      />
      <section className="mt-16">
        <SkillsGrid />
      </section>
    </article>
  );
}
