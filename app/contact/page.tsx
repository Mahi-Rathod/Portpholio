import type { Metadata } from "next";
import { ContactEmailCta } from "@/components/ContactEmailCta";
import { SectionHeader } from "@/components/SectionHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/resume";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Open to full-stack engineering roles and product collaborations.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact · ${site.name}`,
    description: `Get in touch with ${site.name} — full-stack software engineer.`,
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <article className="container py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr,1.4fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something useful."
            description="Open to full-stack roles and product collaborations. Hiring teams usually reach me by email."
          />
          <div className="mt-10 space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block font-display text-lg text-foreground hover:text-primary"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Elsewhere
              </p>
              <SocialLinks className="mt-3" showLabels />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Status
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-foreground/85">
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 rounded-full bg-emerald-400"
                />
                Available for full-time and contract work
              </p>
            </div>
          </div>
        </div>

        <ContactEmailCta />
      </div>
    </article>
  );
}
