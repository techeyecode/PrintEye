import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { companies } from "../Gallary/GallaryItems";

const ImageGallary: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = companies.find((c) => c.id === Number(id));

  if (!company) return <p>Company not found</p>;

  return (
    <div className="container mx-auto p-6 mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-primary">
        {company.name}{" "}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {company.images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={img}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;
