import React from "react";
import Video from "./Video";

const HomeHero = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.5vw] flex justify-center items-center  uppercase leading-[9.5vw]">
        L'étincelle
      </div>

      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[9.5vw] gap-[1vw]">
        <span>qui</span>
        <div className="h-[8vw] flex items-center rounded-full overflow-hidden">
          <Video />
        </div>
        <span>génère</span>
      </div>

      <div className="text-[9.5vw] flex justify-center items-center  uppercase leading-[9.5vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHero;
