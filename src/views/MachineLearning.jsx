import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Home from "../component/MachineLearning/Home";
import {
  MachineLearningHomeInfo,
  roadmapSteps,
} from "../Utils/MachineLearning/MachineLearningHomeInfo";
const Ellipse = "/assets/Ellipse.webp";
import CourseRoadmap from "../component/MachineLearning/CourseRoadmap";
import Module from "../component/MachineLearning/Module";
import {
  MachineLearningAdvanceModules,
  MachineLearningBasicModules,
} from "../Utils/MachineLearning/Module";
import { Link } from "@/lib/router-compat";
// import { MdFileDownload } from "react-icons/md";
import Carousel from "../component/MachineLearning/Carousel";
import { CarouselInfo } from "../Utils/MachineLearning/CarouselInfo";
import PlacementSupport from "../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../Utils/MachineLearning/PlacementSupportInfo";
import BookYourSeat from "../component/MachineLearning/BookYourSeat";
const RoboBook = "/assets/machineLearning/RoboBook.png";
import {
  MachineLearningTitles,
  MachineLearningSubtitles1,
  MachineLearningSubtitles2,
  subHeadings,
  CourseName,
} from "../Utils/MachineLearning/MovingTitles";
import Technologies from "../component/MachineLearning/Technologies";
import { Technology } from "../Utils/MachineLearning/Technology";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import HallofFameCardTwo from "../component/HallofFameCardTwo";
import BuildSkill from "../component/MachineLearning/BuildSkill";
import Projects from "../component/MachineLearning/Projects";
import { ProjectInfo } from "../Utils/MachineLearning/ProjectsInfo";
import ProgramTimeline from "../component/MachineLearning/ProgramTimeline";
import Faqs from "../component/MachineLearning/Faqs";
import { Roadmaps } from "../Utils/MachineLearning/Roadmap";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import Forms from "../component/Forms/Forms";
import { MachineLearningFaqs } from "../Utils/Faqs/MachineLearningFaqs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Snowfall from "react-snowfall";
import IndustryExperts from "../component/FellowShip/IndustryExperts";
const Extra1 = "/assets/machineLearning/Extra1.webp";
const Extra2 = "/assets/machineLearning/Extra2.webp";
const Extra3 = "/assets/machineLearning/Extra3.webp";
const Extra4 = "/assets/machineLearning/Extra4.webp";
import ExtraSwiper from "../component/ExtraSwiper";
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

const MachineLearning = ({ darkMode, setDarkMode, location }) => {
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
      subtitle: `Become a certified Machine Learning  with an official certificate from Kre8ly.`,
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
        <title>Best Online Machine Learning Course | Kre8ly</title>
        <meta
          name="description"
          content={`Master AI & ML with Kre8ly’s Best Online Machine Learning Course. Learn from experts, build real projects & boost your career. Enroll now!`}
        />
        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/machine-learning"
        />
        {/* Meta Robots */}
        <meta name="robots" content="index, follow" />

        <meta
          name="keywords"
          content={`Machine Learning Course in ${location}, Best Machine Learning Course in ${location}, Machine Learning Certification Course in ${location}, Best Online Machine Learning Course in ${location}, Machine Learning Course with Certification, Machine Learning Course in ${location} with Placements,best online course to learn machine learning,best courses machine learning,best deep learning course online,best online machine learning courses,machine learning expert course in ${location},top machine learning courses in ${location},machine learning certification in ${location},ai machine learning courses in ${location},machine learning course online ${location},machine learning certification programs,best online course for ml,best online certification courses for machine learning,machine learning online training,machine learning classes online,best machine learning course with placement,machine learning course with placement`}
        />
        <meta name="author" content="Kre8ly | Machine Learning" />
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
            className="w-full mx-auto"
          >
            {/* <section id="hero" className=" w-full h-full bg-transparent  rounded-3xl relative overflow-hidden"> */}
            {/* <img
                src={Ellipse}
                alt="Ellipse"
                className="absolute -top-16 w-[250px] md:w-[450px] -left-[12rem] md:-left-20 z-10 hidden dark:block"
              /> */}
            {/* <div className="p-4 sm:p-6 lg:p-8">
                <Home info={MachineLearningHomeInfo} location={location} />
              </div>
            </section> */}

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
              <Home info={MachineLearningHomeInfo} location={location} />
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
                className="text-lg md:text-3xl  font-semibold text-content"
              >
                {`${CourseName}`} Course Roadmap
              </h2>
              <CourseRoadmap
                ModuleInfo={Roadmaps}
                RoadmapIconList={RoadmapList}
                varient={"MachineLearning"}
              />
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
                varient={"MachineLearning"}
                courseName={CourseName}
              />
            </section>

            {/* <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
            >
              <Module
                AdvanceModules={MachineLearningAdvanceModules}
                BasicModules={MachineLearningBasicModules}
                showCurriculum={showCurriculum}
                setShowCurriculum={setShowCurriculum}
                onFormToggle={handleModuleFormToggle}
                varient={"MachineLearning"}
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
                  className="fixed top-0 w-full h-full z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-start"
                >
                  <Forms setCloseForm={setCloseForm} />
                </div>
              )}
            </section> */}

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 px-2 md:px-6 py-10 md:py-20"
            >
              <Module
                AdvanceModules={MachineLearningAdvanceModules}
                BasicModules={MachineLearningBasicModules}
                showCurriculum={showCurriculum}
                setShowCurriculum={setShowCurriculum}
                onFormToggle={handleModuleFormToggle}
                varient={"MachineLearning"}
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
              className={`w-full h-full flex flex-col items-center justify-center text-center gap-5 py-5  ${
                moduleFormOpen ? "mt-24" : ""
              }`}
            >
              <h3
                data-aos="zoom-in-down"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-lg md:text-3xl font-semibold text-content text-center"
              >
                Meet the Minds Behind Our Machine Learning Training
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
              </p>
              <div
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
              > */}
            {/* <Carousel profileData={CarouselInfo} /> */}
            {/* <IndustryExperts
                  CarouselInfo={CarouselInfo}
                  varient={"machine-learning"}
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full flex flex-col items-center justify-center text-center gap-5 md:gap-8 py-5"
              >
                <h2
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="text-lg md:text-3xl font-bold text-content"
                >
                  Why Choose Our Machine Learning Course?{" "}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="text-base hidden md:block md:text-sm text-center gap-10 py-5 text-content-secondary"
                >
                  Our Machine Learning Course provides great value and results.
                  You&apos;ll learn essential and advanced topics from
                  experienced instructors who offer personal feedback. Work on
                  more than 10 real-world projects, like building predictive
                  tools and recommendation systems. With over 80% of graduates
                  landing jobs within six months, you’ll have a strong chance of
                  success. Plus, you’ll earn a valuable certification to enhance
                  your resume.
                </p>
              </div>
            </section> */}

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
                  data-aos-duration="800"
                  className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 "
                >
                  <IndustryExperts
                    CarouselInfo={CarouselInfo}
                    varient={"machine-learning"}
                  />
                </div>
              </div>
            </section>

            {/* <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5"
            >
              <PlacementSupport
                PlacementSupportInfo={PlacementSupportInfo}
                location={location}
              />
            </section> */}

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
                Images={RoboBook}
                altforImage={"Machine Learning Online Course"}
                titles={MachineLearningTitles}
                subtitles1={MachineLearningSubtitles1}
                subtitles2={MachineLearningSubtitles2}
                subHeadings={subHeadings}
                CourseName={CourseName}
                darkMode={darkMode}
                location={location}
              />
              {/* <div
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
              </div> */}
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
                className="text-lg md:text-3xl font-bold text-content text-center"
              >
                Technologies & Tools You Will Learn
              </h3>
              <Technologies
                varient={"MachineLearning"}
                Technology={Technology}
              />
            </section> */}

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full bg-surface-sunken md:mt-10 px-2 md:px-6 py-10 md:py-20"
            >
              <div>
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
              </div>
            </section>

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
                varient={"MachineLearning"}
                Technology={Technology}
              />
            </section>

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 py-5 bg-surface-sunken"
            >
              <h3
                data-aos="zoom-in"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-sm md:text-3xl font-bold text-content text-center"
              >
                150+ Success Stories
              </h3>
              <div className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
                <HallofFameCardTwo hallofFameInfo={NewHallOfFrameInfos} />
              </div>
            </section>

            <section className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6">
              <BuildSkill />
            </section>

            {/* <section className="w-full h-full flex flex-col items-center justify-center gap-10 md:py-5">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full h-full flex flex-col items-center justify-center gap-10 md:py-5"
              >
                <h2
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="text-lg md:text-3xl font-semibold text-content hidden md:block  text-content"
                >
                  Advantages of the Best Machine Learning Course{" "}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="text-content-secondary text-sm hidden md:block text-center"
                >
                  Enrolling in our best Machine Learning Course provides key
                  benefits: a well-structured 3-month curriculum covering
                  essential and advanced topics, practical, real-world skills,
                  and a high success rate, with graduates often landing
                  rewarding roles quickly. Our course emphasizes hands-on
                  experience and industry relevance, ensuring you gain both
                  theoretical and practical knowledge. Join us to advance your
                  career with top-notch training and career support.
                </p>
              </div>
              <Projects
                Project={ProjectInfo}
                CourseName={CourseName}
                location={location}
              />
            </section> */}

            <section className="w-full h-full flex flex-col items-center justify-center py-5 pb-16 px-6 bg-surface-sunken">
              <Projects
                Project={ProjectInfo}
                CourseName={CourseName}
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
                Project={ProjectInfo}
                CourseName={CourseName}
                location={location}
              />
            </section>

            <section className="w-full h-full flex flex-col items-center justify-center py-5 pb-16 px-6 bg-surface-sunken">
              <ProgramTimeline />
            </section>

            {/* <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 py-5"
            >
              <Faqs Faqs={MachineLearningFaqs} darkMode={darkMode} />
            </section> */}

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center py-5 pt-24 pb-16 px-6"
            >
              <Faqs Faqs={MachineLearningFaqs} darkMode={darkMode} />
            </section>
          </div>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={MachineLearningHomeInfo}
        location={location}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default MachineLearning;
