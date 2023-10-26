import AboutHomeSection from "../components/AboutHomeSection";
import TechnologiesCard from "../components/TechnologiesCard";
// import PortfolioCard from "../components/PortfolioCard";
import React, { lazy } from "react";
// import LazyLoad from "react-lazy-load";

const PortfolioCard = lazy(() => import("../components/PortfolioCard.js"));

const Landing = () => {
  return (
    <div className="">
      <AboutHomeSection />
      <TechnologiesCard />
      <PortfolioCard />
    </div>
  );
};

export default Landing;
