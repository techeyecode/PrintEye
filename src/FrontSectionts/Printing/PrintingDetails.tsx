import React from "react";
import { useParams } from "react-router-dom";
import { AllBusinessCards } from "./CardItem";
import CDetailies from "../../Components/CDetailies";

const PrintingDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;
  }

  return (
    <div>
      <CDetailies id={id} items={AllBusinessCards} />
    </div>
  );
};

export default PrintingDetailies;
