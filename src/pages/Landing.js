import AboutHomeSection from "../components/AboutHomeSection";
import TechnologiesCard from "../components/TechnologiesCard";
import PortfolioCard from "../components/PortfolioCard";
import React from "react";
import LazyLoad from "react-lazy-load";

const Landing = () => {
  return (
    <div className="">
      <AboutHomeSection />
      <LazyLoad height={360} threshold={0.1}>
        <TechnologiesCard />
      </LazyLoad>
      <LazyLoad threshold={0.1}>
        <PortfolioCard />
      </LazyLoad>
    </div>
  );
};

export default Landing;
