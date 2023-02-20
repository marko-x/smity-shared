import { z } from "zod";
import { zNullableDate, zTailwindColor } from "../../utils/customZ";

export const get = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    communityId: z.string(),
    communityName: z.string(),
    shortDescription: z.string(),
    extendedDescription: z.string().nullable(),
    coverImageUrl: z.string().nullable(),
    footerImageUrl: z.string().nullable(),
    primaryTailwindColor: zTailwindColor(),
    pointsEnabled: z.boolean(),
    userTransactionsEnabled: z.boolean(),
    userAccountStatus: z.object({
      status: z.enum(["none", "expired", "future", "current"]),
      startsAt: zNullableDate(),
      endsAt: zNullableDate(),
      pointBalance: z.number().nullable(),
    }),
  }),
};
