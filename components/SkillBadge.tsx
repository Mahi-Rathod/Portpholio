"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Skill } from "@/data/resume";

interface SkillBadgeProps {
  skill: Skill;
}

const LEVEL_COLOR: Record<Skill["level"], string> = {
  Expert: "from-primary to-accent",
  Advanced: "from-primary/90 to-primary/40",
  Proficient: "from-primary/70 to-primary/20",
  Familiar: "from-primary/50 to-primary/10",
};

/** Animated skill row with a proficiency progress bar. */
export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.li
      variants={fadeUp}
      className="group rounded-lg border border-border bg-card/40 p-4 transition-colors hover:border-primary/40 hover:bg-card"
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {skill.level}
        </span>
      </div>
      <div
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
        aria-valuenow={skill.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary/60"
      >
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "block h-full rounded-full bg-gradient-to-r",
            LEVEL_COLOR[skill.level],
          )}
        />
      </div>
    </motion.li>
  );
}
