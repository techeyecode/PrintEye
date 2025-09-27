import React, { useState, useEffect } from "react";
import { MdClose, MdSearch, MdExpandLess, MdExpandMore } from "react-icons/md";
import { Button, Input, Checkbox } from "antd";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../Context/ThemeContext";
import { productCategories, initialFilterState } from "./SidebarItems";

interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
  isOpen?: boolean;
}

const Sidebar = ({
  isMobile = false,
  onClose,
  isOpen = true,
}: SidebarProps) => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState(initialFilterState);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(isOpen);
  const [searchParams, setSearchParams] = useSearchParams();

  // Sync filters from URL on component mount and when URL changes
  useEffect(() => {
    const urlParams = Object.fromEntries(searchParams.entries());

    const newFilters = {
      categories: urlParams.categories ? urlParams.categories.split(",") : [],
      subcategories: urlParams.subcategories
        ? urlParams.subcategories.split(",")
        : [],
      priceRange: [
        urlParams.minPrice
          ? Number(urlParams.minPrice)
          : initialFilterState.priceRange[0],
        urlParams.maxPrice
          ? Number(urlParams.maxPrice)
          : initialFilterState.priceRange[1],
      ],
      ratings: urlParams.ratings ? urlParams.ratings.split(",") : [],
    };

    setFilters(newFilters);
  }, [searchParams]);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
    else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const toggleExpand = (category: string) => {
    setExpanded((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearAllFilters = () => {
    setFilters(initialFilterState);
    setSearchTerm("");
    setExpanded([]);
    setSearchParams({});
  };

  const updateURLParams = (newFilters: typeof initialFilterState) => {
    const params = new URLSearchParams();

    if (newFilters.categories.length > 0) {
      params.set("categories", newFilters.categories.join(","));
    }

    if (newFilters.subcategories.length > 0) {
      params.set("subcategories", newFilters.subcategories.join(","));
    }

    if (
      newFilters.priceRange[0] > initialFilterState.priceRange[0] ||
      newFilters.priceRange[1] < initialFilterState.priceRange[1]
    ) {
      params.set("minPrice", newFilters.priceRange[0].toString());
      params.set("maxPrice", newFilters.priceRange[1].toString());
    }

    if (newFilters.ratings.length > 0) {
      params.set("ratings", newFilters.ratings.join(","));
    }

    setSearchParams(params);
  };

  const handleCategoryChange = (categoryValue: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...filters.categories, categoryValue]
      : filters.categories.filter((c) => c !== categoryValue);

    const newFilters = {
      ...filters,
      categories: updatedCategories,
    };

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handleSubcategoryChange = (
    subcategoryValue: string,
    checked: boolean
  ) => {
    const updatedSubcategories = checked
      ? [...filters.subcategories, subcategoryValue]
      : filters.subcategories.filter((s) => s !== subcategoryValue);

    const newFilters = {
      ...filters,
      subcategories: updatedSubcategories,
    };

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    const newFilters = {
      ...filters,
      priceRange: [min, max],
    };

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handleRatingChange = (ratingValue: string, checked: boolean) => {
    const updatedRatings = checked
      ? [...filters.ratings, ratingValue]
      : filters.ratings.filter((r) => r !== ratingValue);

    const newFilters = {
      ...filters,
      ratings: updatedRatings,
    };

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const filteredCategories = productCategories.filter(
    (category) =>
      category.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.subcategories.some((sub) =>
        sub.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div
      className={`
        flex flex-col !h-screen lg:w-full 
        transition-all duration-300 ease-out 
        ${isDarkMode ? "bg-gray-900" : ""}
        ${isMobile ? "fixed inset-y-0 left-0 z-50 w-80" : "relative"}
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        
      `}
    >
      {/* Header */}
      <div className="relative p-4 ">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary ">{t("Promosyon")}</h2>
          <Button
            type="text"
            icon={<MdClose size={22} />}
            onClick={onClose}
            className={`
              rounded-full p-2 transition-all duration-200
              ${
                isDarkMode
                  ? "!text-blue-400 hover:!bg-blue-400 hover:!bg-opacity-20"
                  : "!text-primary hover:!bg-secondary"
              }
              hover:scale-110
            `}
          />
        </div>
      </div>
      <div className="relative mx-4 p-0.5 rounded-full bg-gradient-to-tr from-primary/50 to-primary mt-1">
        <div className="relative flex items-center rounded-full p-1">
          <MdSearch className="pr-1 text-white border-2 border-y-0 border-l-0 border-r-2 rounded-full w-6 h-6 ml-2 pointer-events-none" />
          <Input
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bordered={false}
            className="ml-3 w-full bg-transparent !text-white !placeholder-white focus:outline-none text-lg"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredCategories.map((category, index) => {
          const isExpanded = expanded.includes(category.value);

          return (
            <div
              key={category.value}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`
                  flex items-center justify-between p-3 rounded-full cursor-pointer
                  transition-all duration-200 ease-out
                  ${
                    isDarkMode
                      ? "hover:bg-gray-800 active:bg-gray-700"
                      : "hover:bg-gray-50 active:bg-gray-100"
                  }
                  border border-primary/20 hover:border-primary/30
                  transform hover:scale-[1.03] 
                  shadow-xs
                `}
                onClick={() => toggleExpand(category.value)}
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={filters.categories.includes(category.value)}
                    onChange={(e) =>
                      handleCategoryChange(category.value, e.target.checked)
                    }
                    onClick={(e) => e.stopPropagation()}
                  />
                  <category.icon className="text-xl text-primary" />
                  <span className="font-semibold text-primary">
                    {category.label}
                  </span>
                </div>
                <div
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {isExpanded ? (
                    <MdExpandLess className="text-primary" size={20} />
                  ) : (
                    <MdExpandMore className="text-primary" size={20} />
                  )}
                </div>
              </div>

              {/* Subcategories */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-8 mt-2 space-y-2 pl-2 border-l-2 border-secondary">
                  {category.subcategories.map((sub, subIndex) => (
                    <div
                      key={sub.value}
                      className="flex items-center justify-between py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-opacity-20"
                      style={{ animationDelay: `${subIndex * 30}ms` }}
                    >
                      <Checkbox
                        checked={filters.subcategories.includes(sub.value)}
                        onChange={(e) =>
                          handleSubcategoryChange(sub.value, e.target.checked)
                        }
                        className={`transition-all duration-200 ${
                          isDarkMode ? "!text-gray-300" : "!text-gray-700"
                        } hover:!text-primary `}
                      >
                        <span className="text-sm font-medium">{sub.label}</span>
                      </Checkbox>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
