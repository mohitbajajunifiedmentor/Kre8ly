import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Cards from "./Cards";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const HomeCardSwiper = ({ varient, Courses }) => {
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

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        ref={swiperRef}
      >
        {Courses?.map((Course, i) => (
          <SwiperSlide key={i}>
            <Cards key={Course.id} Course={Course} varient={varient} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-end  gap-5 ">
        <button
          onClick={goPrev}
          className=" bg-primary text-black p-2 rounded-md "
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={goNext}
          className=" bg-primary text-black p-2 rounded-md "
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HomeCardSwiper;
