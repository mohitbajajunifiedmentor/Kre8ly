import React, { useRef, useEffect } from "react";
import { SliderInfo } from "../Utils/StudentSlider/SliderInfo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = ({ darkMode }) => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || !slider.children.length) return;

    const itemWidth = slider.children[0].offsetWidth;
    const totalWidth = itemWidth * SliderInfo.length;

    gsap.to(slider, {
      x: `-=${totalWidth}`,
      ease: "none",
      duration: 60,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  const renderItems = () => {
    return SliderInfo.map((Info, index) => (
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="flex justify-center items-center p-5"
        key={index}
      >
        <figure
          className="
            flex flex-col items-center justify-center
            bg-surface
            border border-line
            rounded-lg
            w-36 h-48
            shadow-md
            hover:shadow-xl
            transition-all duration-300
          "
        >
          {/* Student Image */}
          <div className="w-24 h-24 rounded-md overflow-hidden">
            <img
              src={Info?.image}
              alt={Info?.alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Company Image */}
          <img
            src={Info?.company_image}
            alt={Info?.company_alt}
            className="
              w-12 h-12
              mt-4
              rounded-lg
              bg-surface
              border border-line
              object-contain
            "
          />
        </figure>
      </div>
    ));
  };

  return (
    <div
      className="w-full overflow-hidden"
      ref={containerRef}
    >
      <div
        className="flex items-center"
        ref={sliderRef}
      >
        {renderItems()}
        {renderItems()}
      </div>
    </div>
  );
};

export default Slider;