import React, { useRef, useState } from "react";
import Footer from "../component/Footer";

// Gradient star — used on LIGHT backgrounds
const LogoGradient = "/assets/ContactUs/ContactLogoLight.svg";
// Solid white star — used on DARK backgrounds
const LogoWhite = "/assets/ContactUs/ContactLogoWhite.svg";

import { IoMdMail, IoMdSend } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGoogle, FaFacebook } from "react-icons/fa";

// mobileLight.png = dark-framed phone (sits on a light page background)
// mobileDark.png  = white-framed phone (sits on a dark page background)
const MobileDark = "/assets/ContactUs/mobileDark.png";
const MobileLight = "/assets/ContactUs/mobileLight.png";

import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import ApiRequest from "../Utils/Axios/Axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import MobileFooter from "../component/MobileFooter";
import PrivacyHeader from "../component/PrivacyHeader";
import ChatBot from "@/component/ChatBot/ChatBot";

const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";
const HeaderImage2 = "/assets/ContactUs/contact-us-hero.jpg";

// Single source of truth for the office location used by both the map and the
// directions link, so the two can never drift apart again.
const OFFICE_ADDRESS =
  "WeWork DLF Forum, DLF Cyber City, DLF Phase 3, Gurugram, Haryana 122002";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  OFFICE_ADDRESS
)}`;

const ContactUs = ({ darkMode, setDarkMode }) => {
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [course, setCourse] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    description: "",
    phoneNo: "",
    course: "",
  });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    // Name validation
    if (name.trim() === "") {
      setError((prev) => ({ ...prev, name: "Name is required" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, name: "" }));
    }

    // Email validation
    if (email.trim() === "") {
      setError((prev) => ({ ...prev, email: "Email is required" }));
      hasError = true;
    } else if (!validateEmail(email)) {
      setError((prev) => ({ ...prev, email: "Invalid email format" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }

    if (!consent) {
      toast.error("Kindly select the checkbox to continue.");
      return;
    }

    // Description validation
    if (description.trim() === "") {
      setError((prev) => ({ ...prev, description: "Description is required" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, description: "" }));
    }

    // Phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (phoneNo.trim() === "") {
      setError((prev) => ({ ...prev, phoneNo: "Phone number is required" }));
      hasError = true;
    } else if (!phoneRegex.test(phoneNo)) {
      setError((prev) => ({ ...prev, phoneNo: "Invalid phone number format" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, phoneNo: "" }));
    }

    // Course validation
    if (course.trim() === "") {
      setError((prev) => ({ ...prev, course: "Course is required" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, course: "" }));
    }

    if (hasError) {
      toast.error("Please correct the errors before submitting");
      return;
    }

    const formData = {
      name: name.toLocaleLowerCase(),
      email: email.toLocaleLowerCase(),
      description: description.toLocaleLowerCase(),
      phoneNo,
      course: course.toLocaleLowerCase(),
    };

    try {
      setLoading(true);
      const response = await ApiRequest.post("/contact/new-contact", formData, {
        headers: { Authorization: `Bearer ${auth_token} ` },
      });
      if (response.status === 201) {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setDescription("");
        setPhoneNo("");
        setCourse("");
        setConsent(false);
        setError({
          name: "",
          email: "",
          description: "",
          phoneNo: "",
          course: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message! Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Kre8ly | We&apos;re Here to Help</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Kre8ly, contact us, customer support, online education, get in touch"
        />
        <meta
          name="description"
          content="Reach out to Kre8ly at +919518856261 or email hello@kre8ly.com for queries about courses, support, or partnerships."
        />

        <link rel="canonical" href="https://www.unifiedmentor.com/contact-us" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="Kre8ly | Contact Us" />
        <meta
          property="og:description"
          content="Reach out to Kre8ly through our contact page. Find all the necessary details to get in touch with our team for support, inquiries, or feedback about our online education platform."
        />
        <meta name="twitter:title" content="Kre8ly | Contact Us" />
        <meta
          name="twitter:description"
          content="Contact Kre8ly for support or inquiries. Our contact page includes all the details you need to get in touch with us about our online courses and services."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div
        className={`w-full h-full md:min-h-[60vh] pb-24 flex items-center justify-center overflow-hidden ${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        }`}
      >
        <main className="w-full">
          <section
            id="hero"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full bg-gradient-to-br from-brand via-brand-active to-brand-hover"
          >
            <PrivacyHeader
              br1="Join Our Team"
              br2="at Kre8ly"
              HeaderImage={HeaderImage}
              HeaderImage2={HeaderImage2}
              darkMode={darkMode}
              title="Contact Us"
              subtitle="We’re here to listen, support, and guide you."
              desc="Have questions, feedback, or need assistance? Reach out to the Kre8ly team anytime. Whether it’s about our programs, services, or support, we’re just a message away to help you every step of the journey."
            />
          </section>
          <section className="w-full flex flex-col items-center justify-center p-4 md:p-10 ">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16">
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start gap-5"
              >
                <div className="flex items-start gap-4 w-full flex-col md:flex-row">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <figure className="flex flex-row items-center gap-4 overflow-hidden">
                      <img
                        src={darkMode ? LogoWhite : LogoGradient}
                        alt="Kre8ly"
                        className="w-14"
                      />

                      <figcaption
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="800"
                        className="text-content text-left border border-line-strong dark:border-secondary px-4 py-2 rounded-md text-base md:text-lg mb-4"
                      >
                        Hi, Need help? Use the form below or email me at
                        hello@kre8ly.com
                      </figcaption>
                    </figure>
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <div className="flex items-center gap-4 w-full">
                        <IoMdMail className="text-content" size={40} />
                        <a
                          href="mailto:hello@kre8ly.com"
                          className="text-content px-6 py-2 text-base md:text-lg mb-4"
                        >
                          hello@kre8ly.com
                        </a>
                      </div>
                      <div className="flex items-center gap-4 w-full">
                        <IoIosPhonePortrait className="text-content" size={40} />
                        <a
                          href="tel:+919518856261"
                          className="text-content px-6 py-2 text-base md:text-lg mb-4"
                        >
                          +91 95188 56261
                        </a>
                      </div>
                      <div className="flex items-center md:items-start gap-4 w-full lg:w-[34rem]">
                        <div className="w-full h-48 md:h-52 relative">
                          <a
                            href={MAP_DIRECTIONS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10"
                            aria-label="Get directions to the Kre8ly office on Google Maps"
                          ></a>
                          <iframe
                            title="Kre8ly office location"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            src={MAP_EMBED_SRC}
                            className="w-full h-full border-0 rounded-lg outline-none shadow-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center mx-auto">
                    <img
                      src={darkMode ? MobileDark : MobileLight}
                      alt="Kre8ly contact number on a phone screen"
                      className="w-48 hidden md:block"
                    />
                  </div>
                </div>
                <div className="flex justify-center md:justify-start gap-6 flex-row">
                  <a
                    href="https://x.com/unifiedmentor"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kre8ly on X"
                  >
                    <FaXTwitter className="text-content text-xl md:text-2xl" />
                  </a>
                  <a
                    href="https://www.google.com/search?q=kre8ly"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kre8ly on Google"
                  >
                    <FaGoogle className="text-content text-xl md:text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/_unifiedmentor/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kre8ly on Instagram"
                  >
                    <FaInstagram className="text-content text-xl md:text-2xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/Unifiedmentor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kre8ly on Facebook"
                  >
                    <FaFacebook className="text-content text-xl md:text-2xl" />
                  </a>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8"
              >
                <div className="flex flex-col items-start gap-2">
                  <h1 className="text-lg lg:text-2xl font-semibold text-content mb-4">
                    Get in touch with us
                  </h1>
                  <p className="text-content text-base md:text-lg mb-4">
                    Contact us if you need further assistance.
                  </p>
                </div>
                <form
                  className="flex flex-col items-center md:items-start gap-4 w-full mx-auto"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <label
                      htmlFor="Name"
                      className="text-content text-xs md:text-sm"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full md:max-w-lg px-2 py-2 outline-none bg-surface bg-opacity-10 shadow-lg backdrop-blur-lg rounded-lg border border-line-strong dark:text-white capitalize"
                    />
                    {error.name && (
                      <p className="text-error text-xs italic">{error.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <label
                      htmlFor="Email"
                      className="text-content text-xs md:text-sm"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full md:max-w-lg px-2 py-2 outline-none bg-surface bg-opacity-10 shadow-lg backdrop-blur-lg rounded-lg border border-line-strong dark:text-white"
                    />
                    {error.email && (
                      <p className="text-error text-xs italic">{error.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <label
                      htmlFor="PhoneNo"
                      className="text-content text-xs md:text-sm"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="PhoneNo"
                      id="PhoneNo"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full md:max-w-lg px-2 py-2 outline-none bg-surface bg-opacity-10 shadow-lg backdrop-blur-lg rounded-lg border border-line-strong dark:text-white"
                    />
                    {error.phoneNo && (
                      <p className="text-error text-xs italic">
                        {error.phoneNo}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <label
                      htmlFor="Course"
                      className="text-content text-xs md:text-sm"
                    >
                      Course
                    </label>
                    <input
                      type="text"
                      name="Course"
                      id="Course"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      placeholder="Enter the course you're interested in"
                      className="w-full md:max-w-lg px-2 py-2 outline-none bg-surface bg-opacity-10 shadow-lg backdrop-blur-lg rounded-lg border border-line-strong dark:text-white capitalize"
                    />
                    {error.course && (
                      <p className="text-error text-xs italic">{error.course}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <label
                      htmlFor="Description"
                      className="text-content text-xs md:text-sm"
                    >
                      Please enter the details of your request
                    </label>
                    <textarea
                      rows="4"
                      cols="50"
                      name="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      id="Description"
                      placeholder="Enter your description"
                      className="w-full md:max-w-lg px-2 py-2 outline-none bg-surface bg-opacity-10 shadow-lg backdrop-blur-lg rounded-lg border border-line-strong text-content capitalize"
                    />
                    {error.description && (
                      <p className="text-error text-xs italic">
                        {error.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 w-full md:max-w-lg">
                    <input
                      type="checkbox"
                      id="contactOptIn"
                      checked={consent}
                      onChange={() => setConsent(!consent)}
                      className="h-4 w-4 cursor-pointer"
                    />
                    <label
                      htmlFor="contactOptIn"
                      className="text-xs md:text-sm text-content cursor-pointer"
                    >
                      I acknowledge and agree to receive communication from
                      Kre8ly related to my query via WhatsApp, phone calls, SMS,
                      email, and RCS messaging.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:max-w-lg flex justify-center md:justify-end items-center gap-2"
                  >
                    <div className="flex justify-center text-xs py-4 md:py-3 px-4 md:px-6 rounded-lg md:text-sm items-center gap-2 w-full md:w-[30%] text-white dark:text-content bg-brand hover:bg-brand-hover dark:hover:text-white hover:text-primary dark:bg-surface transition duration-300">
                      <p className="font-bold">
                        {loading ? "Sending..." : "Send"}
                      </p>
                      <IoMdSend />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default ContactUs;