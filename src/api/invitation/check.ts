import { z } from "zod";
import { zNullableDate } from "../../utils/customZ";

export const post = {
  requestSchema: z.object({
    body: z.object({
      code: z.string(),
    }),
  }),
  responseSchema: z.object({
    invitation: z.object({
      state: z.enum([
        "existingPeriod",
        "overlappingPeriod",
        "unexistingPeriod",
      ]),
      startDate: zNullableDate(false),
      endDate: zNullableDate(false),
    }),
    community: z.object({
      communityId: z.string(),
      communityName: z.string(),
      shortDescription: z.string(),
      extendedDescription: z.string().nullable(),
      coverImageUrl: z.string().nullable(),
    }),
  }),
};
