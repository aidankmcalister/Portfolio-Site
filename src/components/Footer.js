import React from "react";
import githubLogo from "../app/assets/imgs/logos/github-mark.svg";

const Footer = () => {
  return (
    <div className="flex justify-center m-4 relative">
      <img
        src={githubLogo}
        alt="github logo"
        width={"40rem"}
        className="text-red-500"
      />
    </div>
  );
};

export default Footer;
