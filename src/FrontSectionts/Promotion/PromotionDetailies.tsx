import React from "react";
import { useParams } from "react-router-dom";
import { productCategories } from "./PromotionItems";
import CDetailies from "../../Components/CDetailies";

import Breadcrumbs from "../../Components/CBreadcrumb";

const PromotionDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id)
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Promotion", path: "/Promotion" },
          { label: "Details" },
        ]}
      />

      <CDetailies id={id} items={productCategories} />
    </div>
  );
};

export default PromotionDetailies;
