import React from "react";
import PageHeader from "../../Components/PageHeader";
import CSidebar from "../../Components/CSidebar";
import CupCards from "./CupCards";

const Cup: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="All Items"
        subtitle="There's no such thing as too many options"
        backgroundImage="https://about.starbucks.com/uploads/2025/08/Starbucks-Reserve-Fall-Menu_PSLSociety-Merch.jpg"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Cup" }]}
      />

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-5 lg:mx-5 xl: gap-6 lg:gap-5 my-6 md:my-10">
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
