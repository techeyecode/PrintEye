import React from "react";
import CSidebar from "../../Components/CSidebar";
import PageHeader from "../../Components/PageHeader";
import PackagingCards from "./PackagingCards";

const Packaging: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="All Items"
        subtitle="There's no such thing as too many options"
        backgroundImage="https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Packaging" }]}
      />

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="Packaging" type="Packaging" />
        </div>

        <div className="w-full lg:w-3/4">
          <PackagingCards />
        </div>
      </div>
    </div>
  );
};

export default Packaging;
