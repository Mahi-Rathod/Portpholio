import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 — Page not found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
        Error 404
      </p>
      <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
        Lost in the routing.
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        The page you&apos;re looking for has either moved or never existed. Let&apos;s
        get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/projects">See projects</Link>
        </Button>
      </div>
    </section>
  );
}
