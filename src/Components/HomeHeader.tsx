import React from "react";
import CButton from "../Components/CButton";

interface HomeHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  title,
  description,
  buttonText,
  buttonLink = "#",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-primary !space-y-5 lg:!space-y-4">
      <h1 className="font-bold text-2xl md:text-2xl ">{title}</h1>
      <p className="">{description}</p>
      <CButton onClick={() => (window.location.href = buttonLink)}>
        {buttonText}
      </CButton>
    </div>
  );
};

export default HomeHeader;
