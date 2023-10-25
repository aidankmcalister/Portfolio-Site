import React from "react";

const PortfolioCard = () => {
  return (
    <div className="md:h-52 h-80 bg-custom-secondary-blue-dark m-4 rounded-lg p-3 flex flex-col text-white max-w-lg animate-fade-up shadow-lg shadow-custom-light-blue-shadow opacity-80 font-rubik">
      <h1 className="text-2xl">Portfolio</h1>
      <hr className="w-full my-2 text-lg mt-1" />
    </div>
  );
};

export default PortfolioCard;
