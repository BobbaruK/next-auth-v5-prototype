import { z } from "zod";
import {
  MAX_DESCRIPTION,
  MAX_PASSWORD,
  MAX_USERNAME,
  MIN_PASSWORD,
  MIN_USERNAME,
} from "./constants";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, {
    message: `Password is required`,
  }),
});

export const addUserformSchema = z.object({
  avatar: z.string({
    required_error: "Please select an avatar.",
  }),
  username: z
    .string()
    .min(MIN_USERNAME, {
      message: `Username must be ${MIN_USERNAME} or more characters long`,
    })
    .max(MAX_USERNAME, {
      message: `Username must be ${MAX_USERNAME} or fewer characters long`,
    }),
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
  email: z.string().email({ message: "Invalid email address" }),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  role: z.string({
    required_error: "Please select a role.",
  }),
});

export const addTopicFormSchema = z.object({
  name: z
    .string()
    .min(MIN_USERNAME, {
      message: `Name must be ${MIN_USERNAME} or more characters long`,
    })
    .max(MAX_USERNAME, {
      message: `Name must be ${MAX_USERNAME} or fewer characters long`,
    }),

  description: z
    .string()
    // .min(10, {
    //   message: "Description must be at least 10 characters.",
    // })
    .max(MAX_DESCRIPTION, {
      message: `Description must not be longer than ${MAX_DESCRIPTION} characters.`,
    })
    .optional(),

  userId: z.string(),
  userUpdateId: z.string(),
});

export const addFormValidationFormSchema = z.object({
  name: z
    .string()
    .min(MIN_USERNAME, {
      message: `Name must be ${MIN_USERNAME} or more characters long`,
    })
    .max(MAX_USERNAME, {
      message: `Name must be ${MAX_USERNAME} or fewer characters long`,
    }),

  slug: z.string(),

  description: z
    .string()
    // .min(10, {
    //   message: "Description must be at least 10 characters.",
    // })
    .max(MAX_DESCRIPTION, {
      message: `Description must not be longer than ${MAX_DESCRIPTION} characters.`,
    })
    .optional(),

  userId: z.string(),
  userUpdateId: z.string(),
});
