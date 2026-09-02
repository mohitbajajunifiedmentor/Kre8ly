import React, { useRef } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";
// const HeaderImage2 = "/assets/Shipping-and-delivery/Shipping%20and%20Delivery.svg";
const HeaderImage2 = "/assets/Shipping-and-delivery/shipping-and-delivery.jpg";
import PrivacyHeader from "../component/PrivacyHeader";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import { motion, useInView } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { RxUpdate } from "react-icons/rx";
import { CiMobile3 } from "react-icons/ci";
import { RxLaptop } from "react-icons/rx";
import { FaWheelchair } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import MobileFooter from "../component/MobileFooter";

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.15,
    },
  },
  exit: { opacity: 0, y: 80, transition: { duration: 0.5, ease: "easeIn" } },
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

const paragraphVariants = {
  hidden: { opacity: 0, x: 40 },
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

const ShippingDelivery = ({ darkMode, setDarkMode }) => {
  const refs = {
    privacy: useRef(null),
    shipping: useRef(null),
    course: useRef(null),
    accesscourse: useRef(null),
  };

  const isPrivacyInView = useInView(refs.privacy, {
    once: true,
    margin: "-50px",
  });

  const Cards = [
    {
      img: FiDownload,
      alt: "Download",
      title: "Fast Shipping",
      description:
        "Deliver your items quickly to customers worldwide, reducing delivery times and increasing customer satisfaction.",
    },
    {
      img: AiOutlineThunderbolt,
      alt: "Fast Delivery",
      title: "Instant Access",
      description:
        "Purchase a Course and gain immediate access to all the materials. No waiting time.",
    },
    {
      img: RxUpdate,
      alt: "Updates",
      title: "Free Course Updates",
      description:
        "Enrolled learners receive free access to all Course updates and improvements.",
    },
    {
      img: CiMobile3,
      alt: "Technical",
      title: "Technical Requirements",
      description:
        "All you need is a stable internet connection and a compatible device to access our Courses.",
    },
    {
      img: RxLaptop,
      alt: "Immersive",
      title: "Immersive Learning",
      description:
        "Our digital Courses are designed to provide an engaging and interactive learning experience.",
    },
    {
      img: FaWheelchair,
      alt: "Accessible",
      title: "Accessible Anytime",
      description:
        "Access your Courses from anywhere, at any time, on any device. Learn at your own pace.",
    },
  ];

  const cardColor = [
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#d3e5f2_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#fedece_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#f7eab9_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#ccc4f4_100%)]",
  ];

  return (
    <>
      <Helmet>
        <title>Shipping & Delivery Information | Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content=" UnifiedMentor, EdTech, online learning, digital courses"
        />
        <link
          rel="canonical"
          href="https://unifiedmentor.com/shipping-and-delivery"
        />
        <meta
          name="description"
          content="At Kre8ly, all courses are digitally delivered through our LMS, ensuring quick and easy access to your learning materials with no physical shipping required."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      

      <main className="w-full ">
        <section
          id="hero"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="w-full bg-gradient-to-br from-brand via-brand-active to-brand-hover"
        >
          <PrivacyHeader
            br1="Join Our Team"
            br2="at Kre8ly"
            HeaderImage={HeaderImage}
            HeaderImage2={HeaderImage2}
            headingVariants={headingVariants}
            paragraphVariants={paragraphVariants}
            containerVariants={containerVariants}
            darkMode={darkMode}
            isPrivacyInView={isPrivacyInView}
            refs={refs}
            title="Shipping & Delivery Policy"
            subtitle="Reliable, timely, and transparent delivery of our services."
            desc="Kre8ly is committed to ensuring prompt and seamless delivery of our digital products and services. Since our offerings are primarily online, access details will be shared via email or platform notifications. For any assistance regarding service activation or delays, our support team is always ready to help."
          />
        </section>
        <section className="py-4 px-4 md:py-10 md:px-10">
          {/* <h2
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-lg md:text-3xl text-content font-bold text-center mb-6 dark:text-brand-fg"
          >
            Shipping and Delivery
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-xs md:text-sm mb-8 text-content text-center md:text-left"
          >
            Thank you for choosing Kre8ly for your online learning
            needs. As an EdTech platform, we deliver our Courses and learning
            materials digitally, which means there is no physical shipping
            involved. All our Courses are accessible online through our Learning
            Management System (LMS).
          </p> */}

          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-center md:mb-16 mb-4 "
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
              Shipping and Delivery
            </h2>
            <p className="text-lg text-content-secondary max-w-6xl mx-auto">
              Thank you for choosing Kre8ly for your online learning
              needs. As an EdTech platform, we deliver our Courses and learning
              materials digitally, which means there is no physical shipping
              involved. All our Courses are accessible online through our
              Learning Management System (LMS).
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Cards.map((card, index) => (
              <div
                key={index}
                className={`max-w-sm mx-auto shadow-lg rounded-xl overflow-hidden flex flex-col justify-center items-center gap-5 p-4 md:p-6 hover:scale-105 transition-all duration-300`}
              >
                <span className="p-4 rounded-full bg-gradient-to-br from-slate-900 to-sky-900">
                  <card.img className="text-xl md:text-4xl text-white " />
                </span>
                <h3 className="text-sm md:text-lg font-bold text-center text-content">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-center text-content dark:text-content-muted">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full bg-surface-sunken">
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="py-4 px-4 md:py-10 md:px-10"
          >
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-lg lg:text-2xl font-semibold text-content mb-4">
                Course Access and Delivery
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="ext-base md:text-lg mb-4  dark:text-white"
              >
                We may collect both personally identifiable information and
                non-personally identifiable information from you when you use
                our platform. This information may include but is not limited
                to:
              </p>
              <ul
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="list-disc list-inside  space-y-4 text-sm md:text-base  dark:text-white"
              >
                <li>
                  Your name, email address, and contact information provided
                  during account registration.
                </li>
                <li>
                  Information about your usage of the platform, including
                  Courses taken, progress, quizzes, and assignments completed.
                </li>
                <li>
                  Device and browser information, IP address, and other
                  technical data collected automatically when you access the
                  platform.
                </li>
                <li>
                  Feedback, reviews, and comments you submit to us regarding
                  Courses and the platform.
                </li>
              </ul>
            </div>
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="py-4 px-4 md:py-10 md:px-10"
          >
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h3 className="text-lg lg:text-2xl font-semibold text-content mb-4">
                  Access to Course Updates
                </h3>
                <p className="text-base md:text-lg mb-4  dark:text-white">
                  We regularly update our Course content to ensure that our
                  learners have access to the most up-to-date and relevant
                  information. As a registered user, you will receive free
                  access to any updates made to the Courses you have enrolled
                  in. These updates are automatically available to you without
                  any additional cost.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg lg:text-2xl font-semibold text-content mb-4">
                  Technical Requirements
                </h3>
                <p className="text-base md:text-lg mb-4  dark:text-white">
                  To access and enjoy our Courses seamlessly, you will need a
                  computer, tablet, or smartphone with a stable internet
                  connection. Our platform is compatible with major web
                  browsers, and we recommend using the latest versions for the
                  best experience.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg lg:text-2xl font-semibold text-content mb-4">
                  Customer Support
                </h3>
                <p className="text-base md:text-lg mb-4  dark:text-white">
                  Our dedicated support team is here to help with any technical
                  issues or questions about Course access. Contact us at:
                </p>
                <ul className="list-disc list-inside  space-y-4 text-sm md:text-base  dark:text-white">
                  <li>Email: info@kre8ly.com</li>
                  {/* <li>Phone: +9108645322947</li> */}
                  <li>Phone: +919518856261</li>
                </ul>
                <p className="text-base md:text-lg mb-4  dark:text-white">
                  We respond promptly to ensure your learning journey is smooth
                  and uninterrupted.
                </p>
              </div>
              <div>
                <h3 className="text-lg lg:text-2xl font-semibold text-content mb-4">
                  Refund Policy
                </h3>
                <p className="text-base md:text-lg mb-4  dark:text-white">
                  Please refer to our Cancellation and Refund Policy for
                  information on Course cancellations and refund eligibility. As
                  we provide instant access to Course materials upon purchase,
                  refund requests are subject to the terms outlined in the
                  policy.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-lg lg:text-2xl font-semibold text-content mb-4">
                  Contact Us
                </h3>
                <p className="text-base md:text-lg mb-4  dark:text-white">
                  If you have any further questions or need additional
                  information, please don't hesitate to contact us. We are
                  committed to providing you with an exceptional learning
                  experience and are always ready to assist you with any
                  concerns.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Query />
      </main>
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default ShippingDelivery;