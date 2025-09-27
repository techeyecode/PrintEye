import React, { useState } from "react";
import { productCategories } from "./PromosyonItems";
import CCard from "../../Components/CCard";

const Cards: React.FC = () => {
  const [sort, setSort] = useState("default");

  const allProducts = productCategories.flatMap(
    (category) => category.subcategories
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {allProducts.map((product) => (
          <CCard
            key={product.id}
            id={product.id}
            label={product.label}
            count={product.count}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
