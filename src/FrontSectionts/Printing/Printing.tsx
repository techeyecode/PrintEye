import React from "react";
import CSidebar from "../../Components/CSidebar";
import PrintingCards from "./PrintingCards";
import PageHeader from "../../Components/PageHeader";
import PrintPaperVideo from "../../assets/PaperPrintVideo.mp4";

const Printing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen ">
      <PageHeader
        title="printCollection"
        subtitle="printCollectionSubtitle"
        backgroundImage={PrintPaperVideo}
        breadcrumbs={[{ label: "home", path: "/" }, { label: "printing" }]}
      />
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between  gap-6 my-6 md:my-10 px-4 md:px-2">
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
