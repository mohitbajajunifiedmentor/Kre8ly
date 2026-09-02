"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import TeamSection from "./TeamSection";

import {teams} from '../Utils/TeamData/TeamData'


export default function TeamSlider({darkMode}) {
  const swiperRef = useRef(null);

  const handleVideoStateChange = (isPlaying) => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (isPlaying) {
      swiper.autoplay.stop();
      swiper.allowTouchMove = false;
      swiper.allowSlideNext = false;
      swiper.allowSlidePrev = false;
    } else {
      swiper.allowTouchMove = true;
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.autoplay.start();
    }
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={50}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,   // ✅ BUILT-IN HOVER PAUSE
      }}
      loop={true}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {teams.map((team, index) => (
        <SwiperSlide key={index}>
          <TeamSection
            title={team.title}
            members={team.members}
            darkMode={darkMode}
            onVideoStateChange={handleVideoStateChange}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



