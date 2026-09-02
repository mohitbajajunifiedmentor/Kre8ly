import React from "react";

const UnifiedStep = ({ data, darkMode }) => {
  return (
    <div
      data-aos="flip-down"
      // data-aos-delay="100"
      className="mx-auto p-2 md:px-4 md:py-8 max-w-sm sm:w-96 flex flex-row items-center justify-between md:flex-wrap gap-2">
      <figure
        data-aos="fade-up"
        // data-aos-delay="100"
        className="relative bg-[#F2F2F2]  rounded-xl max-h-56 h-full overflow-hidden w-full md:w-auto basis-1/2 md:basis-auto">
        {data?.type === "image" && data?.lightType === "image" && (
          <img
            data-aos="fade-up"
            // data-aos-delay="100"
            src={data.lightImage}
            alt={data.alt}
            className="w-full h-full object-contain"
          />
        )
        }
      </figure>
      <div
        data-aos="fade-up"
        // data-aos-delay="100"
        className="text-center space-y-4 md:mt-4 w-full md:w-auto basis-1/2 md:basis-auto">
        <h3
          data-aos="fade-up"
          // data-aos-delay="100"
          className="text-sm md:text-xl font-semibold text-content">
          {data?.title}
        </h3>
        <p
          data-aos="fade-up"
          // data-aos-delay="100"
          className="text-xs md:text-sm text-content-secondary">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default UnifiedStep;