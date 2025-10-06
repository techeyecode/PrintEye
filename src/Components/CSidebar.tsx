// CSidebar.tsx
import React, { useState, useEffect } from "react";
import { MdClose, MdSearch, MdExpandLess, MdExpandMore } from "react-icons/md";
import { Input, Checkbox, Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import helpers from "../utils/helpers";
import CButton from "./CButton";

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
  isTablet?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  title?: string;
  type?:
    | "Printing"
    | "Promotion"
    | "Uniform"
    | "Packaging"
    | "Cup"
    | "Sign"
    | "Gallary";
}

interface FilterState {
  categories: string[];
  subcategories: string[];
}

const CSidebar: React.FC<CSidebarProps> = ({
  isMobile = false,
  isTablet = false,
  isOpen = false,
  onClose,
  onOpen,
  title = "Categories",
  type,
}) => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    subcategories: [],
  });
  const [expanded, setExpanded] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(isOpen);
  const [isClientMobile, setIsClientMobile] = useState(false);
  const [isClientTablet, setIsClientTablet] = useState(false);

  // Detect mobile/tablet on client side
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsClientMobile(width < 768);
      setIsClientTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Determine if we should show as button
  const shouldShowAsButton =
    isMobile || isTablet || isClientMobile || isClientTablet;

  useEffect(() => {
    setSidebarOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const categories = params.get("categories")
      ? params.get("categories")!.split(",")
      : [];
    const subcategories = params.get("subcategories")
      ? params.get("subcategories")!.split(",")
      : [];

    setFilters({ categories, subcategories });
  }, [location.search]);

  const updateURL = (newFilters: FilterState) => {
    const params = new URLSearchParams(location.search);

    if (newFilters.categories.length) {
      params.set("categories", newFilters.categories.join(","));
    } else {
      params.delete("categories");
    }

    if (newFilters.subcategories.length) {
      params.set("subcategories", newFilters.subcategories.join(","));
    } else {
      params.delete("subcategories");
    }

    navigate({ search: params.toString() }, { replace: true });
  };

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
    onOpen?.();
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
    onClose?.();
  };

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

  if (!type || type === "Packaging") {
    Object.keys(helpers.Packaging).forEach((catKey) => {
      categories.push({
        value: `Packaging-${catKey}`,
        label: catKey,
        subcategories:
          helpers.Packaging[catKey as keyof typeof helpers.Packaging],
      });
    });
  }

  if (!type || type === "Cup") {
    Object.keys(helpers.Cup).forEach((catKey) => {
      categories.push({
        value: `Cup-${catKey}`,
        label: catKey,
        subcategories: helpers.Cup[catKey as keyof typeof helpers.Cup],
      });
    });
  }

  if (!type || type === "Sign") {
    Object.keys(helpers.Sign).forEach((catKey) => {
      categories.push({
        value: `Sign-${catKey}`,
        label: catKey,
        subcategories: helpers.Sign[catKey as keyof typeof helpers.Sign],
      });
    });
  }

  if (!type || type === "Gallary") {
    Object.keys(helpers.Gallary).forEach((catKey) => {
      categories.push({
        value: `Gallary-${catKey}`,
        label: catKey,
        subcategories: helpers.Gallary[catKey as keyof typeof helpers.Gallary],
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

    const newFilters = { ...filters, categories: updated };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const handleSubcategoryChange = (value: string, checked: boolean) => {
    const updated = checked
      ? [...filters.subcategories, value]
      : filters.subcategories.filter((s) => s !== value);

    const newFilters = { ...filters, subcategories: updated };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const filteredCategories = categories.filter(
    (cat) =>
      cat.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.subcategories.some((sub) =>
        sub.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  if (shouldShowAsButton && !sidebarOpen) {
    return (
      <CButton variant="primary" isFullWidth onClick={handleOpenSidebar}>
        {t("Categories")}
      </CButton>
    );
  }

  return (
    <>
      {shouldShowAsButton && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleCloseSidebar}
        />
      )}

      <div
        className={`flex flex-col min-h-screen transition-all duration-300  bg-white  ${
          shouldShowAsButton
            ? `fixed inset-y-0 left-0 z-50 w-full ${
                sidebarOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`
            : "relative "
        }`}
      >
        <div className="relative p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary">{t(title)}</h2>
          {(shouldShowAsButton || isMobile) && (
            <Button
              type="text"
              icon={<MdClose size={22} />}
              onClick={handleCloseSidebar}
              className={`rounded-full p-2 text-primary `}
            />
          )}
        </div>

        <div className="relative mx-4 p-0.5 rounded-full bg-gradient-to-tr from-primary/50 to-primary mt-1">
          <div className="relative flex items-center rounded-full p-1">
            <MdSearch className="pr-1 text-white border-2 border-y-0 border-l-0 border-r-2 rounded-full w-6 h-6 ml-2 pointer-events-none" />
            <Input
              placeholder={t("search")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              bordered={false}
              className="sidebar ml-3 w-full bg-transparent text-white placeholder-white focus:outline-none text-lg"
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
                  className={`flex items-center justify-between px-4 py-2 rounded-full cursor-pointer  hover:bg-gray-50 border border-primary/20 hover:border-primary/30 transform hover:scale-[1.03]`}
                  onClick={() => toggleExpand(cat.value)}
                >
                  <div className="flex items-center gap-3 ">
                    <span className="font-semibold text-primary">
                      {t(`${cat.label}`)}
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
                    <div className="ml-8 mt-2 space-y-2 pl-2 border-l-2 border-secondary font-semibold">
                      {cat.subcategories.map((sub) => (
                        <div
                          key={sub.value}
                          className="py-2 px-3 rounded-lg hover:bg-blue-50"
                        >
                          {sub.value === "all" ? (
                            <Link
                              to={sub.link || "#"}
                              className="text-primary font-medium block"
                              onClick={handleCloseSidebar}
                            >
                              {t(sub.label)}
                            </Link>
                          ) : (
                            <Checkbox
                              checked={filters.subcategories.includes(
                                sub.value
                              )}
                              onChange={(e) =>
                                handleSubcategoryChange(
                                  sub.value,
                                  e.target.checked
                                )
                              }
                            >
                              <span className="text-sm font-medium text-primary">
                                {t(sub.label)}
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
    </>
  );
};

export default CSidebar;
