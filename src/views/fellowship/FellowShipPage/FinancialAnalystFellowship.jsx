import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import Footer from "../../../component/Footer";
const BackGround = "/assets/fellowship/Background.webp";
import FellowshipHomeSection from "../../../component/FellowShip/FellowshipHomeSection";
import {
  FinancialAnalystAnimationText,
  FinancialAnalystFaq,
  FinancialAnalystHeroSection,
  FinancialAnalystProjects,
  FinancialAnalystTechStack,
} from "../../../Utils/FinancialAnalyst/FinancialAnalystHomeInfo";
import { roadmapSteps } from "../../../Utils/FinancialAnalyst/FinancialAnalystHomeInfo";
import TechStack from "../../../component/FellowShip/TechStack";
const MainImage =
  "/assets/fellowship/FinancialAnalyst/FinancialAnalystFellowship.svg";
import IndustryExperts from "../../../component/FellowShip/IndustryExperts";
import { CarouselInfo } from "../../../Utils/MachineLearning/CarouselInfo";
import FutureDevelopmentComponent from "../../../component/FellowShip/FutureDevelopmentComponent";
import {
  ExtraFellowship,
  FellowshipHighlights,
} from "../../../Utils/FellowShip/CommonJson/Common";
const Ellipse = "/assets/Ellipse.webp";
import HallofFameCardTwo from "../../../component/HallofFameCardTwo";
import { NewHallOfFrameInfos } from "../../../Utils/HallOfFrameInfos";
import ProjectSection from "../../../component/FellowShip/ProjectSection";
import AccreditationFellowship from "../../../component/FellowShip/AccreditationFellowship";
import { Link } from "@/lib/router-compat";
const Certificates = "/assets/machineLearning/Certificates2.webp";
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
import Module from "../../../component/MachineLearning/Module";
import {
  FinancialAnalystAdvanceModules,
  FinancialAnalystBasicModules,
} from "../../../Utils/FinancialAnalyst/FinancialAnalystModule";
import PlacementSupport from "../../../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../../../Utils/MachineLearning/PlacementSupportInfo";
import BookYourSeat from "../../../component/MachineLearning/BookYourSeat";
import {
  FinancialAnalystSubHeadings,
  FinancialAnalystSubtitles1,
  FinancialAnalystSubtitles2,
} from "../../../Utils/FinancialAnalyst/FinancialAnalystMovingTitles";
import ExtraSwiper from "../../../component/ExtraSwiper";
import Technologies from "../../../component/MachineLearning/Technologies";
import BuildSkill from "../../../component/MachineLearning/BuildSkill";
import Projects from "../../../component/MachineLearning/Projects";
import Faqs from "../../../component/MachineLearning/Faqs";
import FloatingEnrollBar from "../../../component/FloatingEnrollBar";
import { DataAnalystHomeInfo } from "../../../Utils/DataAnalyst/DataAnalystHomeInfo";
import Certificate from "../../../component/MachineLearning/Certificate";
import ProgramTimeline from "../../../component/MachineLearning/ProgramTimeline";
import ChatBot from "@/component/ChatBot/ChatBot";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import PlacementSupportSwiper from "@/component/PlacementSupportSwiper";
import Reveal from "@/component/ui/Reveal";

const FinancialAnalystFellowship = ({ darkMode, setDarkMode, location }) => {
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
        "Become a certified data analyst with an official certificate from Kre8ly.",
      link: "#certificate",
      target: "No",
    },
    {
      icon: Extra2,
      icon_alt: "Resume Builder",
      title: "Resume Builder",
      subtitle:
        "Get guidance from mentors and build a stronger resume with our builder.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes",
    },
    {
      icon: Extra3,
      icon_alt: "Job Portal",
      title: "Job Portal",
      subtitle:
        "Browse openings from our hiring partners and apply from one place.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes",
    },
    {
      icon: Extra4,
      icon_alt: "Chance to Work on Real Projects",
      title: "Chance to Work on Real Projects",
      subtitle: "Work on real projects at Kre8ly or elsewhere while you learn.",
      link: "#projects",
      target: "no",
    },
  ];

  const eligibilityPoints = [
    "A fresher with a BCom, BBA, MCom, MBA, economics or engineering degree who wants a first job in finance.",
    "Working in accounts, sales or operations and thinking about moving into analysis.",
    "Based in a smaller city, where finance internships are rare and moving to a metro costs more than the first salary.",
    "New to the subject. The fellowship starts with the basics.",
  ];

  return (
    <>
      <Helmet>
        <title>Online Financial Analyst Internship Program | Kre8ly</title>
        <meta
          name="description"
          content="Learn financial analysis online with mentors: Excel, financial statements, Python and real projects, plus placement support. Starts at ₹399."
        />
        <meta
          name="keywords"
          content="financial analyst fellowship, financial analyst course, financial analysis training, online financial analyst course, finance mentorship program, financial analysis certification, career in financial analysis, financial analyst program"
        />
        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/fellowship/financial-analyst"
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
            <FellowshipHomeSection PageDetails={FinancialAnalystHeroSection} />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
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

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 bg-surface-sunken"
          >
            <CourseRoadmap
              ModuleInfo={roadmapSteps}
              roadmapSteps={roadmapSteps}
              varient={"FinancialAnalystFellowship"}
              courseName={"How Our Online Financial Analyst Internship Works"}
            />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            <Module
              BasicModules={FinancialAnalystBasicModules}
              AdvanceModules={FinancialAnalystAdvanceModules}
              varient={"FinancialAnalyst"}
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
            <div className="mx-auto max-w-6xl space-y-10">
              {/* Block 1: Financial Analyst Internship for Freshers and Career Switchers */}
              <div className="group rounded-2xl border border-line bg-surface p-8 sm:p-10 lg:p-12 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-lg">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-sunken px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                  <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                  Who Is This For
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-content leading-tight">
                  Financial Analyst Internship for Freshers and Career Switchers
                </h2>

                <p className="mt-4 text-base sm:text-lg font-medium text-content-secondary leading-relaxed">
                  You don't need a finance job to get started. This program
                  works well if you are:
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

              {/* Block 2: Preparing for an Investment Banking Internship Online in India for Freshers */}
              <div className="group rounded-2xl border border-line bg-surface p-8 sm:p-10 lg:p-12 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-lg">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-sunken px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                  Career Pathway
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-content leading-tight">
                  Preparing for an Investment Banking Internship Online in India
                  for Freshers
                </h2>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-content-secondary">
                  Many freshers search for an investment banking internship and
                  find that most openings ask for skills they haven't built yet.
                  Banks screen for a few things: reading financial statements,
                  building clean Excel models and explaining numbers clearly.
                  This fellowship gives you practice in those areas. It doesn't
                  replace a bank's own internship, but it gives you projects and
                  a certificate to bring to the application.
                </p>

                <div className="mt-8 pt-6 border-t border-line/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-content-muted uppercase tracking-wider">
                    Project-backed Certification &amp; Portfolio
                  </span>
                  <Link
                    to="/fellowships"
                    className="group/btn inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-fg shadow-xs transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none"
                  >
                    Apply for Fellowship
                    <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
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
              Learn from mentors who work with financial data and can show you
              how real analysis is done.
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
                  varient={"financial-analyst"}
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
                varient={"FinancialAnalyst"}
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
              altforImage="FinancialAnalyst Fellowship"
              varient="FinancialAnalystFellowship"
              CourseName="Financial Analyst Fellowship"
              darkMode={darkMode}
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
              <PerksOfInternship 
              varient="FinancialAnalystFellowship"
              />
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
                CourseName={"Financial Analyst Fellowship"}
                varient={"FinancialAnalystFellowship"}
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
              varient={"FinancialAnalystFellowship"}
              Technology={FinancialAnalystTechStack}
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
                Hear from learners who finished a Kre8ly program and moved into new roles. Browse by Developer, Analyst or Others.

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
              Project={FinancialAnalystProjects}
              CourseName={"Financial Analyst Fellowship"}
              location={location}
              varient={"FinancialAnalystFellowship"}
            />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6"
          >
            <Certificate
              CourseName={"Financial Analyst Fellowship"}
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
            <Faqs Faqs={FinancialAnalystFaq} darkMode={darkMode} />
            {/* </div> */}
          </section>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={DataAnalystHomeInfo}
        location={location}
        fellowship={true}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default FinancialAnalystFellowship;
