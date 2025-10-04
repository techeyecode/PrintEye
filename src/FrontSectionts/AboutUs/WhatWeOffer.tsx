import { useTranslation } from "react-i18next";

const WhatWeOffer = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-primary">
      <img
        src="https://static.gotprint.com/tl/en_US/company/about-us/images/what_we_offer.png"
        className="w-full lg:w-1/2 h-auto rounded-lg shadow-md"
        alt="What We Offer"
      />
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
