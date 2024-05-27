import { z } from "zod";

export const contactSchema = z.object({
  subject: z.string(),
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  privacy: z.boolean(),
});

export type ContactForm = z.infer<typeof contactSchema>;
