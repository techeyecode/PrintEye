import React from "react";
import { Carousel } from "antd";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

interface Slide {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface CCarouselProps {
  slides: Slide[];
}

const CCarousel: React.FC<CCarouselProps> = ({ slides }) => {
  // Group slides dynamically based on screen width
  const getSlidesPerGroup = () => {
    if (window.innerWidth >= 1280) return 4; // xl screens - 4 cards
    if (window.innerWidth >= 1024) return 3; // lg screens - 3 cards
    if (window.innerWidth >= 768) return 2; // tablets - 2 cards
    return 1; // mobile - 1 card
  };

  const groupSlides = (slides: Slide[], size: number) => {
    const groups = [];
    for (let i = 0; i < slides.length; i += size) {
      groups.push(slides.slice(i, i + size));
    }
    return groups;
  };

  const [slideGroups, setSlideGroups] = React.useState(
    groupSlides(slides, getSlidesPerGroup())
  );

  React.useEffect(() => {
    const handleResize = () => {
      setSlideGroups(groupSlides(slides, getSlidesPerGroup()));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slides]);

  const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 right-2 lg:right-20 -translate-y-1/2 mx-2 border-2 border-secondary text-secondary hover:border-primary hover:text-primary w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full cursor-pointer z-10 text-2xl lg:text-3xl"
      >
        <MdNavigateNext />
      </div>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 left-2 lg:left-20 -translate-y-1/2 mx-2 border-2 border-secondary text-secondary hover:border-primary hover:text-primary w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full cursor-pointer z-10 text-2xl lg:text-3xl"
      >
        <GrFormPrevious />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Carousel {...settings} arrows>
      {slideGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="p-2 lg:p-4">
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            {group.map((slide) => (
              <a
                key={slide.id}
                href={slide.link}
                className="group relative overflow-hidden flex-1 h-[400px] lg:h-[500px] transform transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center font-semibold text-white p-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm lg:text-lg">
                  {slide.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CCarousel;
