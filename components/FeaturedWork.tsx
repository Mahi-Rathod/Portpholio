"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import { fadeUp, stagger } from "@/lib/motion";

/** Compact preview of recent projects — used on the landing page. */
export function FeaturedWork() {
  const featured = projects.slice(0, 3);

  return (
    <section
      aria-labelledby="featured-heading"
      className="container py-20 sm:py-28"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Selected Work"
          title="Recent projects, briefly."
          description="A snapshot of products I've shipped — full case studies on the projects page."
        />
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
        >
          View all projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger(0.08)}
        className="mt-12 grid gap-5 md:grid-cols-3"
      >
        {featured.map((project) => (
          <motion.li
            key={project.id}
            variants={fadeUp}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(0,212,255,0.08), transparent 40%)",
              }}
            />
            <Badge variant="outline" className="self-start font-mono">
              {project.category}
            </Badge>
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.tagline}
            </p>
            <p className="mt-4 line-clamp-3 text-sm text-muted-foreground/90">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
