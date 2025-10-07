import Catalog1 from "../assets/DRGroupProfile.pdf";
import Catalog2 from "../assets/DRMatbaaCatalog.pdf";
import Catalog3 from "../assets/DRSaat.pdf";
import CatalogImg1 from "../assets/Catagore1.png";
import CatalogImg2 from "../assets/Catagore2.png";
import CatalogImg3 from "../assets/Catagore3.png";
import { FaEye } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
import PageHeader from "../Components/PageHeader";

const Catalog = () => {
  const catalogs = [
    {
      id: 1,
      file: Catalog1,
      image: CatalogImg1,
    },
    {
      id: 2,
      file: Catalog2,
      image: CatalogImg2,
    },
    {
      id: 3,
      file: Catalog3,
      image: CatalogImg3,
    },
    {
      id: 4,
      file: Catalog1,
      image: CatalogImg1,
    },
    {
      id: 5,
      file: Catalog2,
      image: CatalogImg2,
    },
    {
      id: 6,
      file: Catalog3,
      image: CatalogImg3,
    },
  ];

  const handleView = (file) => {
    window.open(file, "_blank");
  };

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="EyePrintCatalog"
        subtitle="AllItemsSubtitle"
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop&q=80"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Catalog" }]}
      />
      <div className="max-w-7xl mx-auto my-6 md:my-10  ">
        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-4">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="relative  rounded-3xl shadow-sm overflow-hidden transition-shadow duration-300 group border border-primary/20"
            >
              {/* Image */}
              <div className="relative h-full overflow-hidden ">
                <img
                  src={catalog.image}
                  className="w-full h-full object-cover transform transition-transform duration-300 "
                />

                <div className="absolute top-4 right-4 flex flex-col gap-4">
                  <button
                    onClick={() => handleView(catalog.file)}
                    className=" text-primary rounded-full text-xl transition-colors cursor-pointer"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleDownload(catalog.file)}
                    className=" text-primary rounded-full text-xl transition-colors cursor-pointer"
                  >
                    <MdCloudDownload />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
