// PromosyonDetailies.tsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productCategories } from "./PromosyonItems";
import {
  FaCode,
  FaShoppingCart,
  FaMoneyBill,
  FaAngleDoubleRight,
  FaTags,
} from "react-icons/fa";
import CCard from "../../Components/CCard";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { TiHome } from "react-icons/ti";

const PromosyonDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const allProducts = productCategories.flatMap((cat) => cat.subcategories);

  const product = allProducts.find((p) => p.id.toString() === id);

  if (!product)
    return (
      <div className="p-4 text-red-500 text-center">Product not found</div>
    );

  const parentCategory = productCategories.find((cat) =>
    cat.subcategories.some((sub) => sub.id === product.id)
  );

  const relatedSubcategories = parentCategory
    ? parentCategory.subcategories.filter((sub) => sub.id !== product.id)
    : [];

  // ✅ Use product.images instead of single image
  const images =
    product.images && product.images.length > 0
      ? product.images
      : ["/placeholder.png"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const descriptionArray = Array.isArray(product.description)
    ? product.description
    : product.description
    ? [product.description]
    : [];

  return (
    <section className="max-w-7xl mx-auto p-4">
      <nav className="flex items-center space-x-2 text-sm mb-6 text-primary">
        <Link to="/" className="flex items-center transition-colors">
          <TiHome className="w-4 h-4 mr-1" />
          Home
        </Link>
        <span className="mx-3">/</span>

        <Link to="/Promosyon" className="flex items-center transition-colors">
          <FaTags className="w-4 h-4 mr-1" />
          Promosyon
        </Link>
        <span className="mx-3">/</span>
        <span className="text-primary font-medium">{product.label}</span>
      </nav>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-7/12 relative">
          <div className="h-[500px] ">
            <div className="h-[500px] flex items-center justify-center  rounded-xl">
              <img
                src={images[activeIndex]}
                className="max-h-full max-w-full object-contain rounded-xl"
              />
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
          >
            <GrFormPrevious size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
          >
            <MdOutlineNavigateNext size={24} />
          </button>

          <div className="flex gap-2 mt-2 overflow-x-auto">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  idx === activeIndex
                    ? "border-secondary"
                    : "border-transparent"
                }`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-5/12 flex flex-col gap-4 text-primary">
          <h2 className="text-2xl font-semibold">{product.label}</h2>

          {product.code && (
            <p className="flex items-center gap-2">
              <FaCode /> Code: {product.code}
            </p>
          )}

          <p className="flex items-center gap-2">
            <FaShoppingCart /> Quantity: {product.count || 0}
          </p>
          <p className="flex items-center gap-2">
            <FaMoneyBill /> Price: ${product.count || "N/A"}
          </p>

          {descriptionArray.length > 0 && (
            <div className="mt-3">
              <h3 className="text-xl font-semibold mb-2">
                Product Description
              </h3>
              <ul className="list-disc list-inside flex flex-col gap-1">
                {descriptionArray.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaAngleDoubleRight /> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="bg-secondary text-primary font-semibold py-2 rounded-full mt-2">
            Get Quote
          </button>
        </div>
      </div>

      {relatedSubcategories.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Other Products in {parentCategory?.label}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedSubcategories.map((sub) => (
              <CCard
                key={sub.id}
                id={sub.id}
                label={sub.label}
                count={sub.count}
                images={sub.images}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default PromosyonDetailies;
