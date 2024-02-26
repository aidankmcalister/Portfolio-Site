import React, { useEffect, useState } from "react";
import resumePDF from "../app/assets/CV_EDIT_AMcAlister_edited.pdf";

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

  const isSmallScreen = window.innerWidth < 640;

  return (
    <div
      className="h-screen  md:mt-0 -mt-16 mx-4 md:h-screen flex flex-col justify-center items-start"
      style={{ marginLeft: "7%" }}>
      <h1 className="text-5xl text-slate-300 animate-fade-left my-1 font-rubik">
        <span>AIDAN</span>
        <br />
        <span>McALISTER</span>
      </h1>
      <div
        className={`flex items-end md:my-10 h-auto text-slate-500 cursor-default text-2xl animate-fade-left font-sometype`}>
        {isSmallScreen ? (
          <p className="tracking-widest">
            <span className="">JUNIOR</span>
            <br />
            <span className="">FULL-STACK</span>
            <br />
            <span className="">DEVELOPER</span>
          </p>
        ) : (
          Array.from(renderedText).map((letter, index) => (
            <span
              key={index}
              className={`${subtextClasses} animate-pulse animate-once`}>
              {letter}
            </span>
          ))
        )}
        <h4 className="md:ml-0 mb-0.5 -ml-3 text-2xl blink-soft">_</h4>
      </div>
      <div className=" mt-2 object-fill hover:scale-105 transform origin-center transition-all">
        <a
          className="border-slate-300 text-xl items-center hover:bg-custom-secondary-blue-dark text-slate-300 animate-fade-left border rounded-full p-2 px-4 font-sometype flex transition-all"
          href={resumePDF}
          target="_blank"
          rel="noreferrer">
          RESUME
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1.2rem"
            height="1.2rem"
            className="fill-slate-300 ml-1">
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AboutHomeSection;
