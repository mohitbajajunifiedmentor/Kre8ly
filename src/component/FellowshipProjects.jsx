import React from "react";
const Ellipse = "/assets/Ellipse.webp";
const PorjectsBg = "/assets/GraphicDesign/ProjectsBg.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = ({ Project, CourseName = "" }) => {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      className="w-full py-8 overflow-hidden"
      id="projects"
    >
      {/* Title (optional based on course name) */}
      {/* <h2>...</h2> */}

      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {Project.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col items-center justify-center"
              >
                <figure className="relative w-full max-w-sm flex items-center justify-center mx-auto">
                  <img
                    src={PorjectsBg}
                    alt={item?.alt + " Frame Image"}
                    className="w-full object-cover rounded-lg"
                  />
                  <img
                    src={item?.imgs}
                    alt={item?.alt}
                    className="w-4/5 object-contain absolute left-1/2 top-1/2 z-10 rounded-lg transform -translate-x-1/2 -translate-y-1/2"
                  />
                </figure>
                <h3 className="text-base md:text-xl font-semibold text-content mt-4 mb-4 text-center w-full">
                  {item?.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Decorative ellipse image */}
        <img
          src={Ellipse}
          alt=""
          className="absolute -bottom-[40%] w-[250px] md:w-[450px] right-0 md:-right-7 select-none hidden dark:block blur-md"
        />
      </div>
    </div>
  );
};

export default Projects;
