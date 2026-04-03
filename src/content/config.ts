import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().min(3),
    businessProblem: z.string().min(20),
    deliveredSolution: z.string().min(20),
    expectedBenefits: z.string().min(20).optional(),
    observedOutcome: z.string().min(20).optional(),
    nextPhase: z.string().min(20).optional(),
    order: z.number().int().nonnegative(),
  }),
});

const reviews = defineCollection({
  type: "data",
  schema: z.object({
    reviewerName: z.string().min(2),
    reviewText: z.string().min(20),
    projectRef: z.string().optional(),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = {
  projects,
  reviews,
};
