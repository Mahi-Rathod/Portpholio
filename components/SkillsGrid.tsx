"use client";

import { motion } from "framer-motion";
import { SkillBadge } from "@/components/SkillBadge";
import { skillCategories } from "@/data/resume";
import { fadeUp, stagger } from "@/lib/motion";

export function SkillsGrid() {
  return (
    <div className="space-y-16">
      {skillCategories.map((category, idx) => (
        <motion.section
          key={category.id}
          aria-labelledby={`skills-${category.id}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger(0.06)}
          className="grid gap-8 lg:grid-cols-[1fr,2.2fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {String(idx + 1).padStart(2, "0")} / {String(skillCategories.length).padStart(2, "0")}
            </p>
            <h2
              id={`skills-${category.id}`}
              className="mt-2 font-display text-2xl font-semibold tracking-tight"
            >
              {category.title}
            </h2>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {category.description}
            </p>
          </motion.div>

          <motion.ul
            variants={stagger(0.06)}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {category.skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </motion.ul>
        </motion.section>
      ))}
    </div>
  );
}
