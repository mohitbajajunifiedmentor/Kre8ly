import React from "react";
import PlacementSupportCardsSwiper from "../PlacementSupportCardsSwiper";
import { motion } from "framer-motion";

const Placement1 = "/assets/Placement1.png";
const Placement2 = "/assets/Placement2.png";
const Placement3 = "/assets/Placement3.png";

const PERKS = [
  {
    img: Placement1,
    alt: "Job portal",
    title: "Job portal",
    text: "Find your dream job with our expert-curated job portal.",
  },
  {
    img: Placement2,
    alt: "Resume Reviews",
    title: "Resume Reviews",
    text: "Get professional resume reviews to stand out and land your dream job!",
  },
  {
    img: Placement3,
    alt: "Interview with Hiring Partners",
    title: "Interview with Hiring Partners",
    text: "Connect with hiring partners for exclusive interviews and job opportunities.",
  },
];

// eslint-disable-next-line no-unused-vars
const PlacementSupport = ({ PlacementSupportInfo, darkMode, location, varient }) => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-content lg:text-4xl">
          Placement Support
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-content-secondary lg:text-lg">
          Clear the cut-off marks in your graduation project to get access to
          jobs at our partner companies
        </p>
      </motion.div>

      {/* Mobile view */}
      <div className="md:hidden">
        <PlacementSupportCardsSwiper darkMode={darkMode} />
      </div>

      {/* Desktop / Tablet Grid */}
      <ul className="hidden grid-cols-3 gap-6 md:grid lg:gap-8">
        {PERKS.map(({ img, alt, title, text }, i) => (
          <motion.li
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
            className="h-full"
          >
            <article className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-card border border-line bg-surface p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-md lg:p-8">
              {/* Soft ambient hover glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-brand/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="flex flex-col items-center">
                {/* Illustration Frame */}
                <div className="flex h-28 w-28 items-center justify-center rounded-control border border-line bg-surface-sunken shadow-inner transition-transform duration-300 group-hover:scale-105 lg:h-32 lg:w-32">
                  <img
                    src={img}
                    alt={alt}
                    loading="lazy"
                    className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110 lg:h-20 lg:w-20"
                  />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-content lg:text-xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-content-secondary">
                  {text}
                </p>
              </div>

              {/* Accent Pill Bar */}
              <span
                aria-hidden="true"
                className="mt-6 h-1 w-10 rounded-full bg-brand/40 transition-all duration-300 group-hover:w-20 group-hover:bg-brand"
              />
            </article>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default PlacementSupport;