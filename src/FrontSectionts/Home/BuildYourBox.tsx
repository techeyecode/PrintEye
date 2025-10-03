import React from "react";
import HomeHeader from "../../Components/HomeHeader";

const BuildYourBox: React.FC = () => {
  return (
    <section className="w-full bg-primary/20 py-8">
      <div className=" mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 p-4 flex justify-center">
          <div
            className="w-full rounded-lg bg-center bg-cover"
            style={{
              backgroundImage:
                "url(//www.cloveandtwine.com/cdn/shop/files/Compilation_with_shadow_800x_crop_center.png?v=1738512272)",
              paddingBottom: "50.6%",
            }}
          />
        </div>

        <div className="relative w-full lg:w-1/2 p-6 flex flex-col justify-center">
          <HomeHeader
            title="Easily Build Your Gift Kits"
            description="Our KitBuilder platform allows you to click-and-build your
              corporate gift boxes. This simple gift box building tool will give
              you the freedom to easily select everything from custom packaging
              to products to packing materials."
            buttonText="Build Your Own Box"
            buttonLink="#"
          />
        </div>
      </div>
    </section>
  );
};

export default BuildYourBox;
