import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gmailComposeUrl, hiringEmail, site } from "@/data/resume";

/** Gmail compose CTA with a hiring-manager draft — no form backend. */
export function ContactEmailCta() {
  return (
    <aside className="flex flex-col justify-between rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          For hiring managers
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          Start a conversation in Gmail.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Opens Gmail with a hiring outreach draft already filled in.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-background/50 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
          <p>
            <span className="text-foreground/70">To</span> {site.email}
          </p>
          <p className="mt-2">
            <span className="text-foreground/70">Subject</span> {hiringEmail.subject}
          </p>
          <pre className="mt-4 whitespace-pre-wrap font-mono text-[11px] text-foreground/80">
            {hiringEmail.body}
          </pre>
        </div>
      </div>

      <div className="mt-8">
        <Button asChild size="lg" className="group">
          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open a Gmail draft to Mahesh Rathod"
          >
            <Mail />
            Email in Gmail
            <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </aside>
  );
}
