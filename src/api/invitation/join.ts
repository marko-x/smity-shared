import { z } from "zod";

export const post = {
  requestSchema: z.object({
    body: z.object({
      code: z.string(),
    }),
  }),
  responseSchema: z.object({
    communityId: z.string(),
  }),
};
