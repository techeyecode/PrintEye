import { useEffect, useState } from "react";
import { Carousel } from "antd";
import CButton from "../../Components/CButton";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const carouselImages = [
    "https://www.cloveandtwine.com/cdn/shop/files/CT_New_Mobile_Site_Hero_1_1500x.png?v=1755818315",
    "https://cms.paramountglobal.com/wp-content/uploads/2024/11/10_12d3afdac40881fe137fff779d4a3fa8.jpg",
    "https://i.pinimg.com/474x/22/9c/d9/229cd98fdabc24eeb87a2ab6a1d9c105.jpg",
    "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/04/20154735/DSC2758-1-1024x806.jpg",
  ];

  const [isLarge, setIsLarge] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-full h-screen bg-secondary/10 overflow-hidden"
    >
      <div
        className={`absolute top-0 ${
          isRTL ? "left-0" : "right-0"
        } w-full lg:w-1/2 h-full`}
        data-aos="fade"
      >
        <Carousel
          autoplay
          vertical
          dots={false}
          dotPosition={isRTL ? "left" : "right"}
          effect="fade"
          className="h-full w-full"
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="w-full h-screen">
              <img
                src={image}
                className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out hover:scale-105"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute top-0 left-0 w-full h-full lg:hidden bg-black/40"></div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className={`relative z-10 px-4 sm:px-6 lg:px-10 py-16 sm:py-20 flex flex-col justify-center h-full w-full lg:w-1/2 ${
          isRTL ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <div className="max-w-2xl lg:max-w-none">
          <h1
            className={`text-2xl md:text-4xl lg:text-3xl xl:text-5xl text-primary font-extrabold leading-tight lg:leading-tight w-full lg:w-3/4`}
          >
            {t("heroTitle")}
          </h1>
          <p
            className="text-primary  text-sm md:text-lg xl:text-xl font-medium w-full xl:w-2/3 mt-3 sm:mt-4 lg:mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("heroSubTitle")}
          </p>
          <div className="flex flex-col xs:flex-row items-start mt-6 sm:mt-8 lg:mt-10">
            <CButton
              variant={isLarge ? "primary" : "secondary"}
              link="/Promotion"
            >
              {t("seeAll")}
            </CButton>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          isRTL
            ? "from-black/40 to-transparent lg:bg-gradient-to-l lg:from-white/10 lg:to-transparent"
            : "from-black/40 to-transparent lg:bg-gradient-to-r lg:from-white/10 lg:to-transparent"
        } pointer-events-none`}
      ></div>
    </section>
  );
};

export default HeroSection;
