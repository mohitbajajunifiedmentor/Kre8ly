import React from "react";
import { usePathname } from "next/navigation";
const ProjectFrame = "/assets/machineLearning/ProjectFrame.png";
const Certificates = "/assets/machineLearning/Certificates3.jpg";
const GoogleCertiDM = "/assets/machineLearning/GoogleCertiDM.png";
const HotspotCertiDM = "/assets/machineLearning/HotspotCertiDM.png";
const futureSkillsCertiDM = "/assets/machineLearning/futureSkillsCertiDM.png";

const Ellipse = "/assets/Ellipse.webp";
const PorjectsBg = "/assets/GraphicDesign/ProjectsBg.svg";
import { Link } from "@/lib/router-compat";
import AccredationSwiper from "../AccredationSwiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
} from "react-icons/fa";

const cardsData = [
  {
    title: "Card One",
    description: "This is the first card.",
    company: "Google",
    details:
      "Course Completion Certificate is awarded to you for the dedication and time you have provided to learn and enhance your skills during your training.",
    image: GoogleCertiDM,
  },
  {
    title: "Card Two",
    description: "This is the second card.",
    company: "Hobspot",
    details:
      "Course Completion Certificate is awarded to you for the dedication and time you have provided to learn and enhance your skills during your training.",
    image: HotspotCertiDM,
  },
  {
    title: "Card Three",
    description: "This is the third card.",
    company: "Future Skills",
    details:
      "Course Completion Certificate is awarded to you for the dedication and time you have provided to learn and enhance your skills during your training.",
    image: futureSkillsCertiDM,
  },
];

const Certificate = ({ Project, CourseName = "", location }) => {
  // was `window.location.pathname` — usePathname() returns the same value and
  // is safe during server rendering, so SSR and client markup match.
  const url = usePathname();

  const textContentforEachPage = (CourseName) => {
    switch (CourseName) {
      case "Digital Marketing":
        return (
          <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
            <h2 className="text-base md:text-xl font-semibold text-content mb-4 text-justify my-4">
              {/* Verifiable Certificate of <br className="hidden sm:inline" />
                Accomplishment */}
              {CourseName} Certification Course
            </h2>
            <p className="text-content text-xs md:text-lg text-content-secondary mb-4">
              Kre8ly's Digital Marketing Certification Course is the key
              to your success. Our certification is Globally Recognized. Unified
              Mentor offers valuable certifications in{" "}
              <Link
                to={"/data-science"}
                className="underline text-content"
              >
                data science,
              </Link>{" "}
              digital marketing,{" "}
              <Link
                to={"/web-development"}
                className="underline text-content"
              >
                web development,
              </Link>{" "}
              and{" "}
              <Link
                to={"/machine-learning"}
                className="underline text-content"
              >
                machine learning.
              </Link>{" "}
              These certifications help students secure jobs at major companies.
              We provide a dedicated job portal with various job listings,
              including roles in web development, data science, digital
              marketing, machine learning, and quality analysis. Some available
              positions are Associate Engineer, Data Analyst, and Frontend
              Developer. Our platform is committed to supporting job seekers
              with resources and guidance to help them achieve their career
              goals.
            </p>
            {/* Benefits List */}
            <div className="space-y-4 my-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Industry Recognition
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Recognized by top tech companies and hiring managers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Portfolio Projects
                  </h4>
                  <p className="text-sm text-content-secondary">
                    6 professional projects to showcase your skills
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Lifetime Access
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Keep your certificate and course materials forever
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Career Support
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Job placement assistance and interview preparation
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Data Science":
        return (
          <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
            <h2 className="text-base md:text-xl font-semibold text-content mb-4 text-justify my-4">
              {/* Verifiable Certificate of <br className="hidden sm:inline" />
                Accomplishment */}
              {CourseName} Certification
            </h2>
            <p className="text-content text-xs md:text-lg text-content-secondary mb-4">
              After completing our Data Science certification, you’ll receive a
              certificate that is recognized worldwide. This fully online course
              allows you to learn independently, accessing materials anytime. It
              offers flexibility and is cost-effective, saving you money. Plus,
              you’ll get access to our dedicated job portal with various
              listings, including data science roles, to help you find a job
              that interests you.
            </p>
            {/* Benefits List */}
            <div className="space-y-4 my-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Industry Recognition
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Recognized by top tech companies and hiring managers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Portfolio Projects
                  </h4>
                  <p className="text-sm text-content-secondary">
                    6 professional projects to showcase your skills
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Lifetime Access
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Keep your certificate and course materials forever
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Career Support
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Job placement assistance and interview preparation
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-lg   text-content-secondary mx-auto md:mx-0 text-justify w-full md:w-[90%] mt-10">
              We also provide{" "}
              <Link
                to={"/web-development"}
                className="underline text-content"
              >
                Web Development,
              </Link>{" "}
              <Link
                to={"/machine-learning"}
                className="underline text-content"
              >
                Machine Learning
              </Link>{" "}
              and best{" "}
              <Link
                to={"/digital-marketing"}
                className="underline text-content"
              >
                digital marketing
              </Link>{" "}
              courses in {location}.
            </p>
          </div>
        );
      case "Web Development":
        return (
          <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
            <h2 className="text-xl lg:text-2xl font-semibold text-content my-4">
              {/* Verifiable Certificate of <br className="hidden sm:inline" />
                Accomplishment */}
              {CourseName} Course Certificate
            </h2>
            <p className="text-content text-xs md:text-lg text-content-secondary mb-4">
              Web Development Course Certificate: We are pleased to provide a
              thorough certification program that takes candidates on an
              immersive and skill-focused journey. This web development
              certification accelerates your professional progress whether
              you're hoping to land a position in a tech firm, join a creative
              agency, or start working on freelancing projects.
            </p>
            {/* Benefits List */}
            <div className="space-y-4 my-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Industry Recognition
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Recognized by top tech companies and hiring managers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Portfolio Projects
                  </h4>
                  <p className="text-sm text-content-secondary">
                    6 professional projects to showcase your skills
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Lifetime Access
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Keep your certificate and course materials forever
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Career Support
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Job placement assistance and interview preparation
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base text-content-secondary max-w-2xl mx-auto">
              We also offer{" "}
              <Link
                to={"/data-science"}
                className="underline text-info text-content"
              >
                Data Science
              </Link>{" "}
              Course in {location} and Best{" "}
              <Link
                to={"/digital-marketing"}
                className="underline text-info text-content"
              >
                Digital Marketing
              </Link>{" "}
              Certification in {location}.
            </p>
          </div>
        );
      case "Machine Learning":
        return (
          <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
            <h2 className="text-base md:text-xl font-semibold text-content mb-4 text-justify my-4">
              {/* Verifiable Certificate of <br className="hidden sm:inline" />
                Accomplishment */}
              {CourseName} Certification Course
            </h2>
            <p className="text-content text-xs md:text-lg text-content-secondary mb-4">
              The Machine Learning Certification Course from Kre8ly
              helps you get ready for a job in the field. To earn the
              certification, you'll need to finish all course tasks, including
              projects, quizzes, and tests. After you complete the course,
              you'll get a certificate that is respected by many top companies,
              which can help you move forward in your machine learning career.
            </p>
            {/* Benefits List */}
            <div className="space-y-4 my-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Industry Recognition
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Recognized by top tech companies and hiring managers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Portfolio Projects
                  </h4>
                  <p className="text-sm text-content-secondary">
                    6 professional projects to showcase your skills
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Lifetime Access
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Keep your certificate and course materials forever
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Career Support
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Job placement assistance and interview preparation
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-lg text-content-secondary mx-auto md:mx-0 text-justify w-full md:w-[90%] mt-5">
              We also provide a{" "}
              <Link
                to={"/data-science"}
                className="underline text-content"
              >
                Data Science Course,
              </Link>{" "}
              <Link
                to={"/digital-marketing"}
                className="underline text-content"
              >
                a Digital Marketing Course,
              </Link>{" "}
              and the{" "}
              <Link
                to={"/web-development"}
                className="underline text-content"
              >
                Best Web Development Course in {location}.
              </Link>{" "}
            </p>
          </div>
        );
      case "Data Analyst":
        return (
          <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
            <h2 className="text-base md:text-xl font-semibold text-content mb-4 text-left my-4">
              {/* Verifiable Certificate of <br className="hidden sm:inline" />
                Accomplishment */}
              Best Data Analytics Course Certification in {location}
            </h2>
            <p className="text-content-secondary mb-4">
              Getting certified in data analytics can make a big difference in
              your career. The Data Analytics Course Certification in {location}{" "}
              from Kre8ly is designed to build your career by providing
              practical skills that employers demand. Our Data Analytics
              certification is recognized by top companies and can lead to
              better job prospects and higher salaries.
            </p>
            {/* Benefits List */}
            <div className="space-y-4 my-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Industry Recognition
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Recognized by top tech companies and hiring managers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Portfolio Projects
                  </h4>
                  <p className="text-sm text-content-secondary">
                    6 professional projects to showcase your skills
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Lifetime Access
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Keep your certificate and course materials forever
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Career Support
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Job placement assistance and interview preparation
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-lg  text-content-secondary mx-auto md:mx-0 text-justify w-full md:w-[90%] mt-10">
              We also offer{" "}
              <Link
                to={"/data-science"}
                className="underline text-content"
              >
                Data Science
              </Link>{" "}
              Course in {location} and Best{" "}
              <Link
                to={"/digital-marketing"}
                className="underline text-content"
              >
                Digital Marketing
              </Link>{" "}
              Certification in {location}.
            </p>
          </div>
        );

      default:
        return (
          <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
            <h2 className="text-base md:text-xl font-semibold text-content mb-4 text-justify my-4">
              {/* Verifiable Certificate of <br className="hidden sm:inline" />
                Accomplishment */}
              {CourseName} Course Certificate
            </h2>
            <p className="text-xs md:text-lg  text-content-secondary mx-auto md:mx-0  w-full md:w-[90%] text-justify">
              {`We are pleased to provide a thorough certification program that takes candidates on an immersive and skill-focused journey. This ${CourseName} certification accelerates your professional progress whether you're hoping to land a position in a tech firm, join a creative agency, or start working on freelancing projects.`}
            </p>
            {/* Benefits List */}
            <div className="space-y-4 my-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Industry Recognition
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Recognized by top tech companies and hiring managers
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Portfolio Projects
                  </h4>
                  <p className="text-sm text-content-secondary">
                    6 professional projects to showcase your skills
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-brand"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Lifetime Access
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Keep your certificate and course materials forever
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-warning"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-content dark:text-content-muted">
                    Career Support
                  </h4>
                  <p className="text-sm text-content-secondary">
                    Job placement assistance and interview preparation
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs md:text-base  text-content-secondary mx-auto md:mx-0 text-justify w-full md:w-[90%] mt-10">
              We also offer{" "}
              <Link
                to={"/data-science"}
                className="underline text-content"
              >
                Data Science
              </Link>{" "}
              Course in {location} and Best{" "}
              <Link
                to={"/digital-marketing"}
                className="underline text-content"
              >
                Digital Marketing
              </Link>{" "}
              Certification in {location}.
            </p>
          </div>
        );
    }
  };
  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-content my-4">
          Course Certificate
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          We are pleased to provide a thorough certification program that takes
          candidates on an immersive and skill-focused journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:px-10 md:gap-20">
        <div className="w-full h-full max-w-md transform hover:scale-105 transition-all duration-500 md:w-1/2 lg:-mt-40">
          <img
            src={Certificates}
            alt="Certificate"
            className="object-contain rounded-lg shadow-lg mt-3 lg:mt-0"
          />
        </div>

        <div
          // data-aos="fade-up"
          // data-aos-delay="2000"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          {textContentforEachPage(CourseName)}
        </div>
      </div>
      {url === "/digital-marketing" && (
        <section>
          {/* Here i want three cards where i will hover will show details */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="group relative w-100 h-100 bg-surface shadow-lg rounded-lg overflow-hidden border border-line transform hover:scale-105 transition-all duration-500"
              >
                {/* <div className="object-contain"> */}
                <div className="w-100 h-100 max-w-md ">
                  <img
                    src={card.image}
                    alt="Certificate"
                    className="w-full h-auto rounded-lg shadow-lg mt-3 lg:mt-0"
                  />
                </div>
                {/* </div> */}

                {/* Hidden Details on Hover */}
                <div className="absolute inset-0 bg-surface bg-opacity-95 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <h4 className="text-lg font-bold mb-2">{card.company}</h4>
                  <p className="text-content-secondary">{card.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Certificate;