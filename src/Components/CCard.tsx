import React from "react";
import { Link } from "react-router-dom";

interface CCardProps {
  id: number | string;
  label: string;
  code?: string;
  count?: number;
  images?: string[];
  link?: string;
  className?: string;
}

const CCard: React.FC<CCardProps> = ({
  id,
  label,
  code,
  count,
  images,
  link,
  className = "",
}) => {
  const previewImage = images?.[0];
  const linkDestination = link || `/Promotion/${id}`;

  return (
    <Link
      to={linkDestination}
      className={`group block rounded-3xl bg-primary border border-gray-200 transition-all duration-300 overflow-hidden hover:shadow-lg hover:border-gray-300 ${className}`}
    >
      <div className="relative overflow-hidden w-full aspect-[3/4]">
        {previewImage ? (
          <img
            src={previewImage}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      <div className="p-1 px-4 flex flex-col gap-2 ">
        <div className="flex items-center justify-between">
          <h5 className="text-white font-medium line-clamp-2 flex-1 mr-2">
            {label}
          </h5>
          {count !== undefined && (
            <span className="text-white font-medium  px-2 py-1 rounded-full text-sm min-w-8 text-center">
              {count}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CCard;
