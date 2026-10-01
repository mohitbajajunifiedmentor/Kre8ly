import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Query from "../component/Query/Query";
import { press } from "../Utils/Press/Press";
import { Link } from "@/lib/router-compat";
import { Helmet } from "@/lib/helmet-compat";
import MobileFooter from "../component/MobileFooter";
import HeroSection from "../component/AboutUs/HeroSection";
import TeamSection from "../component/TeamSection";
import { teams } from "../Utils/TeamData/TeamData";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

const founder1 = "/assets/AboutUs/ParasGoverJPG.jpg";
const Mentor5 = "/assets/Mentors/mentor5.jpeg";
const knowLedge = "/assets/AboutUs/Knowledge.png";
const Training = "/assets/AboutUs/Training.png";
const Leader = "/assets/AboutUs/Leader.png";
const Guiderpost = "/assets/AboutUs/Guidepost.png";
const Cultural = "/assets/AboutUs/CulturalImage.png";
const CulturalMobile = "/assets/AboutUs/CulturalMobile.png";
const culturalLight = "/assets/AboutUs/culturalLight.png";
const ImageMobile = "/assets/AboutUs/ImageMobile.svg";

// Poora original text bina kisi truncation ke
const founders = [
  {
    name: "Paras Grover",
    position: "Founder and Visionary Leader",
    roleBadge: "Leadership & Growth",
    description:
      "Paras Grover, the founder of Kre8ly and a visionary leader, is another example of greatness in action. Paras Grover has 7+ years of industry experience in business development and marketing strategies. Along the way, he has experienced personal achievement, but his love for imparting information and skills has also inspired aspiring businesspeople, inspiring them to achieve their own successes.",
    image: founder1,
    image_alt:
      "Paras Grover – Founder and Visionary Leader at Kre8ly, expert in business development and marketing strategies",
  },
  {
    name: "Sanket Patil",
    position: "Co-Founder & Operational Strategist",
    roleBadge: "Operations & Tech Strategy",
    description:
      "In the dynamic landscape of Kre8ly, Sanket Patil stands out as the Founder and Chief Operating Officer (COO), driving seamless internal management and operational efficiency across the company. His adeptness at leading cross-functional teams, fostering a productive work environment, and ensuring optimal utilization of resources reflects his unwavering commitment to Kre8ly's overall success. With a strong background in computer science and information technology, Sanket brings both strategic thinking and executional excellence to the forefront of the company’s growth.",
    image: Mentor5,
    image_alt:
      "Sanket Patil – Co-Founder and Operational Strategist at Kre8ly, leading internal operations with strategic excellence",
  },
];

const JOURNEY = [
  {
    phase: "01",
    title: "The Spark & MVP Creation (July 2022 - January 2023)",
    description:
      "Identifying the problem: Why internships fail, Campus visits, surveys of 500+ students, MVP launch with guided internships and mentor feedback.",
  },
  {
    phase: "02",
    title: "Official Launch & Early Impact (July 2023 - November 2023)",
    description:
      "Kre8ly goes live with three tracks, First 100+ students join, platform enhancements begin, Introduction of Dashboard 2.0 with progress tracking.",
  },
  {
    phase: "03",
    title: "Expansion & Career Support (March 2024)",
    description:
      "Launch of live mentorship sessions. Weekly career calls and dedicated placement support. Hundreds of students secure internships and jobs.",
  },
  {
    phase: "04",
    title: "Building Partnerships & Job Platform (May 2024 - July 2024)",
    description:
      "MoUs with colleges and 20+ companies. Introduction of Unified Jobs for verified job and internship listings.",
  },
  {
    phase: "05",
    title: "Tools for Career Success (September 2024)",
    description:
      "Launch of AI Resume Builder and CV Score Checker. Focus on enhancing student profiles for recruiter visibility.",
  },
  {
    phase: "06",
    title: "Skill Paths & Thriving Community (January 2025 - Present)",
    description:
      "Launch of structured learning paths in HR, Data Analysis, Marketing, and Finance. Reached a community of 100,000+ active students across India.",
  },
];

const values = [
  {
    title: "Empowering Futures through Knowledge",
    description:
      "We strive to provide transformative education that equips individuals to thrive in a rapidly changing technological landscape.",
    icon: knowLedge,
    icon_alt: "Empowering Futures through Knowledge",
  },
  {
    title: "Utilizing Most Effective Training Methods",
    description:
      "Achieve more with fewer resources. We have always grown through meticulous planning and efficient execution.",
    icon: Training,
    icon_alt: "Utilizing Most Effective Training Methods",
  },
  {
    title: "Developing Tomorrow's Tech Leaders",
    description:
      "Focus on your craft, continuously learn, and be proud of your work.",
    icon: Leader,
    icon_alt: "Developing Tomorrow's Tech Leaders",
  },
  {
    title: "Guiding Excellence with Mentorship",
    description:
      "Realize greater potential with mentorship. We have always thrived through meticulous planning and efficient execution.",
    icon: Guiderpost,
    icon_alt: "Guiding Excellence with Mentorship",
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AboutPage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>About Kre8ly | Our Mission &amp; Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Kre8ly, about Kre8ly, about us, Kre8ly team, Kre8ly mission"
        />
        <meta
          name="description"
          content="Discover the story behind Kre8ly. Meet the team, explore our journey, and see how we're redefining global tech hiring with innovation and integrity."
        />
        <meta name="author" content="Kre8ly" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifiedmentor.com/about" />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <HeroSection />

        {/* ================= FOUNDERS SECTION ================= */}
        <Section tone="canvas" space="lg">
          <SectionHeader
            eyebrow="Visionary Leaders"
            title="Meet our Founders"
            lead="Visionaries Behind Kre8ly, empowering learners to thrive in high-impact global careers."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-6">
            {founders.map((founder, index) => (
              <motion.article
                key={founder.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardMotion}
                whileHover={{ y: -4 }}
                className="group relative rounded-panel border border-line bg-surface p-7 sm:p-9 shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left h-full"
              >
                {/* Profile Avatar */}
                <div className="relative shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-line bg-surface-sunken p-1 shadow-sm">
                    <img
                      src={founder.image}
                      alt={founder.image_alt}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-brand text-brand-fg text-xs font-bold flex items-center justify-center border-2 border-surface shadow-sm">
                    ★
                  </span>
                </div>

                {/* Details (No truncation, full text visible) */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2.5 py-0.5 rounded-control text-[11px] font-semibold uppercase tracking-wider bg-brand-subtle text-brand border border-line mb-2">
                    {founder.roleBadge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-content leading-snug">
                    {founder.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-brand">
                    {founder.position}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {founder.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* ================= TEAM SECTION ================= */}
        <Section tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Our People"
            title="The Team Behind Every Student Success"
            lead="Explore the mentors, product builders, and industry operators powering student transformation."
            align="center"
          />

          <div className="max-w-7xl mx-auto mt-6">
            {teams.map((group, index) => (
              <TeamSection
                key={index}
                title={group.title}
                members={group.members}
                darkMode={darkMode}
              />
            ))}
          </div>
        </Section>

        {/* ================= JOURNEY (TIMELINE) ================= */}
        <Section tone="canvas" space="lg">
          <SectionHeader
            eyebrow="Milestones"
            title="Our Journey"
            lead="From a spark of inspiration to a thriving learning ecosystem — here’s how Kre8ly came to life."
            align="center"
          />

          {/* Clean Responsive Cards (Poora text bina kisi ellipsis ke) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6">
            {JOURNEY.map((item, index) => (
              <motion.article
                key={item.phase}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardMotion}
                whileHover={{ y: -4 }}
                className="group relative rounded-card border border-line bg-surface p-6 sm:p-7 shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left h-full"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-brand bg-brand-subtle px-2.5 py-1 rounded-control border border-line">
                      Phase {item.phase}
                    </span>
                    <span className="text-xs font-bold text-content-muted">0{index + 1}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-content leading-snug mb-3 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-line flex items-center gap-1.5 text-[11px] font-semibold text-brand">
                  <FaCheckCircle className="text-[10px]" />
                  <span>Key Milestone Realized</span>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* ================= VALUES SECTION ================= */}
        <Section tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Core Principles"
            title="Our Values"
            lead="Our biggest achievement is the company culture we have cultivated. Culture is the invisible force that unites us in achieving our mission."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardMotion}
                whileHover={{ y: -4 }}
                className="group rounded-card border border-line bg-surface p-6 shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between h-full"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-control bg-surface-sunken border border-line flex items-center justify-center mb-4 p-3 transition-transform duration-300 group-hover:scale-110 shadow-inner">
                    <img
                      src={value.icon}
                      alt={value.icon_alt}
                      loading="lazy"
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <h3 className="text-base md:text-lg font-semibold mb-2 text-content leading-snug">
                    {value.title}
                  </h3>

                  <p className="text-xs md:text-sm text-content-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* ================= CULTURE MANIFESTO ================= */}
        <Section tone="canvas" space="lg">
          <SectionHeader
            eyebrow="Culture Ethos"
            title="Culture Manifesto"
            lead="Our biggest achievement is the company culture we have cultivated. Culture is the invisible force that unites us in achieving our mission."
            align="center"
          />

          <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-4">
            <figure className="hidden md:flex items-center justify-center w-full mb-8">
              <img
                src={darkMode ? Cultural : culturalLight}
                alt="Culture Manifesto at Kre8ly"
                className="w-full max-w-2xl h-auto rounded-card border border-line shadow-sm"
              />
            </figure>

            <figure className="md:hidden flex items-center justify-center w-full mb-6">
              <img
                src={darkMode ? CulturalMobile : ImageMobile}
                alt="Culture Manifesto at Kre8ly"
                className="w-full max-w-sm h-auto rounded-card border border-line shadow-sm"
              />
            </figure>

            {/* Editorial Manifesto Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-panel border border-line bg-surface p-6 sm:p-8 max-w-2xl shadow-sm text-center"
            >
              <FaQuoteLeft className="text-2xl text-brand/30 mx-auto mb-3" />
              <p className="font-semibold text-sm md:text-base text-content italic leading-relaxed">
                “We are resilient, always moving forward and making consistent progress.”
              </p>
              <p className="mt-2 text-xs md:text-sm text-content-secondary italic">
                “We are not a unicorn, we are a camel. We are resilient, always in forward motion and making slow endless progress.”
              </p>
            </motion.div>
          </div>
        </Section>

        {/* ================= PRESS RELEASES ================= */}
        <Section tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Media Highlights"
            title="Press Releases"
            lead="Stay updated with the latest announcements, milestones, and media highlights from Kre8ly."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6">
            {press.slice(0, 3).map((item, index) => (
              <motion.article
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardMotion}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-full rounded-card border border-line bg-surface overflow-hidden shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div>
                    {/* Consistent white background so partner logos stay clean */}
                    <div className="flex h-36 md:h-44 items-center justify-center border-b border-line bg-white p-4 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.image_alt || item.title}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5 md:p-6">
                      {item.Date && (
                        <div className="inline-flex items-center gap-1.5 mb-2 px-2.5 py-0.5 rounded-control bg-brand-subtle text-brand border border-line text-[11px] font-semibold">
                          <FiCalendar className="text-[10px]" />
                          <span>{item.Date}</span>
                        </div>
                      )}

                      <h3 className="text-base font-semibold text-content leading-snug mb-2 group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 pt-0 mt-auto flex items-center justify-between border-t border-line/60 text-xs font-semibold text-brand">
                    <span>Read Publication</span>
                    <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          <div className="flex items-center justify-center mt-10">
            <Link
              to="/press-releases"
              className="inline-flex h-11 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
            >
              Explore More Releases &rarr;
            </Link>
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

export default AboutPage;