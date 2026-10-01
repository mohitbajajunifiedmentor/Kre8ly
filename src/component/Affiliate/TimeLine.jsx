import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sun, Moon } from "lucide-react";

// --- START: SELF-CONTAINED ASSETS ---
// Placeholder images - replace with your actual image imports
const image1 = "/assets/ReferAndEarn/image_1.svg";
const image2 = "/assets/ReferAndEarn/image_2.svg";
const image3 = "/assets/ReferAndEarn/image_3.svg";
const image4 = "/assets/ReferAndEarn/image_4.svg";

const ImageContainer = ({ children }) => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={children} alt="" className="w-full h-full object-contain" />
  </div>
);

// Animated "scroll down" indicator
const ScrollDownIndicator = ({ isDark }) => (
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } }}
    className="mt-12"
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`flex flex-col items-center dark:text-slate-500 text-gray-400`}
    >
      <span className="text-sm">Scroll</span>
      <svg
        className="w-6 h-6 mt-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </motion.div>
  </motion.div>
);

// --- END: SELF-CONTAINED ASSETS ---

const steps = [
  {
    id: 1,
    title: "Share Your Referral Link",
    desc: "Copy your unique referral link and share it with friends via WhatsApp, email, or social media.",
    image: <ImageContainer>{image1}</ImageContainer>,
  },
  {
    id: 2,
    title: "Your Friend Signs Up",
    desc: "When your friend creates an account using your referral link, they become part of your referral network.",
    image: <ImageContainer>{image2}</ImageContainer>,
  },
  {
    id: 3,
    title: "They Enroll in a Program",
    desc: "Once your referred friend enrolls in any paid program or internship, you unlock your reward.",
    image: <ImageContainer>{image3}</ImageContainer>,
  },
  {
    id: 4,
    title: "Earn Exciting Rewards",
    desc: "Get instant rewards in your wallet! The more friends you refer, the more you earn. No limits!",
    image: <ImageContainer>{image4}</ImageContainer>,
  },
];

function TextStep({ children, onInView, isFirst, isLast, isActive, isDark }) {
  const { ref, inView } = useInView({ threshold: 0.6 });
  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <div
      ref={ref}
      className="h-[50rem] flex items-center justify-start relative"
    >
      <div className="absolute left-0 h-full w-8 flex items-center justify-center">
        {!isFirst && (
          <div className="absolute top-0 h-1/2 w-px dark:bg-slate-700 bg-gray-300"></div>
        )}
        {!isLast && (
          <div className="absolute bottom-0 h-1/2 w-px dark:bg-slate-700 bg-gray-300"></div>
        )}
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            isActive
              ? "bg-blue-600 scale-150 shadow-[0_0_15px_rgba(37,99,235,0.7)]"
              : "bg-gray-400 dark:bg-slate-600"
          }`}
        ></div>
      </div>
      <div className="max-w-md pl-12">{children}</div>
    </div>
  );
}

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDark, setIsDark] = useState(false); // Start with light mode
  const { ref: headingTrigger, inView: isHeadingVisible } = useInView({
    threshold: 0.2,
  });

  // Initialize dark mode
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) setIsDark(stored === "true");
  }, []);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, x: 50 },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: -50,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div
      className={`dark:bg-[#010101] bg-white transition-colors duration-300`}
    >
      {/* Theme Toggle Button */}
      {/* <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
          isDark
            ? "bg-slate-800 text-yellow-400"
            : "bg-gray-200 text-gray-800 shadow-lg"
        } hover:scale-110 transition-transform`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button> */}

      {/* Header Section - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-10"
      >
        <h2 className="text-2xl md:text-[42px] mb-4 text-content dark:text-[#fff]">
          Refer Your Friends & <span className="text-blue-600">Earn</span>{" "}
          Exciting Rewards!
        </h2>

        <p
          className={`text-sm md:text-[16px] max-w-2xl mx-auto text-slate-800 dark:text-gray-400`}
        >
          Got friends who want to level up their career? Invite them to join
          Kre8ly and get rewarded for every successful signup or
          enrollment.
        </p>

        {/* <div className="mt-10">
          <ScrollDownIndicator isDark={isDark} />
        </div> */}
      </motion.div>

      {/* Timeline Section */}
      <div className="flex relative w-full max-w-7xl mx-auto px-4 md:px-8">
        {/* --- STICKY LEFT COLUMN --- */}
        <div className="hidden md:flex w-1/2 h-screen sticky top-0 flex-col items-center justify-center pr-12">
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
            <AnimatePresence>
              {!isHeadingVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`w-full h-[550px] backdrop-blur-sm rounded-3xl p-8`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="w-full h-full"
                    >
                      {steps[activeIndex].image}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- SCROLLING RIGHT COLUMN --- */}
        <div className="w-full md:w-1/2 ">
          {/* <div ref={headingTrigger} className="h-[50vh]" /> */}

          {steps.map((item, index) => (
            <TextStep
              key={item.id}
              onInView={() => setActiveIndex(index)}
              isFirst={index === 0}
              isLast={index === steps.length - 1}
              isActive={activeIndex === index}
              isDark={isDark}
            >
              <div
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-30"
                }`}
              >
                <h3 className="text-xl md:text-3xl mb-4 dark:text-white text-gray-900">
                  <span className="text-blue-600 mr-3">
                    {String(item.id).padStart(2, "0")}
                  </span>
                  {item.title}
                </h3>
                <p className={`text-[16px] dark:text-slate-300 text-gray-700`}>
                  {item.desc}
                </p>
              </div>
            </TextStep>
          ))}
        </div>
      </div>
    </div>
  );
}
