import React from "react";
const HeroSectionBgImage = "/assets/AboutUs/aboutHero/bgImage.png";
const bgLayar = "/assets/AboutUs/aboutHero/bgLayar.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-black">

      {/* 1. Base Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${HeroSectionBgImage})` }}
      />
      {/* 3. Blue Shape Layers (PNGs) with low opacity */}
      <div
        className="absolute inset-0 z-20 bg-cover bg-center bg-no-repeat opacity-80 pointer-events-none mix-blend-hard-light"
        style={{ backgroundImage: `url(${bgLayar})` }}
      />

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-5xl">
        {/* Pill Button */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
            <span className="w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
            <span className="text-sm text-white font-semibold tracking-wide uppercase font-Poppins">
              Transform Your Career Today
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-[44px] md:leading-[55px] font-medium mb-6 tracking-tight font-Poppins">
          We're Changing The Way People Think
          <br className="hidden md:block" />
          About Internships
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-[16px] text-gray-300 mb-12 max-w-2xl mx-auto font-normal leading-relaxed font-Poppins">
          Meet the Best! Our top performers have earned rewards through skill
          and dedication. Keep learning and claim your spot!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;