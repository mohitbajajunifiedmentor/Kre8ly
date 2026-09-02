import React from "react";
import { IoIosPricetags } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { Link } from "@/lib/router-compat";

const SingleCard = ({ Course, varient, swiperColor, index, showcarousel }) => {
  return (
    <div
      className="mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row"
      style={{ width: "100%", maxWidth: 420, height: "auto" }}
    >
      {/* Image Section */}
      <div
        className="relative flex-shrink-0 w-full h-auto md:w-40 md:h-full"
        style={{ minWidth: undefined, maxWidth: undefined, height: undefined }}
      >
        <img
          className="w-full h-auto object-cover object-center md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl md:h-[220px] md:w-[160px]"
          src={Course.image}
          alt={Course?.title || "Course Image"}
          style={{}}
        />
        {Course?.live && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
            LIVE
          </span>
        )}
      </div>
      {/* Content Section */}
      <div className="flex flex-col p-5 text-left" style={{ height: "220px" }}>
        <div className="flex-1">
          <h5 className="mb-2 text-lg font-bold text-gray-900 text-left">
            {Course?.title?.length > 27
              ? Course?.title?.slice(0, 27) + "..."
              : Course?.title}
          </h5>
          {Course?.live ? (
            <>
              <div className="flex items-center text-content mb-2 justify-start">
                <SlCalender className="mr-2" color={"#354B73"} size={18} />
                <p className="text-xs text-content font-medium text-left">
                  {Course.batch}
                </p>
              </div>
              <div className="flex items-center mb-2 justify-start">
                <IoIosPricetags className="mr-2" color={"#354B73"} size={18} />
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded-full text-left">
                  {varient === "course"
                    ? Course?.title === "Digital Marketing Mastery"
                      ? "Pricing starts at ₹14,999/-"
                      : "Pricing starts at ₹4,499/-"
                    : varient === "fellowship"
                    ? "Pricing starts at ₹399/-"
                    : "Pricing N/A"}
                </span>
              </div>
            </>
          ) : (
            <p className="text-xs text-content dark:text-gray-300 font-medium line-clamp-3 mb-2 text-left">
              {Course.extraInfo}
            </p>
          )}
        </div>
        <Link to={Course.link} className="w-full mt-4 md:mt-auto">
          <button
            className={`w-full px-4 py-2.5 bg-gradient-to-r from-[#1D2B45] to-[#354B73] text-white font-bold text-sm rounded-lg shadow-md transition-all duration-300 hover:from-[#354B73] hover:to-[#1D2B45] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D2B45] disabled:opacity-60 disabled:cursor-not-allowed ${
              !Course?.live && "cursor-not-allowed opacity-60"
            }`}
            disabled={!Course?.live}
          >
            {Course?.live
              ? varient === "course"
                ? "Course Details"
                : varient === "fellowship"
                ? "Join Fellowship Now"
                : "Explore"
              : "Coming Soon"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
