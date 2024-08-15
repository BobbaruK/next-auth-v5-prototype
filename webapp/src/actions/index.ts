"use server";

import { login } from "@/actions/login";
import { newVerification } from "@/actions/new-verification";
import { register } from "@/actions/register";
import { reset } from "@/actions/reset";
import { newPassword } from "./new-password";

export { login, newPassword, newVerification, register, reset };
