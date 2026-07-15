# Content Seed Guide

> **Updated 2026-07-15 (migration):** Blog posts live in `src/content/blog/*.md`.
> Squidex and `src/data/blog.ts` were removed. New posts = new markdown files.

## Goal

Keep the site build-safe with local content only. No CMS required.

## Where content lives

```text
src/content/blog/{slug}.md
src/content/config.ts
```

- **URL** = `/blog/{slug}/` where `{slug}` is the **filename stem** (do not rename published files).
- Frontmatter schema: see `src/content/config.ts`.
- Body may be Markdown or HTML (existing posts were extracted as HTML).

## Adding a post

1. Create `src/content/blog/my-new-slug.md` with required frontmatter (`title`, `description`, `pubDate`, …).
2. Run `npm run build` and open `/blog/my-new-slug/`.
3. For automation: `pbn_automation` should write the same path (content collection), not `blog.ts`.

## Archived domain content

Before inventing starter content for a brand-new site, inspect the archived domain / Wayback when relevant.

## QA

- `npm run build`
- Confirm `/blog/` lists all posts
- Confirm each `/blog/{slug}/` returns content
