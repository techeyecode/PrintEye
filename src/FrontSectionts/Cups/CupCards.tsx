import React from "react";
import { cupCategories } from "./CupItem";
import CCard from "../../Components/CCard";

const CupCards: React.FC = () => {
  const allProducts = cupCategories.flatMap(
    (category) => category.subcategories
  );

  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <CCard
            key={product.id}
            id={product.id}
            label={product.label}
            count={product.count}
            image={product.images[0]}
            navigateTo={`/Cup/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CupCards;
