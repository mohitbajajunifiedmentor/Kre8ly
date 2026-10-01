import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useNavigate } from "@/lib/router-compat";
const ExtraSwiper = ({ Extra, SwiperColor, CourseName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (CourseName) {
      case "Machine Learning":
        navigate("/machine-learning-enroll");
        break;

      case "Data Science":
        navigate("/data-science-enroll");
        break;

      case "Web Development":
        navigate("/web-development-enroll");
        break;

      case "Digital Marketing":
        navigate("/digital-marketing-enroll");
        break;

      case "Data Analyst":
        navigate("/data-analyst-enroll");
        break;

      case "UX/UI Design":
        navigate("/ui-ux-designer-enroll");
        break;

      case "Graphic Design":
        navigate("/graphic-design-enroll");
        break;

      default:
        break;
    }
  };

  return (
    <div className="w-full mt-4 md:mt-12">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {Extra.map((highlight, index) => (
          <SwiperSlide
            key={index}
            className={`flex flex-col ${SwiperColor[index]} items-center gap-4 mt-12 min-h-[190px] rounded-lg p-4 relative hover:scale-105 transition-all duration-300 cursor-pointer`}
          >
            <a
              href={highlight.link}
              target={highlight?.target === "Yes" ? "_blank" : null}
              className="w-24 h-24 rounded-full p-2 absolute -top-10 flex items-center justify-center"
            >
              <img
                src={highlight.icon}
                alt={highlight.con_alt}
                className="object-cover w-full h-full hover:scale-105 transition-all duration-300 cursor-pointer"
              />
            </a>
            <h4 className="text-content text-sm md:text-xl leading-relaxed text-center mt-14 font-semibold">
              {highlight.title}
            </h4>
            <p className="text-content text-xs md:text-sm leading-relaxed text-center w-full md:w-[80%]">
              {highlight.subtitle}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExtraSwiper;
