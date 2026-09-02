import React, { useState } from "react";
const Notes = "/assets/machineLearning/Notes.png";
const Placement = "/assets/machineLearning/PlaceMent.png";
import { MdOutlineGroup } from "react-icons/md";
const Placement1 = "/assets/Placement1.png";
const Placement2 = "/assets/Placement2.png";
const Placement3 = "/assets/Placement3.png";
import { FaArrowRight } from "react-icons/fa";
import PlacementSupportCardsSwiper from "../PlacementSupportCardsSwiper";
import DreamJobSwiper from "../DreamJobSwiper";

const PlacementSupport = ({ PlacementSupportInfo, darkMode, location,varient }) => {
  const initialSlice = PlacementSupportInfo.slice(0, 10);
  const [displayedData, setDisplayedData] = useState(initialSlice);
  const [isShowingMore, setIsShowingMore] = useState(false);
  // console.log(displayedData);

  const handleShowMore = () => {
    if (isShowingMore) {
      setDisplayedData(initialSlice);
      setIsShowingMore(false);
    } else {
      setDisplayedData(PlacementSupportInfo);
      setIsShowingMore(true);
    }
  };


  const syllabusTitle = (variant) => {
    switch (variant) {
      case "MachineLearning":
        return "Machine Learning";
      case "DataScience":
        return "Full Data Science";
      case "DataAnalyst":
        return "Full Data Analyst";
      case "FinancialAnalyst":
        return "Financial Analyst";
      case "DigitalMarketing":
        return "Digital Marketing";
      case "UI/UX":
        return "UI/UX Design";
      case "BusinessAnalyst":
        return "Business Analyst";
      case "FrontendDevelopment":
        return "Frontend Development";
      case "BackendDevelopment":
        return "Backend Development";
      case "GraphicDesign":
        return "Graphic Design";
      case "WebDev":
        return "Full Stack Web Development"
      default:
        return "Data Analyst";
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="px-2 md:px-6 flex flex-col justify-center w-full gap-4"
    >
      {/* <h3
        data-aos="zoom-in"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-lg md:text-3xl font-bold text-content text-center md:mb-4">
        Placement Support
      </h3>
     
      <p
        data-aos="zoom-in"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-center text-xs md:text-sm text-content-secondary hidden md:block">
        Clear the cut-off marks in your graduation project to get access to jobs
        at our <br /> partner companies
      </p> */}
      {/* <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
          Placement Support
        </h2>
        <p className="text-lg text-content-secondary max-w-4xl mx-auto leading-relaxed">
          Clear the cut-off marks in your graduation project to get access to
          jobs at our <br /> partner companies
        </p>
      </div> */}
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
          {/* {`${syllabusTitle(varient)}`} Course  Placement Support  */}
          Placement Support
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          Clear the cut-off marks in your graduation project to get access to
          jobs at our partner companies
        </p>
      </div>
      <PlacementSupportCardsSwiper darkMode={darkMode} />
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[10px] md:gap-8 mt-12 w-full hidden"
      >
        <div
          className={`flex flex-col items-center card bg-gradient-to-br from-brand to-brand-active transform hover:scale-105 transition-all duration-500 rounded-xl shadow-lg hover:shadow-xl p-8`}
        >
          <img
            src={Placement1}
            alt="Job portal"
            className="w-14 h-14 md:w-24 md:h-auto absolute -top-10 md:-top-12 lg:-top-10 hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="mt-2 text-xs md:text-xl text-brand-fg font-semibold">
              Job portal
            </p>
            <p className="mt-2 text-[10px] md:text-sm  text-brand-fg">
              Find your dream job with our expert- <br />
              curated job portal.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col items-center text-center bg-gradient-to-br from-brand to-brand-active transform hover:scale-105 transition-all duration-500 shadow-sm rounded-lg  h-24 md:h-full md:min-h-52 relative `}
        >
          <img
            src={Placement2}
            alt="Resume Reviews"
            className="w-16 h-16 md:w-32 md:h-auto absolute -top-10 md:-top-12 lg:-top-14 hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="mt-2  text-xs md:text-xl text-brand-fg font-semibold">
              Resume Reviews
            </p>
            <p className="mt-2 text-[10px] md:text-sm text-brand-fg px-3">
              Get professional resume reviews to stand <br /> out and land your
              dream job!
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col mt-8 md:mt-0 items-center text-center bg-gradient-to-br from-brand to-brand-active transform hover:scale-105 transition-all duration-500 shadow-sm rounded-lg  h-24 md:h-full md:min-h-52 relative col-span-2 md:col-span-2 lg:col-span-1`}
        >
          <img
            src={Placement3}
            alt="Interview with Hiring Partners"
            className="w-16 h-16 md:w-32 md:h-auto absolute -top-11 md:-top-20 lg:-top-20 hover:scale-110 transition-all duration-300 ease-in-out "
          />
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="mt-2 text-xs md:text-xl text-brand-fg font-semibold">
              Interview with Hiring Partners
            </p>
            <p className="mt-2 text-[10px] md:text-sm text-brand-fg">
              Connect with hiring partners for exclusive <br /> interviews and
              job opportunities.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        // data-aos-delay="100"
        className="mt-12 hidden"
      >
        {/* <h4 className="text-xl text-content font-semibold mb-6">
          Our Hiring Partners
        </h4> */}

        {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
            Our Hiring Partners
          </h2>
        </div> */}

        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
            Our Hiring Partners
          </h2>
          {/* <p className="text-lg text-content-secondary max-w-2xl mx-auto">
              Our structured 8-step process ensures your project is delivered.
            </p> */}
        </div>
        <div
          data-aos="fade-up"
          // data-aos-delay="100"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto"
        >
          {displayedData.map((item, index) => (
            <div
              data-aos="fade-up"
              // data-aos-delay="100"
              key={index}
              className="flex flex-col items-center"
            >
              <div
                data-aos="fade-up"
                // data-aos-delay="100"
                className="bg-surface border border-line shadow-sm rounded-card p-6 mb-2 flex flex-col items-center w-full h-full hover:bg-surface-sunken transition duration-300 ease-in-out cursor-pointer"
              >
                <div
                  data-aos="fade-up"
                  // data-aos-delay="100"
                  className="flex flex-col items-center"
                >
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="w-36 h-36 object-contain mb-2 hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                  <p className=" text-xs text-content-secondary">{item.name}</p>
                </div>
                {/* <div className="flex flex-wrap justify-center ">
                  {item?.employees?.map((employee, empIndex) => (
                    <div
                      key={empIndex}
                      className="flex flex-col items-center -ml-3"
                    >
                      <img
                        src={employee?.image}
                        alt="Employee"
                        className="w-10 h-10 rounded-full border-2 border-primary object-cover bg-center "
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        data-aos="fade-up"
        // data-aos-delay="100"
        className="flex items-center justify-center"
      >
        {/* <button
          className="hover:bg-brand hidden  dark:hover:bg-surface-sunken hover:text-brand-fg text-content dark:text-brand-fg dark:bg-transparent dark:hover:text-content border-2 border-line-strong px-4  py-3 md:flex items-center font-bold w-fit justify-center rounded-md text-sm transition-all duration-300"
          onClick={handleShowMore}
        >
          {isShowingMore ? "Show Less" : "Show More"}{" "}
        </button> */}
      </div>
    </div>
  );
};

export default PlacementSupport;