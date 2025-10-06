import React from "react";
import CButton from "../Components/CButton";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center text-center text-primary !space-y-5 lg:!space-y-4">
      <h1 className="font-bold text-2xl md:text-2xl">{t(title)}</h1>
      <p className="">{t(description)}</p>
      <CButton onClick={() => (window.location.href = buttonLink)}>
        {t(buttonText)}
      </CButton>
    </div>
  );
};

export default HomeHeader;
