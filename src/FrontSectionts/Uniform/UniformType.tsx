import React from "react";
import { Link, useParams } from "react-router-dom";
import CCard from "../../Components/CCard";
import {
  industryCategories,
  schoolUniforms,
  SportsUniforms,
  CupsUniforms,
} from "./UniformItems";
import { TiHome } from "react-icons/ti";
import { FaTags, FaTshirt } from "react-icons/fa";

const UniformType = () => {
  const { id } = useParams();
  const categoryId = parseInt(id || "0");

  const allCategories = [
    ...industryCategories,
    ...schoolUniforms,
    ...SportsUniforms,
    ...CupsUniforms,
  ];

  const selectedCategory = allCategories.find((cat) => cat.id === categoryId);

  if (!selectedCategory) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center">Category Not Found</h1>
        <p className="text-center mt-4">
          The category with ID {id} doesn't exist.
        </p>
      </div>
    );
  }

  const subcategories = selectedCategory.subcategories;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <nav className="flex items-center space-x-2 text-sm mb-6 text-primary">
          <Link to="/" className="flex items-center transition-colors">
            <TiHome className="w-4 h-4 mr-1" />
            Home
          </Link>
          <span className="mx-3">/</span>

          <Link to="/Uniform" className="flex items-center transition-colors">
            <FaTshirt className="w-4 h-4 mr-1" />
            Uniform
          </Link>
          <span className="mx-3">/</span>
          <span className="text-primary font-medium">
            {selectedCategory.title}
          </span>
        </nav>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subcategories.map((selectedCategory) => (
          <CCard
            key={selectedCategory.id}
            id={selectedCategory.id}
            label={selectedCategory.title}
            count={selectedCategory.popularItems?.length || 0}
            images={selectedCategory.images || []}
            link={`/UniformType/${selectedCategory.id}`}
          />
        ))}
      </div>

      {subcategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No subcategories found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default UniformType;
