// In PrintingCards.tsx
import React from "react";
import { AllBusinessCards } from "./CardItem";
import CCard from "../../Components/CCard";

const PrintingCards: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {AllBusinessCards.map((print) => (
          <CCard
            key={print.id}
            id={print.id}
            label={print.label}
            count={print.count}
            image={print.image}
            navigateTo={`/Printing/${print.id}`}
            aspectRatio="aspect-[4/4]"
          />
        ))}
      </div>
    </div>
  );
};

export default PrintingCards;
