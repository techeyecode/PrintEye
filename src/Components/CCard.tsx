import React from "react";
import { Link } from "react-router-dom";

interface CCardProps {
  id: number | string;
  label: string;
  code?: string;
  count?: number;
  images?: string[];
  linkTo?: string;
}

const CCard: React.FC<CCardProps> = ({
  id,
  label,
  code,
  count,
  images,
  linkTo,
}) => {
  const previewImage = images && images.length > 0 ? images[0] : undefined;

  return (
    <Link
      to={linkTo || `/Promosyon/${id}`}
      key={id}
      className="group block rounded-3xl bg-primary border border-gray-200 transition-all duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden cursor-pointer w-full">
        {previewImage && (
          <img
            src={previewImage}
            className="w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-110"
          />
        )}
      </div>

      <div className="py-2 px-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium transition-colors duration-300">
            {label}
          </h3>
          {count !== undefined && (
            <p className="text-white font-medium transition-colors duration-300">
              {count}
            </p>
          )}
        </div>
        {code && <p className="text-xs text-gray-300 mt-1">Code: {code}</p>}
      </div>
    </Link>
  );
};

export default CCard;
