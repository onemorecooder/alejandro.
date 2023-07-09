import React from "react";
import MenuButton from "./MenuButton";
import Button from "../Button";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const orange = "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500";
  const black = "bg-gradient-to-r from-gray-700 via-gray-900 to-black";
  const white = "bg-gradient-to-r from-rose-100 to-teal-100";

  return (
    <div className="text-white flex flex-col sm:flex-row items-center justify-between p-4">
      <div className="text-5xl font-extrabold">alejandro.</div>
      <div className="mt-4 sm:mt-0">
        <MenuButton />
      </div>
      <div className="flex mt-4 sm:mt-0 gap-2">
        <ThemeButton theme={orange} />
        <ThemeButton theme={white} />
        <ThemeButton theme={black} />
        <Button text="Get in touch" />
      </div>
    </div>
  );
};

export default Navbar;
