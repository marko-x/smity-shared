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
    codeTracking: z.object({
      numberOfTrackers: z.number(),
      numberOfRequiredTrackers: z.number(),
      uniqueCodeCount: z.number(),
      codeTrackers: z.array(
        z.object({
          id: z.string(),
          interactionFrom: zNullableDate(false),
          interactionUntil: zNullableDate(false),
          cooldownHours: z.number(),
          numberOfRequiredInteractions: z.number(),
          numberOfInteractions: z.number(),
          lastInteractionDate: zNullableDate(),
          codeDetails: z.union([
            z.object({
              type: z.literal("LocationCode"),
              name: z.string(),
              address: z
                .object({
                  countryName: z.string(),
                  municipalityName: z.string(),
                  postalCode: z.string(),
                  streetName: z.string(),
                  streetNameUnit: z.string(),
                })
                .nullable(),
              geo: z
                .object({
                  lat: z.number(),
                  lng: z.number(),
                })
                .nullable(),
            }),
            z.object({
              type: z.literal("MedienCode"),
              subType: z.enum([
                "Website",
                "SocialMedia",
                "Showcase",
                "Print",
                "Screen",
                "Audio",
                "Video",
              ]),
              placementDescription: z.string(),
              url: z.string().nullable(),
              hidden: z.boolean(),
            }),
            z.object({
              type: z.literal("unknown"),
            }),
          ]),
        })
      ),
    }),
  }),
};
