import React from "react";
import BusinessCard from "./BusinessCard";
import { SpecialtyPaperFinishes } from "../CardItem";

const PaperFinishes: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">
          Specialty Paper Finishes
        </h2>
        <p className="text-primary">
          Elevate your prints for a distinctive look printed on 16 pt. Premium
          Matte.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {SpecialtyPaperFinishes.map((card, index) => (
          <BusinessCard
            key={index}
            label={card.label}
            count={card.count}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default PaperFinishes;
