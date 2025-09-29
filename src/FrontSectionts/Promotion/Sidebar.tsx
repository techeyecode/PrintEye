import React, { useState, useEffect } from "react";
import { MdClose, MdSearch, MdExpandLess, MdExpandMore } from "react-icons/md";
import { Button, Input, Checkbox } from "antd";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../Context/ThemeContext";
import { CardItem, FilterState, initialFilterState } from "./SidebarItems";

interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  categories: CardItem[];
  title?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isMobile = false,
  isOpen = true,
  onClose,
  categories,
  title = "Categories",
}) => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [visible, setVisible] = useState(isOpen);
  const [searchParams, setSearchParams] = useSearchParams();

  // Sync filters from URL
  useEffect(() => {
    const urlParams = Object.fromEntries(searchParams.entries());

    setFilters({
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
      ratings: urlParams.ratings
        ? urlParams.ratings.split(",").map(Number)
        : [],
      categoryType: urlParams.categoryType as
        | "printing"
        | "promotion"
        | undefined,
    });
  }, [searchParams]);

  // Handle mobile slide-in
  useEffect(() => {
    if (isOpen) setVisible(true);
    else {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible && !isOpen) return null;

  const toggleExpand = (value: string) => {
    setExpanded((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setFilters(initialFilterState);
    setSearchTerm("");
    setExpanded([]);
    setSearchParams({});
  };

  const updateURLParams = (newFilters: FilterState) => {
    const params = new URLSearchParams();

    if (newFilters.categories.length)
      params.set("categories", newFilters.categories.join(","));
    if (newFilters.subcategories.length)
      params.set("subcategories", newFilters.subcategories.join(","));
    if (
      newFilters.priceRange[0] > initialFilterState.priceRange[0] ||
      newFilters.priceRange[1] < initialFilterState.priceRange[1]
    ) {
      params.set("minPrice", newFilters.priceRange[0].toString());
      params.set("maxPrice", newFilters.priceRange[1].toString());
    }
    if (newFilters.ratings.length)
      params.set("ratings", newFilters.ratings.join(","));
    if (newFilters.categoryType)
      params.set("categoryType", newFilters.categoryType);

    setSearchParams(params);
  };

  const handleCategoryChange = (value: string, checked: boolean) => {
    const updated = checked
      ? [...filters.categories, value]
      : filters.categories.filter((c) => c !== value);

    const newFilters = { ...filters, categories: updated };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handleSubcategoryChange = (value: string, checked: boolean) => {
    const updated = checked
      ? [...filters.subcategories, value]
      : filters.subcategories.filter((s) => s !== value);

    const newFilters = { ...filters, subcategories: updated };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const filteredCategories = categories.filter(
    (cat) =>
      cat.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.subcategories?.some((sub) =>
        sub.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div
      className={`flex flex-col !min-h-screen lg:w-full transition-all duration-300 ease-out
        ${isDarkMode ? "bg-gray-900 text-white" : "bg-white"}
        ${isMobile ? "fixed inset-y-0 left-0 z-50 w-80" : "relative"}
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
      `}
    >
      {/* Header */}
      <div className="relative p-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">{t(title)}</h2>
        {isMobile && onClose && (
          <Button
            type="text"
            icon={<MdClose size={22} />}
            onClick={onClose}
            className={`rounded-full p-2 transition-all duration-200 hover:scale-110
              ${
                isDarkMode
                  ? "!text-blue-400 hover:!bg-blue-400 hover:!bg-opacity-20"
                  : "!text-primary hover:!bg-gray-100"
              }`}
          />
        )}
      </div>

      {/* Search */}
      <div className="relative mx-4 p-0.5 rounded-full bg-gradient-to-tr from-primary/50 to-primary mt-1">
        <div className="relative flex items-center rounded-full p-1">
          <MdSearch className="pr-1 text-white border-2 border-y-0 border-l-0 border-r-2 rounded-full w-6 h-6 ml-2 pointer-events-none" />
          <Input
            placeholder={t("Search categories...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bordered={false}
            className="ml-3 w-full bg-transparent text-white placeholder-white focus:outline-none text-lg"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredCategories.map((cat) => {
          const isExpanded = expanded.includes(cat.value);
          const Icon = cat.icon; // dynamically render icon
          return (
            <div key={cat.value}>
              {/* Category */}
              <div
                className={`flex items-center justify-between p-3 rounded-full cursor-pointer transition-all duration-200
                  ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-50"}
                  border border-primary/20 hover:border-primary/30 transform hover:scale-[1.03]`}
                onClick={() => toggleExpand(cat.value)}
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={filters.categories.includes(cat.value)}
                    onChange={(e) =>
                      handleCategoryChange(cat.value, e.target.checked)
                    }
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Icon className="text-xl text-primary" />
                  <span className="font-semibold">{cat.label}</span>
                </div>
                <div
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {isExpanded ? (
                    <MdExpandLess size={20} />
                  ) : (
                    <MdExpandMore size={20} />
                  )}
                </div>
              </div>

              {/* Subcategories */}
              {cat.subcategories && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-8 mt-2 space-y-2 pl-2 border-l-2 border-secondary">
                    {cat.subcategories.map((sub) => (
                      <div
                        key={sub.value}
                        className="flex items-center py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-opacity-20"
                      >
                        <Checkbox
                          checked={filters.subcategories.includes(sub.value)}
                          onChange={(e) =>
                            handleSubcategoryChange(sub.value, e.target.checked)
                          }
                        >
                          <span className="text-sm font-medium">
                            {sub.label}
                          </span>
                        </Checkbox>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Clear All Button */}
      <div className="p-4">
        <Button type="default" block onClick={clearAllFilters}>
          {t("Clear All")}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
