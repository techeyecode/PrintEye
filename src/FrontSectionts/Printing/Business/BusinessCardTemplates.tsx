import React from "react";
import BusinessCard from "./BusinessCard";
import { BusinessCardTemplate } from "../CardItem";

const BusinessCardTemplates: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">
          Business Card Templates
        </h2>
        <p className="text-primary">
          Design a stunning card that perfectly captures your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {BusinessCardTemplate.map((card, index) => (
          <BusinessCard
            key={index}
            name={card.name}
            price={card.price}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessCardTemplates;
