import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PlacementSupportSwiper = ({ PlacementSupportInfo }) => {
  const initialSlice = PlacementSupportInfo.slice(0, 10);
  const [displayedData, setDisplayedData] = useState(initialSlice);
  const [isShowingMore, setIsShowingMore] = useState(false);

  return (
    <div
      data-aos="zoom-out"
      // data-aos-delay="600"
      className="px-2 md:px-6 flex flex-col justify-center w-full gap-4"
    >
      {/* <h4 className="text-sm md:text-xl text-content font-semibold">
                Our Hiring Partners
            </h4> */}
      {/* <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
          Our Hiring Partner
        </h2>
      </div> */}
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-content">
          Our Hiring Partners
        </h2>
        {/* <p className="text-lg text-content-secondary max-w-2xl mx-auto">
              Our structured 8-step process ensures your project is delivered.
            </p> */}
      </div>
      {/* Swiper Section for Logos */}
      <div className="w-full px-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          spaceBetween={8}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          // className={isDarkMode ? "" : "custom-swiper"}
          // ref={swiperRef}
          breakpoints={{
            640: {
              slidesPerView: 3.5,
              spaceBetween: 8, // Consistent spacing for sm
            },
            768: {
              slidesPerView: 5, // Reduced from 6 to fit wider cards
              spaceBetween: 12, // Slightly larger for md screens
            },
            1024: {
              slidesPerView: 6, // Adjusted for lg screens
              spaceBetween: 12, // Consistent spacing for lg
            },
            1280: {
              slidesPerView: 6.5, // Added for xl screens to show more cards
              spaceBetween: 10,
            },
          }}
          className="py-4"
        >
          {displayedData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-surface border border-line shadow-sm h-24 md:h-40 w-full max-w-[120px] md:max-w-72 rounded-lg flex flex-col items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-16 h-16 md:w-32 md:h-32 object-contain mb-2 hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <p className="text-[10px] md:text-xs text-content-secondary text-center">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlacementSupportSwiper;