"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useTheme } from "next-themes";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { LogoutButton } from "./logout-button";

export const UserButton = () => {
  const user = useCurrentUser();

  const { setTheme, theme } = useTheme();
  const [theTheme, setTheTheme] = useState(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-background text-foreground">
            <FaUser />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theTheme} onValueChange={setTheTheme}>
          <DropdownMenuRadioItem
            value="light"
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="system"
            onClick={() => setTheme("system")}
          >
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <LogoutButton>
          <DropdownMenuItem className="flex items-center justify-start gap-4 p-2">
            <IoExitOutline /> Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
