import { z } from "zod";

export const post = {
  requestSchema: z.object({
    body: z.object({
      email: z.string().email(),
      password: z.string().min(8),
      pin: z.string().min(6),
    }),
  }),
  responseSchema: z.object({
    user: z
      .object({
        id: z.string(),
        email: z.string(),
      })
      .nullable(),
  }),
};
