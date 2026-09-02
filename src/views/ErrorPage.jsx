import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Group1 = "/assets/PageNotFound/Group1.png";
const Group2 = "/assets/PageNotFound/Group2.png";
const Group3 = "/assets/PageNotFound/Group3.png";
const Group4 = "/assets/PageNotFound/Group4.png";
// const Gif = "/assets/PageNotFound/404.gif";
import { Link } from "@/lib/router-compat";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen">
      <main className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 overflow-hidden h-screen container mx-auto">
        <div className="relative w-full md:w-1/2 h-full  justify-center items-center hidden">
          {/* <div className="w-40 md:w-96 h-64 md:h-[50rem] overflow-hidden">
            <img src={Gif} alt="404 Error" className="w-full h-auto" />
          </div> */}
          <div className="absolute bottom-0 left-0 w-40 hidden lg:block">
            <img
              src={Group1}
              alt="Decorative element"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-0 left-0 w-40 hidden lg:block">
            <img
              src={Group2}
              alt="Decorative element"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-full flex justify-center items-center">
          <div className="absolute top-0 right-0 w-40 hidden lg:block ">
            <img
              src={Group3}
              alt="Decorative element"
              className="w-full h-auto"
            />
          </div>
          <CenterText />
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;

const CenterText = () => {
  return (
    <div className="text-center md:text-left w-full px-4 md:px-0">
      <div className="flex flex-col items-center md:items-start justify-center">
        <div className="mb-8 w-full max-w-xs md:max-w-sm lg:max-w-md">
          <img src={Group4} alt="404 Text" className="w-full h-auto" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-[#FF647C]">
          Page Not Found
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mb-8 text-primary">
          Oh No! We lost this page
        </p>
        <Link
          to="/"
          className="bg-white text-content px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};
