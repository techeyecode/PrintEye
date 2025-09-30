// MiniNavbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Business Card", link: "/Business" },
  { name: "Brochure", link: "/brochure" },
  { name: "Folder", link: "/folder" },
  { name: "Letter Head", link: "/letter-head" },
  { name: "Envelope", link: "/envelope" },
  { name: "Notepad", link: "/notepad" },
  { name: "Catalog", link: "/catalog" },
  { name: "Invoice", link: "/invoice" },
  { name: "Underfoot Paper", link: "/underfoot-paper" },
  { name: "Calendar", link: "/calendar" },
  { name: "Paper Bag", link: "/paper-bag" },
  { name: "Tissue", link: "/tissue" },
  { name: "Car Perfume", link: "/car-perfume" },
];

const MiniNavbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center overflow-x-auto scrollbar-hide">
          <div className="flex items-center space-x-1 px-4 py-3">
            {categories.map((category) => (
              <Link
                key={category.link}
                to={category.link}
                className="flex items-center px-4 py-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 ease-out group whitespace-nowrap font-medium text-sm"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MiniNavbar;
