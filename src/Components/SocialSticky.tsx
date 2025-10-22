import { t } from "i18next";
import React, { useState } from "react";
import { FaWhatsapp, FaComment, FaTimes } from "react-icons/fa";
import { PiPrinterFill } from "react-icons/pi";

const SocialSticky = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  const handleClick = () => {
    // Directly open WhatsApp with pre-filled message
    const message =
      "Hello! I would like to get more information about Hana Charity.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9647507177656?text=${encodedMessage}`, "_blank");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 animate-fade-in">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaWhatsapp size={20} />
              </div>
              <div>
                <h3 className="font-semibold">{t("eyePrint")}</h3>
                <p className="text-green-100 text-sm">{t("eyePrintSubtext")}</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white transition-colors"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-white rounded-b-2xl">
            <p className="text-primary font-semibold mb-4 text-sm">
              {t("whatsUpHello")}
            </p>

            <button
              onClick={handleClick}
              className="w-full bg-green-500  text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform flex items-center justify-center space-x-2"
            >
              <FaWhatsapp size={18} />
              <span>{t("startChat")}</span>
            </button>
          </div>

          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl text-white transition-all duration-300 transform  ${
          isOpen ? "bg-primary rotate-45" : "bg-green-500 hover:bg-green-600"
        } ${isPulsing ? "animate-pulse" : ""}`}
      >
        {isOpen ? (
          <FaTimes size={24} />
        ) : (
          <>
            <FaWhatsapp size={28} />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-white flex items-center justify-center">
              <PiPrinterFill size={10} className="text-white" />
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default SocialSticky;
