import React from "react";
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
  return (
    <nav className="max-w-7xl mx-auto py-10 flex items-center font-m mb-6 text-primary">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.path ? (
            <Link
              to={item.path}
              className="flex items-center transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="flex items-center">{item.label}</span>
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
