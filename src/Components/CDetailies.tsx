import React, { useState } from "react";
import { FaCode, FaShoppingCart, FaAngleDoubleRight } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import CCard from "./CCard";

// Unified Product type
// In your CDetailies component or types file
export interface ProductType {
  id: number | string;
  label: string;
  count?: number | string; // Allow both number and string
  image?: string;
  images?: string[];
  description?: string | string[];
  category?: string;
  link?: string; // Add this if needed
}

export interface CategoryType {
  id: number | string;
  label: string;
  subcategories: ProductType[];
}
export interface CardItem {
  id: number | string;
  label: string;
  subcategories: ProductType[];
}

// Props: items can be flat or nested
interface CDetailiesProps {
  id: string | number;
  items: ProductType[] | CategoryType[] | CardItem[];
}

const CDetailies: React.FC<CDetailiesProps> = ({ id, items }) => {
  // This line should now work without red underline
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Flatten all products if nested
  const allProducts: ProductType[] =
    "subcategories" in (items[0] || {})
      ? (items as CategoryType[]).flatMap((cat) => cat.subcategories)
      : (items as ProductType[]);

  const product = allProducts.find((p) => p.id.toString() === id.toString());

  if (!product)
    return (
      <div className="p-4 text-red-500 text-center">Product not found</div>
    );

  // Rest of your component code remains the same...
  // Find parent category if nested
  const parentCategory =
    "subcategories" in (items[0] || {})
      ? (items as CategoryType[]).find((cat) =>
          cat.subcategories.some((sub) => sub.id === product.id)
        )
      : undefined;

  // Related products
  const relatedProducts = product.category
    ? allProducts.filter(
        (p) => p.category === product.category && p.id !== product.id
      )
    : [];

  const images = product.images?.length
    ? product.images
    : product.image
    ? [product.image]
    : ["/placeholder.png"];

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
      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-7/12 relative">
          <div className="h-[500px] flex items-center justify-center rounded-xl">
            <img
              src={images[activeIndex]}
              className="max-h-full max-w-full object-contain rounded-xl"
            />
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

        {/* Info */}
        <div className="w-full lg:w-5/12 flex flex-col gap-4 text-primary">
          <h2 className="text-2xl font-semibold">{product.label}</h2>
          {product.id && (
            <p className="flex items-center gap-2">
              <FaCode /> ID: {product.id}
            </p>
          )}
          <p className="flex items-center gap-2">
            <FaShoppingCart /> Quantity: {product.count || "N/A"}
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

          <button className="bg-primary text-white font-semibold py-2 rounded-full mt-2">
            Get Quote
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Other Products in {product.category || parentCategory?.label}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.slice(0, 4).map((sub) => (
              <CCard
                key={sub.id}
                id={sub.id}
                label={sub.label}
                count={sub.count}
                image={sub.images?.[0] || sub.image || "/placeholder.png"}
                navigateTo={``}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CDetailies;
