import React from "react";
import { motion } from "framer-motion";

const ButtonBlur = ({ text }) => {
  return (
    <motion.button className="bg-white text-black rounded-full py-2 px-6">
      {text}
    </motion.button>
  );
};

export default ButtonBlur;
