import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import "../Style/App.css";

import { FaTimes, FaBars } from "react-icons/fa";

import LightMode from "../assets/EyePrintLogo.png";
import DarkMode from "../assets/EyePrintLogoDarkMode.png";

import LanguageSwitcher from "../Components/LanguageSwitcher";
import ThemeSwitcher from "../Components/ThemeSwitcher";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

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

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Promotion", link: "/Promotion" },
    { name: "Printing", link: "/Printing" },
    { name: "Uniforms", link: "/Uniform" },
    { name: "Packaging", link: "/Ambalaj" },
    { name: "Cups", link: "/Cup" },
    { name: "CNC", link: "/CNC" },
  ];

  const isLinkActive = (linkPath: string) => location.pathname === linkPath;

  return (
    <header className={`  `}>
      <div
        className={` py-2  ${
          isDarkMode
            ? "text-white  bg-dark-background"
            : "text-light-text  bg-white"
        }`}
      >
        <div className="flex justify-between items-center py-2 px-20">
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center">
              <img
                src={isDarkMode ? DarkMode : LightMode}
                className="w-auto h-10 object-contain"
              />
            </Link>

            {!isMobileView && (
              <nav className="flex items-center gap-2">
                {navLinks.map((link, index) => (
                  <div key={index} className="relative group">
                    <Link
                      to={link.link}
                      className={`relative px-4 py-2 font-medium rounded-lg overflow-hidden transition-all duration-300 ${
                        isLinkActive(link.link)
                          ? isDarkMode
                            ? "text-red-400"
                            : "text-secondary"
                          : isDarkMode
                          ? "text-white"
                          : "text-"
                      } group-hover:scale-105`}
                    >
                      <span className="relative z-10">{link.name}</span>

                      {/* <span
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 ${
                          isLinkActive(link.link) ? "scale-100 opacity-100" : ""
                        } ${isDarkMode ? "bg-primary-dark" : "bg-primary"}`}
                      /> */}
                    </Link>
                  </div>
                ))}
              </nav>
            )}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />

            {isMobileView && (
              <button
                onClick={toggleMobileMenu}
                className={`p-2 focus:outline-none transition-transform duration-300 x_wd_red_highlight_bold_05 ${
                  isDarkMode ? "text-white" : "text-primary"
                } ${mobileMenuOpen ? "rotate-90" : ""}`}
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {isMobileView && mobileMenuOpen && (
        <div
          className={`fixed inset-0 w-full h-full z-40 overflow-y-auto transition-all duration-300 ${
            isDarkMode ? "bg-dark-background" : "bg-light-background"
          }`}
          style={{ top: "80px" }}
        >
          <div className="container mx-auto px-4 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className={`flex items-center px-4 py-4 text-lg font-medium border-b x_wd_red_highlight_bold_05 ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                } ${
                  isLinkActive(link.link)
                    ? isDarkMode
                      ? "text-red-400"
                      : "text-secondary"
                    : isDarkMode
                    ? "text-white hover:text-red-400"
                    : "text-primary hover:text-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="ml-3">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
