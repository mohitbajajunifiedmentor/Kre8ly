import { Helmet } from "@/lib/helmet-compat";
import Navbar from "../component/Navbar";
const Ellipse = "/assets/Ellipse.webp";
import Home from "../component/MachineLearning/Home";
import {
  GraphicDesignHomeInfo,
  GraphicDesignRoadmapIcons,
  GraphicDesignRoadMaps,
  roadmapSteps,
} from "../Utils/GraphicDesign/GraphicDesignHomeInfo";
import CourseRoadmap from "../component/MachineLearning/CourseRoadmap";
import Module from "../component/MachineLearning/Module";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Forms from "../component/Forms/Forms";
import { useState } from "react";
import {
  GraphicDesignAdvanceModules,
  GraphicDesignBasicModules,
} from "../Utils/GraphicDesign/GraphicDesignModule";
import IndustryExperts from "../component/FellowShip/IndustryExperts";
import { CarouselInfo } from "../Utils/MachineLearning/CarouselInfo";
import PlacementSupport from "../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../Utils/MachineLearning/PlacementSupportInfo";
import BookYourSeat from "../component/MachineLearning/BookYourSeat";
import {
  GraphicDesignCourseName,
  GraphicDesignPhoto,
  GraphicDesignSubHeadings,
  GraphicDesignSubtitles1,
  GraphicDesignSubtitles2,
  GraphicDesignTitles,
} from "../Utils/GraphicDesign/GraphicDesignMovingTitles";
import Technologies from "../component/MachineLearning/Technologies";
import { GDTechnology } from "../Utils/GraphicDesign/GraphicDesignTech";
import HallofFameCardTwo from "../component/HallofFameCardTwo";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import BuildSkill from "../component/MachineLearning/BuildSkill";
import Projects from "../component/MachineLearning/Projects";
import { GraphicDesignProjectInfo } from "../Utils/GraphicDesign/GraphicDesignerProjectInfo";
import Footer from "../component/Footer";
import ProgramTimeline from "../component/MachineLearning/ProgramTimeline";
import Faqs from "../component/MachineLearning/Faqs";
import Query from "../component/Query/Query";
import { GraphicDesignFaqs } from "../Utils/GraphicDesign/GraphicDesignFaq";
import PlacementSupportSwiper from "../component/PlacementSupportSwiper";
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
import Certificate from "../component/MachineLearning/Certificate";
import FloatingEnrollBar from "../component/FloatingEnrollBar";
import ChatBot from "@/component/ChatBot/ChatBot";

const SwiperColor = [
  "linear-gradient(90deg, hsl(var(--k-deco-1a)) 0%, hsl(var(--k-deco-1b)) 100%)",
  "linear-gradient(90deg, hsl(var(--k-deco-2a)) 0%, hsl(var(--k-deco-2b)) 100%)",
  "linear-gradient(90deg, hsl(var(--k-deco-3a)) 0%, hsl(var(--k-deco-3b)) 100%)",
  "linear-gradient(90deg, hsl(var(--k-deco-4a)) 0%, hsl(var(--k-deco-4b)) 100%)",
];

const GraphicDesignPage = ({ darkMode, setDarkMode, location }) => {
  const [closeForm, setCloseForm] = useState(false);
  const [showCurriculum, setShowCurriculum] = useState(false);
  const [moduleFormOpen, setModuleFormOpen] = useState(false);

  const handleDownloadFile = () => {
    setCloseForm(true);
  };

  const handleModuleFormToggle = (isOpen) => {
    setModuleFormOpen(isOpen);
  };

  const Extra = [
    {
      icon: Extra1,
      icon_alt: "Professional Certificate",
      title: "Professional Certificate",
      subtitle: `Become a certified ${GraphicDesignCourseName}  with an official certificate from Kre8ly.`,
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
        <title>Top Online Graphic Design Course | Kre8ly</title>

        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/graphic-design"
        />

        {/* Meta Robots */}
        <meta name="robots" content="index, follow" />

        {/* Keywords */}
        <meta
          name="keywords"
          content={`Graphic Design Course in ${location}, Best Graphic Design Course in  ${location}, Graphic Design Certification Course in  ${location}, Best Online Graphic Design Course in  ${location}, Graphic Design Course with Certification, Graphic Design Course in  ${location} with Placements,best course for graphic designing,best graphic design courses,which course is best for graphic design,best graphic design courses in  ${location},graphic design course with placement,graphic design courses in  ${location},best online graphic design certificate programs,top online graphic design programs,best graphic design certificate,best graphic design certificate programs,best graphic design certificate programs,best online classes for graphic design,graphic design and web design courses,complete graphic design course,best graphic designer course online,top online graphic design courses,online graphic design courses with certificates,advanced graphic design course online,best graphic designer online course`}
        />

        {/* Description */}
        <meta
          name="description"
          content={`Level up your design skills with Kre8ly’s top online graphic design course. Learn practical tools & projects—Check now!`}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content={`Best Graphic Design Course in  ${location} with Placement`}
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow flex items-center justify-center relative">
          {/* <section className=" w-full h-full  rounded-3xl relative overflow-hidden"> */}
          {/* <img
              src={Ellipse}
              alt="Ellipse"
              className="absolute -top-16 w-[250px] md:w-[450px] -left-[12rem] md:-left-20 z-10 hidden dark:block"
            /> */}
          {/* <div className="p-4 sm:p-6 lg:p-8">
              <Home info={GraphicDesignHomeInfo} location={location} />
            </div>
          </section> */}

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
              <Home info={GraphicDesignHomeInfo} location={location} />
              {/* </div> */}
            </section>

            {/* <section className="w-full h-full md:flex flex-col items-center justify-center text-center relative my-6 md:my-16">
            <h3 className="text-lg md:text-3xl  text-content font-semibold text-center mb-10">
              Top-Ranked Graphic Designing Course in {location} with Recognized
              Accreditations
            </h3>
            <AccredationSwiper />
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="md:grid hidden grid-cols-4 gap-4 md:gap-6 relative z-20 max-w-4xl mx-auto"
            >
              <div
                data-aos="flip-left"
                data-aos-delay="0"
                data-aos-duration="800"
                className="flex items-center text-primary shadow-[0_0_20px_rgba(0,0,0,0.2)] w-full max-w-xs  bg-[#75B5F5]  p-4  rounded-lg max-h-24"
              >
                <figure className="w-1/3">
                  <img
                    src={Accreditation1}
                    alt="ISO 9001 Certified – Approved by MSME"
                    className="w-full"
                  />
                </figure>
                <figcaption className="ml-4 flex flex-col text-white">
                  <p className="text-xs font-medium">
                    International Organisation for Standardization
                  </p>
                  <p className="text-sm">Approved by MSME</p>
                </figcaption>
              </div> */}
            {/* <div
                data-aos="flip-left"
                data-aos-delay="0"
                data-aos-duration="800"
                className="flex items-center text-primary w-full shadow-[0_0_20px_rgba(0,0,0,0.2)] max-w-xs bg-[#7ED48C]  p-4   rounded-lg  max-h-24">
                <figure className="w-1/3">
                  <img
                    src={Accreditation2}
                    alt="All India Council for Technical Education (AICTE) Approved"
                    className="w-full"
                  />
                </figure>
                <figcaption className="ml-4 flex flex-col text-white">
                  <p
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="text-xs font-medium">
                    All India Council for Technical Education
                  </p>
                </figcaption>
              </div> */}
            {/* <div
                data-aos="flip-left"
                data-aos-delay="0"
                data-aos-duration="800"
                className="flex items-center justify-center  shadow-[0_0_20px_rgba(0,0,0,0.2)] text-primary w-full max-w-xs max-h-24   bg-[#705FC3]  p-4 rounded-lg "
              >
                <figure className="w-1/2">
                  <img
                    src={Accreditation3}
                    alt="Ministry of Corporate Affairs, Government of India"
                    className="w-full "
                  />
                </figure>
              </div>
              <div
                data-aos="flip-right"
                data-aos-delay="0"
                data-aos-duration="800"
                className="flex items-center text-primary shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden justify-center max-h-24 w-full max-w-xs    bg-[#FFE68C] p-4 rounded-lg"
                id="certificate"
              >
                <figure className="">
                  <img
                    src={Accreditation4}
                    alt="Startup India Initiative"
                    className="w-full "
                  />
                </figure>
              </div>
              <div
                className="flex items-center text-primary shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden justify-center max-h-24 w-full max-w-xs   bg-[#FFE6D3]  p-4  rounded-lg"
                id="certificate"
              >
                <figure className="">
                  <img
                    src={Accreditation5}
                    alt="NASSCOM Membership Certificate – Kre8ly"
                    className="w-full "
                  />
                </figure>
              </div>
            </div>
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
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
          >
            <h2
              data-aos="zoom-out"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg md:text-3xl font-semibold text-content mb-6 md:mb-12"
            > */}
            {/* {`${CourseName}`} */}
            {/* <br /> Graphic Designing Roadmap
            </h2>
            <CourseRoadmap
              ModuleInfo={GraphicDesignRoadMaps}
              RoadmapIconList={GraphicDesignRoadmapIcons}
              varient={"graphic-design"}
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
                varient={"graphic-design"}
                courseName={GraphicDesignCourseName}
              />
            </section>

            {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 p-3"
          >
            <Module
              BasicModules={GraphicDesignBasicModules}
              AdvanceModules={GraphicDesignAdvanceModules}
              showCurriculum={showCurriculum}
              setShowCurriculum={setShowCurriculum}
              handleDownloadFile={handleDownloadFile}
              onFormToggle={handleModuleFormToggle}
            /> */}
            {/* <button
              data-aos="flip-right"
              data-aos-delay="0"
              data-aos-duration="800"
              onClick={handleDownloadFile}
              className="hidden border -z-10 border-line-strong hover:bg-surface-sunken  dark:hover:text-content hover:bg-surface-sunken dark:bg-transparent dark:text-white text-content px-4  py-3 md:flex gap-2 items-center font-bold w-fit justify-center rounded-md text-base transition-all duration-300"
            >
              Download detailed curriculum
              <FaCloudDownloadAlt size={25} />
            </button> */}

            {/* {closeForm && (
              <div
                data-aos="zoom-out-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="fixed top-0 w-full h-full z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-start "
              >
                <Forms setCloseForm={setCloseForm} />
              </div>
            )}
          </section> */}

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 pt-24 pb-16 px-6"
            >
              <Module
                BasicModules={GraphicDesignBasicModules}
                AdvanceModules={GraphicDesignAdvanceModules}
                showCurriculum={showCurriculum}
                setShowCurriculum={setShowCurriculum}
                handleDownloadFile={handleDownloadFile}
                varient={"GraphicDesign"}
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

            {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className={`w-full h-full flex flex-col items-center justify-center text-center gap-5 py-5 ${
              moduleFormOpen ? "mt-44" : ""
            }`}
          >
            <h3
              data-aos="zoom-in-down"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg md:text-3xl font-semibold text-content text-center"
            >
              Meet Our Graphic Designer Experts
            </h3>
            <p
              data-aos="zoom-in-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-sm hidden md:block font-normal text-content-secondary w-full "
            >
              Learn Web Development, Data Science, Digital Marketing, Machine
              Learning, and UI/UX Design from experts. Master skills and <br />
              accelerate your career!
            </p>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
            > */}
            {/* <Carousel profileData={CarouselInfo} /> */}

            {/* <IndustryExperts CarouselInfo={CarouselInfo} varient={"ui-ux"} />
            </div>
          </section> */}
            {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
          > */}
            {/* <PlacementSupport PlacementSupportInfo={PlacementSupportInfo} /> */}
            {/* <PlacementSupportSwiper
              PlacementSupportInfo={PlacementSupportInfo}
              location={location}
            />
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
                  data-aos-duration="800"
                  className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 "
                >
                  <IndustryExperts
                    CarouselInfo={CarouselInfo}
                    varient={"ui-ux"}
                  />
                </div>
              </div>
            </section>

            {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center gap-10 py-5"
          >
            <BookYourSeat
              Images={GraphicDesignPhoto}
              altforImage={"Data Science Online Course"}
              titles={GraphicDesignTitles}
              subtitles1={GraphicDesignSubtitles1}
              subtitles2={GraphicDesignSubtitles2}
              subHeadings={GraphicDesignSubHeadings}
              CourseName={GraphicDesignCourseName}
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
                CourseName={GraphicDesignCourseName}
              />
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
              />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 bg-surface-sunken"
            >
              <BookYourSeat
                Images={GraphicDesignPhoto}
                altforImage={"Data Science Online Course"}
                titles={GraphicDesignTitles}
                subtitles1={GraphicDesignSubtitles1}
                subtitles2={GraphicDesignSubtitles2}
                subHeadings={GraphicDesignSubHeadings}
                CourseName={GraphicDesignCourseName}
                darkMode={darkMode}
                location={location}
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
                <PerksOfInternship />
              </div>
            </section>

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
                  SwiperColor={SwiperColor}
                  CourseName={GraphicDesignCourseName}
                />
              </div>
            </section>

            {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center gap-10 py-5"
          >
            <h3
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg md:text-3xl font-semibold text-content text-center"
            >
              Technologies & Tools You Will Learn
            </h3>
            <Technologies
              varient={"graphic-design"}
              Technology={GDTechnology}
            />
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
                varient={"graphic-design"}
                Technology={GDTechnology}
              />
            </section>

            {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center gap-10 md:mt-8"
          >
            <h3
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-sm md:text-3xl font-semibold text-content text-center"
            >
              150+ Success Stories
            </h3>
            <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-4">
              <HallofFameCardTwo hallofFameInfo={NewHallOfFrameInfos} />
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

            {/* <section className="w-full h-full flex flex-col items-center justify-center gap-10 p-4">
            <BuildSkill />
          </section> */}

            <section className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6">
              <BuildSkill />
            </section>

            {/* <section className="w-full h-full flex flex-col items-center justify-center gap-10 md:py-5">
            <Projects
              Project={GraphicDesignProjectInfo}
              CourseName={GraphicDesignCourseName}
              location={location}
            />
          </section> */}

            <section className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6 bg-surface-sunken">
              <Projects
                Project={GraphicDesignProjectInfo}
                CourseName={GraphicDesignCourseName}
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
                Project={GraphicDesignProjectInfo}
                CourseName={GraphicDesignCourseName}
                location={location}
              />
            </section>

            {/* <section className="w-full h-full flex flex-col items-center justify-center gap-10 md:py-5">
            <ProgramTimeline />
          </section> */}

            <section className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6 bg-surface-sunken">
              <ProgramTimeline />
            </section>
            {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center gap-10 P-3 md:py-5"
          >
            <Faqs Faqs={GraphicDesignFaqs} darkMode={darkMode} />
          </section> */}

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6"
            >
              <Faqs Faqs={GraphicDesignFaqs} darkMode={darkMode} />
            </section>
          </div>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={GraphicDesignHomeInfo}
        location={location}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default GraphicDesignPage;
