"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PlacementSupportSwiper = ({ PlacementSupportInfo = [] }) => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;

    // Ek pure set ki total scrollable width
    const totalWidth = track.scrollWidth / 2;

    // Continuous Infinite Marquee
    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      duration: Math.max(30, PlacementSupportInfo.length * 3),
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [PlacementSupportInfo]);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  const renderCards = (prefix) => {
    return PlacementSupportInfo.map((item, index) => (
      <div
        key={`${prefix}-${index}`}
        className="shrink-0 px-2 py-3"
      >
        <div className="group flex h-24 md:h-28 w-32 md:w-44 flex-col items-center justify-center rounded-card border border-line bg-surface p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md select-none">
          <div className="flex h-12 md:h-14 w-full items-center justify-center overflow-hidden">
            <img
              src={item.logo}
              alt={item.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain filter dark:brightness-110 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <p className="mt-1.5 w-full truncate text-[11px] font-medium text-content-secondary text-center">
            {item.name}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <div className="mt-14 md:mt-20 flex flex-col justify-center w-full gap-6">
      {/* Section Header */}
      <div className="text-center px-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-content">
          Our Hiring Partners
        </h2>
        <p className="mt-2 text-base text-content-secondary max-w-2xl mx-auto">
          Clear the cut-off marks in your graduation project to get access to jobs at our partner companies
        </p>
      </div>

      {/* Full-width continuous moveable track */}
      <div
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Soft edge gradient fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-canvas via-canvas/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-canvas via-canvas/80 to-transparent"
        />

        {/* Marquee Track */}
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
        >
          {renderCards("set-1")}
          {renderCards("set-2")}
        </div>
      </div>
    </div>
  );
};

export default PlacementSupportSwiper;