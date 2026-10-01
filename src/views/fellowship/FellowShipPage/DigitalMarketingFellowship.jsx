import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
const BackGround = "/assets/fellowship/Background.webp";
import Footer from "../../../component/Footer";
import FellowshipHomeSection from "../../../component/FellowShip/FellowshipHomeSection";
const Ellipse = "/assets/Ellipse.webp";
const Certificates = "/assets/machineLearning/Certificates2.webp";
import {
  DigitalMarketingAnimationText,
  DigitalMarketingFaq,
  DigitalMarketingHeroSection,
  DigitalMarketingProjects,
  DigitalMarketingTechstack,
} from "../../../Utils/FellowShip/DigitalMarketing";
import TechStack from "../../../component/FellowShip/TechStack";
const MainImage = "/assets/fellowship/DigitalMarketing/DigitalMarketingFellowship.svg";
import IndustryExperts from "../../../component/FellowShip/IndustryExperts";
import { CarouselInfo } from "../../../Utils/MachineLearning/CarouselInfo";
import FutureDevelopmentComponent from "../../../component/FellowShip/FutureDevelopmentComponent";
import {
  ExtraFellowship,
  FellowshipHighlights,
} from "../../../Utils/FellowShip/CommonJson/Common";
import HallofFameCardTwo from "../../../component/HallofFameCardTwo";
import { NewHallOfFrameInfos } from "../../../Utils/HallOfFrameInfos";
import ProjectSection from "../../../component/FellowShip/ProjectSection";
import AccreditationFellowship from "../../../component/FellowShip/AccreditationFellowship";
import { Link } from "@/lib/router-compat";
import FaqForFellowship from "../../../component/FellowShip/FaqForFellowship";
import PerksOfInternship from "../../../component/FellowShip/PerksOfInternship";
import TextAnimation from "../../../component/FellowShip/TextAnimation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Query from "../../../component/Query/Query";
import AccredationSwiper from "../../../component/AccredationSwiper";
import FellowshipProjects from "../../../component/FellowshipProjects";
import FellowshipExtraSwiper from "../../../component/FellowshipExtraSwiper";
import MobileFooter from "../../../component/MobileFooter";
const Extra1 = "/assets/machineLearning/Extra1.webp";
const Extra2 = "/assets/machineLearning/Extra2.webp";
const Extra3 = "/assets/machineLearning/Extra3.webp";
const Extra4 = "/assets/machineLearning/Extra4.webp";

const Accreditation1 = "/assets/Accreditation/Iso_logo.png";
const Accreditation1_light = "/assets/Accreditation/Accreditation1_light.png";
const Accreditation2 = "/assets/Accreditation/mca_logo.png";
const Accreditation2_light = "/assets/Accreditation/Accreditation2_light.png";
const Accreditation3 = "/assets/Accreditation/Nasscom.png";
const Accreditation3_light = "/assets/Accreditation/Accreditation3_light.png";
const Accreditation4 = "/assets/Accreditation/Startup-india-logo1.png";
const Accreditation4_light = "/assets/Accreditation/Accreditation4_light.png";
import CourseRoadmap from "../../../component/MachineLearning/CourseRoadmap";
import {
  DigitalMarketingHomeInfo,
  roadmapSteps,
} from "../../../Utils/DigitalMarketing/DigitalMarketingHomeInfo";
import Module from "../../../component/MachineLearning/Module";
import {
  DigitalMarketingAdvanceModules,
  DigitalMarketingBasicModules,
} from "../../../Utils/DigitalMarketing/DigitalMarketingModule";
import PlacementSupport from "../../../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../../../Utils/MachineLearning/PlacementSupportInfo";
import BookYourSeat from "../../../component/MachineLearning/BookYourSeat";
import {
  DigitalMarketingSubHeadings,
  DigitalMarketingSubtitles1,
  DigitalMarketingSubtitles2,
} from "../../../Utils/DigitalMarketing/DigitalMarketingMovingTitles";
import ExtraSwiper from "../../../component/ExtraSwiper";
import Technologies from "../../../component/MachineLearning/Technologies";
import BuildSkill from "../../../component/MachineLearning/BuildSkill";
import Projects from "../../../component/MachineLearning/Projects";
import Faqs from "../../../component/MachineLearning/Faqs";
import FloatingEnrollBar from "../../../component/FloatingEnrollBar";
import Certificate from "../../../component/MachineLearning/Certificate";
import ProgramTimeline from "../../../component/MachineLearning/ProgramTimeline";
import ChatBot from "@/component/ChatBot/ChatBot";

const DigitalMarketingFellowship = ({ darkMode, setDarkMode, location }) => {
  const [closeForm, setCloseForm] = useState(false);
  const [moduleFormOpen, setModuleFormOpen] = useState(false);

  const [showCurriculum, setShowCurriculum] = useState(false);
  const handleModuleFormToggle = (isOpen) => {
    setModuleFormOpen(isOpen);
  };
  // Shared section styling for this page. Was hard-coded `text-content` with
  // a `text-content` counterpart (where the legacy `primary` token is
  // plain #fff); both are now single semantic tokens that theme themselves.
  // `text-justify` was also dropped — justified text on narrow mobile columns
  // opens large uneven word gaps and hurts readability.
  const sectionStylings = {
    section:
      "w-full h-full flex justify-center items-center gap-5 flex-col overflow-x-hidden",
    title:
      "text-base md:text-xl font-semibold text-content mb-4",
    subTitle: "text-content-secondary text-xs md:text-lg mb-4",
  };

  const swiperColor = [
    "bg-[linear-gradient(180deg,_#FFBE9D_0%,_#FFDFCF_100%)]",
    "bg-[linear-gradient(180deg,_#FEAECA_0%,_#FED7E5_100%)]",
    "bg-[linear-gradient(180deg,_#53EC8B_0%,_#B5FFD1_100%)]",
    "bg-[linear-gradient(180deg,_#A6B8E2_0%,_#D9DFF2_100%)]",
    "bg-[linear-gradient(180deg,_#FFBE9D_0%,_#FFDFCF_100%)]",
    "bg-[linear-gradient(180deg,_#FEAECA_0%,_#FED7E5_100%)]",
    "bg-[linear-gradient(180deg,_#53EC8B_0%,_#B5FFD1_100%)]",
    "bg-[linear-gradient(180deg,_#A6B8E2_0%,_#D9DFF2_100%)]",
    "bg-[linear-gradient(180deg,_#FFBE9D_0%,_#FFDFCF_100%)]",
    "bg-[linear-gradient(180deg,_#FEAECA_0%,_#FED7E5_100%)]",
    "bg-[linear-gradient(180deg,_#53EC8B_0%,_#B5FFD1_100%)]",
    "bg-[linear-gradient(180deg,_#A6B8E2_0%,_#D9DFF2_100%)]",
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
      <Helmet>
        <title>Digital Marketing Fellowship Program | Kre8ly</title>
        <meta
          name="description"
          content="Unlock your digital marketing career with our fellowship program at Kre8ly. Gain practical skills and mentorship with industry experts. Apply now!"
        />
        <meta
          name="keywords"
          content="Digital marketing course, Digital marketing fellowship, Digital marketing program, Digital marketing training, Digital marketing mentorship, Online digital marketing course, Digital marketing certification, Digital marketing skills development"
        />
        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/fellowship/digital-marketing"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="flex flex-col w-full min-h-screen">
        <main className="flex-grow gap-5 overflow-hidden">
          <section
            id="hero"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} `}
          >
            <FellowshipHomeSection PageDetails={DigitalMarketingHeroSection} />
          </section>

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} container mx-auto`}>
            <h5
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className={`${sectionStylings?.title}`}
              style={{
                lineHeight: "1.5em",
              }}
            >
              Our Accreditation
            </h5>
            <AccredationSwiper />
            <AccreditationFellowship />
          </section> */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
            className="w-full h-full flex flex-col items-center justify-center text-center  relative pb-3 md:my-20"
          >
            <div className="absolute md:-top-32 w-[250px] md:w-[450px] -left-10 select-none blur-md  z-10">
              {/* <figure>
                <img src={Ellipse} alt="Ellipse" />
              </figure> */}
            </div>
            {/* <h3
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-delay="0"
              className="text-lg md:text-3xl text-content font-semibold text-center mb-10"
            >
              Our Accreditation
            </h3> */}
            <AccredationSwiper />
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

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} container mx-auto`}>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col justify-center items-center">
              {" "}
              <h2
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`${sectionStylings?.title}`}>
                Technologies & Tools You Will Learn
              </h2>
              <p className={`${sectionStylings?.subTitle}`}>
                Master cutting-edge technologies and tools, including HTML, CSS,
                JavaScript, Python, SQL, and more.
              </p>
            </div>

            <TechStack
              TechStacksArray={DigitalMarketingTechstack}
              MainImage={MainImage}
            />
          </section> */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 bg-surface-sunken"
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
              varient={"digital-marketing"}
              courseName={"Digital Marketing Fellowship Roadmap"}
            />
          </section>

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section}`}
            style={{
              backgroundImage: `url(${BackGround})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex  gap-5 flex-col justify-center items-center">
              <h2
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`${sectionStylings?.title}`}>
                Meet Our Industry Experts
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`text-content-secondary text-base sm:text-xl  text-center w-full md:w-[90%] mx-auto xl:w-[70%]`}
                style={{
                  lineHeight: 1.6,
                }}
              >
                Learn Web Development, Data Science, Digital Marketing, Machine
                Learning, and UI/UX Design from experts. Master skills and
                accelerate your career!
              </p>
            </div>
            <div
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 container mx-auto">
              <IndustryExperts
                CarouselInfo={CarouselInfo}
                varient={"digital-marketing"}
              />
            </div>
            <hr className="w-1/2 md:w-1/4 mt-2 bg-white/50 mx-auto" />
          </section> */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            <Module
              BasicModules={DigitalMarketingBasicModules}
              AdvanceModules={DigitalMarketingAdvanceModules}
              varient={"DigitalMarketing"}
              showCurriculum={showCurriculum}
              setShowCurriculum={setShowCurriculum}
              onFormToggle={handleModuleFormToggle}
            />
            {/* <button
                data-aos="zoom-out-up"
                data-aos-delay="0"
                data-aos-duration="800"
                onClick={handleDownloadFile}
                className="hidden border border-line-strong hover:bg-surface-sunken gap-2 -z-10 dark:hover:text-content hover:bg-surface-sunken dark:bg-transparent dark:text-white text-content px-4  py-3 md:flex items-center font-bold w-fit justify-center rounded-md text-base transition-all duration-300"
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

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} md:gap-10 container mx-auto`}
          >
            <h4
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className={`${sectionStylings?.title}`}>
              Join Kre8ly Internship to Shape <br /> the future of
              development
            </h4>
            <FutureDevelopmentComponent swiperColor={swiperColor} />
          </section> */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`w-full h-full flex flex-col items-center justify-center text-center py-5 bg-surface-sunken pt-24 pb-16 px-6 ${
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
              Learning, and UI/UX Design from experts. Master skills and <br />{" "}
              accelerate your career!
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
                data-aos-duration="800"
                className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 "
              >
                <IndustryExperts
                  CarouselInfo={CarouselInfo}
                  varient={"digital-marketing"}
                />
              </div>
            </div>
          </section>

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} container mx-auto overflow-hidden`}>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col justify-center items-center gap-10">
              <TextAnimation texts={DigitalMarketingAnimationText} />
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full flex flex-col justify-center items-center gap-5">
                <h6
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className={`text-2xl md:text-3xl text-content font-semibold text-center`}
                >
                  Digital Marketing Most Promising Career
                </h6>
                <p
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className={`text-content-secondary sm:text-center w-full md:w-[80%] text-justify text-base md:text-xl `}
                >
                  The demand for Digital Marketers is increasing day by day.
                  Digital Marketing is ranked highly on Glassdoor’s “Top 25
                  highest-paying entry-level jobs.” As businesses shift to
                  online platforms, most product or service-based companies
                  require Digital Marketers, leading to a steady rise in demand
                  and average salaries each year.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full grid grid-cols-2 gap-5 mt-10">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`w-full h-48 shadow-customSoft shadow-slate-500 dark:bg-[#fff] p-4 flex justify-center items-center flex-col rounded-md`}>
                <p
                  className="text-content text-center  text-sm md:text-base mb-3">
                  Average Hike at Kre8ly
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="text-[#EAB308] text-2xl md:text-5xl font-bold">40%</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full shadow-customSoft shadow-slate-500 h-48 dark:bg-[#fff] p-4 flex justify-center items-center flex-col rounded-md">
                <p
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="text-content text-center text-sm md:text-base mb-3">
                  Average Salary of Past learners
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="text-[#3292FF] text-2xl md:text-5xl font-bold">6 to 8 Lakhs</p>
              </div>
            </div>
          </section> */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            <PlacementSupport
              PlacementSupportInfo={PlacementSupportInfo}
              location={location}
              varient={"DigitalMarketing"}
            />
          </section>

          {/* <section
            className={`${sectionStylings?.section} container mx-auto relative`}
          > */}
          {/* <img
              src={Ellipse}
              alt=""
              className="absolute dark:block hidden -top-10 w-[250px] md:w-[450px] -left-[35%] md:-left-[15%] select-none blur-md z-0"
            /> */}

          {/* <div
              className="w-full h-full relative z-10 ">
              <h6
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`${sectionStylings?.title} `}>
                Perks of internship at Kre8ly
              </h6>
            </div>

            <PerksOfInternship />
          </section> */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center gap-10 bg-surface-sunken"
          >
            <BookYourSeat
              Images={MainImage}
              altforImage={"Data Analyst Fellowship "}
              titles={DigitalMarketingAnimationText}
              subtitles1={DigitalMarketingSubtitles1}
              subtitles2={DigitalMarketingSubtitles2}
              subHeadings={DigitalMarketingSubHeadings}
              CourseName={"Digital Marketing Fellowship"}
              darkMode={darkMode}
            />
          </section>

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} container mx-auto`}
          >
            <div className="w-full h-full  ">
              <h6
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`${sectionStylings?.title}`}
              >
                Why Join Best Digital Marketing Fellowship <br /> in {location}{" "}
                at Kre8ly
              </h6>
            </div>
            <FellowshipExtraSwiper
              Extra={ExtraFellowship}
              SwiperColor={swiperColor}
            /> */}
          {/* <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2  w-full mx-auto shadow-lg gap-x-10 gap-y-20 mt-5">
              {ExtraFellowship?.map((highlight, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 h-full bg-gradient-to-br from-brand to-brand-active rounded-lg p-6 relative hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div
                    style={{
                      height: highlight.height,
                      width: highlight.width,
                    }}
                    className="rounded-full p-2 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <img
                      src={highlight.icon}
                      alt={highlight.title}
                      className="object-contain w-full h-full hover:scale-105 transition-all duration-300 cursor-pointer"
                    />
                  </div>

                  <motion.h4
                    variants={headingVariants}
                    className="text-primary text-base md:text-lg font-semibold leading-relaxed text-center mt-8">
                    {highlight.title}
                  </motion.h4>
                  <motion.p
                    variants={paragraphVariants}
                    className="text-secondary text-sm leading-relaxed text-center w-full md:w-[80%]">
                    {highlight.subtitle}
                  </motion.p>
                </div>
              ))}
            </motion.div> */}
          {/* </section> */}

          <section>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg md:text-3xl font-semibold text-content leading-tight relative z-20"
            ></div>
            <div className="w-full h-full pt-14">
              <PerksOfInternship />
            </div>
          </section>

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} container mx-auto`}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="flex flex-col gap-4 justify-center items-center"
            >
              <h6
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`${sectionStylings?.title}`}
              >
                {" "}
                150+ Success Stories
              </h6>
            </div>
            <HallofFameCardTwo hallofFameInfo={NewHallOfFrameInfos} />
          </section> */}

          <section>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full bg-surface-sunken md:mt-10 py-5 pt-24 pb-16 px-6"
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
                // SwiperColor={SwiperColor}
                CourseName={"Digital Marketing Fellowship"}
              />
            </div>
          </section>

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} container mx-auto overflow-hidden`}
          >
            <h5
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className={`${sectionStylings?.title}`}
              style={{
                lineHeight: "1.5em",
              }}
            >
              Projects You'll Build in Our <br />
              Digital Marketing Fellowship
            </h5> */}
          {/* <ProjectSection Project={DigitalMarketingProjects} /> */}
          {/* <FellowshipProjects Project={DigitalMarketingProjects} />
          </section> */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            {/* <h3
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-lg md:text-3xl font-bold text-content text-center"
              >
                Technologies & Tools You Will Learn
              </h3> */}
            <Technologies
              varient={"digital-marketing"}
              Technology={DigitalMarketingTechstack}
            />
          </section>

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`${sectionStylings?.section} container mx-auto overflow-hidden`}
          >
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="flex flex-col lg:flex-row items-center justify-between w-full gap-y-10"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full lg:w-[40%]"
              >
                <figure className="w-full  mx-auto">
                  <img
                    src={Certificates}
                    alt="Digital Marketing Fellowship Certificate- Kre8ly"
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                  />
                </figure>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full lg:w-[55%]"
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                >
                  <h2
                    className={`${sectionStylings?.title} !text-left text-base md:text-xl`}
                  >
                    Digital Marketing Fellowship Certificate
                  </h2>
                  <p
                    className="text-content-secondary mb-4 text-xs md:text-lg"
                    style={{
                      wordSpacing: "4px",
                      lineHeight: "1.8em",
                    }}
                  >
                    Digital Marketing Fellowship Certificate: Gain immersive,
                    skill-focused training to accelerate your career. Whether
                    aiming for a tech firm, joining a creative agency, or
                    freelancing, this certification equips you with the
                    expertise needed for professional success in Digital
                    Marketing
                  </p>
                  <p
                    className="text-xs md:text-lg text-content-secondary mx-auto md:mx-0 text-justify w-full md:w-[90%] mt-10"
                    style={{
                      wordSpacing: "4px",
                      lineHeight: "1.8em",
                    }}
                  >
                    We also offer Course in {location} and Best{" "}
                    <Link
                      to="/data-science"
                      className="underline text-content"
                    >
                      Data Science
                    </Link>{" "}
                    Certification in {location}.
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6 bg-surface-sunken"
          >
            {/* <h3
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="800"
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

          <section className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6">
            <BuildSkill />
          </section>

          <section className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6 bg-surface-sunken">
            <Projects
              Project={DigitalMarketingProjects}
              CourseName={"Digital Marketing Fellowship"}
              location={location}
            />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6"
          >
            <Certificate
              // Project={WebDevProjectInfo}
              CourseName={"Digital Marketing Fellowship"}
              location={location}
            />
          </section>

          {/* <section
            className={`${sectionStylings?.section} container mx-auto relative `}
          >
            <h6 className={`${sectionStylings?.title} relative z-10`}>
              Frequently Asked Questions
            </h6> */}
          {/* <img
              src={Ellipse}
              alt=""
              className="absolute top-5 hidden dark:block w-[250px] md:w-[450px] -left-[35%] md:-left-[15%] select-none blur-md z-0"
            /> */}
          {/* <div className="w-full md:w-10/12 relative z-10">
              <FaqForFellowship
                Faqs={DigitalMarketingFaq}
                darkMode={darkMode}
              />
            </div>
          </section> */}

          <section className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6 bg-surface-sunken">
            <ProgramTimeline />
          </section>

          {/* FAQ Section */}
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6"
          >
            {/* <img
              src={Ellipse}
              alt=""
              className="absolute top-5 w-[250px] md:w-[450px] -left-[35%] md:-left-[15%] select-none blur-md z-0 hidden dark:block"
            /> */}
            {/* <div className="w-full md:w-10/12 relative z-10"> */}
            <Faqs Faqs={DigitalMarketingFaq} darkMode={darkMode} />
            {/* </div> */}
          </section>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={DigitalMarketingHomeInfo}
        location={location}
        fellowship={true}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default DigitalMarketingFellowship;