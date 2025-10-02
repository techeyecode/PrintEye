import React from "react";
import HomeHeader from "../../Components/HomeHeader";

const FeatureSupplier: React.FC = () => {
  return (
    <section className="mx-auto px-4">
      <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8">
        <div className="w-full lg:w-1/2">
          <HomeHeader
            title="Corporate Gifting Made Easy"
            description=" Our gifting methodology makes your job as simple as possible. We
            developed easy-to-browse categories, pre-built kits, and KitBuilder
            to help you bring your thoughtful corporate gifts to life, and our
            dedicated managers guide you through the process every step of the
            way."
            buttonText="About Us"
            buttonLink="#"
          />
        </div>

        <div className="w-full lg:w-1/2">
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
