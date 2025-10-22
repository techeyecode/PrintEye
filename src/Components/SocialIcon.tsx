import React from "react";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  color: string; // can be a solid color or a gradient
  size?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  icon,
  color,
  size = 22,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-primary"
    >
      {/* sliding background */}
      <span
        className="absolute w-full h-full top-full left-0 transition-all duration-500"
        style={{ background: color }}
      ></span>

      {/* icon */}
      <span
        className="relative z-10 text-white transition-transform duration-500 flex items-center justify-center"
        style={{ fontSize: size }}
      >
        {icon}
      </span>

      {/* hover effect */}
      <style jsx>{`
        a:hover span:nth-child(1) {
          top: 0;
        }
        a:hover span:nth-child(2) {
          color: white;
          transform: rotateY(360deg) scale(1.2);
        }
      `}</style>
    </a>
  );
};

export default SocialIcon;
