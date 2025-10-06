import React from "react";
import { useTranslation } from "react-i18next";

interface ImageItem {
  url: string;
  colSpan?: string;
  height?: string;
}

const StatusPage: React.FC = () => {
  const { t } = useTranslation();
  const images: ImageItem[] = [
    {
      url: "//www.cloveandtwine.com/cdn/shop/files/1_c50f67dc-c87e-4fcf-a096-87f9cff4b34b_1500x.jpg?v=1738512385",
      colSpan: "lg:col-span-2",
      height: "h-[300px] lg:h-[500px]",
    },
    {
      url: "//www.cloveandtwine.com/cdn/shop/files/CustomThera-2_1500x.jpg?v=1738561440",
      height: "h-[300px] lg:h-[500px]",
    },

    {
      url: "//www.cloveandtwine.com/cdn/shop/files/Caistravelkit-3_54d5987d-bd3c-4129-9374-77cd0448021e_1500x.jpg?v=1738515590",
      height: "h-[250px] lg:h-[350px]",
    },
    {
      url: "//www.cloveandtwine.com/cdn/shop/files/Duolingo_C_T-9_1500x.jpg?v=1738515578",
      height: "h-[250px] lg:h-[350px]",
    },
    {
      url: "//www.cloveandtwine.com/cdn/shop/files/CT_New_Mobile_Site_Hero_1_1500x.png?v=1755818315",
      height: "h-[250px] lg:h-[350px]",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
            {t("newProducts")}
          </h2>
          <p className="text-lg text-primary">
            {t("newProductsSubtext")}
            
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className={`bg-center bg-cover rounded-lg shadow-md ${
                img.colSpan || "col-span-1"
              } ${img.height}`}
              style={{ backgroundImage: `url(${img.url})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatusPage;
