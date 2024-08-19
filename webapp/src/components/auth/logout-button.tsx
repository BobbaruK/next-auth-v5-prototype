"use client";

import { logout } from "@/actions/logout";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const LogoutButton = ({ children }: Props) => {
  const onClick = () => logout();

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
