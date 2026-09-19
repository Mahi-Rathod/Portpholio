import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedWork } from "@/components/FeaturedWork";
import { site } from "@/data/resume";

export const metadata: Metadata = {
  title: `${site.name} — ${site.title} Portfolio`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.title} Portfolio`,
    description: site.description,
    url: site.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedWork />
    </>
  );
}
