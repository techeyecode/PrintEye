import { useTranslation } from "react-i18next";
import { FaBullseye, FaEye } from "react-icons/fa";

const OurVisionMission = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <FaBullseye className="w-6 h-6 text-primary mb-3" />,
      title: t("ourMission"),
      text: t("missionSubtext"),
    },
    {
      icon: <FaEye className="w-6 h-6 text-primary mb-3" />,
      title: t("ourVision"),
      text: t("visionSubtext"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-2 flex flex-col lg:flex-row gap-6 lg:gap-10 text-primary mt-10 lg:mt-20">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex-1 p-6 rounded-2xl shadow-sm text-primary flex flex-col items-start justify-start bg-gradient-to-r from-primary/15 to-secondary/15 min-h-[250px]"
        >
          <div className="flex items-center gap-4">
            <div>{card.icon}</div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              {card.title}
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default OurVisionMission;
