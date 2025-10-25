import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaHome,
  FaShoppingCart,
  FaPrint,
  FaTshirt,
  FaBoxOpen,
  FaSign,
  FaCoffee,
  FaInfoCircle,
  FaUser,
  FaFileContract,
} from "react-icons/fa";
import Logo from "../assets/EyePrintLogoDarkMode.png";
import SocialIcon from "../Components/SocialIcon";
import { PiBookOpenTextFill } from "react-icons/pi";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isRTL = i18n.language === "ar" || i18n.language === "ku";
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const footerLinks = [
    { name: "home", link: "/", icon: <FaHome className="inline mr-2" /> },
    {
      name: "promotion",
      link: "/Promotion",
      icon: <FaShoppingCart className="inline mr-2" />,
    },
    {
      name: "printing",
      link: "/Printing",
      icon: <FaPrint className="inline mr-2" />,
    },
    {
      name: "uniform",
      link: "/Uniform",
      icon: <FaTshirt className="inline mr-2" />,
    },
    {
      name: "packaging",
      link: "/Packaging",
      icon: <FaBoxOpen className="inline mr-2" />,
    },
    { name: "sign", link: "/Sign", icon: <FaSign className="inline mr-2" /> },
    { name: "cup", link: "/Cup", icon: <FaCoffee className="inline mr-2" /> },
  ];

  const companyLinks = [
    {
      name: "aboutUs",
      link: "/about",
      icon: <FaInfoCircle className="inline mr-2" />,
    },
    {
      name: "Catalog",
      link: "/Catalog",
      icon: <PiBookOpenTextFill className="inline mr-2" />,
    },
    {
      name: "contact",
      link: "/Contact",
      icon: <FaUser className="inline mr-2" />,
    },
    {
      name: "privacyPolicy",
      link: "/PrivacyPolicy",
      icon: <FaFileContract className="inline mr-2" />,
    },
  ];
  const hoverEffects = {
    link: {
      base: "transition-all duration-700 ease-in-out transform hover:translate-x-1",
      hover: "text-secondary",
    },
    contact: {
      base: "transition-all duration-700 ease-in-out transform hover:translate-x-1",
      hover: "text-secondary",
      icon: "transition-all duration-700 ease-in-out transform hover:scale-125",
    },
  };

  return (
    <footer
      className="relative bg-gradient-to-br from-primary to-dark-background text-white border-t border-gray-200 mt-14 mx-6 rounded-3xl"
      // data-aos="fade-down"
      // data-aos-duration="1000"
      // data-aos-delay="100"
    >
      <div className="py-10 px-4 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <img
                src={Logo}
                className="w-auto h-8 lg:h-10 object-contain"
                alt="EyePrint Logo"
              />
            </div>
            <p className="text-white mb-6 font-medium leading-relaxed hover:text-gray-200 transition-colors duration-500">
              {t("footerDescription")}
            </p>
            <div className="flex items-center gap-5 mt-4">
              <SocialIcon
                href="https://www.facebook.com/share/1CYGDbeJy4/?mibextid=wwXIfr"
                icon={<FaFacebookF />}
                color="#3b5999"
              />
              <SocialIcon
                href="https://www.instagram.com/eyeprint.iq?igsh=cmZmcTBndnRvdXps&utm_source=qr"
                icon={<FaInstagram />}
                color="linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)"
              />
              <SocialIcon
                href="https://www.tiktok.com/@eyeprint.iq?_t=ZS-90jbeGha7iy&_r=1"
                icon={<FaTiktok />}
                color="#000000"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white hover:text-secondary transition-colors duration-500">
                {t("ourServices")}
              </h3>
              <ul className="space-y-3">
                {footerLinks.slice(1).map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.link}
                      className={`group ${hoverEffects.link.base} text-white`}
                      onMouseEnter={() => setHoveredItem(`service-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span
                        className={`${
                          hoveredItem === `service-${index}`
                            ? hoverEffects.link.hover
                            : ""
                        }`}
                      >
                        {link.icon} {t(link.name)}
                      </span>
                      <div className={hoverEffects.link.underline} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-6 text-white hover:text-secondary transition-colors duration-500">
                {t("company")}
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.link}
                      className={`group ${hoverEffects.link.base} text-white`}
                      onMouseEnter={() => setHoveredItem(`company-${index}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span
                        className={`${
                          hoveredItem === `company-${index}`
                            ? hoverEffects.link.hover
                            : ""
                        }`}
                      >
                        {link.icon} {t(link.name, link.name)}
                      </span>
                      <div className={hoverEffects.link.underline} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 text-white hover:text-secondary transition-colors duration-500">
              {t("contactUs")}
            </h3>
            <div className="space-y-3">
              <div
                className={`flex items-start gap-3 text-white ${hoverEffects.contact.base}`}
                onMouseEnter={() => setHoveredItem("contact-phone")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FaPhone
                  className={`w-4 h-4 mt-0.5 ${hoverEffects.contact.icon}`}
                />
                <a
                  href="https://wa.me/9647507177656"
                  target="_blank"
                  className={`${
                    hoveredItem === "contact-phone"
                      ? hoverEffects.contact.hover
                      : ""
                  }`}
                  dir="ltr"
                >
                  +964 750 717 7656
                </a>
              </div>

              <div
                className={`flex items-start gap-3 text-white ${hoverEffects.contact.base}`}
                onMouseEnter={() => setHoveredItem("contact-email")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FaEnvelope
                  className={`w-4 h-4 mt-0.5 ${hoverEffects.contact.icon}`}
                />
                <a
                  href="mailto:Eyeprint9@gmail.com"
                  className={`${
                    hoveredItem === "contact-email"
                      ? hoverEffects.contact.hover
                      : ""
                  }`}
                >
                  eyeprint9@gmail.com
                </a>
              </div>
              <div
                className={`flex items-start gap-3 text-white ${hoverEffects.contact.base}`}
                onMouseEnter={() => setHoveredItem("contact-address")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <FaMapMarkerAlt
                  className={`w-4 h-4 mt-0.5 ${hoverEffects.contact.icon}`}
                />
                <a
                  href="https://www.google.com/maps/place/267,+1+Italian+Village+Rd,+Erbil,+Erbil+Governorate"
                  target="_blank"
                  className={`${
                    hoveredItem === "contact-address"
                      ? hoverEffects.contact.hover
                      : ""
                  }`}
                >
                  {t("address")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
