import { z } from "zod";

export const post = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    id: z.string(),
    actionState: z.enum(["redeemed", "already-redeemed"]),
  }),
};
