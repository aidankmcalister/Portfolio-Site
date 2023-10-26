import React, { useEffect, useState } from "react";
import { TECHNOLOGIES } from "../app/shared/TECHNOLOGIES";

const TechnologiesCard = () => {
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
    <div className="md:h-52 h-80 my-10 m-4 bg-opacity-70 bg-slate-800 animate-fade-left rounded-lg p-3 flex flex-col text-slate-300 max-w-lg font-rubik">
      <h1 className="text-2xl">Skills</h1>
      <hr className="w-full my-2 text-lg mt-1" />
      <ul className="grid md:grid-cols-2 md:gap-3 gap-1.5 grid-cols-1">
        {renderedTechnologies.map((technology) => (
          <li
            key={technology.id}
            className={` animate-fade-left p-1.5 flex rounded-md font-sometype shadow-sm shadow-custom-light-blue-shadow`}
            style={{ backgroundColor: "#334155" }}>
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

export default TechnologiesCard;
