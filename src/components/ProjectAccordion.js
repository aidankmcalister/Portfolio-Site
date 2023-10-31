import React from "react";
import { tag } from "./portfolioPage/tags";

const ProjectAccordion = ({ project }) => {
  // const projectId = project.id;
  return (
    // <a href={`project/${projectId}`}>
    <div className="my-0.5 p-2 flex-col animate-fade-left px-1.5 flex rounded-md font-sometype shadow-sm shadow-custom-light-blue-shadow bg-main-secondary-blue">
      {project.img && (
        <img src={project.img} alt={project.name} className="rounded-md" />
      )}
      <div className="flex flex-col ">
        <div className="flex flex-col items-start ml-2">
          <div className="font-rubik text-xl my-1">{project.name}</div>
          <div className="flex-wrap flex">{tag(project.lang)}</div>
        </div>
        <div className="flex pt-2">
          <a
            href={project.repolink}
            className="flex flex-col items-center w-1/2 mx-1 border-slate-300 hover:scale-105 text-lg hover:bg-custom-secondary-blue-dark text-slate-300 border rounded-full p-1 px-2 font-sometype transition-all">
            REPOSITORY
          </a>
          <a
            href={project.sitelink}
            className={
              `flex-col items-center w-1/2 mx-1 border-slate-300 hover:scale-105 text-lg hover:bg-custom-secondary-blue-dark text-slate-300 border rounded-full p-1 px-2 font-sometype transition-all ` +
              (!project.sitelink ? "hidden" : "flex")
            }>
            SITE
          </a>
        </div>
      </div>
    </div>
    // </a>
  );
};

export default ProjectAccordion;
