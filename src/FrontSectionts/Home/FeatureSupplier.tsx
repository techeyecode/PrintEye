import React from "react";
import HomeHeader from "../../Components/HomeHeader";

const FeatureSupplier: React.FC = () => {
  return (
    <section className="mx-auto px-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <HomeHeader
            title="packagingMadeSimple"
            description="packagingMadeSimpleDescription"
            buttonText="Packaging"
            buttonLink="/Packaging"
          />
        </div>

        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <video
            src={`https://cdn.shopify.com/videos/c/o/v/0015258b54f14167a08e65b953460363.mp4`}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSupplier;
