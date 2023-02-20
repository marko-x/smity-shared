import { z } from "zod";

export const post = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    userId: z.string().nullable(),
  }),
};
