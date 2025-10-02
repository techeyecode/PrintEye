// CButton.tsx
import React from "react";

interface CButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  isFullWidth?: boolean;
}

const CButton: React.FC<CButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  isFullWidth = false,
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

  return (
    <button
      onClick={onClick}
      className={`relative group bg-transparent p-0 border-none cursor-pointer outline-offset-1 transition duration-200 ${
        isFullWidth ? "w-full" : ""
      }`}
    >
      {/* Shadow */}
      <span
        className={`absolute top-0 left-0 w-full h-full rounded-full filter blur-sm transform translate-y-[2px] transition-transform duration-300 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-[4px] group-active:translate-y-[1px] ${variantClasses.shadow}`}
      ></span>

      {/* Edge */}
      <span
        className={`absolute top-0 left-0 w-full h-full rounded-full ${variantClasses.edge}`}
      ></span>

      {/* Front */}
      <span
        className={`relative block rounded-full font-bold uppercase tracking-wider text-sm px-8 py-3 transform -translate-y-1 transition-transform duration-300 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-active:-translate-y-0.5 ${variantClasses.front}`}
      >
        {children}
      </span>
    </button>
  );
};

export default CButton;
