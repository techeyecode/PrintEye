import React from "react";
import { printingCategories } from "../Promotion/Sidebar";
import Cards from "../Promotion/Cards";
import Sidebar from "../Promotion/Sidebar";
import PrintingHeader from "./PrintingHeader";

const Printing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PrintingHeader />

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <Sidebar categories={printingCategories} title="Printing" />
        </div>

        {/* Cards/Content */}
        <div className="w-full lg:w-3/4">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Printing;
