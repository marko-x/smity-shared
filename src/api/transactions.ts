import { z } from "zod";
import { zNullableDate } from "../utils/customZ";

export const get = {
  requestSchema: z.object({
    query: z
      .object({
        take: z.coerce.number().optional(),
        communityId: z.string().optional(),
      })
      .optional(),
  }),
  responseSchema: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        createdAt: zNullableDate(false),
        subject: z.string(),
        resultingBalance: z.number(),
        transactedPoints: z.number(),
        transactionType: z.enum(["debit", "credit"]),
      })
    ),
  }),
};
