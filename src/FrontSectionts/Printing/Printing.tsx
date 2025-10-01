import React from "react";
import CSidebar from "../../Components/CSidebar";
import PrintingCards from "./PrintingCards";
import PageHeader from "../../Components/PageHeader";

const Printing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="All Items"
        subtitle="There's no such thing as too many options"
        backgroundImage="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_800/legacy_dam/en-us/S001906182/NPIB48366-Brochures-GBB-bi-fold-001"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Printing" }]}
      />
      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="Printing Categories" type="Printing" />
        </div>

        <div className="w-full lg:w-3/4">
          <PrintingCards />
        </div>
      </div>
    </div>
  );
};

export default Printing;
