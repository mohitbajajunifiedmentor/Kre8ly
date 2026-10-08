import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import MobileFooter from "../component/MobileFooter";
import Query from "../component/Query/Query";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import Reveal from "@/component/ui/Reveal";

import { Helmet } from "@/lib/helmet-compat";
import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { 
  FaHandshake, 
  FaUniversity, 
  FaCheckCircle, 
  FaArrowRight, 
  FaExternalLinkAlt 
} from "react-icons/fa";

// Assets
const DataSpace = "/assets/Mou/DataSpace.png";
const MOUImage1 = "/assets/Mou/MOU1.jpg";
const Icfai = "/assets/Mou/ICFAI2.png";
const MOUImage2 = "/assets/Mou/MOU2.jpg";
const RDCollege = "/assets/Mou/RDCollege.png";
const MOUImage3 = "/assets/Mou/MOU3.jpg";
const MOUImage4 = "/assets/Mou/MOU4.jpg";
const Nsu = "/assets/Mou/NSU.jpeg";
const MOUImage5 = "/assets/Mou/nasscom3.jpg";
const NasscomLogo = "/assets/Mou/NasscomPng.png";
const MouImageNew = "/assets/Mou/MOU.svg";
const Group_5 = "/assets/Mou/Group_5.png";
const Group_6 = "/assets/Mou/Group%20_6.png";

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function MouPage({ darkMode, setDarkMode }) {
  const collabs = [
    {
      image: MOUImage1,
      image_alt: "Kre8ly Collaboration with DataSpace Academy - MOU Signing",
      title: "DataSpace Academy",
      type: "Industry Tech Partner",
      content:
        "Thrilled to announce our strategic partnership with DataSpace Academy. Together, we provide industry-grade hands-on labs, joint credentials, and accelerated career tracks in emerging tech.",
      imageCompany: DataSpace,
      company_alt: "DataSpace Academy Logo",
      badge: "Tech Curriculum",
    },
    {
      image: MOUImage2,
      image_alt: "Kre8ly Collaboration with ICFAI University, Hyderabad - MOU Signing",
      title: "ICFAI University, Hyderabad",
      type: "Academic Institution",
      content:
        "Partnered with ICFAI University, Hyderabad to deliver real-world project mentoring, faculty immersion programs, and direct campus placement access for students across multiple faculties.",
      imageCompany: Icfai,
      company_alt: "ICFAI University Logo",
      badge: "University Tie-up",
    },
    {
      image: MOUImage3,
      image_alt: "Kre8ly Collaboration with R.D. Engineering College, Ghaziabad - MOU Signing",
      title: "R.D. Engineering College, Ghaziabad",
      type: "Engineering College",
      content:
        "Joint initiative with R.D. Engineering College to integrate industry capstones, modern code sprint evaluations, and expert career coaching directly into the technical curriculum.",
      imageCompany: RDCollege,
      company_alt: "R.D. Engineering College Logo",
      badge: "Campus Placement",
    },
    {
      image: MOUImage4,
      image_alt: "Kre8ly Collaboration with Netaji Subhas University - MOU Signing",
      title: "Netaji Subhas University, Jamshedpur",
      type: "University Partner",
      content:
        "Expanding our academic footprint with Netaji Subhas University to empower learners with next-generation skills, corporate projects, and guaranteed interview cycles.",
      imageCompany: Nsu,
      company_alt: "Netaji Subhas University Logo",
      badge: "Skill Development",
    },
    {
      image: MOUImage5,
      image_alt: "Kre8ly Partnership Announcement with Nasscom - MOU Announcement",
      title: "Nasscom",
      type: "National Skill Body",
      content:
        "Proud to collaborate with Nasscom to align our curriculums with the National Occupational Standards (NOS) and drive high-impact workforce readiness across key sectors.",
      imageCompany: NasscomLogo,
      company_alt: "Nasscom Logo",
      badge: "National Standard",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Memorandum of Understanding (MOU) | Kre8ly</title>
        <meta
          name="description"
          content="Explore the MOUs between Kre8ly and industry & academic partners. See how our collaborations elevate education and student career paths."
        />
        <meta
          name="keywords"
          content="MOU, Kre8ly, industry collaboration, career growth, educational partnerships, college tie ups"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kre8ly.com/mou" />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <Section tone="canvas" space="lg" className="relative overflow-hidden pt-8 md:pt-14">
          {/* Subtle Ambient Background Mesh */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-brand/5 rounded-full blur-2xl pointer-events-none -z-10" />

          {/* Floating Subtle Asset Graphics */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src={Group_5}
            alt=""
            aria-hidden="true"
            className="absolute hidden md:block w-16 h-auto top-[20%] right-8 pointer-events-none opacity-50"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            src={Group_6}
            alt=""
            aria-hidden="true"
            className="absolute hidden md:block w-16 h-auto top-[25%] left-6 pointer-events-none opacity-50"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold">
                  <FaHandshake className="text-sm" />
                  Institutional & Industry Alliances
                </div>
              </Reveal>

              <Reveal direction="up" delay={70}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-content">
                  Bridging Academia &amp;{" "}
                  <span className="text-brand">Industry Frontiers</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={140}>
                <p className="text-sm sm:text-base lg:text-lg text-content-secondary leading-relaxed max-w-2xl">
                  We actively collaborate with leading universities, colleges, and national skill
                  bodies through formal Memorandums of Understanding (MOUs). These partnerships
                  deliver hands-on student mentoring, curriculum co-design, and reliable placement funnels.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal direction="up" delay={200}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#collabsList"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    View All Partnerships <FaArrowRight className="text-xs" />
                  </a>
                  <a
                    href="#partnerCta"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-line bg-surface px-6 text-sm font-semibold text-content hover:bg-surface-sunken transition-colors"
                  >
                    Partner With Us
                  </a>
                </div>
              </Reveal>

              {/* Stat Counters */}
              <Reveal direction="up" delay={260}>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-line mt-2">
                  <div className="p-3 rounded-card border border-line bg-surface text-left shadow-sm">
                    <div className="text-xl sm:text-2xl font-bold text-content leading-tight">
                      15+
                    </div>
                    <div className="text-[11px] text-content-secondary font-medium">
                      Active MOUs
                    </div>
                  </div>
                  <div className="p-3 rounded-card border border-line bg-surface text-left shadow-sm">
                    <div className="text-xl sm:text-2xl font-bold text-content leading-tight">
                      25,000+
                    </div>
                    <div className="text-[11px] text-content-secondary font-medium">
                      Students Impacted
                    </div>
                  </div>
                  <div className="p-3 rounded-card border border-line bg-surface text-left shadow-sm">
                    <div className="text-xl sm:text-2xl font-bold text-content leading-tight">
                      100%
                    </div>
                    <div className="text-[11px] text-content-secondary font-medium">
                      Verified Credentials
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Graphic Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <Reveal direction="fade" className="w-full max-w-md lg:max-w-none">
                <div className="relative rounded-panel border border-line bg-surface p-4 sm:p-6 shadow-sm overflow-hidden">
                  <img
                    src={MouImageNew}
                    alt="Memorandum of Understanding Kre8ly"
                    className="w-full h-auto object-contain rounded-card"
                  />
                  <div className="absolute -bottom-2 -left-2 sm:left-4 rounded-card border border-line bg-surface p-3 shadow-md flex items-center gap-3">
                    <div className="w-9 h-9 rounded-control bg-brand-subtle text-brand flex items-center justify-center text-lg shrink-0">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-content">Accredited Engagements</p>
                      <p className="text-[10px] text-content-secondary">
                        Government &amp; University certified
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ================= COLLABORATIONS SHOWCASE ================= */}
        <Section id="collabsList" tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Formal Agreements"
            title="Our Strategic Collaborations"
            lead="Explore our network of esteemed educational partners and statutory organizations."
            align="center"
          />

          <div className="max-w-6xl mx-auto flex flex-col gap-6 mt-8">
            {collabs.map((item, index) => (
              <motion.article
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-panel border border-line bg-surface p-5 sm:p-7 shadow-sm hover:shadow-xl hover:border-brand/40 transition-all duration-300 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 overflow-hidden"
              >
                {/* Left: MOU Signing Photo */}
                <div className="w-full lg:w-72 aspect-[4/3] rounded-card border border-line bg-surface-sunken overflow-hidden shrink-0 relative shadow-inner">
                  <img
                    src={item.image}
                    alt={item.image_alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Verified MOU
                  </div>
                </div>

                {/* Middle: Content details */}
                <div className="flex-1 flex flex-col justify-between text-left min-w-0 w-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-control text-[11px] font-bold bg-brand-subtle text-brand border border-line uppercase tracking-wide">
                        {item.badge}
                      </span>
                      <span className="text-xs text-content-muted font-medium flex items-center gap-1">
                        <FaUniversity className="text-[10px]" />
                        {item.type}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-content leading-snug mb-2 group-hover:text-brand transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed max-w-2xl">
                      {item.content}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-line flex items-center justify-between">
                    <span className="text-xs font-semibold text-content-muted">
                      Shared Objectives: Skill Mastery &amp; Direct Career Placement
                    </span>
                  </div>
                </div>

                {/* Right: Institutional Logo Plaque */}
                <div className="w-full lg:w-48 h-24 lg:h-36 rounded-card border border-line bg-surface-sunken p-4 flex items-center justify-center shrink-0 self-stretch lg:self-auto">
                  <img
                    src={item.imageCompany}
                    alt={item.company_alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain filter dark:brightness-110 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* ================= INSTITUTIONAL PARTNERSHIP CTA ================= */}
        <Section id="partnerCta" tone="canvas" space="lg">
          <div className="max-w-5xl mx-auto rounded-panel border border-line bg-brand-subtle p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">
            {/* Ambient Back Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand/10 blur-3xl pointer-events-none" />

            <div className="max-w-2xl">
              <Eyebrow>Institutional Collaboration</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-content mt-2 mb-3">
                Want to partner with Kre8ly for your campus?
              </h2>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Connect your students with guaranteed experiential projects, industry mentors,
                and nationwide placement drives through a formal university MOU.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/contact-us"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus text-center"
              >
                Initiate MOU Dialogue <FaArrowRight className="text-xs" />
              </Link>
            </div>
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
}