import React, { useEffect, useState } from "react";
import { PROJECTS } from "../app/shared/PROJECTS";

import ProjectAccordion from "./ProjectAccordion";

const PortfolioCard = () => {
  const [renderedProjects, setRenderedProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < PROJECTS.length) {
        setRenderedProjects((prevProjects) => [
          ...prevProjects,
          PROJECTS[currentIndex],
        ]);
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="md:w-3/4 bg-opacity-70 bg-slate-800 m-4 rounded-lg p-3 flex flex-col text-white animate-fade-up opacity-80 font-rubik">
      <div className="flex justify-between flex-row">
        <h1 className="text-2xl text-slate-300">Portfolio</h1>
      </div>
      <hr className="w-full my-2 text-lg mt-1" />
      <ul className="grid md:grid-cols-2 md:gap-3 gap-1.5 grid-cols-1">
        {renderedProjects.map((project) => (
          <ProjectAccordion project={project} />
        ))}
      </ul>
    </div>
  );
};

export default PortfolioCard;
