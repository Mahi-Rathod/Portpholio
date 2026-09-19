"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/resume";
import { stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ALL = "All";

export function ProjectsGrid() {
  const [active, setActive] = useState<string>(ALL);

  const filters = useMemo(() => {
    const set = new Set<string>();
    for (const p of projects) set.add(p.category);
    return [ALL, ...Array.from(set)];
  }, []);

  const visible = useMemo(() => {
    if (active === ALL) return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div>
      <div role="toolbar" aria-label="Filter projects by category">
        <ul className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = filter === active;
            return (
              <li key={filter}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(filter)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
                    isActive
                      ? "border-primary/60 bg-primary/15 text-primary"
                      : "border-border bg-card/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                  )}
                >
                  {filter}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <motion.ul
        layout
        initial="hidden"
        animate="visible"
        variants={stagger(0.08)}
        className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout
              exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <ProjectCard
                project={project}
                activeFilter={active === ALL ? null : active}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.length === 0 && (
        <p className="mt-10 rounded-xl border border-dashed border-border bg-card/30 p-8 text-center text-sm text-muted-foreground">
          No projects match this filter yet.
        </p>
      )}
    </div>
  );
}
