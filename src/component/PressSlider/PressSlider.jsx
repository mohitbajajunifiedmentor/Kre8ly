import React, { useRef } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { press } from "../../Utils/Press/Press";

const PressSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6">
      {/* Header with Carousel Controls */}
      <div className="mb-8 md:mb-12 flex w-full flex-col sm:flex-row sm:items-end justify-between gap-4 text-center sm:text-left">
        <div>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-content lg:text-4xl">
            In the Press
          </h2>
          <p className="text-sm md:text-base text-content-secondary">
            Kre8ly featured across premier media publications and industry portals.
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="hidden sm:flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-control border border-line bg-surface text-content-secondary hover:text-content hover:bg-surface-sunken flex items-center justify-center shadow-sm transition-colors active:scale-95 cursor-pointer"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className="w-9 h-9 rounded-control border border-line bg-surface text-content-secondary hover:text-content hover:bg-surface-sunken flex items-center justify-center shadow-sm transition-colors active:scale-95 cursor-pointer"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="w-full">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="w-full !pb-12 text-brand"
          style={{
            "--swiper-pagination-color": "currentColor",
            "--swiper-pagination-bullet-inactive-color": "currentColor",
          }}
        >
          {press.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto py-2">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface text-content shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:shadow-focus select-none"
              >
                {/* Publisher Logo / Image Box */}
                <div className="flex h-40 md:h-44 items-center justify-center border-b border-line bg-white p-5 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-6 text-start">
                  {item.Date && (
                    <span className="mb-3 inline-flex w-fit rounded-control bg-brand-subtle px-2.5 py-1 text-xs font-semibold text-brand border border-line">
                      {item.Date}
                    </span>
                  )}

                  <h3 className="mb-2 line-clamp-2 text-lg font-semibold leading-snug text-content group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>

                  <p className="line-clamp-3 text-sm leading-relaxed text-content-secondary">
                    {item.description}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand">
                    Read Publication
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PressSlider;