import React, { useState } from "react";
import { companies } from "../Gallary/GallaryItems";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import { t } from "i18next";

const CompaniesGallary: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const navigate = useNavigate();

  const startIndex = currentPage * itemsPerPage;
  const currentCompanies = companies.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(companies.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <PageHeader
        title="ourCompaniesGallery"
        subtitle="showcasingCreativityAcrossEveryProject"
        backgroundImage="https://www.cloveandtwine.com/cdn/shop/collections/visa_card_1500x.jpg?v=1661966680"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "gallary" }]}
      />
      <div className="container mx-auto p-6 mt-10">
        <div className="flex items-center justify-center gap-14 mb-6">
          <button
            onClick={prevPage}
            className="p-2 text-xl text-primary hover:text-secondary"
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-3xl font-semibold text-center text-primary">
            {t("companiesGallery")}
          </h2>
          <button
            onClick={nextPage}
            className="p-2 text-xl text-primary hover:text-secondary"
          >
            <FaArrowRight />
          </button>
        </div>
        <p className="text-center font-medium my-4 max-w-3xl mx-auto text-primary">
          {t("companiesGallerySubText")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {currentCompanies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate(`company/${company.id}`)}
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg shadow-md">
                <img
                  src={company.image}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesGallary;
