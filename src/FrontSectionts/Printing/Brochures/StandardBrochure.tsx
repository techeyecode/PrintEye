// StandardBrochure.tsx
import React from "react";

interface BrochureSlide {
  title: string;
  image: string;
  link: string;
}

const brochureSlides: BrochureSlide[] = [
  {
    title: "Real Estate",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001905891/NPIB48366-Brochure-Product-Tile-Z-fold-Real-Estate-001",
    link: "/marketing-materials/brochures/tri-fold/templates/construction-real-estate-industry",
  },
  {
    title: "Beauty & Spa",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906163/NPIB48366-Brochure-Product-Tile-tri-fold-beauty-001",
    link: "/marketing-materials/brochures/tri-fold/templates/beauty-spa-industry",
  },
  {
    title: "Health & Wellness",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906249/NPIB48366-Brochure-Product-Tile-Z-fold-Health-&-Wellness-001",
    link: "/marketing-materials/brochures/tri-fold/templates/health-wellness-industry",
  },
  {
    title: "Travel & Accommodation",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906020/NPIB48366-Brochure-Product-Tile-bi-fold-Travel-&-Accommodation-001",
    link: "/marketing-materials/brochures/tri-fold/templates/travel-accommodation-industry",
  },
  {
    title: "Food & Beverage",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906168/NPIB48366-Brochure-Product-Tile-tri-fold-food-&-beverage-001",
    link: "/marketing-materials/brochures/tri-fold/templates/food-beverage-industry",
  },
  {
    title: "Professional Services",
    image:
      "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/legacy_dam/en-us/S001906158/NPIB48366-Brochure-Product-Tile-bi-fold-Pofessional-Service-001",
    link: "/marketing-materials/brochures/tri-fold/templates/professional-services-industry",
  },
];

const StandardBrochure: React.FC = () => {
  return (
    <div className="container mx-auto py-10 text-primary">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">Standard Brochure</h2>
        <p>Design a stunning card that perfectly captures your brand.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {brochureSlides.map((slide, index) => (
          <div key={index} className="rounded overflow-hidden  p-2">
            <a href={slide.link} className="block">
              <img src={slide.image} className="w-full h-auto rounded-full" />
            </a>
            <h3 className="mt-3 text-center font-bold text-primary">
              {slide.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StandardBrochure;
