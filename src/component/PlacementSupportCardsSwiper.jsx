import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
const Placement1 = "/assets/Placement1.png";
const Placement2 = "/assets/Placement2.png";
const Placement3 = "/assets/Placement3.png";

const PlacementSupportCardsSwiper = ({ darkMode }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="px-2 md:hidden flex flex-col justify-center w-full gap-4"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        className="w-full mb-3"
      >
        {/* Job Portal */}
        <SwiperSlide>
          <div
            className={`flex flex-col items-center text-center bg-gradient-to-br from-brand to-brand-active w-full shadow-sm rounded-lg h-28 relative mt-10`}
          >
            <img
              src={Placement1}
              alt="Job Portal"
              className="w-16 h-16 absolute -top-8 hover:scale-110 transition-all duration-300 ease-in-out"
            />
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p className="text-sm text-brand-fg font-semibold mt-3">
                Job Portal
              </p>
              <p className="mt-2 text-[10px] text-brand-fg">
                Find your dream job with our expert-curated job portal.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Resume Reviews */}
        <SwiperSlide>
          <div
            className={`flex flex-col items-center text-center bg-gradient-to-br from-brand to-brand-active w-full shadow-sm rounded-lg h-28 relative mt-10`}
          >
            <img
              src={Placement2}
              alt="Resume Reviews"
              className="w-16 h-16 absolute -top-8 hover:scale-110 transition-all duration-300 ease-in-out"
            />
            <div className="flex flex-col items-center justify-center w-full h-full  px-2">
              <p className="text-sm text-brand-fg font-semibold mt-3">
                Resume Reviews
              </p>
              <p className="mt-2 text-[10px] text-brand-fg">
                Get professional resume reviews to stand out and land your dream
                job!
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Interview with Hiring Partners */}
        <SwiperSlide>
          <div
            className={`flex flex-col items-center text-center bg-gradient-to-br from-brand to-brand-active w-full shadow-sm rounded-lg h-28 relative mt-10`}
          >
            <img
              src={Placement3}
              alt="Interview with Hiring Partners"
              className="w-16 h-16 absolute -top-12 hover:scale-110 transition-all duration-300 ease-in-out"
            />
            <div className="flex flex-col items-center justify-center w-full h-full  px-2">
              <p className="text-sm text-brand-fg font-semibold mt-3">
                Interview with Hiring Partners
              </p>
              <p className="mt-2 text-[10px] text-brand-fg">
                Connect with hiring partners for exclusive interviews and job
                opportunities.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PlacementSupportCardsSwiper;