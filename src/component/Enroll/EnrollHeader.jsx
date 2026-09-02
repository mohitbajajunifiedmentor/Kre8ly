import React from "react";

const EnrollHeader = ({ HeaderImage, heading, location }) => {
  return (
    <header className="w-full">
      <figure className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-full relative">
        <img
          src={HeaderImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <figcaption className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              {heading} In India
            </h1>
            <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-tight">
              Affordable Pricing for Quality Courses
            </h2>
          </div>
        </figcaption>
      </figure>
    </header>
  );
};

export default EnrollHeader;
