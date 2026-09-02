import React from "react";
const Accreditation1 = "/assets/Accreditation/Iso_logo.png";
const Accreditation1_light = "/assets/Accreditation/Accreditation1_light.png";
const Accreditation2 = "/assets/Accreditation/mca_logo.png";
const Accreditation2_light = "/assets/Accreditation/Accreditation2_light.png";
const Accreditation3 = "/assets/Accreditation/Nasscom.png";
const Accreditation3_light = "/assets/Accreditation/Accreditation3_light.png";
const Accreditation4 = "/assets/Accreditation/Startup-india-logo1.png";
const Accreditation4_light = "/assets/Accreditation/Accreditation4_light.png";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AccredationSwiper = () => {
  // Array of accreditation logos for easy iteration
  const Accreditations = [
    { light: Accreditation1, dark: Accreditation1_light },
    { light: Accreditation2, dark: Accreditation2_light },
    { light: Accreditation3, dark: Accreditation3_light },
    { light: Accreditation4, dark: Accreditation4_light },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="800"
      className=" md:hidden px-2 w-full gap-4 "
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Enable autoplay
        className="w-full mb-3 "
      >
        {Accreditations?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-20 flex items-center justify-center mt-2">
              <img
                src={item.light} // Default to light mode image
                alt="Accreditation"
                className="max-w-[80%] max-h-[80%] object-contain cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out dark:hidden" // Hide light image in dark mode
              />
              <img
                src={item.dark} // Dark mode image
                alt="Accreditation"
                className="max-w-[80%] max-h-[80%] object-contain cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out hidden dark:block" // Show dark image in dark mode
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AccredationSwiper;
