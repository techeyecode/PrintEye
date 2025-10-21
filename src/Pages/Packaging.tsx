import React from "react";
import CSidebar from "../Components/CSidebar";
import PageHeader from "../Components/PageHeader";
import PackagingCards from "../FrontSectionts/Packaging/PackagingCards";

const Packaging: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="allPackaging"
        subtitle="allPackagingSubtitle"
        backgroundImage="https://cdn.shopify.com/videos/c/o/v/0015258b54f14167a08e65b953460363.mp4"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "packaging" }]}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between  gap-6 my-6 md:my-10 px-4 md:px-2">
        <div className="w-full lg:w-1/4">
          <CSidebar title="packaging" type="Packaging" />
        </div>

        <div className="w-full lg:w-3/4">
          <PackagingCards />
        </div>
      </div>
    </div>
  );
};

export default Packaging;
