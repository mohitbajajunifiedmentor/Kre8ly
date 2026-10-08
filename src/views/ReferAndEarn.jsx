import React, { useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Query from "../component/Query/Query";
import { MdGroupAdd } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
const Arrow1 = "/assets/ReferAndEarn/Arrow%202.svg";
const Arrow2 = "/assets/ReferAndEarn/Arrow%204.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ReferAndEarnFaqs } from "../Utils/Faqs/ReferAndEarn";
import Faqs from "../component/MachineLearning/Faqs";
const ReferAndEarnBg = "/assets/ReferAndEarn/startnow.svg";
const HeroSectionImage = "/assets/ReferAndEarn/HeroImageReferandEarn.png";
const HeroSectionBg = "/assets/ReferAndEarn/HeroImageBG.png";
import { IoCopy, IoCheckmarkOutline } from "react-icons/io5";
const Eclipse = "/assets/ReferAndEarn/Eclipse.png";
const BgImage = "/assets/ReferAndEarn/Bg.svg";
import MobileFooter from "../component/MobileFooter";
import { Helmet } from "@/lib/helmet-compat";
import ChatBot from "@/component/ChatBot/ChatBot";

const ReferAndEarn = ({ darkMode, setDarkMode }) => {
  const referCode = useRef(null);

  const [showReferralBox, setShowReferralBox] = useState(false);
  const [copied, setCopied] = useState(false);
  const referralLink = "https://yourapp.dev/signup?ref_code=testref123";

  const howItWorks = [
    {
      icon: MdGroupAdd,
      title: "Invite Your Friends",
      description: "Share your unique referral link with your friends.",
    },
    {
      icon: MdAddTask,
      title: "They Sign Up & Enroll",
      description:
        "They register and enroll in a course or internship using your link.",
    },
    {
      icon: RiMoneyRupeeCircleLine,
      title: "You Earn Rewards",
      description:
        "You get exciting cash rewards or vouchers once they successfully enroll.",
    },
  ];

  const testimonials = [
    {
      testimonial:
        "Referring friends to Kre8ly has been a rewarding experience. I get to help them grow while earning great rewards!",
      name: "Lana Bernier",
      designation: "technical lead",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      testimonial:
        "Referring friends to Kre8ly has been a rewarding experience. I get to help them grow while earning great rewards!",
      name: "Liam",
      designation: "Front End Developer",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      testimonial:
        "Referring friends to Kre8ly has been a rewarding experience. I get to help them grow while earning great rewards!",
      name: "Bernier",
      designation: "technical lead",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      testimonial:
        "Referring friends to Kre8ly has been a rewarding experience. I get to help them grow while earning great rewards!",
      name: "Bernier",
      designation: "technical lead",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      testimonial:
        "Referring friends to Kre8ly has been a rewarding experience. I get to help them grow while earning great rewards!",
      name: "Bernier",
      designation: "technical lead",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    },
  ];

  useEffect(() => {
    if (showReferralBox) {
      const timer = setTimeout(() => setShowReferralBox(false), 15000);
      return () => clearTimeout(timer);
    }
  }, [showReferralBox]);

  const startReferButton = () => {
    if (referCode.current) {
      referCode.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const worksBg = ["bg-[#DEEDFC]", "bg-[#FCE8D8]", "bg-[#E8FCD8]"];

  return (
    <>
      <Helmet>
        <title>Refer and Earn | Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.kre8ly.com/refer-and-earn"
        />
        <meta
          name="description"
          content="Refer your friends to Kre8ly and earn exciting rewards for every successful signup or enrollment. Join our referral program today!"
        />
      </Helmet>
      <div
        className={`${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        }  min-h-screen pt-20`}
      >
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-6 relative">
          <section
            data-aos="zoom-out"
            data-aos-delay="0"
            data-aos-duration="800"
            // data-aos-duration="600"
            ref={referCode}
            className="w-full flex items-center justify-center mb-12 rounded-xl mt-2 z-10"
            style={{
              backgroundImage: `url(${BgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* bg-black/45  */}
            <div className="inset-0 flex  flex-col items-center justify-center text-white rounded-xl w-full z-10">
              <div className="relative w-full max-w-7xl rounded-xl overflow-hidden text-white">
                <div className="flex flex-col-reverse lg:flex-row items-start gap-0 md:gap-10">
                  {/* Left Section */}
                  <div
                    data-aos="fade-down"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="w-full lg:w-1/2 flex justify-center"
                  >
                    <figure className="transform translate-y-8">
                      <img
                        src={HeroSectionImage}
                        alt="Smiling person with phone"
                        className="w-full"
                      />
                    </figure>
                  </div>

                  {/* Right Section */}
                  <div
                    data-aos="fade-down"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left gap-6 p-8 md:pt-20"
                  >
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-snug text-content">
                      <span> Refer Your Friends</span>
                      <span> & Earn Exciting Rewards!</span>
                    </h1>
                    <p className="text-base md:text-lg text-content/80 leading-snug md:leading-loose">
                      Got friends who want to level up their career? Invite them
                      to join Kre8ly and get rewarded for every
                      successful signup or enrollment.
                    </p>
                    <button
                      data-aos="fade-up"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      onClick={() => {
                        setShowReferralBox(true);
                        setCopied(false);
                      }}
                      className="text-purple-700 font-semibold px-6 py-3 rounded-md hover:bg-purple-100 transition border border-white mt-4 hover:bg-[#381D76]"
                    >
                      Get My Referral Link
                    </button>
                    {/* {showReferralBox && (
                                        <div className='mt-0 p-3 bg-white rounded-md shadow-lg flex items-center gap-2 max-w-full overflow-x-auto'>
                                            <span className='text-black text-sm truncate whitespace-nowrap'>{referralLink}</span>
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(referralLink);
                                                    setCopied(true);
                                                    setTimeout(() => setCopied(false), 3000);
                                                }}
                                                className='text-purple-700 hover:text-purple-900 transition text-content'
                                            >
                                                {copied ? <IoCheckmarkOutline size={20} /> : <IoCopy size={20} />}
                                            </button>
                                        </div>
                                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <img
            src={Eclipse}
            className="absolute hidden md:block top-[500px] right-0 w-96 h-96 overflow-hidden blur-2xl pointer-events-none"
          />
          <div className="flex justify-center  mb-12 z-10">
            <hr className="w-[50%] border-t border-gray-300" />
          </div>
          <section className="mb-12 z-10">
            <div
              data-aos="flip-left"
              data-aos-delay="0"
              data-aos-duration="800"
              className="flex flex-col items-center justify-center text-content leading-relaxed"
            >
              <h1 className="text-lg md:text-3xl font-semibold text-content mb-4">
                How It Works
              </h1>
              <p className="text-center text-xs md:text-sm lg:max-w-[80%] text-content dark:text-[#C0C0C0] z-20 p-2">
                It’s Super Simple
              </p>
            </div>
            <div className="relative w-full mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-6">
                {howItWorks.map((how, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div
                      data-aos="flip-right"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      // data-aos-duration="500"
                      className={`w-16 h-16 md:w-24 md:h-24 ${
                        worksBg[index % worksBg.length]
                      } rounded-lg mb-4 mt-4 md:mt-0`}
                    >
                      {how.icon && (
                        <how.icon className="w-full h-full p-3 md:p-6 text-xl text-content" />
                      )}
                    </div>
                    <h2
                      data-aos="fade-down"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      className="text-lg md:text-2xl text-content font-semibold mt-2 md:mt-5"
                    >
                      {how.title}
                    </h2>
                    <p
                      data-aos="fade-down"
                      data-aos-delay="0"
                      data-aos-duration="800"
                      className="text-content dark:text-[#C0C0C0] font-md text-md md:w-[70%] m-1 mb-6 md:mb-0 md:m-3"
                    >
                      {how.description}
                    </p>
                    {/* Add dotted arrow for small screens, except for the last card */}
                    {index < howItWorks.length - 1 && (
                      <div className="block md:hidden absolute mt-3 bottom-[-30px] left-1/2 transform -translate-x-1/2">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="20"
                            y1="0"
                            x2="20"
                            y2="30"
                            stroke="#C0C0C0"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                          <path d="M15 30L20 40L25 30" fill="#ffff" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Curved arrows between cards - only visible on md+ screens */}
              <img
                src={Arrow1}
                alt="Arrow 1"
                className="hidden md:block absolute top-[60px] left-[30%] w-24"
              />
              <img
                src={Arrow2}
                alt="Arrow 2"
                className="hidden md:block absolute top-[60px] left-[65%] w-24"
              />
            </div>
          </section>
          <div className="flex justify-center mb-12 z-10">
            <hr className="w-[50%] border-t border-gray-300" />
          </div>
          {/* <section
                        className='w-full mt-8 mb-6 z-10'>
                        <div

                            className='flex flex-col items-center justify-center text-content leading-relaxed'>
                            <h1
                                data-aos="fade-up-right"
                                data-aos-delay="0"
                                data-aos-duration="800"
                                className='text-lg md:text-3xl font-semibold text-content mb-4'>What Our Referrers Are Saying:</h1>
                            <p
                                data-aos="fade-up-left"
                                data-aos-delay="0"
                                data-aos-duration="800"
                                className='text-center text-sm lg:max-w-[80%] text-content dark:text-[#C0C0C0] hidden md:block z-20 p-2'>Discover why referring to Kre8ly is a win for everyone!</p>
                        </div>
                        <div
                            className='w-full px-4 py-10 text-white'>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                className="w-full"
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1, // 1 slide per view on small screens
                                        spaceBetween: 10, // Reduced space between slides
                                    },
                                    768: {
                                        slidesPerView: 2, // 2 slides per view on medium screens (tablets)
                                        spaceBetween: 20, // Space between slides
                                    },
                                    1024: {
                                        slidesPerView: 3, // 3 slides per view on large screens (desktops)
                                        spaceBetween: 30, // Space between slides
                                    },
                                }}
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <>
                                            <div
                                                data-aos="zoom-out"
                                                data-aos-delay="0"
                                                data-aos-duration="800"
                                                className={`${worksBg[index % worksBg.length]} flex items-center justify-center rounded-tr-xl rounded-tl-xl rounded-r-xl`}>
                                                <div className='text-black p-4 h-[150px] text-sm md:text-base'>
                                                    <p
                                                    >"{item.testimonial}"</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 mt-4">
                                                {item.avatar ? (
                                                    <img
                                                        data-aos="zoom-out"
                                                        data-aos-delay="0"
                                                        data-aos-duration="800"
                                                        src={item.avatar}
                                                        alt={item.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                                )}
                                                <div>
                                                    <div
                                                        data-aos="fade-down"
                                                        data-aos-delay="0"
                                                        data-aos-duration="800"
                                                        className="font-bold md:text-sm text-content">{item.name}</div>
                                                    <div
                                                        data-aos="fade-down"
                                                        data-aos-delay="0"
                                                        data-aos-duration="800"
                                                        className="text-xs text-content">{item.designation}</div>
                                                </div>
                                            </div>
                                        </>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </section> */}
          {/* <div className="flex justify-center mb-12 z-10">
                    <hr className="w-[50%] border-t border-gray-300" />
                </div> */}
          <img
            src={Eclipse}
            className="absolute top-[1200px] hidden md:block right-0 w-96 h-96 overflow-hidden blur-2xl pointer-events-none"
          />
          <img
            src={Eclipse}
            className="absolute bottom-[700px] -left-3 hidden md:block  w-96 h-96 overflow-hidden blur-2xl pointer-events-none"
          />
          <section
            data-aos="flip-left"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full flex items-center justify-center py-12 z-10"
          >
            <div
              className="relative w-full max-w-6xl h-full md:h-80  rounded-xl overflow-hidden shadow-lg shadow-black/40"
              // style={darkMode ? { backgroundImage: `url(${ReferAndEarnBg})` } : {}}
              style={{
                backgroundImage: `url(${ReferAndEarnBg})`,
              }}
            >
              <div className="inset-0 flex flex-col items-center justify-center text-white p-6 ">
                <div className="flex flex-col text-center gap-6">
                  <h1 className="text-2xl md:text-4xl font-bold text-black">
                    Start Earning Today!
                  </h1>
                  <p className="text-center text-lg md:text-xl text-black ">
                    Invite your friends to learn with Kre8ly – <br />{" "}
                    it’s a win-win! You win, they win. <br /> Easy as that.
                  </p>
                </div>
                <div
                  data-aos="zlip-right"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="mt-12"
                >
                  <button
                    onClick={startReferButton}
                    className="border border-black  hover:text-white hover:bg-gray-500  px-3 py-2 rounded-md text-base md:text-lg font-semibold text-black  dark:hover:bg-[#381D76]"
                  >
                    Start Referring
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="flex justify-center mt-8 mb-6 md:mb-12 z-10">
            <hr className="w-[50%] border-t border-gray-300" />
          </div>
          <section className="w-full h-full flex flex-col items-center justify-center gap-10 z-10">
            <Faqs varient="refer and earn" Faqs={ReferAndEarnFaqs} />
          </section>
        </main>
        <Footer />
        <Query />
        <ChatBot darkMode={darkMode} />
        <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
};

export default ReferAndEarn;
