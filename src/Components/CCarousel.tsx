import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

interface CarouselSlide {
  id: number;
  title: string;
  image: string;
  link?: string;
}

interface CCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  slideSpeed?: number;
}

const CCarousel: React.FC<CCarouselProps> = ({
  slides,
  autoPlay = true,
  showArrows = true,
  showDots = false,
  slideSpeed = 500,
}) => {
  const getSlidesPerGroup = () => {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const groupSlides = (slides: CarouselSlide[], size: number) => {
    const groups: CarouselSlide[][] = [];
    for (let i = 0; i < slides.length; i += size) {
      groups.push(slides.slice(i, i + size));
    }
    return groups;
  };

  const [slideGroups, setSlideGroups] = useState(
    groupSlides(slides, getSlidesPerGroup())
  );

  useEffect(() => {
    const handleResize = () => {
      setSlideGroups(groupSlides(slides, getSlidesPerGroup()));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slides]);

  const ArrowNext = ({ onClick }: any) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-2 lg:right-20 -translate-y-1/2 border-2 border-secondary text-secondary hover:border-primary hover:text-primary w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full cursor-pointer z-10 text-2xl lg:text-3xl"
    >
      <MdNavigateNext />
    </div>
  );

  const ArrowPrev = ({ onClick }: any) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-2 lg:left-20 -translate-y-1/2 border-2 border-secondary text-secondary hover:border-primary hover:text-primary w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full cursor-pointer z-10 text-2xl lg:text-3xl"
    >
      <GrFormPrevious />
    </div>
  );

  return (
    <Carousel
      dots={showDots}
      infinite
      autoplay={autoPlay}
      speed={slideSpeed}
      slidesToShow={1}
      slidesToScroll={1}
      nextArrow={showArrows ? <ArrowNext /> : undefined}
      prevArrow={showArrows ? <ArrowPrev /> : undefined}
      arrows={showArrows}
    >
      {slideGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="p-2 lg:p-4">
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            {group.map((slide) => (
              <Link
                key={slide.id}
                to={`/Uniform/${slide.id}`}
                className="group relative overflow-hidden flex-1 h-[400px] lg:h-[500px] transform transition-transform duration-500 hover:scale-105"
              >
                <img
                  src={slide.image}
                  className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center font-semibold text-white p-1 opacity-0 group-hover:opacity-100 transition-opacity text-sm lg:text-lg">
                  {slide.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CCarousel;
