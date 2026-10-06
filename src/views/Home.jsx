import { useEffect, useState } from "react";
import { Helmet } from "@/lib/helmet-compat";
import { Link, useLocation } from "@/lib/router-compat";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import Reveal from "@/component/ui/Reveal";
import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import HomeHeroSection from "@/component/home/HomeHeroSection";
import AccreditationStrip from "@/component/home/AccreditationStrip";
import WhatWeHaveSection from "@/component/home/WhatWeHaveSection";
import WhyChooseSection from "@/component/home/WhyChooseSection";

import DreamJobSwiper from "@/component/DreamJobSwiper";
import Slider from "@/component/Slider";
import PlacementSupport from "@/component/MachineLearning/PlacementSupport";
import PlacementSupportSwiper from "@/component/PlacementSupportSwiper";
import ImpactGrid from "@/component/ImpactGrid";
import HomeSwiper from "@/component/HomeSwipper";
import PressSlider from "@/component/PressSlider/PressSlider";
import Faqs from "@/component/MachineLearning/Faqs";
import Forms from "@/component/Forms/Forms";
import Query from "@/component/Query/Query";
import ChatBot from "@/component/ChatBot/ChatBot";
import Footer from "@/component/Footer";
import MobileFooter from "@/component/MobileFooter";

import { DreamJobSection } from "@/Utils/DreamJobSection";
import { PlacementSupportInfo } from "@/Utils/MachineLearning/PlacementSupportInfo";
import { HomePageFaqs } from "@/Utils/Faqs/HomePageFaqs";
import { HOME_SCHEMA } from "@/Utils/homeSchema";

const NewsLetterBg = "/assets/Home/BGNewsLatter.svg";
const NewsLetterIdle = "/assets/Home/NewsLetterOne.svg";
const NewsLetterHover = "/assets/Home/NewsImageBig.svg";
const ReferAndEarn = "/assets/Home/referandearn.svg";

export default function Home({ darkMode, setDarkMode }) {
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [formDismissed, setFormDismissed] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Lead form after 1 minute, once per visit
  useEffect(() => {
    if (formDismissed) return;
    const timer = setTimeout(() => {
      setShowForm(true);
      setFormDismissed(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, [formDismissed]);

  return (
    <>
      <Helmet>
        <title>Online Certification Courses in India for Jobs | Kre8ly</title>
        <meta
          name="description"
          content="Job-oriented online certification courses and tech fellowships with live mentors, real projects and placement support. Built for learners across India."
        />
        <link rel="canonical" href="https://www.unifiedmentor.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Kre8ly: Online Certification Courses & Live Training"
        />
        <meta property="og:url" content="https://unifiedmentor.com/" />
        {HOME_SCHEMA.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <Forms setCloseForm={setShowForm} />
        </div>
      )}

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* 1. Hero Section */}
        <HomeHeroSection />

        {/* 2. Accreditation Strip */}
        <AccreditationStrip />

        {/* 3. What We Offer (Editorial Matrix) */}
        <WhatWeHaveSection />

        {/* 4. Why Choose Kre8ly (Sticky Split) */}
        <WhyChooseSection />

        {/* 5. What You'll Gain Grid */}
        <Section tone="canvas" space="lg">
          <SectionHeader
            eyebrow="What you get"
            title="What You'll Gain from Our Practical Skill Development Courses"
            lead="You leave with a certificate, but the bigger gain is a few finished projects, more confidence in interviews and someone to ask when you get stuck."
          />

          <ul className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mt-6">
            {DreamJobSection.map((feature, i) => (
              <motion.li
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: Math.min(i, 5) * 0.08, duration: 0.45 }}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-card border border-line bg-surface p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-md lg:p-8">
                  <span
                    aria-hidden="true"
                    className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-control bg-surface-sunken transition-transform duration-300 group-hover:scale-110"
                  >
                    <img
                      src={feature.imgSrc}
                      alt=""
                      loading="lazy"
                      className="h-8 w-8 object-contain"
                    />
                  </span>

                  <h3 className="text-base font-semibold leading-normal tracking-[-0.01em] text-content lg:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-content-secondary">
                    {feature.description}
                  </p>
                </article>
              </motion.li>
            ))}
          </ul>

          <div className="md:hidden mt-6">
            <DreamJobSwiper />
          </div>
        </Section>

        {/* 5.1 Redesigned Section: Fellowships & Upskilling Pathways */}
        <Section tone="sunken" space="lg">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Card 1: Fellowships */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl lg:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl transition-opacity duration-300 group-hover:bg-brand/20"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                      For Freshers &amp; Students
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-normal tracking-tight text-content md:leading-[1.35] lg:text-3xl">
                    Tech Fellowship Programs for Learning on Real Work
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-content-secondary">
                    Our fellowships sit between a course and a job. You get tasks, deadlines and mentor feedback, and you finish with work you can point to. Tracks include data analyst, financial analyst, business analyst, digital marketing and data science, so a commerce, BBA or engineering graduate can find a fit without moving to a metro.
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-line/60">
                  <Link
                    to="/fellowships"
                    className="group/btn inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand px-7 text-sm font-semibold text-brand-fg shadow-sm transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    Explore Fellowships
                    <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 2: Working Professionals */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl lg:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-surface-sunken blur-3xl transition-opacity duration-300"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-sunken px-3 py-1 text-xs font-semibold uppercase tracking-wider text-content-muted">
                      Flexible &amp; Self-Paced
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold leading-normal tracking-tight text-content md:leading-[1.35] lg:text-3xl">
                    Courses for Working Professionals Who Want to Switch or Upskill
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-content-secondary">
                    If you already have a job in Nagpur, Surat or Bhubaneswar, you probably can't log in for a full day of classes. Recorded sessions and flexible online learning let you study after work and move into a new role at your own speed.
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-line/60">
                  <Link
                    to="/courses"
                    className="group/btn inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface px-7 text-sm font-semibold text-content transition-all duration-200 hover:bg-surface-sunken hover:border-brand/40 focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    View All Courses
                    <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* 6. Hiring Partners */}
        <Section tone="sunken" space="md" bleed>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Hiring partners"
              title="Kre8ly Courses Have Helped Learners Join 100+ Product Companies"
              lead="Here are some of our learners and where they work now, from Accenture and TCS to PwC and Amazon."
              align="center"
            />
          </div>
          <Slider darkMode={darkMode} />
        </Section>

        {/* ---------- placement support / hiring partners ---------- */}
        <Section tone="canvas" space="sm" bleed>
          <Reveal direction="up">
            <PlacementSupport
              PlacementSupportInfo={PlacementSupportInfo}
              darkMode={darkMode}
            />
          </Reveal>
          <Reveal direction="up">
            <PlacementSupportSwiper
              PlacementSupportInfo={PlacementSupportInfo}
              darkMode={darkMode}
            />
          </Reveal>
        </Section>

        {/* ---------- our impact ---------- */}
        <Section tone="wash" space="sm">
          <SectionHeader
            eyebrow="Our impact"
            title="Join a Learning Network Built Around Skill Development Courses"
            align="center"
          />
          <Reveal direction="up">
            <ImpactGrid />
          </Reveal>
        </Section>

        {/* 9. Reviews & Social Proof */}
        <Section id="Reviews" tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Reviews"
            title="Kre8ly Reviews: What Learners Say on Google"
            aside={
              <p className="flex items-center gap-3">
                <span aria-hidden="true" className="flex text-warning">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="h-4 w-4" />
                  ))}
                </span>
                <span className="text-sm text-content-secondary">
                  <span className="font-bold text-content">4.7 / 5</span> from
                  2,000+ reviews
                </span>
              </p>
            }
          />
          <HomeSwiper darkMode={darkMode} />
        </Section>

        {/* 10. Press Slider */}
        <Section tone="canvas" space="lg">
          <PressSlider />
        </Section>

        {/* ---------- refer + newsletter ---------- */}
        <Section tone="sunken" space="lg">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch max-w-7xl mx-auto">
            {/* Left Panel: Refer & Earn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-panel border border-line bg-brand-subtle p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md md:p-8"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Refer &amp; earn
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-normal tracking-[-0.01em] text-content md:leading-[1.3] md:text-2xl">
                  Bring a friend,
                  <br />
                  earn rewards
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-content-secondary">
                  Share Kre8ly with someone who is job hunting — you both get
                  something back.
                </p>

                <Link
                  to="/refer-and-earn"
                  className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-control bg-brand px-5 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                >
                  Get started &rarr;
                </Link>
              </div>

              <img
                src={ReferAndEarn}
                alt="Refer and Earn"
                aria-hidden="true"
                loading="lazy"
                className="mt-6 w-36 self-end pt-4 transition-transform duration-500 group-hover:-translate-y-1 md:w-44"
              />
            </motion.div>

            {/* Right Panel: Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-2 relative flex h-full flex-col items-center gap-6 overflow-hidden rounded-panel border border-line bg-surface p-7 md:flex-row-reverse md:p-10 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Background SVG texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 dark:hidden"
                style={{ backgroundImage: `url(${NewsLetterBg})` }}
              />

              {/* Floating Animated Illustration */}
              <figure className="group relative z-10 w-full max-w-[200px] shrink-0 md:w-2/5 md:max-w-none">
                <img
                  src={NewsLetterIdle}
                  alt="Newsletter preview"
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full -scale-x-100 object-contain transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={NewsLetterHover}
                  alt="Newsletter preview hover"
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full -scale-x-100 object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </figure>

              {/* Newsletter Content */}
              <div className="relative z-10 w-full text-center md:text-left">
                <Eyebrow className="justify-center md:justify-start">
                  Newsletter
                </Eyebrow>

                <h3 className="mt-3 text-2xl font-semibold leading-normal tracking-[-0.01em] text-content md:leading-[1.3] md:text-3xl">
                  Get Job Search Tips From Our Career Newsletter
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-content-secondary md:text-base">
                  This replaces the current heading, &quot;Find Out Job Search With Expert Career Guidance News Letter&quot;.
                </p>

                <a
                  href="https://www.linkedin.com/newsletters/career-navigator-7226442640328687616/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                >
                  Subscribe free
                </a>

                <p className="mt-4 text-xs text-content-muted">
                  Trusted by 50k+ Customers | 4.7/5 • 2k+ Reviews
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* 12. FAQ Section */}
        <Section tone="canvas" space="lg">
          <div className="flex justify-center max-w-4xl mx-auto">
            <Faqs varient="home" Faqs={HomePageFaqs} darkMode={darkMode} />
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