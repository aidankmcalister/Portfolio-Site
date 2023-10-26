import React from "react";
import githubLogo from "../app/assets/imgs/logos/github-mark.svg";
import linkedIn from "../app/assets/imgs/logos/iconmonstr-linkedin-3.svg";

const Footer = () => {
  return (
    <footer className=" w-full py-4 text-center text-white">
      <div className="flex justify-center">
        <a
          href="https://github.com/aidankmcalister"
          target="_new"
          className="cursor-pointer mx-2">
          <img src={githubLogo} alt="GitHub logo" width="40" />
        </a>
        <a
          href="https://www.linkedin.com/in/aidan-mcalister-28374b235/"
          target="_new"
          className="cursor-pointer mx-2">
          <img src={linkedIn} alt="LinkedIn logo" width="40" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
