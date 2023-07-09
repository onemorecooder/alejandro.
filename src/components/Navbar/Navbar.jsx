import React from "react";
import MenuButton from "./MenuButton";
import Button from "../Button";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const black = "bg-gradient-to-r from-gray-700 via-gray-900 to-black";
  const white = "bg-gradient-to-r from-rose-100 to-teal-100";

  return (
    <div className=" flex flex-col sm:flex-row items-center justify-between p-4">
      <div className="text-5xl font-extrabold">alejandro.</div>
      <div className="mt-4 sm:mt-0">
        <MenuButton />
      </div>
      <div className="flex mt-4 sm:mt-0 gap-2">
        <ThemeButton className={white} theme="light"/>
        <ThemeButton className={black} theme="dark"/>
        <Button text="Get in touch" />
      </div>
    </div>
  );
};

export default Navbar;
