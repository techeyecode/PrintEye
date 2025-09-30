import React from "react";
import BusinessCardImg from "../../../assets/BussinessCard.jpg";
const BusinessCardsSection: React.FC = () => {
  return (
    <div className="bg-secondary/40">
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <div className="flex-1 mb-6 lg:mb-0">
            <figure className="overflow-hidden rounded-2xl">
              <img
                src={BusinessCardImg}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </figure>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Professional Business Cards – High-Quality & Customizable
            </h2>
            <p className="text-primary text-lg mb-4">
              Looking to make your own business cards that stand out? With MOO,
              you can design professional custom business cards that leave a
              lasting impression. Whether you're after bold, creative designs or
              sleek, minimalist styles, MOO offers the best business cards,
              ensuring top-quality prints with customizable options to match
              your brand perfectly.
            </p>
            <p className="text-primary text-lg">
              Choose from a variety of templates, finishes, and paper types to
              make sure your business card is as unique as your brand.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessCardsSection;
