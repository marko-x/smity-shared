import { z } from "zod";
import { zNullableDate } from "../utils/customZ";

export const get = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    id: z.string(),
    imageUrl: z.string().nullable(),
    shortDescription: z.string(),
    extendedDescription: z.string().nullable(),
    createdAt: zNullableDate(false),
    publishDate: zNullableDate(false),
  }),
};
