# /public assets

Drop the following binary assets here before going to production:

- `resume.pdf` — exported from your CV editor (linked from Hero & footer download buttons).
- `og-image.png` — 1200×630 Open Graph card. Used in social previews + Twitter cards.

Both paths are referenced via `data/resume.ts` (`site.resumeUrl`, `site.ogImage`)
and the root layout metadata. If the filenames change, update them in one place
(`data/resume.ts`) and every page picks it up automatically.
