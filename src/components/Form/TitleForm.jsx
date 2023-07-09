import React from "react";
import { motion } from "framer-motion";

const TitleForm = () => {
  return (
    <div
      className=" text-9xl font-extrabold py-32 overflow-hidden"
      style={{ whiteSpace: "nowrap" }}
    >
      <motion.div style={{ display: "flex" }}>
        <motion.span
          key="title1"
          initial={{ x: "-927px" }}
          animate={{ x: "-1854px" }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
          style={{ display: "inline-block" }}
        >
          GET IN TOUCH. GET IN TOUCH. GET IN TOUCH. GET IN TOUCH. GET IN TOUCH.
          GET IN TOUCH. GET IN TOUCH. GET IN TOUCH. GET IN TOUCH. GET IN TOUCH.
          GET IN TOUCH. GET IN TOUCH. GET IN TOUCH. GET IN TOUCH.
        </motion.span>
      </motion.div>
    </div>
  );
};

export default TitleForm;
