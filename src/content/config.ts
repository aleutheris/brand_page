import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(3),
    businessProblem: z.string().min(20),
    deliveredSolution: z.string().min(20),
    observedOutcome: z.string().min(20),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = {
  projects,
};
