import React, { useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLinkedin } from "react-icons/fa";

const ROLES = ["Developer", "Analyst", "Others"];

const HallofFameCardTwo = ({ hallofFameInfo }) => {
  // The `isDarkMode` state that used to live here was dead code with three
  // problems: it called localStorage.getItem() during render (no such thing on
  // the server), it wrote to the legacy "darkMode" key with a default of
  // `true`, and the only thing it controlled was stripping `w-full md:py-4`
  // off the Swiper in dark mode — a bug, not a feature. Colours are tokens now.
  const [activeState, setActiveState] = useState("Developer");

  const filteredHallOfFrameInfos =
    hallofFameInfo?.filter((detail) => detail?.role?.title === activeState) ??
    [];

  return (
    <>
      <div
        data-aos="flip-down"
        data-aos-delay="0"
        data-aos-duration="800"
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white dark:bg-surface border border-transparent dark:border-line-strong rounded-2xl shadow-md dark:shadow-none px-4 py-4 w-full sm:w-fit mx-auto mb-8"
      >
        {ROLES.map((role) => (
          <button
            key={role}
            type="button"
            aria-pressed={activeState === role}
            className={`relative transition-all duration-300 font-medium rounded-2xl
              text-sm px-4 py-2 sm:px-7 sm:py-4
              ${
                activeState === role
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow"
                  : "text-content-secondary hover:bg-surface-sunken"
              }`}
            onClick={() => setActiveState(role)}
          >
            {role}
            {activeState === role && (
              <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-blue-600"></span>
            )}
          </button>
        ))}
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          loop={filteredHallOfFrameInfos.length > 4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          // Swiper's arrows and bullets default to its own blue; currentColor
          // makes them follow `text-content` in both themes.
          className="w-full md:py-4 text-content"
          style={{
            "--swiper-navigation-color": "currentColor",
            "--swiper-pagination-color": "currentColor",
            "--swiper-navigation-size": "28px",
          }}
        >
          {filteredHallOfFrameInfos.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="max-w-sm min-h-72 bg-white dark:bg-surface border border-transparent dark:border-line-strong rounded-xl shadow-md dark:shadow-none p-6 space-y-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Profile Section */}
                <div className="flex items-center space-x-4">
                  <img
                    src={data.profile?.image}
                    alt={data.profile?.alt || data.profile?.name}
                    loading="lazy"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-content">
                      {data.profile?.name}
                    </h2>
                    <p className="text-sm text-content-secondary">
                      {data.company?.position}
                    </p>
                    <p className="text-sm text-brand font-semibold">
                      {data.company?.name}
                    </p>
                  </div>
                  {data.linkedinLink?.url && (
                    <a
                      href={data.linkedinLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${data.profile?.name} on LinkedIn`}
                      className="ml-auto text-[#0A66C2] hover:opacity-80 transition-opacity"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Testimonial Text — trimmed to 25 words */}
                <div className="border-l-4 border-brand/40 pl-4 text-content-muted italic text-sm">
                  {(() => {
                    const words =
                      data.description?.text?.trim().split(/\s+/) ?? [];
                    const preview =
                      words.slice(0, 25).join(" ") +
                      (words.length > 25 ? "..." : "");
                    return `"${preview}"`;
                  })()}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1 text-yellow-400 text-xl">
                    {[...Array(5)].map((_, starIndex) => (
                      <span key={starIndex}>★</span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-1 text-sm text-content-secondary">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    <span>Verified Graduate</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HallofFameCardTwo;