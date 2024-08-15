import { EmailTemplate } from "@/components/auth/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: email,
    subject: "Confirm email",
    react: EmailTemplate({ firstName: email, confirmLink }),
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetlink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: email,
    subject: "Reset Password",
    react: EmailTemplate({
      firstName: email,
      confirmLink: resetlink,
      action: "reset",
    }),
  });
};
