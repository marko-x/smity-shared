import { z } from "zod";

export const get = {
  requestSchema: z.object({
    query: z
      .object({
        order: z.enum(["newest", "name"]).optional(),
        take: z.number().optional(),
      })
      .optional(),
  }),
  responseSchema: z.object({
    take: z.number().optional(),
    ordered: z.enum(["newest", "name"]).optional(),
    items: z.array(
      z.object({
        id: z.string(),
        imageUrl: z.string().nullable(),
        name: z.string(),
        shortDescription: z.string(),
      })
    ),
  }),
};
