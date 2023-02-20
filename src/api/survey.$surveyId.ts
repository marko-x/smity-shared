import { z } from "zod";
import { zNullableDate } from "../utils/customZ";

export const get = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    campaign: z.object({
      publicUntil: zNullableDate(false),
      shortDescription: z.string(),
      extendedDescription: z.string().nullable(),
      imageUrl: z.string().nullable(),
      state: z.enum(["none", "completed", "uncompleted"]),
      currentParticipation: z
        .object({
          createdAt: zNullableDate(false),
          completedAt: zNullableDate(),
        })
        .nullable(),
      generates: z.enum(["coupon", "points"]),
      generatesLabel: z.string(),
      generatorDescription: z.string().nullable(),
      generatedTransactions: z.array(
        z.object({
          id: z.string(),
          createdAt: zNullableDate(false),
          transactedPoints: z.number(),
        })
      ),
      generatedCoupons: z.array(
        z.object({ id: z.string(), createdAt: zNullableDate(false) })
      ),
    }),
    survey: z.object({
      questions: z.array(
        z.object({
          id: z.string(),
          sortNumber: z.number(),
          text: z.string(),
          type: z.enum(["MultipleChoice", "SingleChoice"]),
          choices: z.array(
            z.object({
              id: z.string(),
              sortNumber: z.number(),
              text: z.string(),
              selected: z.boolean(),
            })
          ),
        })
      ),
    }),
  }),
};

export const post = {
  requestSchema: z.object({
    body: z.object({
      choices: z.array(
        z.object({
          id: z.string(),
          selected: z.boolean(),
        })
      ),
    }),
  }),
  responseSchema: z.object({
    performedSubmission: z.object({
      campaignId: z.string(),
      state: z.enum(["completed", "uncompleted"]),
      generatedPoints: z.number().nullable(),
      generatedCouponId: z.string().nullable(),
    }),
  }),
};
