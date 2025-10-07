import React from "react";
import { TbGiftFilled } from "react-icons/tb";
import { FaTruckFront } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { useTranslation } from "react-i18next";

interface GiftItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const GiftSectionPage: React.FC = () => {
  const giftItems: GiftItem[] = [
    {
      id: 1,
      title: "customCorporateGiftBoxes",
      description: "customCorporateGiftBoxesSubtext",
      icon: TbGiftFilled,
    },
    {
      id: 2,
      title: "deliveredDirectlytoRecipients",
      description: "deliveredDirectlytoRecipientsSubtext",
      icon: FaTruckFront,
    },
    {
      id: 3,
      title: "onsiteGiftingExperiences",
      description: "onsiteGiftingExperiencesSubtext",
      icon: MdSunny,
    },
  ];
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {giftItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-6 rounded-lg transition text-primary"
          >
            <div className="mb-4">
              <item.icon className="w-16 h-16 text-primary" />
            </div>
            <h1 className="font-bold mb-4">{t(item.title)}</h1>
            <p>{t(item.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftSectionPage;
