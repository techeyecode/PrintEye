import React from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  link?: string; // optional, current page has no link
  icon?: React.ReactNode; // optional icon
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 text-primary">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.link ? (
            <Link
              to={item.link}
              className="flex items-center gap-1 px-2 py-1 rounded  transition"
            >
              {item.icon && <span className="text-lg">{item.icon}</span>}
              <span>{item.label}</span>
            </Link>
          ) : (
            <span className="flex items-center gap-1 px-2 py-1 rounded font-medium ">
              {item.icon && <span className="text-lg">{item.icon}</span>}
              <span>{item.label}</span>
            </span>
          )}
          {idx < items.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
