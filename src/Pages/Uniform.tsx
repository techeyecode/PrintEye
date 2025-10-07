import React from "react";
import PageHeader from "../Components/PageHeader";
import CSidebar from "../Components/CSidebar";
import UniformCards from "../FrontSectionts/Uniforms/UniformCards";

const Uniform: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="teamUniforms"
        subtitle="teamUniformsSubtitle"
        backgroundImage="https://www.cloveandtwine.com/cdn/shop/collections/visa_card_1500x.jpg?v=1661966680"
        breadcrumbs={[{ label: "home", path: "/" }, { label: "uniform" }]}
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between  gap-6 my-6 md:my-10">
        <div className="w-full lg:w-1/4">
          <CSidebar title="uniform" type="Uniform" />
        </div>

        <div className="w-full lg:w-3/4">
          <UniformCards />
        </div>
      </div>
    </div>
  );
};

export default Uniform;
