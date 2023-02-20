import { z } from "zod";

export const get = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    user: z
      .object({
        id: z.string(),
        email: z.string(),
      })
      .nullable(),
  }),
};
