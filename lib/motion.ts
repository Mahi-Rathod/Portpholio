import type { Variants } from "framer-motion";

/**
 * Reusable Framer Motion variants — keeps motion language consistent
 * across Hero, About, Experience, Projects, and Skills sections.
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const charReveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardHover = {
  rest: { y: 0, rotateX: 0, rotateY: 0 },
  hover: {
    y: -6,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};
