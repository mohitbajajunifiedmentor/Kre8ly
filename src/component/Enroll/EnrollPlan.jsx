import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
const CheckCircle = "/assets/Enroll/checkCircle.png";
const Icon = "/assets/Enroll/Icon.gif";
const Scholar = "/assets/Enroll/scholar.svg";
import Faqs from "../MachineLearning/Faqs";
import { IndianPlans } from "../../Utils/Enroll/IndianPlan";
import { InternationalPlans } from "../../Utils/Enroll/InternationalPlan";
import { HomePageFaqs } from "../../Utils/Faqs/HomePageFaqs";
import { motion, useInView } from "framer-motion";
import { FaCheck, FaCrown } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
// const diwaliBGImage = "/assets/diwali/image3.svg";
const EnrollPlan = ({ CourseName, darkMode }) => {
  let [plans, setPlans] = useState(IndianPlans);
  const [isIndian, setIsIndian] = useState(true);

  // was `window.location.pathname` — usePathname() gives the same value and
  // is safe during server rendering, so the SSR and client markup match.
  const url = usePathname();

  if (url === "/digital-marketing-enroll") {
    plans = [
      {
        name: "Live Training",
        price: "14,999",
        originalPrice: "19,999",
        tag: "MOST POPULAR",
        features: [
          "Free Resources",
          "Ebooks",
          "Worth ₹ 50k Content",
          "Industry Recognized Certificates",
          "7 day free trial",
          "Mentor Assistance",
        ],
        buttonText: "Get it now",
        buttonLink: "https://pages.razorpay.com/umdm2025",
      },
    ];
  }

  const togglePlans = (isIndianPlan) => {
    setIsIndian(isIndianPlan);
    setPlans(isIndianPlan ? IndianPlans : InternationalPlans);
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2,
      },
    },
  };

  const refs = {
    compare: useRef(null),
    faq: useRef(null),
  };

  const isCompareInView = useInView(refs.compare, {
    once: true,
    margin: "-50PX",
  });
  const isFaqInView = useInView(refs.faq, { once: true, margin: "-50PX" });

  const colors = ["bg-[#DEEDFC]", "bg-[#FCE8D8]", "bg-[#E8FCD8]"];

  return (
    <div className="w-full">
      {/* <img src={diwaliBGImage} alt="" className="absolute"/> */}
      <main className="w-full h-full container mx-auto flex flex-col items-center justify-center text-center gap-20 p-4">
        <div
          ref={refs.compare}
          initial="hidden"
          animate={isCompareInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="h-full flex items-center justify-center p-4 w-full flex-col"
        >
          <div
            variants={containerVariants}
            className="w-full py-6 sm:py-8 md:py-10 flex flex-col gap-4 sm:gap-5 justify-center items-center px-2 sm:px-4"
          >
            <h2
              variants={headingVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-content mb-4"
            >
              {url === "/digital-marketing-enroll"
                ? `The Only Digital Marketing Course You Need – Live for 2 Months`
                : `Compare Our ${CourseName} Courses and Find the Right One for You`}
            </h2>
            {url !== "/digital-marketing-enroll" && (
              <div
                variants={containerVariants}
                className="flex flex-col sm:flex-row bg-primary py-2 px-2 sm:px-4 justify-center items-center gap-2 sm:gap-6 mx-auto rounded-lg w-full max-w-[600px]"
              >
                <button
                  className={`text-xs sm:text-sm md:text-lg hover:bg-blue-50 dark:hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 flex items-center font-semibold w-full justify-center gap-2 rounded-full shadow-md border border-line ${
                    isIndian
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                      : "text-content"
                  }`}
                  onClick={() => togglePlans(true)}
                >
                  Indian Learners
                </button>
                <button
                  className={`text-xs sm:text-sm md:text-lg hover:bg-blue-50 dark:hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 flex items-center font-semibold w-full justify-center gap-2 rounded-full shadow-md border border-line ${
                    !isIndian
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                      : "text-content"
                  }`}
                  onClick={() => togglePlans(false)}
                >
                  International Learners
                </button>
              </div>
            )}
          </div>

          <div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full max-w-7xl py-10"
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                style={{
                  maxWidth: plan.maxWidth,
                  maxHeight: plan.maxHeight,
                  minWidth: plan.minWidth,
                  minHeight: plan.minHeight,
                }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-2 border w-full mx-auto ${
                  plan.name.includes("Pro") &&
                  "border-2 border-blue-300 shadow-2xl scale-105"
                }`}
              >
                {/* Tag (badge) */}
                {plan.tag === "MOST POPULAR" && plan.name.includes("Pro") && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      {plan.tag}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto mt-4 bg-blue-500">
                  {plan.name.includes("Pro") ? (
                    <IoIosRocket className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                  ) : plan.name.includes("Advanced") ? (
                    <FaCrown className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                  ) : (
                    <img
                      src={Scholar}
                      alt="scholar"
                      className="h-6 w-6 sm:h-8 sm:w-8"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2 sm:mb-4">
                  {plan.name} Plan
                </h3>

                {/* Pricing */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    {plan.price}
                  </div>
                  <div className="text-sm sm:text-lg text-gray-500 line-through">
                    {plan.originalPrice}
                  </div>
                  {/* <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    per month
                  </div> */}
                </div>

                {/* Button */}
                <button
                  onClick={() => window.open(plan.buttonLink, "_blank")}
                  className="w-full sm:w-5/6 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transform hover:scale-105 transition duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                >
                  {plan.buttonText}
                </button>
                {/* Features */}
                <ul className="space-y-2 mb-6 sm:mb-8 flex flex-col items-start mt-4 sm:mt-6 px-4 sm:px-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className="text-black text-xs sm:text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div
        ref={refs.faq}
        initial="hidden"
        animate={isFaqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full flex justify-center items-center"
      >
        <Faqs Faqs={HomePageFaqs} />
      </div>
    </div>
  );
};

export default EnrollPlan;
