import React from "react";
import { Helmet } from "@/lib/helmet-compat";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
const BackGround = "/assets/fellowship/Background.webp";
const HeroImage = "/assets/fellowship/HeroImage.webp";
const Line = "/assets/fellowship/Line.webp";
const Icon1 = "/assets/fellowship/Icon1.webp";
const Icon2 = "/assets/fellowship/Icon2.webp";
const Icon3 = "/assets/fellowship/Icon3.webp";
const Icon4 = "/assets/fellowship/Icon4.webp";

import { IoPlayCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FellowShipCourseCardInfos } from "../../Utils/CourseCardInfos";
import Cards from "../../component/Cards";
import HomeCardSwiper from "../../component/HomeCardSwiper";
import { NewHallOfFrameInfos } from "../../Utils/HallOfFrameInfos";
import HallofFameCardTwo from "../../component/HallofFameCardTwo";
const FellowShipHome = () => {
  const PlacementData = [
    {
      id: 1,
      img: Icon1,
      title: "Resume review",
      desc: "Perfect your resume with mentor feedback to ensure you stand out for your dream role.",
    },
    {
      id: 2,
      img: Icon2,
      title: "1:1 mock interviews with mentors",
      desc: "Practice with professionals to ace interviews and land top tech roles.",
    },
    {
      id: 3,
      img: Icon3,
      title: "Practice real world interview questions",
      desc: "Practice real-world questions to tackle any interview challenge confidently.",
    },
    {
      id: 4,
      img: Icon4,
      title: "Interviews with hiring partners",
      desc: "Gain access to interviews with leading technology companies.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
      <div
        className="flex flex-col w-full min-h-screen"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // backgroundAttachment: "fixed",
        }}
      >
        <main className="flex items-center flex-col justify-center w-full container mx-auto h-full gap-5 md:gap-10 pb-10">
          <header className="flex justify-between w-full h-full  flex-col-reverse lg:flex-row ">
            <div className="w-full lg:w-1/2  flex flex-col justify-center items-start h-full p-5 lg:pl-8 lg:pt-28">
              <div className="text-white flex flex-col justify-start items-start gap-16 w-full h-full">
                <div className="flex flex-col gap-10 w-full h-full ">
                  <h1
                    className=" text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold capitalize w-full xl:w-[120%] font-Poppins"
                    style={{ lineHeight: "1.5" }}
                  >
                    Learn at your place with <br /> flexible{" "}
                    <span className="relative">
                      online courses.
                      <img
                        src={Line}
                        alt=""
                        className="absolute -bottom-1 right-0 md:right-16 w-full md:w-[80%] mx-auto"
                      />
                    </span>
                  </h1>
                  <p
                    className="text-lg text-secondary"
                    style={{ lineHeight: "2" }}
                  >
                    Kre8ly offers global accredited and tailored
                    training programs, empowering learners to achieve
                    professional excellence.
                  </p>
                  <div className="flex flex-wrap gap-6 lg:gap-4 justify-center lg:justify-start">
                    <button className="bg-purple px-8 py-3 rounded-md text-lg w-full sm:w-auto">
                      Get Started
                    </button>
                    <button className="flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
                      <span className="block">
                        <IoPlayCircleOutline className="text-white" size={40} />
                      </span>
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-8 h-full w-full">
                  <div className="flex gap-2 md:gap-4 justify-start">
                    <div className="flex gap-5 justify-center items-center w-full sm:w-auto">
                      <p className="flex flex-col gap-2 text-center">
                        <span className="text-2xl lg:text-4xl font-semibold">
                          12K
                        </span>{" "}
                        <span className="text-base lg:text-lg">Tutors</span>
                      </p>{" "}
                      <span className=" text-2xl lg:text-4xl">+</span>{" "}
                    </div>
                    <div className="flex gap-5 justify-center items-center w-full sm:w-auto">
                      <p className="flex flex-col gap-2 text-center">
                        <span className="text-2xl lg:text-4xl font-semibold">
                          108K
                        </span>{" "}
                        <span className="text-base lg:text-lg">Students</span>
                      </p>{" "}
                      <span className=" text-2xl lg:text-4xl">+</span>{" "}
                    </div>
                    <div className="flex gap-5 justify-center items-center w-full sm:w-auto">
                      <p className="flex flex-col gap-2 text-center">
                        <span className="text-2xl lg:text-4xl font-semibold">
                          210
                        </span>{" "}
                        <span className="text-base lg:text-lg">Subject</span>
                      </p>{" "}
                    </div>
                  </div>

                  <div className="flex gap-4 justify-start items-center">
                    <p className="w-10 h-10 bg-purple flex justify-center items-center rounded-lg">
                      <FaStar className="text-white" size={25} />
                    </p>
                    <p className="text-lg text-secondary w-full md:w-1/2">
                      Over one million students have given a 5 star review to
                      their tutor
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={HeroImage} alt="" className="w-full h-auto" />
            </div>
          </header>
          <div className="w-full h-full flex justify-center items-center gap-10 flex-col">
            <section className="w-full h-full flex flex-col justify-center items-center gap-10 p-5">
              <div className="flex flex-col gap-4 justify-center items-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">
                  Accelerate your career
                </h2>
                <p className="text-base md:text-lg text-secondary text-center">
                  Live learning with industry experts. Jobs at technology
                  companies.
                </p>
              </div>
              <div className="w-full md:w-[95%] mx-auto mt-10 hidden lg:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                {FellowShipCourseCardInfos.map((Course) => (
                  <Cards
                    key={Course.id}
                    Course={Course}
                    varient={"fellowship"}
                  />
                ))}
              </div>
              <div className="w-full h-full lg:hidden flex flex-col items-center justify-center gap-10 py-5">
                <HomeCardSwiper
                  Courses={FellowShipCourseCardInfos}
                  varient={"fellowship"}
                />
              </div>
            </section>
            <section className="w-full h-full flex flex-col justify-center items-center gap-10 p-5 ">
              <div className="flex flex-col gap-4 justify-center items-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">
                  1-Year Placement Support to Land <br /> Your Dream Job
                </h2>
                <p className="text-base md:text-lg text-secondary text-center">
                  Clear graduation project for placement support.
                </p>
              </div>
              <div className="w-full lg:w-[95%] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto">
                {PlacementData?.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className="flex items-center gap-6 md:gap-8 w-full md:p-4 "
                    >
                      {/* Icon Container */}
                      <div className=" bg-[#291457] flex justify-center items-center rounded-md min-w-24 max-h-24 w-[15%] h-full">
                        <img
                          src={data?.img}
                          alt={data?.title}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain"
                        />
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col gap-2 w-[85%]">
                        <h4 className="text-white text-lg md:text-2xl font-semibold">
                          {data?.title}
                        </h4>
                        <p className="text-secondary text-sm md:text-base leading-relaxed">
                          {data?.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="w-full h-full flex flex-col justify-center items-center gap-10 p-5 ">
              <div className="flex flex-col gap-4 justify-center items-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">
                  Success Stories
                </h2>
              </div>
              <HallofFameCardTwo hallofFameInfo={NewHallOfFrameInfos} />
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default FellowShipHome;
