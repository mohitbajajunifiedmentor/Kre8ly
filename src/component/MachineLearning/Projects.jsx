import React from "react";
import { usePathname } from "next/navigation";
const ProjectFrame = "/assets/machineLearning/ProjectFrame.png";
const Certificates = "/assets/machineLearning/Certificates2.webp";
const GoogleCertiDM = "/assets/machineLearning/GoogleCertiDM.png";
const HotspotCertiDM = "/assets/machineLearning/HotspotCertiDM.png";
const futureSkillsCertiDM = "/assets/machineLearning/futureSkillsCertiDM.png";

const Ellipse = "/assets/Ellipse.webp";
const PorjectsBg = "/assets/GraphicDesign/ProjectsBg.svg";
import { Link } from "@/lib/router-compat";

import AccredationSwiper from "../AccredationSwiper";
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
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
} from "react-icons/fa";

const Projects = ({ Project, CourseName = "", location }) => {
  // was `window.location.pathname` — usePathname() returns the same value and
  // is safe during server rendering, so SSR and client markup match.
  const url = usePathname();

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="w-full py-4 md:py-8 "
      id="projects"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
          {CourseName === "Machine Learning" ? (
            <h3 className="text-lg md:text-3xl font-semibold text-content text-center md:mb-8">
              Projects You Will Develop in <br className="hidden sm:inline" />{" "}
              the Machine Learning Course
            </h3>
          ) : (
            <h2 className="text-lg md:text-3xl font-semibold text-content text-center md:mb-8">
              Projects You'll Build in Our {CourseName} Course
            </h2>
          )}
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          Real experiences from learners who achieved their goals and
          transformed careers with our guidance and support.
        </p>
      </div>

      {/* Desktop Swiper */}
      <div className="w-full flex items-center justify-center p-4">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          // spaceBetween={15}
          // slidesPerView={3}
          loop={true}
          navigation
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          className="pt-4 pb-8"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {Project.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-500 bg-surface max-h-96"
              >
                {/* Project Image/Icon */}
                <div className="w-full flex justify-center p-8">
                  <img
                    src={item?.imgs}
                    alt={item?.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex justify-center items-center">
                  <h3 className="text-lg font-semibold text-content mb-2">
                    {item?.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Swiper */}
      {/* <div className="w-full flex md:hidden items-center justify-center p-4">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
        >
          {Project.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center bg-surface">
                <figure className="relative w-full max-w-sm flex items-center justify-center">
                  <img
                    src={PorjectsBg}
                    alt={`${item?.alt} Frame Image`}
                    className="w-full object-cover rounded-lg"
                  />
                  <img
                    src={item?.imgs}
                    alt={item?.alt}
                    className="w-4/5 object-contain absolute left-1/2 top-1/2 z-10 rounded-lg transform -translate-x-1/2 -translate-y-1/2"
                  />
                </figure>
                <h3 className="md:text-xl font-semibold text-content mt-4 mb-4 text-center text-base w-full">
                  {item?.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};

export default Projects;