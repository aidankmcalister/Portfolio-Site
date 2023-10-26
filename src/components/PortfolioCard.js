import React, { useEffect, useState } from "react";
import { PROJECTS } from "../app/shared/PROJECTS";
import { tag } from "./portfolioPage/tags";

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
    <div className="md:h-52 bg-opacity-70 bg-slate-800  m-4 rounded-lg p-3 flex flex-col text-white max-w-lg animate-fade-up opacity-80 font-rubik">
      <div className="flex justify-between flex-row">
        <h1 className="text-2xl text-slate-300">Portfolio</h1>

        <div className="flex flex-row items-center">
          <p className="mx-1 font-sometype text-slate-400">DESC.</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <hr className="w-full my-2 text-lg mt-1" />
      <ul className="grid md:grid-cols-2 md:gap-3 gap-1.5 grid-cols-1">
        {renderedProjects.map((project) => (
          <li
            key={project.id}
            className="flex-col animate-fade-left p-1.5 flex rounded-md font-sometype shadow-sm shadow-custom-light-blue-shadow"
            style={{ backgroundColor: "#334155" }}>
            {project.img && (
              <img
                src={project.img}
                alt={project.name}
                className="rounded-md"
              />
            )}
            <div>
              <div className="flex justify-between">
                <div className="font-rubik text-xl my-1">{project.name}</div>
                <a
                  className="flex items-center rounded-full text-sm px-2 my-1 bg-opacity-70 border-slate-300 text-slate-300 border"
                  href={`/project/${project.id}`}>
                  Find Out!
                </a>
              </div>
              <div className="">{tag(project.lang)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioCard;
