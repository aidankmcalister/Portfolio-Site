import React, { useEffect, useState } from "react";
import { TECHNOLOGIES } from "../app/shared/TECHNOLOGIES";

const TechnologiesCard = () => {
  console.log(TECHNOLOGIES[0]);

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
    <div className="md:h-52 h-80 bg-custom-secondary-blue-dark m-4 rounded-lg p-3 flex flex-col text-white max-w-lg animate-fade-up shadow-lg shadow-custom-light-blue-shadow opacity-80 font-rubik">
      <div className="">
        <h1 className="text-2xl">Skills</h1>
        <hr className="w-full my-2 text-lg mt-1" />
        <ul className="grid md:grid-cols-2 md:gap-3 gap-1.5 grid-cols-1">
          {renderedTechnologies.map((technology) => (
            <li
              key={technology.id}
              className={` animate-fade-left p-1.5 flex rounded-md font-sometype shadow-sm shadow-custom-light-blue-shadow`}
              style={{ backgroundColor: "#303848" }}>
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
    </div>
  );
};

export default TechnologiesCard;
