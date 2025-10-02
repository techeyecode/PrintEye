import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "../Style/App.css";

import { FaTimes, FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";

import LightMode from "../assets/EyePrintLogo.png";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [printingDropdownOpen, setPrintingDropdownOpen] = useState(false);
  const [mobilePrintingOpen, setMobilePrintingOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobileView(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
        setPrintingDropdownOpen(false);
        setMobilePrintingOpen(false);
      }
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
        setPrintingDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setMobilePrintingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobilePrintingOpen(false);
    }
  };

  const toggleMobilePrinting = () => {
    setMobilePrintingOpen(!mobilePrintingOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobilePrintingOpen(false);
  };

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Promotion", link: "/Promotion" },
    {
      name: "Printing",
      link: "/Printing",
      submenu: [
        { name: "Business Cards", link: "/Business" },
        { name: "Brochures", link: "/Brochures" },
        { name: "Invoices", link: "/Invoices" },
        { name: "Bags", link: "/Bag" },
      ],
    },
    { name: "Uniform", link: "/Uniform" },
    { name: "Packaging", link: "/Packaging" },
    { name: "Sign", link: "/Sign" },
    { name: "Cup", link: "/Cup" },
  ];

  const isLinkActive = (linkPath: string) => location.pathname === linkPath;

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setPrintingDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setPrintingDropdownOpen(false);
    }, 200);
  };

  return (
    <header>
      <div className={`py-2 text-light-text bg-white`}>
        <div className="flex justify-between items-center py-2 px-4 md:px-14 lg:px-20">
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center">
              <img
                src={LightMode}
                className="w-auto h-7 md:h-8 lg:h-9 xl:h-10  object-contain"
              />
            </Link>

            {!isMobileView && (
              <nav className="flex items-center gap-2">
                {navLinks.map((link, index) => (
                  <div
                    key={index}
                    className="relative group"
                    ref={link.submenu ? dropdownRef : null}
                    onMouseEnter={link.submenu ? handleMouseEnter : undefined}
                    onMouseLeave={link.submenu ? handleMouseLeave : undefined}
                  >
                    <Link
                      to={link.link}
                      className={`relative px-4 py-2 font-medium rounded-xl overflow-hidden transition-all duration-300 flex items-center gap-1 ${
                        isLinkActive(link.link)
                          ? "text-secondary"
                          : "text-primary"
                      } `}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {link.submenu && (
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            printingDropdownOpen ? "rotate-180" : ""
                          }`}
                          size={12}
                        />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    {link.submenu && printingDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-white border border-primary/20 rounded-2xl z-50 "
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                              isLinkActive(subItem.link)
                                ? " text-secondary font-medium"
                                : "text-primary "
                            } `}
                            onClick={() => {
                              setPrintingDropdownOpen(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {isMobileView && (
              <button
                onClick={toggleMobileMenu}
                className={`p-2 focus:outline-none transition-transform duration-300 x_wd_red_highlight_bold_05 text-primary ${
                  mobileMenuOpen ? "rotate-90" : ""
                }`}
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileView && mobileMenuOpen && (
          <div className="lg:hidden">
            <div
              className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel - Now opens from left */}
            <div className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out text-primary">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center mx-4 py-2 border-b border-primary/50">
                  <span className="text-lg font-semibold">EyePrint</span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2  transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-2">
                  {navLinks.map((link, index) => (
                    <div
                      key={index}
                      ref={link.submenu ? mobileDropdownRef : null}
                    >
                      {link.submenu ? (
                        <div className="mb-2">
                          <button
                            onClick={toggleMobilePrinting}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                              isLinkActive(link.link)
                                ? "text-secondary"
                                : "text-primary"
                            }`}
                          >
                            <span>{link.name}</span>
                            <FaChevronDown
                              className={`transition-transform duration-300 ${
                                mobilePrintingOpen ? "rotate-180" : ""
                              }`}
                              size={14}
                            />
                          </button>

                          {/* Mobile Submenu */}
                          {mobilePrintingOpen && (
                            <div className="ml-4 mt-2 space-y-1 animate-slideDown">
                              {link.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.link}
                                  className={`block px-3 py-1 rounded-lg transition-all duration-200 items-center ${
                                    isLinkActive(subItem.link)
                                      ? "text-secondary"
                                      : "text-primary"
                                  }`}
                                  onClick={closeMobileMenu}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={link.link}
                          className={`block font-medium px-3 py-2 rounded-lg transition-all duration-200 mb-2 ${
                            isLinkActive(link.link)
                              ? "text-secondary"
                              : "text-primary"
                          }`}
                          onClick={closeMobileMenu}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
