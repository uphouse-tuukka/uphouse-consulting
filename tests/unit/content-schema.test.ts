import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Mirror the schema from content/config.ts for unit testing
// (Astro's content collection schemas aren't directly importable outside Astro context)
const projectSchema = z.object({
  title: z.string(),
  role: z.string(),
  stack: z.array(z.string()),
  duration: z.string(),
  outcome: z.string().max(120),
  order: z.number(),
});

describe('project frontmatter schema', () => {
  it('validates a complete project entry', () => {
    const valid = {
      title: 'Test Project',
      role: 'Developer',
      stack: ['TypeScript', 'React'],
      duration: '2024–2025',
      outcome: 'Shipped something useful.',
      order: 1,
    };
    expect(projectSchema.parse(valid)).toEqual(valid);
  });

  it('rejects missing title', () => {
    const invalid = {
      role: 'Developer',
      stack: ['TypeScript'],
      duration: '2024',
      outcome: 'Done.',
      order: 1,
    };
    expect(() => projectSchema.parse(invalid)).toThrow();
  });

  it('rejects outcome over 120 characters', () => {
    const invalid = {
      title: 'Test',
      role: 'Developer',
      stack: ['TypeScript'],
      duration: '2024',
      outcome: 'A'.repeat(121),
      order: 1,
    };
    expect(() => projectSchema.parse(invalid)).toThrow();
  });

  it('rejects non-array stack', () => {
    const invalid = {
      title: 'Test',
      role: 'Developer',
      stack: 'TypeScript',
      duration: '2024',
      outcome: 'Done.',
      order: 1,
    };
    expect(() => projectSchema.parse(invalid)).toThrow();
  });
});
