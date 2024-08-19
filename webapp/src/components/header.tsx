import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";

const Header = () => {
  return (
    <div className="container flex items-center justify-start py-4">
      <Navbar />
      <div className="ms-auto">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
