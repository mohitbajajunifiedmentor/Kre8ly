import React, { useState } from "react";
import Footer from "../component/Footer";
import { IoMdMail, IoMdSend } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGoogle, FaFacebook } from "react-icons/fa";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import ApiRequest from "../Utils/Axios/Axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section } from "@/component/ui/Section";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiMapPin,
  FiUser,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiClock,
  FiShield,
  FiExternalLink,
} from "react-icons/fi";

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

    if (name.trim() === "") {
      setError((prev) => ({ ...prev, name: "Name is required" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, name: "" }));
    }

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
      toast.error("Kindly agree to communication terms to proceed.");
      return;
    }

    if (description.trim() === "") {
      setError((prev) => ({ ...prev, description: "Please enter your query" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, description: "" }));
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (phoneNo.trim() === "") {
      setError((prev) => ({ ...prev, phoneNo: "Phone number is required" }));
      hasError = true;
    } else if (!phoneRegex.test(phoneNo)) {
      setError((prev) => ({ ...prev, phoneNo: "Enter valid 10-digit number" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, phoneNo: "" }));
    }

    if (course.trim() === "") {
      setError((prev) => ({ ...prev, course: "Course is required" }));
      hasError = true;
    } else {
      setError((prev) => ({ ...prev, course: "" }));
    }

    if (hasError) {
      toast.error("Please fill all mandatory fields correctly.");
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
        headers: { Authorization: `Bearer ${auth_token}` },
      });
      if (response.status === 201) {
        toast.success("Thank you! Our career counselor will connect soon.");
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
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit request! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Kre8ly Career Guidance & Support</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Reach out to Kre8ly counselors. Get fast assistance regarding courses, internships, and placement assistance."
        />
        <link rel="canonical" href="https://www.unifiedmentor.com/contact-us" />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen selection:bg-brand selection:text-white">
        {/* ================= HERO HEADER ================= */}
        <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 border-b border-line bg-surface/40">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-brand/10 blur-[120px] rounded-full pointer-events-none"
          />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-subtle text-brand border border-brand/20">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              We respond in &lt; 2 hours
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-content">
              Let’s build your <span className="text-brand">dream career</span> together
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-content-secondary leading-relaxed">
              Have questions about curricula, fee structures, or placement drives?
              Our senior academic advisors are here to guide you.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-content-muted">
              <span className="inline-flex items-center gap-1.5">
                <FiCheckCircle className="text-brand text-base" /> Free Career Consultation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock className="text-brand text-base" /> Monday - Saturday (9AM - 8PM)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiShield className="text-brand text-base" /> 100% Privacy Guaranteed
              </span>
            </div>
          </div>
        </section>

        {/* ================= MAIN CONTENT SECTION ================= */}
        <Section tone="canvas" space="md">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Info & Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col gap-5 text-left"
            >
              {/* Quick Communication Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                <a
                  href="mailto:hello@kre8ly.com"
                  className="group p-5 rounded-2xl border border-line bg-surface hover:border-brand/40 hover:shadow-md transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-subtle flex items-center justify-center text-brand shrink-0 group-hover:scale-105 transition-transform">
                    <IoMdMail className="text-2xl" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-content-muted uppercase tracking-wider block">
                      Drop us an Email
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-content group-hover:text-brand transition-colors truncate block">
                      hello@kre8ly.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919518856261"
                  className="group p-5 rounded-2xl border border-line bg-surface hover:border-brand/40 hover:shadow-md transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-subtle flex items-center justify-center text-brand shrink-0 group-hover:scale-105 transition-transform">
                    <IoIosPhonePortrait className="text-2xl" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-medium text-content-muted uppercase tracking-wider block">
                      Direct Support Line
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-content group-hover:text-brand transition-colors truncate block">
                      +91 95188 56261
                    </span>
                  </div>
                </a>
              </div>

              {/* Office Location Card */}
              <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <h3 className="text-sm font-semibold text-content">
                      Headquarters
                    </h3>
                  </div>
                  <a
                    href={MAP_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1"
                  >
                    Directions <FiExternalLink className="text-xs" />
                  </a>
                </div>

                <div className="w-full h-44 rounded-xl overflow-hidden border border-line relative">
                  <iframe
                    title="Kre8ly office location"
                    src={MAP_EMBED_SRC}
                    className="w-full h-full border-0 filter contrast-95"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <p className="text-xs text-content-secondary leading-relaxed">
                  <span className="font-semibold text-content">Address: </span>
                  {OFFICE_ADDRESS}
                </p>
              </div>

              {/* Social Channels Strip */}
              <div className="rounded-2xl border border-line bg-surface p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-content">
                    Join our Community
                  </h4>
                  <p className="text-xs text-content-muted mt-0.5">Stay up to date with job alerts</p>
                </div>

                <div className="flex items-center gap-2">
                  {[
                    { icon: FaXTwitter, href: "https://x.com/unifiedmentor", label: "X" },
                    { icon: FaGoogle, href: "https://www.google.com/search?q=kre8ly", label: "Google" },
                    { icon: FaInstagram, href: "https://www.instagram.com/_unifiedmentor/?hl=en", label: "Instagram" },
                    { icon: FaFacebook, href: "https://www.facebook.com/Unifiedmentor/", label: "Facebook" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-lg border border-line bg-canvas hover:border-brand/50 hover:text-brand text-content-secondary flex items-center justify-center transition-colors"
                    >
                      <Icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Clean, Polished Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 rounded-2xl border border-line bg-surface p-6 sm:p-9 shadow-sm text-left relative"
            >
              <div className="mb-6">
                <span className="text-xs font-bold text-brand uppercase tracking-wider">
                  Fast-Track Form
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-content mt-1">
                  Send us a message
                </h2>
                <p className="text-xs sm:text-sm text-content-secondary mt-1">
                  Fill in your details and an advisor will reach back via phone/WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="Name" className="block text-xs font-medium text-content mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-content-muted" />
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-canvas text-content text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand/20 ${
                        error.name ? "border-red-500" : "border-line focus:border-brand"
                      }`}
                    />
                  </div>
                  {error.name && <p className="text-red-500 text-xs mt-1">{error.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="Email" className="block text-xs font-medium text-content mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-content-muted" />
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-canvas text-content text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand/20 ${
                        error.email ? "border-red-500" : "border-line focus:border-brand"
                      }`}
                    />
                  </div>
                  {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
                </div>

                {/* Phone & Course 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="PhoneNo" className="block text-xs font-medium text-content mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-content-muted" />
                      <input
                        type="tel"
                        name="PhoneNo"
                        id="PhoneNo"
                        placeholder="10-digit mobile number"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-canvas text-content text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand/20 ${
                          error.phoneNo ? "border-red-500" : "border-line focus:border-brand"
                        }`}
                      />
                    </div>
                    {error.phoneNo && <p className="text-red-500 text-xs mt-1">{error.phoneNo}</p>}
                  </div>

                  <div>
                    <label htmlFor="Course" className="block text-xs font-medium text-content mb-1.5">
                      Interested Course <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiBookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 text-content-muted" />
                      <input
                        type="text"
                        name="Course"
                        id="Course"
                        placeholder="e.g. Data Science, Web Dev"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-canvas text-content text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand/20 ${
                          error.course ? "border-red-500" : "border-line focus:border-brand"
                        }`}
                      />
                    </div>
                    {error.course && <p className="text-red-500 text-xs mt-1">{error.course}</p>}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="Description" className="block text-xs font-medium text-content mb-1.5">
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    name="Description"
                    id="Description"
                    placeholder="Tell us about your learning goals or queries..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`w-full p-3.5 rounded-xl border bg-canvas text-content text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand/20 resize-none ${
                      error.description ? "border-red-500" : "border-line focus:border-brand"
                    }`}
                  />
                  {error.description && (
                    <p className="text-red-500 text-xs mt-1">{error.description}</p>
                  )}
                </div>

                {/* Consent */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="contactOptIn"
                    checked={consent}
                    onChange={() => setConsent(!consent)}
                    className="mt-0.5 h-4 w-4 rounded border-line text-brand accent-brand cursor-pointer shrink-0"
                  />
                  <label
                    htmlFor="contactOptIn"
                    className="text-xs text-content-secondary cursor-pointer leading-relaxed select-none"
                  >
                    I agree to receive academic advisement updates and curriculum details from Kre8ly via WhatsApp, SMS, or Call.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full sm:w-auto min-w-[180px] inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-7 text-sm font-semibold text-brand-fg shadow-sm transition-all hover:bg-brand-hover active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 ${
                      loading ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <IoMdSend className="text-base" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </Section>

        {/* Global Components */}
        <Query darkMode={darkMode} />
        <ChatBot darkMode={darkMode} />
      </main>

      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default ContactUs;