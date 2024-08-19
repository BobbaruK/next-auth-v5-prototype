import { auth, signOut } from "@/auth";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          "use server";

          await signOut({
            redirectTo: "/auth/login",
          });
        }}
      >
        <button type="submit">sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
