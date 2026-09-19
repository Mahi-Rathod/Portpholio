import type { MetadataRoute } from "next";
import { navItems, site } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return navItems.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
