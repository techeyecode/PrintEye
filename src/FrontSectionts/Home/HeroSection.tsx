import React from "react";
import { Carousel } from "antd";
import FancyButton from "../../Components/BorderButton";

const HeroSection = () => {
  const carouselImages = [
    "https://www.cloveandtwine.com/cdn/shop/files/CT_New_Mobile_Site_Hero_1_1500x.png?v=1755818315",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://www.cloveandtwine.com/cdn/shop/files/CT_New_Mobile_Site_Hero_1_1500x.png?v=1755818315",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  ];

  return (
    <section className="relative w-full h-screen bg-secondary/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
        <Carousel
          autoplay
          dots={false}
          dotPosition="right"
          vertical={true}
          effect="fade"
          className="h-full w-full"
        >
          {carouselImages.map((image, index) => (
            <div key={index} className=" w-full">
              <img src={image} className="w-full h-full object-cover" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute top-0 left-0 w-full h-full lg:hidden bg-black/30 bg-opacity-50"></div>

      <div className="relative z-10 px-6 lg:px-10 py-20 flex flex-col justify-center h-full lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white lg:text-primary font-extrabold leading-snug lg:leading-tight w-full lg:w-3/4">
          Better Corporate Gifts for a Better Planet
        </h1>
        <p className="text-white lg:text-primary text-base sm:text-lg font-medium w-full lg:w-2/3 mt-4">
          Taking company swag from cheap to remarkable with a curated selection
          of sustainable gifts that leave a lasting impression.
        </p>

        <div className="flex items-center justify-start md:items-start sm:space-x-4 mt-6 gap-2 lg:gap-0">
          <FancyButton>Shop All</FancyButton>
          <FancyButton>Book A Call</FancyButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
