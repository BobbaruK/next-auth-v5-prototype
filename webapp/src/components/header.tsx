import React from "react";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <div className="container flex items-center justify-start py-4">
      <div className="ms-auto">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
