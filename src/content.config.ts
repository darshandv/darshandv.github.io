import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    period: z.string(),
    startDate: z.coerce.date(),
    headline: z.string(),
    highlights: z.array(z.string()).min(1).max(5),
    tags: z.array(z.string()).max(5).default([]),
    featured: z.boolean().default(false),
    note: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    status: z.enum(['shipped', 'exploring', 'published', 'archived']),
    bet: z.string(),
    outcome: z.string(),
    stack: z.array(z.string()).max(6).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const notebook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notebook' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['deep-dive', 'fragment', 'life', 'links', 'meta']),
    summary: z.string().max(200),
    draft: z.boolean().default(false),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().max(200),
    draft: z.boolean().default(false),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: 'now.md', base: './src/content/now' }),
  schema: z.object({
    updated: z.coerce.date(),
    building: z.array(z.string()).min(1).max(3),
    thinking: z.array(z.string()).min(1).max(3),
    reading: z.array(z.string()).min(1).max(3),
  }),
});

export const collections = { work, projects, notebook, essays, now };
