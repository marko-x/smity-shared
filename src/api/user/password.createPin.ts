import { z } from "zod";

export const post = {
  requestSchema: z.object({
    body: z.object({
      email: z.string().email(),
    }),
  }),
  responseSchema: z.object({
    email: z.string().email(),
  }),
};
