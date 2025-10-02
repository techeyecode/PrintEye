import React from "react";
import { packagingCategories } from "./PackagingItems";
import CCard from "../../Components/CCard";

const PackagingCards: React.FC = () => {
  const allProducts = packagingCategories.flatMap(
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
            navigateTo={`/Packaging/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagingCards;
