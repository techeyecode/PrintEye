import React from "react";
import Cards from "./PromotionCards";
import CSidebar from "../../Components/CSidebar";
import PageHeader from "../../Components/PageHeader";

const Promotion: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="All Items"
        subtitle="There's no such thing as too many options"
        backgroundImage="https://www.cloveandtwine.com/cdn/shop/collections/visa_card_1500x.jpg?v=1661966680"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Promotion" }]}
      />

      <div className="flex flex-col lg:flex-row items-start justify-between mx-4 md:mx-10 lg:mx-20 gap-6 lg:gap-10 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="Promotions" type="Promotion" />
        </div>

        <div className="w-full lg:w-3/4">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
