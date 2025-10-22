import React from "react";
import PageHeader from "../Components/PageHeader";
import GallaryCards from "../FrontSectionts/Gallary/CompaniesGallary";

const Gallary: React.FC = () => {
  return (
    <div className="bg-white">
 

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        <GallaryCards />
      </div>
    </div>
  );
};

export default Gallary;
