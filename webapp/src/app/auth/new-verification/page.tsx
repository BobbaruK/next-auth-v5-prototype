import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <div className="container grid h-full place-items-center">
      <Suspense fallback={<p>Loading...</p>}>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
};

export default NewVerificationPage;
