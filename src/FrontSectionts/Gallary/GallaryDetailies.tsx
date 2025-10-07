import React, { useState } from "react";
import { companies } from "./GallaryItems";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface HoverImageButtonProps {
  Icon: React.ReactElement;
  onClick: () => void;
}

const HoverImageButton: React.FC<HoverImageButtonProps> = ({
  Icon,
  onClick,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="cursor-pointer p-2 text-xl text-primary transition-colors duration-200 hover:text-secondary"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {Icon}
    </button>
  );
};

interface GallaryCardsProps {
  rtl?: boolean;
}

const GallaryCards: React.FC<GallaryCardsProps> = ({ rtl = false }) => {
  const [companyIndex, setCompanyIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const IMAGES_PER_PAGE = 6;

  const company = companies[companyIndex];
  const visibleImages = company.images.slice(
    imageIndex,
    imageIndex + IMAGES_PER_PAGE
  );

  const nextImages = () => {
    const nextIndex = imageIndex + IMAGES_PER_PAGE;
    if (nextIndex < company.images.length) setImageIndex(nextIndex);
  };

  const prevImages = () => {
    const prevIndex = imageIndex - IMAGES_PER_PAGE;
    if (prevIndex >= 0) setImageIndex(prevIndex);
  };

  return (
    <div className={`max-w-7xl mx-auto p-6 mt-10 ${rtl ? "rtl" : "ltr"}`}>
      <div className="hidden md:flex md:flex-col items-center mb-6 text-primary">
        <div className="flex items-center justify-center gap-14 w-full">
          <HoverImageButton
            Icon={rtl ? <FaArrowRight /> : <FaArrowLeft />}
            onClick={prevImages}
          />

          <h2 className="text-3xl font-semibold text-center">
            {company.name} Gallery
          </h2>

          <HoverImageButton
            Icon={rtl ? <FaArrowLeft /> : <FaArrowRight />}
            onClick={nextImages}
          />
        </div>
        <p className="text-center font-medium my-4 max-w-3xl">
          Lorem Ipsum is a dummy text commonly used in graphic design,
          publishing, and web development. It originates from sections 1.10.32
          and 1.10.33 of Cicero's "de Finibus Bonorum et Malorum", written in 45
          BC, which discusses ethics.
        </p>
      </div>

      <div className="flex flex-col md:hidden items-center text-primary">
        <div className="flex items-center justify-center mb-6 gap-14 w-full">
          <HoverImageButton
            Icon={rtl ? <FaArrowRight /> : <FaArrowLeft />}
            onClick={prevImages}
          />
          <HoverImageButton
            Icon={rtl ? <FaArrowLeft /> : <FaArrowRight />}
            onClick={nextImages}
          />
        </div>
        <h2 className="text-3xl font-semibold text-center">
          {company.name} Gallery
        </h2>
        <p className="text-center font-medium my-4 max-w-3xl">
          Lorem Ipsum is a dummy text commonly used in graphic design,
          publishing, and web development. It originates from sections 1.10.32
          and 1.10.33 of Cicero's "de Finibus Bonorum et Malorum", written in 45
          BC, which discusses ethics.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {visibleImages.map((img, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-sm">
            <img src={img} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallaryCards;
