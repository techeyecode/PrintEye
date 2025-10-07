import React from "react";
import { Link } from "react-router-dom";

interface CButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  isFullWidth?: boolean;
  link?: string;
  rtl?: boolean;
}

const CButton: React.FC<CButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  isFullWidth = false,
  link,
  rtl = false,
}) => {
  const variantClasses =
    variant === "primary"
      ? {
          shadow: "bg-blue-500/30",
          edge: "bg-primary/40",
          front: "bg-primary text-white",
        }
      : {
          shadow: "bg-secondary/30",
          edge: "bg-secondary/40",
          front: "bg-secondary text-primary",
        };

  const baseClasses = `relative group bg-transparent p-0 border-none cursor-pointer outline-offset-1 transition duration-200 ${
    isFullWidth ? "w-full" : ""
  } text-center `;

  const translateYHover = rtl ? "-translate-x-1.5" : "-translate-y-1.5"; // adjust if you want horizontal movement for RTL

  const contentClasses = `relative block rounded-full font-bold uppercase tracking-wider text-sm px-8 py-3 transform -translate-y-1 transition-transform duration-300 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:${translateYHover} group-active:-translate-y-0.5 ${variantClasses.front}`;

  const renderButtonContent = () => (
    <>
      {/* Shadow */}
      <span
        className={`absolute top-0 left-0 w-full h-full rounded-full filter blur-sm transform translate-y-[2px] transition-transform duration-300 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-[4px] group-active:translate-y-[1px] ${variantClasses.shadow}`}
      ></span>

      {/* Edge */}
      <span
        className={`absolute top-0 left-0 w-full h-full rounded-full ${variantClasses.edge}`}
      ></span>

      {/* Front */}
      <span className={contentClasses}>{children}</span>
    </>
  );

  return link ? (
    <Link to={link} onClick={onClick} className={baseClasses}>
      {renderButtonContent()}
    </Link>
  ) : (
    <button onClick={onClick} className={baseClasses}>
      {renderButtonContent()}
    </button>
  );
};

export default CButton;
