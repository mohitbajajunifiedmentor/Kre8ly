import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
// const MainImage = "/assets/fellowship/FullStack/Main.png";
const TechStack = ({ TechStacksArray, MainImage, swiperColor }) => {
  const [slicedArray, setSlicedArray] = useState([]);
  const [isShowing, setIsShowing] = useState(false);

  const allData = TechStacksArray?.all;

  useEffect(() => {
    if (allData?.length) {
      setSlicedArray(allData.slice(0, 6));
    }
  }, [allData]);

  const handleShowAll = () => {
    // if (!isShowing.length) return;
    // console.log(isShowing);

    if (isShowing === false) {
      setIsShowing(true);
      setSlicedArray(allData);
    } else {
      setIsShowing(false);
      setSlicedArray(allData?.slice(0, 6));
    }
  };

  // console.log(slicedArray);

  return (
    <div className="w-full h-full flex justify-between items-center flex-col md:flex-row gap-10 sm:gap-5 md:gap-0">
      <div className="hidden md:block  md:w-[25%] h-full">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="800"
          className="w-full h-full flex justify-center items-center gap-16 flex-col">
          {TechStacksArray?.left.map((item, i) => (
            <TechCards
              key={i}
              i={i}
              Title={item?.title}
              Icon={item?.icon}
              Icon_alt={item?.icon_alt}
              Description={item?.description}
              varient={"left"}
              swiperColor={swiperColor}
            />
          ))}
        </div>
      </div>
      <div className=" hidden md:flex w-[50%] h-full  justify-center items-center gap-10 flex-col">
        <img
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="800"
          src={MainImage} alt="Icon" className="w-[80%] mx-auto" />

        <div
          data-aos="zoom-in"
          // data-aos-delay="700"
          // data-aos-duration="1500"
          className=" w-1/2 h-full mx-auto">
          {TechStacksArray?.center?.length > 0
            ? TechStacksArray?.center?.map((item, i) => (
              <TechCards
                key={i}
                i={i}
                Title={item?.title}
                Icon={item?.icon}
                Icon_alt={item?.icon_alt}
                Description={item?.description}
                varient={"left"}
                swiperColor={swiperColor}
              />
            ))
            : null}
        </div>
      </div>
      <div className=" hidden md:block  md:w-[25%] h-full">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="800"
          className="w-full h-full flex justify-center items-center gap-16 flex-col">
          {TechStacksArray?.right.map((item, i) => (
            <TechCards
              key={i}
              i={i}
              Title={item?.title}
              Icon={item?.icon}
              Icon_alt={item?.icon_alt}
              Description={item?.description}
              varient={"right"}
              swiperColor={swiperColor}
            />
          ))}
        </div>
      </div>

      <div className=" block  md:hidden  w-full h-full">
        <div className="w-full h-full flex justify-center items-center gap-5 flex-col">
          {slicedArray?.map((item, i) => (
            <TechCards
              key={i}
              i={i}
              Title={item?.title}
              Icon={item?.icon}
              Icon_alt={item?.icon_alt}
              Description={item?.description}
              varient={"left"}
              swiperColor={swiperColor}
            />
          ))}
        </div>
      </div>

      {slicedArray.length > 5 && (
        <div className=" block md:hidden">
          <button
            onClick={handleShowAll}
            className="flex items-center gap-2 text-sm text-content  rounded-md px-5 py-2 "
          >
            {isShowing ? "Show Less" : "Show All"}{" "}
            <FaCaretDown
              className={`text-content text-lg  ${isShowing ? "rotate-180" : ""
                } transition-all duration-300`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

const TechCards = ({ i, Icon, Title, Icon_alt, Description, varient, swiperColor }) => {
  // console.log("SwiperColor =======>", key);

  return (
    <div className="w-full h-full flex justify-between items-center md:items-end flex-col group mb-3">
      <div
        className={`w-full h-full flex justify-between items-center relative z-20 ${varient === "left" ? "flex-row" : "flex-row-reverse"
          }`}
      >
        <div className="w-fit h-full flex items-center justify-center">
          <div className="w-20 h-20 border-4 text-content border-line-strong rounded-full flex items-center justify-center relative z-10">
            <div className="dark:bg-white bg-brand w-[85%] h-[85%] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={Icon}
                alt={Icon_alt}
                className="md:w-[70%] md:h-[70%] object-contain"
              />
            </div>
          </div>
        </div>

        <div
          className={`w-full h-full flex items-center justify-center ${varient === "left" ? "-ml-10" : "-mr-10"
            }`}
        >
          <div
            className={`w-full min-h-16 flex justify-between items-center shadow-[0_0_10px_rgba(0,0,0,0.2)] shadow-black/20 rounded-full border-2 border-white 
            ${varient === "left"
                ? "px-10 pl-16 flex-row"
                : "px-10 pr-16 flex-row-reverse"
              } `}
          >
            <div className="text-content font-semibold text-xs md:text-sm">
              {Title}
            </div>
            <div className="text-content">
              <FaCaretDown
                size={20}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-[80%] sm:w-[85%] md:w-[78%] h-0 text-sm border-l-2 border-r-2 border-b-2 border-line-strong rounded-br-md rounded-bl-md -mt-2.5 relative z-0 overflow-hidden transition-all duration-700 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:p-2 ${varient === "left" ? "ml-10 md:mr-0 lg:mr-5" : "mr-14"
          }`}
      >
        <p className="text-content">{Description}</p>
      </div>
    </div>
  );
};

export default TechStack;
