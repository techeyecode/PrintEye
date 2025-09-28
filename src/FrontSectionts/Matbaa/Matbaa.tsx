import React, { useState } from "react";

const Matbaa: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      name: "Business Cards",
      description: "Professional business cards that make lasting impressions",
      features: [
        "Spot UV Coating",
        "Rounded Corners",
        "Double-sided Printing",
        "Premium Cardstock",
      ],
      turnaround: "24-48 hours",
      startingPrice: "$29.99",
    },
    {
      name: "Flyers & Brochures",
      description: "Eye-catching marketing materials for effective campaigns",
      features: [
        "Full Color Printing",
        "Various Folding Options",
        "Bulk Discounts",
        "Fast Turnaround",
      ],
      turnaround: "2-5 days",
      startingPrice: "$49.99",
    },
    {
      name: "Posters & Banners",
      description: "Large format printing for events and promotions",
      features: [
        "UV Resistant Ink",
        "Grommet Installation",
        "Lamination Options",
        "Weatherproof Materials",
      ],
      turnaround: "3-7 days",
      startingPrice: "$79.99",
    },
    {
      name: "Catalogs & Magazines",
      description: "High-quality publications for professional presentation",
      features: [
        "Perfect Binding",
        "Saddle Stitching",
        "Glossy/Matte Covers",
        "Bulk Pricing",
      ],
      turnaround: "5-10 days",
      startingPrice: "$199.99",
    },
    {
      name: "Stickers & Labels",
      description: "Custom adhesive products for branding and packaging",
      features: [
        "Kiss Cutting",
        "Waterproof Material",
        "Various Shapes",
        "Permanent/Removable Adhesive",
      ],
      turnaround: "1-3 days",
      startingPrice: "$39.99",
    },
    {
      name: "Book Printing",
      description: "Complete book publishing services",
      features: [
        "Hardcover/Softcover",
        "ISBN Assignment",
        "Distribution Support",
        "Editorial Services",
      ],
      turnaround: "10-15 days",
      startingPrice: "$299.99",
    },
  ];

  const paperTypes = [
    {
      name: "Glossy",
      description: "Shiny finish for vibrant colors",
      bestFor: "Photos, Brochures",
    },
    {
      name: "Matte",
      description: "Non-reflective professional look",
      bestFor: "Text Documents, Business Cards",
    },
    {
      name: "Recycled",
      description: "Eco-friendly sustainable option",
      bestFor: "Environmentally Conscious Projects",
    },
    {
      name: "Premium",
      description: "Luxury feel with superior quality",
      bestFor: "High-end Publications, Premium Cards",
    },
    {
      name: "Cardstock",
      description: "Thick durable paper",
      bestFor: "Business Cards, Invitations",
    },
    {
      name: "Bond",
      description: "Standard office paper",
      bestFor: "Documents, Letterheads",
    },
  ];

  const finishes = [
    {
      name: "Lamination",
      description: "Protective plastic coating",
      types: ["Gloss", "Matte"],
    },
    {
      name: "UV Coating",
      description: "High-gloss spot treatment",
      types: ["Spot UV", "Full Coverage"],
    },
    {
      name: "Embossing",
      description: "Raised design elements",
      types: ["Blind", "Foil"],
    },
    {
      name: "Foil Stamping",
      description: "Metallic foil application",
      types: ["Gold", "Silver", "Copper"],
    },
    {
      name: "Die Cutting",
      description: "Custom shape cutting",
      types: ["Kiss Cut", "Through Cut"],
    },
  ];

  const printingTechnologies = [
    {
      name: "Digital Printing",
      description: "Ideal for short runs and quick turnaround",
      benefits: [
        "Fast Production",
        "Cost-effective for small quantities",
        "Variable Data Printing",
      ],
      bestFor: "Business Cards, Flyers, Small Batches",
    },
    {
      name: "Offset Printing",
      description: "Superior quality for large quantities",
      benefits: [
        "Highest Quality",
        "Cost-effective for large runs",
        "Consistent Color Matching",
      ],
      bestFor: "Books, Magazines, Large Quantity Orders",
    },
    {
      name: "Large Format Printing",
      description: "For oversized materials and banners",
      benefits: [
        "Scalable Sizes",
        "Durable Materials",
        "Outdoor Use Capability",
      ],
      bestFor: "Posters, Banners, Trade Show Graphics",
    },
  ];

  const qualityStandards = [
    { standard: "ISO 9001", description: "Quality Management System" },
    { standard: "FOGRA Certified" },
    {
      standard: "Pantone® Matching",
      description: "Precise Color Reproduction",
    },
    { standard: "100% Quality Check", description: "Every Item Inspected" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          🖨️ Professional Printing Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          High-quality printing solutions for businesses and individuals. From
          business cards to large format banners, we deliver excellence in every
          print.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Our Printing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {service.startingPrice}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>⏱️ {service.turnaround}</span>
                  <button
                    onClick={() => setSelectedService(service.name)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Printing Specifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">📄</span>
              Paper Types & Materials
            </h3>
            <div className="space-y-4">
              {paperTypes.map((paper, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-800">{paper.name}</h4>
                  <p className="text-sm text-gray-600">{paper.description}</p>
                  <span className="text-xs text-gray-500">
                    Best for: {paper.bestFor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Finishes */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">✨</span>
              Special Finishes
            </h3>
            <div className="space-y-4">
              {finishes.map((finish, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-green-500 pl-4 py-1"
                >
                  <h4 className="font-medium text-gray-800">{finish.name}</h4>
                  <p className="text-sm text-gray-600">{finish.description}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {finish.types.map((type, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Printing Technologies */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">⚙️</span>
              Printing Technologies
            </h3>
            <div className="space-y-4">
              {printingTechnologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-purple-500 pl-4 py-1"
                >
                  <h4 className="font-medium text-gray-800">{tech.name}</h4>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                  <div className="mt-2">
                    <h5 className="text-sm font-medium text-gray-700">
                      Benefits:
                    </h5>
                    <ul className="text-xs text-gray-600 list-disc list-inside">
                      {tech.benefits.map((benefit, bIdx) => (
                        <li key={bIdx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-xs text-gray-500">
                    Best for: {tech.bestFor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Printing Project?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Get a free quote or upload your design for a professional review
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            📋 Get Free Quote
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
            🎨 Upload Design
          </button>
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300">
            📞 Contact Expert
          </button>
        </div>
        <p className="mt-6 text-sm opacity-80">
          Need help? Call us at <strong>1-800-PRINT-123</strong> or email{" "}
          <strong>support@matbaa.com</strong>
        </p>
      </section>
    </div>
  );
};

export default Matbaa;
