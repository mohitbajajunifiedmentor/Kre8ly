import React from "react";
import Footer from "../component/Footer";
import Query from "../component/Query/Query";
import { press } from "../Utils/Press/Press";
import { Helmet } from "@/lib/helmet-compat";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import Reveal from "@/component/ui/Reveal";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";

const Press_Hero = "/assets/Press/press_hero.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const PressPage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>Press Releases &amp; Media Updates - Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Kre8ly press, media coverage, education news, Kre8ly updates, edtech news"
        />
        <meta
          name="description"
          content="Stay updated with the latest press releases, media coverage, and announcements from Kre8ly – your source for learning, growth, and career success."
        />
        <meta name="author" content="Kre8ly" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unifiedmentor.com/press-releases" />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <Section tone="canvas" space="lg" className="relative overflow-hidden pt-8 md:pt-14">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col gap-4 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold max-w-fit">
                <FaRegNewspaper className="text-xs" />
                Media &amp; Public Relations
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-content mb-2 leading-tight">
                Press Releases
              </h1>

              <p className="block text-xl lg:text-2xl text-brand font-medium">
                Stay updated with the latest announcements, milestones, and media highlights from Kre8ly.
              </p>

              <p className="text-sm md:text-base text-content-secondary mt-2 leading-relaxed max-w-2xl">
                Explore our press releases to see how we are transforming education, empowering students,
                and shaping careers with cutting-edge AI-driven learning and placement solutions.
              </p>
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
                  src={Press_Hero}
                  alt="Kre8ly in the press"
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-card shadow-inner"
                />
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ================= PRESS RELEASES GRID ================= */}
        <Section tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Media Coverage"
            title="Featured Stories &amp; Editorial Highlights"
            lead="Read through official publications, product launches, and company milestones covered by leading journalists."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6">
            {press.map((item, index) => (
              <motion.article
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardVariants}
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
                    {/* Publisher Logo / Cover Plate (Maintained white background for transparent logos) */}
                    <div className="flex h-40 md:h-48 items-center justify-center border-b border-line bg-white p-5 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.image_alt || item.title}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Information Area */}
                    <div className="p-5 md:p-6">
                      {item.Date && (
                        <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-control bg-brand-subtle text-brand border border-line text-xs font-semibold">
                          <FiCalendar className="text-[11px]" />
                          <span>{item.Date}</span>
                        </div>
                      )}

                      <h2 className="text-base md:text-lg font-bold text-content leading-snug mb-2 group-hover:text-brand transition-colors line-clamp-2">
                        {item.title}
                      </h2>

                      <p className="text-xs md:text-sm text-content-secondary leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="p-5 md:p-6 pt-0 mt-auto flex items-center justify-between border-t border-line/60 text-xs font-semibold text-brand">
                    <span>Read Publication</span>
                    <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              </motion.article>
            ))}
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

export default PressPage;