import React from "react";

const TechnologiesCard = () => {
  return (
    <div className="bg-custom-secondary-blue-dark m-4 rounded-lg p-4 flex flex-col justify-center">
      <h1 className="text-2xl">Technologies Known</h1>
      <ul className="grid grid-cols-2 gap-2">
        <li>JavaScript</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>React</li>
        <li>MySQL</li>
      </ul>
    </div>
  );
};

export default TechnologiesCard;
