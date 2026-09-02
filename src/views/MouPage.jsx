import React, { useRef } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";
const HeaderImage2 = "/assets/Mou/Header2.png";
const DataSpace = "/assets/Mou/DataSpace.png";
const MOUImage1 = "/assets/Mou/MOU1.jpg";
const CompanyLogo = "/assets/Mou/CompanyLogo.png";
const Icfai = "/assets/Mou/ICFAI2.png";
const MOUImage2 = "/assets/Mou/MOU2.jpg";
const RDCollege = "/assets/Mou/RDCollege.png";
const MOUImage3 = "/assets/Mou/MOU3.jpg";
const MOUImage4 = "/assets/Mou/MOU4.jpg";
const MouGif = "/assets/Mou/Mou.gif";
const Nsu = "/assets/Mou/NSU.jpeg";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
const Ellipse = "/assets/Ellipse.webp";
const Group_5 = "/assets/Mou/Group_5.png";
const Group_6 = "/assets/Mou/Group%20_6.png";
import Snowfall from "react-snowfall";
const MOUImage5 = "/assets/Mou/nasscom3.jpg";
const NasscomLogo = "/assets/Mou/NasscomPng.png";
import { motion, useInView } from "framer-motion";
const MouImageNew = "/assets/Mou/MOU.svg";
// const MouImageNew = "/assets/Mou/mou_hero_img.jpg";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const MouPage = ({ darkMode, setDarkMode }) => {
  const collabs = [
    {
      image: MOUImage1,
      image_alt:
        "Kre8ly Collaboration with DataSpace Academy - Memorandum of Understanding (MOU) Announcement",
      title: "DataSpace Academy",
      content:
        "we're Thrilled to announce our Collaboration with Data Space academy!, We aim to provide unparallel opportunities for skill development and career growth",
      imageCompany: DataSpace,
      company_alt: "DataSpace Academy",
    },
    {
      image: MOUImage2,
      image_alt:
        "Kre8ly Collaboration with ICFAI University, Hyderabad - Memorandum of Understanding (MOU) Announcement",
      title: "ICFAI University, Hyderabad",
      content:
        "we're Thrilled to announce our Collaboration with ICFAI University, Hyderabad, We aim to provide unparallel opportunities for skill development and career growth",
      imageCompany: Icfai,
      company_alt: "ICFAI University, Hyderabad",
    },
    {
      image: MOUImage3,
      image_alt:
        "Kre8ly Collaboration with R.D.Engineering College, Ghaziabad - Memorandum of Understanding (MOU) Announcement",
      title: "R.D.Engineering College, Ghaziabad",
      content:
        "we're Thrilled to announce our Collaboration with R.D.Engineering College, Ghaziabad, We aim to provide unparallel opportunities for skill development and career growth",
      imageCompany: RDCollege,
      company_alt: "R.D.Engineering College, Ghaziabad",
    },
    {
      image: MOUImage4,
      image_alt:
        "Kre8ly Collaboration with Netaji Subhas University, Jamshedpur - Memorandum of Understanding (MOU) Announcement",
      title: "Netaji Subhas University, Jamshedpur",
      content:
        "we're Thrilled to announce our Collaboration with Netaji Subhas University, Jamshedpur, We aim to provide unparallel opportunities for skill development and career growth",
      imageCompany: Nsu,
      company_alt: "Netaji Subhas University, Jamshedpur",
    },
    {
      image: MOUImage5,
      image_alt:
        "Kre8ly Partnership Announcement with Nasscom- MOU Announcement",
      title: "Nasscom",
      content:
        "we're Thrilled to announce our Partnership with Nasscom, We aim to provide unparallel opportunities for skill development and career growth",
      imageCompany: NasscomLogo,
      company_alt: "Nasscom",
    },
  ];

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

  const refs = {
    collab: useRef(null),
  };

  const isCollabInView = useInView(refs.collab, {
    once: true,
    margin: "-50px",
  });

  const Colors = [
    "bg-[#E6EDFF] text-[#0044FF] border-brand/30",
    "bg-[#FFDCDC] text-[#D70303] border-[#FF9B9B]",
    "bg-[#F9D3FF] text-[#5E006E] border-[#E965FF]",
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
      } w-full h-full min-h-[60vh]`}
    >
      <Helmet>
        <title>Memorandum of Understanding (MOU) | Kre8ly</title>
        <meta
          name="description"
          content=" Explore the MOU between Kre8ly and industry partners. Learn how we collaborate to enhance learning opportunities and career growth."
        />
        <meta
          name="keywords"
          content="MOU, Kre8ly, industry collaboration, career growth, learning opportunities"
        />
        <meta name="author" content="Kre8ly" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.unifiedmentor.com/mou" />
      </Helmet>

      <div className="w-full h-full relative">
        {/* <Snowfall
          color="#fff"
          snowflakeCount={100}
          style={{
            zIndex: 20,
          }}
          speed={[0, 0.3]}
          wind={[0, 0.5]}
        /> */}
        <main className="w-full  ">
          {/* <h2
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="lg:hidden  text-content text-center  pb-9 text-lg md:text-3xl font-semibold ">
            Our Collabs
          </h2> */}
          <section
            id="hero"
            className="relative w-full h-full py-8 p-4 overflow-hidden bg-gradient-to-br from-brand via-brand-active to-brand-hover min-h-[30rem]"
          >
            {/* <Snowfall
          color="#fff"
          snowflakeCount={50}
          style={{
            zIndex: 20,
          }}
          speed={[0, 0.3]}
          wind={[0, 0.5]}
        /> */}
            <img
              src={Group_5}
              alt="bubbles"
              loading="lazy"
              className="absolute hidden md:block w-20 h-auto top-[20%] right-2"
            />
            <img
              src={Group_6}
              alt="bubbles"
              loading="lazy"
              className="absolute hidden w-20 h-auto md:block top-[20%] left-2"
            />
            <div className="w-full h-full container mx-auto">
              <div className="w-full h-full rounded-2xl flex flex-col md:flex-row justify-between gap-3 items-center md:items-start md:w-[90%] mx-auto text-brand-fg p-5 md:mt-20">
                {/* <img
              loading="lazy"
              src={Ellipse}
              alt="Ellipse"
              className="absolute -top-10 w-64 md:w-96 -left-10 md:-left-20  blur-md select-none hidden dark:block"
            /> */}
                <div className=" gap-4 text-center md:text-left w-full  md:w-1/2 relative z-10 p-3">
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    // data-aos-duration="800"
                    className="text-4xl lg:text-5xl font-extrabold text-brand-fg mb-6"
                  >
                    <span className="capitalize">O</span>ur MOU&apos;s
                  </h1>
                  <h3
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    // data-aos-duration="800"
                    className="block text-xl lg:text-2xl text-gray-200 mt-2"
                  >
                    Discover Our Expanding Network
                  </h3>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    // data-aos-duration="800"
                    className="text-base md:text-lg text-gray-200 mt-4"
                  >
                    We are proud to announce our growing number of Memorandums
                    of Understanding (MOUs) with leading institutions. These
                    partnerships foster collaboration and innovation, enhancing
                    educational opportunities for all.
                  </p>
                </div>
                <figure className=" w-1/2 sm:w-3/5 md:w-1/2 lg:w-[30%] relative z-10 select-none">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    // data-aos-duration="800"
                    className="w-full h-full rounded-lg"
                    src={MouImageNew}
                    alt="Memorandum of Understanding (MOU) - Kre8ly"
                    loading="lazy"
                  />
                </figure>
              </div>
            </div>
          </section>
          <section className=" w-full h-full flex flex-col my-10 ">
            {collabs.map((collaboration, index) => (
              <div
                key={index}
                className="w-full max-w-7xl flex items-center justify-center flex-col md:flex-row mx-auto p-2 z-40 gap-0 xl:gap-8  text-white hover:scale-105 transition-all duration-300"
              >
                <div className=" relative flex flex-col  items-center text-center gap-4 group">
                  <div className="relative flex items-center justify-center">
                    <div
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      // data-aos-duration="500"
                      className={`relative w-80 h-80 flex items-center justify-center rounded-lg shadow-lg z-20 select-none bg-surface`}
                    >
                      <img
                        loading="lazy"
                        src={collaboration?.image}
                        alt={collabs?.image_alt}
                        className="w-72 h-72  rounded-md shadow-lg shadow-white dark:shadow-black select-none transform hover:scale-105 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <h2
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    // data-aos-duration="500"
                    className="text-sm md:text-xl md:block lg:hidden font-medium dark:text-white text-content"
                  >
                    {collaboration?.title}
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    // data-aos-duration="500"
                    className="hidden text-xs md:text-sm group-hover:block text-content-secondary  lg:group-hover:hidden text-center"
                  >
                    {collaboration?.content}
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  // data-aos-duration="500"
                  className="hidden  lg:flex md:flex-col xl:flex-row border w-full xl:-ml-10  lg:mr-5 md:rounded-r-lg xl:rounded-lg xl:border-gray-500 border-l-0 xl:border px-5 py-7 items-center"
                >
                  <div className="flex flex-col gap-6 xl:text-left">
                    <h2
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      // data-aos-duration="500"
                      className="text-3xl sm:xl font-normal text-content"
                    >
                      {collaboration?.title}
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      // data-aos-duration="500"
                      className="font-medium w-5/6 lg:mr-3 lg:w-auto text-content-secondary text-base"
                    >
                      {collaboration?.content}
                    </p>
                  </div>
                  <div className="lg:block">
                    <img
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      // data-aos-duration="500"
                      loading="lazy"
                      className="w-96 h-40 object-contain shadow-lg dark:shadow-none  bg-surface rounded-lg hidden xl:block"
                      src={collaboration?.imageCompany}
                      alt={collaboration?.company_alt}
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* <hr className="w-[90%] md:w-full max-w-7xl mx-auto h-px bg-secondary my-16" />

          <section className="flex justify-center  items-center text-white">
            <div className=" w-full max-w-7xl flex flex-col gap-5 py-10  justify-center items-center  bg-custom-card-gradient rounded-lg border-gray-500 border">
              <h1 className="text-3xl lg:text-5xl font-medium  md:font-bold text-center lg:text-left capitalize ">
                Let&apos;s be a partner from today
              </h1>
              <p className=" w-[90%] mx-auto  text-secondary text-center">
                By joining our partner program, you will get hundreds of
                advantages and benefits that can help you.
              </p>
              <div className="w-52 h-12 items-center justify-center text-sm   flex flex-row">
                <button className="bg-[#FFFFFF] uppercase text-content px-3 py-2 font-semibold transform transition duration-300 cursor-pointer rounded-full hover:bg-[#381D76] hover:text-white">
                  Become a partner <span className="ml-2">&gt;</span>
                </button>
              </div>
            </div>
          </section> */}
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default MouPage;