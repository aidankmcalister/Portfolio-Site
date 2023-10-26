import React from "react";
import PortfolioPageCard from "../components/portfolioPage/PortfolioPageCard";
import { useParams } from "react-router-dom";
import { selectProjectById } from "../features/projectsSlice";

const PortfolioPage = () => {
  const { projectId } = useParams();
  const project = selectProjectById(projectId);
  return (
    <div className="mt-14 flex justify-center">
      <PortfolioPageCard project={project} />
    </div>
  );
};

export default PortfolioPage;
