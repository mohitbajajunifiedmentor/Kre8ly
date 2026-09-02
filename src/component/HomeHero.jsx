// src/component/HomeHero.jsx

import React, { useEffect, useRef, useState } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";
const image1 = "/assets/Home/ImageFirstNew.png";
const image2 = "/assets/Home/ImageTwo1.png";
const image3 = "/assets/Home/ImageThird.png";
const image4 = "/assets/Home/image4.svg";
const image5 = "/assets/Home/image4New.svg";
const image6 = "/assets/Home/image6.svg";
const image7 = "/assets/Home/ImageLastOne.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const ProfilePictures = "/assets/Home/ProfilePicturesNew.svg";
const imageLast = "/assets/Home/ImageLast2.svg";
const Resume = "/assets/Home/Resume.svg";
import { Link } from "@/lib/router-compat";
import { GoPlay } from "react-icons/go";
import { BiIdCard } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";
import { PiSuitcaseSimple } from "react-icons/pi";
import { MdAutoGraph } from "react-icons/md";
import { LuFileScan } from "react-icons/lu";
const ImageFirstGrid = "/assets/Home/ImageFirstGrid.svg";
import { HashLink } from "@/lib/router-compat";
import SearchBar from "./SearchBar";
import { CgPlayButtonO } from "react-icons/cg";
const Banner1 = "/assets/HeroBanner/Banner1.png";
const Banner2 = "/assets/HeroBanner/Banner2.jpeg";
const Banner3 = "/assets/HeroBanner/Banner3.jpeg";
const Banner4 = "/assets/HeroBanner/Banner4.jpeg";
const internship_page_banner = "/assets/HeroBanner/internship_page_banner.png";
const Jobs_page_banner = "/assets/HeroBanner/Jobs_page_banner.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeHero = () => {
  const fullStar = 4;
  const hasHalfStart = true;
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const itemsRef = useRef([]);
  const progressRef = useRef([]);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const [sliderBounce, setSliderBounce] = useState(false);
  const [indicatorBounce, setIndicatorBounce] = useState(false);

  const sliderData = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Gain Hands-On Industry Experience",
      image: Banner1,
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Master In-Demand Skills",
      image: Banner2,
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Step Into Your Future Role",
      image: Banner3,
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Master In-Demand Skills",
      image: Banner4,
    },
  ];

  // Initialize GSAP with useGSAP hook
  useGSAP(
    () => {
      // Set initial state
      animateSlider(0);
    },
    { scope: containerRef }
  );

  const animateSlider = (newIndex) => {
    // Trigger bounce animations
    setSliderBounce(true);
    setIndicatorBounce(true);

    // Remove bounce classes after animation (shorter for mobile)
    const animationDuration = window.innerWidth < 640 ? 600 : 800;
    setTimeout(() => {
      setSliderBounce(false);
      setIndicatorBounce(false);
    }, animationDuration);

    const items = itemsRef.current;
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 641 && window.innerWidth < 1024;

    items.forEach((item, index) => {
      console.log();

      if (index === newIndex) {
        gsap.to(item, {
          width: isMobile ? "85vw" : isTablet ? "70vw" : "60%",
          height: isMobile ? "40vh" : isTablet ? "30vh" : "50vh",
          duration: isMobile ? 2.0 : 2.5,
          ease: "elastic.out(1, 0.6)",
          opacity: 1,
          scale: isMobile ? 1.01 : isTablet ? 1.015 : 1.02,
          y: isMobile ? -1 : isTablet ? -2 : -3,
        });
      } else {
        gsap.to(item, {
          width: isMobile ? "85vw" : isTablet ? "12vw" : "5%",
          height: isMobile ? "5vh" : isTablet ? "12vh" : "50vh",
          duration: isMobile ? 2.0 : 2.5,
          ease: "elastic.out(1, 0.3)",
          opacity: isMobile ? 0.3 : 0.2,
          scale: isMobile ? 0.99 : 0.98,
          y: 0,
        });
      }
    });

    // Animate progress bars with bounce
    progressRef.current.forEach((progress, index) => {
      if (progress) {
        gsap.set(progress, { width: "0%" });
        if (index === newIndex) {
          gsap.to(progress, {
            width: "100%",
            duration: isMobile ? 3.5 : 4,
            ease: "none",
          });
        }
      }
    });
  };

  const nextSlide = () => {
    const newIndex = (clickedIndex + 1) % sliderData.length;
    setClickedIndex(newIndex);
    animateSlider(newIndex);
  };

  const goToSlide = (index) => {
    setClickedIndex(index);
    animateSlider(index);
    restartAutoplay();
  };

  const restartAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
  };

  const togglePlayPause = () => {
    console.log("Toggle Play/Pause");
    setIsPlaying(!isPlaying);
  };

  // Autoplay effect
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, clickedIndex]);

  // Handle slide change
  useEffect(() => {
    animateSlider(clickedIndex);
  }, [clickedIndex]);

  useEffect(() => {
    itemsRef.current.forEach((item, ind) => {
      if (!item) return;
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 641 && window.innerWidth < 1024;

      gsap.set(item, {
        width: isMobile ? "85vw" : isTablet ? "70vw" : "15vw",
        opacity: isMobile ? 0.3 : 0.7,
      });
    });

    // Add touch event listeners for mobile
    const handleTouchStart = (e) => {
      if (window.innerWidth < 640) {
        e.preventDefault();
      }
    };

    const sliderContainer = containerRef.current;
    if (sliderContainer) {
      sliderContainer.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
    }

    return () => {
      if (sliderContainer) {
        sliderContainer.removeEventListener("touchstart", handleTouchStart);
      }
    };
  }, []);

  const handleExpand = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
    const items = itemsRef.current;
    const isMobile = window.innerWidth < 640;
    items.forEach((item, ind) => {
      if (!item) return;
      if (ind === index) return;
      item.clicked = false;
      gsap.to(item, {
        width: isMobile ? "85vw" : isTablet ? "70vw" : "60%",
        height: isMobile ? "40vh" : isTablet ? "30vh" : "50vh",
        duration: isMobile ? 2.0 : 2.5,
        ease: "elastic.out(1, 0.6)",
        opacity: 1,
        scale: isMobile ? 1.01 : isTablet ? 1.015 : 1.02,
        y: isMobile ? -1 : isTablet ? -2 : -3,
      });
    });
    const item = items[index];
    item.clicked = !item.clicked;
    gsap.to(item, {
      width: isMobile ? "85vw" : isTablet ? "12vw" : "5%",
      height: isMobile ? "5vh" : isTablet ? "12vh" : "50vh",
      duration: isMobile ? 2.0 : 2.5,
      ease: "elastic.out(1, 0.3)",
      opacity: isMobile ? 0.3 : 0.2,
      scale: isMobile ? 0.99 : 0.98,
      y: 0,
    });
  };

  return (
    <div className="overflow-visible">
      <div className="flex flex-col rounded-2xl h-[40vh] sm:h-[50vh] md:h-auto">
        <div
          ref={containerRef}
          className={`relative flex flex-col md:flex-row items-center justify-center md:whitespace-nowrap overflow-hidden ${
            sliderBounce ? "bounce-slider" : ""
          }`}
        >
          {sliderData.map((data, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`item slide-item w-[90vw] md:w-[15vw] my-1 sm:my-2 mx-[0.5vw] md:mx-[0.5vw] rounded-[6vw] sm:rounded-[5vw] md:rounded-[3vw] lg:rounded-[2vw] cursor-pointer relative overflow-hidden border-black border-1`}
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "width 0.3s, height 0.3s",
                opacity: clickedIndex === index ? 1 : 0.7,
              }}
              onClick={() => handleExpand(index)}
            >
              {/* Overlay for expanded slide */}
              {clickedIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-2 sm:p-3 md:p-6 lg:p-8">
                  <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 bounce-in">
                    {data.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 bounce-in">
                    {data.description}
                  </p>
                </div>
              )}
              {/* Progress bar for active slide */}
              {/* {index === clickedIndex && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20">
                  <div
                    ref={(el) => (progressRef.current[index] = el)}
                    className="h-full bg-white transition-all duration-100"
                    style={{ width: "0%" }}
                  />
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="my-4 sm:my-6 md:my-8 flex justify-center items-center space-x-4 sm:space-x-6 px-4">
          {/* Slide Indicators */}
          <div
            className={`flex space-x-1.5 sm:space-x-2 ${
              indicatorBounce ? "bounce-indicator" : ""
            }`}
          >
            {sliderData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === clickedIndex
                    ? "bg-black dark:bg-white scale-110 sm:scale-125 rubber-band"
                    : "bg-gray-400 dark:bg-white/40 hover:bg-white/60"
                } hover:scale-105 sm:hover:scale-110 touch-manipulation`}
                style={{ minWidth: "8px", minHeight: "8px" }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        data-aos="fade-right"
        // data-aos-delay="100"
        className="flex flex-row justify-between mt-2 lg:mt-12 items-center gap-4"
      >
        <a href="#Reviews">
          <div>
            <div className="text-content text-xs">
              <span className="font-bold text-base">4.5+ </span>(2000+ Rating)
            </div>
            <div>
              <div className="flex gap-1">
                {[...Array(fullStar)].map((_, index) => (
                  <FaStar key={index} className="text-[#FFB800]" />
                ))}
                {hasHalfStart && <FaStarHalfAlt className="text-[#FFB800]" />}
              </div>
            </div>
          </div>
        </a>
        {/* <div>
                    <div className='text-content-muted'><span className='font-bold'>4.5+ </span>(3000+ Rating)</div>
                    <div>
                        <div className='flex gap-1'>
                            {[...Array(fullStar)].map((_, index) => (
                                <FaStar key={index} className='text-[#FFB800]' />
                            ))}
                            {hasHalfStart && <FaStarHalfAlt className='text-[#FFB800]' />}
                        </div>
                    </div>
                </div> */}
        <Link
          data-aos="fade-left"
          to="/placement"
          className="flex flex-row gap-1 text-start"
        >
          <img src={ProfilePictures} className="w-16 md:w-auto" />
          <div>
            <span className="text-[#17AD79] text-xs md:text-lg font-semibold">
              100,000+{" "}
            </span>
            <p className="text-content font-semibold md:text-lg text-xs">
              Happy Learners
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
