import React from "react";
import { tag } from "./tags";

const PortfolioPageCard = ({ project }) => {
  const { img, name, lang, readme } = project;
  return (
    <div className="bg-opacity-70 bg-slate-800 w-full  m-4 rounded-lg p-3 flex flex-col text-white max-w-lg animate-fade-up opacity-80 font-rubik">
      {project.img && <img src={img} alt={name} className="rounded-md" />}
      <div className="my-2 text-slate-300 text-2xl">{name}</div>
      <div className="-mt-1 animate-fade-left">{tag(lang)}</div>
      <div className="flex-col bg-4 animate-fade-left p-1.5 flex rounded-md font-sometype shadow-sm shadow-custom-light-blue-shadow bg-main-secondary-blue mt-2">
        <div dangerouslySetInnerHTML={{ __html: readme }}></div>
      </div>
    </div>
  );
};

export default PortfolioPageCard;
