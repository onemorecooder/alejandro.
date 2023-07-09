import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeProvider";
import cn from "classnames";

const ThemeButton = ({ className, theme }) => {
  const { currentTheme, changeTheme } = useTheme();
  console.log(currentTheme);
  const isActive = theme === currentTheme;

  return (
    <motion.div
      onClick={() => {
        changeTheme(theme);
      }}
      className={cn(
        "cursor-pointer w-10 h-10 bg-black rounded-full border-2 border-white align-middle justify-center justify-items-center items-center flex transition-all duration-500",
        isActive && "!border-red-900"
      )}
    >
      <div className={cn("flex w-8 h-8 rounded-full", className)}></div>
    </motion.div>
  );
};

export default ThemeButton;
