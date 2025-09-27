import React from "react";

interface FancyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const FancyButton: React.FC<FancyButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative cursor-pointer inline-flex items-center justify-center w-auto h-full px-4 py-1.5 border border-primary text-primary font-semibold uppercase tracking-wide rounded-full overflow-hidden transition-colors duration-500 ${className}`}
    >
      <span className=" z-10 transition-colors duration-300 group-hover:text-secondary">
        {children}
      </span>

      <span className="absolute left-0 top-0  w-1/4 h-full bg-primary translate-y-full rounded-full transform transition-transform duration-300 delay-0 group-hover:translate-y-0 group-hover:scale-320" />
      <span className="absolute left-1/4 top-0  w-1/4 h-full bg-primary translate-y-full rounded-full transform transition-transform duration-300 delay-100 group-hover:translate-y-0 group-hover:scale-320" />
      <span className="absolute left-1/2 top-0  w-1/4 h-full bg-primary translate-y-full rounded-full transform transition-transform duration-300 delay-150 group-hover:translate-y-0 group-hover:scale-320" />
      <span className="absolute left-3/4 top-0  w-1/4 h-full bg-primary translate-y-full rounded-full transform transition-transform duration-300 delay-200 group-hover:translate-y-0 group-hover:scale-320" />
    </button>
  );
};

export default FancyButton;
