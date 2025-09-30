import React from "react";
import CSidebar from "../../Components/CSidebar";
import PrintingHeader from "./PrintingHeader";
import PrintingCards from "./PrintingCards";
import MiniNavbar from "./PrintingNavbar";

const Printing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PrintingHeader />
      <MiniNavbar />

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
