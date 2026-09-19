import { site, socials } from "@/data/resume";

/**
 * Person schema (schema.org / JSON-LD).
 * Boosts SEO surfaces — knowledge panels, sitelinks, rich results.
 */
export function PersonStructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.title,
    description: site.description,
    image: `${site.url}${site.ogImage}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.location,
    },
    sameAs: socials
      .filter((s) => s.platform !== "email")
      .map((s) => s.url),
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "Docker",
      "AWS",
      "BullMQ",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/** WebSite schema — gives Google a clean handle on the site name + search action. */
export function WebsiteStructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} — Portfolio`,
    url: site.url,
    description: site.description,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
