import React from "react";
import { Link } from "react-router-dom";
interface BusinessCardProps {
  label: string;
  count: string;
  image: string;
  id: string;
  link?: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  label,
  count,
  image,
  id,
}) => {
  return (
    <Link
      to={`/business/${id}`}
      className="relative block overflow-hidden rounded-2xl shadow transition"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition"></div>
      <img src={image} className="w-full h-auto object-cover" />
      <div className="bottom-0 flex items-center justify-center px-3 left-0 right-0 text-center py-2">
        <span className="block font-semibold text-primary">{label}</span>
        {/* <span className="block text-sm text-primary">{count}</span> */}
      </div>
    </Link>
  );
};

export default BusinessCard;
