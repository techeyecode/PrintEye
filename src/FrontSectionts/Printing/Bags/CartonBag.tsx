import React from "react";
import { CartonBags } from "./Bags";
import BagCard from "./BagCard";

const CartonBag: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">Carton Bags</h2>
        <p className="text-primary">
          Explore our durable carton bags — available in multiple sizes and
          customizable options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {CartonBags.map((card) => (
          <BagCard
            key={card.id}
            id={card.id}
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

export default CartonBag;
