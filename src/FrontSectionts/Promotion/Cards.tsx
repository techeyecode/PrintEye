import React from "react";
import { productCategories } from "./PromotionItems";
import CCard from "../../Components/CCard";

const Cards: React.FC = () => {
  const allProducts = productCategories.flatMap(
    (category) => category.subcategories
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <CCard
            key={product.id}
            id={product.id}
            label={product.label}
            count={product.count}
            images={product.images}
            link={`/Promotion/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
