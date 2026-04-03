import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    duration: z.string(),
    outcome: z.string().max(120),
    order: z.number(),
  }),
});

export const collections = { projects };
