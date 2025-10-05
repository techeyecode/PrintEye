import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/App.css";

import { FaTimes, FaBars } from "react-icons/fa";

import LightMode from "../assets/EyePrintLogo.png";
import LanguageSwitcher from "../Components/LanguageSwitcher";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobileView(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Promotion", link: "/Promotion" },
    { name: "Printing", link: "/Printing" },
    { name: "Uniform", link: "/Uniform" },
    { name: "Packaging", link: "/Packaging" },
    { name: "Sign", link: "/Sign" },
    { name: "Cup", link: "/Cup" },
    { name: "Gallary", link: "/Gallary" },
    { name: "Catalog", link: "/Catalog" },
  ];

  const isLinkActive = (linkPath: string) => location.pathname === linkPath;

  return (
    <header>
      <div className={`py-4 text-light-text bg-white`}>
        <div className="container mx-auto flex justify-between items-center ">
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center">
              <img
                src={LightMode}
                className="w-auto h-7 md:h-8 lg:h-7 xl:h-10  object-contain"
              />
            </Link>

            {!isMobileView && (
              <nav className="flex items-center text-base xl:text-base lg:text-sm">
                {navLinks.map((link, index) => (
                  <div key={index} className="relative group ">
                    <Link
                      to={link.link}
                      className={`relative px-4 py-2 font-semibold rounded-xl overflow-hidden transition-all duration-300 flex items-center gap-1 ${
                        isLinkActive(link.link)
                          ? "text-secondary"
                          : "text-primary"
                      } `}
                    >
                      <span className="relative z-10">{link.name}</span>
                    </Link>
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

        {isMobileView && mobileMenuOpen && (
          <div className="lg:hidden">
            <div
              className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
              onClick={closeMobileMenu}
            />

            <div className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out text-primary">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mx-4 py-2 border-b border-primary/50">
                  <span className="text-lg font-semibold">EyePrint</span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 py-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
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
