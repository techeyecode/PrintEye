import { t } from "i18next";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const SocialSticky = () => {
  const [isPulsing, setIsPulsing] = useState(true);

  const handleWhatsAppClick = () => {
    // Open WhatsApp without pre-filled message
    window.open(`https://wa.me/9647507177656`, "_blank");
    setIsPulsing(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Modern Floating WhatsApp Button with Circular Text */}
      <div className="relative group">
        {/* Rotating "Chat with us" text */}
        <div className="absolute -inset-4 animate-spin-slow">
          <svg className="w-20 h-20" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="fill-green-600 text-xs font-semibold">
              <textPath href="#circlePath" startOffset="0%">
                {t("chatWithUs")}
              </textPath>
            </text>
          </svg>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className={`
            relative flex items-center justify-center w-12 h-12 rounded-full
            bg-gradient-to-br from-green-500 to-green-600 
            hover:from-green-600 hover:to-green-700
            text-white transition-all duration-500 transform 
            shadow-2xl hover:shadow-3xl active:scale-95
            ${isPulsing ? "animate-gentle-pulse" : ""}
            backdrop-blur-sm border border-white/30
            group
          `}
        >
          <FaWhatsapp
            size={24}
            className="filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
          />

          {/* Subtle glow effect */}
          <div
            className={`absolute inset-0 rounded-full bg-white/20 blur-md -z-10 transition-opacity duration-300 ${
              isPulsing ? "opacity-50" : "opacity-0"
            }`}
          />
        </button>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gentle-pulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 35px 60px -12px rgba(34, 197, 94, 0.4);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gentle-pulse {
          animation: gentle-pulse 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialSticky;
