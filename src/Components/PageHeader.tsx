import React from "react";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title = "Page Title",
  subtitle = "",
  backgroundImage,
  breadcrumbs = [{ label: "Home", path: "/" }, { label: "Current Page" }],
}) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="relative w-full h-64 lg:h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat text-tertiary"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/50 to-black/40"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="inline-block animate-fadeInUp">{title}</span>
          </h2>

          {subtitle && (
            <p className="text-xl lg:text-3xl mb-6 lg:mb-8 animate-fadeInUp animation-delay-200 font-semibold">
              {subtitle}
            </p>
          )}

          <div className="flex justify-center items-center text-base lg:text-lg font-medium animate-fadeInUp animation-delay-400">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="transition-colors duration-300 flex items-center"
                  >
                    {index === 0 && <TiHome className="mr-2" />}
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-3">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
