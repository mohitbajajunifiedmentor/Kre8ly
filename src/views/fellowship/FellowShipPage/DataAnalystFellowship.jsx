import React, { useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
const BackGround = "/assets/fellowship/Background.webp";
const Ellipse = "/assets/Ellipse.webp";
import Footer from "../../../component/Footer";
import FellowshipHomeSection from "../../../component/FellowShip/FellowshipHomeSection";
import {
  DataAnalystAnimationText,
  DataAnalystFaq,
  DataAnalystHeroSection,
  DataAnalystProjects,
  DataAnalystTechstack,
  roadmapSteps,
} from "../../../Utils/FellowShip/DataAnalyst";
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
const MainImage = "/assets/fellowship/DataAnalyst/DataAnalystFe.svg";
import PerksOfInternship from "../../../component/FellowShip/PerksOfInternship";
import TextAnimation from "../../../component/FellowShip/TextAnimation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Query from "../../../component/Query/Query";
import FellowshipProjects from "../../../component/FellowshipProjects";
import AccredationSwiper from "../../../component/AccredationSwiper";
import FellowshipExtraSwiper from "../../../component/FellowshipExtraSwiper";
import MobileFooter from "../../../component/MobileFooter";
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
  DataScienceAdvanceModules,
  DataScienceBasicModules,
} from "../../../Utils/DataScience/DatascienceModule";
import Module from "../../../component/MachineLearning/Module";
import PlacementSupport from "../../../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../../../Utils/MachineLearning/PlacementSupportInfo";
import BookYourSeat from "../../../component/MachineLearning/BookYourSeat";
import {
  WebDevSubHeadings,
  WebDevSubtitles2,
} from "../../../Utils/WebDev/WebdevMovingTitle";
import ExtraSwiper from "../../../component/ExtraSwiper";
const Extra1 = "/assets/machineLearning/Extra1.webp";
const Extra2 = "/assets/machineLearning/Extra2.webp";
const Extra3 = "/assets/machineLearning/Extra3.webp";
const Extra4 = "/assets/machineLearning/Extra4.webp";
import Technologies from "../../../component/MachineLearning/Technologies";
import Projects from "../../../component/MachineLearning/Projects";
import BuildSkill from "../../../component/MachineLearning/BuildSkill";
import Faqs from "../../../component/MachineLearning/Faqs";
import { DataAnalystHomeInfo } from "../../../Utils/DataAnalyst/DataAnalystHomeInfo";
import FloatingEnrollBar from "../../../component/FloatingEnrollBar";
import Certificate from "../../../component/MachineLearning/Certificate";
import ProgramTimeline from "../../../component/MachineLearning/ProgramTimeline";
import ChatBot from "@/component/ChatBot/ChatBot";
import PlacementSupportSwiper from "@/component/PlacementSupportSwiper";
import Reveal from "@/component/ui/Reveal";
const DataAnalystFellowship = ({ darkMode, setDarkMode, location }) => {
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
      subtitle: `Become a certified data analyst with an official certificate from Kre8ly.`,
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
      icon_alt: "Resume Builder",
      title: "Job Portal",
      subtitle:
        "Browse openings from our hiring partners and apply from one place.",
      link: "https://jobs.unifiedmentor.com/",
      target: "Yes",
    },
    {
      icon: Extra4,
      icon_alt: "Chance to work on real project",
      title: "Chance to work on real project",
      subtitle:
        "Work on real projects at Kre8ly or elsewhere while you learn.",
      link: "#projects",
      target: "no",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Data Analyst Internship Programs Online in India | Kre8ly</title>

        <meta
          name="description"
          content="Join Kre8ly's online data analyst internship program: learn Excel, SQL, Python and Power BI, build real projects and get mentor guidance. Starts at ₹399."
        />
        <meta
          name="keywords"
          content="data analyst course, data analyst fellowship, data analysis training, data analyst certification, online data analyst course, data analysis mentorship, data analyst career, advanced data analyst training"
        />
        <link
          rel="canonical"
          href="https://www.kre8ly.com/fellowship/data-analyst"
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
            <FellowshipHomeSection PageDetails={DataAnalystHeroSection} />
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
              varient={"DataAnalystFellowship"}
              courseName={"How Our Data Analyst Internship Course Online Works"}
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
              showCurriculum={showCurriculum}
              setShowCurriculum={setShowCurriculum}
              onFormToggle={handleModuleFormToggle}
              varient={"DataAnalystFellowship"}
            />
            {closeForm && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 md:data-aos=zoom-out-up md:data-aos-delay=0 md:data-aos-duration=800">
                <Forms
                  setCloseForm={setCloseForm}
                  setShowCurriculum={setShowCurriculum}
                />
              </div>
            )}
          </section>

          {/* ========================================================= */}
          {/* NEW SECTION: Affordable Internship & Is This Right For You */}
          {/* ========================================================= */}
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full py-16 px-6 bg-canvas"
          >
            <div className="max-w-6xl mx-auto flex flex-col gap-14">
              {/* Block 1: Affordable Data Analyst Internship in India */}
              <div className="rounded-2xl border border-line bg-surface p-8 md:p-12 shadow-sm text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-content leading-tight">
                  Affordable Data Analyst Internship in India
                </h2>

                <p className="mt-4 text-base md:text-lg leading-relaxed text-content-secondary font-medium">
                  Good analytics training shouldn't need a big-city fee. The
                  fellowship starts at ₹399, so students in Jaipur, Lucknow,
                  Patna or Coimbatore can begin without a big ask from the
                  family.
                </p>

                <p className="mt-4 text-base md:text-lg leading-relaxed text-content-secondary">
                  You'll learn data analytics, business intelligence and data
                  visualization from working professionals, and practise on the
                  tools Indian employers ask for: Excel, SQL, Python and Power
                  BI. Most hiring teams want people who can clean messy data and
                  explain the result clearly. The projects are built to train
                  exactly that.
                </p>
              </div>

              {/* Block 2: Is This Fellowship Right for You? */}
              <div className="rounded-2xl border border-line bg-surface p-8 md:p-12 shadow-sm text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-content leading-tight">
                  Is This Fellowship Right for You?
                </h2>

                <p className="mt-4 text-base md:text-lg font-medium text-content">
                  It's a good fit if:
                </p>

                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3.5">
                    <span
                      className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    <span className="text-base md:text-lg leading-relaxed text-content-secondary">
                      You're a student or recent graduate (BCom, BSc, BCA, BTech
                      or MBA) looking for a first job in analytics.
                    </span>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span
                      className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    <span className="text-base md:text-lg leading-relaxed text-content-secondary">
                      You work in sales, operations, finance or support and want
                      to move into a data role.
                    </span>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span
                      className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    <span className="text-base md:text-lg leading-relaxed text-content-secondary">
                      You live outside the big metros and need training you can
                      follow from home.
                    </span>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <span
                      className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-brand"
                      aria-hidden="true"
                    />
                    <span className="text-base md:text-lg leading-relaxed text-content-secondary">
                      You're starting from scratch. No prior analytics
                      experience is needed.
                    </span>
                  </li>
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
              Meet Your Data Analyst Mentors
            </h2>
            <p className="text-lg text-content-secondary max-w-6xl ">
              Learn from analysts who work with data every day.
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
                  varient={"data-analyst"}
                />
              </div>
              <div className="text-content-secondary leading-relaxed">
                <p>
                  Start your journey toward becoming a certified data analyst
                  today. Apply now for the Data Analyst Fellowship at Kre8ly.
                </p>
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
                varient={"DataAnalystFellowship"}
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
              altforImage="Data Analyst Fellowship"
              varient="DataAnalystFellowship"
              CourseName="Data Analyst Fellowship"
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
              varient="DataAnalystFellowship"
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
                CourseName={"Data Analyst Fellowship"}
                varient={"DataAnalystFellowship"}
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
              varient={"data-analyst"}
              Technology={DataAnalystTechstack}
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
                Real learners with real LinkedIn profiles. Browse by Developer, Analyst or Others.
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
              Project={DataAnalystProjects}
              CourseName={"Data Analyst Fellowship"}
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
              CourseName={"Data Analyst Fellowship"}
              location={location}
            />
          </section>

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
            <Faqs Faqs={DataAnalystFaq} darkMode={darkMode} />
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

export default DataAnalystFellowship;
