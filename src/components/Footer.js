import React from "react";
import githubLogo from "../app/assets/imgs/logos/github-mark.svg";
import linkedIn from "../app/assets/imgs/logos/iconmonstr-linkedin-3.svg";

const Footer = () => {
  return (
    <div className="flex justify-center m-4 relative">
      <a
        href="https://github.com/aidankmcalister"
        target="_new"
        className="cursor-pointer mx-2">
        <img src={githubLogo} alt="github logo" width={"40rem"} />
      </a>
      <a
        href="https://www.linkedin.com/in/aidan-mcalister-28374b235/"
        target="_new"
        className="cursor-pointer mx-2">
        <img src={linkedIn} alt="linkedIn logo" width={"40rem"} />
      </a>
    </div>
  );
};

export default Footer;
