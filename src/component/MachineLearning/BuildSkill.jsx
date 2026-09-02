import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "@/lib/router-compat";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Skill1 = "/assets/machineLearning/skill1.webp";
const Skill2 = "/assets/machineLearning/skill2.webp";
const Skill3 = "/assets/machineLearning/skill3.webp";
const Skill4 = "/assets/machineLearning/skill4.webp";
const Ellipse = "/assets/Ellipse.webp";
import { SliderInfo } from "../../Utils/StudentSlider/SliderInfo";
const CardBg = "/assets/GraphicDesign/CardBg.svg";

const BuildSkill = ({ Userdata }) => {
  // find url path
  // was `window.location.pathname` — usePathname() returns the same value and
  // is safe during server rendering, so SSR and client markup match.
  const url = usePathname();
  console.log(url);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true; // Convert to boolean
  });

  // Update localStorage whenever the dark mode state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const Skills = [
    {
      img: Skill1,
      alt: "Self Paced Learning",
      name: "Self Paced Learning",
    },
    {
      img: Skill2,
      alt: "Weekly Projects",
      name: "Weekly Projects",
    },
    {
      img: Skill3,
      alt: "Mentor Feedback",
      name: "Mentor Feedback",
    },
    {
      img: Skill4,
      alt: "Peer Learning",
      name: "Peer Learning",
    },
  ];
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  console.log("Skills", Skills);

  return (
    <div className=" flex flex-col justify-center w-full relative p-4">
      {/* <h3
        data-aos="zoom-in"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-lg md:text-3xl font-semibold text-content text-center"
      >
        Build Skills At Kre8ly
      </h3> */}
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
          Build Skills At Kre8ly
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          Real experiences from learners who achieved their goals and
          transformed careers with our guidance and support.
        </p>
      </div>
      <img
        src={Ellipse}
        alt=""
        className="absolute -top-10 w-[250px] md:w-[450px] -left-10 md:-left-20 select-none hidden dark:block dark:blur-md z-0"
      />
      {/* <div
        data-aos="zoom-out-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 relative z-20"
      >
        {Skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 justify-around items-center"
          >
            <img
              src={skill.img}
              alt={skill.alt}
              className="w-8 h-8 md:w-16 md:h-16 object-contain"
            />
            <h4 className="text-xs md:text-xl text-content">
              {url === "/digital-marketing" && i === 0
                ? "Live Classes"
                : skill.name}
            </h4>
          </div>
        ))}
      </div> */}

      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          ref={swiperRef}
          className={isDarkMode ? "" : "custom-swiper py-10"}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {SliderInfo?.map((user, i) => (
            <SwiperSlide
              key={i}
              className="max-w-sm min-h-20 bg-surface rounded-xl shadow-md p-6 space-y-4 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              {/* Background pattern (optional) */}
              {/* <div
                data-aos="fade-up"
                // data-aos-delay="700"
                className="absolute top-0 w-full h-24 z-0"
              > */}
              {/* <img
                  src={CardBg}
                  alt="Card Background"
                  className="w-full h-full object-cover"
                /> */}
              {/* </div> */}

              {/* Card content */}
              <div
                data-aos="fade-up"
                // data-aos-delay="700"
                className="flex flex-col items-center justify-between flex-grow relative z-10 pt-10 pb-6"
              >
                {/* Profile Image */}
                <div
                  data-aos="fade-up"
                  // data-aos-delay="700"
                  className="relative -mt-10"
                >
                  <img
                    src={user.image}
                    alt={user.alt}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover text-content rounded-full border-4 border-line shadow-md"
                  />
                </div>

                {/* Name */}
                {/* <p
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="mt-4 text-center text-content font-medium text-sm md:text-lg"
                >
                  {user.student_name}
                </p> */}

                {/* Button at bottom */}
                {/* <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="w-[70%]"
                >
                  <Link
                    to={user.linkedIn_url}
                    target="_blank"
                    className="w-full mt-auto"
                  >
                   <button className="mt-4 px-4 py-2 border border-blue-600 text-brand rounded-lg hover:bg-brand hover:text-brand-fg transition-all duration-200 text-sm font-medium">
                  View Profile
                </button>
                  </Link>
                </div> */}

                <h3 className="text-lg font-semibold text-content text-center mt-4">
                  {user.student_name}
                </h3>
                {/* <p className="text-sm text-content-muted text-center mb-2">
                  ${mentor.role}
                </p>
                <p className="text-xs text-brand font-medium text-center mb-4">
                  ${mentor.company} • ${mentor.experience}
                </p> */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="w-[70%] flex justify-center items-center"
                >
                  <Link
                    to={user.linkedIn_url}
                    target="_blank"
                    className="w-full mt-auto flex justify-center"
                  >
                    <button className="mt-4 px-4 py-2 border border-blue-600 text-brand rounded-lg hover:bg-brand hover:text-brand-fg transition-all duration-200 text-sm font-medium">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-end  gap-5 mt-4">
          <button
            onClick={goPrev}
            className=" dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover text-brand-fg  p-2 rounded-md "
          >
            <FaChevronLeft className="text-sm md:text-xl" />
          </button>
          <button
            onClick={goNext}
            className=" dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover text-brand-fg  p-2 rounded-md "
          >
            <FaChevronRight className="text-sm md:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuildSkill;