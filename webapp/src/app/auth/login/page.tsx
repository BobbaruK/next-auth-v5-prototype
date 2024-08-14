import { LoginForm } from "@/components/auth/login-form";
import React, { Suspense } from "react";

const LoginPage = () => {
  return (
    <div className="container grid h-full place-items-center">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
