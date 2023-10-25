import React, { useEffect, useState } from "react";
import { PROJECTS } from "../app/shared/PROJECTS";
import LazyLoad from "react-lazy-load";

const tagClasses =
  "font-rubik rounded-lg bg-opacity-75 my-1 px-1.5 py-0.5 text-xs inline-block mx-0.5";

const JsTag = () => (
  <div className={`bg-yellow-500 text-yellow-800 ${tagClasses}`}>
    JAVASCRIPT
  </div>
);
const BootstrapTag = () => (
  <div className={`bg-purple-500 text-purple-800 ${tagClasses}`}>BOOTSTRAP</div>
);
const TailwindTag = () => (
  <div className={`bg-blue-500 text-blue-800 ${tagClasses}`}>TAILWIND</div>
);
const PythonTag = () => (
  <div className={`bg-blue-800 text-blue-800 ${tagClasses}`}>PYTHON</div>
);
const ReactTag = () => (
  <div className={`bg-blue-400 text-blue-800 ${tagClasses}`}>REACT JS</div>
);

const PortfolioCard = () => {
  const tag = (lang) => {
    return lang.map((langs) => {
      switch (langs) {
        case "js":
          return <JsTag key={langs} />;
        case "bootstrap":
          return <BootstrapTag key={langs} />;
        case "tailwind":
          return <TailwindTag key={langs} />;
        case "python":
          return <PythonTag key={langs} />;
        case "react":
          return <ReactTag key={langs} />;
        default:
          return null;
      }
    });
  };
  console.log(PROJECTS[0]);
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
    <div className="md:h-52 bg-opacity-70 bg-slate-800  m-4 rounded-lg p-3 flex flex-col text-white max-w-lg animate-fade-up shadow-lg shadow-custom-light-blue-shadow opacity-80 font-rubik">
      <div className="flex justify-between flex-row">
        <h1 className="text-2xl text-slate-300">Portfolio</h1>

        <div className="flex flex-row items-center">
          <p className="mx-1 font-sometype text-slate-400">DESCRIPTIONS</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <hr className="w-full my-2 text-lg mt-1" />
      <ul className="grid md:grid-cols-2 md:gap-3 gap-1.5 grid-cols-1">
        {renderedProjects.map((project) => (
          <LazyLoad height={300} threshold={0.1}>
            <li
              key={project.id}
              className={`flex-col animate-fade-left p-1.5 flex rounded-md font-sometype shadow-sm shadow-custom-light-blue-shadow`}
              style={{ backgroundColor: "#334155" }}>
              <img src={project.img} className="rounded-md" />
              <div className="font-rubik text-xl my-1">{project.name}</div>
              <div className="animate-fade-left">{tag(project.lang)}</div>
            </li>
          </LazyLoad>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioCard;
