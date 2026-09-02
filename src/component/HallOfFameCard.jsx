import React from "react";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HallOfFameCard = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
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
        {NewHallOfFrameInfos.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="max-w-sm mx-auto bg-custom-card-gradient shadow-lg rounded-xl overflow-hidden border border-primary">
              <div className="bg-primary text-black p-4">
                <div className="flex flex-row items-start justify-between mb-4">
                  <div className="flex items-start gap-3 mb-4 md:mb-0">
                    <figure className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-lg overflow-hidden">
                      <img
                        src={data.profile.image}
                        alt="Profile"
                        className="object-cover w-full h-full"
                      />
                    </figure>
                    <p className="text-base md:text-xl font-semibold">
                      {data.profile.name}
                    </p>
                  </div>
                  <FaLinkedin
                    color="#0077B5"
                    size={20}
                    className="md:ml-4 cursor-pointer"
                  />
                </div>
                <span className="block bg-[#856BBB] w-full h-[1px] rounded-full mb-3"></span>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-0">
                    <p className="font-medium text-gray-700 text-sm md:text-base">
                      {data.role.title}
                    </p>
                    <FaArrowRight className="text-[#856BBB]" />
                  </div>
                  <div className="flex items-end gap-2 flex-col md:items-end">
                    <figure className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-lg overflow-hidden">
                      <img
                        src={data.company.logo}
                        alt="Logo"
                        className="object-cover w-full h-full"
                      />
                    </figure>
                    <div className="text-sm md:text-base">
                      <p className="text-black font-semibold">
                        {data.company.name}
                      </p>
                      <p className="text-[#2121219e] font-semibold">
                        {data.company.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-custom-card-gradient text-primary p-4 flex flex-col gap-3 text-left">
                <p className="text-xs md:text-sm">{data.description.text}</p>
                <a
                  href={data.linkedinLink.url}
                  className="text-secondary text-xs md:text-sm"
                >
                  {data.linkedinLink.text}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex justify-center mt-4">
        <div className="bg-primary text-black p-2 px-4 flex items-center font-bold w-fit justify-center gap-3 rounded-full hover:bg-[#381D76] hover:text-primary">
          <button>Show More</button>
          <div className="bg-[#13072E] p-2 rounded-full">
            <FaArrowRight className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallOfFameCard;
