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
    buttonClicker: z.object({
      numberOfRequiredInteractions: z.number(),
      interactor: z
        .object({
          cooldownUntil: zNullableDate(false),
          countedAt: zNullableDate(false),
          counter: z.number(),
        })
        .nullable(),
    }),
  }),
};

export const post = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    performedInteraction: z.object({
      campaignId: z.string(),
      state: z.enum(["completed", "uncompleted"]),
      generatedPoints: z.number().nullable(),
      generatedCouponId: z.string().nullable(),
    }),
  }),
};
