import React from "react";
import HomeHeader from "../../Components/HomeHeader";
import { TbGiftFilled } from "react-icons/tb";
import { FaTruckFront } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

interface GiftItem {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  buttonText: string;
  buttonLink: string;
}

const GiftSectionPage: React.FC = () => {
  const giftItems: GiftItem[] = [
    {
      id: 1,
      title: "Custom Corporate Gift Boxes",
      description:
        "Every custom gift box is carefully curated with hand-selected items, blending elegance and purpose to leave a lasting impression on your recipients",
      icon: <TbGiftFilled className="w-16 h-16 text-primary" />,
      buttonText: "Shop Pre-Built Gift Boxes",
      buttonLink: "/collections/kits",
    },
    {
      id: 2,
      title: "Delivered Directly to Recipients",
      description:
        "Our dedicated fulfillment team expertly builds, packages, and delivers each gift, ensuring it arrives beautifully presented and directly in the hands of your recipients.",
      icon: <FaTruckFront className="w-16 h-16 text-primary" />,
      buttonText: "Get Started",
      buttonLink: "/pages/contact",
    },
    {
      id: 3,
      title: "Onsite Gifting Experiences",
      description:
        "We specialize in curating unique corporate gift experiences that leave a lasting impression on your guests and elevate your events",
      icon: <MdSunny className="w-16 h-16 text-primary" />,
      buttonText: "Book Now",
      buttonLink: "/pages/onsite-gifting",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {giftItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-6 rounded-lg transition text-primary"
          >
            {/* Icon */}
            <div className="mb-4">{item.icon}</div>

            {/* Reuse your HomeHeader */}
            <HomeHeader
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              buttonLink={item.buttonLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftSectionPage;
