import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  projectKey: z.string(),
  title: z.string(),
  role: z.string(),
  stack: z.array(z.string()),
  duration: z.string(),
  outcome: z.string().max(150),
  atAGlance: z.object({
    problem: z.string(),
    contribution: z.string(),
    result: z.string(),
  }),
  demoUrl: z.string().url().optional(),
  order: z.number(),
});

const projects = defineCollection({
  type: "content",
  schema: projectSchema,
});

const projectsFi = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = { projects, projectsFi };
