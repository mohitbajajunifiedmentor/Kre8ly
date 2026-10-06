import React from "react";
import PlacementSupportCardsSwiper from "../PlacementSupportCardsSwiper";
import { motion } from "framer-motion";

const Placement1 = "/assets/Placement1.png";
const Placement2 = "/assets/Placement2.png";
const Placement3 = "/assets/Placement3.png";

const DEFAULT_PERKS = [
  {
    img: Placement1,
    alt: "Job portal",
    title: "Job portal",
    text: "Openings picked by our team, so you spend less time sorting through listings.",
  },
  {
    img: Placement2,
    alt: "Resume Reviews",
    title: "Resume Reviews",
    text: "A real person reads your resume and tells you what to fix.",
  },
  {
    img: Placement3,
    alt: "Interview with Hiring Partners",
    title: "Interview with Hiring Partners",
    text: "Exclusive interview opportunities with companies we work with.",
  },
];

const VARIANT_DATA = {
  DataAnalystFellowship: {
    heading: "Placement Support for Data Analyst Learners",
    description:
      "Finish your project and assessments to become eligible for openings with our partner companies",
    perks: [
      {
        img: Placement1,
        alt: "Job portal",
        title: "Job portal",
        text: "Openings from our hiring partners, all in one place",
      },
      {
        img: Placement2,
        alt: "Resume Reviews",
        title: "Resume Reviews",
        text: "Get your analyst resume and project portfolio reviewed before you apply.",
      },
      {
        img: Placement3,
        alt: "Interview with Hiring Partners",
        title: "Interview with Hiring Partners",
        text: "Interview opportunities with companies we work with, plus interview preparation.",
      },
    ],
  },
  FinancialAnalyst: {
    heading: "Placement Support for Finance Learners",
    description:
      "Complete your project and assessments to become eligible for openings with our partner companies.",
    perks: [
      {
        img: Placement1,
        alt: "Job Portal",
        title: "Job Portal",
        text: "Browse roles from our hiring partners in one place.",
      },
      {
        img: Placement2,
        alt: "Resume Reviews",
        title: "Resume Reviews",
        text: "Have your resume checked, with a focus on how you present your projects and skills.",
      },
      {
        img: Placement3,
        alt: "Interviews with Hiring Partners",
        title: "Interviews with Hiring Partners",
        text: "Interview opportunities with companies we work with, plus interview preparation.",
      },
    ],
  },
  BusinessAnalystFellowship: {
    heading: "Placement Support",
    description:
      "Finish your project and assessments to join the pool of candidates for our partner companies' openings.",
    perks: [
      {
        img: Placement1,
        alt: "Job Portal",
        title: "Job Portal",
        text: "Openings from partner companies, so you aren't scrolling through hundreds of listings that don't fit.",
      },
      {
        img: Placement2,
        alt: "Resume Reviews",
        title: "Resume Reviews",
        text: "A mentor reads your resume and points out what a recruiter would question.",
      },
      {
        img: Placement3,
        alt: "Interviews with Hiring Partners",
        title: "Interviews with Hiring Partners",
        text: "Chances to interview with hiring partners, with prep sessions beforehand.",
      },
    ],
  },
  DigitalMarketingFellowship: {
    heading: "Placement Support for Remote Digital Marketing Internship Jobs",
    description:
      "Some digital marketing roles are remote or hybrid, which suits people in smaller cities. Finish your project and assessments to become eligible for openings with our partner companies.",
    perks: [
      {
        img: Placement1,
        alt: "Job Portal",
        title: "Job Portal",
        text: "Browse openings from our hiring partners in one place.",
      },
      {
        img: Placement2,
        alt: "Resume Reviews",
        title: "Resume Reviews",
        text: "Get feedback on your resume and on how you present your campaign work.",
      },
      {
        img: Placement3,
        alt: "Interviews with Hiring Partners",
        title: "Interviews with Hiring Partners",
        text: "Interview opportunities with companies we work with, plus preparation before you go in.",
      },
    ],
  },
  DataScienceFellowship: {
    heading: "Placement Support for Data Science Internship Jobs in India",
    description:
      "Landing a first data science role from a smaller city can feel like a long shot. Finish your project and assessments to become eligible for openings with our partner companies.",
    perks: [
      {
        img: Placement1,
        alt: "Job Portal",
        title: "Job Portal",
        text: "Browse data and analytics openings from our hiring partners.",
      },
      {
        img: Placement2,
        alt: "Resume Reviews",
        title: "Resume Reviews",
        text: "Get your resume and project write-ups reviewed before you apply.",
      },
      {
        img: Placement3,
        alt: "Interviews with Hiring Partners",
        title: "Interviews with Hiring Partners",
        text: "Interview opportunities with companies we work with, plus practice rounds beforehand.",
      },
    ],
  },
};
const DEFAULT_CONTENT = {
  heading: "Placement Support and Online Courses for Freshers",
  description:
    "If you're a fresher in a smaller city, getting interview calls is often the hardest step. Placement support is built into our online courses for freshers, so your job search doesn't start from zero. Finish your project and assessments to become eligible for openings at our partner companies.",
  perks: DEFAULT_PERKS,
};

// eslint-disable-next-line no-unused-vars
const PlacementSupport = ({
  PlacementSupportInfo,
  darkMode,
  location,
  varient,
  variant,
}) => {
  const activeVariant = varient || variant;
  const currentData = VARIANT_DATA[activeVariant] || DEFAULT_CONTENT;
  const perksList = currentData.perks || DEFAULT_PERKS;

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
        <h2 className="mb-4 text-3xl font-semibold leading-normal tracking-tight text-content md:leading-[1.3] lg:text-4xl">
          {currentData.heading}
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-content-secondary lg:text-lg">
          {currentData.description}
        </p>
      </motion.div>

      {/* Mobile view */}
      <div className="md:hidden">
        <PlacementSupportCardsSwiper
          darkMode={darkMode}
          varient={activeVariant}
          perks={perksList}
        />
      </div>

      {/* Desktop / Tablet Grid */}
      <ul className="hidden grid-cols-3 gap-6 md:grid lg:gap-8">
        {perksList.map(({ img, alt, title, text }, i) => (
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
