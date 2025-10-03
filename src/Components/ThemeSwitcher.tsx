import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeSwitcher: React.FC<{ isMobile?: boolean }> = ({
  isMobile = false,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`${
        isMobile
          ? "w-full flex items-center justify-start px-4 py-3 mb-4 text-base font-medium"
          : "block rounded-full cursor-pointer transition-colors"
      } ${isDarkMode ? "text-white" : "text-primary"}`}
    >
      {isDarkMode ? (
        <>
          <MdLightMode
            size={isMobile ? 24 : 24}
            className={`${isMobile ? "mx-2" : ""}`}
          />
        </>
      ) : (
        <>
          <MdDarkMode
            size={isMobile ? 20 : 20}
            className={`${isMobile ? "mx-2" : ""}`}
          />
        </>
      )}
    </button>
  );
};

export default ThemeSwitcher;
