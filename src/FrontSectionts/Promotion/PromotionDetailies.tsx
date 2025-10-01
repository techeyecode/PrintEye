import React from "react";
import { Link, useParams } from "react-router-dom";
import { productCategories } from "./PromotionItems";
import CDetailies from "../../Components/CDetailies";
import { TiHome } from "react-icons/ti";
import { FaTags } from "react-icons/fa";

const PromotionDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id)
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;

  return (
    <div>
      <nav className="max-w-7xl mx-auto py-10 flex items-center space-x-2 text-sm mb-6 text-primary">
        <Link to="/" className="flex items-center transition-colors">
          <TiHome className="w-4 h-4 mr-1" />
          Home
        </Link>
        <span className="mx-3">/</span>
        <Link to="/Promotion" className="flex items-center transition-colors">
          <FaTags className="w-4 h-4 mr-1" />
          Promotion
        </Link>
      </nav>
      <CDetailies id={id} items={productCategories} />
    </div>
  );
};

export default PromotionDetailies;
