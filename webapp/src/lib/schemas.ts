import { z } from "zod";
import {
  MAX_DESCRIPTION,
  MAX_PASSWORD,
  MAX_USERNAME,
  MIN_PASSWORD,
  MIN_USERNAME,
} from "@/lib/constants";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, {
    message: `Password is required`,
  }),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(MIN_USERNAME, {
      message: `Username must be ${MIN_USERNAME} or more characters long`,
    })
    .max(MAX_USERNAME, {
      message: `Username must be ${MAX_USERNAME} or fewer characters long`,
    }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(MIN_PASSWORD, {
      message: `Password must be ${MIN_PASSWORD} or more characters long`,
    })
    .max(MAX_PASSWORD, {
      message: `Password must be ${MAX_PASSWORD} or fewer characters long`,
    })
    .superRefine((password, ctx) => {
      const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
      const containsLowercase = (ch: string) => /[a-z]/.test(ch);
      const containsSpecialChar = (ch: string) =>
        /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);

      let countOfUpperCase = 0,
        countOfLowerCase = 0,
        countOfNumbers = 0,
        countOfSpecialChar = 0;

      for (let i = 0; i < password.length; i++) {
        let ch = password.charAt(i);

        if (!isNaN(+ch)) countOfNumbers++;
        else if (containsUppercase(ch)) countOfUpperCase++;
        else if (containsLowercase(ch)) countOfLowerCase++;
        else if (containsSpecialChar(ch)) countOfSpecialChar++;
      }

      if (
        countOfLowerCase < 1 ||
        countOfUpperCase < 1 ||
        countOfSpecialChar < 1 ||
        countOfNumbers < 1
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Password does not meet complexity requirements",
        });
      }
    }),
});
