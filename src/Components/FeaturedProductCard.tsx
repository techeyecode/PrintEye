import React from "react";
import { useNavigate } from "react-router-dom";
import { productCategories } from "../FrontSectionts/Promotion/PromotionItems";
import { useTranslation } from "react-i18next";

const featuredCategories = productCategories.filter((cat) =>
  [1, 7, 12, 18].includes(cat.id)
);

const FeaturedProductsUI: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleProductClick = (itemValue: string) => {
    const subcategoryParam = itemValue.toLowerCase().replace(/\s+/g, "-");
    navigate(`/Promotion?subcategories=${subcategoryParam}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featuredCategories.map((item) => (
        <div
          key={item.id}
          className="group bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 border border-gray-100"
          onClick={() => handleProductClick(item.value)}
        >
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={item.image!}
              className="w-full h-full object-cover transform transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

            <div className="absolute top-4 right-4">
              <span className="bg-primary text-white font-semibold text-xs px-3 py-1.5 rounded-full">
                {t("new")}
              </span>
            </div>
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-primary transition-colors duration-300">
                {item.label}
              </h4>
            </div>

            <p className="text-sm text-primary leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductsUI;
