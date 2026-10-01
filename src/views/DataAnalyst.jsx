import React, { useState } from "react";
const Ellipse = "/assets/Ellipse.webp";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Home from "../component/MachineLearning/Home";
import Slider from "../component/Slider";
import CourseRoadmap from "../component/MachineLearning/CourseRoadmap";
import Module from "../component/MachineLearning/Module";
import {
  CourseName,
  DataAnalystHomeInfo,
  DataAnalystRoadMaps,
  roadmapSteps
} from "../Utils/DataAnalyst/DataAnalystHomeInfo";
import {
  DataAnalystAdvanceModule,
  DataAnalystBasicModule,
} from "../Utils/DataAnalyst/DataAnalystModule";
import {
  DataAnalystPhoto,
  DataAnalystSubHeadings,
  DataAnalystSubtitles1,
  DataAnalystSubtitles2,
  DataAnalystTitles,
} from "../Utils/DataAnalyst/DataAnalystMovingTitle";
import { Link } from "@/lib/router-compat";
// import { MdFileDownload } from "react-icons/md";
import Carousel from "../component/MachineLearning/Carousel";
import { CarouselInfo } from "../Utils/MachineLearning/CarouselInfo";
import BookYourSeat from "../component/MachineLearning/BookYourSeat";
import Technologies from "../component/MachineLearning/Technologies";
import { DataAnalystTechnology } from "../Utils/DataAnalyst/DataAnalystTechnology";
import HallofFameCardTwo from "../component/HallofFameCardTwo";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import BuildSkill from "../component/MachineLearning/BuildSkill";
import { Userdata } from "../Utils/MachineLearning/BuildSkill";
import Projects from "../component/MachineLearning/Projects";
import { DataAnalystProjectInfo } from "../Utils/DataAnalyst/DataAnalystProjectInfo";
import ProgramTimeline from "../component/MachineLearning/ProgramTimeline";
import Faqs from "../component/MachineLearning/Faqs";
import { HomePageFaqs } from "../Utils/Faqs/HomePageFaqs";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import PlacementSupport from "../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../Utils/MachineLearning/PlacementSupportInfo";
import { IoCloseCircle } from "react-icons/io5";
import Forms from "../component/Forms/Forms";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Snowfall from "react-snowfall";
import IndustryExperts from "../component/FellowShip/IndustryExperts";
import AccredationSwiper from "../component/AccredationSwiper";
const Accreditation1_light = "/assets/Accreditation/Accreditation1_light.png";
const Accreditation1 = "/assets/Accreditation/Iso_logo.png";
const Accreditation2 = "/assets/Accreditation/mca_logo.png";
const Accreditation2_light = "/assets/Accreditation/Accreditation2_light.png";
const Accreditation3 = "/assets/Accreditation/Nasscom.png";
const Accreditation3_light = "/assets/Accreditation/Accreditation3_light.png";
const Accreditation4 = "/assets/Accreditation/Startup-india-logo1.png";
const Accreditation4_light = "/assets/Accreditation/Accreditation4_light.png";
import FloatingEnrollBar from "../component/FloatingEnrollBar";
import MobileFooter from "../component/MobileFooter";
import PerksOfInternship from "../component/FellowShip/PerksOfInternship";
const Extra1 = "/assets/machineLearning/Extra1.webp";
const Extra2 = "/assets/machineLearning/Extra2.webp";
const Extra3 = "/assets/machineLearning/Extra3.webp";
const Extra4 = "/assets/machineLearning/Extra4.webp";
import ExtraSwiper from "../component/ExtraSwiper";
import ChatBot from "@/component/ChatBot/ChatBot";

const DataAnalyst = ({ darkMode, setDarkMode, location }) => {
  const [closeForm, setCloseForm] = useState(false);
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [moduleFormOpen, setModuleFormOpen] = useState(false);

  const handleModuleFormToggle = (isOpen) => {
    setModuleFormOpen(isOpen);
  };

  const handleDownloadFile = () => {
    setCloseForm(true);
  };

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
      subtitle: `Become a certified Data Science  with an official certificate from Kre8ly.`,
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
      icon_alt: "Job Portal",
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
        <title>Kre8ly | Data Analyst Course</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content="Kre8ly, data analyst course, data analysis, online course, data science, analytics training"
        />

        <meta
          name="description"
          content="Enroll in Kre8ly's Data Analyst Course to master data analysis skills. Our comprehensive online course covers key techniques and tools to help you become a proficient data analyst and advance your career in data science."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta
          property="og:title"
          content="Kre8ly | Data Analyst Course"
        />
        <meta
          property="og:description"
          content="Join Kre8ly's Data Analyst Course to gain essential skills in data analysis. Learn from industry experts and prepare for a successful career in data science with our online training."
        />
        {/* <!-- Twitter --> */}
        <meta
          name="twitter:title"
          content="Kre8ly | Data Analyst Course"
        />
        <meta
          name="twitter:description"
          content="Explore Kre8ly's Data Analyst Course. Enhance your data analysis skills and advance your career with our expert-led online training program."
        />
        {/* <!-- Additional Meta Tags --> */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow flex items-center justify-center relative">
          <div className="w-full mx-auto">
            {/* hero */}
            <section
              id="hero"
              className="w-full h-full bg-transparent relative overflow-hidden">
              {/* <div className="p-4 sm:p-6 lg:p-8"> */}

              <Home info={DataAnalystHomeInfo} />
              {/* </div> */}
            </section>
            {/* AccredationSwiper */}
            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full px-2 md:px-6 py-10 md:py-20">
              <div className="flex items-center justify-center">
                <AccredationSwiper />
              </div>
              <div
                className={`md:grid hidden grid-cols-4 gap-4 md:gap-6 relative z-20 w-full`}
              >
                <div
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
            {/* CourseRoadmap */}
            <section 
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 bg-surface-sunken px-2 md:px-6 py-10 md:py-18">
              <CourseRoadmap
                ModuleInfo={roadmapSteps}
                roadmapSteps={roadmapSteps}
                varient={"Data Analyst"}
                courseName={"Data Analyst"}
              />
            </section>
            {/* Module/ */}
            <section
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 px-2 md:px-6 py-10 md:py-20">
              <Module
                BasicModules={DataAnalystBasicModule}
                AdvanceModules={DataAnalystAdvanceModule}
                showCurriculum={showCurriculum}
                setShowCurriculum={setShowCurriculum}
                varient={"DataAnalyst"}
                onFormToggle={handleModuleFormToggle}
              />

              {/* <button
                onClick={handleDownloadFile}
                className="bg-custom-card-gradient text-primary px-4 py-2 flex items-center font-bold w-full md:w-96 mx-auto justify-center gap-1 md:gap-5 rounded-full text-sm md:text-base shadow-xl hover:bg-custom-gradient"
              >
                Download detailed curriculum
                <FaCloudDownloadAlt size={25} />
              </button> */}
              {closeForm && (
                <div
                  data-aos="zoom-out-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="fixed top-0 w-full h-full z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-start"
                >
                  <Forms setCloseForm={setCloseForm} />
                </div>
              )}
            </section>
            {/* Meet Our Data Analyst Training Experts */}
            <section 
            className={`w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20 bg-surface-sunken ${moduleFormOpen ? "mt-24" : ""
              }`}>
              <div className="text-center mb-4">
                <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                  Meet Our Data Analyst Training Experts
                </h2>
                <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                  Learn Web Development, Data Science, Digital Marketing,
                  Machine Learning, and UI/UX Design <br /> from experts. Master
                  skills and accelerate your career!
                </p>
              </div>

              {/* <div className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"> */}
              {/* <Carousel profileData={CarouselInfo} /> */}
              <IndustryExperts
                CarouselInfo={CarouselInfo}
                varient={"data-analyst"}
              />
              {/* </div> */}
            </section>
            {/* PlacementSupport */}
            <section className="w-full h-full flex flex-col items-center justify-center text-center gap-10 md:px-6 py-10 md:py-20">
              <PlacementSupport
                PlacementSupportInfo={PlacementSupportInfo}
                location={location}
              />
            </section>
            {/* BookYourSeat */}
            <section
              className="w-full h-full flex flex-col items-center justify-center gap-10 bg-surface-sunken px-2 md:px-6 py-10 md:py-20">
              <BookYourSeat
                Images={DataAnalystPhoto}
                altforImage={"Data Analytics Online Course"}
                titles={DataAnalystTitles}
                subtitles1={DataAnalystSubtitles1}
                subtitles2={DataAnalystSubtitles2}
                subHeadings={DataAnalystSubHeadings}
                CourseName={CourseName}
              />
            </section>
            {/* PerksOfInternship */}
            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg md:text-3xl text-content leading-tight relative z-20 px-2 md:px-6 py-10 md:py-20"
            >
              <div className="w-full h-full ">
                <PerksOfInternship />
              </div>
            </section>
            {/* ExtraSwiper */}
            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
            >
              <ExtraSwiper
                Extra={Extra}
                SwiperColor={SwiperColor}
                CourseName={CourseName}
              />
            </section>
            {/* Technologies & Tools You Will Learn */}
            <section className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <h3 className="text-2xl md:text-4xl font-bold text-primary text-center">
                Technologies & Tools You Will Learn
              </h3>
              <Technologies
                varient={"Data Analyst"}
                Technology={DataAnalystTechnology}
              />
            </section>
            {/* HallofFameCardTwo */}
            <section className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <h3 className="text-sm md:text-3xlfont-bold text-primary text-center">
                150+ Success Stories
              </h3>
              <div className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
                <HallofFameCardTwo hallofFameInfo={NewHallOfFrameInfos} />
              </div>
            </section>
            {/* BuildSkill */}
            <section className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <BuildSkill />
            </section>
            {/* Projects */}
            <section className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <Projects
                Project={DataAnalystProjectInfo}
                CourseName={CourseName}
              />
            </section>
            {/* ProgramTimeline */}
            <section className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <ProgramTimeline />
            </section>
            {/* Faqs */}
            <section className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <Faqs Faqs={HomePageFaqs} />
            </section>
          </div>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={DataAnalystHomeInfo}
        location={location}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default DataAnalyst;
