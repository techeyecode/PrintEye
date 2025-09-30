import React from "react";
import ProjectsHeader from "./PromotionHeader";
import Cards from "./PromotionCards";
import CSidebar from "../../Components/CSidebar";

const Promotion: React.FC = () => {
  return (
    <div className="bg-white">
      <ProjectsHeader />

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="Promotions" type="Promotion" />
        </div>

        <div className="w-full lg:w-3/4">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
