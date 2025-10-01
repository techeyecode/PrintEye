// BrochureCard.tsx
import React from "react";
import { Link } from "react-router-dom";

interface BrochureCardProps {
  title: string;
  image: string;
  id: string;
}

const BrochureCard: React.FC<BrochureCardProps> = ({ title, image, id }) => {
  return (
    <div className="container mx-auto py-10 text-primary">
      <div className=" gap-6">
        <div className="rounded overflow-hidden p-2">
          <Link to={`${id}`} className="block">
            <img src={image} className="w-full h-auto rounded-full" />
          </Link>
          <h3 className="mt-3 text-center font-bold text-primary">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default BrochureCard;
