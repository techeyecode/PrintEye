// UniformDetailies.tsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaTags, FaAngleDoubleRight } from "react-icons/fa";
import CCard from "../../Components/CCard";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import {
  industryCategories,
  schoolUniforms,
  SportsUniforms,
  CupsUniforms,
} from "./UniformItems";

const allCategories = [
  ...industryCategories,
  ...schoolUniforms,
  ...SportsUniforms,
  ...CupsUniforms,
];

const UniformDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Flatten all subcategories
  const allUniforms = allCategories.flatMap((cat) => cat.subcategories);

  const uniform = allUniforms.find((u) => u.id.toString() === id);

  if (!uniform)
    return (
      <div className="p-4 text-red-500 text-center">Uniform not found</div>
    );

  const parentCategory = allCategories.find((cat) =>
    cat.subcategories.some((sub) => sub.id === uniform.id)
  );

  const relatedSubcategories = parentCategory
    ? parentCategory.subcategories.filter((sub) => sub.id !== uniform.id)
    : [];

  const images =
    uniform.images && uniform.images.length > 0
      ? uniform.images
      : ["/placeholder.png"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const descriptionArray = Array.isArray(uniform.description)
    ? uniform.description
    : uniform.description
    ? [uniform.description]
    : [];

  return (
    <section className="max-w-7xl mx-auto p-4">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm mb-6 text-primary">
        <Link to="/" className="flex items-center transition-colors">
          <TiHome className="w-4 h-4 mr-1" />
          Home
        </Link>
        <span className="mx-3">/</span>
        <Link to="/Uniform" className="flex items-center transition-colors">
          <FaTags className="w-4 h-4 mr-1" />
          Uniforms
        </Link>
        <span className="mx-3">/</span>
        <span className="text-primary font-medium">{uniform.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Images */}
        <div className="w-full lg:w-7/12 relative">
          <div className="h-[500px] flex items-center justify-center rounded-xl">
            <img
              src={images[activeIndex]}
              className="max-h-full max-w-full object-contain rounded-xl"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
          >
            <GrFormPrevious size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
          >
            <MdOutlineNavigateNext size={24} />
          </button>
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  idx === activeIndex
                    ? "border-secondary"
                    : "border-transparent"
                }`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="w-full lg:w-5/12 flex flex-col gap-4 text-primary">
          <h2 className="text-2xl font-semibold">{uniform.title}</h2>

          {uniform.code && <p>Code: {uniform.code}</p>}
          <p>Popular Items: {uniform.popularItems?.join(", ")}</p>

          {descriptionArray.length > 0 && (
            <div className="mt-3">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <ul className="list-disc list-inside flex flex-col gap-1">
                {descriptionArray.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaAngleDoubleRight /> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UniformDetailies;
