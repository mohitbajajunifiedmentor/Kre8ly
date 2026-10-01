"use client";

import React, { useRef, useEffect } from "react";
import { SliderInfo } from "../Utils/StudentSlider/SliderInfo";
import { gsap } from "gsap";

export default function Slider({ darkMode }) {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !slider.children.length) return;

    // Ek pure set ki total scroll width
    const totalWidth = slider.scrollWidth / 2;

    // Butter-smooth GSAP Infinite Loop
    tweenRef.current = gsap.to(slider, {
      x: -totalWidth,
      ease: "none",
      duration: Math.max(30, SliderInfo.length * 2.8),
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  const renderCardList = (prefix) => {
    return SliderInfo.map((info, idx) => (
      <div
        key={`${prefix}-${idx}`}
        className="shrink-0 px-3 py-4"
      >
        <div className="group relative flex flex-col items-center justify-between rounded-card border border-line bg-surface p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-md w-36 h-48 select-none">
          
          {/* Student Profile Picture */}
          <div className="relative w-24 h-24 rounded-control overflow-hidden border border-line bg-surface-sunken">
            <img
              src={info?.image}
              alt={info?.alt || "Placed Learner"}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Company Badge with Floating Offset */}
          <div className="relative -mt-3 w-12 h-12 rounded-control bg-surface border border-line p-1 shadow-sm flex items-center justify-center shrink-0">
            <img
              src={info?.company_image}
              alt={info?.company_alt || "Hiring Company"}
              loading="lazy"
              className="max-h-full max-w-full object-contain filter dark:brightness-110"
            />
          </div>

          {/* Micro Status Indicator */}
          <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-content-muted uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Placed</span>
          </div>

        </div>
      </div>
    ));
  };

  return (
    <div
      className="relative w-full overflow-hidden py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Side Fade Gradient Masks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-surface-sunken via-surface-sunken/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-surface-sunken via-surface-sunken/80 to-transparent"
      />

      {/* Marquee Track */}
      <div
        ref={sliderRef}
        className="flex items-center will-change-transform"
      >
        {renderCardList("set-1")}
        {renderCardList("set-2")}
      </div>
    </div>
  );
}