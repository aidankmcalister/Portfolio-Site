import AboutHomeSection from "../components/AboutHomeSection";
import TechnologiesCard from "../components/TechnologiesCard";
import AboutMeCard from "../components/AboutMeCard";
import ContactCard from "../components/ContactCard";
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
      <AboutMeCard />
      <ContactCard />
    </div>
  );
};

export default Landing;
