import React, { useEffect, useState } from "react";
const photo1 = "/assets/KYCCollegesWorkshops/photo1.png";
const photo2 = "/assets/KYCCollegesWorkshops/photo2.png";
const vaishMahila = "/assets/KYCCollegesWorkshops/vaishMahila.jpg";
const photo3 = "/assets/KYCCollegesWorkshops/photo3.png";
const photo4 = "/assets/KYCCollegesWorkshops/photo4.png";
const photo5 = "/assets/KYCCollegesWorkshops/photo5.png";
const photo6 = "/assets/KYCCollegesWorkshops/photo6.png";
const photo7 = "/assets/KYCCollegesWorkshops/photo7.png";
const photo8 = "/assets/KYCCollegesWorkshops/photo8.png";
const silider3 = "/assets/KYCCollegesWorkshops/silider3.jpeg";
const MIMIT = "/assets/KYCCollegesWorkshops/MIMIT.jpeg";
const Hansi = "/assets/KYCCollegesWorkshops/Hansi.jpeg";
const JCDV = "/assets/KYCCollegesWorkshops/JCDV.jpeg";
const sakshimallikcollege = "/assets/KYCCollegesWorkshops/sakshimallikcollege.jpeg";
const GCRithoj = "/assets/KYCCollegesWorkshops/GCRithoj.jpeg";

const Logo = "/assets/KYCCollegesWorkshops/Logo.png";
const HeroImage = "/assets/KYCCollegesWorkshops/HeroImage.jpeg";
const GNIOTLogo = "/assets/KYCCollegesWorkshops/GNIOTLogo.webp";
const MIMILOGO = "/assets/KYCCollegesWorkshops/MIMILOGO.jpg";
const VMMCollageLogo = "/assets/KYCCollegesWorkshops/VMMCollageLogo.png";
const sakshimallikcollegeLogo = "/assets/KYCCollegesWorkshops/sakshimallikcollegeLogo.jpg";
const vaishMahilaLogo = "/assets/KYCCollegesWorkshops/vaishMahilaLogo.jpg";
const GCRithojLogo = "/assets/KYCCollegesWorkshops/GCRithojLogo.jpg";

const JCDVLOGO = "/assets/KYCCollegesWorkshops/JCDVLOGO.jpg";
const hansiLogo = "/assets/KYCCollegesWorkshops/hansiLogo.png";

import Query from "../../component/Query/Query";
import Footer from "../../component/Footer";
import FloatingEnrollBar from "../../component/FloatingEnrollBar";
import MobileFooter from "../../component/MobileFooter";
import {
      CourseName,
      DataAnalystHomeInfo,
      DataAnalystRoadMaps,
      roadmapSteps
} from "../../Utils/DataAnalyst/DataAnalystHomeInfo";
import ChatBot from "@/component/ChatBot/ChatBot";

// Sample data for colleges
const colleges1 = [
      {
            id: 1,
            logo: GNIOTLogo,
            collageName: "Greater Noida Institute of Technology",
            city: "Greater Noida",
            img: photo1,
      },
      {
            id: 2,
            logo: vaishMahilaLogo,
            collageName: "Vaish Mahila Mahavidyalaya",
            city: "Rohtak",
            img: vaishMahila,
      },
      {
            id: 3,
            logo: GCRithojLogo,
            collageName: "Govt College Rithoj",
            city: "Haryana",
            img: GCRithoj,
      },
      {
            id: 4,
            logo: MIMILOGO,
            collageName: "Malout Institute of Management and Information Technology",
            city: "Punjab",
            img: MIMIT,
      },
      {
            id: 5,
            logo: hansiLogo,
            collageName: "Government College Hansi",
            city: "Hansi",
            img: Hansi,
      },
      {
            id: 6,
            logo: JCDVLOGO,
            collageName: "Jan Nayak Chaudhary Devi Lal Memorial College of Engineering",
            city: "Sirsa",
            img: JCDV,
      },
      {
            id: 7,
            logo: sakshimallikcollegeLogo,
            collageName: "Sakshi Malik Government College",
            city: "Rohtak",
            img: sakshimallikcollege,
      }
];
const collages2 = [
      {
            id: 1,
            img: photo4,
      },
      {
            id: 2,
            img: photo5,
      },
      {
            id: 3,
            img: photo6,
      },
      {
            id: 4,
            img: photo7,
      },
      {
            id: 5,
            img: photo8,
      },

]


const slides = [
      {
            id: 1,
            image: HeroImage,
            title: "KYC Colleges Workshops",
            collageName: "Vaish mahila mahavidyalay College",
            cityName: "Rohtak"
      },
      {
            id: 2,
            image:
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
            title: "College Projects & Events",
            collageName: "",
            cityName: ""
      },
      {
            id: 3,
            image: silider3,
            title: "Seminars & Tech Talks",
            collageName: "",
            cityName: ""
      },
];

const CollegeProjects = ({ darkMode, setDarkMode, location }) => {
      const [current, setCurrent] = useState(0);
      const [visibleCount, setVisibleCount] = useState(6);

      const handleSeeMore = () => {
            setVisibleCount((prev) => prev + 3);
      };

      // Auto Slide
      useEffect(() => {
            const interval = setInterval(() => {
                  setCurrent((prev) => (prev + 1) % slides.length);
            }, 4000);

            return () => clearInterval(interval);
      }, []);
      return (
            <>
                  <section>
                        <div className="relative w-full h-[500px] overflow-hidden">
                              {slides.map((slide, index) => (
                                    <div
                                          key={slide.id}
                                          className={`absolute w-full h-full transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                                                }`}
                                    >
                                          <div className="absolute top-10 left-4 max-w-xl font-Poppins text-[#FFFFFF] font-medium text-sm z-40">
                                                {slide.collageName} <br /> {slide.cityName}
                                          </div>
                                          {/* Background Image */}
                                          <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full h-full object-cover"
                                          />

                                          {/* 🔥 Custom Gradient Overlay */}
                                          <div
                                                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                                                style={{
                                                      background:
                                                            "linear-gradient(168.25deg, #000000 -16.03%, #4A4A4A 20.5%, #1D2B45 57.04%)",
                                                      mixBlendMode: "hard-light",
                                                }}
                                          >
                                                {/* Logo */}
                                                <div className="w-16 h-16 flex items-center justify-center mb-6">
                                                      <img src={Logo} alt="Logo" />
                                                </div>

                                                {/* Title */}
                                                <h1 className="text-white text-3xl md:text-[42px] font-medium font-Poppins">
                                                      {slide.title}
                                                </h1>
                                          </div>
                                    </div>
                              ))}

                              {/* Slider Dots */}
                              <div className="absolute bottom-6 w-full flex justify-center gap-3">
                                    {slides.map((_, index) => (
                                          <button
                                                key={index}
                                                onClick={() => setCurrent(index)}
                                                className={`h-1 w-10 rounded-full transition-all duration-300 ${index === current ? "bg-blue-500" : "bg-gray-300"
                                                      }`}
                                          ></button>
                                    ))}
                              </div>
                        </div>

                  </section>

                  <section className="py-20 px-6 md:px-16 bg-white">
                        {/* Heading */}
                        <div className="text-center mb-12">
                              <h2 className=" font-Poppins text-3xl 
                              text-[#111827] md:text-[40px] md:leading-10 font-semibold mb-4">
                                    Industries Offering <span className="text-[#334C79]">Projects</span>
                              </h2>
                              <p className="text-[#4A4A4A] font-medium text-lg max-w-2xl mx-auto">
                                    Explore the diverse range of industries that provide placement opportunities for our students.
                              </p>
                        </div>

                        {/* College Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                              {colleges1.slice(0, visibleCount).map((college) => (
                                    <div
                                          key={college.id}
                                          className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                    >
                                          <img
                                                src={college.img}
                                                alt={college.collageName}
                                                className="h-[323px] w-full object-cover rounded-lg"
                                          />

                                          <div
                                                className="absolute inset-0"
                                                style={{
                                                      background:
                                                            "linear-gradient(177.64deg, rgba(0, 0, 0, 0) 10%, rgba(10, 21, 39, 0.8) 80%)",
                                                }}
                                          />

                                          <div className="absolute top-4 -left-3 bg-gray-100 px-4 py-1 rounded-md shadow text-sm font-medium z-40">
                                                {college.city}
                                          </div>

                                          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg flex items-center gap-3 px-3 py-1 z-40">
                                                <img
                                                      src={college.logo}
                                                      alt="logo"
                                                      className="w-8 h-8 object-contain"
                                                />
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                      {college.collageName}
                                                </h3>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {visibleCount < colleges1.length && (
                              <div className="flex justify-center mt-10">
                                    <button
                                          onClick={handleSeeMore}
                                          className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-sky-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                          See More Colleges
                                    </button>
                              </div>
                        )}



                  </section>

                  <section className="py-16 px-6 md:px-16 bg-white">
                        {/* Heading */}
                        <div className="text-center mb-12">
                              <h2 className=" font-Poppins text-3xl 
                              text-[#111827] md:text-[40px] md:leading-10 font-semibold mb-4">
                                    Colleges Workshop Gallery
                              </h2>
                              <p className="text-[#4A4A4A] font-medium text-lg max-w-2xl mx-auto">
                                    Explore the diverse range of industries that provide placement opportunities for our students.
                              </p>
                        </div>

                        {/* College Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                              {/* Left Big Image */}
                              <div className="md:row-span-2">
                                    <img
                                          src={collages2[0].img}
                                          alt="Main"
                                          className="w-full h-full object-cover rounded-xl shadow-lg"
                                    />
                              </div>

                              {/* Right Side Images */}
                              {collages2.slice(1, 5).map((college) => (
                                    <div key={college.id}>
                                          <img
                                                src={college.img}
                                                alt={college.name}
                                                className="w-[933px] h-[272px] object-cover rounded-xl shadow-lg"
                                          />
                                    </div>
                              ))}

                        </div>

                  </section>



                  <section className="bg-[#F9F8F5] mt-10 py-10 px-6 rounded-lg">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                              {/* Text */}
                              <div>
                                    <h2 className="text-3xl font-bold text-[#000000]">
                                          Subscribe To Our News letter
                                    </h2>
                                    <p className="mt-2 text-[#676767]
                                    font-normal 
                                    text-sm max-w-xl">
                                          Sign up today! Writing copy is time-consuming and difficult.
                                          Headline’s artificial intelligence can take your thoughts.
                                    </p>
                              </div>

                              {/* Button */}
                              <button className="bg-[#161D30] text-white px-6 py-3 rounded-full font-semibold text-[16px] hover:bg-[#020617] transition">
                                    Subscribe Now
                              </button>

                        </div>
                  </section>

                  <Query />
                  <ChatBot darkMode={darkMode} />
                  <Footer darkMode={darkMode} />
                  <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
            </>
      );
};

export default CollegeProjects;
