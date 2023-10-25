import AboutHomeSection from "../components/AboutHomeSection";
import TechnologiesCard from "../components/TechnologiesCard";
import PortfolioCard from "../components/PortfolioCard";
import React from "react";
import LazyLoad from "react-lazy-load";

const Landing = () => {
  return (
    <div>
      <AboutHomeSection />
      <LazyLoad height={350} threshold={0.3}>
        <TechnologiesCard />
      </LazyLoad>
      <LazyLoad height={350} threshold={0.3}>
        <PortfolioCard />
      </LazyLoad>
    </div>
  );
};

export default Landing;
