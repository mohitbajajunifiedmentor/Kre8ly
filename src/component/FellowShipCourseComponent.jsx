import React, { useEffect, useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FellowShipCourseCardInfos } from "../Utils/CourseCardInfos";
import Cards from "./Cards";
// Import Swiper styles
import "swiper/css";
import SingleCard from "./SingleCard.jsx";

const FellowShipCourseComponent = ({ darkMode }) => {
  const swiperRef = useRef(null);
  const [showcarousel, setShowCarousel] = useState(true);
  const [showMore, setShowMore] = useState(false);

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
    let coursesSection = document.querySelector("#FellowShip-section");
    if (coursesSection) {
      // Get the navbar height (adjust this value based on your navbar's actual height)
      const navbarHeight = 60; // Example: Replace with your navbar's height in pixels
      const sectionPosition =
        coursesSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const swiperColor = [
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#d3e5f2_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#fedece_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#f7eab9_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#ccc4f4_100%)]",
  ];

  const handleSwiperReachEnd = () => {
    // Scroll down by 500px (or to a specific section)
    window.scrollBy({ top: 500, behavior: "smooth" });
    // OR scroll to a specific section:
    // document.getElementById("next-section-id")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSwiperReachBeginning = () => {
    // Scroll up by 500px (or to a specific section)
    window.scrollBy({ top: -500, behavior: "smooth" });
    // OR scroll to a specific section:
    // document.getElementById("previous-section-id")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full  flex justify-center items-center flex-col">
      {" "}
      {/* Add this wrapper */}
      <>
        {showcarousel ? (
          <>
            <div className="w-full flex justify-center items-center overflow-hidden">
              <Swiper
                ref={swiperRef}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                // autoplay={{
                //   delay: 2000,
                //   pauseOnMouseEnter: true,
                // }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  1024: { slidesPerView: 3 },
                }}
                spaceBetween={20}
                onReachEnd={handleSwiperReachEnd}
                onReachBeginning={handleSwiperReachBeginning}
              >
                {FellowShipCourseCardInfos.map((Course, i) => (
                  <SwiperSlide key={i}>
                    {/* <Cards
                      key={Course.id}
                      Course={Course}
                      varient="fellowship"
                      swiperColor={swiperColor}
                      index={i}
                      darkMode={darkMode}
                    /> */}
                    <SingleCard
                      key={Course.id}
                      Course={Course}
                      varient="fellowship"
                      swiperColor={swiperColor}
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
            {FellowShipCourseCardInfos.map((Course, index) => (
              <Cards
                key={Course.id}
                Course={Course}
                varient="fellowship"
                swiperColor={swiperColor}
                index={index}
                darkMode={darkMode}
                showcarousel={showcarousel}
                setShowMore={setShowMore}
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
          {/* <div className="bg-[#13072E] p-2 rounded-full">
              <FaArrowRight className="text-primary" />
            </div> */}
        </div>
      )}
    </div>
  );
};

export default FellowShipCourseComponent;
