import AboutHomeSection from "../components/AboutHomeSection";
import TechnologiesCard from "../components/TechnologiesCard";
import AboutMeCard from "../components/AboutMeCard";
import ContactCard from "../components/ContactCard";
import downArrow from "../app/assets/imgs/arrow-down.svg";
import React, { lazy } from "react";

const PortfolioCard = lazy(() => import("../components/PortfolioCard.js"));

const Landing = () => {
  return (
    <div>
      <div id="home">
        <AboutHomeSection />
        <a className="cursor-pointer w-full flex justify-center h-11 -mt-32 animate-fade-up">
          <img
            className="animate-pulse animate-infinite opacity-70"
            src={downArrow}
          />
        </a>
      </div>
      <div id="projects">
        <TechnologiesCard />
        <PortfolioCard />
      </div>
      <div id="about">
        <AboutMeCard />
        <div id="contact">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Landing;
