import Link from "next/link";
import { navItems, site } from "@/data/resume";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      role="contentinfo"
      className="mt-24 border-t border-border/60 bg-ink-soft/40"
    >
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <Link
            href="/"
            className="font-display text-lg font-semibold text-foreground"
          >
            {site.name}
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {site.tagline}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Based in {site.location}. Open to remote roles.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Sitemap
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Connect
          </h2>
          <SocialLinks className="mt-4" showLabels />
          <p className="mt-4 text-xs text-muted-foreground">
            <a
              href={`mailto:${site.email}`}
              className="hover:text-foreground"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. Crafted with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="font-mono">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 align-middle" />
            Available for new opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
