"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button className="w-full" size={"lg"} variant={"outline"}>
        <FcGoogle size={25} />
      </Button>
      <Button className="w-full" size={"lg"} variant={"outline"}>
        <FaGithub size={25} />
      </Button>
    </div>
  );
};
