// Refine

// Custom validation:

import { z } from "zod";

const PasswordSchema = z
  .string()
  .refine((value) => value.length >= 8, {
    message: "Password must be at least 8 characters",
  });

console.log(PasswordSchema.safeParse("123"));


// Regex

import { z } from "zod";

const PhoneSchema = z.string().regex(/^01[3-9]\d{8}$/, {
  message: "Invalid Bangladeshi phone number",
});

console.log(PhoneSchema.safeParse("01712345678"));