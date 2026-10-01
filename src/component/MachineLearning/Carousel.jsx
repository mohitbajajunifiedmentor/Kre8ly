import React from "react";
import { Link } from "@/lib/router-compat";
import { FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // Import autoplay styles if necessary
import { FaArrowRightLong } from "react-icons/fa6";

const Carousel = ({ profileData }) => {
  return (
    <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
       <SwiperSlide key={index}> 
       </SwiperSlide>
        
      </Swiper> */}
      {profileData?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-primary p-4 rounded-md relative"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start">
              <img
                src={item.profile.profileImageUrl}
                alt="Profile"
                className="w-20 h-20 rounded-md object-cover"
              />
              <div className="ml-4 text-left w-full">
                <p className="text-lg font-semibold capitalize">
                  {item.profile.name}
                </p>
                <p className="text-content-secondary text-sm font-semibold">Mentor</p>
              </div>
            </div>

            <Link
              to={item.profile.linkedinUrl}
              className=" absolute top-5 right-5"
            >
              <FaLinkedin size={30} color={item.profile.linkedinIconColor} />
            </Link>
          </div>
          <hr className="w-full bg-surface/10 my-5" />
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <p className="text-lg text-content/70 font-semibold capitalize">
                {" "}
                {item.profile.jobTitle}
              </p>
              <FaArrowRightLong className="text-content/70" />
            </div>
            <img
              src={item.profile.googleIconUrl}
              alt="Google Icon"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;