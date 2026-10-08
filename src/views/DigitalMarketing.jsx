import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Ellipse = "/assets/Ellipse.webp";
import Home from "../component/MachineLearning/Home";
import {
  DigitalMarketingHomeInfo,
  DigitalMarketingRoadMaps,
  roadmapSteps,
} from "../Utils/DigitalMarketing/DigitalMarketingHomeInfo";
import Slider from "../component/Slider";
import CourseRoadmap from "../component/MachineLearning/CourseRoadmap";
import Module from "../component/MachineLearning/Module";
import { Link } from "@/lib/router-compat";
// import { MdFileDownload } from "react-icons/md";
import {
  DigitalMarketingAdvanceModules,
  DigitalMarketingBasicModules,
} from "../Utils/DigitalMarketing/DigitalMarketingModule";
import Carousel from "../component/MachineLearning/Carousel";
import { CarouselInfo } from "../Utils/MachineLearning/CarouselInfo";
import BookYourSeat from "../component/MachineLearning/BookYourSeat";
import {
  DigitalMarketingPhoto,
  DigitalMarketingSubHeadings,
  DigitalMarketingSubtitles1,
  DigitalMarketingSubtitles2,
  DigitalMarketingTitles,
  CourseName,
} from "../Utils/DigitalMarketing/DigitalMarketingMovingTitles";
import Technologies from "../component/MachineLearning/Technologies";
import { DigitalMarketingTechnology } from "../Utils/DigitalMarketing/DigitalMarketingTechnology";
import HallofFameCardTwo from "../component/HallofFameCardTwo";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import BuildSkill from "../component/MachineLearning/BuildSkill";
import { Userdata } from "../Utils/MachineLearning/BuildSkill";
import Projects from "../component/MachineLearning/Projects";
import { DigitalMarketingProjectInfo } from "../Utils/DigitalMarketing/DigitalMarketingProjectInfo";
import ProgramTimeline from "../component/MachineLearning/ProgramTimeline";
import Faqs from "../component/MachineLearning/Faqs";
import { DigitalMarketingFaqs } from "../Utils/Faqs/DigitalMarketingFaqs";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import PlacementSupport from "../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../Utils/MachineLearning/PlacementSupportInfo";
import { useState } from "react";
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
import Certificate from "../component/MachineLearning/Certificate";
import FloatingEnrollBar from "../component/FloatingEnrollBar";
import ChatBot from "@/component/ChatBot/ChatBot";

const DigitalMarketing = ({ darkMode, setDarkMode, location }) => {
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
      subtitle: `Become a certified Digital Marketing  with an official certificate from Kre8ly.`,
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
        <title>
          Digital Marketing Internship Courses Online | Kre8ly
        </title>

        {/* Meta Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content={`Digital Marketing Course in ${location}, Best Digital Marketing Course in ${location}, Digital Marketing Certification Course in ${location}, Best Online Digital Marketing Course in ${location}, Digital Marketing Course with Certification, Digital Marketing Course in ${location} with Placements,digital marketing training with placement,digital marketing training and placement,online digital marketing course with placement,digital marketing course online with placement,digital marketing placement,best course in digital marketing in ${location},best courses for digital marketing in ${location} online,top digital marketing courses in ${location},digital marketing course after 12th,best online digital marketing programs,digital marketing training program,digital marketing training courses,digital marketing certificate programs,advanced digital marketing course online,best online digital marketing courses,digital marketing course after 10th`}
        />

        {/* Meta Description */}
        <meta
          name="description"
          content={`Learn SEO, Google Ads and social media marketing online with mentors. Real projects, certificate, work-from-home friendly. For freshers in India.`}
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://www.kre8ly.com/digital-marketing"
        />

        {/* Meta Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content={`Best Digital Marketing Certification in ${location} with Placement`}
        />
        <meta
          property="og:description"
          content={`Join our 2-month Digital Marketing Course in ${location} with practical training, online classes, job placement guidance, and government-approved certification.`}
        />
      </Helmet>

      
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="flex-grow flex items-center justify-center relative">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full mx-auto"
          >
            <section
              id="hero"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full bg-transparent relative overflow-hidden"
            >
              <Home info={DigitalMarketingHomeInfo} location={location} />
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
                varient={"DigitalMarketing"}
                roadmapSteps={roadmapSteps}
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
                BasicModules={DigitalMarketingBasicModules}
                AdvanceModules={DigitalMarketingAdvanceModules}
                showCurriculum={showCurriculum}
                setShowCurriculum={setShowCurriculum}
                varient={"DigitalMarketing"}
                onFormToggle={handleModuleFormToggle}
              />
              {/* <button
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                onClick={handleDownloadFile}
                className="hidden border -z-10 border-line-strong hover:bg-surface-sunken  dark:hover:text-content hover:bg-surface-sunken dark:bg-transparent dark:text-white text-content px-4  py-3 md:flex gap-2 items-center font-bold w-fit justify-center rounded-md text-base transition-all duration-300"
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
                Meet Our Digital Marketing Training Experts
              </h3>
              <p
                data-aos="zoom-in-up"
                // data-aos-delay="700"
                // data-aos-duration="800"
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
                  varient={"digital-marketing"}
                />
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
                    varient={"digital-marketing"}
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

            {/* <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 py-5"
            >
              <BookYourSeat
                altforImage={"Digital Marketing Online Course"}
                Images={DigitalMarketingPhoto}
                titles={DigitalMarketingTitles}
                subtitles1={DigitalMarketingSubtitles1}
                subtitles2={DigitalMarketingSubtitles2}
                subHeadings={DigitalMarketingSubHeadings}
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
                altforImage={"Digital Marketing Online Course"}
                Images={DigitalMarketingPhoto}
                titles={DigitalMarketingTitles}
                subtitles1={DigitalMarketingSubtitles1}
                subtitles2={DigitalMarketingSubtitles2}
                subHeadings={DigitalMarketingSubHeadings}
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
             
              <div className="w-full h-full">
                <PerksOfInternship />
              </div>
            </section>

            <section>
              <div
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
              </div>
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
              <Technologies
                varient={"DigitalMarketing"}
                Technology={DigitalMarketingTechnology}
              />
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
                varient={"DigitalMarketing"}
                Technology={DigitalMarketingTechnology}
              />
            </section> */}

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
                className="text-sm md:text-3xl font-bold text-content text-center"
              >
                150+ Success Stories
              </h3>
              <div className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
                <HallofFameCardTwo hallofFameInfo={NewHallOfFrameInfos} />
              </div>
            </section> */}

            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
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

            {/* <section className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <BuildSkill />
            </section> */}

            <section className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20">
              <BuildSkill />
            </section>

            {/* <section className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <Projects
                Project={DigitalMarketingProjectInfo}
                CourseName={CourseName}
                location={location}
              />
            </section> */}

            <section className="w-full h-full flex flex-col items-center justify-center bg-surface-sunken px-2 md:px-6 py-10 md:py-20">
              <Projects
                Project={DigitalMarketingProjectInfo}
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
                Project={DigitalMarketingProjectInfo}
                CourseName={CourseName}
                location={location}
              />
            </section>

            {/* <section
              className="w-full h-full flex flex-col items-center justify-center gap-10 py-5">
              <ProgramTimeline />
            </section> */}

            {/* <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center gap-10 py-5"
            >
              <Faqs Faqs={DigitalMarketingFaqs} darkMode={darkMode} />
            </section> */}

            <section className="w-full h-full flex flex-col items-center justify-center bg-surface-sunken px-2 md:px-6 py-10 md:py-20">
              <ProgramTimeline />
            </section>
            <section
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full flex flex-col items-center justify-center px-2 md:px-6 py-10 md:py-20"
            >
              <Faqs Faqs={DigitalMarketingFaqs} darkMode={darkMode} />
            </section>
          </div>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <FloatingEnrollBar
        darkMode={darkMode}
        info={DigitalMarketingHomeInfo}
        location={location}
      />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default DigitalMarketing;
