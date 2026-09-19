import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names with proper conflict resolution.
 * Standard helper used by every shadcn/ui primitive.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Stable, deterministic slug — used for ids in JSON-LD, anchors, etc. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Format a date range as "May 2025 — Present" without locale surprises. */
export function formatDateRange(start: string, end: string): string {
  return `${start} — ${end}`;
}
