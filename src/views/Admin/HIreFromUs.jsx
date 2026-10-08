import React, { useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Query from "../component/Query/Query";
const HeroImage = "/assets/HireFromUs/HeroImage.png";
import Slider from "../component/Slider";
const Eclipse = "/assets/HireFromUs/Eclipse.png";
const Arrow = "/assets/HireFromUs/Arrow%201.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaBuilding, FaComments, FaLaptopCode } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaClipboardList, FaUserCheck, FaHandshake } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useCreateHiringDataMutation } from "../Redux-setup/api";
import { toast } from "react-toastify";
import { Helmet } from "@/lib/helmet-compat";
import { motion, useInView } from "framer-motion";
import MobileFooter from "../component/MobileFooter";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaComputer } from "react-icons/fa6";
import ChatBot from "@/component/ChatBot/ChatBot";

const HireFromUs = ({ darkMode, setDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    company: "",
    email: "",
    mobile: "",
    role: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    designation: "",
    company: "",
    email: "",
    mobile: "",
    role: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const [createHiringData, { isLoading }] = useCreateHiringDataMutation();

  const formRef = useRef(null); // create ref for the form section

  // Scroll to the form when the button is clicked
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Full Name: letters and spaces only
    if (!formData.name.trim()) {
      errors.name = "Full name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      errors.name = "Full name should contain only letters and spaces";
      isValid = false;
    }

    // Designation: not empty
    if (!formData.designation.trim()) {
      errors.designation = "Designation is required";
      isValid = false;
    }

    // Company: not empty
    if (!formData.company.trim()) {
      errors.company = "Company name is required";
      isValid = false;
    }

    // Email: valid format
    if (!formData.email.trim()) {
      errors.email = "Work email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Mobile: exactly 10 digits
    const cleanMobile = formData.mobile.replace(/^\+91|\D/g, "");
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
      isValid = false;
    } else if (
      !/^\+91\d{10}$/.test(formData.mobile.trim()) &&
      !/^\d{10}$/.test(cleanMobile)
    ) {
      errors.mobile = "Mobile number must be exactly 10 digits";
      isValid = false;
    }

    // Role: not empty
    if (!formData.role.trim()) {
      errors.role = "Role is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Transform formData to match backend expected field names
    const transformedData = {
      fullName: formData.name,
      designation: formData.designation,
      company: formData.company,
      workEmail: formData.email,
      mobileNumber: formData.mobile,
      roleLookingFor: formData.role,
    };

    try {
      await createHiringData(transformedData).unwrap();
      setSubmitStatus("success");
      toast.success("Form submitted successfully! We will reach out soon.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({
        name: "",
        designation: "",
        company: "",
        email: "",
        mobile: "",
        role: "",
      });
      setFormErrors({
        name: "",
        designation: "",
        company: "",
        email: "",
        mobile: "",
        role: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      const errorMessage =
        error?.data?.message || "Error submitting form. Please try again.";
      if (errorMessage === "A candidate with this email already exists") {
        setFormErrors((prev) => ({
          ...prev,
          email: errorMessage,
        }));
      }
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error("Submission error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const features = [
    {
      title: "Industry-Relevant Projects",
      icon: FaComputer,
    },
    {
      title: "Certification from Experts",
      icon: LiaCertificateSolid,
    },
    {
      title: "Soft Skills & Interview Prep",
      icon: FaComments,
    },
    {
      title: "Ready for Startups & Enterprises",
      icon: FaBuilding,
    },
  ];

  const cardData = [
    {
      id: 1,
      title: "Tell Us Your Hiring Needs",
      description: "Share the roles, skills, and duration you’re hiring for.",
      icon: FaClipboardList,
    },
    {
      id: 2,
      title: "Receive Pre-Vetted Profiles",
      description: "We handpick the best-fit candidates for your team.",
      icon: FaUserCheck,
    },
    {
      id: 3,
      title: "Interview & Select",
      description: "Conduct interviews at your convenience.",
      icon: FaComments,
    },
    {
      id: 4,
      title: "Hire with Confidence",
      description: "We support onboarding and check-ins post-hiring.",
      icon: FaHandshake,
    },
  ];

  const testimonials = [
    {
      rating: 5,
      testimonial:
        "Kre8ly saved us weeks of screening. Every candidate came prepared and professional.",
      name: "Lana Bernier",
      designation: "Senior Paradigm Strategist",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      rating: 5,
      testimonial:
        "The onboarding support was exceptional. We felt confident with every hire.",
      name: "Marcus Hayes",
      designation: "Talent Acquisition Lead",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      rating: 5,
      testimonial:
        "High-quality candidates and an effortless hiring process. Highly recommend Kre8ly.",
      name: "Priya Singh",
      designation: "HR Manager",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const marginTops = ["md:mt-8", "md:mt-20", "md:mt-0", "md:mt-20"];

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
    hero: useRef(null),
    company: useRef(null),
    why: useRef(null),
    hiringProcess: useRef(null),
    recutiers: useRef(null),
    hiringNeeds: useRef(null),
  };

  const isHeroInview = useInView(refs.hero, { once: true, margin: "-50px" });
  const isCompanyInView = useInView(refs.company, {
    once: true,
    margin: "-50px",
  });
  const isWhyInView = useInView(refs.why, { once: true, margin: "-50px" });
  const isHiringProcessInView = useInView(refs.hiringProcess, {
    once: true,
    margin: "-50px",
  });
  const isRecutiersInView = useInView(refs.recutiers, {
    once: true,
    margin: "-50px",
  });
  const isHiringNeedsInView = useInView(refs.hiringNeeds, {
    once: true,
    margin: "-50px",
  });

  const swiperColor = [
    "bg-[linear-gradient(100deg,_#ffffff_0%,_#d3e5f2_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#fedece_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#f7eab9_100%)]",
    "bg-[linear-gradient(180deg,_#ffffff_0%,_#ccc4f4_100%)]",
  ];

  return (
    <>
      <Helmet>
        <title> Hire Job-Ready Tech Talent | Kre8ly</title>
        <meta
          name="description"
          content="Connect with industry-trained, job-ready tech professionals from Kre8ly. Hire skilled candidates for data science, AI, and software roles today."
        />
        <meta
          name="keywords"
          content="hire interns, hire freshers, job-ready talent, tech interns, data science interns, digital marketing interns"
        />
        <meta name="author" content="Kre8ly" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.kre8ly.com/hire-from-us"
        />
      </Helmet>
      <div
        className={`${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        }  min-h-screen overflow-hidden `}
      >
        
        <main className="">
          {/* Hero Section */}
          <section
            id="hero"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-brand via-brand-active to-brand-hover px-4 sm:px-8 py-10 lg:py-20"
          >
            {/* Left side (text) */}
            <div className="w-full lg:w-1/2 text-brand-fg p-4 flex flex-col items-center md:items-start ">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 leading-tight sm:leading-snug">
                Your Future Team Is Here <br /> — Hire Vetted, Industry- <br />
                Ready Talent
              </h1>

              <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed lg:leading-loose max-w-lg text-gray-200">
                Every student at Kre8ly is trained through intensive,
                hands-on programs designed with direct industry input. We ensure
                our talent is not just certified — but capable and confident.
              </p>

              <button
                onClick={scrollToForm}
                className="text-brand-fg bg-sky-600 hover:bg-sky-700 px-6 py-3 rounded-lg shadow-lg font-semibold text-sm sm:text-base transition-transform duration-300 hover:scale-105"
              >
                Request Talent Now
              </button>
            </div>

            {/* Right side (image) */}
            <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
              <img
                src={HeroImage}
                alt="Team working together"
                className="rounded-xl shadow-2xl max-w-full md:max-w-md lg:max-w-lg hover:scale-105 transition-all duration-200"
              />
            </div>
          </section>

          <section className="w-full mt-16 mb-12">
            <p
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-3xl lg:text-4xl font-semibold text-content mb-4 text-center"
            >
              Our learners have secured jobs at 100+ product companies
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full"
            >
              <Slider />
            </div>
          </section>
          {/* <div className="flex justify-center mb-12">
            <hr className="w-[50%] border-t border-gray-300" />
          </div> */}
          <section className="mb-12 relative bg-surface-sunken md:py-10 ">
            <div className="flex flex-col items-center justify-center txet-[#0A001E] dark:text-white leading-relaxed">
              <h2
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-3xl lg:text-4xl font-semibold text-content mb-4 text-center"
              >
                Why Choose Kre8ly Talent?
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-center hidden md:block text-lg lg:max-w-[80%] text-content dark:text-[#C0C0C0] z-20 p-2"
              >
                Real Skills. Real Results. Real Professionals. Every student at
                Kre8ly is trained through intensive, hands-on programs
                designed with direct industry input. We ensure our talent is not
                just certified — but capable and confident.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full mt-6 md:mt-24 z-20">
              {features.map((features, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  key={index}
                  className="flex flex-col items-center text-center "
                >
                  <div
                    className={`w-24 md:w-28 h-24  rounded-lg mb-4 shadow-lg hover:scale-105 transition-all duration-200 bg-gradient-to-br from-slate-900 to-sky-900 `}
                  >
                    {" "}
                    {features.icon && (
                      <features.icon className="w-full h-full p-6 text-xl text-white " />
                    )}
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    className="text-xs md:text-xl font-semibold text-content mb-4"
                  >
                    {features.title}
                  </p>
                </div>
              ))}
            </div>
            <img
              src={Eclipse}
              className="absolute h-96 w-96 right-0 bottom-1 overflow-hidden select-none blur-2xl"
            />
          </section>
          {/* <div className="flex justify-center mb-8">
            <hr className="w-[50%] border-t border-gray-300" />
          </div> */}
          {/* <section className='w-full mt-16 mb-12 relative'>
                    <div className='flex flex-col items-center justify-center text-white leading-relaxed mb-8'>
                        <h1 className='text-2xl md:text-5xl mb-4 font-semibold'>Hiring Process — Fast & Simple</h1>
                        <p className='text-center text-lg max-w-[80%] text-[#C0C0C0]'>From Discovery to Hire — In Just a Few Clicks</p>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${Arrow})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                        className="flex justify-center gap-8 flex-wrap md:py-8"
                    >
                        {cardData.map((card, index) => (
                            <div key={index}
                                className={`relative bg-[#3D207E] w-64 h-[300px] p-3 md:p-4 rounded-2xl ${marginTops[index] || "mt-0"} }`}
                            >
                                <div className="shadow-lg shadow-black absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-surface z-20 border-4 border-line">
                                </div>

                                <div className='bg-surface mt-20 h-48  p-4 pt-12 rounded-xl text-center z-10 relative'>
                                    <h3 className='text-[#3D207E] font-semibold text-lg mb-2'>{card.title}</h3>
                                    <p className='text-sm text-content-secondary'>{card.description}</p>
                                </div>
                            </div>
                        ))}
                        <img
                            src={Eclipse}
                            className='absolute h-96 w-96 left-0 bottom-1 overflow-hidden select-none blur-2xl'
                        />
                    </div>
                </section> */}
          <section className="w-full mt-16 mb-12 relative">
            <div className="flex flex-col items-center justify-center text-content leading-relaxed mb-8">
              <h2
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-3xl md:text-4xl text-content mb-4 font-semibold text-center"
              >
                Hiring Process — Fast & Simple
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-center text-sm md:text-lg text-content-secondary max-w-2xl mx-auto"
              >
                From Discovery to Hire — In Just a Few Clicks
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="relative flex justify-center gap-8 flex-wrap md:py-8"
            >
              {/* Dotted snake-like path for mobile only */}
              <svg
                className="absolute w-full h-full md:hidden pointer-events-none z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 360 900"
                preserveAspectRatio="none"
              >
                <path
                  d="M 70 0 Q 490 100, 300 300 Q -170 450, 100 600 Q 500 650, 280 870 "
                  stroke="#C0C0C0"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6,8"
                />
              </svg>

              {/* Background image only for md+ */}
              <div
                className="absolute inset-0 hidden md:block z-0"
                style={{
                  backgroundImage: `url(${Arrow})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />

              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`relative w-64 h-[300px] p-3 md:p-4 rounded-2xl ${
                    marginTops[index] || "mt-0"
                  } z-10 shadow-xl bg-gray-100 hover:scale-105 transition-all duration-200`}
                >
                  {/* Overlapping circle */}
                  <div className="shadow-lg shadow-black absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-slate-900 to-sky-900 z-20 border-4 border-line flex items-center justify-center hover:scale-105 transition-all duration-200">
                    {card.icon && (
                      <card.icon className="text-3xl  text-white" />
                    )}
                  </div>

                  {/* White content box */}
                  <div className="bg-surface mt-20 h-40 md:h-48 p-4 pt-12 rounded-xl text-center z-10 relative">
                    <h3 className="text-content  font-semibold text-xs md:text-lg mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-content-secondary">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}

              <img
                src={Eclipse}
                alt="Eclipse"
                className="absolute h-96 w-96 left-0 bottom-1 overflow-hidden select-none blur-2xl z-0"
              />
            </div>
          </section>
          {/* <div className="flex justify-center mb-8">
            <hr className="w-[50%] border-t border-gray-300" />
          </div> */}
          {/* <section
            className="w-full mt-8 md:mt-16 md:mb-12"
          >
            <div
              className="flex flex-col items-center justify-center text-content leading-relaxed mb-8"
            >
              <h2
                data-aos="zoom-in"
                data-aos-delay="700"
                className="text-lg md:text-3xl text-content mb-4 font-semibold"
              >
                What Recruiters Say
              </h2>
              <p
                data-aos="zoom-in"
                data-aos-delay="700"
                className="text-center text-sm md:max-w-[80%] text-content dark:text-[#C0C0C0]"
              >
                Companies Love Hiring from Kre8ly
              </p>
            </div>
            <div
              className="w-full px-4 py-10 text-content"
            >
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
                    <div
                      data-aos="zoom-out-up"
                      data-aos-delay="700"
                      data-aos-duration="800"
                      className={` ${swiperColor[index]} text-content p-6 rounded-xl shadow-md h-[250px] flex flex-col justify-between`}
                    >
                      <div
                        className="flex justify-between items-center mb-2"
                      >
                        <div
                          className="flex gap-1"
                        >
                          {Array(item.rating)
                            .fill()
                            .map((_, i) => (
                              <FaStar
                                data-aos="fade-up"
                                data-aos-delay="700"
                                key={i}
                                className="text-warning text-sm"
                              />
                            ))}
                        </div>
                        <span className="text-sm font-semibold">
                          💬 Testimonial
                        </span>
                      </div>

                      <div
                        className="flex text-left items-center mt-8"
                      >
                        <p
                          className="text-sm">"{item.testimonial}"</p>
                      </div>

                      <div
                        className="flex items-center gap-3 mt-auto"
                      >
                        {item.avatar ? (
                          <img
                            data-aos="fade-up"
                            data-aos-delay="700"
                            src={item.avatar}
                            alt={item.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        )}
                        <div>
                          <div
                            data-aos="fade-up"
                            data-aos-delay="700"
                            className="font-bold text-sm">{item.name}</div>
                          <div
                            data-aos="fade-up"
                            data-aos-delay="700"
                            className="text-xs">{item.designation}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section> */}
          {/* <div className="flex justify-center mb-8">
            <hr className="w-[50%] border-t border-gray-300" />
          </div> */}
          <section className="w-full md:mt-16 bg-surface-sunken md:py-10">
            <div
              ref={formRef}
              className="flex flex-col items-center justify-center text-content leading-relaxed mb-8"
            >
              <h2
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-3xl lg:text-4xl text-content mb-4 font-semibold text-center"
              >
                Tell Us Your Hiring Needs
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-sm md:text-lg text-content-secondary max-w-[80%] dark:text-[#C0C0C0] text-center"
              >
                Post Your Requirements — We’ll Do the Rest
              </p>
            </div>
            <form
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              onSubmit={handleSubmit}
              className="max-w-4xl shadow-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-surface p-4 md:p-6 rounded-2xl"
            >
              <div className="col-span-1 md:col-span-2">
                <p className="text-start text-content-secondary mb-4 text-xs md:text-lg ">
                  Fill out the form below and let us know what you&apos;re
                  looking for. Our team will review your requirements and
                  connect you with qualified candidates within 24–48 hours.
                </p>
              </div>
              {[
                { label: "Full Name", name: "name" },
                { label: "Designation", name: "designation" },
                { label: "Company", name: "company" },
                { label: "Work Email", name: "email" },
                {
                  label: "Mobile Number",
                  name: "mobile",
                  placeholder: "+91 XXXXXXXXXX",
                },
                { label: "Looking for Role", name: "role" },
              ].map((field, index) => (
                <div key={index} className="relative w-full">
                  <input
                    type="text"
                    id={field.name}
                    name={field.name}
                    required
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder || ""}
                    className={`peer block w-full appearance-none border rounded-md px-2.5 pt-5 pb-2 text-xs md:text-sm text-content bg-transparent focus:outline-none focus:ring-0 focus:border-[#852FFF] 
      ${formErrors[field.name] ? "border-red-500" : "border-gray-300"}`}
                  />
                  <label
                    htmlFor={field.name}
                    className={`absolute left-2.5 -top-2 text-sm text-content-muted bg-surface px-1 transition-all duration-200  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-content-muted   peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#852FFF] 
      ${formErrors[field.name] ? "text-error" : ""}`}
                  >
                    {field.label}*
                  </label>
                  {formErrors[field.name] && (
                    <p className="text-error text-xs mt-1">
                      {formErrors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* <div className="col-span-1 md:col-span-2 relative">
                            <input
                                type="text"
                                name="role"
                                className="peer h-12 w-full border border-gray-300 rounded px-3 pt-4 bg-transparent text-content placeholder-transparent focus:outline-none focus:border-purple-500"
                                placeholder="Role Looking For"
                            />
                            <label
                                htmlFor="role"
                                className="absolute left-3 top-2 text-content-muted text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-content-muted peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-600"
                            >
                                Role Looking For
                            </label>
                        </div> */}

              <div className="col-span-1 md:col-span-2 flex justify-center">
                <button
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  type="submit"
                  disabled={isLoading}
                  className={`py-3 px-6 text-white bg-brand hover:bg-brand-hover flex items-center gap-3 font-semibold justify-center rounded-md text-xs md:text-sm md:w-auto mx-auto transition duration-300 ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:text-primary"
                  }`}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
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

export default HireFromUs;