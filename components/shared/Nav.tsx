import React from "react";
import { Avatar } from "../ui/avatar";
import { ArrowBigDown, MoonIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { Input } from "postcss";
import { Button } from "../ui/button";
import { DialogHeader, DialogFooter } from "../ui/dialog";

const Nav = () => {
  return (
    <header className="mt-4 dark:bg-gray-500 rounded-full py-2 px-2">
      <nav className="flex justify-between items-center">
        <Avatar className="bg-white" />
        <ul>
          <Button className="text-white">Menu</Button>
          <Button className="text-white">Switch Theme</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
