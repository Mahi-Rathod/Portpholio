"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section header used by every page section.
 * Provides eyebrow / title / description with staggered entrance.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger(0.08)}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary"
        >
          <span
            aria-hidden
            className="inline-block h-px w-6 bg-primary/60"
          />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
