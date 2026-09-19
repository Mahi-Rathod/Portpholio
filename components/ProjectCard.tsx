"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/data/resume";

interface ProjectCardProps {
  project: Project;
  /** Highlight tech chips that match the active filter. */
  activeFilter?: string | null;
}

/** Editorial project card with tilt-on-hover and a glow border. */
export function ProjectCard({ project, activeFilter }: ProjectCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--x",
      `${((e.clientX - rect.left) / rect.width) * 100}%`,
    );
    e.currentTarget.style.setProperty(
      "--y",
      `${((e.clientY - rect.top) / rect.height) * 100}%`,
    );
  };

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgba(0,212,255,0.10), transparent 40%)",
        }}
      />

      <div className="flex flex-wrap items-start justify-between gap-3">
        <Badge variant="outline" className="font-mono">
          {project.category}
        </Badge>
        <div className="flex items-center gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live site for ${project.name}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-foreground">
        {project.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-5 space-y-2 text-sm">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-2.5">
            <span
              aria-hidden
              className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary"
            />
            <span className="text-foreground/85">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => {
            const matched =
              activeFilter && activeFilter.toLowerCase() === tech.toLowerCase();
            return (
              <li
                key={tech}
                className={
                  matched
                    ? "rounded-md bg-primary/15 px-2 py-0.5 font-mono text-[11px] font-medium text-primary ring-1 ring-primary/40"
                    : "rounded-md bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                }
              >
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.article>
  );
}
