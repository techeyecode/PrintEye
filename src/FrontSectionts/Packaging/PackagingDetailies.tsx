import React from "react";
import { useParams } from "react-router-dom";
import { packagingCategories } from "./PackagingItems";
import Breadcrumbs from "../../Components/CBreadcrumb";
import CDetailies from "../../Components/CDetailies";

const PackagingDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id)
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "home", path: "/" },
          { label: "packaging", path: "/Packaging" },
        ]}
      />

      <CDetailies id={id} items={packagingCategories} />
    </div>
  );
};

export default PackagingDetailies;
