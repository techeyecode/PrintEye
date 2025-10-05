import React from "react";
import { companies } from "./GallaryItems"; // only 2 companies
import CCard from "../../Components/CCard";

const GallaryCards: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {companies.map((company) => (
          <CCard
            key={company.id}
            id={company.id}
            label={company.name}
            image={company.image}
            navigateTo={`/Gallary/${company.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GallaryCards;
