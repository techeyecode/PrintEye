import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Logo from "../assets/EyePrintLogoDarkMode.png";
const Footer: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const footerLinks = [
    { name: "Home", link: "/" },
    { name: "Promotion", link: "/Promotion" },
    { name: "Printing", link: "/Printing" },
    { name: "Uniform", link: "/Uniform" },
    { name: "Packaging", link: "/Packaging" },
    { name: "Sign", link: "/Sign" },
    { name: "Cup", link: "/Cup" },
  ];

  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Terms of Service", link: "/terms" },
  ];

  // Modern hover effects configuration
  const hoverEffects = {
    link: {
      base: "transition-all duration-500 transform hover:translate-x-2 relative",
      hover: "text-secondary font-semibold",
      underline:
        "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-500 group-hover:w-full",
    },
    contact: {
      base: "transition-all duration-500 transform hover:translate-x-1",
      hover: "text-secondary",
      icon: "transition-all duration-500 transform hover:scale-125",
    },
  };

  return (
    <footer className="bg-primary text-white border-t border-gray-200 mt-20">
      {/* Main Footer Content */}
      <div className="py-8 px-4 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={Logo}
                className="w-auto h-7 md:h-8 lg:h-9 xl:h-10  object-contain"
              ></img>
            </div>
            <p className="text-white mb-6 leading-relaxed text-sm hover:text-gray-200 transition-colors duration-500">
              Your trusted partner for high-quality printing solutions. We bring
              creativity and precision to every project with exceptional service
              and results.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white hover:text-secondary transition-colors duration-500">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.slice(1).map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className={`group ${hoverEffects.link.base} text-white text-sm`}
                    onMouseEnter={() => setHoveredItem(`service-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      className={`
                      ${
                        hoveredItem === `service-${index}`
                          ? hoverEffects.link.hover
                          : ""
                      }
                    `}
                    >
                      {link.name}
                    </span>
                    <div className={hoverEffects.link.underline} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white hover:text-secondary transition-colors duration-500">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className={`group ${hoverEffects.link.base} text-white text-sm`}
                    onMouseEnter={() => setHoveredItem(`company-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span
                      className={`
                      ${
                        hoveredItem === `company-${index}`
                          ? hoverEffects.link.hover
                          : ""
                      }
                    `}
                    >
                      {link.name}
                    </span>
                    <div className={hoverEffects.link.underline} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white hover:text-secondary transition-colors duration-500">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div
                className={`flex items-start gap-3 text-white ${hoverEffects.contact.base}`}
                onMouseEnter={() => setHoveredItem("contact-phone")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FaPhone
                  className={`
                  w-4 h-4 mt-0.5 transition-all duration-500
                  ${
                    hoveredItem === "contact-phone"
                      ? "text-secondary scale-125"
                      : "text-secondary"
                  }
                `}
                />
                <span
                  className={
                    hoveredItem === "contact-phone"
                      ? hoverEffects.contact.hover
                      : ""
                  }
                >
                  +1 (555) 123-4567
                </span>
              </div>
              <div
                className={`flex items-start gap-3 text-white ${hoverEffects.contact.base}`}
                onMouseEnter={() => setHoveredItem("contact-email")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FaEnvelope
                  className={`
                  w-4 h-4 mt-0.5 transition-all duration-500
                  ${
                    hoveredItem === "contact-email"
                      ? "text-secondary scale-125"
                      : "text-secondary"
                  }
                `}
                />
                <span
                  className={
                    hoveredItem === "contact-email"
                      ? hoverEffects.contact.hover
                      : ""
                  }
                >
                  info@eyeprint.com
                </span>
              </div>
              <div
                className={`flex items-start gap-3 text-white ${hoverEffects.contact.base}`}
                onMouseEnter={() => setHoveredItem("contact-address")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FaMapMarkerAlt
                  className={`
                  w-4 h-4 mt-0.5 transition-all duration-500
                  ${
                    hoveredItem === "contact-address"
                      ? "text-secondary scale-125"
                      : "text-secondary"
                  }
                `}
                />
                <span
                  className={
                    hoveredItem === "contact-address"
                      ? hoverEffects.contact.hover
                      : ""
                  }
                >
                  123 Print Street, City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
