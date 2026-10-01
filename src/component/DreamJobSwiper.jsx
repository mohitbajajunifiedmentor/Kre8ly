import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
} from "react-icons/fa";
import { DreamJobSection } from "../Utils/DreamJobSection";

const DreamJobSwiper = () => {
  return (
    <div className="w-full md:hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        // className={isDarkMode ? "" : "custom-swiper"}
        // ref={swiperRef}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {DreamJobSection.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center w-full mx-auto mt-5">
              <figure className="mb-4">
                <img
                  src={feature.imgSrc}
                  alt={feature.imgAlt}
                  className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all duration-200 cursor-pointer"
                />
              </figure>
              <p className="text-sm md:text-xl font-semibold text-content">
                {feature.title}
              </p>
              <p className="text-[10px] md:text-sm mt-2 text-content-secondary">
                {feature.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DreamJobSwiper;
