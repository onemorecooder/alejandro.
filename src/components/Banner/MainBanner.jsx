import React from "react";
import video from "../../media/sea.mp4";
import ButtonBlur from "../ButtonBlur";
import Welcome from "./Welcome";

const MainBanner = () => {
  return (
    <div>
      <Welcome />
      <div className="relative">
        <div className=" h-1/2 aspect-h-1">
          <video autoPlay loop muted className="w-full h-[60vh] object-cover">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ButtonBlur text="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
