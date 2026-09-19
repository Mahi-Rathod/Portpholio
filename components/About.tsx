"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { aboutSummary, stats } from "@/data/resume";
import { fadeUp, stagger } from "@/lib/motion";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="container py-20 sm:py-28"
    >
      <SectionHeader
        eyebrow="About"
        title="Engineering products, end-to-end."
        description="A short snapshot of how I work and what I've shipped recently."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr,1fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.1)}
          className="space-y-5 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {aboutSummary.map((paragraph, i) => (
            <motion.p key={i} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="pt-2">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              Explore my experience timeline
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.08)}
          className="grid grid-cols-2 gap-3 self-start"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-5 transition-all hover:border-primary/40 hover:bg-card"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100"
              />
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
