// BookYourSeat.jsx
import React, { useState, useEffect, useRef } from "react";

const BookYourSeat = ({
  darkMode,
  CourseName,
  subHeadings,
  subtitles2,
  subtitles1,
  titles,
  altforImage,
  stats = [
    {
      label: "Average Hike at Kre8ly",
      value: "40%",
      icon: "trending-up",
      color: "blue",
      suffix: "%",
    },
    {
      label: "Average Salary of Past Learners",
      value: "6 to 8 Lakhs",
      icon: "currency",
      color: "yellow",
      suffix: "",
    },
  ],
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Animation timing
    const animationInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 500);
    }, 2000);

    return () => clearInterval(animationInterval);
  }, [titles.length]);

  // Counter animation
  const startCounters = () => {
    stats.forEach((stat, index) => {
      if (stat.value.includes("to")) {
        // Handle range values like "6 to 8"
        const numbers = stat.value.match(/\d+/g);
        if (numbers) {
          animateCounter(
            `counter-${index}-start`,
            0,
            parseInt(numbers[0]),
            2000
          );
          animateCounter(`counter-${index}-end`, 0, parseInt(numbers[1]), 2000);
        }
      } else {
        // Handle single values like "40"
        const number = parseInt(stat.value);
        if (!isNaN(number)) {
          animateCounter(`counter-${index}`, 0, number, 2000);
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
    console.log("Starting learning journey");
    // Handle navigation to enrollment
  };

  const handleViewStories = () => {
    console.log("Viewing success stories");
    // Handle navigation to success stories
  };

  const renderIcon = (iconType) => {
    const icons = {
      "trending-up": (
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
          ></path>
        </svg>
      ),
      currency: (
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
          ></path>
        </svg>
      ),
    };
    return icons[iconType] || icons["trending-up"];
  };

  return (
    <section ref={sectionRef} className=" ">
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="w-full mx-auto text-center mt-8 mb-8"
      >
        {/* Small Heading */}
        <div
          className={`transition-all duration-800 delay-100 opacity-100 translate-y-0`}
        >
          <p className="text-sm font-medium text-content-muted dark:text-content-muted tracking-wider uppercase mb-4">
            Your Future Job Title
          </p>
        </div>

        {/* Main Job Title */}
        <div
          className={`transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-success mb-6 relative">
            {titles[currentIndex]}
          </h2>
        </div>

        {/* Subheading */}
        <div
          className={`transition-all duration-800 delay-300 opacity-100 translate-y-0`}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-content dark:text-content-muted mt-6 mb-4">
            {subtitles1 + " " + subtitles2}
            {/* {subtitles1} */}
          </h2>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-800 delay-400 opacity-100 translate-y-0`}
        >
          <p
            className="text-content-secondary leading-relaxed max-w-3xl mx-auto mt-4 text-lg"
            dangerouslySetInnerHTML={{ __html: subHeadings }}
          />
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
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

        {/* Call to Action */}
        <div
          className={`transition-all duration-800 delay-600 mt-12 opacity-100 translate-y-0 mb-2`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleStartJourney}
              className="bg-gradient-to-r from-brand to-brand-active text-brand-fg px-8 py-4 rounded-xl font-semibold hover:from-info hover:to-info transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </button>
            <button
              onClick={handleViewStories}
              className="text-brand hover:text-info font-semibold px-8 py-4 rounded-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:bg-info-subtle"
            >
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// StatCard Component
const StatCard = ({ stat, index, isVisible, counters, renderIcon }) => {
  const colorClasses = {
    yellow: {
      gradient: "from-warning to-warning",
      bg: "from-warning-subtle to-warning-subtle",
      text: "from-warning to-warning",
      pulse: "bg-warning",
    },
    blue: {
      gradient: "from-brand to-brand-active",
      bg: "from-info-subtle to-info-subtle",
      text: "from-brand to-brand-active",
      pulse: "bg-info",
    },
  };

  const colors = colorClasses[stat.color] || colorClasses.blue;

  const renderValue = () => {
    if (stat.value.includes("to")) {
      const startValue = counters[`counter-${index}-start`] || 0;
      const endValue = counters[`counter-${index}-end`] || 0;
      return `${startValue} to ${endValue} Lakhs`;
    } else {
      const value = counters[`counter-${index}`] || 0;
      return `${value}${stat.suffix}`;
    }
  };

  return (
    <div
      className={`transition-all duration-800 delay-500 opacity-100 translate-y-0`}
    >
      <div className="group bg-surface shadow-lg rounded-xl p-8 md:px-16 md:py-8 flex flex-col items-center text-center relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300">
        {/* Background Pattern */}
        {/* <div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.bg} rounded-full -mr-10 -mt-10 opacity-50`}
        />
        <div
          className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${colors.bg} rounded-full -ml-8 -mb-8 opacity-30`}
        /> */}

        {/* Icon */}
        <div
          className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          {renderIcon(stat.icon)}
        </div>

        {/* Content */}
        <p className="text-content-muted text-sm font-medium mb-2 uppercase tracking-wide">
          {stat.label}
        </p>
        <div
          className={`bg-gradient-to-r ${colors.text} bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-2`}
        >
          {renderValue()}
        </div>
        <p className="text-content-secondary text-sm">
          {stat.color === "yellow"
            ? "Career growth guaranteed"
            : "Per annum starting salary"}
        </p>

        {/* Hover Effect Indicator */}
        <div
          className={`absolute bottom-2 right-2 w-2 h-2 ${colors.pulse} rounded-full animate-pulse`}
        />
      </div>
    </div>
  );
};

export default BookYourSeat;