import React from "react";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

const PromosyonHeader = () => {
  const backgroundImage =
    "https://www.cloveandtwine.com/cdn/shop/collections/visa_card_1500x.jpg?v=1661966680";

  return (
    <div className="relative overflow-hidden">
      <div
        className="relative w-full h-64 lg:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-secondary"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/30"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="inline-block animate-fadeInUp">All Projects</span>
          </h2>

          <p className="text-xl lg:text-3xl mb-6 lg:mb-8 animate-fadeInUp animation-delay-200 font-semibold">
            There's no such thing as too many options
          </p>

          <div className="flex justify-center items-center text-base lg:text-lg font-medium animate-fadeInUp animation-delay-400">
            <Link
              to="/"
              className="transition-colors duration-300 flex items-center"
            >
              <TiHome className="mr-2" />
              Home
            </Link>
            <span className="mx-3">/</span>
            <span className="font-semibold">Gift Sets</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromosyonHeader;
