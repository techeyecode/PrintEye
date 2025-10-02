import React from "react";
import { useParams } from "react-router-dom";
import { uniformCategories } from "./UniformItems";
import Breadcrumbs from "../../Components/CBreadcrumb";
import CDetailies from "../../Components/CDetailies";

const UniformDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id)
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Uniform", path: "/Uniform" },
          { label: "Details" },
        ]}
      />

      <CDetailies id={id} items={uniformCategories} />
    </div>
  );
};

export default UniformDetailies;
