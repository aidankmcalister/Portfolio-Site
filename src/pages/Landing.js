import AboutHomeSection from "../components/AboutHomeSection";
import TechnologiesCardMd from "../components/TechnologiesCardMd";
import TechnologiesCardSm from "../components/TechnologiesCardSm";
import AboutMeCard from "../components/AboutMeCard";
import AboutImgCard from "../components/AboutImgCard";
import ContactCard from "../components/ContactCard";

import downArrow from "../app/assets/imgs/arrow-down.svg";

import React, { lazy } from "react";
import { Link as ScrollLink } from "react-scroll";

const PortfolioCard = lazy(() => import("../components/PortfolioCard.js"));

const Landing = () => {
  return (
    <div>
      <div id="home">
        <div className="flex  items-center">
          <div className="w-3/5">
            <AboutHomeSection />
          </div>
          <TechnologiesCardMd />
        </div>

        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer w-full flex justify-center h-11 -mt-28 animate-fade-up">
          <img
            className="animate-pulse animate-infinite opacity-70"
            alt="Down Arrow"
            src={downArrow}
          />
        </ScrollLink>
      </div>
      <div
        id="projects"
        className="md:w-screen md:flex md:flex-col md:items-center">
        <TechnologiesCardSm />
        <PortfolioCard />
      </div>

      <div
        id="about"
        className="md:w-screen md:flex md:flex-col md:items-center">
        <div className=" md:w-3/4 md:grid md:grid-cols-2 shadow-md bg-slate-800 bg-opacity-70 rounded-lg animate-fade-left">
          <div className="md:h-full md:flex md:items-center md:justify-center">
            <AboutMeCard />
          </div>
          <div className="md:flex md:items-center md:justify-center">
            <AboutImgCard />
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="md:w-screen md:flex md:flex-col md:items-center">
        <ContactCard />
      </div>
    </div>
  );
};

export default Landing;
