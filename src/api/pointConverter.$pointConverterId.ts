import { z } from "zod";
import { zNullableDate } from "../utils/customZ";

export const get = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    publicUntil: zNullableDate(false),
    shortDescription: z.string(),
    extendedDescription: z.string().nullable(),
    imageUrl: z.string().nullable(),
    generates: z.enum(["coupon"]),
    generatesLabel: z.string(),
    generatorDescription: z.string().nullable(),
    requiredPoints: z.number(),
    communityId: z.string(),
    canConvert: z.boolean(),
    convertInfo: z.string().nullable(),
    multipleConversions: z.boolean(),
    generateIfUnredeemedExists: z.boolean(),
    userAccountBalance: z.number(),
    generatedCoupons: z.array(
      z.object({ id: z.string(), createdAt: zNullableDate(false) })
    ),
  }),
};

export const post = {
  requestSchema: z.object({}),
  responseSchema: z.object({
    performedInteraction: z.object({
      generatedCouponId: z.string(),
    }),
  }),
};
