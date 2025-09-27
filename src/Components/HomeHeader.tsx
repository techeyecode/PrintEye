import React from "react";
import FancyButton from "../Components/BorderButton";

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
    <div className="flex flex-col items-center justify-center text-center text-primary !space-y-2 lg:!space-y-4">
      <h1 className="font-bold text-2xl md:text-2xl ">{title}</h1>
      <p className="">{description}</p>
      <FancyButton onClick={() => (window.location.href = buttonLink)}>
        {buttonText}
      </FancyButton>
    </div>
  );
};

export default HomeHeader;
