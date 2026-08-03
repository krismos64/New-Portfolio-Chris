import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updatedDate: z.date().optional(),
    // Une série regroupe les articles d'un même récit. `order` est séquentiel
    // au sein d'une série, pas sur l'ensemble de la collection : la navigation
    // precedent/suivant et le fil de la page d'index se calculent par série.
    series: z.enum(['smartplanning', 'claude-code']).default('smartplanning'),
    category: z.enum([
      'analyse',
      'gestion-projet',
      'conception',
      'developpement',
      'tests',
      'deploiement',
      'demo',
      'ia-outillage',
    ]),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(true),
    order: z.number(),
  }),
});

export const collections = { blog };
