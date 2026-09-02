import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { press } from "../../Utils/Press/Press";

const PressSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10">
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-center mb-4 md:mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
          Press Releases
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        // Swiper's arrows and bullets default to its own blue. Binding them to
        // currentColor makes them follow `text-content`, so they stay readable
        // in both light and dark mode without hardcoding either theme.
        className="w-full text-content"
        style={{
          "--swiper-navigation-color": "currentColor",
          "--swiper-pagination-color": "currentColor",
          "--swiper-navigation-size": "28px",
        }}
      >
        {press.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="press-card bg-surface rounded-card border border-line shadow-sm overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-32 md:h-48 object-contain bg-white rounded-t-card"
                />

                <div className="bg-gradient-to-br from-brand to-brand-active text-brand-fg p-6">
                  <h3 className="text-lg font-semibold text-brand-fg mb-3 text-start">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-fg/85 mb-4 text-start line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-fg/75">{item.Date}</span>
                    <span className="text-brand-fg text-sm font-medium underline-offset-4 transition-opacity duration-200 group-hover:opacity-75">
                      Read More →
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PressSlider;