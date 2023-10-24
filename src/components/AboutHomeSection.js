import React, { useEffect, useState } from "react";

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
    <div className="m-4 h-96 flex flex-col justify-center">
      <h1 className="text-4xl text-slate-300 animate-fade-left my-4 font-rubik">
        <span className="">AIDAN</span>
        <br />
        <span className="">McALISTER</span>
      </h1>
      <div className="text-slate-600 cursor-default h-1/6 text-xl">
        {Array.from(renderedText).map((letter, index) => (
          <span key={index} className={`${subtextClasses} animate-fade-up`}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutHomeSection;
