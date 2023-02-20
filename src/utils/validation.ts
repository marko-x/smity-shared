import { z } from "zod";

export function validateOrThrow<Schema extends z.Schema, V>(
  schema: Schema,
  value: V
): z.infer<Schema> {
  const s = schema.safeParse(value);
  if (s.success) return s.data;
  console.log("validation not successfull.", s.error);
  throw new Error("ValidationFailed");
}
