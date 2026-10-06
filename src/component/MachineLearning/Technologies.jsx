import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";

const Ellipse = "/assets/Ellipse.webp";

// Default content mapping according to variant
const VARIANT_CONTENT = {
  "DigitalMarketingFellowship": {
    heading: "Social Media Marketing Internship Work From Home: Tools You Will Learn",
    description:
      "These are the tools marketers use every day. You'll practise them on your own projects from your laptop at home.",
  },
  "data-analytics": {
    heading: "Technologies & Tools You Will Learn",
    description:
      "These are the tools analysts use at work, and you'll practise each one on real datasets.",
  },
  "web-development": {
    heading: "Modern Tech Stack You Will Build With",
    description:
      "Master front-end and back-end frameworks used by top engineering teams worldwide.",
  },
  "DataScienceFellowship": {
    heading: "Technologies and Tools You Will Learn",
    description:
      "These are the tools data teams use every day. You'll use each one in your projects.",
  },
  default: {
    heading: "Technologies & Tools You Will Learn",
    description:
      "Get hands-on experience with the most in-demand tools and frameworks used across the industry.",
  },
};

const Technologies = ({
  Technology = [],
  varient = "default",
  title,       // Optional prop to directly override heading
  subtitle,    // Optional prop to directly override paragraph
}) => {
  const Styles = {
    backDropImageShadow: "w-32 transition-all duration-300 pointer-events-none",
  };

  if (varient === "graphic-design") {
    return null; // Avoid returning <h1>-</h1> which breaks SEO & layout
  }

  // Dynamic text selection
  const content = VARIANT_CONTENT[varient] || VARIANT_CONTENT.default;
  const currentHeading = title || content.heading;
  const currentDescription = subtitle || content.description;

  // TechCard Component for Desktop / Tablet Grid
  const TechCard = ({ technology }) => {
    return (
      <div className="w-full sm:w-[260px] md:w-[280px]">
        <div className="group flex h-full flex-col items-center justify-between rounded-card border border-line bg-surface p-7 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src={technology.img}
                alt={technology.alt || technology.name}
                loading="lazy"
                className="h-14 w-14 object-contain"
              />
            </div>
            <h3 className="text-base font-semibold leading-normal text-content">
              {technology.name}
            </h3>
            {technology.description && (
              <p className="mt-2 text-xs leading-relaxed text-content-secondary sm:text-sm">
                {technology.description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      data-aos="zoom-out-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="relative w-full py-10"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="relative"
      >
        {/* Dynamic Section Heading */}
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-3 text-3xl font-semibold leading-normal tracking-tight text-content lg:text-4xl">
            {currentHeading}
          </h2>
          {currentDescription && (
            <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-content-secondary lg:text-lg">
              {currentDescription}
            </p>
          )}
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* MOBILE Swiper */}
          <div className="block md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={14}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1.2, centeredSlides: true },
                480: { slidesPerView: 2 },
              }}
              className="pb-10"
            >
              {Technology.map((tech, index) => (
                <SwiperSlide key={tech.name ?? index} className="h-auto">
                  <div className="flex h-full flex-col items-center justify-between rounded-card border border-line bg-surface p-5 text-center shadow-xs">
                    <div className="flex flex-col items-center">
                      <img
                        src={tech.img}
                        alt={tech.alt || tech.name}
                        loading="lazy"
                        className="mb-3 h-12 w-12 object-contain"
                      />
                      <h3 className="text-sm font-semibold text-content">
                        {tech.name}
                      </h3>
                      {tech.description && (
                        <p className="mt-1.5 text-xs leading-relaxed text-content-secondary">
                          {tech.description}
                        </p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* DESKTOP / TABLET Grid */}
          <div className="hidden md:block">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="flex flex-wrap justify-center gap-6"
            >
              {Technology.map((tech, index) => (
                <TechCard key={tech.name ?? index} technology={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur Background Element */}
      {Technology[0] && (
        <figure className={Styles.backDropImageShadow}>
          <img
            src={Ellipse}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-16 right-0 z-10 hidden w-[250px] dark:block dark:blur-md md:w-[450px]"
          />
        </figure>
      )}
    </div>
  );
};

export default Technologies;