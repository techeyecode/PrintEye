import React from "react";
import PageHeader from "../Components/PageHeader";
import GallaryCards from "../FrontSectionts/Gallary/GallaryDetailies";

const Gallary: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="AllItems"
        subtitle="AllItemsSubtitle"
        backgroundImage="https://www.cloveandtwine.com/cdn/shop/collections/visa_card_1500x.jpg?v=1661966680"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "gallary" }]}
      />

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        <GallaryCards />
      </div>
    </div>
  );
};

export default Gallary;
