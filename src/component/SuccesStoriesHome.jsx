import React, { useRef } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "@/lib/router-compat";
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
import { SuccessStoriesInfo } from "../Utils/SuccessStoriesInfo";
import ReactPlayer from "react-player";

const SuccesStoriesHome = ({ darkMode }) => {
  const swiperRef = useRef(null);
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

  const swiperColors = ["bg-[#5ADF7E]", "bg-[#FFCC45]", "bg-[#66B2FF]"];

  return (
    <div className=" flex flex-col justify-center w-full gap-10 relative ">
      <h3 className="text-lg md:text-3xl text-content font-semibold text-center">
        Build Skills At Kre8ly
      </h3>

      <div className="w-full overflow-hidden px-10">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          ref={swiperRef}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              // spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              // spaceBetween: 40,
            },
          }}
        >
          {SuccessStoriesInfo?.map((VideoItem, i) => {
            return (
              <SwiperSlide
                key={i}
                className={`
                  dark:
                  rounded-lg 
                  border  dark:border-primary 
                  flex flex-col 
                  overflow-hidden
                  shadow-md 
                  hover:shadow-lg
                `}
              >
                <div className="w-full aspect-video overflow-hidden">
                  <ReactPlayer
                    url={VideoItem.iframeSrc}
                    width="100%"
                    height="100%"
                    className="object-cover"
                    controls={false}
                    config={{
                      file: {
                        attributes: {
                          controlsList: "nodownload", // Optional: Disable download
                        },
                      },
                    }}
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3
                    className="
                    text-sm md:text-lg
                    font-semibold 
                    mb-2 
                    line-clamp-2
                    text-content
                  "
                  >
                    {VideoItem.name}
                  </h3>
                  <p
                    className="
                    text-[10px]
                    md:text-sm 
                    text-content
                    line-clamp-3
                  "
                  >
                    {VideoItem.description}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-[95%] flex justify-between mx-auto items-center">
          <div className="w-full  ">
            <Link to="/our-stories">
              <div>
                <button className="text-content hover:bg-surface-sunken border border-line-strong dark:text-white dark:hover:text-content px-2 py-3 md:px-4  md:py-3 flex items-center font-bold w-fit justify-center rounded-md text-xs md:text-sm transition-all duration-300">
                  Show More
                </button>
                {/* <div className="bg-[#13072E] p-2 rounded-full">
                  <FaArrowRight className="text-primary" />
                </div> */}
              </div>
            </Link>
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
      </div>
    </div>
  );
};

export default SuccesStoriesHome;
