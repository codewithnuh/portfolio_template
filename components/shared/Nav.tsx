import React from "react";
import { Avatar } from "../ui/avatar";
import { MoonIcon } from "lucide-react";

const Nav = () => {
  return (
    <header className="mt-4 dark:bg-primary ">
      <nav className="flex justify-between items-center">
        <Avatar className="bg-white" />
        <ul>
          <button className="rounded-full">Menu</button>
          <button className="bg-white inline-flex items-center justify-center px-4 py-4 rounded">
            <MoonIcon />
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
