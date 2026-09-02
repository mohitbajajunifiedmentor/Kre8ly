import { Helmet } from "@/lib/helmet-compat";
const HeroImage = "/assets/Contest/HeroNew.svg";
import { CiClock2 } from "react-icons/ci";
import Navbar from "../component/Navbar";
const Grid1 = "/assets/Contest/ImageGrid1.svg";
const Grid2 = "/assets/Contest/ImageGrid2.svg";
const Grid3 = "/assets/Contest/ImageGrid3.svg";
const Grid4 = "/assets/Contest/ImageGrid4.svg";
import { FiPlus } from "react-icons/fi";
const Icon1 = "/assets/Contest/Icon1.png";
const Icon2 = "/assets/Contest/Icon2.png";
const Icon3 = "/assets/Contest/Icon3.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Ellipse = "/assets/Ellipse.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../component/Footer";
import { Link } from "@/lib/router-compat";
import { useEffect, useState } from "react";
import Query from "../component/Query/Query";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const ContestHome = ({ darkMode, setDarkMode }) => {
  const [totalSeconds, setTotalSeconds] = useState(1 * 24 * 60 * 60); // 1 week in seconds (604,800)
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => {
        // Reset to 1 week if timer reaches 0
        if (prev <= 0) {
          return 1 * 24 * 60 * 60; // 604,800 seconds
        }

        // Calculate hours, minutes, seconds
        const hours = Math.floor(prev / 3600);
        const minutes = Math.floor((prev % 3600) / 60);
        const seconds = prev % 60;

        // Format with leading zeros
        const displayHours = String(hours).padStart(2, "0");
        const displayMinutes = String(minutes).padStart(2, "0");
        const displaySeconds = String(seconds).padStart(2, "0");

        // Update displayed time
        setTime(`${displayHours}h : ${displayMinutes}m : ${displaySeconds}s`);

        // Decrease by 1 second
        return prev - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array

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
    face: useRef(null),
    community: useRef(null),
    rewards: useRef(null),
    table: useRef(null),
    applynow: useRef(null),
  };

  const isFaceInView = useInView(refs.face, { once: true, margin: "-50px" });
  const isCommunityInView = useInView(refs.community, {
    once: true,
    margin: "-50px",
  });
  const isRewardsInView = useInView(refs.rewards, {
    once: true,
    margin: "-50px",
  });
  const isTableInView = useInView(refs.table, { once: true, margin: "-50px" });
  const isApplyNowInView = useInView(refs.applynow, {
    once: true,
    margin: "-50px",
  });

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
      }`}
    >
      <Helmet>
        <title>
          Become a Campus Ambassador | Kre8ly Internship Program
        </title>
        <meta
          name="description"
          content="Join Kre8ly's Campus Ambassador Program! Gain leadership skills, earn rewards, and boost your career with our exclusive internship opportunities."
        />
        <link
          rel="canonical"
          href="https://unifiedmentor.com/campus-ambassador"
        />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <main className=" relative overflow-hidden">
        <section
          id="hero"
          className="flex flex-col-reverse lg:flex-row p-0  items-start sm:items-center justify-between h-full lg:h-[31rem] relative bg-gradient-to-br from-brand via-brand-active to-brand-hover"
        >
          {/* <img
            src={Ellipse}
            alt="Circle"
            className="absolute -top-[10%] hidden dark:block w-[250px] md:w-[450px] left-0 md:-left-[15%] select-none blur-md"
          /> */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left py-5 justify-start h-full relative z-10 ">
            <div className="text-content space-y-4 p-10">
              <h1
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-4xl md:text-5xl text-brand-fg dark:text-brand-fg font-bold leading-tight"
              >
                Be the face of Kre8ly
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-sm md:text-lg text-brand-fg dark:text-brand-fg font-semibold"
              >
                in your college
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-sm md:text-lg text-brand-fg dark:text-brand-fg "
              >
                Apply now to access direct entry round!
              </p>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-brand-fg dark:text-brand-fg flex items-center justify-start md:justify-start gap-2 px-10"
            >
              <CiClock2 className="text-xl md:text-2xl" />
              <span className="text-lg md:text-xl">
                {time || "00h : 05m : 00s"}
              </span>
            </p>
            <Link
              className="px-10"
              target="_blank"
              to={"https://forms.gle/Cv39xjPXrpF3ky216"}
            >
              <button
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="bg-surface text-sky-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-center"
              >
                Apply Now
              </button>
            </Link>
          </div>
          <div className=" w-full md:w-[35rem]  mt-8 md:mt-0">
            <img
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              src={HeroImage}
              alt="Kre8ly Campus Ambassador Header Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>
        {/* line */}
        {/* <div className="mt-10 block h-px w-full md:w-[80%] bg-brand dark:bg-surface mx-auto"></div> */}
        <section className="h-full w-full my-10 relative">
          <img
            src={Ellipse}
            alt="Circle"
            className="absolute  hidden dark:block -top-[10%] w-[250px] md:w-[450px] right-0 select-none blur-md"
          />
          <div className="flex flex-col items-center justify-center gap-5 relative z-10">
            <h2
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-3xl lg:text-4xl font-semibold text-content mb-4 max-w-6xl text-center"
            >
              Enter the community of top 1% student leaders and be a campus
              sensation!
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg text-content-secondary max-w-6xl mx-auto text-center"
            >
              Embark on a 60-day transformative journey designed to empower your
              college students in achieving their career aspirations while you
              unlock thrilling rewards and gain valuable real-world skills in
              marketing, communication, and leadership.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="md:mt-20 h-full lg:h-[200px] xl:h-[150px] w-full sm:w-1/2 lg:w-full border-2 dark:border-line mx-auto rounded-xl flex items-center justify-between flex-col lg:flex-row relative z-10 hover:scale-105 transition-all duration-300 "
          >
            <div className="w-full lg:w-2/6 text-center text-content px-10 py-4 flex justify-center items-center flex-col gap-3 hover:scale-105 transition-all duration-300 ">
              <h3 className="text-xl font-bold text-content dark:text-gray-200 my-6">
                5+ Masterclasses & Webinars
              </h3>
              <p className="text-content-secondary leading-relaxed mb-6 max-w-xs">
                INTERACT with industry leaders for exponential career-growth
              </p>
            </div>
            <div
              className={`w-[105%] -ml-3 lg:ml-0  lg:w-2/6 text-center text-white px-10 py-10 lg:h-[220px] xl:h-[170px] rounded-2xl bg-gradient-to-br from-slate-200 to-sky-200  border-2 border-line flex justify-center items-center flex-col gap-3 mx-auto hover:scale-105 transition-all duration-300 `}
            >
              <h3 className="text-xl font-bold text-content mb-3">
                15+ Exciting contests
              </h3>
              <p className="text-content-secondary leading-relaxed mb-6 max-w-xs">
                LEARN the art of marketing & selling and be the next `Rocket
                Singh`
              </p>
            </div>
            <div className="w-full lg:w-2/6 text-center text-content px-10 py-4 mx-auto flex justify-center items-center flex-col gap-3 hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-content mb-3">
                ₹ 7 Lacs Cash rewards
              </h3>
              <p className="text-content-secondary leading-relaxed mb-6 max-w-xs">
                EARN awesome pocket money and say goodbye to your financial
                worries
              </p>
            </div>
          </div>
        </section>
        <section className="my-10 h-full w-full relative flex flex-col items-center justify-center bg-surface-sunken md:pt-10">
          <img
            src={Ellipse}
            alt="Circle"
            className="absolute hidden dark:block -top-[10%] w-[250px] md:w-[450px] left-0 md:-left-[15%] select-none blur-md"
          />
          {/* <h4 className="text-3xl lg:text-4xl font-semibold text-content mb-4 max-w-6xl text-center">
            More rewards in store for you!!!
          </h4> */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-center md:mb-16 mb-4 "
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
              More rewards in store for you!!!
            </h2>
            {/* <p className="text-lg text-content-secondary max-w-2xl mx-auto">
              Our structured 8-step process ensures your project is delivered.
            </p> */}
          </div>
          <div className="w-full h-full relative">
            <GridComponent />
            <FiPlus
              className="hidden md:block text-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
              size={40}
            />
            {/* left box */}
            <div className="w-14 md:w-40 h-14 md:h-40  border-line-strong border-l-2 border-t-2 rounded-tl-3xl absolute -top-5 md:-top-10 -left-3 md:left-24"></div>
            {/* right box */}
            <div className="w-14 h-14 md:w-40 md:h-40 border-line-strong  dark:border-line border-r-2 border-b-2 rounded-br-3xl absolute -bottom-5 md:-bottom-10 -right-3 md:right-24"></div>
          </div>
        </section>
        {/* line */}
        {/* <div className="mt-24 block h-px w-full md:w-[80%] bg-brand dark:bg-surface mx-auto"></div> */}

        <section className="my-10 relative">
          <img
            src={Ellipse}
            alt="Circle"
            className="absolute hidden dark:block -top-[10%] w-[250px] md:w-[450px] right-0  select-none blur-md"
          />
          {/* <h5 className="text-center text-lg md:text-3xl font-semibold text-content relative z-10">
            What will you bring to the table?
          </h5> */}

          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-center "
          >
            <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
              What will you bring to the table?
            </h2>
            {/* <p className="text-lg text-content-secondary max-w-2xl mx-auto">
              Our structured 8-step process ensures your project is delivered.
            </p> */}
          </div>
          <div className="w-full h-full relative z-10">
            <FlexComponent />
          </div>
        </section>
        {/* <section className="my-10 relative ">
          <img
            src={Ellipse}
            alt="Circle"
            className="absolute -top-[10%] w-[250px] md:w-[450px] left-0  select-none blur-md"
          />
          <h6 className="text-center text-3xl font-semibold text-white relative z-10">
            Campus ambassadors who are making us proud!
          </h6>
          <div className="w-full h-full my-10">
            <CardSwipper />
          </div>
        </section> */}
        {/* line */}
        {/* <div className="mt-24 block h-px w-full md:w-[80%] bg-brand dark:bg-surface mx-auto"></div> */}
        <section className="my-10 relative ">
          <img
            src={Ellipse}
            alt="Circle"
            className="absolute hidden dark:block -top-[10%] w-[250px] md:w-[450px] right-0  select-none blur-md"
          />
          <div className="w-full h-full flex justify-center gap-10 relative z-10">
            <Link target="_blank" to={"https://forms.gle/Cv39xjPXrpF3ky216"}>
              <button className=" border-navyColor  dark:border-line hover:dark:border-line-strong dark:hover:text-content rounded-md  py-3 cursor-pointer group select-none hover:bg-surface-sunken hover:bg-surface-sunken  border px-8  text-content  flex items-center font-semibold w-full justify-center  text-xs md:text-sm transition-all duration-300">
                Apply now
              </button>
            </Link>
            <Link to={"/"}>
              <button className="py-3.5 px-5 text-white dark:text-content bg-brand dark:bg-surface  flex items-center gap-3 font-semibold justify-center rounded-md text-sm  md:w-auto mx-auto hover:bg-brand-hover dark:hover:text-white hover:bg-brand-hover  hover:text-primary transition duration-300">
                Know more
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

const GridComponent = () => {
  const gridItems = [
    {
      img: Grid1,
      img_alt: "Free Kre8ly Trainings",
      caption: "Free Kre8ly <br /> Trainings",
    },
    {
      img: Grid2,
      img_alt: "Letter of Recommendation & certificate",
      caption: "Letter of Recommendation <br /> & certificate",
    },
    {
      img: Grid3,
      img_alt: "Amazon & Flipkart Gift vouchers,OTT Subscriptions",
      caption: "Amazon & Flipkart Gift vouchers,<br /> OTT Subscriptions",
    },
    {
      img: Grid4,
      img_alt: "Cool Kre8ly & Branded T-shirts",
      caption: "Cool Kre8ly <br /> Branded T-shirts",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10  p-4 dark:p-0 mx-auto justify-end my-16">
      {gridItems?.map((item, index) => (
        <figure
          key={index}
          className="flex flex-col items-center  text-center w-full lg:w-96 mx-auto justify-start gap-3 border-2 shadow-lg rounded-2xl p-4 hover:scale-105 transition-all duration-300"
        >
          <img
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            src={item.img}
            alt={item.img_alt}
            className="md:w-full w-48 md:max-w-96 h-auto object-cover mb-3"
          />
          <figcaption
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="text-content md:text-xl text-lg font-semibold px-2 leading-8"
            dangerouslySetInnerHTML={{
              __html: item?.caption,
            }}
          />
        </figure>
      ))}
    </div>
  );
};

const FlexComponent = () => {
  const itemsArray = [
    {
      img: Icon1,
      img_alt:
        "Campus Learning Sessions - Conduct learning sessions in campus and spread the Kre8ly vibe",
      text: "Help your college students upskill via Kre8ly Trainings",
    },
    {
      img: Icon2,
      img_alt:
        "Online Promotion - Trendify Kre8ly Trainings using your online presence",
      text: "Conduct learning sessions in campus and spread the Kre8ly vibe",
    },
    {
      img: Icon3,
      img_alt:
        "Online Promotion - Trendify Kre8ly Trainings using your online presence",
      text: "Trendify Kre8ly Trainings by using your online presence",
    },
  ];

  //

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="w-full py-8 px-4 md:px-8 "
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-center items-stretch bg-gradient-to-br from-slate-400 to-sky-400 rounded-2xl ">
        {itemsArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start  text-center flex-1 p-4 "
          >
            <img
              src={item.img}
              alt={item.img_alt}
              className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4 hover:scale-150 transition-all duration-300"
            />
            <p className="text-content text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CardSwipper = () => {
  const userProfile = [
    {
      id: 1,
      text: "I learned a lot about marketing skills while at the same time, it helped me enhance my communication and leadership skills. I earned many goodies like Kre8ly T-shirts, Amazon Vouchers, and cash rewards.",
      author: {
        name: "B.B. Sathya",
        college: "Paaval Engineering College",
        rewards: "Amazon Gift Vouchers, Kre8ly T-shirts, ₹3100",
      },
      image: {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Profile",
      },
    },
    {
      id: 2,
      text: "My experience with Kre8ly helped me improve my project management skills and network with industry leaders. I won several rewards like smartwatches and headphones.",
      author: {
        name: "Aditi Singh",
        college: "XYZ Institute of Technology",
        rewards: "Smartwatches, Headphones, ₹4500",
      },
      image: {
        src: "https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        alt: "Profile",
      },
    },
    {
      id: 3,
      text: "Working with Kre8ly gave me the confidence to take on bigger leadership roles in college. I received vouchers and merchandise as recognition for my hard work.",
      author: {
        name: "Rahul Sharma",
        college: "ABC University",
        rewards: "Gift Vouchers, Merchandise, ₹2000",
      },
      image: {
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        alt: "Profile",
      },
    },
    {
      id: 4,
      text: "Kre8ly provided me with a platform to showcase my talents. Winning prizes like Bluetooth speakers and T-shirts was an added bonus!",
      author: {
        name: "Sneha Kumar",
        college: "LMN College of Engineering",
        rewards: "Bluetooth Speakers, T-shirts, ₹2700",
      },
      image: {
        src: "https://images.unsplash.com/photo-1496672254107-b07a26403885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        alt: "Profile",
      },
    },
    {
      id: 5,
      text: "The mentorship and guidance I received from Kre8ly helped me grow professionally. I earned rewards like tech gadgets and cash prizes for my contributions.",
      author: {
        name: "Rohan Verma",
        college: "PQR University",
        rewards: "Tech Gadgets, Cash Prizes, ₹5000",
      },
      image: {
        src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        alt: "Profile",
      },
    },
  ];

  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
      }}
      className="w-full max-w-6xl mx-auto my-10"
    >
      {userProfile.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center w-full md:px-16 py-5">
            <div className="w-full md:w-2/3 rounded-xl">
              <div className="flex flex-col gap-4">
                <p className="text-white text-lg leading-relaxed relative">
                  {item.text}
                  <RiDoubleQuotesL
                    className="absolute -top-7 -left-1 md:-top-2 md:-left-[3rem]"
                    color="#5B35AF"
                    size={40}
                  />
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-xl text-white">
                    {item.author.name}
                  </p>
                  <p className="text-white">College: {item.author.college}</p>
                  <p className="text-white mt-2">
                    Rewards won: {item.author.rewards}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 h-64 md:h-auto mt-10 md:mt-0">
              <div className="bg-[#3B1C7E] max-w-56 h-72 rounded-xl shadow-lg relative mx-auto">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-full absolute -top-2 right-2 object-cover object-top rounded-xl"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContestHome;