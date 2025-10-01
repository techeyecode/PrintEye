// StandardBrochure.tsx
import React from "react";
import { foldBrochures } from "./BrochuresIteams"; // make sure the file name matches
import BrochureCard from "./BrochureCard";

const FoldBrochure: React.FC = () => {
  return (
    <div className="container mx-auto py-10 text-primary">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">Fold Brochure</h2>
        <p>Design a stunning card that perfectly captures your brand.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {foldBrochures.map((card, index) => (
          <BrochureCard
            key={index}
            title={card.title}
            image={card.image}
            id={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FoldBrochure;
