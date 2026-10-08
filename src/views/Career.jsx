import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PrivacyHeader from "../component/PrivacyHeader";
const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";
const HeaderImage2 = "/assets/Career/Careers.svg";
const CareerHero = "/assets/Career/career_hero.jpg";
// import { MdArrowOutward } from "react-icons/md";
import { Link } from "@/lib/router-compat";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsFiletypeHtml } from "react-icons/bs";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { LiaPenNibSolid } from "react-icons/lia";
import { DiReact } from "react-icons/di";
import { MdOutlinePerson4 } from "react-icons/md";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const color = [
  "bg-[linear-gradient(180deg,_#ffffff_0%,_#d3e5f2_100%)]",
  "bg-[linear-gradient(180deg,_#ffffff_0%,_#fedece_100%)]",
  "bg-[linear-gradient(180deg,_#ffffff_0%,_#f7eab9_100%)]",
  "bg-[linear-gradient(180deg,_#ffffff_0%,_#ccc4f4_100%)]",
];

const Card = ({ Icon, Title, Description, link, index }) => {
  return (
    <div
      className={`p-6 md:p-8 rounded-lg shadow-lg max-w-md mx-auto hover:scale-105 transition-all duration-300`}
    >
      <div
        data-aos="flip-down"
        data-aos-delay="700"
        className="flex items-center gap-4 mb-4 justify-between"
      >
        <div className="flex items-center gap-2">
          <Icon className="text-lg dark:text-white md:text-3xl" />
          <p
            data-aos="fade-up"
            data-aos-delay="700"
            className="font-semibold text-sm md:text-lg text-content"
          >
            {Title}
          </p>
        </div>
        <Link to={link} target="_blank">
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-8 h-8 md:w-10 md:h-10 rounded-md group hover:bg-brand transition-all duration-300 bg-surface flex items-center justify-center"
          >
            {/* <MdArrowOutward className="text-blue-500" size={20} /> */}
            <FiArrowUpRight
              className="text-blue-500 group-hover:text-white"
              size={20}
            />
          </div>
        </Link>
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="700"
        className="text-content dark:text-content-muted text-xs md:text-sm"
      >
        {Description}
      </p>
    </div>
  );
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

const Career = ({ darkMode, setDarkMode }) => {
  const CareerInfo = [
    {
      Icon: MdOutlinePerson4,
      Title: "Campus Ambassador",
      Description: `Elevate your campus experience as a Campus Ambassador, spreading educational innovation and fostering engagement for our EdTech startup.`,
      Link: "https://forms.gle/Cv39xjPXrpF3ky216",
    },
    {
      Icon: BsFiletypeHtml,
      Title: "Web Development Mentor",
      Description: `Elevate your campus experience as a Campus Ambassador, spreading educational innovation and fostering engagement for our EdTech startup.`,
      Link: "https://forms.gle/Dgi4DxuStjiuppKb9",
    },
    {
      Icon: PiSuitcaseSimpleLight,
      Title: "Business Development Intern",
      Description: `Elevate your campus experience as a Campus Ambassador, spreading educational innovation and fostering engagement for our EdTech startup.`,
      Link: "https://forms.gle/Dgi4DxuStjiuppKb9",
    },
    {
      Icon: LiaPenNibSolid,
      Title: "Graphic Designer",
      Description: `Elevate your campus experience as a Campus Ambassador, spreading educational innovation and fostering engagement for our EdTech startup.`,
      Link: "https://forms.gle/Dgi4DxuStjiuppKb9",
    },
    {
      Icon: DiReact,
      Title: "React Developer",
      Description: `Elevate your campus experience as a Campus Ambassador, spreading educational innovation and fostering engagement for our EdTech startup.`,
      Link: "https://forms.gle/Dgi4DxuStjiuppKb9",
    },
  ];

  const refs = {
    privacy: useRef(null),
    team: useRef(null),
    card: useRef(null),
  };

  const isPrivacyInView = useInView(refs.privacy, {
    once: true,
    margin: "-50px",
  });
  const isJoinTeamInview = useInView(refs.team, {
    once: true,
    margin: "-50px",
  });
  const isCardInView = useInView(refs.card, { once: true, margin: "-50px" });

  return (
    <div>
      <Helmet>
        <title>
          Careers at Kre8ly | Internships & Campus Roles in EdTech
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content="Kre8ly, careers, job opportunities, online education, join our team"
        />

        <link rel="canonical" href="https://www.kre8ly.com/careers" />

        <meta
          name="description"
          content="Join Kre8ly as a Campus Ambassador, Developer, Designer, or Intern. Grow your skills with exciting roles in our fast-growing EdTech startup."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="Kre8ly | Careers" />
        <meta
          property="og:description"
          content="Join Kre8ly's team and contribute to transforming online education. Discover job opportunities and become a part of our mission to innovate and excel in online learning."
        />

        {/* <!-- Twitter --> */}
        <meta name="twitter:title" content="Kre8ly | Careers" />
        <meta
          name="twitter:description"
          content="Discover career opportunities at Kre8ly. Join our innovative team and help shape the future of online education. Learn more about available positions and how to apply."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      
      <div
        className={` ${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        } min-h-screen flex flex-col items-center overflow-hidden`}
      >
        <main className="w-full ">
          <section
            id="hero"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full bg-gradient-to-br from-brand via-brand-active to-brand-hover  min-h-[20rem] h-full"
          >
            <PrivacyHeader
              br1="Join Our Team"
              br2="at Kre8ly"
              HeaderImage={HeaderImage}
              HeaderImage2={HeaderImage2}
              headingVariants={headingVariants}
              paragraphVariants={paragraphVariants}
              containerVariants={containerVariants}
              darkMode={darkMode}
              isPrivacyInView={isPrivacyInView}
              refs={refs}
              title="Join Our Team"
              subtitle="Discover Careers at Kre8ly"
              desc="Join the Kre8ly team and be part of a mission to transform education with innovation and technology. Explore exciting career opportunities, grow with us, and make an impact in empowering students and shaping future-ready professionals"
            />
          </section>
          <section className="text-left flex flex-col items-center gap-5 mt-4 md:mt-10">
            <div className="text-center">
              <h2
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-3xl lg:text-4xl font-semibold text-content mb-4"
              >
                Join Our Team
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-lg text-content-secondary max-w-2xl mx-auto content-center"
              >
                We're a dynamic and innovative team dedicated to transforming
                online education. Explore the opportunities below to become a
                part of Kre8ly's mission.
              </p>
            </div>
            {/* <h3
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-xl md:text-3xl font-semibold text-content text-center"
            >
              Become a part of Kre8ly
            </h3> */}
            <div className="">
              <div className="flex flex-wrap gap-4 md:gap-8 items-center overflow-hidden py-4 md:py-10 ">
                {CareerInfo.map((item, index) => (
                  <Card
                    key={index}
                    Icon={item.Icon}
                    Title={item.Title}
                    Description={item.Description}
                    link={item.Link}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
          <Query />
          <ChatBot darkMode={darkMode} />
        </main>
      </div>
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Career;