import React, { useEffect, useRef, useState } from "react";
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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import CardJob from "./CardJob";
import SingleJobCard from "./SingleJobCard.jsx";

const JobsSlider = ({ darkMode }) => {
  const swiperRef = useRef(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showcarousel, setShowCarousel] = useState(true);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true;
  });

  // Update localStorage whenever the dark mode state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Fetch job data using Axios
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://job-portal-backend-1023229424452.asia-south2.run.app/api/jobs/show?pageNumber=1&keyword=&cat=&location=&state=&district=&level=&type="
        );
        setJobs(response.data.jobs || []);
        setIsLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch job data");
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

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
    let coursesSection = document.querySelector("#Jobs");
    if (coursesSection) {
      const navbarHeight = 60;
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

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {isLoading && (
        <p className="text-center text-gray-500">
          Fetching job listings, please wait...
        </p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!isLoading && !error && jobs.length === 0 && (
        <p className="text-center text-gray-500">No jobs available</p>
      )}
      {!isLoading && !error && jobs.length > 0 && (
        <>
          {showcarousel ? (
            <>
              <div className="w-full overflow-hidden">
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1.5}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  className={`${isDarkMode ? "" : "custom-swiper mb-3 "}`}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {jobs.map((job, index) => (
                    <SwiperSlide key={job._id}>
                      {/* <CardJob
                        job={job}
                        index={index}
                        darkMode={darkMode}
                        swiperColor={swiperColor}
                      /> */}
                      <SingleJobCard
                        job={job}
                        index={index}
                        darkMode={darkMode}
                        swiperColor={swiperColor}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="w-[95%] flex justify-end mx-auto items-center">
                <div className="w-full justify-start items-start">
                  <div>
                    <a
                      href="https://jobs.unifiedmentor.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-content hover:bg-surface-sunken border border-line-strong dark:text-white dark:hover:text-content px-2 py-3 md:px-4  md:py-3 flex items-center font-bold w-fit justify-center rounded-md text-xs md:text-sm transition-all duration-300"
                    >
                      Show More
                    </a>
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
            <>
              <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mb-10">
                {jobs.map((job, index) => (
                  <CardJob
                    key={job._id}
                    job={job}
                    darkMode={darkMode}
                    swiperColor={swiperColor}
                    index={index}
                    showcarousel={showcarousel}
                  />
                ))}
              </div>
              <div className="w-full flex justify-center mt-4">
                <div
                  className="text-content hover:bg-surface-sunken border border-line-strong dark:text-white dark:hover:text-content px-2 py-3 md:px-4  md:py-3 flex items-center font-bold w-fit justify-center rounded-md text-xs md:text-sm transition-all duration-300"
                  onClick={HandleremoveCarousel}
                >
                  Show Less
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default JobsSlider;
