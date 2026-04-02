import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: 'projects/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string().min(10).max(80),
    excerpt: z.string().min(40).max(180),
    publishDate: z.date(),
    tags: z.array(z.string()).min(1).max(4),
    outcome: z.string().min(20).max(120),
    role: z.string().min(10).max(80),
    problem: z.string().min(60).max(400),
    tried: z.string().min(60).max(600),
    shipped: z.string().min(60).max(600),
    metrics: z.array(z.string()).min(1).max(5),
    ctaLabel: z.string().min(2).max(30),
    ctaHref: z.string().url().optional(),
  }),
});

export const collections = { projects };
