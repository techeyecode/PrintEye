// CSidebar.tsx
import React, { useState, useEffect } from "react";
import { MdClose, MdSearch, MdExpandLess, MdExpandMore } from "react-icons/md";
import { Input, Checkbox, Button } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../Context/ThemeContext";
import helpers from "../utils/helpers";

interface Item {
  value: string;
  label: string;
  link?: string;
}

interface Category {
  value: string;
  label: string;
  subcategories: Item[];
}

interface CSidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  type?: "Printing" | "Promotion" | "Uniform";
}

interface FilterState {
  categories: string[];
  subcategories: string[];
}

const CSidebar: React.FC<CSidebarProps> = ({
  isMobile = false,
  isOpen = true,
  onClose,
  title = "Categories",
  type,
}) => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    subcategories: [],
  });
  const [expanded, setExpanded] = useState<string[]>([]);
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  // Build categories from helpers
  const categories: Category[] = [];

  if (!type || type === "Printing") {
    Object.keys(helpers.Printing).forEach((catKey) => {
      categories.push({
        value: `Printing-${catKey}`,
        label: catKey,
        subcategories:
          helpers.Printing[catKey as keyof typeof helpers.Printing],
      });
    });
  }

  if (!type || type === "Promotion") {
    Object.keys(helpers.Promotion).forEach((catKey) => {
      categories.push({
        value: `Promotion-${catKey}`,
        label: catKey,
        subcategories:
          helpers.Promotion[catKey as keyof typeof helpers.Promotion],
      });
    });
  }
  if (!type || type === "Uniform") {
    Object.keys(helpers.Uniform).forEach((catKey) => {
      categories.push({
        value: `Uniform-${catKey}`,
        label: catKey,
        subcategories: helpers.Uniform[catKey as keyof typeof helpers.Uniform],
      });
    });
  }

  const toggleExpand = (value: string) => {
    setExpanded((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleCategoryChange = (value: string, checked: boolean) => {
    const updated = checked
      ? [...filters.categories, value]
      : filters.categories.filter((c) => c !== value);
    setFilters({ ...filters, categories: updated });
  };

  const handleSubcategoryChange = (value: string, checked: boolean) => {
    const updated = checked
      ? [...filters.subcategories, value]
      : filters.subcategories.filter((s) => s !== value);
    setFilters({ ...filters, subcategories: updated });
  };

  const filteredCategories = categories.filter(
    (cat) =>
      cat.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.subcategories.some((sub) =>
        sub.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  if (!visible && !isOpen) return null;

  return (
    <div
      className={`flex flex-col min-h-screen lg:w-full transition-all duration-300
        ${isDarkMode ? "bg-gray-900 text-white" : "bg-white"}
        ${isMobile ? "fixed inset-y-0 left-0 z-50 w-80" : "relative"}
        ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
    >
      {/* Header */}
      <div className="relative p-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">{t(title)}</h2>
        {isMobile && onClose && (
          <Button
            type="text"
            icon={<MdClose size={22} />}
            onClick={onClose}
            className={`rounded-full p-2 ${
              isDarkMode ? "text-blue-400" : "text-primary"
            }`}
          />
        )}
      </div>

      {/* Search */}
      <div className="relative mx-4 p-0.5 rounded-full bg-gradient-to-tr from-primary/50 to-primary mt-1">
        <div className="relative flex items-center rounded-full p-1">
          <MdSearch className="pr-1 text-white border-2 border-y-0 border-l-0 border-r-2 rounded-full w-6 h-6 ml-2 pointer-events-none" />
          <Input
            placeholder="Search categories..."
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

          return (
            <div key={cat.value}>
              <div
                className={`flex items-center justify-between p-3 rounded-full cursor-pointer ${
                  isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-50"
                } border border-primary/20 hover:border-primary/30 transform hover:scale-[1.03]`}
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
                  <span className="font-semibold text-primary">
                    {cat.label}
                  </span>
                </div>
                <div
                  className={`transition-transform duration-300 text-primary ${
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

              {cat.subcategories.length > 0 && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-8 mt-2 space-y-2 pl-2 border-l-2 border-secondary">
                    {cat.subcategories.map((sub) => (
                      <div
                        key={sub.value}
                        className="py-2 px-3 rounded-lg hover:bg-blue-50"
                      >
                        {sub.value === "all" ? (
                          <Link
                            to={sub.link || "#"}
                            className="text-primary font-medium block"
                          >
                            {sub.label}
                          </Link>
                        ) : (
                          <Checkbox
                            checked={filters.subcategories.includes(sub.value)}
                            onChange={(e) =>
                              handleSubcategoryChange(
                                sub.value,
                                e.target.checked
                              )
                            }
                          >
                            <span className="text-sm font-medium text-primary">
                              {sub.label}
                            </span>
                          </Checkbox>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CSidebar;
