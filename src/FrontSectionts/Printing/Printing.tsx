import React from "react";
import CSidebar from "../../Components/CSidebar";
import PrintingCards from "./PrintingCards";
import PageHeader from "../../Components/PageHeader";

const Printing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="printCollection"
        subtitle="printCollectionSubtitle"
        backgroundImage="https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_800/legacy_dam/en-us/S001906182/NPIB48366-Brochures-GBB-bi-fold-001"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "printing" }]}
      />
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between  gap-6 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="printingCategories" type="Printing" />
        </div>

        <div className="w-full lg:w-3/4">
          <PrintingCards />
        </div>
      </div>
    </div>
  );
};

export default Printing;
