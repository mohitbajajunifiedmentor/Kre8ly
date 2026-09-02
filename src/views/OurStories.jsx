import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Men = "/assets/Ourstories/men.png";
const Women = "/assets/Ourstories/women.png";
const Women2 = "/assets/Ourstories/Women2.png";
const HeroPlay = "/assets/Ourstories/HeroPlay.png";
const TimeLine = "/assets/Ourstories/Timeline.png";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "../component/Slider";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
} from "react-icons/fa";
import ReactPlayer from "react-player";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import { Link } from "@/lib/router-compat";
const Ellipse = "/assets/Ellipse.webp";
import { LinkedinPosts } from "../Utils/SuccessStoriesInfo";
import { InstagramPosts } from "../Utils/SuccessStoriesInfo";
const BackGroundImg = "/assets/Ourstories/Background.png";
const Heroimage = "/assets/Ourstories/Heroimage.png";
const Star = "/assets/Ourstories/Star.png";
import Snowfall from "react-snowfall";
import { IoCloseCircle } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

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

// Define the VideoSlide component before using it
const VideoSlide = React.memo(({ url }) => (
  <div
    className="video-slide w-full aspect-video overflow-hidden cursor-pointer"
    data-aos="fade-up"
    data-aos-delay="400"
    onClick={() => onClick(url)} // show modal
  >
    <ReactPlayer
      url={url}
      width="100%"
      height="100%"
      className="object-cover"
      controls={false}
      config={{
        file: {
          attributes: {
            controlsList: "nodownload",
          },
        },
      }}
    />
  </div>
));
VideoSlide.displayName = "VideoSlide";
const OurStories = ({ darkMode, setDarkMode }) => {
  const [modalVideoUrl, setModalVideoUrl] = useState(null);
  const [videos, setVideos] = useState([]);


  const fetchVideos = async () => {
    const res = await fetch("https://official-website-mern-backend-1023229424452.asia-south2.run.app/api/youtube-videos");
    const data = await res.json();
    // setVideos(data);
    setVideos(data.videos);
  };


  useEffect(() => {
    fetchVideos();
    const interval = setInterval(fetchVideos, 300000);
    return () => clearInterval(interval);
  }, []);

  const Iframes = [
    {
      iframeSrc: `https://www.youtube.com/embed/nCvkn4ksyAA?si=U25Hk4mkdgOv_3Cu&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/agkdM4x3cKw?si=zV4iY-2XwocvXXPE&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/CBJIBgRR7yg?si=JSkHFNljheH1HJMq&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/e0nU44_qK-4?si=AbOIu_tiG5yt7Ef2&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/mY6fFVZyGhE?si=UiGqY4Y5lEsoh-wc&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/t7zzqEOIKB8?si=uYZEMC_mAbPYC5qZ&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/mhIyzhg6C1I?si=NLcGAo_N3W4444ck&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/18B0y9Kbjsw?si=ZKYmnsdrejFoKK4G&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/mkqvIIpqlyc?si=GYQqRaWzPFKlawKC&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/QrGiPGE5juk?si=RJbqnagxqaBVka8n&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/dbHB3jtqu9s?si=dwypfebkLs2KM1sE&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/nPvgWvdTpRg?si=dY_7gISyht_9_1kS&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/KPwRMHyKvmI?si=sA4Wl-jR0Keags_k&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/3k-dVB6GqoI?si=-FqcEGuCUIe0SJ7P&amp;start=1&amp;controls=0`,
    },
    {
      iframeSrc: `https://www.youtube.com/embed/I_sZqQO0E9E?si=ovJFCJra5jHJjlBw&amp;start=1&amp;controls=0`,
    },
  ];
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // students navigation
  const studentSwipperRef = useRef(null);

  const studentGoNext = () => {
    if (studentSwipperRef.current && studentSwipperRef.current.swiper) {
      studentSwipperRef.current.swiper.slideNext();
    }
  };

  const studentGoPrev = () => {
    if (studentSwipperRef.current && studentSwipperRef.current.swiper) {
      studentSwipperRef.current.swiper.slidePrev();
    }
  };

  const instagramPostRef = useRef(null);

  const instagramPostNext = () => {
    if (instagramPostRef.current && instagramPostRef.current.swiper) {
      instagramPostRef.current.swiper.slideNext();
    }
  };

  const instagramPostPrev = () => {
    if (instagramPostRef.current && instagramPostRef.current.swiper) {
      instagramPostRef.current.swiper.slidePrev();
    }
  };

  const [isPopUp, setIsPopUp] = useState(false);

  // Define refs for sections
  const refs = {
    stories: useRef(null),
    projects: useRef(null),
    instagram: useRef(null),
  };

  // InView hooks for sections
  const isStoriesInView = useInView(refs.stories, {
    once: true,
    margin: "-50px",
  });
  const isProjectsInView = useInView(refs.projects, {
    once: true,
    margin: "-50px",
  });
  const isInstagramInView = useInView(refs.instagram, {
    once: true,
    margin: "-50px",
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : true; // Convert to boolean
  });

  // Update localStorage whenever the dark mode state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const sectionStylings = {
    section:
      "w-full h-full flex justify-center items-center gap-5 flex-col px-4 sm:px-6 lg:px-8 py-10 overflow-x-hidden",
    title:
      "text-xl sm:text-2xl md:text-3xl text-content text-center font-semibold text-content mb-4",
    subTitle:
      "text-content-secondary sm:text-base text-center w-full ",
  };

  {
    modalVideoUrl && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
        <div className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-lg shadow-lg">
          <ReactPlayer
            url={modalVideoUrl}
            width="100%"
            height="100%"
            controls
            playing
          />
          <button
            className="absolute top-2 right-2 text-white bg-error rounded-full p-2 hover:bg-error"
            onClick={() => setModalVideoUrl(null)}
          >
            ✕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        {/* Page Title */}
        <title>Our Stories | Inspiring Success Stories at Kre8ly</title>
        {/* Meta Description */}
        <meta
          name="description"
          content="Discover inspiring success stories from Kre8ly students who have achieved remarkable career growth and success after joining our programs."
        />
        {/* Meta Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Success Stories, Student Achievements, Kre8ly Stories, Career Growth, Inspirational Stories"
        />

        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/our-stories"
        />

        {/* Meta Robots */}
        <meta name="robots" content="index, follow" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Our Stories | Inspiring Success Stories at Kre8ly"
        />
        <meta
          property="og:description"
          content="Discover inspiring success stories from Kre8ly students who have achieved remarkable career growth and success after joining our programs."
        />
      </Helmet>

      <div
        className={`min-h-screen w-full overflow-hidden ${darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
          }`}
      >
        {isPopUp && (
          <div className="fixed top-0 w-full h-full z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-start p-5">
            <FeedBackForm setIsPopUp={setIsPopUp} />
          </div>
        )}
        <main className="flex flex-col items-center justify-center w-full relative ">
          {/* <Snowfall
            color="#fff"
            snowflakeCount={200}
            style={{
              zIndex: 20,
            }}
            speed={[0, 0.5]}
            wind={[0, 0.5]}
          /> */}
          <section
            id="hero"
            className="flex flex-col dark:bg-transparent md:flex-row items-center gap-5 justify-between w-full h-full py-5 md:p-10 relative bg-gradient-to-br from-brand via-brand-active to-brand-hover"
          // style={{
          //   backgroundImage: `url(${BackGroundImg})`,
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          // }}
          >
            {/* <img
              src={Ellipse}
              alt="Ellipse"
              className="absolute hidden dark:block top-0 w-[250px] md:w-[450px] -left-[15%] select-none blur-md"
            />
            <img
              src={Star}
              alt="Star"
              className="absolute -top-2 md:top-16 select-none left-0"
            /> */}

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex justify-between items-start flex-col text-left w-full lg:w-[40%] h-full gap-3 md:gap-[4rem] relative z-10"
            >
              <div className="flex flex-col gap-4 w-full">
                <h1
                  className="text-4xl lg:text-5xl font-extrabold text-brand-fg"
                  style={{
                    lineHeight: "1.5",
                  }}
                >
                  Inspiring Success Stories
                </h1>
                <p
                  className="block text-xl lg:text-2xl text-gray-200"
                  style={{
                    lineHeight: "2",
                  }}
                >
                  Hear from our students about how our programs have transformed
                  their lives and careers.
                </p>
              </div>
              <div className="flex gap-4 w-full md:w-[70%] justify-between items-center">
                {/* <a
                  href="#projects"
                  className="bg-surface text-content px-5 py-2 rounded-full font-semibold hover:bg-custom-gradient  hover:text-brand-fg"
                >
                  Explore Now
                </a>
                <a
                  href="#stories"
                  className="flex items-center gap-2 text-brand-fg"
                >
                  <span className="bg-surface w-10 h-10  rounded-full flex justify-center items-center">
                    <FaPlay className="text-content ml-1" size={20} />
                  </span>
                  Watch Now
                </a> */}
                {/* <button
                  onClick={() => setIsPopUp(true)}
                  className=" px-8 text-content dark:text-content bg-surface hover:bg-brand-hover dark:hover:text-brand-fg hover:bg-brand-hover hover:text-primary py-3 flex items-center font-bold w-fit justify-center rounded-md text-xs md:text-sm transition-all duration-300"
                >
                  Give Review
                </button> */}
                <button
                  onClick={() => setIsPopUp(true)}
                  className="bg-surface text-content font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-center"
                >
                  Give Review
                </button>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-delay="0"
              data-aos-duration="800"
              // data-aos-duration="800"
              className="flex justify-center items-center w-full md:w-1/2 relative z-10"
            >
              <figure className="flex">
                <img
                  src={Heroimage}
                  alt="Kre8ly - Student Success Stories Header image"
                  className="max-w-full h-auto"
                />
              </figure>
            </div>
          </section>
          {/* <section className="w-full h-full flex flex-col justify-between mb-10  gap-4 py-5 px-4  mx-auto">
            <div className="w-full flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/2 relative ">
                <figure className="w-full max-w-xs mx-auto">
                  <img src={Women2} alt="" className="w-full h-auto" />
                </figure>

                <div className="absolute -bottom-[18%] right-20">
                  <div className="w-32 h-32 md:w-60 md:h-60 bg-gray-300 rounded-full border-4 border-line overflow-hidden relative"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start gap-4 lg:w-[40%]  mx-auto">
                <p className="text-primary font-bold text-lg md:text-xl">
                  Alex's Entrepreneurial Success:
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Turning a Business Idea into Reality
                </h2>
                <p className="text-secondary text-sm md:text-base">
                  Alex always had a knack for creativity and a vision for his
                  own business, but he didn't know where to start. Our
                  entrepreneurial mentorship program paired him with industry
                  experts who guided him through market research, business
                  planning, and funding strategies. With consistent support and
                  actionable advice, Alex launched his eco-friendly product
                  line. Within a year, his business not only broke even but also
                  received accolades for innovation and sustainability. 🌐🚀
                </p>
                <p className="italic text-secondary text-sm md:text-base">
                  "The mentorship I received was the cornerstone of my business
                  success. It transformed my dream into a thriving reality." -
                  Alex
                </p>
              </div>
            </div>
          </section>
          <section className="w-full h-full flex flex-col justify-between mt-10  gap-4 py-5 px-4  mx-auto">
            <div className="w-full flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/2 lg:w-[40%]  mx-auto flex flex-col items-center md:items-start text-center md:text-start gap-4">
                <p className="text-primary font-bold text-lg md:text-xl">
                  CUSTOMIZE WITH YOUR SCHEDULE
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  From Struggling Student to Academic Achiever
                </h2>
                <p className="text-secondary text-sm md:text-base">
                  Emily came to us struggling with her high school grades and
                  confidence. She was particularly challenged by mathematics and
                  science. Through personalized mentoring sessions, Emily
                  learned effective study techniques, developed a passion for
                  learning, and drastically improved her problem-solving skills.
                  By the end of the academic year, Emily not only aced her final
                  exams but also secured a scholarship to her dream college.
                  Today, she is pursuing a degree in Biomedical Engineering,
                  driven by the belief that she can make a difference in the
                  world.
                </p>
                <p className="italic text-secondary text-sm md:text-base">
                  "My mentor didn't just teach me subjects; they taught me how
                  to believe in myself." - Emily
                </p>
              </div>
              <div className="w-full md:w-1/2 relative">
                <figure className="w-full max-w-xs mx-auto">
                  <img src={Women2} alt="" className="w-full h-auto" />
                </figure>
                <div className="absolute -bottom-[18%] right-20">
                  <div className="w-32 h-32 md:w-60 md:h-60 bg-gray-300 rounded-lg border-4 border-line overflow-hidden relative"></div>
                </div>
              </div>
            </div>
          </section> */}

          <section
            ref={refs.stories}
            className="w-full h-full py-10 relative"
            id="stories"
          >
            <div className="absolute hidden dark:block w-[250px] md:w-[450px] top-0 left-0 select-none blur-md z-10">
              <figure>
                <img src={Ellipse} alt="Ellipse" />
              </figure>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-center items-center flex-col mb-10 relative z-20">
              {/* <h3
                data-aos="zoom-out"
                data-aos-delay="0"
                data-aos-duration="800"
                // data-aos-duration="800"
                className={`${sectionStylings.title}`}
              >
                Ready to Start Your Success Story?
              </h3>
              <p
                data-aos="zoom-out"
                data-aos-delay="0"
                data-aos-duration="800"
                // data-aos-duration="800"
                className={`${sectionStylings.subTitle} hidden md:block`}
              >
                Check out our courses and be part of Success Stories by joining
                Kre8ly Training Programs
              </p> */}

              <h2 className=" text-3xl lg:text-4xl font-semibold text-content mb-4 mt-3 text-content text-center">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-lg text-content-secondary max-w-6xl mx-auto">
                Check out our courses and be part of Success Stories by joining
                Kre8ly Training Programs
              </p>
              {/* <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full items-center flex justify-center mt-4"
              >
                <Link
                  data-aos="zoom-out"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  // data-aos-duration="800"
                  to={"/"}
                  className="px-4 py-3 hover:bg-brand-hover hover:text-brand-fg hover:bg-brand-hover text-brand-fg dark:text-content bg-brand dark:bg-surface hover:text-primary  flex items-center font-bold w-fit justify-center rounded-md text-xs md:text-base transition-all duration-300"
                >
                  Explore Courses */}
              {/* <span>
                    <FaArrowRight
                      className="text-white bg-black p-1 rounded-full"
                      size={25}
                    />
                  </span> */}
              {/* </Link>
              </div> */}
            </div>
            <div className="absolute  w-[250px] hidden dark:block md:w-[450px] bottom-0 right-0 select-none blur-md z-10">
              <figure>
                <img src={Ellipse} alt="Ellipse" />
              </figure>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 overflow-hidden">
              <Swiper
                ref={swiperRef}
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectCoverflow,
                ]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                effect="coverflow"
                grabCursor={true}
                className={isDarkMode ? "" : "custom-swiper swiper-container"}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 250,
                  modifier: 1.5,
                  slideShadows: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 40 },
                  1024: { slidesPerView: 3, spaceBetween: 45 },
                }}
                touchEventsTarget="container"
              >
                {Array.isArray(videos) &&
                videos.map((slide, i) => (
                  <SwiperSlide
                    key={i}
                    className="flex justify-center overflow-hidden"
                  >
                    <VideoSlide
                      url={`https://www.youtube.com/watch?v=${slide?.videoId}`}
                      onClick={(url) => {
                        console.log("Clicked video:", url);
                        // setModalVideoUrl(url);
                      }}
                    />
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
              <div className="flex items-center justify-end  gap-5 ">
                <button
                  onClick={goPrev}
                  className=" dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover text-brand-fg  p-2 rounded-md "
                >
                  <FaChevronLeft className="text-xs md:text-lg" />
                </button>
                <button
                  onClick={goNext}
                  className=" dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover text-brand-fg  p-2 rounded-md "
                >
                  <FaChevronRight className="text-xs md:text-lg" />
                </button>
              </div>
            </div>
          </section>
          <section
            className="w-full h-full py-10 relative bg-surface-sunken"
            id="projects"
          >
            {/* <figure>
              <img src={TimeLine} alt="" />
            </figure> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-center items-center flex-col  relative z-20">
              {/* <h3
                data-aos="zoom-out"
                data-aos-delay="0"
                data-aos-duration="800"
                // data-aos-duration="800"
                className={`${sectionStylings.title}`}
              >
                Our Students Projects
              </h3> */}
              <h2 className=" text-3xl lg:text-4xl font-semibold text-content mb-4 text-content text-center">
                Our Students Projects
              </h2>
              <p className="text-lg text-content-secondary max-w-6xl mx-auto">
                Gain practical skills, industry knowledge, and hands-on
                experience to excel in your professional journey.
              </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 overflow-hidden md:mt-10">
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  EffectCoverflow,
                ]}
                ref={studentSwipperRef}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 250,
                  modifier: 1.5,
                  slideShadows: true,
                }}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 40 },
                  1024: { slidesPerView: 3, spaceBetween: 45 },
                }}
                touchEventsTarget="container"
                className={isDarkMode ? "" : "custom-swiper swiper-container"}
              >
                {LinkedinPosts.map((slide, i) => (
                  <SwiperSlide
                    key={i}
                    className="flex justify-center items-center"
                  >
                    <Link to={slide?.url} target="_blank">
                      <figure className="w-full md:w-96 h-56">
                        <img
                          src={slide?.image}
                          alt={slide?.image_alt}
                          className="w-full h-full object-cover rounded-[30px]"
                        />
                      </figure>
                    </Link>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
              <div className="flex items-center justify-end  gap-5 ">
                <button
                  onClick={studentGoPrev}
                  className=" dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover text-brand-fg  p-2 rounded-md "
                >
                  <FaChevronLeft className="text-xs md:text-lg" />
                </button>
                <button
                  onClick={studentGoNext}
                  className=" dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover text-brand-fg  p-2 rounded-md "
                >
                  <FaChevronRight className="text-xs md:text-lg" />
                </button>
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

export default OurStories;

const FeedBackForm = ({ setIsPopUp }) => {
  const [formData, setFormData] = useState({
    name: "",
    linkedinUrl: "",
    youtubeUrl: "",
    desc: "",
    currentStatus: {
      currentCompany: "",
      currentRole: "",
    },
  });

  const [error, setError] = useState({
    name: "",
    linkedinUrl: "",
    youtubeUrl: "",
    desc: "",
    currentStatus: {
      currentCompany: "",
      currentRole: "",
    },
  });

  // Handle input change for normal fields
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setError((prevError) => ({ ...prevError, [name]: "" }));
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Handle input change for nested fields
  const handleNestedInputChange = (e) => {
    const { name, value } = e.target;
    setError((prevError) => ({
      ...prevError,
      currentStatus: { ...prevError.currentStatus, [name]: "" },
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      currentStatus: { ...prevFormData.currentStatus, [name]: value },
    }));
  };

  const validateForm = () => {
    let newErrors = { currentStatus: {} };
    let isValid = true;

    const httpRegex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.linkedinUrl.trim()) {
      newErrors.linkedinUrl = "LinkedIn URL is required";
      isValid = false;
    } else if (!httpRegex.test(formData.linkedinUrl)) {
      newErrors.linkedinUrl = "Invalid URL";
      isValid = false; //
    }

    if (!formData.youtubeUrl.trim()) {
      newErrors.youtubeUrl = "YouTube URL is required";
      isValid = false;
    } else if (!httpRegex.test(formData.youtubeUrl)) {
      newErrors.youtubeUrl = "Invalid URL";
      isValid = false; //
    }

    if (!formData.desc.trim()) {
      newErrors.desc = "Description is required";
      isValid = false;
    }

    if (!formData.currentStatus.currentCompany.trim()) {
      newErrors.currentStatus.currentCompany = "Current company is required";
      isValid = false;
    }

    if (!formData.currentStatus.currentRole.trim()) {
      newErrors.currentStatus.currentRole = "Current role is required";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // console.log("Form submitted:", formData);
    setIsPopUp(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[32rem] h-[36rem] overflow-y-auto mx-auto p-4 bg-surface rounded-lg shadow-md relative top-0 text-start"
    >
      <div className="absolute top-0 right-0 p-4">
        <IoCloseCircle
          onClick={() => setIsPopUp(false)}
          className="text-3xl cursor-pointer text-error hover:text-error"
        />
      </div>
      <h2 className="text-2xl font-bold mb-3 text-center mt-6">
        Leave us your feedback
      </h2>

      <InputField
        label="Name"
        placeholder="Enter Your Name"
        inputName="name"
        error={error?.name}
        handleChange={handleChangeInput}
        formData={formData.name}
        inputType="text"
      />

      <InputField
        label="LinkedIn URL"
        placeholder="Enter Your LinkedIn URL"
        inputName="linkedinUrl"
        error={error?.linkedinUrl}
        handleChange={handleChangeInput}
        formData={formData.linkedinUrl}
        inputType="text"
      />

      <InputField
        label="YouTube URL"
        placeholder="Enter Your YouTube URL"
        inputName="youtubeUrl"
        error={error?.youtubeUrl}
        handleChange={handleChangeInput}
        formData={formData.youtubeUrl}
        inputType="text"
      />

      <InputField
        label="Current Company"
        placeholder="Enter your current company"
        inputName="currentCompany"
        error={error?.currentStatus?.currentCompany}
        handleChange={handleNestedInputChange}
        formData={formData.currentStatus.currentCompany}
        inputType="text"
      />

      <InputField
        label="Current Role"
        placeholder="Enter your current role"
        inputName="currentRole"
        error={error?.currentStatus?.currentRole}
        handleChange={handleNestedInputChange}
        formData={formData.currentStatus.currentRole}
        inputType="text"
      />
      <TextArea
        label="Description"
        placeholder="Write your feedback here..."
        inputName="desc"
        error={error?.desc}
        handleChange={handleChangeInput}
        formData={formData.desc}
      />

      <button
        type="submit"
        className="w-full mt-4 text-white py-2 rounded-lg hover:bg-brand transition"
      >
        Submit Feedback
      </button>
    </form>
  );
};

const InputField = ({
  label,
  error,
  handleChange,
  inputName,
  inputType,
  formData,
  placeholder,
}) => {
  return (
    <div className="mb-3">
      <label
        className="block text-content-secondary text-sm font-bold mb-2"
        htmlFor={inputName}
      >
        {label}
      </label>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        value={formData}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder={placeholder}
        required
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

const TextArea = ({
  label,
  error,
  handleChange,
  inputName,
  formData,
  placeholder,
}) => {
  return (
    <div className="mb-3">
      <label
        className="block text-content-secondary text-sm font-bold mb-2"
        htmlFor={inputName}
      >
        {label}
      </label>
      <textarea
        id={inputName}
        name={inputName}
        value={formData}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 h-[100px]"
        placeholder={placeholder}
        required
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};