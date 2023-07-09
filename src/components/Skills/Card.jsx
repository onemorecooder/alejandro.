import React from "react";
import { motion } from "framer-motion";
import sea from "../../media/seaPic.jpg";
import cn from "classnames";

const Card = ({ title, intro, description, item1, item2, orientation }) => {
  const isLeft = orientation === "left";

  return (
    <motion.div
      className={cn(
        "w-full flex overflow-hidden",
        isLeft ? "justify-start text-right" : "md:flex-row-reverse"
      )}
    >
      <div className="bg-background-200 flex flex-col md:flex-row md:w-2/3">
        <div className="p-10">
          <h1 className="text-4xl md:text-5xl">{title}</h1>
          <h2 className="text-2xl md:text-2xl">{intro}</h2>
          <p className="py-4">{description}</p>
          <div className={cn("flex flex-wrap mt-2", isLeft ? "justify-end" : "")}>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 mb-2">
              {item1}
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 mb-2">
              {item2}
            </span>
          </div>
        </div>
        <img src={sea} alt="sea" className="w-full md:w-2/5" />
      </div>
    </motion.div>
  );
};

export default Card;
