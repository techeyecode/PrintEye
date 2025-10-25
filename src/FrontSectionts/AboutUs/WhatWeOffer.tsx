import { useTranslation } from "react-i18next";

const galleryImages = [
  "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001905891/NPIB48366-Brochure-Product-Tile-Z-fold-Real-Estate-001",
  "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/real_estate.jpg",
  "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/popular.png",
  "//static.gotprint.com/tl/en_US/products/business-cards/info/img/desktop/modern_template.jpg",
];

const WhatWeOffer = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-primary mt-10 lg:mt-20">
      {/* Left side gallery */}
      <div className="grid grid-cols-2 gap-1 w-full lg:w-1/2">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-56 rounded-lg shadow-md object-cover"
          />
        ))}
      </div>

      {/* Right side text */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          {t("pricingTitle")}
        </h1>
        <p className="text-sm sm:text-base md:text-lg">{t("pricingSubtext")}</p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
