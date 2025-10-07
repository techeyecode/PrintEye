import React from "react";
import { useParams } from "react-router-dom";
import { signCategories } from "./SignItems";
import Breadcrumbs from "../../Components/CBreadcrumb";
import CDetailies from "../../Components/CDetailies";

const SignDetailies: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id)
    return <div className="p-4 text-red-500 text-center">Invalid Product</div>;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "home", path: "/" },
          { label: "sign", path: "/Sign" },
        ]}
      />

      <CDetailies id={id} items={signCategories} />
    </div>
  );
};

export default SignDetailies;
