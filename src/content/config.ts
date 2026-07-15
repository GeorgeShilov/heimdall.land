import { defineCollection, z } from "astro:content";

/**
 * Blog content schema for heimdall.land.
 *
 * Source of truth: `src/content/blog/*.md` (Squidex / blog.ts removed).
 * URL stability: entry slug = filename stem → `/blog/{slug}/`. Do not rename published files.
 * Optional frontmatter `slug` is for extract manifests / QA only.
 * Categories are free-form strings (General, Analysis, …).
 */
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("heimdall.land"),
    category: z.string().default("General"),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    inlineImages: z.array(z.string()).default([]),
    // Empty string allowed (extractor may omit; some posts have no reference).
    referenceUrl: z
      .union([z.string().url(), z.literal("")])
      .optional(),
    // Traceability only — must equal the filename stem when present.
    slug: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
