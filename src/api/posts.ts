import { z } from "zod";
import { zNullableDate } from "../utils/customZ";

export const get = {
  requestSchema: z.object({
    query: z
      .object({
        communityId: z.string().optional(),
        take: z.coerce.number().optional(),
      })
      .optional(),
  }),
  responseSchema: z.object({
    take: z.number().optional(),
    items: z.array(
      z.object({
        id: z.string(),
        imageUrl: z.string().nullable(),
        shortDescription: z.string(),
        extendedDescription: z.string().nullable(),
        createdAt: zNullableDate(false),
        publishDate: zNullableDate(false),
      })
    ),
  }),
};
