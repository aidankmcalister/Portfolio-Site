import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { tag } from "./portfolioPage/tags";
import { Link } from "react-router-dom";

function Icon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`h-7 w-7 mr-4 transition-transform transform ${
        isOpen ? "rotate-180" : ""
      }`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const ProjectAccordion = ({ project }) => {
  const projectId = project.id;
  const [open, setOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const handleOpen = () => {
    setOpen(!open);

    if (!open) {
      setContentVisible(true);
    } else {
      setTimeout(() => {
        setContentVisible(false);
      }, 100);
    }
  };

  return (
    <Accordion
      className="my-0.5 pt-1.5 flex-col animate-fade-left px-1.5 flex rounded-md font-sometype shadow-sm shadow-custom-light-blue-shadow bg-main-secondary-blue"
      open={open}
      icon={<Icon isOpen={open} />}>
      {project.img && (
        <img src={project.img} alt={project.name} className="rounded-md" />
      )}
      <AccordionHeader onClick={handleOpen}>
        <div className="flex items-center">
          <div className="flex flex-col items-start ml-2">
            <div className="font-rubik text-xl my-1">{project.name}</div>
            <div className="flex-wrap flex">{tag(project.lang)}</div>
          </div>
        </div>
      </AccordionHeader>
      <AccordionBody>
        <div
          className={`bg-slate-800 p-1 rounded-lg ${
            contentVisible ? "block" : "hidden"
          }`}>
          {project.description}
          <br />
          <div className="inline-block p-1 mt-2 mb-1">
            <a
              href={project.link}
              className="border-slate-300 hover:scale-105 text-lg items-center hover:bg-custom-secondary-blue-dark text-slate-300 border rounded-full p-1 px-2 font-sometype flex transition-all">
              REPOSITORY
            </a>
          </div>
        </div>
      </AccordionBody>
    </Accordion>
  );
};

export default ProjectAccordion;
