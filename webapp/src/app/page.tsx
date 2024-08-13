import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="flex items-center gap-4 text-6xl font-semibold text-foreground drop-shadow-md">
          Welcome to designs and links
        </h1>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </div>
  );
}
