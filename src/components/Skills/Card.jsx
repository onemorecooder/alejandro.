import React from "react";
import { motion } from "framer-motion";
import sea from "../../media/seaPic.jpg";

const Card = ({ title, intro, description, item1, item2 }) => {
  return (
    <motion.div className="w-full md:w-1/2 flex m-auto mt-10 text-white">
      <div className="bg-neutral-950 flex flex-col md:flex-row">
        <div className="p-10">
          <h1 className="text-4xl md:text-7xl">{title}</h1>
          <h2 className="text-2xl md:text-4xl">{intro}</h2>
          <p className="py-4">{description}</p>
          <div className="flex flex-wrap mt-2">
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
