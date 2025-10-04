import { useTranslation } from "react-i18next";

const OurVisionMission = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 text-primary">
      <div className="w-full lg:w-1/2 space-y-5">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1">
            {t("ourMission")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            {t("missionSubtext")}
          </p>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1">
            {t("ourVision")}
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            {t("visionSubtext")}
          </p>
        </div>
      </div>
      <img
        src="https://static.gotprint.com/tl/en_US/company/about-us/images/mission_vision.jpg"
        className="w-full lg:w-1/2 h-auto rounded-lg shadow-md"
        alt="Mission and Vision"
      />
    </div>
  );
};

export default OurVisionMission;
