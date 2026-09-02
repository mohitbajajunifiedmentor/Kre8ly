import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { FutureDevelopment } from "../../Utils/FellowShip/CommonJson/Common";

const FutureDevelopmentComponent = ({ swiperColor }) => {
  return (
    <div className="w-full h-full py-10 ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        // pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {FutureDevelopment?.map((item, index) => (
          <SwiperSlide key={index}>
            <Cards
              i={index}
              icons={item?.img}
              icon_alt={item?.alt}
              headings={item?.title}
              description={item?.description}
              swiperColor={swiperColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Cards = ({ i, icons, icon_alt, headings, description, swiperColor }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="0"
      data-aos-duration="800"
      className={`max-w-sm shadow-customSoft shadow-slate-500 min-h-52 md:min-h-72 ${swiperColor?.[i]} p-3 md:p-5 rounded-lg mx-auto h-8 mb-4`}
    >
      <div

        className="flex flex-col gap-5 w-full h-full justify-center items-center">
        <img src={icons} alt={icon_alt} className="w-12 h-12 md:w-16 md:h-16" />
        <p className="font-semibold text-sm md:text-xl text-content">
          {headings}
        </p>
        <p className="text-xs md:text-sm text-content text-center">{description}</p>
      </div>
    </div>
  );
};

export default FutureDevelopmentComponent;
