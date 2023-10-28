import React, { useEffect, useState } from "react";
import { TECHNOLOGIES } from "../app/shared/TECHNOLOGIES";

const TechnologiesCardMd = () => {
  const [renderedTechnologies, setRenderedTechnologies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < TECHNOLOGIES.length) {
        setRenderedTechnologies((prevTechnologies) => [
          ...prevTechnologies,
          TECHNOLOGIES[currentIndex],
        ]);
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div
      className="hidden w-2/5 h-52 my-10 m-4 bg-opacity-70 bg-slate-800 animate-fade-left rounded-lg p-3 md:flex flex-col text-slate-300 max-w-lg font-rubik"
      style={{ height: "17rem" }}>
      <h1 className="text-2xl">Skills</h1>
      <hr className="w-full my-2 text-lg mt-1" />
      <ul className="grid grid-cols-2 gap-4">
        {renderedTechnologies.map((technology) => (
          <li
            key={technology.id}
            className={`${technology.classes} border bg-opacity-75 animate-fade-left p-1.5 flex rounded-md font-sometype`}
            style={{ boxShadow: "0px 0px .5rem" }}>
            <img
              src={technology.img}
              alt={technology.name}
              width={"25rem"}
              className="mr-3"
            />
            {technology.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologiesCardMd;
