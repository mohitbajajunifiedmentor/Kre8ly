import React from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ExtraSwiper = ({ Extra, CourseName }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="w-full"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
          Why Join Best {CourseName} at Kre8ly
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          Unlock valuable industry experience, expert mentorship, skill
          development, and career growth opportunities through your internship
          at Kre8ly.
        </p>
      </div>

      <Swiper
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        navigation
        loop={Extra?.length > 3}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        // Swiper's arrows default to its own blue. Binding them to currentColor
        // makes them follow `text-content` in both themes.
        className="py-10 text-content"
        style={{
          "--swiper-navigation-color": "currentColor",
          "--swiper-navigation-size": "28px",
        }}
      >
        {Extra?.map((highlight, index) => (
          <SwiperSlide
            key={index}
            className="group !flex min-h-72 bg-white dark:bg-surface border border-transparent dark:border-line-strong shadow-lg dark:shadow-none rounded-xl p-8 md:px-16 md:py-8 flex flex-col items-center text-center relative overflow-hidden hover:shadow-2xl dark:hover:border-line-strong hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={highlight.icon}
              alt={highlight.icon_alt}
              loading="lazy"
              className="mx-auto object-contain w-24 h-24 hover:scale-105 transition-all duration-300"
            />
            <h4 className="text-content text-sm md:text-xl leading-relaxed text-center mt-3 font-semibold">
              {highlight.title}
            </h4>
            <p className="text-content-secondary text-xs md:text-sm leading-relaxed text-center w-full md:w-[80%]">
              {highlight.subtitle}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExtraSwiper;