import React from "react";
import { motion } from "framer-motion";

const PrivacyHeader = ({
  HeaderImage,
  HeaderImage2,
  title = "",
  subtitle = "",
  desc = "",
  varient = "",
  br1 = "",
  br2 = "",
  br3 = "",
  headingVariants,
  paragraphVariants,
  containerVariants,
  darkMode,
  isPrivacyInView,
  refs,
}) => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-center items-center md:items-start text-center h-full gap-4 md:gap-6"
    >
      <div className="flex flex-col md:flex-row   gap-6 md:gap-8 w-full min-h-[30rem] h-full">
        {/* Text Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="flex flex-col w-full lg:w-1/2 text-center md:text-left mt-8 md:mt-24 md:px-0 lg:px-10"
        >
          <h1
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6"
          >
            {title}
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="block text-lg sm:text-xl lg:text-2xl text-gray-200"
          >
            {subtitle}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-sm sm:text-base md:text-lg text-gray-200 mt-4 sm:mt-8 md:mt-10"
          >
            {desc}
          </p>
        </div>

        {/* Image Section */}
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="800"
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <figure className="w-10/12 sm:w-8/12 md:w-10/12 max-w-lg">
            <img
              src={HeaderImage2}
              alt="Kre8ly – Your Partner in Digital Excellence, delivering expert digital solutions to help businesses grow online"
              className="rounded-2xl w-full h-auto object-cover hover:scale-105 transition-all duration-200"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHeader;
