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
import FeaturedProductCard from "../Components/FeaturedProductCard";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLgView, setIsLgView] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      const lg = window.innerWidth >= 1024 && window.innerWidth < 1280;
      setIsMobileView(mobile);
      setIsLgView(lg);
      if (!mobile) setMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (category: string) => {
    if (!isMobileView) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveDropdown(category);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileView) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150);
    }
  };

  const handleNavClick = (link: string, category?: string) => {
    if (isMobileView && category) {
      setActiveDropdown(activeDropdown === category ? null : category);
    } else {
      navigate(link);
      closeMobileMenu();
      setActiveDropdown(null);
    }
  };

  const getArrayNames = (category: keyof typeof helpers) =>
    Object.keys(helpers[category]);

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
      name: "packaging",
      link: "/Packaging",
      hasDropdown: true,
      category: "Packaging" as keyof typeof helpers,
    },
    {
      name: "uniform",
      link: "/Uniform",
      hasDropdown: true,
      category: "Uniform" as keyof typeof helpers,
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

  const renderDropdown = (category: keyof typeof helpers) => {
    const arrayNames = getArrayNames(category);

    return (
      <div
        ref={dropdownRef}
        className="absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-b-2xl z-20 mt-4 overflow-hidden"
        onMouseEnter={() => handleMouseEnter(category)}
        onMouseLeave={handleMouseLeave}
      >
        {category === "Promotion" ? (
          <div className="flex p-2 gap-10 min-w-5xl">
            <div className="w-1/3 border-r border-gray-100">
              <div className="grid grid-cols-1 gap-2">
                {arrayNames.map((name) => (
                  <button
                    key={name}
                    onClick={() => handleDropdownItemClick(category, name)}
                    className="block text-left text-primary text-sm p-2 hover:text-secondary hover:font-semibold transition-all duration-300"
                  >
                    {t(name)}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-2/3">
              <FeaturedProductCard />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 p-4 text-left min-w-[150px]">
            {arrayNames.map((name, index) => (
              <button
                key={index}
                onClick={() => handleDropdownItemClick(category, name)}
                className="block text-left text-primary text-sm py-2 hover:text-secondary hover:font-semibold transition-all duration-300"
              >
                {t(name)}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="relative bg-white top-0 z-40 border-b border-gray-200">
      <div className="py-4">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Main flex container */}
          <div className="flex items-center justify-between">
            {/* Logo - Always on left */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={LightMode}
                className="w-auto h-6 md:h-9 lg:h-7 xl:h-9 object-contain"
                alt="Logo"
              />
            </Link>

            {/* XL and above: Navigation items on left */}
            {!isMobileView && !isLgView && (
              <nav className="flex-1 flex justify-start ml-8 xl:ml-12">
                <div className="flex items-center space-x-1 xl:space-x-2">
                  {navLinks.map((link, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() =>
                        link.hasDropdown && handleMouseEnter(link.category!)
                      }
                      onMouseLeave={
                        link.hasDropdown ? handleMouseLeave : undefined
                      }
                    >
                      {!link.hasDropdown ? (
                        <Link
                          to={link.link}
                          className={`px-3 py-2 font-semibold text-primary cursor-pointer whitespace-nowrap text-sm xl:text-base ${
                            isLinkActive(link.link)
                              ? "text-secondary"
                              : "hover:text-secondary"
                          }`}
                        >
                          {t(link.name)}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              handleNavClick(link.link, link.category!)
                            }
                            className={`px-3 py-2 font-semibold text-primary cursor-pointer flex items-center gap-1 whitespace-nowrap text-sm xl:text-base ${
                              isLinkActive(link.link)
                                ? "text-secondary"
                                : "hover:text-secondary"
                            }`}
                          >
                            {t(link.name)}
                          </button>
                          {activeDropdown === link.category &&
                            renderDropdown(link.category!)}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            )}

            {/* LG size: Navigation items centered */}
            {isLgView && (
              <nav className="flex-1 flex justify-center">
                <div className="flex items-center space-x-1">
                  {navLinks.map((link, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() =>
                        link.hasDropdown && handleMouseEnter(link.category!)
                      }
                      onMouseLeave={
                        link.hasDropdown ? handleMouseLeave : undefined
                      }
                    >
                      {!link.hasDropdown ? (
                        <Link
                          to={link.link}
                          className={`px-2 py-2 font-semibold text-primary cursor-pointer whitespace-nowrap text-sm ${
                            isLinkActive(link.link)
                              ? "text-secondary"
                              : "hover:text-secondary"
                          }`}
                        >
                          {t(link.name)}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              handleNavClick(link.link, link.category!)
                            }
                            className={`px-2 py-2 font-semibold text-primary cursor-pointer flex items-center gap-1 whitespace-nowrap text-sm ${
                              isLinkActive(link.link)
                                ? "text-secondary"
                                : "hover:text-secondary"
                            }`}
                          >
                            {t(link.name)}
                          </button>
                          {activeDropdown === link.category &&
                            renderDropdown(link.category!)}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            )}

            {/* Right section */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {/* Catalog - Show on XL and LG */}
              {!isMobileView && (
                <Link
                  to="/Catalog"
                  className={`px-4 py-2 font-semibold rounded-md transition-all duration-300 whitespace-nowrap text-sm xl:text-base ${
                    isLinkActive("/Catalog")
                      ? "text-secondary"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {t("Catalog")}
                </Link>
              )}

              <LanguageSwitcher />

              {/* Mobile menu button - Show only on mobile */}
              {isMobileView && (
                <button
                  onClick={toggleMobileMenu}
                  className={`p-2 focus:outline-none text-primary transition-all duration-300 rounded-lg hover:bg-gray-100 ${
                    mobileMenuOpen ? "bg-gray-100" : ""
                  }`}
                >
                  {mobileMenuOpen ? (
                    <FaTimes size={18} />
                  ) : (
                    <FaBars size={18} />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileView && mobileMenuOpen && (
            <div className="md:hidden fixed top-0 left-0 h-full w-full bg-white z-50 overflow-y-auto shadow-xl">
              <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
                <img src={LightMode} className="w-auto h-6" alt="EyePrint" />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 text-primary"
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
                          onClick={() =>
                            handleNavClick(link.link, link.category!)
                          }
                          className="flex justify-between items-center w-full py-2 px-3 text-left text-primary font-semibold rounded-lg transition-all duration-300"
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
                            {getArrayNames(link.category!).map((name, idx) => (
                              <button
                                key={idx}
                                onClick={() =>
                                  handleDropdownItemClick(link.category!, name)
                                }
                                className="block w-full text-left py-2 px-3 text-primary rounded-lg transition-all duration-300 hover:bg-gray-50"
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
                <Link
                  to="/Catalog"
                  className={`p-3 font-semibold rounded-md transition-all duration-300 whitespace-nowrap text-base ${
                    isLinkActive("/Catalog")
                      ? "text-secondary"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {t("Catalog")}
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
