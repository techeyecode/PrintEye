import React from "react";

const Matbaa: React.FC = () => {
  const services = [
    "Business Cards",
    "Flyers & Brochures",
    "Posters & Banners",
    "Catalogs & Magazines",
    "Stickers & Labels",
  ];

  const paperTypes = ["Glossy", "Matte", "Recycled", "Premium"];
  const finishes = ["Lamination", "UV Coating", "Embossing"];
  const sizes = ["A4", "A5", "Letter", "Custom"];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        🖨️ Printing Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold mb-2">{service}</h2>
            <p className="text-gray-500 text-sm">
              High-quality {service.toLowerCase()} printing with multiple
              customization options.
            </p>
          </div>
        ))}
      </div>

      {/* Printing Quality Info */}
      <div className="bg-gray-50 rounded-3xl p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Printing Quality</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium mb-2">Paper Types</h3>
            <ul className="list-disc list-inside text-gray-600">
              {paperTypes.map((type, idx) => (
                <li key={idx}>{type}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Finishes</h3>
            <ul className="list-disc list-inside text-gray-600">
              {finishes.map((finish, idx) => (
                <li key={idx}>{finish}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Sizes</h3>
            <ul className="list-disc list-inside text-gray-600">
              {sizes.map((size, idx) => (
                <li key={idx}>{size}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Order / Upload Section */}
      <div className="text-center">
        <p className="mb-4 text-gray-600">
          Ready to place your order? Upload your design or fill out our order
          form.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300">
          Upload Design / Order Now
        </button>
      </div>
    </div>
  );
};

export default Matbaa;
