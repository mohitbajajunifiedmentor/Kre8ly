import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Ellipse = "/assets/Ellipse.webp";
import Home from "../component/MachineLearning/Home";
import {
  DataScienceHomeInfo,
  DataScienceRoadMaps,
  roadmapSteps,
} from "../Utils/DataScience/DataScienceHomeInfo";
import Slider from "../component/Slider";
import CourseRoadmap from "../component/MachineLearning/CourseRoadmap";
import Module from "../component/MachineLearning/Module";
import {
  DataScienceAdvanceModules,
  DataScienceBasicModules,
} from "../Utils/DataScience/DatascienceModule";
import { Link } from "@/lib/router-compat";
// import { MdFileDownload } from "react-icons/md";
import Carousel from "../component/MachineLearning/Carousel";
import { CarouselInfo } from "../Utils/MachineLearning/CarouselInfo";
import BookYourSeat from "../component/MachineLearning/BookYourSeat";
import {
  DataSciencePhoto,
  DataScienceSubHeadings,
  DataScienceSubtitles1,
  DataScienceSubtitles2,
  DataScienceTitles,
  CourseName,
} from "../Utils/DataScience/DataScienceMovingTitles";
import Technologies from "../component/MachineLearning/Technologies";

import HallofFameCardTwo from "../component/HallofFameCardTwo";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import BuildSkill from "../component/MachineLearning/BuildSkill";
import { Userdata } from "../Utils/MachineLearning/BuildSkill";
import Projects from "../component/MachineLearning/Projects";
import { DataScienceProjectInfo } from "../Utils/DataScience/DataScienceProjectInfo";
import ProgramTimeline from "../component/MachineLearning/ProgramTimeline";
import Faqs from "../component/MachineLearning/Faqs";
import { DSTechnology } from "../Utils/DataScience/DataScienceTech";
import { DataScienceFaqs } from "../Utils/Faqs/DataScienceFaqs";
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
import PerksOfInternship from "../component/FellowShip/PerksOfInternship";
import FloatingEnrollBar from "../component/FloatingEnrollBar";
import ChatBot from "@/component/ChatBot/ChatBot";

const DataScience = ({ darkMode, setDarkMode, location }) => {
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
        {/* Page Title */}
        <title>{`Best Online Data Science Course | Kre8ly`}</title>

        {/* Meta Description */}
        <meta
          name="description"
          content={`Join the Best Online Data Science Course with Kre8ly. Learn data analytics, AI, and ML with real projects and expert mentors to build your career.`}
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content={`Data Science Course in ${location}, Best Data Science Courses in ${location}, Data Science Certification Course in ${location}, Best Online Data Science Course in ${location}, Data Science Course with Certification, Data Science Course in ${location} with Placements,data science course online with placement,online data science course with placement,data science course with placements,data science course with placements,data science course in ${location} with placements,best online data science courses,online data science course in ${location},full stack data science course,data science engineering course,best data science course with placement,top data science courses in ${location},best data science course in ${location},best course for data science in ${location},best data science course with placement guarantee`}
        />

        {/* Robots Meta */}
        <meta name="robots" content="index, follow" />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://www.kre8ly.com/data-science"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Data Science Internship in ${location} with Stipend & Certification`}
        />
        <meta
          property="og:description"
          content={`Join our 3-month Best Data Science course in ${location}. Learn Excel, SQL, Python,Power BI, and more. Get job-ready skills and interviews with expert guidance.`}
        />
        <meta
          property="og:url"
          content="https://www.kre8ly.com/data-science"
        />
        <meta
          property="og:image"
          content="https://www.kre8ly.com/assets/logo-BQ_x2lfY.png"
        />

        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Kre8ly",
      "alternateName": "Kre8ly Private Limited",
      "url": "https://www.kre8ly.com/data-science",
      "logo": "https://www.kre8ly.com/assets/logo-BQ_x2lfY.png",
      "sameAs": [
        "https://www.facebook.com/Unifiedmentor",
        "https://www.instagram.com/_unifiedmentor/",
        "https://x.com/unifiedmentor",
        "https://www.youtube.com/@_Unifiedmentor",
        "https://www.linkedin.com/company/unifiedmentor/"
      ]
    }
    `}
        </script>
      </Helmet>

      
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
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full"
          >
            <section
              id="hero"
              className=" w-full h-full bg-transparent relative overflow-hidden"
            >
              {/* <img
                src={Ellipse}
                alt="Ellipse"
                className="absolute -top-16 w-[250px] md:w-[450px] -left-[12rem] md:-left-20 z-10 hidden dark:block"
              /> */}
              {/* <div className="p-4 sm:p-6 lg:p-8"> */}
              <Home info={DataScienceHomeInfo} location={location} />
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
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-lg md:text-3xl font-semibold text-content"
              >
                {`${CourseName}`} Course Roadmap
              </h2> */}
              {
                console.log("Bajaj", roadmapSteps)
              }
              <CourseRoadmap
                ModuleInfo={roadmapSteps}
                roadmapSteps={roadmapSteps}
                varient={"DataScience"}
                courseName={"Data Science Roadmap"}
              />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 px-2 md:px-6 py-10 md:py-20"
            >
              <Module
                BasicModules={DataScienceBasicModules}
                AdvanceModules={DataScienceAdvanceModules}
                showCurriculum={showCurriculum}
                setShowCurriculum={setShowCurriculum}
                varient={"DataScience"}
                onFormToggle={handleModuleFormToggle}
              />
              {/* <button
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                onClick={handleDownloadFile}
                className="hidden border border-line-strong -z-10 dark:border-white hover:bg-surface-sunken  dark:hover:text-content hover:bg-surface-sunken dark:bg-transparent dark:text-white text-content px-4  py-3 md:flex gap-2 items-center font-bold w-fit justify-center rounded-md text-base transition-all duration-300"
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

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className={`w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20 bg-surface-sunken ${
                moduleFormOpen ? "mt-24" : ""
              }`}
            >
              {/* <h3
                data-aos="zoom-in-down"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`text-lg md:text-3xl font-semibold text-content text-center`}
              >
                Meet Our Data Science Training Experts
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
                Learning, and UI/UX Design <br /> from experts. Master skills
                and accelerate your career!
              </p> */}
              <div className="text-center mb-4">
                <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                  Meet Our Data Science Training Experts
                </h2>
                <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                  Learn Web Development, Data Science, Digital Marketing,
                  Machine Learning, and UI/UX Design <br /> from experts. Master
                  skills and accelerate your career!
                </p>
              </div>
              {/* <div
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
              > */}
              {/* <Carousel profileData={CarouselInfo} /> */}

              <IndustryExperts
                CarouselInfo={CarouselInfo}
                varient={"data-science"}
              />
              {/* </div> */}
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

            {/* <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 py-5"
            >
              <BookYourSeat
                Images={DataSciencePhoto}
                altforImage={"Data Science Online Course"}
                titles={DataScienceTitles}
                subtitles1={DataScienceSubtitles1}
                subtitles2={DataScienceSubtitles2}
                subHeadings={DataScienceSubHeadings}
                CourseName={CourseName}
                darkMode={darkMode}
                location={location}
              />
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full -mt-16 md:-mt-12"
              >
                <ExtraSwiper
                  Extra={Extra}
                  SwiperColor={SwiperColor}
                  CourseName={CourseName}
                />
              </div>
            </section> */}
            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
            >
              <BookYourSeat
                Images={DataSciencePhoto}
                altforImage={"Data Science Online Course"}
                titles={DataScienceTitles}
                subtitles1={DataScienceSubtitles1}
                subtitles2={DataScienceSubtitles2}
                subHeadings={DataScienceSubHeadings}
                CourseName={CourseName}
                darkMode={darkMode}
                location={location}
              />
            </section>

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

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20"
            >
              <Technologies varient={"DataScience"} Technology={DSTechnology} />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20 bg-surface-sunken"
            >
              <div className="text-center mb-4">
                <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                  150+ Success Stories
                </h2>
                <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                  Real experiences from learners who achieved their goals and
                  transformed careers with our guidance and support.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full flex flex-col items-center justify-center gap-10 py-5"
              >
                <HallofFameCardTwo hallofFameInfo={NewHallOfFrameInfos} />
              </div>
            </section>

            <section className="w-full h-full flex flex-col items-center justify-center md:mt-10 py-5 pb-16 px-6">
              <BuildSkill />
            </section>

            <section className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20 bg-surface-sunken">
              <Projects
                Project={DataScienceProjectInfo}
                CourseName={CourseName}
                location={location}
              />
            </section>

            <section className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20">
              <ProgramTimeline />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20 bg-surface-sunken"
            >
              <Faqs Faqs={DataScienceFaqs} darkMode={darkMode} />
            </section>
          </div>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={DataScienceHomeInfo}
        location={location}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default DataScience;
