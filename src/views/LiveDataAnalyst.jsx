import React, { useState } from "react";
import Footer from "../component/Footer";
import Home from "../component/MachineLearning/Home";
import CourseRoadmap from "../component/MachineLearning/CourseRoadmap";
import ApiRequest from "../Utils/Axios/Axios";
const LiveDataAnalystSVG = "/assets/LiveDataAnalyst.svg";
import toast, { Toaster } from "react-hot-toast";
import {
  WebDevHomeInfo,
  WebDevRoadMap,
  roadmapSteps,
} from "../Utils/WebDev/WebDevHomeInfo";
import Module from "../component/MachineLearning/Module";
import { Link } from "@/lib/router-compat";
// import { MdFileDownload } from "react-icons/md";
import {
  WebDevAdvanceModules,
  WebDevBasicModules,
} from "../Utils/WebDev/WebDevModule";
import Carousel from "../component/MachineLearning/Carousel";
import { CarouselInfo } from "../Utils/MachineLearning/CarouselInfo";
import BookYourSeat from "../component/MachineLearning/BookYourSeat";
const WebImage = "/assets/WebDev/Webimg.png";
import {
  WebDevSubHeadings,
  WebDevSubtitles1,
  WebDevSubtitles2,
  WebDevTitles,
  CourseName,
} from "../Utils/WebDev/WebdevMovingTitle";
import Technologies from "../component/MachineLearning/Technologies";
import { WebDevTechnology } from "../Utils/WebDev/WebDevTech";
import HallofFameCardTwo from "../component/HallofFameCardTwo";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import BuildSkill from "../component/MachineLearning/BuildSkill";
import { Userdata } from "../Utils/MachineLearning/BuildSkill";
import Projects from "../component/MachineLearning/Projects";
import { WebDevProjectInfo } from "../Utils/WebDev/WebDevProjectInfo";
import ProgramTimeline from "../component/MachineLearning/ProgramTimeline";
import Faqs from "../component/MachineLearning/Faqs";
import { WebDevFaqs } from "../Utils/Faqs/WebDevFaqs";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import PlacementSupport from "../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../Utils/MachineLearning/PlacementSupportInfo";
import Forms from "../component/Forms/Forms";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Snowfall from "react-snowfall";
import IndustryExperts from "../component/FellowShip/IndustryExperts";
import ExtraSwiper from "../component/ExtraSwiper";
const Extra1 = "/assets/machineLearning/Extra1.webp";
const Extra2 = "/assets/machineLearning/Extra2.webp";
const Extra3 = "/assets/machineLearning/Extra3.webp";
const Extra4 = "/assets/machineLearning/Extra4.webp";
import MobileFooter from "../component/MobileFooter";
const Accreditation1 = "/assets/Accreditation/Iso_logo.png";
const Accreditation1_light = "/assets/Accreditation/Accreditation1_light.png";
const Accreditation2 = "/assets/Accreditation/mca_logo.png";
const Accreditation2_light = "/assets/Accreditation/Accreditation2_light.png";
const Accreditation3 = "/assets/Accreditation/Nasscom.png";
const Accreditation3_light = "/assets/Accreditation/Accreditation3_light.png";
const Accreditation4 = "/assets/Accreditation/Startup-india-logo1.png";
const Accreditation4_light = "/assets/Accreditation/Accreditation4_light.png";
import AccredationSwiper from "../component/AccredationSwiper";
import FloatingEnrollBar from "../component/FloatingEnrollBar";

import PerksOfInternship from "../component/FellowShip/PerksOfInternship";
import TextAnimation from "../component/FellowShip/TextAnimation";
import { FellowshipHighlights } from "../Utils/FellowShip/CommonJson/Common";
import FellowshipProjects from "../component/FellowshipProjects";
import FellowshipExtraSwiper from "../component/FellowshipExtraSwiper";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Certificate from "../component/MachineLearning/Certificate";
import { DataAnalystHomeInfo } from "../Utils/LiveDataAnalyst/DataAnalystHomeInfo";
import ChatBot from "@/component/ChatBot/ChatBot";

const LiveDataAnalyst = ({ darkMode, setDarkMode, location }) => {
  const [closeForm, setCloseForm] = useState(false);
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [moduleFormOpen, setModuleFormOpen] = useState(false);

  // --- State for the new form ---
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [background, setBackground] = useState("");
  const [occupation, setOccupation] = useState("");
  const [terms, setTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // ------------------------------

  const handleModuleFormToggle = (isOpen) => {
    setModuleFormOpen(isOpen);
  };

  const handleDownloadFile = () => {
    setCloseForm(true);
  };

  // --- Form submission handler ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // This formData object matches the backend controller's expectations
    const formData = {
      "full-name": fullName,
      email: email,
      phone: phone,
      background: background,
      occupation: occupation,
      terms: terms,
    };

    try {
      // --- THIS BLOCK IS UPDATED ---
      // Using ApiRequest.post and awaiting its response
      const response = await ApiRequest.post(
        "/liveDataAnalyst/LiveDataAnalystEnquiry",
        formData
      );

      setIsLoading(false);

      // Axios responses have a 'status' property and data is in 'response.data'
      if (response.status === 200 || response.status === 201) {
        // Handle success
        toast.success("Thank you! We will be in touch soon."); // --- USE TOAST ---
        // --- RESET ALL FORM STATES ---
        setFullName("");
        setEmail("");
        setPhone("");
        setBackground("");
        setOccupation("");
        setTerms(false);
      } else {
        // Handle other successful-but-not-ideal statuses if any
        toast.error(response.data.msg || "An unexpected error occurred."); // --- USE TOAST ---
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Form submission error:", error);

      // Axios errors often have the response on 'error.response'
      const errorMsg =
        error.response?.data?.msg || "An error occurred. Please try again.";

      toast.error(errorMsg); // --- USE TOAST ---
    }
    // --- END OF UPDATE ---
  };
  // ---------------------------------

  const SwiperColor = [
    "linear-gradient(90deg, hsl(var(--k-deco-1a)) 0%, hsl(var(--k-deco-1b)) 100%)",
    "linear-gradient(90deg, hsl(var(--k-deco-2a)) 0%, hsl(var(--k-deco-2b)) 100%)",
    "linear-gradient(90deg, hsl(var(--k-deco-3a)) 0%, hsl(var(--k-deco-3b)) 100%)",
    "linear-gradient(90deg, hsl(var(--k-deco-4a)) 0%, hsl(var(--k-deco-4b)) 100%)",
  ];

  const Extra = [
    {
      icon: Extra1,
      icon_alt: "Professional Certificate",
      title: "Professional Certificate",
      subtitle: `Become a certified Web Development  with an official certificate from Kre8ly.`,
      link: "#certificate",
      target: "No",
    },
    {
      icon: Extra2,
      icon_alt: "Resume Builder",
      title: "Resume Builder",
      subtitle:
        "Get dedicated career guidance and mentoring from our mentors to enhance your resume using our builder.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes",
    },
    {
      icon: Extra3,
      icon_alt: "Resume Builder",
      title: "Job Portal",
      subtitle:
        "Get dedicated career guidance and mentoring from our mentors to improve your job prospects on our portal.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes",
    },
    {
      icon: Extra4,
      icon_alt: "Chance to work on real project",
      title: "Chance to work on real project",
      subtitle:
        "Get a chance to work on real project in Kre8ly or any other real projects while learning!",
      link: "#projects",
      target: "no",
    },
  ];

  return (
    <>
      <Toaster position="top-center" />
      <Helmet>
        {/* Page Title */}
        <title>Best Live Data Analyst Course | Kre8ly</title>
        {/* Meta Keywords */}
        <meta
          name="keywords"
          content={`Live Data Analyst Course in ${location}, Data Analyst Course Certificate, Data Analyst Course with Placement, Data Analyst Course in ${location}, Data Analyst Course in ${location}, Best Data Analyst Course in ${location}, best online Data Analyst course, best web development course,web application development course,web development courses with certificates,full stack web development course,full stack web development course online,full stack web development online course,web development certification courses,best full stack development course,best full stack web development course,web development courses with placement,web developer course for beginners,web development training course,learn web development for beginners,complete web development course,full stack development course with placement,full stack developer course with placement`}
        />

        {/* Meta Description */}
        <meta
          name="description"
          content={`Join the Best Online Web Development Course and master coding, web design, and full-stack development with expert guidance and practical projects. Enroll Now!`}
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://www.kre8ly.com/web-development"
        />

        {/* Meta Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content={`Best Full Stack Web Development Course in ${location} with Placement`}
        />
        <meta
          property="og:description"
          content={`This Best Full Stack Web Development Course in ${location} with Placement goes beyond just coding. It teaches how to make attractive and useful interfaces.`}
        />
      </Helmet>

      {/* <Navbar /> */}
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow flex items-center justify-center relative">
          {/* <Snowfall
            color="#fff"
            snowflakeCount={400}
            style={{
              zIndex: 20,
            }}
            speed={[0, 0.5]}
            wind={[0, 0.5]}
          /> */}
          <div className="w-full ">
            <section
              id="hero"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className=" w-full h-full bg-transparent relative overflow-hidden"
            >
              {/* <img
                src={Ellipse}
                alt="Ellipse"
                className="absolute -top-16 w-[250px] md:w-[450px] -left-[12rem] md:-left-20 z-10 hidden dark:block"
              /> */}
              {/* <div className="p-4 sm:p-6 lg:p-8"> */}
              <Home info={DataAnalystHomeInfo} location={location} />
              {/* <Home info={WebDevHomeInfo} location={location} /> */}
              {/* </div> */}
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-delay="0"
              className="w-full h-full px-2 md:px-6 py-10 md:py-20"
            >
              {/* <div className="absolute md:-top-32 w-[250px] md:w-[450px] -left-10 select-none blur-md  z-10"> */}
              {/* <figure>
                <img src={Ellipse} alt="Ellipse" />
              </figure> */}
              {/* </div> */}
              {/* <h3
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-delay="0"
              className="text-lg md:text-3xl text-content font-semibold text-center mb-10"
            >
              Our Accreditation
            </h3> */}
              <div className="flex items-center justify-center">
                <AccredationSwiper />
              </div>
              <div
                className={`md:grid hidden grid-cols-4 gap-4 md:gap-6 relative z-20 w-full`}
              >
                <div
                  // data-aos="flip-right"
                  // data-aos-delay="0"
                  // data-aos-duration="800"
                  className="flex justify-center items-center rounded-lg w-full max-w-xs p-2  max-h-20 md:max-h-24 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <figure className="w-1/2 md:w-1/3">
                    <img
                      src={darkMode ? Accreditation1_light : Accreditation1}
                      alt="ISO 9001 Certified – Approved by MSME"
                      className="w-full"
                    />
                  </figure>
                </div>

                <div
                  // data-aos="flip-right"
                  // data-aos-delay="0"
                  // data-aos-duration="800"
                  className="flex items-center justify-center rounded-lg text-primary w-full max-w-xs max-h-20  md:max-h-24 p-2 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <figure className="w-1/2">
                    <img
                      src={darkMode ? Accreditation2_light : Accreditation2}
                      alt="Ministry of Corporate Affairs, Government of India"
                      className="w-full "
                    />
                  </figure>
                </div>
                <div
                  // data-aos="flip-right"
                  // data-aos-delay="0"
                  // data-aos-duration="800"
                  className="flex justify-center items-center rounded-lg w-full max-w-xs p-2  max-h-20 md:max-h-24 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <figure className="flex items-center justify-center">
                    <img
                      src={darkMode ? Accreditation3_light : Accreditation3}
                      alt="Startup India Initiative"
                      className="w-full"
                    />
                  </figure>
                </div>
                <div
                  // data-aos="flip-right"
                  // data-aos-delay="0"
                  // data-aos-duration="800"
                  className="flex justify-center items-center rounded-lg w-full max-w-xs p-2  max-h-20 md:max-h-24 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <figure className="flex items-center justify-center">
                    <img
                      src={darkMode ? Accreditation4_light : Accreditation4}
                      alt="NASSCOM Membership Certificate – Kre8ly"
                      className="w-full"
                    />
                  </figure>
                </div>
              </div>
            </section>

            {/* //LIVEDATAANALYST - SECTION MODIFIED FOR API CALL AND NEW LAYOUT */}
            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full px-2 md:px-6 py-10 md:py-20 bg-canvas"
            >
              {/* This container is the white card, grid, and clips the image */}
              <div className="w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-lg overflow-hidden">
                {/* Left Side: Image + Text Overlay */}
                <div className="w-full h-full bg-[#1A2641] text-white p-8 md:p-12 flex flex-col justify-center">
                  {" "}
                  {/* Updated background color here */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Join India's #1 Most Affordable Online Live Class for Data
                    Anlyasis
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Fill out this form to get Career Counselling Call back from
                    us
                  </p>
                  <img
                    src={LiveDataAnalystSVG}
                    alt="Live Data Analyst"
                    className="w-full"
                  />
                </div>

                {/* Right Side: Form */}
                <div className="p-8 md:p-12 bg-surface">
                  <h3 className="text-2xl font-bold text-content mb-6 text-center">
                    Get FREE Career Counselling Call
                  </h3>
                  {/* --- MODIFIED FORM TAG --- */}
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="full-name"
                        className="sr-only" // Hidden label for better accessibility with placeholder
                      >
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          autoComplete="name"
                          required
                          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-line text-content focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter Name *"
                          value={fullName} // --- BIND STATE ---
                          onChange={(e) => setFullName(e.target.value)} // --- BIND STATE ---
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="sr-only" // Hidden label for better accessibility with placeholder
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-line text-content focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter Email Address *"
                          value={email} // --- BIND STATE ---
                          onChange={(e) => setEmail(e.target.value)} // --- BIND STATE ---
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="sr-only" // Hidden label for better accessibility with placeholder
                      >
                        Phone Number
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-line bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm">
                          +91🇮🇳
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          required
                          className="flex-1 block w-full px-4 py-3 rounded-none rounded-r-md bg-gray-100 dark:bg-gray-700 border-line text-content focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter Mobile Number *"
                          value={phone} // --- BIND STATE ---
                          onChange={(e) => setPhone(e.target.value)} // --- BIND STATE ---
                        />
                      </div>
                    </div>
                    {/* Placeholder for Background dropdown */}
                    <div className="relative">
                      {" "}
                      {/* --- ADDED RELATIVE --- */}
                      <label htmlFor="background" className="sr-only">
                        Background
                      </label>
                      <select
                        id="background"
                        name="background"
                        required
                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-line text-content focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                        value={background} // --- BIND STATE ---
                        onChange={(e) => setBackground(e.target.value)} // --- BIND STATE ---
                      >
                        <option value="">Background *</option>
                        <option value="student">Student</option>
                        <option value="professional">Professional</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-content-secondary">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>

                    {/* Placeholder for Occupation dropdown */}
                    <div className="relative">
                      {" "}
                      {/* --- ADDED RELATIVE --- */}
                      <label htmlFor="occupation" className="sr-only">
                        Occupation
                      </label>
                      <select
                        id="occupation"
                        name="occupation"
                        required
                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 border-line text-content focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                        value={occupation} // --- BIND STATE ---
                        onChange={(e) => setOccupation(e.target.value)} // --- BIND STATE ---
                      >
                        <option value="">Occupation *</option>
                        <option value="employed">Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-content-secondary">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center">
                      <input
                        id="terms-checkbox"
                        name="terms-checkbox"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={terms} // --- BIND STATE ---
                        onChange={(e) => setTerms(e.target.checked)} // --- BIND STATE ---
                      />
                      <label
                        htmlFor="terms-checkbox"
                        className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                      >
                        I agree to receive information regarding my submitted
                        application by signing up on CloudyML*
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50"
                        disabled={isLoading} // --- ADDED DISABLED STATE ---
                      >
                        {isLoading ? "Submitting..." : "Submit"}{" "}
                        {/* --- ADDED LOADING TEXT --- */}
                      </button>
                    </div>

                    {/* --- REMOVED IN-LINE FORM MESSAGE --- */}
                  </form>
                </div>
              </div>
            </section>
            {/* END OF NEW SECTION */}

            {/* <section className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5">
            <Slider />
          </section> */}
            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
            >
              {/* <h2
                data-aos="zoom-out"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-lg md:text-3xl font-semibold text-content"
              >
                {`${CourseName}`} Roadmap
              </h2> */}
              {/* <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                {`${CourseName}`} Roadmap
              </h2> */}
              {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our structured 8-step process ensures your project is delivered
                on time, within budget, and exceeds your expectations.
              </p> */}
              <CourseRoadmap
                ModuleInfo={roadmapSteps}
                roadmapSteps={roadmapSteps}
                varient={"WebDev"}
                courseName={CourseName}
              />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 px-2 md:px-6 py-10 md:py-20"
            >
              <Module
                BasicModules={WebDevBasicModules}
                AdvanceModules={WebDevAdvanceModules}
                showCurriculum={showCurriculum}
                setShowCurriculum={setShowCurriculum}
                onFormToggle={handleModuleFormToggle}
              />
              {/* <button
                data-aos="zoom-out-up"
                data-aos-delay="0"
                data-aos-duration="800"
                onClick={handleDownloadFile}
                className="hidden border border-line-strong hover:bg-surface-sunken gap-2 -z-10 dark:hover:text-content hover:bg-surface-sunken dark:bg-transparent dark:text-white text-[#1D2B4DARK-BG-LOGO.svg:1:3004:
(404)
5] px-4  py-3 md:flex items-center font-bold w-fit justify-center rounded-md text-base transition-all duration-300"
              >
                Download Detailed Curriculum
                <FaCloudDownloadAlt size={25} />
              </button> */}
              {closeForm && (
                <div className="fixed  top-0 left-0 w-full h-full  flex items-center justify-center bg-black/50 md:data-aos=zoom-out-up md:data-aos-delay=0 md:data-aos-duration=800">
                  <Forms
                    setCloseForm={setCloseForm}
                    setShowCurriculum={setShowCurriculum}
                  />
                </div>
              )}
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className={`w-full h-full flex flex-col items-center justify-center text-center bg-surface-sunken px-2 md:px-6 py-10 md:py-20 ${
                moduleFormOpen ? "mt-24" : ""
              }`}
            >
              {/* <h3
                data-aos="zoom-in-down"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-lg md:text-3xl font-semibold text-content text-center"
              >
                Meet Our Industry Experts
              </h3>
              <p
                data-aos="zoom-in-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-sm hidden md:block text-content-secondary w-full "
                style={{
                  lineHeight: "2.5",
                }}
              >
                Learn Web Development, Data Science, Digital Marketing, Machine
                Learning, and UI/UX Design from experts. Master skills and{" "}
                <br /> accelerate your career!
              </p> */}

              <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                Meet Our Industry Experts
              </h2>
              <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                Learn Web Development, Data Science, Digital Marketing, Machine
                Learning, and UI/UX Design from experts. Master skills and{" "}
                <br /> accelerate your career!
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
              >
                {/* <Carousel profileData={CarouselInfo} /> */}
                <div
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  data-aos-duration="8E: 0: 0"
                  className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 "
                >
                  <IndustryExperts
                    CarouselInfo={CarouselInfo}
                    varient={"web-dev"}
                  />
                </div>
              </div>
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 px-2 md:px-6 py-10 md:py-20"
            >
              <PlacementSupport
                PlacementSupportInfo={PlacementSupportInfo}
                location={location}
              />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
            >
              <BookYourSeat
                Images={WebImage}
                altforImage={"Web Devlopment Online Course"}
                titles={WebDevTitles}
                subtitles1={WebDevSubtitles1}
                subtitles2={WebDevSubtitles2}
                subHeadings={WebDevSubHeadings}
                CourseName={CourseName}
                darkMode={darkMode}
              />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg md:text-3xl text-content leading-tight relative z-20 px-2 md:px-6 py-10 md:py-20"
            >
              <div className="w-full h-full">
                <PerksOfInternship />
              </div>
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
            >
              {/* <h3
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="text-lg md:text-3xl font-bold text-content text-center"
                >
                  Why Join Best Web Development Course in at Kre8ly
                </h3> */}
              <ExtraSwiper
                Extra={Extra}
                SwiperColor={SwiperColor}
                CourseName={CourseName}
              />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 px-2 md:px-6 py-10 md:py-20"
            >
              {/* <h3
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-lg md:text-3xl font-bold text-content text-center"
              >
                Technologies & Tools You Will Learn
              </h3> */}
              <Technologies varient={"WebDev"} Technology={WebDevTechnology} />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
            >
              {/* <h3
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="8ANALYST.svg:1:21501:
(404)
00"
                className="text-sm md:text-3xl font-bold text-content text-center"
              >
                150+ Success Stories
              </h3> */}
              <div className="text-center mb-4">
                <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                  150+ Success Stories
                </h2>
                <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                  Real experiences from learners who achieved their goals and
                  transformed careers with our guidance and support.
                </p>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center py-5">
                <HallofFameCardTwo hallofFameInfo={NewHallOfFrameInfos} />
              </div>
            </section>

            <section className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20">
              <BuildSkill />
            </section>

            <section className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20 bg-surface-sunken">
              <Projects
                Project={WebDevProjectInfo}
                CourseName={CourseName}
                location={location}
              />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20"
            >
              <Certificate
                Project={WebDevProjectInfo}
                CourseName={CourseName}
                location={location}
              />
            </section>

            <section className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20 bg-surface-sunken">
              <ProgramTimeline />
            </section>
            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20"
            >
              <Faqs Faqs={WebDevFaqs} darkMode={darkMode} />
            </section>
          </div>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={DataAnalystHomeInfo}
        location={location}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default LiveDataAnalyst;

