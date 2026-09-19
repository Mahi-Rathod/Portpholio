"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/resume";
import { fadeUp, stagger } from "@/lib/motion";

/**
 * Hero — animated, accessible landing block.
 * h1 holds the strong primary keyword ("Mahesh Rathod") for SEO.
 */
export function Hero() {
  const nameWords = site.name.split(" ");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pb-16 pt-32 sm:pt-40"
    >
      {/* Background — grid + radial mesh, layered for depth. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-mesh-cyan opacity-90" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger(0.1, 0.1)}
        className="container max-w-5xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 font-mono text-xs text-muted-foreground"
        >
          <Sparkles className="h-3 w-3 text-primary" />
          Available for full-stack engineering roles
        </motion.div>

        <h1
          id="hero-heading"
          className="font-display text-5xl font-semibold uppercase tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="sr-only">{site.name}</span>
          {nameWords.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="block overflow-hidden pr-2"
              aria-hidden="true"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl font-mono text-sm uppercase tracking-[0.22em] text-primary"
        >
          {site.title}
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href={site.resumeUrl}
              download
              aria-label={`Download ${site.name} resume PDF`}
            >
              <Download />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Find me on
          </p>
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  );
}
