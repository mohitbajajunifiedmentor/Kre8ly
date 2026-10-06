import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaLinkedinIn } from "react-icons/fa";
import { Link } from "@/lib/router-compat";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SliderInfo } from "../../Utils/StudentSlider/SliderInfo";

const Ellipse = "/assets/Ellipse.webp";

const BuildSkill = ({ Userdata }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      // Button click ke baad bhi autoplay dubara start ho jayega
      if (swiperInstance.autoplay && !swiperInstance.autoplay.running) {
        swiperInstance.autoplay.start();
      }
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
      if (swiperInstance.autoplay && !swiperInstance.autoplay.running) {
        swiperInstance.autoplay.start();
      }
    }
  };

  const learnersList = Userdata || SliderInfo || [];

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="relative flex w-full flex-col justify-center py-14 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Accent */}
      <img
        src={Ellipse}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 z-0 hidden w-[280px] select-none opacity-30 blur-3xl dark:block md:-left-20 md:w-[480px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Section Heading */}
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-3 text-3xl font-semibold leading-normal tracking-tight text-content lg:text-4xl">
            Learners Who Built Their Skills at Kre8ly
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-content-secondary lg:text-lg">
            Open a profile to see where each learner is now.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            spaceBetween={22}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false, // User touch/click ke baad bhi rukega nahi
              pauseOnMouseEnter: false,     // Mouse aane par bhi smoothly chalta rahega
            }}
            breakpoints={{
              0: { slidesPerView: 1.15, centeredSlides: true, spaceBetween: 16 },
              480: { slidesPerView: 1.4, centeredSlides: false, spaceBetween: 18 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2.3, spaceBetween: 22 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 3.8, spaceBetween: 26 },
            }}
            className="!py-3"
          >
            {learnersList.map((user, i) => (
              <SwiperSlide key={user.student_name || i} className="h-auto">
                {/* Unique Profile Badge Card Layout */}
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
                  {/* Top Status Bar with Verified Dot */}
                  <div className="flex items-center justify-between border-b border-line/60 pb-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-content-muted">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Placed Learner
                    </span>
                    <span className="text-[10px] font-medium text-brand bg-brand-subtle px-2 py-0.5 rounded-full">
                      Kre8ly Alum
                    </span>
                  </div>

                  {/* Profile Section */}
                  <div className="my-6 flex items-center gap-4">
                    <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-line bg-surface-sunken p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-brand/40">
                      <img
                        src={user.image}
                        alt={user.alt || user.student_name}
                        loading="lazy"
                        className="h-full w-full rounded-[14px] object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base md:text-lg font-bold text-content group-hover:text-brand transition-colors duration-200">
                        {user.student_name}
                      </h3>
                      <p className="mt-0.5 text-xs text-content-secondary">
                        Career Transition Verified
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn Connect Button */}
                  <Link
                    to={user.linkedIn_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-xl border border-line bg-surface px-4 py-2.5 text-xs md:text-sm font-semibold text-content transition-all duration-200 hover:border-brand hover:bg-brand hover:text-brand-fg focus-visible:outline-none"
                  >
                    <span>View Journey</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-subtle text-brand group-hover:bg-brand-fg group-hover:text-brand transition-colors">
                      <FaLinkedinIn className="h-3 w-3" />
                    </span>
                  </Link>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="mt-6 flex items-center justify-end gap-3 px-2">
            <button
              onClick={goPrev}
              type="button"
              aria-label="Previous Slide"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-line bg-surface text-content transition-colors duration-200 hover:border-brand/40 hover:bg-surface-sunken hover:text-brand focus-visible:outline-none active:scale-95"
            >
              <FaChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={goNext}
              type="button"
              aria-label="Next Slide"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-brand text-brand-fg transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none active:scale-95"
            >
              <FaChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSkill;