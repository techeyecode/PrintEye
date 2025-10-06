import React from "react";
import PageHeader from "../Components/PageHeader";
import CSidebar from "../Components/CSidebar";
import PromotionCards from "../FrontSectionts/Promotion/PromotionCards";

const Promotion: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="exploreOurPromotions"
        subtitle="productionSubtitle"
        backgroundImage="https://www.cloveandtwine.com/cdn/shop/collections/visa_card_1500x.jpg?v=1661966680"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "promotion" }]}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between  gap-6 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="promotion" type="Promotion" />
        </div>

        <div className="w-full lg:w-3/4">
          <PromotionCards />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
