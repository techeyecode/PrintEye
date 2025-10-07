import React from "react";
import { useTranslation } from "react-i18next";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

interface Breadcrumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <nav className="max-w-7xl mx-auto py-10 px-4 md:px-14 lg:px-20 flex items-center font-m mb-6 text-primary">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.path ? (
            <Link
              to={item.path}
              className="flex items-center transition-colors"
            >
              {t(item.label)}
            </Link>
          ) : (
            <span className="flex items-center"> {t(item.label)}</span>
          )}
          {index < items.length - 1 && (
            <span className="mx-3">
              <RiCheckboxBlankCircleFill size={10} />
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
