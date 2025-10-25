import { useTranslation } from "react-i18next";
import { BsPostcardFill } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import {
  FaTshirt,
  FaGift,
  FaClipboard,
  FaUtensils,
  FaGlassMartiniAlt,
  FaStickyNote,
  FaBold,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGift className="text-primary w-6 h-6" />,
    text: "printingGiftItems",
  },
  {
    icon: <FaClipboard className="text-primary w-6 h-6" />,
    text: "paperItems",
  },
  {
    icon: <FaUtensils className="text-primary w-6 h-6" />,
    text: "restaurantItems",
  },
  {
    icon: <FaGlassMartiniAlt className="text-primary w-6 h-6" />,
    text: "travelGlassItems",
  },
  {
    icon: <FaTshirt className="text-primary w-6 h-6" />,
    text: "printingOnClothes",
  },
  {
    icon: <BsPostcardFill className="text-primary w-6 h-6" />,
    text: "businessCard",
  },
  { icon: <FaStickyNote className="text-primary w-6 h-6" />, text: "Stickers" },
  {
    icon: <FaBold className="text-primary w-6 h-6" />,
    text: "flexesAndBoldLettersForTrademarks",
  },
  {
    icon: <CiCoffeeCup className="text-primary w-7 h-7" />,
    text: "cup",
  },
];

const AboutEyePrint = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-primary">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center sm:text-left mb-6 ">
        {t("aboutTheCompany")}
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-justify mb-8">
        {t("aboutSubtext")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4  rounded-lg transition"
          >
            <div className="mt-1">{service.icon}</div>
            <p className="text-sm sm:text-base md:text-lg">{t(service.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEyePrint;
