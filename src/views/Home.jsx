import Navbar from "../component/Navbar";
import {
  FaArrowRight,
  FaTrophy,
  FaCheck,
  FaUsers,
  FaFire,
  FaUserGraduate,
} from "react-icons/fa";
import { FaReact, FaPython, FaJsSquare } from "react-icons/fa";
//import { FaLinkedin } from "react-icons/fa6";
import Cards from "../component/Cards";
import { CourseCardInfos } from "../Utils/CourseCardInfos";
const Ellipse = "/assets/Ellipse.webp";
import { useEffect, useState } from "react";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import UnifiedStep from "../component/UnifiedStep";
import { UnifiedStepInfos } from "../Utils/UnifiedStepInfos";
import { DreamJobSection } from "../Utils/DreamJobSection";
const Accreditation1 = "/assets/Accreditation/Iso_logo.png";
const Accreditation1_light = "/assets/Accreditation/Accreditation1_light.png";

const Accreditation2 = "/assets/Accreditation/mca_logo.png";
const Accreditation2_light = "/assets/Accreditation/Accreditation2_light.png";
const Accreditation3 = "/assets/Accreditation/Nasscom.png";
const Accreditation3_light = "/assets/Accreditation/Accreditation3_light.png";
const Accreditation4 = "/assets/Accreditation/Startup-india-logo1.png";
const Accreditation4_light = "/assets/Accreditation/Accreditation4_light.png";
const CertificateNasscom = "/assets/Nasscom.jpg";
import { FaStar } from "react-icons/fa";
import Footer from "../component/Footer";
const Logo = "/assets/logo.png";
const Google = "/assets/googleIcon.png";
import HomeSwiper from "../component/HomeSwipper";
import RoadMap from "../component/RoadMap";
import Slider from "../component/Slider";
import HallofFameCardTwo from "../component/HallofFameCardTwo";
import Faqs from "../component/MachineLearning/Faqs";
// const WorldMap = "/assets/worldMap.png";
// const WorldMap = "/assets/WorldMap4.gif";
const Video5 = "/assets/Video4.mp4"; // moved to /public (Next.js serves media statically)
import SuccesStoriesHome from "../component/SuccesStoriesHome";
import { Helmet } from "@/lib/helmet-compat";
import { HomePageFaqs } from "../Utils/Faqs/HomePageFaqs";
// import Query from "../component/Query/Query";
// const QueryIcon = "/assets/QueryIcon.png";
import Query from "../component/Query/Query";
const Geometric = "/assets/Geometric.png";
import Forms from "../component/Forms/Forms";
const EmailImage = "/assets/Email5.webp";
const EnvelopLight = "/assets/EnvelopLight.png";
const Page1 = "/assets/Email3.png";
const Page2 = "/assets/Email4.png";
const Paper3 = "/assets/Paper3.svg";
const Paper2 = "/assets/Paper2New.svg";
import { Link, useLocation } from "@/lib/router-compat";
import HomeCardSwiper from "../component/HomeCardSwiper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import { Typewriter } from "react-simple-typewriter";
const FireWork = "/assets/Firework1.gif";
const Rocket = "/assets/RocketGif1.gif";
const Christmas1 = "/assets/Christmas.png";
const Christmas2 = "/assets/Christmas2.png";
const Snow = "/assets/Snow.png";
const SnowFloor = "/assets/SnowFloor.png";
import Snowfall from "react-snowfall";
const SnowFlakes = "/assets/SnowFlakes.png";
import HomeCourseComponent from "../component/HomeCourseComponent";
import PlacementSupport from "../component/MachineLearning/PlacementSupport";
import { PlacementSupportInfo } from "../Utils/MachineLearning/PlacementSupportInfo";
import Themes from "../component/Themes/Themes";
import TrustPilotSwipper from "../component/TrustPilotSwipper";
import { motion, useInView } from "framer-motion";
const GeometryLight = "/assets/GeometryLight.png";
const letterlight = "/assets/letterlightn.png";
const letterlight1 = "/assets/letterlight1.png";
import HomeHero from "../component/HomeHero";
import HomeHeroSection from "../component/home/HomeHeroSection";
const NewMap = "/assets/Home/UpdatedMap.svg";
import FellowShipCourseComponent from "../component/FellowShipCourseComponent";
const referandearn = "/assets/Home/referandearn.svg";
import { impact } from "../Utils/ImpactNumber";
import CountUp from "react-countup";
import ImpactGrid from "../component/ImpactGrid";
const NewsLetter = "/assets/Home/BGNewsLatter.svg";
const NewsLetterFirst = "/assets/Home/NewsLetterOne.svg";
const NewsLteerTwo = "/assets/Home/NewsImageBig.svg";
import JobsSlider from "../component/JobsSlider";
const mobileMap = "/assets/Home/MobileMap.svg";
import DreamJobSwiper from "../component/DreamJobSwiper";
import PlacementSupportSwiper from "../component/PlacementSupportSwiper";
const NewsMobile = "/assets/Home/NewsMobile.png";
import MobileFooter from "../component/MobileFooter";
import AccredationSwiper from "../component/AccredationSwiper";
import SignUpBanner from "../component/SignUpBanner";
import { press } from "../Utils/Press/Press";
import PressSlider from "../component/PressSlider/PressSlider";
import "./HeroHome.css";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import TeamSlider from "../component/TeamSlider";
import ChatBot from "@/component/ChatBot/ChatBot";
//import HomeHeroSwipper from "../component/HomeHeroSwipper";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
      staggerChildren: 0.15,
    },
  },
  exit: { opacity: 0, y: 80, transition: { duration: 0.5, ease: "easeIn" } },
};

// import DiwaliPopUp from "../component/DiwaliPopUp";
const Home = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState("placed");
  gsap.registerPlugin(useGSAP);
  const headTitleRef = useRef(null);
  const location = useLocation();

  // Force scroll to top on mount and when navigating to the homepage
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const handleClick = () => {
    setActive((prev) => (prev === "placed" ? "success" : "placed"));
  };

  const [closeForm, setCloseForm] = useState(false);
  const [hasFormBeenClosed, setHasFormBeenClosed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Refs for sections
  const refs = {
    hero: useRef(null),
    accreditation: useRef(null),
    courses: useRef(null),
    success: useRef(null),
    roadmap: useRef(null),
    toolkit: useRef(null),
    gains: useRef(null),
    companies: useRef(null),
    placement: useRef(null),
    network: useRef(null),
    reviews: useRef(null),
    newsletter: useRef(null),
    faq: useRef(null),
  };

  const isFaqInView = useInView(refs.faq, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!hasFormBeenClosed) {
      const timer = setTimeout(() => {
        setCloseForm(true);
        setHasFormBeenClosed(true);
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, [hasFormBeenClosed]);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kre8ly",
    image: "https://www.unifiedmentor.com/assets/logo-gCk1l8fB.png",
    url: "https://www.unifiedmentor.com/",
    telephone: "062838 00330",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Cyber City, WeWork DLF Forum, DLF Phase 3, Gurugram, Haryana 122002",
      addressLocality: "Gurugram",
      postalCode: "122002",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "22:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/Unifiedmentor",
      "https://www.youtube.com/@_Unifiedmentor",
      "https://twitter.com/unifiedmentor",
    ],
  };

  const schemaMarkup1 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Kre8ly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kre8ly is an online education platform that offers a wide range of Courses to help individuals enhance their skills and knowledge in various fields. Our platform provides a convenient and flexible way to access high-quality educational content from anywhere.",
        },
      },
      {
        "@type": "Question",
        name: "How do I sign up for Courses on Kre8ly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signing up for Courses on Kre8ly is easy. Simply purchase a Course and we will handle rest of it. You will be given access to our LMS portal before starting of batch thorought email.",
        },
      },
      {
        "@type": "Question",
        name: "Are the Courses on Kre8ly self-paced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most of the Courses on Kre8ly are self-paced. This means you can learn at your own convenience and set your own study schedule. You can access the Course materials and lectures whenever it suits you best.",
        },
      },
      {
        "@type": "Question",
        name: "What types of Courses are available on Kre8ly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, many of our Courses offer certificates of completion that you can showcase on your resume or share on your professional profiles. Certificates demonstrate your dedication to continuous learning and can enhance your career prospects.",
        },
      },
      {
        "@type": "Question",
        name: "How can I interact with instructors and other learners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kre8ly provides a platform for interaction between instructors and learners. You can participate in discussion forums, ask questions, and engage in conversations with both the instructors and fellow learners to enhance your understanding of the Course material.",
        },
      },
      {
        "@type": "Question",
        name: "Is technical support available if I encounter any issues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our dedicated support team is available to assist you with any technical issues or queries you may have. You can reach out to us via email at info@kre8ly.com or through our customer support portal.",
        },
      },
      {
        "@type": "Question",
        name: "Can I access the Course materials on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our platform is designed to be mobile-responsive. You can access your Courses and learning materials on various devices, including smartphones and tablets, making it convenient to learn on the go.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I need to pause my studies or take a break?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kre8ly understands that life can get busy. You can pause your studies and pick up where you left off whenever you're ready. Your progress will be saved, and you can resume learning at your own pace.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a refund policy in case I'm not satisfied with a Course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kre8ly's refund policy varies based on the specific Course and circumstances. Please refer to our Cancellation and Refund Policy for detailed information. If you have concerns about a Course, you can reach out to our support team to discuss your options.",
        },
      },
    ],
  };

  const schemaMarkup2 = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Kre8ly - Top Online Courses Platform & Training",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "2573",
      bestRating: "5",
      worstRating: "1",
    },
  };

  {
    /* Card data for Section with cards for courses, fellowship, jobs, Resume Builder, Ats, and Know your CTC */
  }
  const offerCards = [
    {
      id: 1,
      title: "Fellowship",
      subtitle:
        "Get dedicated career guidance and mentoring from our mentors to enhance your resume using our builder.",
      link: "/fellowships",
      target: "Yes",
    },
    {
      id: 2,
      title: "Courses",
      subtitle:
        "Get dedicated career guidance and mentoring from our mentors to enhance your resume using our builder.",
      link: "/courses",
      target: "Yes",
    },
    {
      id: 3,
      title: "ATS",
      subtitle:
        "Get dedicated career guidance and mentoring from our mentors to enhance your resume using our builder.",
      link: "https://jobs.unifiedmentor.com/ats",
      target: "Yes",
    },
    {
      id: 4,
      title: "Resume Builder",
      subtitle:
        "Get dedicated career guidance and mentoring from our mentors to enhance your resume using our builder.",
      link: "https://jobs.unifiedmentor.com/student/dashboard",
      target: "Yes",
    },
    {
      id: 5,
      title: "Job Portal",
      subtitle:
        "Get dedicated career guidance and mentoring from our mentors to improve your job prospects on our portal.",
      link: "/jobs",
      target: "Yes",
    },
    {
      id: 6,
      title: "Know your CTC",
      subtitle:
        "Optimize your resume with our AI-powered Resume Checker to meet industry standards and increase your chances of getting hired.",
      link: "https://kyc.unifiedmentor.com/",
      target: "Yes",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Kre8ly: Top Online Courses Platform & Training</title>

        {/* Meta Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Kre8ly,Job-Oriented Online Courses,Best Online Courses Platform,Data Science Online Course,Digital Marketing Certification,Web Development Online Course,Online Training Platform,Career-Focused Certification Courses,Best Online Courses for Jobs
Skill Development Courses"
        />

        {/* Meta Description */}
        <meta
          name="description"
          content="We offer the best job-oriented online certification courses in data science, digital marketing, web development and more. Join the best online courses platform."
        />
        {/* Canonical Link */}
        <link rel="canonical" href="https://www.unifiedmentor.com/" />

        {/* Meta Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Kre8ly: Online Certification Courses & Live Training"
        />
        <meta property="og:url" content="https://unifiedmentor.com/" />
        <meta
          property="og:description"
          content="We offer the best job-oriented online certification courses in data science, digital marketing, web development and more. Join the best online courses platform."
        />

        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup1)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup2)}
        </script>
      </Helmet>
      {/* ${darkMode ? "" : "bg-custom-light-gradient"} */}
      <div className={` h-full flex items-center justify-center relative`}>
        {/* <Snowfall
          color="#fff"
          snowflakeCount={400}
          style={{
            zIndex: 20,
          }}
          speed={[0, 0.5]}
          wind={[0, 0.5]}
        /> */}
        {closeForm && (
          <div className="fixed top-0 w-full h-full z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-start p-4 md:p-2">
            <Forms setCloseForm={setCloseForm} />
          </div>
        )}

        {/* {diwalipopUp && (
          <div className="fixed top-0 w-full h-full z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-start">
            <DiwaliPopUp setCloseDiwaliPopUp={setDiwalipopUp} />
          </div>
        )} */}
        <main className="w-full h-full flex flex-col items-center justify-center text-center font-Poppins overflow-hidden">
          {/* Hero Section */}
          <HomeHeroSection />

          {/* <hr className="w-1/2 h-px rounded bg-brand dark:bg-primary " /> */}
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

          {/* Section with cards for courses, fellowship, jobs, Resume Builder, Ats, and Know your CTC */}
          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-2 relative bg-surface-sunken px-2 md:px-6 py-20"
          >
            <h2
              data-aos="zoom-out"
              // data-aos-delay="0"
              className="text-lg md:text-3xl text-content font-semibold w-full mb-3"
            >
              What we have for you
            </h2>
            <p
              data-aos="zoom-in"
              // data-aos-delay="0"
              className="text-sm w-full text-content-secondary hidden md:block"
            >
              At Kre8ly, we focus on delivering career-focused courses
              that help you gain practical skills and land real jobs quickly.
              Learn the skills employers are looking for and accelerate your
              career growth today.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full"
            >
              {offerCards.map((card) => {
                const isExternal = card.link?.startsWith("http");
                const CardInner = (
                  <div className="rounded-2xl border border-line bg-surface p-6 h-full w-full text-left shadow-sm hover:shadow-md transition-all duration-300 group">
                    <h3 className="text-xl font-semibold text-content">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-content-secondary dark:text-content-muted">
                      {card.subtitle}
                    </p>
                    <div className="mt-4 inline-flex items-center font-semibold text-brand">
                      Explore
                      <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </div>
                );

                return isExternal ? (
                  <a
                    key={card.id}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    {CardInner}
                  </a>
                ) : (
                  <Link key={card.id} to={card.link} className="w-full">
                    {CardInner}
                  </Link>
                );
              })}
            </div>
          </section> */}

          <section className="w-full bg-surface-sunken px-2 md:px-6 py-10 md:py-20">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-center md:md:mb-16 mb-4 "
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                What we have for you
              </h2>
              <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                At Kre8ly, we focus on delivering career-focused courses that
                help you gain practical skills and land real jobs quickly. Learn
                the skills employers are looking for and accelerate your career
                growth today.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl p-8 border border-line transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-brand-subtle text-brand rounded-lg flex items-center justify-center">
                  <FaUserGraduate className="w-6 h-6 text-current" />
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-content">Fellowship</h3>

                {/* Description */}
                <p className="text-content-secondary leading-relaxed max-w-xs">
                  Get dedicated career guidance and mentoring from our mentors
                  to enhance your resume using our builder.
                </p>

                {/* Link */}
                <Link
                  to="/fellowships"
                  className="explore-link inline-flex items-center justify-center text-brand font-medium hover:text-brand-hover"
                >
                  Explore
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl p-8 border border-line flex flex-col items-center text-center transform hover:scale-105 transition-all duration-500">
                <div className="mb-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-success-subtle text-success rounded-lg flex items-center justify-center mb-4">
                    <HiOutlineBookOpen className="w-6 h-6 text-current" />
                  </div>
                  <h3 className="text-xl font-bold text-content mb-3">
                    Courses
                  </h3>
                  <p className="text-content-secondary leading-relaxed mb-6">
                    Get dedicated career guidance and mentoring from our mentors
                    to enhance your resume using our builder.
                  </p>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <Link
                    to="/courses"
                    className="explore-link inline-flex items-center text-brand font-medium hover:text-brand-hover"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div> */}

              <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl p-8 border border-line transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-success-subtle text-success rounded-lg flex items-center justify-center">
                  <HiOutlineBookOpen className="w-6 h-6 text-current" />
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-content">Courses</h3>

                {/* Description */}
                <p className="text-content-secondary leading-relaxed max-w-xs">
                  Get dedicated career guidance and mentoring from our mentors
                  to enhance your resume using our builder.
                </p>

                {/* Link */}
                <Link
                  to="/courses"
                  className="explore-link inline-flex items-center justify-center text-brand font-medium hover:text-brand-hover"
                >
                  Explore
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 p-8 border border-line  flex flex-col items-center text-center ">
                <div className="mb-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-info-subtle text-info rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-current"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-content mb-3">ATS</h3>
                  <p className="text-content-secondary leading-relaxed mb-6">
                    Get dedicated career guidance and mentoring from our mentors
                    to enhance your resume using our builder.
                  </p>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <Link
                    to={"https://jobs.unifiedmentor.com/ats"}
                    className="explore-link inline-flex items-center text-brand font-medium hover:text-brand-hover"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div> */}

              <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl p-8 border border-line transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-info-subtle text-info rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-content">ATS</h3>

                {/* Description */}
                <p className="text-content-secondary leading-relaxed max-w-xs">
                  Get dedicated career guidance and mentoring from our mentors
                  to enhance your resume using our builder.
                </p>

                {/* Link */}
                <Link
                  to={"https://jobs.unifiedmentor.com/ats"}
                  className="explore-link inline-flex items-center justify-center text-brand font-medium hover:text-brand-hover"
                >
                  Explore
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl p-8 border border-line transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center">
                <div className="mb-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-warning-subtle text-warning rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-current"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-content mb-3">
                    Resume Builder
                  </h3>
                  <p className="text-content-secondary leading-relaxed mb-6">
                    Get dedicated career guidance and mentoring from our mentors
                    to enhance your resume using our builder.
                  </p>
                </div>
                <div className="w-full h-full bg-gray-600 flex items-center justify-center ">
                  <Link
                    to={"https://jobs.unifiedmentor.com/student/dashboard"}
                    className="explore-link inline-flex items-center text-brand font-medium hover:text-brand-hover"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div> */}

              <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl p-8 border border-line transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-warning-subtle text-warning rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-content">
                  Resume Builder
                </h3>

                {/* Description */}
                <p className="text-content-secondary leading-relaxed max-w-xs">
                  Get dedicated career guidance and mentoring from our mentors
                  to enhance your resume using our builder.
                </p>

                {/* Link */}
                <Link
                  to={"https://jobs.unifiedmentor.com/student/dashboard"}
                  className="explore-link inline-flex items-center justify-center text-brand font-medium hover:text-brand-hover"
                >
                  Explore
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 p-8 border border-line flex flex-col items-center text-center">
                <div className="mb-6 flex flex-col items-center">
                  <div className="w-12 h-12  bg-brand-subtle rounded-lg flex items-center justify-center mb-4">
                    <HiOutlineBuildingOffice2 className="w-6 h-6 text-current" />
                  </div>
                  <h3 className="text-xl font-bold text-content mb-3">
                    Job Portal
                  </h3>
                  <p className="text-content-secondary leading-relaxed mb-6">
                    Get dedicated career guidance and mentoring from our mentors
                    to improve your job prospects on our portal.
                  </p>
                </div>
                <div className="w-full h-full flex items-center justify-center ">
                  <Link
                    to={"/jobs"}
                    className="explore-link inline-flex items-center text-brand font-medium hover:text-brand-hover"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div> */}

              <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl p-8 border border-line transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-brand-subtle text-brand rounded-lg flex items-center justify-center">
                  <HiOutlineBuildingOffice2 className="w-6 h-6 text-current" />
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-content">Job Portal</h3>

                {/* Description */}
                <p className="text-content-secondary leading-relaxed max-w-xs">
                  Get dedicated career guidance and mentoring from our mentors
                  to improve your job prospects on our portal.
                </p>

                {/* Link */}
                <Link
                  to={"/jobs"}
                  className="explore-link inline-flex items-center justify-center text-brand font-medium hover:text-brand-hover"
                >
                  Explore
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* <div className=" bg-surface rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 p-8 border border-line flex flex-col items-center text-center">
                <div className="mb-6 flex flex-col items-center">
                  <div className="w-12 h-12  bg-error-subtle rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-current"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-content mb-3">
                    Know your CTC
                  </h3>
                  <p className="text-content-secondary leading-relaxed mb-6">
                    Optimize your resume with our AI-powered Resume Checker to
                    meet industry standards and increase your chances of getting
                    hired.
                  </p>
                </div>
                <div className="w-full h-full bg-gray-600 flex items-center justify-center ">
                  <Link
                    to={"https://kyc.unifiedmentor.com/"}
                    className="explore-link inline-flex items-center text-brand font-medium hover:text-brand-hover"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div> */}

              <div className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl p-8 border border-line transform hover:scale-105 transition-all duration-500 flex flex-col items-center text-center space-y-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-error-subtle text-error rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-content">
                  Know your CTC
                </h3>

                {/* Description */}
                <p className="text-content-secondary leading-relaxed max-w-xs">
                  Optimize your resume with our AI-powered Resume Checker to
                  meet industry standards .
                </p>

                {/* Link */}
                <Link
                  to={"https://kyc.unifiedmentor.com/"}
                  className="explore-link inline-flex items-center justify-center text-brand font-medium hover:text-brand-hover"
                >
                  Explore
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-2 relative "
          > */}
          {/* <h2
              data-aos="zoom-out"
              // data-aos-delay="0"
              className="text-lg md:text-3xl text-content font-semibold w-full mb-3"
            >
              Top Reasons Students Choose Kre8ly for Career Growth
            </h2>
            <p
              data-aos="zoom-in"
              // data-aos-delay="0"
              className="text-sm w-full text-content-secondary hidden md:block"
            >
              At Kre8ly, we focus on delivering career-focused courses
              that help you gain practical skills and land real jobs quickly.
              Learn the skills employers are looking for and accelerate your
              career growth today.
            </p> */}

          {/* <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
                Top Reasons Students Choose Kre8ly for Career Growth
              </h2>
              <p className="text-lg text-content-secondary max-w-4xl mx-auto leading-relaxed">
                At Kre8ly, we focus on delivering career-focused courses
                that help you gain practical skills and land real jobs quickly.
                Learn the skills employers are looking for and accelerate your
                career growth today.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-delay="0"
              className="flex items-center mt-3 justify-between bg-surface-sunken rounded-full py-3 px-4 md:py-3 md:px-5 cursor-pointer relative w-full md:max-w-md"
              onClick={handleClick}
            >
              <div
                className={`absolute top-1 bottom-1 left-2 w-[calc(50%-1.2rem)] bg-surface border border-brand  rounded-full transition-transform duration-300 ${
                  active === "success"
                    ? "transform translate-x-[calc(100%+1.5rem)]"
                    : ""
                }`}
              ></div>
              <div
                data-aos="zoom-in"
                // data-aos-delay="0"
                className="relative z-10 w-1/2 text-center"
              >
                <p
                  className={`text-xs md:text-sm  ${
                    active === "placed" ? "text-content " : "text-content "
                  }`}
                >
                  Placed Students
                </p>
              </div>
              <div
                data-aos="zoom-in"
                // data-aos-delay="0"
                className="relative z-10 w-1/2 text-center"
              >
                <p
                  className={`text-xs md:text-sm ${
                    active === "success" ? "text-content" : "text-content"
                  }`}
                >
                  Success Stories
                </p>
              </div>
            </div>

            {active === "placed" && (
              <HallofFameCardTwo
                hallofFameInfo={NewHallOfFrameInfos}
                darkMode={darkMode}
              />
            )}
            {active === "success" && <SuccesStoriesHome darkMode={darkMode} />}
          </section> */}
          {/* <hr className="w-1/2 h-px rounded bg-[#E5E3DF] dark:bg-primary " /> */}
          {/* <section
            data-aos="fade-up"
data-aos-delay="0"
data-aos-duration="800"
            data-aos-delay="1000"
          >
            <motion.h2
              variants={headingVariants}
              className="text-xl md:text-5xl text-content font-semibold mb-10 md:mb-5">
              Roadmap of Internship Journey
            </motion.h2>
            <div>
              <RoadMap />
            </div>
          </section> */}
          {/* <hr className="w-1/2 h-px rounded bg-primary  -mt-10" /> */}
          {/* <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
            className="w-full h-full text-center flex flex-col items-center justify-center  gap-5 relative bg-surface-sunken py-10"
          >
            <div className="absolute -top-48 w-[250px] md:w-[450px] -left-10 select-none blur-xl dark:blur-md  z-10">
              <figure>
                <img src={Ellipse} alt="Ellipse" className="hidden" />
              </figure>
            </div> */}
          {/* <h2
              data-aos="zoom-in"
              // data-aos-delay="0"
              className="text-lg md:text-3xl text-content font-semibold"
            >
              Unified Career Toolkit
            </h2>
            <p
              data-aos="zoom-in"
              // data-aos-delay="0"
              className="text-xs md:text-sm hidden md:block text-content-secondary w-full "
            >
              Live career mentorship with industry experts
            </p> */}

          {/* <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
                Unified Career Toolkit
              </h2>
              <p className="text-lg text-content-secondary max-w-4xl mx-auto leading-relaxed">
                Live career mentorship with industry experts
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-delay="0"
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10 relative z-20 w-full"
            >
              {UnifiedStepInfos.map((Course) => (
                <UnifiedStep
                  key={Course.id}
                  data={Course}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </section> */}
          {/* <hr className="w-1/2 h-px rounded bg-brand dark:bg-primary " /> */}

          {/* why choose UM Start */}
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
            className="w-full h-full text-center flex flex-col items-center justify-center  gap-5 relative px-2 md:px-6 py-10 md:py-20"
          >
            <div className="absolute -top-48 w-[250px] md:w-[450px] -left-10 select-none blur-xl dark:blur-md  z-10">
              <figure>
                <img src={Ellipse} alt="Ellipse" className="hidden" />
              </figure>
            </div>

            {/* <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
                Why Choose Kre8ly?
              </h2>
              <p className="text-lg text-content-secondary max-w-4xl mx-auto leading-relaxed">
                Bridge the gap between college and your career — live learning
                with industry experts, real-world projects, and top placements.
              </p>
            </div> */}

            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-center md:md:mb-16 mb-4 "
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                Why Choose Kre8ly?
              </h2>
              <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                Bridge the gap between college and your career — live learning
                with industry experts, real-world projects, and top placements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card card-enter feature-card bg-surface rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-line transform hover:scale-105 transition-all duration-500">
                <div className="icon-container w-16 h-16 bg-info-subtle rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-content mb-4">
                  Live Learning with Industry Experts
                </h3>
                <p className="text-content-secondary leading-relaxed">
                  Personalized mentorship and real-time guidance from
                  professionals actively working in top tech companies.
                </p>
              </div>

              <div className="card card-enter feature-card bg-surface rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-line transform hover:scale-105 transition-all duration-500">
                <div className="icon-container w-16 h-16 bg-success-subtle rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-content mb-4">
                  Real-World Projects
                </h3>
                <p className="text-content-secondary leading-relaxed">
                  Hands-on experience building production-ready applications
                  that you can proudly showcase in your portfolio.
                </p>
              </div>

              <div className="card card-enter feature-card bg-surface rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-line transform hover:scale-105 transition-all duration-500">
                <div className="icon-container w-16 h-16 bg-brand-subtle rounded-full flex items-center justify-center mb-6">
                  <HiOutlineBuildingOffice2 className="w-8 h-8 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-content mb-4">
                  Job Placements & Career Support
                </h3>
                <p className="text-content-secondary leading-relaxed">
                  Direct placement into top tech roles with comprehensive
                  interview preparation and career guidance support.
                </p>
              </div>

              <div className="card card-enter feature-card bg-surface rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-line transform hover:scale-105 transition-all duration-500">
                <div className="icon-container w-16 h-16 bg-warning-subtle rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-warning"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-content mb-4">
                  Fellowship Programs & AI Tools
                </h3>
                <p className="text-content-secondary leading-relaxed">
                  Advanced AI-powered tools for resume scoring, mock interviews,
                  and CTC analysis to maximize your potential.
                </p>
              </div>
            </div>
          </section>
          {/* why choose UM End */}

          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-3  relative bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
          >
            <div className="absolute -top-48 w-[250px] md:w-[450px] right-0 select-none blur-xl dark:blur-md  z-10">
              <figure>
                <img
                  src={Ellipse}
                  alt="Ellipse"
                  className="hidden dark:block"
                />
              </figure>
            </div>
            {/* <h3
              data-aos="zoom-out"
              // data-aos-delay="0"
              className="text-lg md:text-3xl text-content font-semibold mb-3"
            >
              What You’ll Gain with Kre8ly: Skills, Certifications, and
              Career Growth
            </h3>
            <p
              data-aos="zoom-out"
              // data-aos-delay="0"
              className="text-xs md:text-sm text-content-secondary w-full hidden md:block"
            >
              At Kre8ly, you’ll gain industry-recognized certifications,
              hands-on experience with live projects, flexible learning options,
              and expert career support– all designed to get you hired faster
              and smarter.
            </p> */}
            {/* <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
                What You’ll Gain with Kre8ly: Skills, Certifications,
                and Career Growth
              </h2>
              <p className="text-lg text-content-secondary max-w-4xl mx-auto leading-relaxed">
                At Kre8ly, you’ll gain industry-recognized
                certifications, hands-on experience with live projects, flexible
                learning options, and expert career support– all designed to get
                you hired faster and smarter.
              </p>
            </div> */}

            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                What You’ll Gain with Kre8ly: Skills, Certifications, and Career
                Growth
              </h2>
              <p className="text-lg text-content-secondary max-w-2xl mx-auto">
                At Kre8ly, you’ll gain industry-recognized certifications,
                hands-on experience with live projects, flexible learning
                options, and expert career support– all designed to get you
                hired faster and smarter.
              </p>
            </div>
            {/* <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-delay="0"
              className="md:grid grid-cols-2 lg:grid-cols-3  md:gap-8 relative z-20 hidden"
            >
              {DreamJobSection.map((feature, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  // data-aos-delay="0"
                  key={index}
                  className="flex flex-col items-center w-full mx-auto mt-5"
                >
                  <figure className="mb-4">
                    <img
                      data-aos="flip-down"
                      // data-aos-delay="0"
                      src={feature.imgSrc}
                      alt={feature.imgAlt}
                      className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all duration-200 cursor-pointer"
                    />
                  </figure>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    // data-aos-delay="0"
                    className="text-sm md:text-xl font-semibold text-content"
                  >
                    {feature.title}
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    // data-aos-delay="0"
                    className="text-[10px] md:text-sm mt-2 text-content-secondary"
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div> */}

            <div
              className="md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 max-w-full mx-auto py-16 hidden"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
            >
              {DreamJobSection.map((feature, index) => (
                <div
                  key={index}
                  className="card card-enter bg-surface rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 p-8 border border-line "
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        data-aos="flip-down"
                        // data-aos-delay="0"
                        src={feature.imgSrc}
                        alt={feature.imgAlt}
                        className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-all duration-200 cursor-pointer"
                      />
                    </div>
                  </div>
                  <h3 className="font-bold text-content text-lg mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base text-content-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <DreamJobSwiper
              DreamJobSection={DreamJobSection}
              darkMode={darkMode}
            />
          </section>
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-10 px-2 md:px-6 py-10 md:py-20"
          >
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                Our learners have secured jobs at 100+ product companies
              </h2>
            </div>
            <Slider darkMode={darkMode} />
          </section>
          {/* <hr className="w-1/2 h-px rounded text-content dark:bg-primary " /> */}
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-delay="0"
            className="w-full h-full flex flex-col items-center justify-center text-center md:gap-10 bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
          >
            <PlacementSupport
              PlacementSupportInfo={PlacementSupportInfo}
              darkMode={darkMode}
            />
            <PlacementSupportSwiper
              PlacementSupportInfo={PlacementSupportInfo}
              darkMode={darkMode}
            />
          </section>
          {/* <hr className="w-1/2 h-px rounded bg-brand dark:bg-primary " /> */}
          <section className="w-full h-full flex flex-col items-center justify-center text-center md:gap-10 px-2 md:px-6 py-10 md:py-20">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-center mb-4 md:mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-content">
                Join our rapidly growing learning network
              </h2>
            </div>

            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
              <ImpactGrid darkMode={darkMode} />
            </div>
          </section>
          {/* <hr className="w-1/2 h-px rounded bg-brand dark:bg-primary hidden md:block" /> */}
          {/* <section className="w-full h-full flex flex-col items-center justify-center text-center gap-5 md:gap-10">

          </section> */}
          {/* <hr className="w-1/2 h-px rounded bg-brand dark:bg-primary hidden md:block" /> */}
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            id="Reviews"
            className="w-full h-full flex flex-col items-center justify-center text-center gap-5 md:gap-10 bg-surface-sunken px-2 md:px-6 py-10 md:py-20"
          >
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-center mb-4 md:mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
                This is what Google Reviews say about Us
              </h2>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full h-full mt-0"
            >
              <HomeSwiper darkMode={darkMode} />
            </div>
          </section>

          {/* <hr className="w-1/2 h-px rounded bg-brand dark:bg-primary " /> */}
          <section className="w-full px-2 md:px-6 py-10 md:py-20">
            <PressSlider />
          </section>

          <section className="flex flex-col md:flex-row gap-4 w-full md:h-80">
            {/* Refer & Earn Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full md:w-1/3 relative bg-brand-subtle text-content border border-line overflow-hidden rounded-card flex flex-col items-center justify-center text-center"
            >
              <div className="flex flex-row md:flex-col items-center pt-4 md:pt-20">
                <div className="flex flex-col items-center">
                  <h3 className="text-base md:text-2xl font-medium mb-4 text-content">
                    Refer & Earn <br /> Exciting Rewards!
                  </h3>
                  <Link
                    to="/refer-and-earn"
                    className="bg-brand text-brand-fg hover:bg-brand-hover transition-colors duration-200 px-4 py-2 text-sm font-medium rounded-control focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    Get Started
                  </Link>
                </div>
                <figure className="">
                  <img
                    src={referandearn}
                    alt="Refer and Earn Illustration"
                    className="w-40 h-40 md:w-full md:h-full object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Newsletter Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="relative w-full overflow-hidden border border-line bg-surface shadow-sm flex flex-col md:flex-row-reverse items-center justify-between text-center md:text-left gap-4 p-4 rounded-card"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat dark:hidden"
                style={{ backgroundImage: `url(${NewsLetter})` }}
              />
              <div className="relative z-10 w-full md:w-2/5 flex justify-center group">
                <figure className="flex-shrink-0 w-[161px] h-[130px] md:w-full md:h-auto">
                  <img
                    src={NewsLetterFirst}
                    alt="Newsletter Illustration"
                    className="w-full h-full object-contain transition-opacity duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-0 cursor-pointer -scale-x-100"
                  />

                  <img
                    src={NewsLteerTwo}
                    alt="Newsletter Hover Illustration"
                    className="w-full h-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100 -scale-x-100 cursor-pointer"
                  />
                </figure>
              </div>
              <div className="relative z-10 w-full md:w-2/3 flex flex-col items-center md:items-start md:pl-6">
                <h2 className="text-xl md:text-3xl text-content leading-snug font-medium">
                  Find Out Job Search With Expert Career Guidance{" "}
                  <span className="text-brand">News Letter</span>
                </h2>
                <a
                  href="https://www.linkedin.com/newsletters/career-navigator-7226442640328687616/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3"
                >
                  <button className="bg-brand text-brand-fg hover:bg-brand-hover px-4 py-2 md:px-6 md:py-3 font-semibold rounded-control text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:shadow-focus">
                    Subscribe
                  </button>
                </a>
                <div className="flex flex-col gap-2 mt-3">
                  <p className="text-sm text-content font-semibold">
                    Trusted by 50k+ Customers
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-warning">
                      <FaStar className="text-warning text-sm md:text-lg" />
                      <FaStar className="text-warning text-sm md:text-lg" />
                      <FaStar className="text-warning text-sm md:text-lg" />
                      <FaStar className="text-warning text-sm md:text-lg" />
                      <FaStar className="text-warning text-sm md:text-lg" />
                    </div>
                    <p className="text-content-secondary text-sm">
                      4.7/5 • 2k+ Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full h-full flex flex-col items-center justify-center gap-10 px-2 md:px-6 py-10 md:py-20">
            <Faqs varient="home" Faqs={HomePageFaqs} darkMode={darkMode} />
          </section>
          <Query darkMode={darkMode} />
          <ChatBot darkMode={darkMode} />
        </main>
      </div>
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default Home;
