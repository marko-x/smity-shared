import { z } from "zod";
import { zNullableDate } from "../../utils/customZ";

export const get = {
  requestSchema: z.object({
    query: z
      .object({
        locationCode: z.string().optional(),
      })
      .optional(),
  }),
  responseSchema: z.object({
    id: z.string(),
    communityName: z.string(),
    communityId: z.string().nullable(),
    imageUrl: z.string().nullable(),
    shortDescription: z.string(),
    canUnpack: z.boolean(),
    locationRequired: z.boolean(),
    isOnLocation: z.boolean(),
    currentLocationDischargerId: z.string().nullable(),
    currentLocationId: z.string().nullable(),
    unpackWarning: z.string().nullable(),
    durabilityDate: zNullableDate(),
    locationDischargers: z.array(
      z.object({
        locationId: z.string(),
        dischargerId: z.string(),
        name: z.string(),
        instructionDescription: z.string().nullable(),
        dischargeFrom: zNullableDate(),
        dischargeUntil: zNullableDate(),
        address: z
          .object({
            countryName: z.string(),
            postalCode: z.string(),
            municipalityName: z.string(),
            streetName: z.string(),
            streetNameUnit: z.string(),
          })
          .nullable(),
      })
    ),
    onlinesystemDischargers: z.array(
      z.object({
        onlinesystemId: z.string(),
        dischargerId: z.string(),
        name: z.string(),
        instructionDescription: z.string().nullable(),
        dischargeFrom: zNullableDate(),
        dischargeUntil: zNullableDate(),
        url: z.string(),
      })
    ),
    couponState: z.enum(["redeemed", "unpacked", "created"]),
    unpackedData: z
      .object({
        renderer: z.enum([
          "consecutiveNumber",
          "couponCode",
          "qrcode",
          "barcode",
        ]),
        rendererValue: z.string(),
        consecutiveString: z.string(),
      })
      .nullable(),
  }),
};
