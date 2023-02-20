import { z } from "zod";

export function zNullableDate<T extends true | false>(
  allowTranformToNull: T = true as T
) {
  return z
    .union([z.string().nullable(), z.date().nullable()])
    .transform((d, ctx) => {
      if (!allowTranformToNull) {
        if (d === null) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Date cant be null.",
          });

          // This is a special symbol you can use to
          // return early from the transform function.
          // It has type `never` so it does not affect the
          // inferred return type.
          return z.NEVER;
        }
      }
      if (typeof d === "string") {
        return new Date(d);
      }

      return d as typeof allowTranformToNull extends true ? null | Date : Date;
    });
}

export function zTailwindColor() {
  return z.enum([
    "slate",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ]);
}
