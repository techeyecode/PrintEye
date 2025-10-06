import React from "react";
import PageHeader from "../Components/PageHeader";
import CSidebar from "../Components/CSidebar";
import CupCards from "../FrontSectionts/Cups/CupCards";

const Cup: React.FC = () => {
  return (
    <div className="bg-white ">
      <PageHeader
        title="customCups"
        subtitle="customCupsSubtitle"
        backgroundImage="https://about.starbucks.com/uploads/2025/08/Starbucks-Reserve-Fall-Menu_PSLSociety-Merch.jpg"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Cup" }]}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between  gap-6 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="Cups" type="Cup" />
        </div>

        <div className="w-full lg:w-3/4">
          <CupCards />
        </div>
      </div>
    </div>
  );
};

export default Cup;
