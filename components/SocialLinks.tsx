import { BookOpen, Code2, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { socials, type SocialPlatform } from "@/data/resume";
import { cn } from "@/lib/utils";

const ICONS: Record<SocialPlatform, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  twitter: Twitter,
  leetcode: Code2,
  geeksforgeeks: BookOpen,
};

interface SocialLinksProps {
  className?: string;
  variant?: "default" | "ghost";
  showLabels?: boolean;
}

export function SocialLinks({
  className,
  variant = "default",
  showLabels = false,
}: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socials.map((social) => {
        const Icon = ICONS[social.platform];
        return (
          <li key={social.platform}>
            <a
              href={social.url}
              target={social.platform === "email" ? undefined : "_blank"}
              rel={social.platform === "email" ? undefined : "noopener noreferrer"}
              aria-label={`${social.label} — ${social.handle}`}
              className={cn(
                "group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all",
                variant === "default"
                  ? "border border-border bg-card/40 text-muted-foreground hover:border-primary/40 hover:bg-card hover:text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:text-primary" />
              {showLabels && <span>{social.label}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
