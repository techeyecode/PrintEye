import { useTranslation } from "react-i18next";

const AboutEyePrint = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-primary space-y-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left">
        {t("aboutTheCompany")}
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-justify">
        {t("aboutSubtext")}
      </p>
      <img
        src="https://static.gotprint.com/tl/en_US/company/about-us/images/20th_anniversary_about_us_banner.jpg"
        className="w-full max-w-full h-auto rounded-lg shadow-md"
        alt="About EyePrint"
      />
    </div>
  );
};

export default AboutEyePrint;
