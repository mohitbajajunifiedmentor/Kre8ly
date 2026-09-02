// src/component/HomeCourseComponent.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CourseCardInfos } from "../Utils/CourseCardInfos";
import Cards from "./Cards";

const HomeCourseComponent = ({ darkMode }) => {
  const swiperRef = useRef(null);
  const [showcarousel, setShowCarousel] = useState(true);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true; // Convert to boolean
  });

  // Update localStorage whenever the dark mode state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const HandleremoveCarousel = () => {
    setShowCarousel((prev) => !prev);
    let coursesSection = document.querySelector("#Courses-section");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        {" "}
        {/* Add this wrapper */}
        <>
          {showcarousel ? (
            <>
              <div className="w-full flex justify-center items-center overflow-hidden">
                <Swiper
                  ref={swiperRef}
                  pagination={true}
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  // className="mySwiper"
                  spaceBetween={0} // Add this line to remove space between slides
                  // style={{ padding: 0, margin: 0 }} // Ensure no extra padding/margin
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {CourseCardInfos.map((Course, i) => (
                    <SwiperSlide key={i}>
                      <Cards
                        key={Course.id}
                        Course={Course}
                        varient="course"
                        index={i}
                        darkMode={darkMode}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-[95%] flex justify-end mx-auto items-center">
                <div className="w-full justify-start items-start">
                  <div onClick={HandleremoveCarousel}>
                    <button className="text-content hover:bg-surface-sunken border border-line-strong dark:text-white dark:hover:text-content px-2 py-3 md:px-4  md:py-3 flex items-center font-bold w-fit justify-center rounded-md text-xs md:text-sm transition-all duration-300">
                      {showcarousel ? "Show More" : "Hide"}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-end  gap-5 ">
                  <button
                    onClick={goPrev}
                    className=" dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover dark:hover:text-white text-white  p-2 rounded-md "
                  >
                    <FaChevronLeft className="text-sm md:text-xl" />
                  </button>
                  <button
                    onClick={goNext}
                    className=" dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover dark:hover:text-white text-white  p-2 rounded-md "
                  >
                    <FaChevronRight className="text-sm md:text-xl" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mb-10">
              {CourseCardInfos.map((Course, index) => (
                <Cards
                  key={Course.id}
                  Course={Course}
                  varient="course"
                  index={index}
                />
              ))}
            </div>
          )}
        </>
        {!showcarousel && (
          <div
            className="text-content hover:bg-surface-sunken border border-line-strong dark:text-white dark:hover:text-content px-2 py-3 md:px-4  md:py-3 flex items-center font-bold w-fit justify-center rounded-md text-xs md:text-sm transition-all duration-300"
            onClick={HandleremoveCarousel}
          >
            <button>Show Less</button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeCourseComponent;
