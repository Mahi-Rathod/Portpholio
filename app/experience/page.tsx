import type { Metadata } from "next";
import { ExperienceFlow } from "@/components/ExperienceFlow";
import { SectionHeader } from "@/components/SectionHeader";
import { experiences, site } from "@/data/resume";

export const metadata: Metadata = {
  title: "Experience",
  description: `Career timeline of ${site.name} — from RFQ automation at Atomic Loops to founding Hindutva Digitals.`,
  alternates: { canonical: "/experience" },
  openGraph: {
    title: `Experience · ${site.name}`,
    description: `Career journey and engineering experience of ${site.name}.`,
    url: `${site.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <article className="container py-32">
      <SectionHeader
        eyebrow="Experience"
        title="A career, mapped end-to-end."
        description="From RFQ automation at Atomic Loops to a news platform I founded and shipped end-to-end."
      />

      <section aria-label="Career timeline" className="mt-12">
        <ExperienceFlow />
      </section>

      {/* Server-rendered copy for crawlers and assistive tech. The graph is client-only. */}
      <ol className="sr-only">
        {experiences.map((exp) => (
          <li key={exp.id}>
            <h2>
              {exp.role} @ {exp.company}
            </h2>
            <p>
              {exp.type}. {exp.startDate} — {exp.endDate}. {exp.location}.
            </p>
            <p>{exp.summary}</p>
            <ul>
              {exp.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </article>
  );
}
