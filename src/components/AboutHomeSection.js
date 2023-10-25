import React, { useEffect, useState } from "react";
import newTabIcon from "../app/assets/imgs/logos/icons8-new-tab.svg";

const subtextClasses = "mr-2 hover:text-white transition-all font-sometype";

const AboutHomeSection = () => {
  const text = "JUNIOR FULL-STACK DEVELOPER";
  const letters = text.split("");
  const [renderedText, setRenderedText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < letters.length) {
        setRenderedText((prevText) => [...prevText, letters[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }
    }, 35);

    return () => clearTimeout(timer);
  }, [currentIndex, letters]);

  return (
    <div className="m-4 h-96 flex flex-col justify-center items-start ">
      <h1 className="text-4xl text-slate-300 animate-fade-left my-4 font-rubik">
        <span className="">AIDAN</span>
        <br />
        <span className="">McALISTER</span>
      </h1>
      <div className="text-slate-600 cursor-default h-1/6 text-xl animate-fade-left animate-delay-50">
        {Array.from(renderedText).map((letter, index) => (
          <span key={index} className={`${subtextClasses} animate-fade-up`}>
            {letter}
          </span>
        ))}
      </div>
      <div className="mt-2 object-fill hover:scale-105 transform origin-center  transition-all">
        <button className="border-slate-300 items-center hover:bg-custom-secondary-blue-dark text-slate-300 animate-fade-left animate-delay-75 border rounded-full p-2 px-4 font-rubik flex transition-all">
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1.2rem"
            height="1.2rem"
            className="fill-slate-300 ml-1">
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AboutHomeSection;
