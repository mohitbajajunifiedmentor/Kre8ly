import React, { useEffect, useRef, useState } from "react";
import { GoogleReview } from "../Utils/GoogleReview";

const GlobeDark = "/assets/review_profiles/Globe.png"; // globe for dark backgrounds
const GlobeLight = "/assets/Globe.png"; // globe for light backgrounds

const HomeSwiper = ({ darkMode }) => {
  // Kept so the highlighted circle can be driven by the review carousel again
  // if the Swiper is ever restored. For now it stays on the first review.
  const [activeSlide] = useState(GoogleReview[0]);

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?f9834e045562911c8a562595a7e";
    script.defer = true;
    script.async = true;
    container.appendChild(script);

    return () => {
      // Remove the loader and anything the widget injected into our container
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center md:gap-20 overflow-hidden">
      <div className="w-full lg:w-1/2 h-full">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="w-full md:w-[85%] mx-auto relative hidden md:block"
        >
          <img
            src={darkMode ? GlobeDark : GlobeLight}
            alt="Learners around the world"
            className="w-full"
          />
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="absolute top-0 left-0 w-full"
          >
            <ProfileCircles reviews={GoogleReview} activeSlide={activeSlide} />
          </div>
        </figure>
      </div>

      <div className="w-full lg:w-1/2 h-full relative mt-0">
        <div className="flex flex-col gap-6 justify-start items-start w-full">
          <div className="w-full h-full" ref={containerRef}></div>
        </div>
      </div>
    </div>
  );
};

const ProfileCircles = ({ reviews, activeSlide }) => {
  const calculatePosition = (review) => ({
    transition: "all 0.5s ease",
    cursor: "pointer",
    top: review?.testimonial?.image?.top,
    left: review?.testimonial?.image?.left,
  });

  const circleColors = [
    "bg-[#FFA4A0]",
    "bg-[#FFD34E]",
    "bg-[#FFD34E]",
    "bg-[#83CF8F]",
    "bg-[#4475D3]",
    "bg-[#FC8484]",
    "bg-[#F8DC91]",
    "bg-[#3A4B6C]",
    "bg-[#AAD9E8]",
    "bg-[#4F6DA5]",
    "bg-[#8E5CFE]",
  ];

  return (
    <div className="relative w-full h-full min-h-[450px] hidden md:block">
      {reviews?.map((review, index) => {
        const isActive =
          review?.testimonial?.name?.toLowerCase() ===
          activeSlide?.testimonial?.name?.toLowerCase();

        return (
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            key={index}
            className={`absolute w-14 h-14 md:w-20 md:h-20 xl:w-24 xl:h-24 flex justify-center items-center
                        testimonial-Image-${index}
                        ${circleColors[index % circleColors.length]}
                        ${isActive ? "!scale-110" : ""}
                        p-2 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-lg hover:z-50 animate-fadeIn group`}
            style={{
              transform: `scale(${0.5 + Math.floor(index / 2) * 0.1})`,
              ...calculatePosition(review),
            }}
          >
            <img
              src={review?.testimonial?.image?.src}
              alt={review?.testimonial?.alt || "Profile"}
              className={`w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20 mx-auto rounded-full object-cover inner-testimonial-Image-${index}`}
            />
            <div className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-content text-surface text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity duration-300">
              {review?.testimonial?.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeSwiper;