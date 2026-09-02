import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { Link } from "@/lib/router-compat";
import { IoIosPricetags } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import {
  FaCode,
  FaPalette,
  FaShieldAlt,
  FaChartLine,
  FaTools,
  FaDatabase,
  FaBrain,
  FaUsers,
  FaFont,
  FaPaintBrush,
  FaLink,
  FaGlobe,
} from "react-icons/fa";
import {
  SiJupyter,
  SiPandas,
  SiNumpy,
  // SiMatplotlib,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  // SiNlp,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiCanva,
  SiWireshark,
  SiMetasploit,
  // SiNmap,
  // SiKali,
  SiSolidity,
  SiWeb3Dotjs,
  // SiTruffle,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiSketch,
  SiAdobe,
  SiGoogleads,
  SiFacebook,
  // SiSeo,
  SiGoogleanalytics,
  SiInstagram,
  SiGmail,
  SiEthereum,
} from "react-icons/si";

const Cards = ({ Course, varient, swiperColor, index, showcarousel }) => {
  // Function to get tag color based on tag type
  const getTagColor = (tag) => {
    switch (tag) {
      case "Most Popular":
        return "bg-red-500 text-white";
      case "Most Demanded":
        return "bg-yellow-500 text-white";
      case "Trending":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  // Function to get specific icon for each tool/technology
  const getToolIcon = (tool) => {
    const toolLower = tool.toLowerCase();

    // Web Development
    if (toolLower.includes("html")) return <SiHtml5 className="text-xs" />;
    if (toolLower.includes("css")) return <SiCss3 className="text-xs" />;
    if (toolLower.includes("javascript") || toolLower.includes("js"))
      return <SiJavascript className="text-xs" />;
    if (toolLower.includes("react")) return <SiReact className="text-xs" />;
    if (toolLower.includes("node")) return <SiNodedotjs className="text-xs" />;
    if (toolLower.includes("mongo")) return <SiMongodb className="text-xs" />;

    // Data Science & ML
    if (toolLower.includes("python")) return <SiPython className="text-xs" />;
    if (toolLower.includes("pandas")) return <SiPandas className="text-xs" />;
    if (toolLower.includes("numpy")) return <SiNumpy className="text-xs" />;
    if (toolLower.includes("matplotlib"))
      if (toolLower.includes("jupyter"))
        // if (toolLower.includes("scikit"))
        //   // return <SiMatplotlib className="text-xs" />;
        //   return <SiScikitlearn className="text-xs" />;
        return <SiJupyter className="text-xs" />;
    if (toolLower.includes("tensorflow"))
      return <SiTensorflow className="text-xs" />;
    if (toolLower.includes("pytorch")) return <SiPytorch className="text-xs" />;
    if (toolLower.includes("opencv")) return <SiOpencv className="text-xs" />;
    // if (toolLower.includes("nlp")) return <SiNlp className="text-xs" />;

    // Design Tools
    if (toolLower.includes("figma")) return <SiFigma className="text-xs" />;
    if (toolLower.includes("sketch")) return <SiSketch className="text-xs" />;
    if (toolLower.includes("adobe")) return <SiAdobe className="text-xs" />;
    if (toolLower.includes("photoshop"))
      return <SiAdobephotoshop className="text-xs" />;
    if (toolLower.includes("illustrator"))
      return <SiAdobeillustrator className="text-xs" />;
    if (toolLower.includes("indesign"))
      return <SiAdobeindesign className="text-xs" />;
    if (toolLower.includes("canva")) return <SiCanva className="text-xs" />;

    // Marketing & Analytics
    if (toolLower.includes("google ads") || toolLower.includes("ads"))
      return <SiGoogleads className="text-xs" />;
    if (toolLower.includes("facebook"))
      return <SiFacebook className="text-xs" />;
    // if (toolLower.includes('seo')) return <SiSeo className="text-xs" />;
    if (toolLower.includes("analytics"))
      return <SiGoogleanalytics className="text-xs" />;
    if (toolLower.includes("email marketing") || toolLower.includes("email"))
      return <SiGmail className="text-xs" />;
    if (toolLower.includes("social media") || toolLower.includes("social"))
      return <SiInstagram className="text-xs" />;

    // Security Tools
    if (toolLower.includes("wireshark"))
      return <SiWireshark className="text-xs" />;
    if (toolLower.includes("metasploit"))
      return <SiMetasploit className="text-xs" />;
    // if (toolLower.includes('nmap')) return <SiNmap className="text-xs" />;
    if (toolLower.includes("kali")) return <SiKali className="text-xs" />;
    if (toolLower.includes("ethical hacking") || toolLower.includes("hacking"))
      return <FaShieldAlt className="text-xs" />;

    // Blockchain
    if (toolLower.includes("solidity"))
      return <SiSolidity className="text-xs" />;
    if (toolLower.includes("ethereum"))
      return <SiEthereum className="text-xs" />;
    if (toolLower.includes("web3")) return <SiWeb3Dotjs className="text-xs" />;
    // if (toolLower.includes('truffle')) return <SiTruffle className="text-xs" />;
    if (
      toolLower.includes("smart contracts") ||
      toolLower.includes("contracts")
    )
      return <FaLink className="text-xs" />;
    if (toolLower.includes("dapps") || toolLower.includes("dapp"))
      return <FaGlobe className="text-xs" />;

    // Generic categories for remaining tools
    if (
      toolLower.includes("prototyping") ||
      toolLower.includes("user research") ||
      toolLower.includes("research")
    )
      return <FaUsers className="text-xs" />;
    if (toolLower.includes("typography") || toolLower.includes("font"))
      return <FaFont className="text-xs" />;
    if (toolLower.includes("branding") || toolLower.includes("brand"))
      return <FaPaintBrush className="text-xs" />;
    if (toolLower.includes("design")) return <FaPalette className="text-xs" />;
    if (toolLower.includes("development") || toolLower.includes("code"))
      return <FaCode className="text-xs" />;
    if (toolLower.includes("marketing"))
      return <FaChartLine className="text-xs" />;
    if (toolLower.includes("security"))
      return <FaShieldAlt className="text-xs" />;
    if (toolLower.includes("machine learning") || toolLower.includes("ml"))
      return <FaBrain className="text-xs" />;
    if (toolLower.includes("data")) return <FaDatabase className="text-xs" />;

    // Default fallback
    return <FaTools className="text-xs" />;
  };

  // Function to get background color for each tool/technology
  const getToolBgColor = (tool) => {
    const toolLower = tool.toLowerCase();

    // Web Development
    if (toolLower.includes("html")) return "bg-orange-200 text-black";
    if (toolLower.includes("css")) return "bg-sky-200 text-black";
    if (toolLower.includes("javascript") || toolLower.includes("js"))
      return "bg-yellow-200 text-black";
    if (toolLower.includes("react")) return "bg-sky-200 text-black";
    if (toolLower.includes("node")) return "bg-green-200 text-black";
    if (toolLower.includes("mongo")) return "bg-green-200 text-black";

    // Data Science & ML
    if (toolLower.includes("python")) return "bg-sky-200 text-black";
    if (toolLower.includes("pandas")) return "bg-fuchsia-200 text-black";
    if (toolLower.includes("numpy")) return "bg-sky-200 text-black";
    if (toolLower.includes("matplotlib")) return "bg-orange-200 text-black";
    if (toolLower.includes("jupyter")) return "bg-gray-200 text-black";
    if (toolLower.includes("tensorflow")) return "bg-orange-200 text-black";
    if (toolLower.includes("pytorch")) return "bg-red-200 text-black";
    if (toolLower.includes("opencv")) return "bg-sky-200 text-black";

    // Design Tools
    if (toolLower.includes("figma")) return "bg-fuchsia-200 text-black";
    if (toolLower.includes("sketch")) return "bg-yellow-200 text-black";
    if (toolLower.includes("adobe")) return "bg-red-200 text-black";
    if (toolLower.includes("photoshop")) return "bg-sky-200 text-black";
    if (toolLower.includes("illustrator")) return "bg-orange-200 text-black";
    if (toolLower.includes("indesign")) return "bg-pink-200 text-black";
    if (toolLower.includes("canva")) return "bg-sky-200 text-black";

    // Marketing & Analytics
    if (toolLower.includes("google ads") || toolLower.includes("ads"))
      return "bg-sky-200 text-black";
    if (toolLower.includes("facebook")) return "bg-sky-200 text-black";
    if (toolLower.includes("seo")) return "bg-green-200 text-black";
    if (toolLower.includes("analytics")) return "bg-orange-200 text-black";
    if (toolLower.includes("email marketing") || toolLower.includes("email"))
      return "bg-red-200 text-black";
    if (toolLower.includes("social media") || toolLower.includes("social"))
      return "bg-pink-200 text-black";

    // Security Tools
    if (toolLower.includes("wireshark")) return "bg-sky-200 text-black";
    if (toolLower.includes("metasploit")) return "bg-red-200 text-black";
    if (toolLower.includes("nmap")) return "bg-gray-200 text-black";
    if (toolLower.includes("kali")) return "bg-sky-200 text-black";
    if (toolLower.includes("ethical hacking") || toolLower.includes("hacking"))
      return "bg-red-200 text-black";

    // Blockchain
    if (toolLower.includes("solidity")) return "bg-gray-200 text-black";
    if (toolLower.includes("ethereum")) return "bg-fuchsia-200 text-black";
    if (toolLower.includes("web3")) return "bg-orange-200 text-black";
    if (toolLower.includes("truffle")) return "bg-red-200 text-black";
    if (
      toolLower.includes("smart contracts") ||
      toolLower.includes("contracts")
    )
      return "bg-green-200 text-black";
    if (toolLower.includes("dapps") || toolLower.includes("dapp"))
      return "bg-sky-200 text-black";

    // Generic categories
    if (
      toolLower.includes("prototyping") ||
      toolLower.includes("user research") ||
      toolLower.includes("research")
    )
      return "bg-fuchsia-200 text-black";
    if (toolLower.includes("typography") || toolLower.includes("font"))
      return "bg-gray-200 text-black";
    if (toolLower.includes("branding") || toolLower.includes("brand"))
      return "bg-pink-200 text-black";
    if (toolLower.includes("design")) return "bg-fuchsia-200 text-black";
    if (toolLower.includes("development") || toolLower.includes("code"))
      return "bg-gray-200 text-black";
    if (toolLower.includes("marketing")) return "bg-sky-200 text-black";
    if (toolLower.includes("security")) return "bg-red-200 text-black";
    if (toolLower.includes("machine learning") || toolLower.includes("ml"))
      return "bg-orange-200 text-black";
    if (toolLower.includes("data")) return "bg-sky-200 text-black";

    // Default fallback
    return "bg-gray-200 text-black";
  };

  return (
    <div
      className={`w-full max-w-[20rem] mx-auto flex flex-col ${
        showcarousel ? "h-[24rem]" : "h-[22rem]"
      } bg-white shadow-xl rounded-2xl relative font-Poppins border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden`}
    >
      {!Course?.live && (
        <div className="absolute -top-1 -right-1 w-32 h-32 md:w-36 md:h-36 overflow-hidden">
          <div className="absolute -right-14 top-8 w-48 rotate-45 bg-brand py-2 text-center text-white shadow-md font-bold text-xs md:text-sm">
            Coming Soon
          </div>
        </div>
      )}

      {/* Tag Display */}
      {Course?.tag && (
        <div className="absolute top-2 right-4 z-10">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-bold ${getTagColor(
              Course.tag
            )} shadow-lg flex items-center gap-1.5 backdrop-blur-sm animate-pulse`}
          >
            <BsGraphUpArrow className="text-xs" />
            {Course.tag}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-grow p-8 text-left">
        <div className="flex-grow">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-content line-clamp-2 leading-tight">
            {Course?.title?.length > 12
              ? Course?.title?.slice(0, 27) + "..."
              : Course?.title}
          </h2>
          {Course?.live ? (
            <>
              <div className="flex items-center text-content mb-4">
                <SlCalender className="mr-3 text-content-muted" size={20} />
                <p className="text-xs md:text-sm text-content font-medium">
                  {Course.batch}
                </p>
              </div>
              <div className="flex items-center text-content mb-6">
                <IoIosPricetags className="mr-3 text-content-muted" size={20} />
                <p className="text-xs md:text-sm text-content font-medium">
                  {varient === "course"
                    ? Course?.title === "Digital Marketing Mastery"
                      ? "Pricing starts at ₹14,999/-"
                      : "Pricing starts at ₹4,499/-"
                    : varient === "fellowship"
                    ? "Pricing starts at"
                    : "Pricing info not available"}
                </p>
              </div>
            </>
          ) : (
            <p className="text-xs md:text-sm text-content font-medium line-clamp-3 mb-6 leading-relaxed">
              {Course.extraInfo}
            </p>
          )}
        </div>

        {/* Tools Section */}
        {Course?.tools && (
          <div className="mb-4">
            <p className="text-xs font-bold text-content mb-2 tracking-wide">
              Tools & Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {Course.tools.slice(0, 4).map((tool, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium rounded-lg shadow-sm ${getToolBgColor(
                    tool
                  )} transition-all duration-200 hover:scale-105`}
                >
                  {getToolIcon(tool)}
                  {tool}
                </span>
              ))}
              {Course.tools.length > 4 && (
                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-gray-100 text-content text-[10px] font-medium rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200">
                  +{Course.tools.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        <Link to={Course.link} className="w-full mt-auto">
          <button
            className={`w-full py-2.5 bg-gradient-to-r from-[#1D2B45] to-[#354B73] text-white font-bold text-xs md:text-sm rounded-lg transition-all duration-300 hover:from-[#354B73] hover:to-[#1D2B45] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
              !Course?.live && "cursor-not-allowed opacity-60"
            }`}
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

export default Cards;
