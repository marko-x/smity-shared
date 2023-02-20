import { z } from "zod";
import { zNullableDate } from "../utils/customZ";

export const get = {
  requestSchema: z.object({
    query: z
      .object({
        state: z.enum(["packed", "unpacked", "redeemed"]).optional(),
        take: z.coerce.number().optional(),
        communityId: z.string().optional(),
      })
      .optional(),
  }),
  responseSchema: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        description: z.string(),
        imageUrl: z.string().nullable(),
        communityName: z.string(),
        communityId: z.string(),
        createdAt: zNullableDate(false),
        unpackedAt: zNullableDate(),
        redeemedAt: zNullableDate(),
        state: z.enum(["packed", "unpacked", "redeemed"]),
      })
    ),
  }),
};
