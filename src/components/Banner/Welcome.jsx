import React from "react";
import Button from "../Button";

const Welcome = () => {
  return (
    <div className="px-4 mx-auto max-w-screen-xl text-center py-20 lg:py-48">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
        Welcome to my portfolio, I'm Alejandro
      </h1>
      <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-font-100">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        magnam molestias sit excepturi. Iste, voluptates.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Button text="Learn more" />
        <Button text="Learn more" />
      </div>
    </div>
  );
};

export default Welcome;
