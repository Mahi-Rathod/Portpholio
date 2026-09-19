"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/lib/hooks/use-scroll-progress";

/** Slim progress indicator that lives at the very top of the viewport. */
export function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-primary via-primary/70 to-accent"
      style={{ scaleX: progress }}
      transition={{ duration: 0.05, ease: "linear" }}
    />
  );
}
