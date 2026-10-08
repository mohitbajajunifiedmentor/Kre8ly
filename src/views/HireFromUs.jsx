import React, { useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Query from "../component/Query/Query";
import Slider from "../component/Slider";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import Reveal from "@/component/ui/Reveal";
import { Helmet } from "@/lib/helmet-compat";
import { motion } from "framer-motion";
import { useCreateHiringDataMutation } from "../Redux-setup/api";
import { toast } from "react-toastify";

import {
  FaBuilding,
  FaComments,
  FaClipboardList,
  FaUserCheck,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaComputer } from "react-icons/fa6";

const HeroImage = "/assets/HireFromUs/HeroImage.png";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

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

  const [createHiringData, { isLoading }] = useCreateHiringDataMutation();
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Full name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      errors.name = "Full name should contain only letters and spaces";
      isValid = false;
    }

    if (!formData.designation.trim()) {
      errors.designation = "Designation is required";
      isValid = false;
    }

    if (!formData.company.trim()) {
      errors.company = "Company name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Work email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

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

    if (!formData.role.trim()) {
      errors.role = "Role is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting.");
      return;
    }

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
      toast.success("Form submitted successfully! We will reach out soon.");
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
      const errorMessage =
        error?.data?.message || "Error submitting form. Please try again.";
      if (errorMessage === "A candidate with this email already exists") {
        setFormErrors((prev) => ({
          ...prev,
          email: errorMessage,
        }));
      }
      toast.error(errorMessage);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const features = [
    {
      title: "Industry-Relevant Projects",
      desc: "Candidates work on production-level stacks with modern architectures.",
      icon: FaComputer,
    },
    {
      title: "Certification from Experts",
      desc: "Evaluated by engineering leaders from top product enterprises.",
      icon: LiaCertificateSolid,
    },
    {
      title: "Soft Skills & Interview Prep",
      desc: "Trained on technical communication, ownership, and agile culture.",
      icon: FaComments,
    },
    {
      title: "Ready for Startups & Scaleups",
      desc: "Zero ramp-up time; ready to ship features right from week one.",
      icon: FaBuilding,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Tell Us Your Hiring Needs",
      description: "Share the target roles, technical stack, seniority, and team timeline.",
      icon: FaClipboardList,
    },
    {
      number: "02",
      title: "Receive Pre-Vetted Profiles",
      description: "Get a shortlisted batch of candidates assessed via live code benchmarks.",
      icon: FaUserCheck,
    },
    {
      number: "03",
      title: "Interview & Evaluate",
      description: "Run custom interview rounds directly at your convenience.",
      icon: FaComments,
    },
    {
      number: "04",
      title: "Seamless Onboarding",
      description: "Make an offer and receive full transitional and onboarding assistance.",
      icon: FaHandshake,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Hire Job-Ready Tech Talent | Kre8ly</title>
        <meta
          name="description"
          content="Connect with industry-trained, job-ready tech professionals from Kre8ly. Hire skilled candidates for data science, AI, and software roles today."
        />
        <meta
          name="keywords"
          content="hire interns, hire freshers, job-ready talent, tech interns, data science interns, digital marketing interns"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kre8ly.com/hire-from-us" />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <Section tone="canvas" space="lg" className="relative overflow-hidden pt-8 md:pt-14">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col gap-4 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold max-w-fit">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Zero Hiring Fees for Employers
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-content">
                Your Future Team Is Here — <br />
                <span className="text-brand">Hire Job-Ready Talent</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-content-secondary leading-relaxed max-w-2xl mt-1">
                Every candidate at Kre8ly is trained through intensive, hands-on programs
                designed with direct industry input. We ensure our talent is not just
                certified — but productive from day one.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                >
                  Request Talent Now <FaArrowRight className="text-xs" />
                </button>
                <a
                  href="#howItWorks"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-line bg-surface px-6 text-sm font-semibold text-content transition-all duration-200 hover:bg-surface-sunken"
                >
                  How It Works
                </a>
              </div>

              {/* Fast Stats Row */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-line mt-2">
                <div className="p-3 rounded-card border border-line bg-surface text-left">
                  <div className="text-lg sm:text-xl font-bold text-content leading-tight">
                    48 Hrs
                  </div>
                  <div className="text-[11px] text-content-secondary font-medium">
                    Profile Shortlisting
                  </div>
                </div>
                <div className="p-3 rounded-card border border-line bg-surface text-left">
                  <div className="text-lg sm:text-xl font-bold text-content leading-tight">
                    100+
                  </div>
                  <div className="text-[11px] text-content-secondary font-medium">
                    Hiring Partners
                  </div>
                </div>
                <div className="p-3 rounded-card border border-line bg-surface text-left">
                  <div className="text-lg sm:text-xl font-bold text-content leading-tight">
                    95%
                  </div>
                  <div className="text-[11px] text-content-secondary font-medium">
                    Retention Rate
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 flex items-center justify-center"
            >
              <div className="relative rounded-panel border border-line bg-surface p-4 sm:p-5 shadow-sm w-full max-w-md lg:max-w-none">
                <img
                  src={HeroImage}
                  alt="Team working together"
                  className="w-full h-auto object-cover rounded-card"
                />
                <div className="absolute -bottom-3 -left-2 sm:left-4 rounded-card border border-line bg-surface p-3 shadow-md flex items-center gap-3">
                  <div className="w-9 h-9 rounded-control bg-brand-subtle text-brand flex items-center justify-center text-lg shrink-0">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-content">Vetted Profiles Only</p>
                    <p className="text-[10px] text-content-secondary">
                      Pre-screened coding & communication
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ================= HIRING PARTNERS SLIDER ================= */}
        <Section tone="sunken" space="md" bleed>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Proven Network"
              title="Our learners have secured jobs at 100+ product companies"
              align="center"
            />
          </div>
          <Slider darkMode={darkMode} />
        </Section>

        {/* ================= WHY CHOOSE KRE8LY TALENT ================= */}
        <Section tone="canvas" space="lg">
          <SectionHeader
            eyebrow="Why Kre8ly Talent"
            title="Real Skills. Real Results. Day-One Contributors."
            lead="Every learner completes intensive, production-grade projects evaluated by industry practitioners."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-4">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <motion.article
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group rounded-card border border-line bg-surface p-6 shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-12 h-12 rounded-control bg-surface-sunken border border-line flex items-center justify-center text-brand mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="text-base font-bold text-content leading-snug mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-content-secondary leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-4 border-t border-line flex items-center gap-1.5 text-[11px] font-semibold text-brand">
                    <FaCheckCircle className="text-[10px]" />
                    <span>Verified Attribute</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Section>

        {/* ================= HIRING PROCESS STEPS ================= */}
        <Section id="howItWorks" tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Recruitment Lifecycle"
            title="Hiring Process — Fast &amp; Simple"
            lead="From your initial requirement brief to candidate onboarding in 4 predictable steps."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.number}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="rounded-card border border-line bg-surface p-6 shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:border-brand/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-brand bg-brand-subtle px-2 py-0.5 rounded border border-line">
                        Step {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-control bg-surface-sunken border border-line flex items-center justify-center text-content-muted">
                        <Icon className="text-xs" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-content leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-content-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Section>

        {/* ================= HIRE TALENT FORM ================= */}
        <Section tone="canvas" space="lg">
          <div ref={formRef} className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Eyebrow className="justify-center">Employer Portal</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-content mt-2 mb-2">
                Tell Us Your Hiring Needs
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-content-secondary max-w-xl mx-auto">
                Share your requirements. Our talent team will match profiles and share vetted
                candidates within 24–48 hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-panel border border-line bg-surface p-6 sm:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-content mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-3.5 py-2.5 rounded-control border bg-canvas text-content text-sm transition-colors focus:outline-none focus:border-brand ${
                      formErrors.name ? "border-error" : "border-line"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-error text-[11px] mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Designation */}
                <div>
                  <label htmlFor="designation" className="block text-xs font-semibold text-content mb-1.5">
                    Designation *
                  </label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="e.g. Engineering Manager / TA Lead"
                    className={`w-full px-3.5 py-2.5 rounded-control border bg-canvas text-content text-sm transition-colors focus:outline-none focus:border-brand ${
                      formErrors.designation ? "border-error" : "border-line"
                    }`}
                  />
                  {formErrors.designation && (
                    <p className="text-error text-[11px] mt-1">{formErrors.designation}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-content mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. TechCorp Solutions"
                    className={`w-full px-3.5 py-2.5 rounded-control border bg-canvas text-content text-sm transition-colors focus:outline-none focus:border-brand ${
                      formErrors.company ? "border-error" : "border-line"
                    }`}
                  />
                  {formErrors.company && (
                    <p className="text-error text-[11px] mt-1">{formErrors.company}</p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-content mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-control border bg-canvas text-content text-sm transition-colors focus:outline-none focus:border-brand ${
                      formErrors.email ? "border-error" : "border-line"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-error text-[11px] mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-xs font-semibold text-content mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    className={`w-full px-3.5 py-2.5 rounded-control border bg-canvas text-content text-sm transition-colors focus:outline-none focus:border-brand ${
                      formErrors.mobile ? "border-error" : "border-line"
                    }`}
                  />
                  {formErrors.mobile && (
                    <p className="text-error text-[11px] mt-1">{formErrors.mobile}</p>
                  )}
                </div>

                {/* Role Looking For */}
                <div>
                  <label htmlFor="role" className="block text-xs font-semibold text-content mb-1.5">
                    Role Looking For *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="e.g. Frontend Engineer, Data Analyst"
                    className={`w-full px-3.5 py-2.5 rounded-control border bg-canvas text-content text-sm transition-colors focus:outline-none focus:border-brand ${
                      formErrors.role ? "border-error" : "border-line"
                    }`}
                  />
                  {formErrors.role && (
                    <p className="text-error text-[11px] mt-1">{formErrors.role}</p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-8 text-sm font-semibold text-brand-fg shadow-sm transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Submitting..." : "Submit Hiring Request"}
                  {!isLoading && <FaArrowRight className="text-xs" />}
                </button>
              </div>
            </form>
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

export default HireFromUs;