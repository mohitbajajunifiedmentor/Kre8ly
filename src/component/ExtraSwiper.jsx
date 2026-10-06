import React from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@/lib/router-compat";
import "swiper/css";
import "swiper/css/navigation";

const VARIANT_TEXT = {
  DataAnalystFellowship: {
    heading: (name) => `Why Join ${name || "Data Analyst Fellowship"} at Kre8ly`,
    description: "Here's what you get on top of the lessons.",
  },
  FinancialAnalystFellowship: {
    heading: (name) => `Why Join ${name || "Financial Analyst Fellowship"} at Kre8ly`,
    description: "Beyond the lessons, you also get these.",
  },
  BusinessAnalystFellowship: {
    heading: (name) => `Why Join ${name || "Business Analyst Fellowship"} at Kre8ly`,
    description: "Here is what you get alongside the lessons.",
  },
  DigitalMarketingFellowship: {
    heading: (name) => `Why Join ${name || "Digital Marketing Fellowship"} at Kre8ly`,
    description: "Along with the classes, you get these.",
  },
  DataScienceFellowship: {
    heading: (name) => `Why Join Our Online ${name || "Data Science Fellowship"} Program `,
    description: "Besides the lessons, you also get these.",
  },
};

const DEFAULT_TEXT = {
  heading: (name) => `Why Join Best ${name} at Kre8ly`,
  description: "Here's what you get on top of the lessons.",
};

const ExtraSwiper = ({ Extra = [], CourseName = "", varient }) => {
  const activeVariant = varient;
  const content = VARIANT_TEXT[activeVariant] || DEFAULT_TEXT;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="mx-auto w-full max-w-7xl px-2 md:px-6"
    >
      <div className="mb-6 text-center md:mb-10">
        <h2 className="mb-3 text-3xl font-semibold leading-normal tracking-tight text-content lg:text-4xl">
          {content.heading(CourseName)}
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-content-secondary lg:text-lg">
          {content.description}
        </p>
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        loop={Extra?.length > 3}
        breakpoints={{
          480: { slidesPerView: 1.5, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        }}
        className="w-full !px-1 !pb-10 !pt-4 text-brand
          [&_.swiper-button-prev]:!left-1 [&_.swiper-button-next]:!right-1
          [&_.swiper-button-prev]:!h-10 [&_.swiper-button-next]:!h-10
          [&_.swiper-button-prev]:!w-10 [&_.swiper-button-next]:!w-10
          [&_.swiper-button-prev]:rounded-full [&_.swiper-button-next]:rounded-full
          [&_.swiper-button-prev]:border [&_.swiper-button-next]:border
          [&_.swiper-button-prev]:border-line [&_.swiper-button-next]:border-line
          [&_.swiper-button-prev]:bg-surface [&_.swiper-button-next]:bg-surface
          [&_.swiper-button-prev]:shadow-md [&_.swiper-button-next]:shadow-md
          max-md:[&_.swiper-button-prev]:!hidden max-md:[&_.swiper-button-next]:!hidden"
        style={{
          "--swiper-navigation-color": "currentColor",
          "--swiper-navigation-size": "16px",
        }}
      >
        {Extra?.map((highlight, index) => {
          const isExternal = highlight.target === "Yes";
          const CardTag = highlight.link ? Link : "div";
          const linkProps = highlight.link
            ? {
                to: highlight.link,
                ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
              }
            : {};

          return (
            <SwiperSlide key={index} className="!h-auto">
              <CardTag
                {...linkProps}
                className="group flex h-full min-h-72 flex-col items-center justify-between rounded-card border border-line bg-surface p-6 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg md:px-8 md:py-8"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-brand-subtle p-3 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={highlight.icon}
                      alt={highlight.icon_alt || highlight.title || ""}
                      loading="lazy"
                      className="h-16 w-16 object-contain"
                    />
                  </div>

                  <h3 className="mt-5 text-base font-semibold leading-snug text-content md:text-lg">
                    {highlight.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-content-secondary md:text-sm">
                    {highlight.subtitle}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-6 h-1 w-8 rounded-full bg-brand/40 transition-all duration-300 group-hover:w-16 group-hover:bg-brand"
                />
              </CardTag>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ExtraSwiper;