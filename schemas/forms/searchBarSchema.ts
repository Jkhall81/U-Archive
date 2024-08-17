import { z } from "zod";

export const searchBarSchema = z.object({
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .optional(),
  dob: z
    .string()
    .min(2, {
      message: "Date of birth must be at least 2 characters.",
    })
    .optional(),
  chartNumber: z
    .string()
    .min(1, {
      message: "chartNumber must be at least 2 characters.",
    })
    .optional(),
});
