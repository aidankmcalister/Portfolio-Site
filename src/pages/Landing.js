import AboutHomeSection from "../components/AboutHomeSection";
import TechnologiesCard from "../components/TechnologiesCard";
import React from "react";
import LazyLoad from "react-lazy-load";

const Landing = () => {
  return (
    <div>
      <AboutHomeSection />
      <LazyLoad height={200} threshold={0.3}>
        <TechnologiesCard />
      </LazyLoad>
    </div>
  );
};

export default Landing;
