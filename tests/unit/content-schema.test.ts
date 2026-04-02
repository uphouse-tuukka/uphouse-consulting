import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';

vi.mock('astro:content', () => ({
  defineCollection: (input: unknown) => input,
  z,
}));
vi.mock('astro/loaders', () => ({
  glob: (input: unknown) => input,
}));

import { collections } from '../../src/content/config';

const projectSchema = (collections.projects as { schema: z.ZodTypeAny }).schema;

describe('content schema', () => {
  it('validates good sample passes', () => {
    const sample = {
      title: 'Public Transport Webshop',
      excerpt: 'A customer-facing webshop for ticket purchasing and travel card value loading.',
      publishDate: new Date('2024-06-01'),
      tags: ['TypeScript', 'Next.js'],
      outcome: 'Shipped a production-ready ticket webshop used by real customers.',
      role: 'Fullstack Developer responsible for implementation',
      problem:
        'The operator needed a customer webshop that supported buying tickets and loading value for self and others without adding operational complexity.',
      tried:
        'I iterated quickly with clear boundaries between UI and backend services, validating checkout and top-up flows under realistic edge cases and constraints.',
      shipped:
        'I shipped a Next.js application deployed to Azure as a Docker image with complete flows for ticket purchases, top-ups, and multi-recipient handling.',
      metrics: ['Production rollout completed'],
      ctaLabel: 'Discuss similar work',
      ctaHref: 'https://linkedin.com/in/tuukka-ylostalo',
    };

    expect(projectSchema.parse(sample)).toEqual(sample);
  });

  it('validates title too short fails', () => {
    const sample = {
      title: 'Too short',
      excerpt: 'A customer-facing webshop for ticket purchasing and travel card value loading.',
      publishDate: new Date('2024-06-01'),
      tags: ['TypeScript', 'Next.js'],
      outcome: 'Shipped a production-ready ticket webshop used by real customers.',
      role: 'Fullstack Developer responsible for implementation',
      problem:
        'The operator needed a customer webshop that supported buying tickets and loading value for self and others without adding operational complexity.',
      tried:
        'I iterated quickly with clear boundaries between UI and backend services, validating checkout and top-up flows under realistic edge cases and constraints.',
      shipped:
        'I shipped a Next.js application deployed to Azure as a Docker image with complete flows for ticket purchases, top-ups, and multi-recipient handling.',
      metrics: ['Production rollout completed'],
      ctaLabel: 'Discuss similar work',
      ctaHref: 'https://linkedin.com/in/tuukka-ylostalo',
    };

    expect(() => projectSchema.parse(sample)).toThrow();
  });
});
