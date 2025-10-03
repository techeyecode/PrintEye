import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import CButton from "../../Components/CButton";

const HeroSection = () => {
  const carouselImages = [
    "https://www.cloveandtwine.com/cdn/shop/files/CT_New_Mobile_Site_Hero_1_1500x.png?v=1755818315",
    "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
    "https://i.pinimg.com/474x/22/9c/d9/229cd98fdabc24eeb87a2ab6a1d9c105.jpg",
    "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
  ];

  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen bg-secondary/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
        <Carousel
          autoplay
          vertical
          dots={false}
          dotPosition="right"
          effect="scrollx"
          className="h-full w-full"
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="w-full h-screen">
              <img src={image} className="w-full h-full object-cover" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute top-0 left-0 w-full h-full lg:hidden bg-black/40"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-16 sm:py-20 flex flex-col justify-center h-full w-full lg:w-1/2">
        <div className="max-w-2xl lg:max-w-none">
          <h1 className="text-2xl md:text-4xl lg:text-3xl xl:text-5xl text-primary font-extrabold leading-tight lg:leading-tight w-full lg:w-3/4">
            Better Corporate Gifts for a Better Planet
          </h1>
          <p className="text-white lg:text-primary text-sm md:text-lg xl:text-xl font-medium w-full xl:w-2/3 mt-3 sm:mt-4 lg:mt-6">
            Taking company swag from cheap to remarkable with a curated
            selection of sustainable gifts that leave a lasting impression.
          </p>

          <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10 w-1/3 lg:w-1/3 xl:w-1/5">
            <CButton variant={isLarge ? "primary" : "secondary"}>
              Shop All
            </CButton>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-r lg:from-white/10 lg:to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
