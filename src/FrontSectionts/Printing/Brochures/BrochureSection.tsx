// BrochureSection.tsx
import React from "react";

interface Brochure {
  name: string;
  description: string[];
  price: string;
  startingPrice: string;
  imageUrl: string;
  linkUrl: string;
}

const brochures: Brochure[] = [
  {
    name: "Bi-Fold",
    description: [
      "4 printable sections",
      "Matte, glossy, uncoated & recycled paper options",
      "3 size options",
    ],
    startingPrice: "25",
    price: "$26.99",
    imageUrl:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_800/legacy_dam/en-us/S001906182/NPIB48366-Brochures-GBB-bi-fold-001",
    linkUrl: "https://www.vistaprint.com/marketing-materials/brochures/bi-fold",
  },
  {
    name: "Tri-Fold",
    description: [
      "6 printable sections",
      "Matte, glossy, uncoated & recycled paper options",
      "3 size options",
    ],
    startingPrice: "25",
    price: "$40.99",
    imageUrl:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_800/legacy_dam/en-us/S001906225/NPIB48366-Brochures-GBB-tri-fold-001",
    linkUrl:
      "https://www.vistaprint.com/marketing-materials/brochures/tri-fold",
  },
  {
    name: "Z-Fold",
    description: [
      "6 printable sections",
      "Matte, glossy, uncoated & recycled paper options",
      "1 size option",
    ],
    startingPrice: "25",
    price: "$40.99",
    imageUrl:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,w_800/legacy_dam/en-us/S001905953/NPIB48366-Brochures-GBB-Zfold-001",
    linkUrl: "https://www.vistaprint.com/marketing-materials/brochures/z-fold",
  },
];

const BrochureSection: React.FC = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">Brochures</h2>
        <p className="text-primary">
          Keep customers in the know with crisp, compact brochures. Explore 3
          different fold styles and other options
        </p>
      </div>

      {/* Brochure Tiles */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {brochures.map((brochure, idx) => (
          <div
            key={idx}
            className=" rounded overflow-hidden shadow hover:shadow-lg transition flex flex-col"
          >
            <img
              src={brochure.imageUrl}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default BrochureSection;
