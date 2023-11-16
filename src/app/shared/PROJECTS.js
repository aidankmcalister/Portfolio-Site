import portfolioProjectImg from "../assets/imgs/portfolioProjectImg.png";
// import JSONFormatterImg from "../assets/imgs/JSONFormatterImg.png";
import moneyTrackerImg from "../assets/imgs/money-tracker.png";
import ageCalculatorImg from "../assets/imgs/age-calculator.png";
import coffeeImg from "../assets/imgs/coffee.png";
import netflixImg from "../assets/imgs/netflix.png";

export const PROJECTS = [
  {
    id: 0,
    img: netflixImg,
    lang: ["js", "react", "tailwind"],
    name: "Netflix Clone",
    repolink: "https://github.com/aidankmcalister/netflix-clone",
    sitelink: "https://netflix-aidanmcalister.netlify.app",
    description: "Netflix clone using TMDB",
    readme: "",
  },
  {
    id: 1,
    img: portfolioProjectImg,
    lang: ["js", "tailwind", "react"],
    name: "Portfolio Site",
    repolink: "https://github.com/aidankmcalister/Portfolio-Site",
    sitelink: "https://aidanmcalister.netlify.app/",
    description:
      "This is the project for this site. I've used multiple packages like tsparticles, react-scroll, tailwindcss-animations, and more.",
    readme: "",
  },
  {
    id: 2,
    img: coffeeImg,
    lang: ["js", "react", "tailwind"],
    name: "Coffee Shop",
    repolink: "https://github.com/aidankmcalister/coffee-shop-site",
    sitelink: "https://coffee-shop-aidanmcalister.netlify.app/",
    description: "Site for a coffee shop based in New York that isn't real",
    readme: "",
  },
  {
    id: 3,
    img: ageCalculatorImg,
    lang: ["js", "tailwind", "react"],
    name: "Age Calculator",
    repolink: "https://github.com/aidankmcalister/age-calculator",
    sitelink: "https://age-calculator-akm.netlify.app",
    description:
      "Age calculator that displays the time since the date you inputted in years, months, and days",
    readme: "",
  },
  {
    id: 4,
    img: moneyTrackerImg,
    lang: ["js", "tailwind", "react", "nodejs", "mongodb"],
    name: "Money Tracker",
    repolink: "https://github.com/aidankmcalister/money-tracker",
    description:
      "A full-stack web application that helps you manage your finances. It consists of a backend API powered by MongoDB to store financial data in the /api directory and a front-end interface in the root folder built using React to visualize and interact with the data.",
    readme: "",
  },
];
