import React from "react";
import UniformHeader from "./UniformHeader";
import HomeHeader from "../../Components/HomeHeader";
import CCarousel from "../../Components/CCarousel";
import {
  industryCategories,
  schoolUniforms,
  SportsUniforms,
  CupsUniforms,
} from "./UniformItems";

const Uniform = () => {
  return (
    <div>
      <UniformHeader />
      <section className="mx-auto px-4 lg:px-10 !space-y-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="w-full lg:w-1/4">
            <HomeHeader
              title="Shop By Hospitality"
              description="We expertly curate remarkable products, from emerging brands to household names, that are thoughtful and long-lasting."
              buttonText="See All"
              buttonLink="#"
            />
          </div>

          <div className="w-full lg:w-3/4">
            <CCarousel
              slides={industryCategories}
              autoPlay={true}
              showArrows={true}
              showDots={false}
              slideSpeed={600}
            />{" "}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8">
          <div className="w-full lg:w-1/4">
            <HomeHeader
              title="Shop School Uniforms"
              description="We expertly curate remarkable products, from emerging brands to household names, that are thoughtful and long-lasting."
              buttonText="See All"
              buttonLink="#"
            />
          </div>

          <div className="w-full lg:w-3/4">
            <CCarousel
              slides={schoolUniforms}
              autoPlay={true}
              showArrows={true}
              showDots={false}
              slideSpeed={600}
            />{" "}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="w-full lg:w-1/4">
            <HomeHeader
              title="Sports & Culinary"
              description="Discover our specialized sports team uniforms and professional culinary wear designed for performance and style."
              buttonText="Explore All"
              buttonLink="#"
            />
          </div>

          <div className="w-full lg:w-3/4">
            <CCarousel
              slides={SportsUniforms}
              autoPlay={true}
              showArrows={true}
              showDots={false}
              slideSpeed={600}
            />{" "}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8">
          <div className="w-full lg:w-1/4">
            <HomeHeader
              title="Cups Categories"
              description="Explore our most popular uniform categories trusted by professionals across various industries."
              buttonText="View All"
              buttonLink="#"
            />
          </div>

          <div className="w-full lg:w-3/4">
            <CCarousel
              slides={CupsUniforms}
              autoPlay={true}
              showArrows={true}
              showDots={false}
              slideSpeed={600}
            />{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uniform;
