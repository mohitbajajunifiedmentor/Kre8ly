import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import Footer from "../../../component/Footer";
const BackGround = "/assets/fellowship/Background.webp";
import FellowshipHomeSection from "../../../component/FellowShip/FellowshipHomeSection";
const Ellipse = "/assets/Ellipse.webp";

import TechStack from "../../../component/FellowShip/TechStack";
const MainImage =
  "/assets/fellowship/BusinessAnalyst/BusinessAnalystFellowship.svg";
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
import FaqForFellowship from "../../../component/FellowShip/FaqForFellowship";
import { Link } from "@/lib/router-compat";
const Certificates = "/assets/machineLearning/Certificates2.webp";
import AccreditationFellowship from "../../../component/FellowShip/AccreditationFellowship";
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
import {
  BusinessAnalystAnimationText,
  BusinessAnalystFaq,
  BusinessAnalystHeroSection,
  BusinessAnalystProjects,
  BusinessAnalystTechStack,
  roadmapSteps,
} from "../../../Utils/BusinessAnalyst/BusinessAnalystHomeInfo";
const Accreditation1 = "/assets/Accreditation/Iso_logo.png";
const Accreditation1_light = "/assets/Accreditation/Accreditation1_light.png";
const Accreditation2 = "/assets/Accreditation/mca_logo.png";
const Accreditation2_light = "/assets/Accreditation/Accreditation2_light.png";
const Accreditation3 = "/assets/Accreditation/Nasscom.png";
const Accreditation3_light = "/assets/Accreditation/Accreditation3_light.png";
const Accreditation4 = "/assets/Accreditation/Startup-india-logo1.png";
const Accreditation4_light = "/assets/Accreditation/Accreditation4_light.png";
import CourseRoadmap from "../../../component/MachineLearning/CourseRoadmap";
import Module from "../../../component/MachineLearning/Module";
import {
  BusinessAnalystAdvanceModules,
  BusinessAnalystBasicModules,
} from "../../../Utils/BusinessAnalyst/BusinessAnalystModule";
import PlacementSupport from "../../../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../../../Utils/MachineLearning/PlacementSupportInfo";
import BookYourSeat from "../../../component/MachineLearning/BookYourSeat";
import {
  BusinessAnalystSubHeadings,
  BusinessAnalystSubtitles1,
  BusinessAnalystSubtitles2,
} from "../../../Utils/BusinessAnalyst/BusinessAnalystMovingTitles";
import ExtraSwiper from "../../../component/ExtraSwiper";
import Technologies from "../../../component/MachineLearning/Technologies";
import BuildSkill from "../../../component/MachineLearning/BuildSkill";
import Projects from "../../../component/MachineLearning/Projects";
import Faqs from "../../../component/MachineLearning/Faqs";
import FloatingEnrollBar from "../../../component/FloatingEnrollBar";
import Certificate from "../../../component/MachineLearning/Certificate";
import ProgramTimeline from "../../../component/MachineLearning/ProgramTimeline";
import ChatBot from "@/component/ChatBot/ChatBot";
import { FiCheckCircle } from "react-icons/fi";
import PlacementSupportSwiper from "@/component/PlacementSupportSwiper";
import Reveal from "@/component/ui/Reveal";
const BusinessAnalystFellowship = ({ darkMode, setDarkMode, location }) => {
  const [closeForm, setCloseForm] = useState(false);
  const [moduleFormOpen, setModuleFormOpen] = useState(false);

  const [showCurriculum, setShowCurriculum] = useState(false);
  const handleModuleFormToggle = (isOpen) => {
    setModuleFormOpen(isOpen);
  };
  const sectionStylings = {
    section:
      "w-full h-full flex justify-center items-center gap-5 flex-col overflow-x-hidden",
    title: "text-base md:text-xl font-semibold text-content mb-4",
    subTitle: "text-content-secondary text-xs md:text-lg mb-4",
  };

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Ref for each section to trigger animations when in view
  const refs = {
    hero: useRef(null),
    techStack: useRef(null),
    experts: useRef(null),
    future: useRef(null),
    career: useRef(null),
    perks: useRef(null),
    whyJoin: useRef(null),
    success: useRef(null),
    projects: useRef(null),
    accreditation: useRef(null),
    certificate: useRef(null),
    faq: useRef(null),
  };

  // UseInView hooks for each section
  const isHeroInView = useInView(refs.hero, { once: true, margin: "-50px" });
  const isTechStackInView = useInView(refs.techStack, {
    once: true,
    margin: "-50px",
  });
  const isExpertsInView = useInView(refs.experts, {
    once: true,
    margin: "-50px",
  });
  const isFutureInView = useInView(refs.future, {
    once: true,
    margin: "-50px",
  });
  const isCareerInView = useInView(refs.career, {
    once: true,
    margin: "-50px",
  });
  const isPerksInView = useInView(refs.perks, { once: true, margin: "-50px" });
  const isWhyJoinInView = useInView(refs.whyJoin, {
    once: true,
    margin: "-50px",
  });
  const isSuccessInView = useInView(refs.success, {
    once: true,
    margin: "-50px",
  });
  const isProjectsInView = useInView(refs.projects, {
    once: true,
    margin: "-50px",
  });
  const isAccreditationInView = useInView(refs.accreditation, {
    once: true,
    margin: "-50px",
  });
  const isCertificateInView = useInView(refs.certificate, {
    once: true,
    margin: "-50px",
  });
  const isFaqInView = useInView(refs.faq, { once: true, margin: "-50px" });

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
      subtitle:
        "Finish the fellowship and receive a Kre8ly certificate in business analysis.",
      link: "#certificate",
      target: "No",
    },
    {
      icon: Extra2,
      icon_alt: "Resume Builder",
      title: "Resume Builder",
      subtitle:
        "Shape your resume with the builder and guidance from your mentors.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes",
    },
    {
      icon: Extra3,
      icon_alt: "Job Portal",
      title: "Job Portal",
      subtitle:
        "Apply to openings from our hiring partners without leaving the platform.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes",
    },
    {
      icon: Extra4,
      icon_alt: "Chance to Work on Real Projects",
      title: "Chance to Work on Real Projects",
      subtitle: "Work on live projects at Kre8ly or elsewhere while you study.",
      link: "#projects",
      target: "no",
    },
  ];

  const eligibilityPoints = [
    "A final-year student or recent graduate (BCom, BBA, BCA, BSc, BTech or MBA) looking for a first role.",
    "Living in a city like Raipur, Visakhapatnam, Dehradun or Mysuru, where internships in this field are hard to find.",
    "Working in sales, support or operations and already know how a business runs day to day.",
    "Starting without a technical background. The program is beginner friendly.",
  ];
  return (
    <>
      <Helmet>
        <title> Business Analyst Internship Program Online | Kre8ly</title>

        <meta
          name="description"
          content="Learn business analysis online with mentors: SQL, Excel, Power BI, real projects and a certificate. For freshers across India. From ₹399."
        />

        <meta
          name="keywords"
          content="Business Analyst fellowship program, Business Analyst training, Business Analyst mentorship, Business Analyst certification, online Business Analyst course, Business Analyst program, Business Analyst skills, Business Analyst career development"
        />

        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/fellowship/business-analyst"
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
            className={`${sectionStylings?.section}`}
          >
            <FellowshipHomeSection PageDetails={BusinessAnalystHeroSection} />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center  relative pb-3 md:my-20"
          >
            <div className="absolute md:-top-32 w-[250px] md:w-[450px] -left-10 select-none blur-md  z-10"></div>
            <AccredationSwiper />
            <div
              className={`md:grid hidden grid-cols-4 gap-4 md:gap-6 relative z-20 w-full`}
            >
              <div className="flex justify-center items-center rounded-lg w-full max-w-xs p-2  max-h-20 md:max-h-24 hover:scale-105 transition-all duration-300 ease-in-out">
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

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 bg-surface-sunken"
          >
            <CourseRoadmap
              ModuleInfo={roadmapSteps}
              roadmapSteps={roadmapSteps}
              varient={"BusinessAnalystFellowship"}
              courseName={"How Our Business Analyst Internship Works"}
            />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            <Module
              BasicModules={BusinessAnalystBasicModules}
              AdvanceModules={BusinessAnalystAdvanceModules}
              varient={"BusinessAnalystFellowship"}
              showCurriculum={showCurriculum}
              setShowCurriculum={setShowCurriculum}
              onFormToggle={handleModuleFormToggle}
            />
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
            className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-canvas text-content"
          >
            <div className="mx-auto max-w-6xl">
              <div className="group rounded-2xl border border-line bg-surface p-8 sm:p-10 lg:p-12 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-lg">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-sunken px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                  <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                  Eligibility &amp; Profile Fit
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-content leading-tight">
                  Business Analyst Internship for Freshers: Who Can Join
                </h2>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-content-secondary">
                  Business analysis rewards clear thinking and good
                  communication as much as technical depth, which makes it a
                  friendly first step into corporate work. The fellowship suits
                  you if you are:
                </p>

                <ul className="mt-6 space-y-4">
                  {eligibilityPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-subtle text-brand">
                        <FiCheckCircle className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed text-content-secondary">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`w-full h-full flex flex-col items-center justify-center text-center py-5 bg-surface-sunken pt-24 pb-16 px-6 ${
              moduleFormOpen ? "mt-24" : ""
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
              Meet Our Industry Experts
            </h2>
            <p className="text-lg text-content-secondary max-w-2xl mx-auto">
              Learn from mentors who have worked on business analysis projects
              and can explain how it's done in practice.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
            >
              <div
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 "
              >
                <IndustryExperts
                  CarouselInfo={CarouselInfo}
                  varient={"business-analyst"}
                />
              </div>
            </div>
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            <Reveal direction="up">
              <PlacementSupport
                PlacementSupportInfo={PlacementSupportInfo}
                location={location}
                varient={"BusinessAnalystFellowship"}
              />
            </Reveal>
            <Reveal direction="up">
              <PlacementSupportSwiper
                PlacementSupportInfo={PlacementSupportInfo}
                darkMode={darkMode}
              />
            </Reveal>
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center gap-10 bg-surface-sunken"
          >
            <BookYourSeat
              Images={MainImage}
              altforImage={"Data Analyst Fellowship "}
              CourseName={"Business Analyst Fellowship"}
              darkMode={darkMode}
              varient={"BusinessAnalystFellowship"}
            />
          </section>

          <section>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg md:text-3xl font-semibold text-content leading-tight relative z-20"
            ></div>
            <div className="w-full h-full pt-14">
              <PerksOfInternship varient={"BusinessAnalystFellowship"} />
            </div>
          </section>

          <section>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full bg-surface-sunken md:mt-10 py-5 pt-24 pb-16 px-6"
            >
              <ExtraSwiper
                Extra={Extra}
                CourseName={"Business Analyst Fellowship"}
                varient={"BusinessAnalystFellowship"}
              />
            </div>
          </section>

          

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            <Technologies
              varient={"BusinessAnalystFellowship"}
              Technology={BusinessAnalystTechStack}
            />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6 bg-surface-sunken"
          >
            <div className="text-center mb-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                150+ Success Stories
              </h2>
              <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                See where Kre8ly learners are working now. Browse by Developer, Analyst or Others.
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
              Project={BusinessAnalystProjects}
              CourseName={"Business Analyst Fellowship"}
              location={location}
              varient={"BusinessAnalystFellowship"}
            />
          </section>

          

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6"
          >
            <Certificate
              CourseName={"Business Analyst Fellowship"}
              location={location}
            />
          </section>

          <section className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6 bg-surface-sunken">
            <ProgramTimeline />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6"
          >
            <Faqs Faqs={BusinessAnalystFaq} darkMode={darkMode} />
            {/* </div> */}
          </section>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={BusinessAnalystHeroSection}
        location={location}
        fellowship={true}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default BusinessAnalystFellowship;
