import React from "react";
import PopularBusinessCards from "./PopularBusinessCards";
import BusinessCardTemplates from "./BusinessCardTemplates";
import PaperFinishes from "./PaperFinishes";
import PaperType from "./PaperType";
import ShopByShape from "./ShopByShape";
import BusinessCardsSection from "./BusinessCardsSection";

const Business = () => {
  return (
    <div>
      <PopularBusinessCards />
      <BusinessCardTemplates />
      <PaperFinishes />
      <PaperType />
      <ShopByShape />
      <BusinessCardsSection />
    </div>
  );
};

export default Business;
