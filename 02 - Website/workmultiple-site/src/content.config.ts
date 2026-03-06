import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdoc}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('WorkMultiple'),
    status: z.enum(['draft', 'published']).default('draft'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
