import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum([
      'analyse',
      'gestion-projet',
      'conception',
      'developpement',
      'tests',
      'deploiement',
      'demo',
    ]),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(true),
    order: z.number(),
  }),
});

export const collections = { blog };
