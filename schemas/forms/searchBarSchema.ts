import { z } from "zod";

export const searchBarSchema = z.object({
  lastName: z.string().optional(),
  dob: z.string().optional(),
  chartNumber: z.string().optional(),
});
