import { z } from "zod";

export const post = {
  requestSchema: z.object({
    body: z.object({
      type: z.enum(["login", "register"]),
      email: z.string().email(),
      password: z.string().min(8),
    }),
  }),
  responseSchema: z.object({
    user: z
      .object({
        id: z.string(),
        email: z.string(),
      })
      .nullable(),
    type: z.enum(["login", "register"]),
  }),
};
