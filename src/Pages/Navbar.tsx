import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Style/App.css";
import { FaTimes, FaBars } from "react-icons/fa";
import LightMode from "../assets/EyePrintLogo.png";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import helpers from "../utils/helpers";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownClosing, setDropdownClosing] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null
  );
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobileView(mobile);
      if (!mobile) setMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (activeDropdown) closeDropdown();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubcategory(null);
  };

  const handleDropdownEnter = (category: string) => {
    if (!isMobileView) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setDropdownClosing(false);
      setActiveDropdown(category);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobileView && activeDropdown) {
      timeoutRef.current = setTimeout(() => {
        if (!dropdownRef.current?.matches(":hover")) closeDropdown();
      }, 150);
    }
  };

  const closeDropdown = () => {
    setDropdownClosing(true);
    setTimeout(() => {
      setActiveDropdown(null);
      setDropdownClosing(false);
      setActiveSubcategory(null);
    }, 200);
  };

  const handleDropdownClick = (category: string) => {
    if (isMobileView) {
      setActiveDropdown(activeDropdown === category ? null : category);
    } else {
      setActiveDropdown(category);
    }
  };

  const getArrayNames = (category: keyof typeof helpers) => {
    return Object.keys(helpers[category]);
  };

  const handleDropdownItemClick = (category: string, itemName: string) => {
    const subcategoryParam = itemName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${category}?subcategories=${subcategoryParam}`);
    closeMobileMenu();
  };

  const navLinks = [
    { name: "home", link: "/", hasDropdown: false },
    {
      name: "promotion",
      link: "/Promotion",
      hasDropdown: true,
      category: "Promotion" as keyof typeof helpers,
    },
    {
      name: "printing",
      link: "/Printing",
      hasDropdown: true,
      category: "Printing" as keyof typeof helpers,
    },
    {
      name: "uniform",
      link: "/Uniform",
      hasDropdown: true,
      category: "Uniform" as keyof typeof helpers,
    },
    {
      name: "packaging",
      link: "/Packaging",
      hasDropdown: true,
      category: "Packaging" as keyof typeof helpers,
    },
    {
      name: "sign",
      link: "/Sign",
      hasDropdown: true,
      category: "Sign" as keyof typeof helpers,
    },
    {
      name: "cup",
      link: "/Cup",
      hasDropdown: true,
      category: "Cup" as keyof typeof helpers,
    },
    { name: "gallary", link: "/Gallary", hasDropdown: false },
  ];

  const isLinkActive = (linkPath: string) => location.pathname === linkPath;

  // --- DROPDOWN RENDER ---
  const renderDropdown = (category: keyof typeof helpers) => {
    const arrayNames = getArrayNames(category);
    const isPromotion = category === "Promotion";

    return (
      <div
        ref={dropdownRef}
        className={`absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-b-2xl z-50 mt-4 overflow-hidden transition-all duration-300 ${
          dropdownClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
        onMouseEnter={() => handleDropdownEnter(category)}
        onMouseLeave={handleDropdownLeave}
      >
        {isPromotion ? (
          <div className="flex p-8 gap-10 min-w-5xl">
            {/* Left Column: Subcategories */}
            <div className="w-1/3 border-r border-gray-100">
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => navigate(`/${category}`)}
                  className="block text-left text-primary font-semibold hover:text-secondary transition-all duration-300 text-sm mb-2"
                >
                  {t("all")}
                </button>
                {arrayNames.map((name) => (
                  <button
                    key={name}
                    onMouseEnter={() => setActiveSubcategory(name)}
                    className="block text-left text-primary transition-all duration-300 text-sm my-1 rounded-lg cursor-pointer hover:text-secondary"
                  >
                    {t(name)}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Show 2 items of hovered subcategory */}
            <div className="w-2/3">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                {t("featuredProducts")}
              </h3>
              <div className="flex gap-3 flex-wrap">
                {activeSubcategory &&
                  helpers[category][activeSubcategory]
                    .slice(0, 2)
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 mb-6 cursor-pointer"
                        onClick={() =>
                          handleDropdownItemClick(category, activeSubcategory)
                        }
                      >
                        <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                          <div className="text-gray-400 text-sm">
                            {t(item)} Image
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-bold text-primary text-lg">
                              {t(item)}
                            </h4>
                            <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">
                              NEW
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            Premium quality {t(item)} with excellent finish and
                            durability.
                          </p>
                          <span className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all duration-300">
                            {t("shopNow")} <span className="ml-1">→</span>
                          </span>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        ) : (
          // Simple dropdown for other categories
          <div className="grid grid-cols-1 p-4 text-left min-w-[150px]">
            <button
              onClick={() => navigate(`/${category}`)}
              className="block text-left text-primary font-semibold hover:text-secondary transition-all duration-300 text-sm mb-2"
            >
              {t("all")}
            </button>
            {arrayNames.map((name, index) => (
              <button
                key={index}
                onClick={() => handleDropdownItemClick(category, name)}
                className="block text-left text-primary text-sm my-1 hover:text-secondary transition-all duration-300"
              >
                {t(name)}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  // --- NAV LINK ---
  const NavLink = ({ link, name, hasDropdown, category }: any) => {
    const isActive = isLinkActive(link);

    if (!hasDropdown) {
      // Direct links like Home and Gallary
      return (
        <Link
          to={link}
          className={`relative mx-4 py-2 font-semibold text-primary cursor-pointer
            before:content-[''] before:absolute before:left-1/2 before:bottom-0
            before:h-[2px] before:bg-primary before:w-0 before:-translate-x-1/2
            before:transition-all before:duration-300 hover:before:w-full
            ${isActive ? "text-secondary" : ""}`}
        >
          {t(name)}
        </Link>
      );
    }

    // Dropdown links
    return (
      <div
        className="relative group"
        onMouseEnter={() => handleDropdownEnter(category!)}
        onMouseLeave={handleDropdownLeave}
      >
        <span
          className={`relative mx-4 py-2 font-semibold text-primary cursor-pointer
            before:content-[''] before:absolute before:left-1/2 before:bottom-0
            before:h-[2px] before:bg-primary before:w-0 before:-translate-x-1/2
            before:transition-all before:duration-300 hover:before:w-full
            ${isActive ? "text-secondary" : ""}`}
        >
          {t(name)}
        </span>
        {activeDropdown === category && renderDropdown(category!)}
      </div>
    );
  };

  return (
    <header className="relative bg-white top-0 z-40">
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center px-2">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center">
              <img
                src={LightMode}
                className="w-auto h-6 md:h-9 object-contain"
              />
            </Link>

            {!isMobileView && (
              <nav className="flex items-center text-base space-x-1 cursor-pointer">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    link={link.link}
                    name={link.name}
                    hasDropdown={link.hasDropdown}
                    category={link.category}
                  />
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center">
            {!isMobileView && (
              <Link
                to="/Catalog"
                className={`px-6 py-2.5 font-semibold rounded-md transition-all duration-300 ${
                  isLinkActive("/Catalog")
                    ? "text-primary bg-gray-100"
                    : "text-primary hover:text-secondary"
                }`}
              >
                {t("Catalog")}
              </Link>
            )}
            <LanguageSwitcher />

            {isMobileView && (
              <button
                onClick={toggleMobileMenu}
                className={`p-3 focus:outline-none text-primary transition-all duration-300 rounded-lg hover:bg-gray-100 ${
                  mobileMenuOpen ? "bg-gray-100" : ""
                }`}
              >
                {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileView && mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 h-full w-full bg-white z-50 overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-3">
                <img src={LightMode} className="w-auto h-6" alt="EyePrint" />
              </div>
              <button
                onClick={closeMobileMenu}
                className="hover:bg-gray-100 rounded-lg transition-all duration-300 text-primary"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <nav className="p-6 space-y-1">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(link.category!)}
                        className="flex justify-between items-center w-full py-2 px-3 text-left text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                      >
                        {t(link.name)}
                        <span>
                          {activeDropdown === link.category ? (
                            <MdOutlineKeyboardArrowUp />
                          ) : (
                            <MdOutlineKeyboardArrowDown />
                          )}
                        </span>
                      </button>
                      {activeDropdown === link.category && (
                        <div className="pl-1">
                          <button
                            onClick={() => navigate(`/${link.category}`)}
                            className="block w-full text-left py-2 px-3 text-primary font-semibold hover:bg-gray-50"
                          >
                            {t("all")}
                          </button>
                          {getArrayNames(link.category!).map((name, idx) => (
                            <button
                              key={idx}
                              onClick={() =>
                                handleDropdownItemClick(link.category!, name)
                              }
                              className="block w-full text-left py-2 px-3 text-primary rounded-lg transition-all duration-300 hover:bg-gray-50 "
                            >
                              {t(name)}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.link}
                      onClick={closeMobileMenu}
                      className="block py-2 px-3 text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                    >
                      {t(link.name)}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
