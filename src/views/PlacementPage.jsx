import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Frame = "/assets/Placement/spark.png";
const Pop = "/assets/Placement/Pop.gif";
const Card1 = "/assets/Placement/Card1.png";
const Card2 = "/assets/Placement/Card2.png";
const Card3 = "/assets/Placement/Card3.png";
const Card4 = "/assets/Placement/Card4.png";
import Slider from "../component/Slider";
const Curve = "/assets/Placement/Curve.png";
const Girl = "/assets/Placement/Girl.png";
const Cap = "/assets/Placement/Cap.png";
import HallofFameCardTwo from "../component/HallofFameCardTwo";
import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import { CourseCardInfos } from "../Utils/CourseCardInfos";
import Cards from "../component/Cards";
const Idea = "/assets/Placement/Idea.png";
const Grid1 = "/assets/Placement/Grid1.png";
const Grid2 = "/assets/Placement/Grid2.png";
const Grid3 = "/assets/Placement/Grid3.png";
const Grid4 = "/assets/Placement/Grid4.png";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { Link } from "@/lib/router-compat";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
const Ellipse = "/assets/Ellipse.webp";
const HeroImage1 = "/assets/Placement/Index1.png";
const HeroImage2 = "/assets/Placement/Index2.png";
const HeroImage3 = "/assets/Placement/Index3.png";
const HeadImage = "/assets/Placement/HeadImage.png";
const ProfilePictures = "/assets/Home/ProfilePicturesNew.svg";
import Snowfall from "react-snowfall";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Optional if you want pagination/navigation
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const PlacementPage = ({ darkMode, setDarkMode }) => {
  const CardsInfo = [
    {
      img: Card1,
      title: "Technology",
      alt: "Technology",
      desc: "Gain hands-on experience in software development, data analysis, and emerging technologies.",
    },
    {
      img: Card2,
      title: "Finance",
      alt: "Finance",
      desc: "Explore opportunities in investment banking, asset management, and financial analysis.",
    },
    {
      img: Card3,
      title: "Consulting",
      alt: "Consulting",
      desc: "Develop problem-solving skills and gain insights into strategic business consulting.",
    },
    {
      img: Card4,
      title: "Manufacturing",
      alt: "Manufacturing",
      desc: "Explore the world of production, logistics, and supply chain management.",
    },
  ];

  const heroCards = [
    {
      icon: HeroImage1,
      icon_alt: "500+ Expert Mentors",
      heading: "500+",
      subHeading: "Expert Mentors",
    },
    {
      icon: HeroImage2,
      icon_alt: "10k+ Active Students",
      heading: "10k+",
      subHeading: "Active Students",
    },
    {
      icon: HeroImage3,
      icon_alt: "20k+ Placed Students",
      heading: "20k+",
      subHeading: "Placed Students",
    },
  ];

  const swiperColor = [
    "bg-[linear-gradient(0deg,_hsl(var(--k-surface))_0%,_hsl(var(--k-deco-4b))_100%)]",
    "bg-[linear-gradient(0deg,_hsl(var(--k-surface))_0%,_hsl(var(--k-deco-1b))_100%)]",
    "bg-[linear-gradient(0deg,_hsl(var(--k-surface))_0%,_hsl(var(--k-deco-2b))_100%)]",
    "bg-[linear-gradient(0deg,_hsl(var(--k-surface))_0%,_hsl(var(--k-deco-4a))_100%)]",
  ];

  const sectionStylings = {
    section:
      "w-full h-full flex justify-center items-center gap-5 flex-col px-4 sm:px-6 lg:px-8 py-10 overflow-x-hidden",
    title:
      "text-xl sm:text-2xl md:text-3xl text-content text-center font-semibold text-content mb-4",
    subTitle:
      "text-content-secondary text-xs sm:text-sm text-center ",
  };

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title> Explore Placement Opportunities | Kre8ly</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get placed at top companies like Amazon, TCS, Accenture, Natixis & more with Kre8ly’s support. Join our successful learners and launch your career!"
        />

        {/* Meta Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="job placement support, career assistance, student placements skill-based placements"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.unifiedmentor.com/placement" />

        {/* Meta Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Checkout our Star Alumni" />
        <meta
          property="og:description"
          content="Elevate your career journey with our expert mentorship program, providing tailored guidance, real-world skills, and seamless job placement support."
        />
      </Helmet>

      
      <div className="w-full overflow-hidden">
        <main className="w-full flex flex-col items-center justify-center relative">
          {/* <Snowfall
            color="#fff"
            snowflakeCount={400}
            style={{
              zIndex: 20,
            }}
            speed={[0, 0.5]}
            wind={[0, 0.5]}
          /> */}
          {/* <section className="flex justify-center items-center flex-col gap-4 md:gap-10 h-[280px] sm:h-[320px]  md:h-[450px]  bg-custom-gradient w-full rounded-3xl relative overflow-hidden p-4 ">
            <div className="w-full h-full absolute inset-0 z-10">
              <div className="w-full h-full relative">
                <img
                  src={Frame}
                  alt="Frame"
                  className="w-full h-full object-cover"
                />

                <figcaption className="absolute top-[15%] md:top-[20%]  lg:top-[30%]   flex flex-col items-center justify-center w-full px-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center">
                    Listen to Our Alumni
                  </h1>
                  <p className="text-sm sm:text-sm md:text-base lg:text-xl text-center text-secondary mt-4 px-4 md:px-6 lg:px-8 w-full max-w-3xl">
                    Elevate your career journey with our expert mentorship
                    program, providing tailored guidance, real-world skills, and
                    seamless job placement support. Take the first step towards
                    success and join us today!
                  </p>
                </figcaption>
                <figure className="relative w-full z-20 ">
                  <img
                    src={Pop}
                    alt="Pop Animation"
                    className=" hidden sm:block  absolute bottom-2 left-[5%] w-32 md:w-56 lg:w-80 z-20"
                  />
                  <img
                    src={Pop}
                    alt="Pop Animation"
                    className=" hidden sm:block  absolute bottom-0 right-[5%]  rotate-[270deg] w-32 md:w-56 lg:w-80 z-20"
                  />
                </figure>
              </div>
            </div>
          </section> */}
          <section
            id="hero"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full flex flex-col lg:flex-row gap-5 relative overflow-hidden min-h-[40rem] bg-gradient-to-br from-brand via-brand-active to-brand-hover "
          >
            {/* Background Circles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              {/* <div className="absolute top-0 left-0 w-96 h-96 bg-surface rounded-full -translate-x-48 -translate-y-48"></div> */}
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-surface rounded-full translate-x-48 translate-y-48"></div>
            </div>
            <div className="w-full h-full lg:w-[60%] relative p-6 lg:p-10 md:mt-10 ">
              {/* <div className="absolute -top-[35%] -left-[15%] w-[150px] md:w-[250px] lg:w-[450px] select-none blur-md">
                <img src={Ellipse} alt="Ellipse" />
              </div> */}
              <div
                // data-aos-duration="800"
                className="flex flex-col justify-around items-start w-full h-full relative z-10 gap-5"
              >
                <div className="w-full">
                  <h1
                    className="text-4xl lg:text-5xl font-extrabold text-brand-fg"
                    style={{ lineHeight: "1.25" }}
                  >
                    Turning Dreams
                    <br /> Into Careers
                  </h1>
                </div>
                <p
                  className="block text-xl lg:text-2xl text-gray-200 "
                  style={{ lineHeight: "1.75" }}
                >
                  Empowering students to achieve their career goals with top
                  placements, real-world skills, and endless opportunities for
                  success.
                </p>
                <div className=" flex  w-full  place-items-center gap-5 rounded-xl relative z-10 mt-4 lg:mt-6 ">
                  {heroCards?.map((item, i) => (
                    <div
                      key={i}
                      className={`flex gap-2 bg-white/10 text-brand-fg px-4 py-2 rounded-lg backdrop-blur-md shadow-sm border border-line/20 transform hover:scale-105 transition-all duration-500 ${
                        i === 2 ? "col-span-2 md:col-span-1" : "col-span-1"
                      }`}
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full">
                        <img
                          src={item.icon}
                          alt={item.icon_alt}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h2 className="text-base md:text-xl font-bold text-brand-fg">
                          {item.heading}
                        </h2>
                        <p className="text-xs md:text-sm text-brand-fg">
                          {item.subHeading}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hover:scale-105 transition-all duration-300 mt-4 md:mt-20">
                  <a
                    data-aos="fade-left"
                    href="#placedStudents"
                    className="flex flex-row gap-4 text-start  "
                  >
                    <img src={ProfilePictures} className="w-16 md:w-auto" />
                    <div>
                      <span className="text-brand-fg text-xs md:text-lg font-semibold">
                        100,000+{" "}
                      </span>
                      <p className="text-brand-fg text-content font-semibold md:text-lg text-xs">
                        Our's Placed Students
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              // data-aos-duration="800"
              className="w-full h-auto lg:w-[40%] relative flex items-center justify-center"
            >
              <figure className="w-[55%] h-full mx-auto lg:absolute lg:top-[55%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 ">
                <img
                  src={HeadImage}
                  alt="Kre8ly Placement Header image"
                  className="w-full h-auto object-contain"
                />
              </figure>
            </div>
          </section>

          {/* <figure className="relative w-full z-20 ">
            <img
              src={Pop}
              alt="Pop Animation"
              className=" hidden sm:block  absolute bottom-2 left-[5%] w-32 md:w-56 lg:w-80 z-20"
            />
            <img
              src={Pop}
              alt="Pop Animation"
              className=" hidden sm:block  absolute bottom-0 right-[5%]  rotate-[270deg] w-32 md:w-56 lg:w-80 z-20"
            />
          </figure> */}

          {/* <figcaption className="absolute top-[15%] md:top-[20%]  lg:top-[30%]   flex flex-col items-center justify-center w-full px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center">
                  Listen to Our Alumni
                </h1>
                <p className="text-sm sm:text-sm md:text-base lg:text-xl text-center text-secondary mt-4 px-4 md:px-6 lg:px-8 w-full max-w-3xl">
                  Elevate your career journey with our expert mentorship
                  program, providing tailored guidance, real-world skills, and
                  seamless job placement support. Take the first step towards
                  success and join us today!
                </p>
              </figcaption> */}
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full mt-8 relative px-4 sm:px-6 lg:px-8 py-8"
          >
            <div className="absolute -top-48 w-[250px] hidden dark:block md:w-[450px] right-0 select-none blur-md ">
              <img src={Ellipse} alt="Ellipse" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-duration="800"
              className="flex flex-col items-center justify-center text-center relative z-20"
            >
              {/* <h2
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`${sectionStylings.title}`}
              >
                Industries Offering Placements
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className={`${sectionStylings.subTitle}`}
              >
                Explore the diverse range of industries that provide placement
                opportunities for our students.
              </p> */}
              <h2 className=" text-3xl lg:text-4xl font-semibold text-content mb-4 text-content text-center">
                Industries Offering Placements
              </h2>
              <p className="text-lg text-content-secondary max-w-6xl mx-auto">
                Explore the diverse range of industries that provide placement
                opportunities for our students.
              </p>
            </div>
            {/* <div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 relative z-20 "
            >
              {CardsInfo?.map((item, index) => (
                <div
                  variants={containerVariants}
                  key={index}
                  className={`${
                    swiperColor[index % swiperColor.length]
                  } p-4 rounded-lg shadow-customSoft flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left`}
                >
                  <figure className="w-20 h-20 mb-4">
                    <img
                      src={item?.img}
                      alt={item?.alt}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </figure>
                  <h3
                    variants={headingVariants}
                    className="text-sm md:text-lg font-bold text-content mb-2"
                  >
                    {item?.title}
                  </h3>
                  <p
                    variants={paragraphVariants}
                    className="text-xs md:text-sm text-content"
                  >
                    {item?.desc}
                  </p>
                </div>
              ))}
            </div> */}
            {/** Mobile View: Swiper Carousel */}
            <div className="block md:hidden mt-8 z-20">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={2}
                autoplay={{ delay: 2500 }}
                pagination={{ clickable: true }}
              >
                {CardsInfo?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      data-aos="flip-right"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      // data-aos-duration="800"
                      className={` p-4 rounded-lg h-80 shadow-customSoft flex flex-col items-center justify-center text-center min-h-60`}
                    >
                      <figure className="w-20 h-20 mb-4">
                        <img
                          src={item?.img}
                          alt={item?.alt}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </figure>
                      <h3 className="text-xl font-bold text-content mb-3">
                        {item?.title}
                      </h3>
                      <p className="text-content-secondary leading-relaxed mb-6">
                        {item?.desc}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/** Desktop/Tablet View: Grid Layout */}
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 relative z-20"
            >
              {CardsInfo?.map((item, index) => (
                <div
                  // data-aos-duration="800"
                  key={index}
                  className={` p-4 rounded-lg shadow-customSoft flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left hover:scale-105 transition-all duration-300`}
                >
                  <figure className="w-20 h-20 mb-4">
                    <img
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      src={item?.img}
                      alt={item?.alt}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </figure>
                  <h3
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="text-sm md:text-lg font-bold text-content mb-2"
                  >
                    {item?.title}
                  </h3>
                  <p className="text-xs md:text-sm text-content">
                    {item?.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full mt-8 px-4 sm:px-6 lg:px-8 py-8 bg-surface-sunken"
          >
            {/* <p
              data-aos="zoom-out"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-duration="800"
              className={`${sectionStylings.title}`}
            >
              Our learners have secured jobs at 100+ product companies
            </p> */}
            <h2 className=" text-3xl lg:text-4xl font-semibold text-content mb-4 text-content text-center">
              Our learners have secured jobs at 100+ product companies
            </h2>
            <p className="text-lg text-content-secondary max-w-6xl mx-auto text-center">
              Gain practical skills, industry knowledge, and hands-on experience
              to excel in your professional journey.
            </p>
            <div data-aos="fade-up" data-aos-delay="300" className="w-full">
              <Slider />
            </div>
          </section>
          {/* <section className="w-full mt-8 relative">
            <div className="absolute -top-48 w-[250px] hidden dark:block md:w-[450px] left-0 select-none blur-md ">
              <figure>
                <img src={Ellipse} alt="Ellipse" />
              </figure>
            </div>
            <div
              data-aos="zoom-out-down"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-duration="800"
              className="shadow-customSoft dark:bg-custom-card-gradient rounded-3xl flex flex-col md:flex-row items-center justify-between p-4 md:p-8"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="relative w-full md:w-1/2 p-4 md:p-8"
              >
                <figure className="relative w-full">
                  <img
                    src={Curve}
                    alt="Curve"
                    className="w-full max-w-lg mx-auto"
                  />
                  <img
                    src={Girl}
                    alt="Happy female student with a laptop celebrating successful placement through Kre8ly's program for over 20K+ students"
                    className="absolute bottom-4 sm:bottom-7 md:bottom-4 lg:bottom-8 left-8 sm:left-16  md:left-[3rem] xl:left-[5rem]"
                  />
                </figure>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left"
              >
                <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-content dark:text-[#fff] mb-4">
                  Over 20K+ Students Get’s Placement
                </h3>
                <div className="text-xs md:text-sm text-content dark:text-[#fff] mb-8">
                  <p>
                    Read about the experiences of our past placement students
                    and how the program has impacted their careers.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <Link to={"/"}>
                    <button className="py-3 px-6 text-white dark:text-content bg-brand dark:bg-surface  flex items-center gap-3 font-semibold justify-center rounded-md text-sm  md:w-auto mx-auto hover:bg-brand-hover hover:text-brand-fg hover:bg-brand-hover  hover:text-primary transition duration-300">
                      Enroll Now
                    </button>
                  </Link>
                  <figure className="w-44 lg:w-72 h-auto hidden md:block">
                    <img
                      src={Cap}
                      alt="Graduation cap symbolizing student placements and career success at Kre8ly"
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section> */}
          <section
            id="placedStudents"
            className="w-full mt-8 flex flex-col gap-10 relative z-20 px-4 sm:px-6 lg:px-8 py-8"
          >
            {/* Mobile View: Swiper Carousel */}
            <div className="block md:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                // pagination={{ clickable: true }}
              >
                {NewHallOfFrameInfos?.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      className="max-w-sm min-h-72 bg-surface rounded-xl shadow-md p-6 space-y-4 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                    >
                      {/* Profile Section */}
                      <div className="flex items-center space-x-4">
                        <img
                          src={data.profile.image}
                          alt={data.profile.alt}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h2 className="text-lg font-bold text-content">
                            {data.profile.name}
                          </h2>
                          <p className="text-sm text-content-secondary">
                            {data.company?.position}
                          </p>
                          <p className="text-sm text-info font-semibold cursor-pointer hover:underline">
                            {data.company?.name}
                          </p>
                        </div>
                        <Link to={data.linkedinLink.url}>
                          <div className="ml-auto">
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                              alt="LinkedIn"
                              className="w-5 h-5"
                            />
                          </div>
                        </Link>
                      </div>

                      {/* Testimonial Text */}
                      {/* If content is more then 25 words then show read more */}
                      <div className="border-l-4 border-blue-200 pl-4 text-content-secondary italic text-sm">
                        {(() => {
                          const words = data.description.text
                            .trim()
                            .split(/\s+/);
                          const showReadMore = words.length > 25;
                          const previewText =
                            words.slice(0, 25).join(" ") +
                            (showReadMore ? "..." : "");

                          return (
                            <>
                              "{previewText}"
                              {/* {showReadMore && (
                                <p className="text-info mt-1 hover:underline cursor-pointer">
                                  Read more
                                </p>
                              )} */}
                            </>
                          );
                        })()}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        {/* Stars */}
                        <div className="flex space-x-1 text-warning text-xl">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>

                        {/* Verified */}
                        <div className="flex items-center space-x-1 text-sm text-content-secondary">
                          <span className="w-2 h-2 rounded-full bg-success"></span>
                          <span>Verified Graduate</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop/Tablet View: Grid Layout */}
            <div className="hidden md:flex flex-wrap justify-center items-center gap-4 md:gap-36 mt-10">
              {NewHallOfFrameInfos?.map((data, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="max-w-sm min-h-72 bg-surface rounded-xl shadow-md p-6 space-y-4 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={data.profile.image}
                      alt={data.profile.alt}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-content">
                        {data.profile.name}
                      </h2>
                      <p className="text-sm text-content-secondary">
                        {data.company?.position}
                      </p>
                      <p className="text-sm text-info font-semibold cursor-pointer hover:underline">
                        {data.company?.name}
                      </p>
                    </div>
                    <Link to={data.linkedinLink.url}>
                      <div className="ml-auto">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                          alt="LinkedIn"
                          className="w-5 h-5"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Testimonial Text */}
                  {/* If content is more then 25 words then show read more */}
                  <div className="border-l-4 border-blue-200 pl-4 text-content-secondary italic text-sm">
                    {(() => {
                      const words = data.description.text.trim().split(/\s+/);
                      const showReadMore = words.length > 25;
                      const previewText =
                        words.slice(0, 25).join(" ") +
                        (showReadMore ? "..." : "");

                      return (
                        <>
                          "{previewText}"
                          {/* {showReadMore && (
                            <p className="text-info mt-1 hover:underline cursor-pointer">
                              Read more
                            </p>
                          )} */}
                        </>
                      );
                    })()}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    {/* Stars */}
                    <div className="flex space-x-1 text-warning text-xl">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    {/* Verified */}
                    <div className="flex items-center space-x-1 text-sm text-content-secondary">
                      <span className="w-2 h-2 rounded-full bg-success"></span>
                      <span>Verified Graduate</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* <section className="w-full mt-8 flex flex-col gap-10 ">
            <h1 className="text-xl md:text-5xl text-primary font-semibold text-center">
              Our Most Popoular Courses
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
              {CourseCardInfos.map((Course) => (
                <Cards key={Course.id} Course={Course} />
              ))}
            </div>
          </section> */}
          <section
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className=" w-full relative px-4 sm:px-6 lg:px-8 py-8 bg-surface-sunken"
          >
            <div className="absolute hidden dark:block -top-48 w-[250px] md:w-[450px] left-0 select-none blur-md ">
              <figure>
                <img src={Ellipse} alt="Ellipse" />
              </figure>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8 w-full px-4 relative z-20">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="bg-[#fff] p-6 rounded-lg shadow-customSoft flex flex-col md:flex-row items-center justify-between gap-6 w-full md:w-2/3 h-auto md:h-96 lg:h-[18rem] hover:scale-105  transition-all duration-300 cursor-pointer"
              >
                <div className="text-center md:text-left w-full md:w-[60%] ">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-content mb-4">
                    Why Choose Our Program
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-content mb-4">
                    Achieve your career goals with our comprehensive Internship.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left  mx-auto">
                  <figure className="mb-4 ">
                    <img
                      src={Idea}
                      alt="Idea"
                      className="w-32 h-32 md:w-48 md:h-48 object-contain"
                    />
                  </figure>
                  {/* <button className="bg-primary text-content font-semibold text-lg py-2 px-6 rounded-full hover:bg-[#381D76] hover:text-primary transition duration-300  w-48 flex items-center justify-center">
                    Learn More{" "}
                    <FaArrowRight
                      color="white"
                      size={30}
                      className="bg-black p-1 rounded-full ml-2"
                    />
                  </button> */}
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full md:w-1/3 p-4 bg-[#fff] rounded-lg shadow-customSoft  flex items-center justify-center md:items-start flex-col h-auto md:h-96 lg:h-[18rem] hover:scale-105  transition-all duration-300 cursor-pointer"
              >
                <figure className="mb-4 w-24 h-24">
                  <img
                    src={Grid1}
                    alt="Organize Program"
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <h3 className="text-xs md:text-sm font-semibold text-content mb-2 text-center md:text-left">
                  Organize Program
                </h3>
                <p className="text-[10px] md:text-xs text-content text-center md:text-left">
                  Our programs are well-structured and organized for optimal
                  learning.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8 w-full px-4">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full  p-4 bg-[#fff] rounded-lg shadow-customSoft  flex items-center justify-center md:items-start flex-col h-auto md:h-96 lg:h-[16rem] hover:scale-105  transition-all duration-300 cursor-pointer"
              >
                <figure className="mb-4  w-24 h-24">
                  <img
                    src={Grid2}
                    alt="Access Anywhere"
                    className="w-full h-auto object-cover"
                  />
                </figure>
                <h3 className="text-xs md:text-sm font-semibold text-content mb-2 text-center md:text-left">
                  Access Anywhere
                </h3>
                <p className="text-[10px] md:text-xs text-content text-center md:text-left">
                  Access Course materials from anywhere.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full  p-4 bg-[#fff] rounded-lg shadow-customSoft  flex items-center justify-center md:items-start flex-col h-auto md:h-96 lg:h-[16rem] hover:scale-105  transition-all duration-300 cursor-pointer"
              >
                <figure className="mb-4  w-24 h-24">
                  <img
                    src={Grid3}
                    alt="Flexible Timing"
                    className="w-full h-auto object-contain"
                  />
                </figure>
                <h3 className="text-xs md:text-sm font-semibold text-content mb-2 text-center md:text-left">
                  Flexible Timing
                </h3>
                <p className="text-[10px] md:text-xs text-content text-center md:text-left">
                  Our Internship offer flexible timing to fit your schedule.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full  p-4 bg-[#fff] rounded-lg shadow-customSoft  flex items-center justify-center md:items-start flex-col h-auto md:h-96 lg:h-[16rem] hover:scale-105  transition-all duration-300 cursor-pointer"
              >
                <figure className="mb-4  w-24 h-24">
                  <img
                    src={Grid4}
                    alt="Certificate"
                    className="w-full h-auto object-contain"
                  />
                </figure>
                <h3 className="text-xs md:text-sm font-semibold text-content mb-2 text-center md:text-left">
                  Certificate
                </h3>
                <p className="text-[10px] md:text-xs text-content text-center md:text-left">
                  Earn a certificate upon completion of the Internship
                </p>
              </div>
            </div>
          </section>
          <Query />
          <ChatBot darkMode={darkMode} />
        </main>
      </div>
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default PlacementPage;