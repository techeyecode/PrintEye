import React from "react";
import ProjectsHeader from "./PromosyonHeader";
import Sidebar from "./Sidebar";
import Cards from "./Cards";

const Promosyon: React.FC = () => {
  return (
    <div className="bg-white">
      <ProjectsHeader />

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <Sidebar />
        </div>

        <div className="w-full lg:w-3/4">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Promosyon;
