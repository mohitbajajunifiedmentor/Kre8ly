import React, { useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const VARIANT_HEADER_DATA = {
  DataAnalystFellowship: {
    heading: "Projects You'll Build in Our Data Analyst Fellowship Course",
    description:
      "Your portfolio is what recruiters look at, so the projects matter as much as the lessons.",
  },
  FinancialAnalyst: {
    heading: "Projects You'll Build in Our Financial Analysis Internship Training Program",
    description:
      "A finance portfolio shows recruiters you can do the work, so the projects matter as much as the classes",
  },
  FinancialAnalystFellowship: {
    heading: "Projects You'll Build in Our Financial Analysis Internship Training Program",
    description:
      "A finance portfolio shows recruiters you can do the work, so the projects matter as much as the classes",
  },
  MachineLearning: {
    heading: "Projects You Will Develop in the Machine Learning Course",
    description:
      "Build production-ready machine learning models and end-to-end data pipelines for your portfolio.",
  },
  BusinessAnalyst: {
    heading: "Projects You'll Build in Our Business Analyst Fellowship Course",
    description:
      "Recruiters want proof that you can do the job, so you'll finish with projects you can explain in an interview.",
  },
  BusinessAnalystFellowship: {
    heading: "Projects You'll Build in Our Business Analyst Fellowship Course",
    description:
      "Recruiters want proof that you can do the job, so you'll finish with projects you can explain in an interview.",
  },
  DigitalMarketingFellowship: {
    heading: "Projects You'll Build in Our Digital Marketing Fellowship Course",
    description:
      "Your projects become your portfolio, and recruiters and clients judge you by them.",
  },
  DataScienceFellowship: {
    heading: "Projects You'll Build in Our Data Science Fellowship Course",
    description:
      "Your projects are your portfolio, so they matter as much as the lessons.",
  },
};

const DEFAULT_HEADER = {
  heading: (courseName) =>
    courseName
      ? `Projects You'll Build in Our ${courseName} Course`
      : "Projects You'll Build in Our Fellowship Course",
  description:
    "Your portfolio is what recruiters look at, so the projects matter as much as the lessons.",
};

const Projects = ({ Project = [], CourseName = "", varient, variant }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const activeVariant = varient || variant;
  const currentVariantData = VARIANT_HEADER_DATA[activeVariant];

  const resolvedHeading =
    currentVariantData?.heading ||
    (typeof DEFAULT_HEADER.heading === "function"
      ? DEFAULT_HEADER.heading(CourseName)
      : DEFAULT_HEADER.heading);

  const resolvedDescription =
    currentVariantData?.description || DEFAULT_HEADER.description;

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
      if (swiperInstance.autoplay && !swiperInstance.autoplay.running) {
        swiperInstance.autoplay.start();
      }
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      if (swiperInstance.autoplay && !swiperInstance.autoplay.running) {
        swiperInstance.autoplay.start();
      }
    }
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="relative w-full py-12 md:py-16"
      id="projects"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-content leading-normal md:leading-snug">
            {resolvedHeading}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-content-secondary max-w-2xl mx-auto">
            {resolvedDescription}
          </p>
        </div>

        {/* Projects Swiper Slider */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            loop={Project.length > 3}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="pb-16"
          >
            {Project.map((item, index) => (
              <SwiperSlide key={item?.title || index} className="h-auto">
                <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl">
                  {/* Top: Image & Title */}
                  <div>
                    <div className="relative mb-5 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-line/60 bg-surface-sunken p-4 transition-transform duration-300 group-hover:scale-[1.02]">
                      <img
                        src={item?.imgs}
                        alt={item?.alt || item?.title}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold leading-normal text-content group-hover:text-brand transition-colors duration-200">
                      {item?.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-content-secondary">
                      {item?.description}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="mt-6 pt-4 border-t border-line/50 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-content-muted">
                      Hands-on Portfolio Project
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand group-hover:scale-125 transition-transform"
                    />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Explicit Working Left & Right Navigation Buttons */}
          <div className="mt-6 flex items-center justify-end gap-3 px-2">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous Project"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-line bg-surface text-content shadow-xs transition-all duration-200 hover:border-brand/50 hover:bg-surface-sunken hover:text-brand active:scale-95 focus-visible:outline-none"
            >
              <FaChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label="Next Project"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-brand text-brand-fg shadow-xs transition-all duration-200 hover:bg-brand-hover active:scale-95 focus-visible:outline-none"
            >
              <FaChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;