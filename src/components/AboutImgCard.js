import React from "react";
import tulsaMap from "../app/assets/imgs/tulsa-map.png";
import { Carousel } from "@material-tailwind/react";

const AboutImgCard = () => {
  return (
    <div className="md:w-full md:h-auto my-10 m-4 bg-opacity-70 bg-slate-800 animate-fade-left rounded-lg p-3 flex flex-col text-slate-300 max-w-lg font-rubik">
      <img
        src={tulsaMap}
        alt="Tulsa Map"
        className="rounded-lg border border-slate-500"
        style={{ boxShadow: "0px 0px .25rem" }}
      />
    </div>
  );
};

export default AboutImgCard;
