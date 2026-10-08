import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
const BackGround = "/assets/fellowship/Background.webp";
import Footer from "../../../component/Footer";
import FellowshipHomeSection from "../../../component/FellowShip/FellowshipHomeSection";
import {
  DataScienceAnimationText,
  DataScienceFaq,
  DataScienceHeroSection,
  DataScienceProjects,
  DataScienceTechstack,
} from "../../../Utils/FellowShip/DataScience";
const Ellipse = "/assets/Ellipse.webp";
import TechStack from "../../../component/FellowShip/TechStack";
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
const Certificates = "/assets/machineLearning/Certificates2.webp";
import { Link } from "@/lib/router-compat";
import FaqForFellowship from "../../../component/FellowShip/FaqForFellowship";
const MainImage = "/assets/fellowship/DataScience/DataScienceFellowship.svg";
import PerksOfInternship from "../../../component/FellowShip/PerksOfInternship";
import TextAnimation from "../../../component/FellowShip/TextAnimation";
import { BackendAnimationText } from "../../../Utils/FellowShip/BackendDeveloper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Query from "../../../component/Query/Query";
import FellowshipProjects from "../../../component/FellowshipProjects";
import AccredationSwiper from "../../../component/AccredationSwiper";
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
import {
  DataScienceHomeInfo,
  roadmapSteps,
} from "../../../Utils/DataScience/DataScienceHomeInfo";
import CourseRoadmap from "../../../component/MachineLearning/CourseRoadmap";
import Module from "../../../component/MachineLearning/Module";
import {
  DataScienceAdvanceModules,
  DataScienceBasicModules,
} from "../../../Utils/DataScience/DatascienceModule";
import PlacementSupport from "../../../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../../../Utils/MachineLearning/PlacementSupportInfo";
import BookYourSeat from "../../../component/MachineLearning/BookYourSeat";
import {
  CourseName,
  DataScienceSubHeadings,
  DataScienceSubtitles1,
  DataScienceSubtitles2,
} from "../../../Utils/DataScience/DataScienceMovingTitles";
import ExtraSwiper from "../../../component/ExtraSwiper";
import Technologies from "../../../component/MachineLearning/Technologies";
import BuildSkill from "../../../component/MachineLearning/BuildSkill";
import Projects from "../../../component/MachineLearning/Projects";
import Faqs from "../../../component/MachineLearning/Faqs";
import FloatingEnrollBar from "../../../component/FloatingEnrollBar";
import Certificate from "../../../component/MachineLearning/Certificate";
import ProgramTimeline from "../../../component/MachineLearning/ProgramTimeline";
import ChatBot from "@/component/ChatBot/ChatBot";
import {
  CheckCircle2,
  GraduationCap,
  MapPin,
  Sparkles,
  FolderGit2,
} from "lucide-react";
import PlacementSupportSwiper from "@/component/PlacementSupportSwiper";
import Reveal from "@/component/ui/Reveal";
const DataScienceFellowship = ({ darkMode, setDarkMode, location }) => {
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
      subtitle: "Earn an official Kre8ly certificate in data science.",
      link: "#certificate",
      target: "No", // or "_self"
    },
    {
      icon: Extra2,
      icon_alt: "Resume Builder",
      title: "Resume Builder",
      subtitle:
        "Build a sharper resume with our builder and input from your mentors.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes", // or "_blank"
    },
    {
      icon: Extra3,
      icon_alt: "Job Portal", // Fixed from "Resume Builder"
      title: "Job Portal",
      subtitle: "Use our job portal to find openings from hiring partners.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes", // or "_blank"
    },
    {
      icon: Extra4,
      icon_alt: "Chance to Work on Real Projects",
      title: "Chance to Work on Real Projects",
      subtitle: "Work on real projects at Kre8ly or elsewhere while you learn.",
      link: "#projects",
      target: "No", // or "_self"
    },
  ];

  const criteria = [
    {
      icon: GraduationCap,
      title: "Students & Graduates",
      text: "BSc, BCA, BTech, MCA, or BCom students looking to transition into data.",
    },
    {
      icon: MapPin,
      title: "Tier-2 & Tier-3 Cities",
      text: "Aspirants in Bhubaneswar, Kanpur, Nashik, and beyond where local roles are scarce.",
    },
    {
      icon: Sparkles,
      title: "Beginner Friendly",
      text: "Designed from ground zero—no prior data science or coding experience needed.",
    },
    {
      icon: FolderGit2,
      title: "Portfolio & GitHub Ready",
      text: "Real, documented projects you can showcase directly on your resume and GitHub.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Online Data Science Internship Program in India | Kre8ly</title>

        <meta
          name="description"
          content="Learn data science with Python in an online internship program with mentors, real projects and a certificate. For students and freshers across India."
        />

        <meta
          name="keywords"
          content="data science fellowship, data science mentorship, data science training program, data science certification, online data science course, data science career, advanced data science program, data science skills"
        />

        <link
          rel="canonical"
          href="https://www.kre8ly.com/fellowship/data-science"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="flex flex-col w-full min-h-screen">
        <main className="flex-grow gap-5 overflow-hidden">
          <section
            id="hero"
            data-aos="fade-up"
            className={`${sectionStylings?.section}`}
          >
            <FellowshipHomeSection PageDetails={DataScienceHeroSection} />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
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

              <div className="flex items-center justify-center rounded-lg text-primary w-full max-w-xs max-h-20  md:max-h-24 p-2 hover:scale-105 transition-all duration-300 ease-in-out">
                <figure className="w-1/2">
                  <img
                    src={darkMode ? Accreditation2_light : Accreditation2}
                    alt="Ministry of Corporate Affairs, Government of India"
                    className="w-full "
                  />
                </figure>
              </div>
              <div className="flex justify-center items-center rounded-lg w-full max-w-xs p-2  max-h-20 md:max-h-24 hover:scale-105 transition-all duration-300 ease-in-out">
                <figure className="flex items-center justify-center">
                  <img
                    src={darkMode ? Accreditation3_light : Accreditation3}
                    alt="Startup India Initiative"
                    className="w-full"
                  />
                </figure>
              </div>
              <div className="flex justify-center items-center rounded-lg w-full max-w-xs p-2  max-h-20 md:max-h-24 hover:scale-105 transition-all duration-300 ease-in-out">
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
              varient={"DataScienceFellowship"}
              courseName={
                "How Our Data Science with Python Internship Program Works"
              }
            />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            <Module
              BasicModules={DataScienceBasicModules}
              AdvanceModules={DataScienceAdvanceModules}
              varient={"DataScienceFellowship"}
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

          <section className="relative w-full py-12 md:py-16 bg-surface text-content">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="text-center md:text-left mb-8 md:mb-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-content mb-4">
                  Data Science Internship Program for Students, Freshers and
                  Undergraduates
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-content-secondary max-w-3xl">
                  You don&apos;t have to wait for a degree to start.
                  Undergraduates can begin while still in college, and recent
                  graduates can use the program to turn a degree into a
                  verifiable portfolio.
                </p>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {criteria.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex items-start gap-4 rounded-xl border border-line bg-surface p-5 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-subtle text-brand transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-content text-base mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-content-secondary">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA note */}
              <div className="mt-8 pt-6 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-content-secondary text-center sm:text-left">
                  100% online cohort with live mentoring and real-world dataset
                  projects.
                </p>
                <a
                  href="https://pages.razorpay.com/umweb2026"
                  className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-brand/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Apply for Fellowship
                </a>
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
              Learn from mentors who work with data and machine learning and can
              show you how the work is done in practice.
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
                  varient={"DataScienceFellowship"}
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
                varient={"DataScienceFellowship"}
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
              CourseName={CourseName}
              darkMode={darkMode}
              varient={"DataScienceFellowship"}
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
              <PerksOfInternship varient={"DataScienceFellowship"} />
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
                CourseName={"Data Science Fellowship"}
                varient={"DataScienceFellowship"}
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
              varient={"DataScienceFellowship"}
              Technology={DataScienceTechstack}
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
                See where Kre8ly learners are working now. Browse by Developer,
                Analyst or Others.
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
              Project={DataScienceProjects}
              CourseName={"Data Science Fellowship"}
              location={location}
              varient={"DataScienceFellowship"}
            />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6"
          >
            <Certificate
              CourseName={"Data Science Fellowship"}
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
            <Faqs Faqs={DataScienceFaq} darkMode={darkMode} />
          </section>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={DataScienceHomeInfo}
        location={location}
        fellowship={true}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default DataScienceFellowship;
