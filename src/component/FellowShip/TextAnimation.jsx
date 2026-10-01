import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TextAnimation = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animation timing
    const animationInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(animationInterval);
  }, [texts.length]);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="w-full h-full flex flex-col justify-center items-center gap-5">
      <h5 className="font-semibold text-content text-lg md:text-3xl">
        Your Future Job Title
      </h5>
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="relative md:h-16 flex items-center justify-center overflow-hidden w-full">
        <div
          className={`transform transition-all duration-500 w-full ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <h6
            className={`text-2xl md:text-5xl text-content text-center font-bold `}
          >
            {texts[currentIndex]}
          </h6>
        </div>
      </div>
      <hr className="w-full sm:w-1/2 md:w-[40%] dark:bg-white/50 bg-[#4F6DA5]" />
    </div>
  );
};

export default TextAnimation;
