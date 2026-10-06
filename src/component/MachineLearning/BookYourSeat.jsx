import React, { useState, useEffect, useRef } from "react";

// Variant data configuration for Fellowships / Courses
const VARIANT_CONFIG = {
  DataAnalystFellowship: {
    jobTitle: "Data Analyst",
    h2: "Build a Career as a Data Analyst",
    description:
      "Nearly every business now tracks sales, customers or operations in data, and someone has to make sense of it. Banks, retailers, logistics firms, healthcare companies and startups all hire data analysts, and not only in the metros. Teams in Pune, Jaipur, Indore and Kochi need analysts too.",
    stats: [
      {
        label: "Average Hike at Kre8ly",
        value: "40%",
        subText: "Per annum starting salary",
        icon: "trending-up",
        color: "blue",
        suffix: "%",
      },
      {
        label: "Average Salary of Past Learners",
        value: "6 to 8 Lakhs",
        subText: "Career growth support", // replaced from "Career growth guaranteed"
        icon: "currency",
        color: "yellow",
        suffix: "",
      },
    ],
  },
  FinancialAnalystFellowship: {
    jobTitle: "Financial Analyst",
    h2: "Building a Career in Financial Analysis",
    description:
      "Every company, from a startup to a listed manufacturer, needs people who can read its numbers and explain them to management. Banks, NBFCs, fintech companies, consulting firms and accounting firms all hire analysts. You'll find that work in cities like Indore, Jaipur, Surat and Coimbatore as well as in the big metros.",
    stats: [
      {
        label: "Average Hike at Kre8ly",
        value: "40%",
        subText: "Per annum starting salary",
        icon: "trending-up",
        color: "blue",
        suffix: "%",
      },
      {
        label: "Average Salary of Past Learners",
        value: "6 to 8 Lakhs",
        subText: "Career growth support", // replaced from "Career growth guaranteed"
        icon: "currency",
        color: "yellow",
        suffix: "",
      },
    ],
  },
  BusinessAnalystFellowship: {
    jobTitle: "Business Analyst",
    h2: "Building a Career in Business Analysis",
    description:
      "Companies are always trying to fix a slow process, understand a drop in sales or decide what to build next, and business analysts help them work it out. IT services firms, banks, e-commerce and logistics companies and startups all hire for these roles. Many of them have offices in cities like Pune, Indore, Coimbatore and Chandigarh, not just Mumbai and Bengaluru.",
    stats: [
      {
        label: "Average Hike at Kre8ly",
        value: "40%",
        subText: "Per annum starting salary",
        icon: "trending-up",
        color: "blue",
        suffix: "%",
      },
      {
        label: "Average Salary of Past Learners",
        value: "6 to 8 Lakhs",
        subText: "Career growth support", // replaced from "Career growth guaranteed"
        icon: "currency",
        color: "yellow",
        suffix: "",
      },
    ],
  },
  DigitalMarketingFellowship: {
    jobTitle: "Digital Marketing Specialist",
    h2: "Building a Career in Digital Marketing",
    description:
      "Businesses of every size now advertise on Google, YouTube and social media, from big brands to a clothing shop in a small town. That creates work in agencies, in-house marketing teams and freelancing, and much of it can be done from outside the metros. Skills in SEO, paid ads, content and analytics are what employers and clients ask for.",
    stats: [
      {
        label: "Average Hike at Kre8ly",
        value: "40%",
        subText: "Per annum starting salary",
        icon: "trending-up",
        color: "blue",
        suffix: "%",
      },
      {
        label: "Average Salary of Past Learners",
        value: "6 to 8 Lakhs",
        subText: "Career growth support", // replaced from "Career growth guaranteed"
        icon: "currency",
        color: "yellow",
        suffix: "",
      },
    ],
  },
  DataScienceFellowship: {
    jobTitle: "Data Scientist",
    h2: "Why a Data Science Internship Program in India Is a Smart Career Start ",
    description:
      "Banks, retailers, healthcare companies, logistics firms and startups collect more data every year, and they need people who can turn it into decisions. A data science internship program gives you a practical way in, even if you're studying outside a metro. Employers look at what you've built: a clean analysis, a working model, a project on GitHub.",
    stats: [
      {
        label: "Average Hike at Kre8ly",
        value: "40%",
        subText: "Per annum starting salary",
        icon: "trending-up",
        color: "blue",
        suffix: "%",
      },
      {
        label: "Average Salary of Past Learners",
        value: "6 to 8 Lakhs",
        subText: "Career growth support", // replaced from "Career growth guaranteed"
        icon: "currency",
        color: "yellow",
        suffix: "",
      },
    ],
  },
};

const BookYourSeat = ({
  darkMode,
  CourseName,
  varient,
  variant,
  subHeadings,
  subtitles1,
  subtitles2,
  titles,
  altforImage,
  stats: customStats,
  onStartJourney,
  onViewStories,
}) => {
  const activeVariantKey = varient || variant;
  const config = VARIANT_CONFIG[activeVariantKey] || {};

  // Resolve dynamic values with fallbacks to props
  const resolvedHeading =
    titles || config.h2 || "Build a Career as a Data Analyst";
  const resolvedJobTitle = config.jobTitle || CourseName || "Data Analyst";
  const resolvedDescription = subHeadings || config.description || "";
  const resolvedStats = customStats ||
    config.stats || [
      {
        label: "Average Hike at Kre8ly",
        value: "40%",
        subText: "Per annum starting salary",
        icon: "trending-up",
        color: "blue",
        suffix: "%",
      },
      {
        label: "Average Salary of Past Learners",
        value: "6 to 8 Lakhs",
        subText: "Career growth support",
        icon: "currency",
        color: "yellow",
        suffix: "",
      },
    ];

  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  const startCounters = () => {
    resolvedStats.forEach((stat, index) => {
      if (typeof stat.value === "string" && stat.value.includes("to")) {
        const numbers = stat.value.match(/\d+/g);
        if (numbers && numbers.length >= 2) {
          animateCounter(
            `counter-${index}-start`,
            0,
            parseInt(numbers[0], 10),
            1800,
          );
          animateCounter(
            `counter-${index}-end`,
            0,
            parseInt(numbers[1], 10),
            1800,
          );
        }
      } else {
        const number = parseInt(stat.value, 10);
        if (!isNaN(number)) {
          animateCounter(`counter-${index}`, 0, number, 1800);
        }
      }
    });
  };

  const animateCounter = (id, start, end, duration) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (end - start) * progress);

      setCounters((prev) => ({ ...prev, [id]: current }));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);
  };

  const handleStartJourney = () => {
    if (onStartJourney) {
      onStartJourney();
    } else {
      const formEl =
        document.getElementById("lead-form") || document.querySelector("form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleViewStories = () => {
    if (onViewStories) {
      onViewStories();
    } else {
      const reviewsEl = document.getElementById("Reviews");
      if (reviewsEl) {
        reviewsEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderIcon = (iconType) => {
    if (iconType === "currency") {
      return (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      );
    }
    return (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    );
  };

  return (
    <section ref={sectionRef} className="w-full py-8">
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="w-full mx-auto text-center px-4 max-w-6xl"
      >
        {/* Label 1: Your Future Job Title */}
        <p className="text-sm font-semibold text-content-muted tracking-widest uppercase mb-3">
          Your Future Job Title:{" "}
          <span className="text-content font-bold">{resolvedJobTitle}</span>
        </p>

        {/* H2 Title */}
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-content tracking-tight mb-4">
          {resolvedHeading}
        </h2>

        {/* Subtitle if provided */}
        {(subtitles1 || subtitles2) && (
          <h3 className="text-lg md:text-xl font-medium text-brand mb-4">
            {[subtitles1, subtitles2].filter(Boolean).join(" ")}
          </h3>
        )}

        {/* Description */}
        <p className="text-content-secondary leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
          {resolvedDescription}
        </p>

        {/* Counters / Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {resolvedStats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isVisible={isVisible}
              counters={counters}
              renderIcon={renderIcon}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleStartJourney}
            className="w-full sm:w-auto bg-brand text-brand-fg px-8 py-3.5 rounded-full font-semibold hover:bg-brand-hover transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none"
          >
            Start Your Journey
          </button>
          <button
            onClick={handleViewStories}
            className="w-full sm:w-auto border border-line-strong bg-surface text-content hover:bg-surface-sunken font-semibold px-8 py-3.5 rounded-full transition-all duration-200 focus-visible:outline-none"
          >
            View Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, counters, renderIcon }) => {
  const colorMap = {
    yellow: {
      gradient: "from-amber-500 to-amber-600",
      text: "text-amber-500 dark:text-amber-400",
      pulse: "bg-amber-500",
    },
    blue: {
      gradient: "from-brand to-brand-hover",
      text: "text-brand",
      pulse: "bg-brand",
    },
  };

  const colors = colorMap[stat.color] || colorMap.blue;

  const renderValue = () => {
    if (typeof stat.value === "string" && stat.value.includes("to")) {
      const startValue = counters[`counter-${index}-start`] || 0;
      const endValue = counters[`counter-${index}-end`] || 0;
      return `${startValue} to ${endValue} Lakhs`;
    }
    const value = counters[`counter-${index}`] || 0;
    return `${value}${stat.suffix || ""}`;
  };

  return (
    <div className="group bg-surface border border-line shadow-sm rounded-2xl p-7 md:px-12 md:py-8 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-brand/40 hover:-translate-y-1">
      {/* Icon Frame */}
      <div
        className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105 shadow-sm`}
      >
        {renderIcon(stat.icon)}
      </div>

      {/* Metric Label */}
      <p className="text-content-muted text-xs font-semibold uppercase tracking-wider mb-2">
        {stat.label}
      </p>

      {/* Big Animated Value */}
      <div
        className={`text-3xl md:text-4xl font-extrabold mb-1 tracking-tight ${colors.text}`}
      >
        {renderValue()}
      </div>

      {/* SubText (e.g., "Career growth support" / "Per annum starting salary") */}
      <p className="text-content-secondary text-sm font-medium mt-1">
        {stat.subText ||
          (stat.color === "yellow"
            ? "Career growth support"
            : "Per annum starting salary")}
      </p>

      {/* Subtle indicator */}
      <div
        className={`absolute bottom-3 right-3 w-2 h-2 ${colors.pulse} rounded-full opacity-60`}
      />
    </div>
  );
};

export default BookYourSeat;
