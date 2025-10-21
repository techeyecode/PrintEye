import React from "react";
import HomeHeader from "../../Components/HomeHeader";

const BuildYourBox: React.FC = () => {
  return (
    <section className="w-full bg-secondary/50 py-8 overflow-hidden">
      <div className=" mx-auto flex flex-col lg:flex-row items-center">
        <div
          className="w-full lg:w-1/2 p-4 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div
            className="w-full rounded-lg bg-center bg-cover"
            style={{
              backgroundImage:
                "url(//www.cloveandtwine.com/cdn/shop/files/Compilation_with_shadow_800x_crop_center.png?v=1738512272)",
              paddingBottom: "50.6%",
            }}
          />
        </div>

        <div
          className="relative w-full lg:w-1/2 p-6 flex flex-col justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <HomeHeader
            title="thoughtfulCorporateGiftsMadeSimple"
            description="yourPerfectGiftJustAClickAwayDescripion"
            buttonText="buildYourOwnBox"
            buttonLink="/Promotion"
          />
        </div>
      </div>
    </section>
  );
};

export default BuildYourBox;
