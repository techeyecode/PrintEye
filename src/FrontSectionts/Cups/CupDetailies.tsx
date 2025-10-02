import React from "react";
import { useParams } from "react-router-dom";
import { cupCategories } from "./CupItem";
import Breadcrumbs from "../../Components/CBreadcrumb";
import CDetailies from "../../Components/CDetailies";

const CupDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id)
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Cup", path: "/Cup" },
          { label: "Details" },
        ]}
      />

      <CDetailies id={id} items={cupCategories} />
    </div>
  );
};

export default CupDetailies;
