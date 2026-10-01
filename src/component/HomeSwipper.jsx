import React, { useEffect, useRef, useState } from "react";
import { GoogleReview } from "../Utils/GoogleReview";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

const GlobeDark = "/assets/review_profiles/Globe.png";
const GlobeLight = "/assets/Globe.png";

const HomeSwiper = ({ darkMode }) => {
  const [activeReview, setActiveReview] = useState(GoogleReview[0] || null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?f9834e045562911c8a562595a7e";
    script.defer = true;
    script.async = true;
    script.onload = () => setWidgetLoaded(true);
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-14 overflow-hidden py-4">
      
      {/* Left Column: Interactive Globe with Floating Profiles */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[480px] relative hidden md:block select-none"
        >
          {/* Subtle Back Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-brand/10 blur-3xl"
          />

          <img
            src={darkMode ? GlobeDark : GlobeLight}
            alt="Learners around the world"
            className="w-full h-auto object-contain relative z-0"
          />

          {/* Floating Profiles Overlay */}
          <div className="absolute inset-0 z-10">
            <ProfileCircles
              reviews={GoogleReview}
              activeReview={activeReview}
              setActiveReview={setActiveReview}
            />
          </div>
        </motion.div>
      </div>

      {/* Right Column: Google Reviews Trustindex Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col justify-center items-start min-h-[360px]"
      >
        <div className="w-full relative">
          {/* Skeleton while trustindex script initializes */}
          {!widgetLoaded && (
            <div className="w-full rounded-card border border-line bg-surface p-6 shadow-sm animate-pulse space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-surface-sunken" />
                <div className="space-y-2 flex-1">
                  <div className="w-1/3 h-4 bg-surface-sunken rounded" />
                  <div className="w-1/4 h-3 bg-surface-sunken rounded" />
                </div>
              </div>
              <div className="w-full h-16 bg-surface-sunken rounded" />
            </div>
          )}

          {/* Widget Container */}
          <div ref={containerRef} className="w-full min-h-[300px]" />
        </div>
      </motion.div>

    </div>
  );
};

const ProfileCircles = ({ reviews, activeReview, setActiveReview }) => {
  const circleBorders = [
    "border-[#FFA4A0]",
    "border-[#FFD34E]",
    "border-[#83CF8F]",
    "border-[#4475D3]",
    "border-[#FC8484]",
    "border-[#AAD9E8]",
    "border-[#8E5CFE]",
  ];

  return (
    <div className="relative w-full h-full">
      {reviews?.map((review, index) => {
        const isCurrent =
          activeReview?.testimonial?.name === review?.testimonial?.name;
        const borderColor = circleBorders[index % circleBorders.length];

        return (
          <motion.div
            key={index}
            animate={{
              y: [0, index % 2 === 0 ? -6 : 6, 0],
            }}
            transition={{
              duration: 3.5 + (index % 3) * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            onMouseEnter={() => setActiveReview(review)}
            style={{
              position: "absolute",
              top: review?.testimonial?.image?.top || `${20 + (index * 7)}%`,
              left: review?.testimonial?.image?.left || `${15 + (index * 8)}%`,
            }}
            className="group cursor-pointer z-20"
          >
            {/* Avatar Pill */}
            <div
              className={`relative p-0.5 rounded-full border-2 bg-surface shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:shadow-md group-hover:z-30 ${borderColor} ${
                isCurrent ? "scale-110 ring-2 ring-brand/40" : "scale-90"
              }`}
            >
              <img
                src={review?.testimonial?.image?.src}
                alt={review?.testimonial?.alt || "Reviewer"}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
              />
            </div>

            {/* Hover Floating Review Tooltip */}
            <AnimatePresence>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-40 transition-all duration-200">
                <div className="rounded-control border border-line bg-surface/95 backdrop-blur-sm px-2.5 py-1.5 shadow-lg text-center whitespace-nowrap">
                  <div className="text-[11px] font-bold text-content leading-tight">
                    {review?.testimonial?.name}
                  </div>
                  <div className="flex items-center justify-center gap-0.5 text-warning text-[10px] mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HomeSwiper;