import React from "react";
import { motion } from "framer-motion";

const ThemeButton = ({ theme }) => {
  return (
    <motion.div className="w-10 h-10 bg-black rounded-full border-2 border-white align-middle justify-center justify-items-center items-center flex">
      <div className={`flex w-8 h-8 rounded-full ${theme}`}></div>
    </motion.div>
  );
};

export default ThemeButton;
