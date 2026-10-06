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
const MainImage =
  "/assets/fellowship/DigitalMarketing/DigitalMarketingFellowship.svg";
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
import PlacementSupportSwiper from "@/component/PlacementSupportSwiper";
import Reveal from "@/component/ui/Reveal";
const DigitalMarketingFellowship = ({ darkMode, setDarkMode, location }) => {
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
      subtitle:
        "Complete the fellowship and get an official Kre8ly certificate in digital marketing.",
      link: "#certificate",
      target: "_self", // or "No"
    },
    {
      icon: Extra2,
      icon_alt: "Resume Builder",
      title: "Resume Builder",
      subtitle:
        "Polish your resume with our builder and tips from your mentors.",
      link: "https://jobs.unifiedmentor.com/",
      target: "_blank", // or "Yes"
    },
    {
      icon: Extra3,
      icon_alt: "Job Portal", // Fixed from "Resume Builder"
      title: "Job Portal",
      subtitle: "Search openings from our hiring partners on our job portal.",
      link: "https://jobs.unifiedmentor.com/",
      target: "_blank", // or "Yes"
    },
    {
      icon: Extra4,
      icon_alt: "Chance to Work on Real Projects",
      title: "Chance to Work on Real Projects",
      subtitle:
        "Run real campaigns and projects while you learn, so your resume has proof behind it.",
      link: "#projects",
      target: "_self", // or "No"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Internship Courses Online | Kre8ly</title>
        <meta
          name="description"
          content="Learn SEO, Google Ads and social media marketing online with mentors. Real projects, certificate, work-from-home friendly. For freshers in India."
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
              varient={"DigitalMarketingFellowship"}
              courseName={"How Our Online Digital Marketing Courses Work"}
            />
          </section>

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 py-5 pt-24 pb-16 px-6"
          >
            <Module
              BasicModules={DigitalMarketingBasicModules}
              AdvanceModules={DigitalMarketingAdvanceModules}
              varient={"DigitalMarketingFellowship"}
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

          <section class="max-w-5xl mx-auto px-6 py-12 text-gray-800">
            <div class="mb-14">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Digital Marketing Internship for Freshers, Work From Home
              </h2>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Digital marketing is one of the few fields where you can build a
                visible portfolio from a laptop and a phone connection. This is
                an internship-style program with live project work, sessions,
                and mentoring conducted completely online—no relocation
                required.
              </p>

              <div class="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 class="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                  Who this is designed for:
                </h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Students & Freshers:</strong> BA, BCom, BBA, BSc,
                      or BTech graduates targeting their first marketing job.
                    </span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Tier 2/3 Cities:</strong> Learners from Udaipur,
                      Gorakhpur, Mangaluru, or Guwahati seeking metro-level
                      exposure.
                    </span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Business Owners:</strong> Shop and SME founders
                      wanting to run their own customer acquisition.
                    </span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-blue-600 font-bold">✓</span>
                    <span>
                      <strong>Freelancers:</strong> Professionals looking to
                      pitch and service their own clients.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div class="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-0.5 rounded uppercase mb-2">
                  New
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  Facebook Digital Marketing Internship: Get Ready with Hands-On
                  Practice
                </h3>
                <p class="text-gray-600 leading-relaxed text-sm">
                  Companies like Meta hire their own interns, and those roles
                  are fiercely contested. If that is your goal, practice first.
                  In this fellowship, Facebook is one of your primary
                  platforms—from planning posts to executing campaigns and
                  interpreting data. You’ll leave with concrete work to present
                  on your application.
                </p>
              </div>
              <div class="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div class="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded uppercase mb-2">
                  New
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  Amazon Digital Marketing Internship: Build a Portfolio
                  Recruiters Notice
                </h3>
                <p class="text-gray-600 leading-relaxed text-sm">
                  Amazon is one of our hiring partners, but internship
                  selections are managed directly by Amazon. While we cannot
                  guarantee a seat, we help you build what large e-commerce
                  teams look for: live campaign case studies, analytics
                  dashboards, and Google Ads projects that prove capability over
                  certificates.
                </p>
              </div>
            </div>

            <div class="mt-12 text-center">
              <a
                href="#apply"
                class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Apply for the Remote Internship Program
              </a>
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
              Learn from marketers who run campaigns for a living and can show
              you how it works in practice.
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
                  varient={"digital-marketing"}
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
                varient={"DigitalMarketingFellowship"}
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
              CourseName={"Digital Marketing Fellowship"}
              darkMode={darkMode}
              varient={"DigitalMarketingFellowship"}
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
              <PerksOfInternship varient="DigitalMarketingFellowship" />
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
                CourseName={"Digital Marketing Fellowship"}
                varient={"DigitalMarketingFellowship"}
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
              varient={"DigitalMarketingFellowship"}
              Technology={DigitalMarketingTechstack}
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
                See where Kre8ly learners work now. Browse by Developer, Analyst or Others.
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
              varient={"DigitalMarketingFellowship"}
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
              CourseName={"Digital Marketing Fellowship"}
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
            <Faqs Faqs={DigitalMarketingFaq} darkMode={darkMode} />
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
