import AboutHomeSection from "../components/AboutHomeSection";
import TechnologiesCard from "../components/TechnologiesCard";
import AboutMeCard from "../components/AboutMeCard";
import ContactCard from "../components/ContactCard";
import downArrow from "../app/assets/imgs/arrow-down.svg";
import React, { lazy } from "react";

const PortfolioCard = lazy(() => import("../components/PortfolioCard.js"));

const Landing = () => {
  return (
    <div className="">
      <a href="#home">
        <AboutHomeSection />
        <a className="cursor-pointer w-full flex justify-center h-11 -mt-32 animate-pulse animate-infinite">
          <img className="opacity-70" src={downArrow} />
        </a>
      </a>
      <a href="#projects">
        <TechnologiesCard />
        <PortfolioCard />
      </a>
      <a href="#about">
        <AboutMeCard />
      </a>
      <a href="#contact">
        <ContactCard />
      </a>
    </div>
  );
};

export default Landing;
