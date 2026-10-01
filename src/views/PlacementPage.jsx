import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Slider from "../component/Slider";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import Reveal from "@/component/ui/Reveal";

import { NewHallOfFrameInfos } from "../Utils/HallOfFrameInfos";
import { Link } from "@/lib/router-compat";
import { Helmet } from "@/lib/helmet-compat";
import {
  FaArrowRight,
  FaLinkedin,
  FaStar,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Static Assets
const Card1 = "/assets/Placement/Card1.png";
const Card2 = "/assets/Placement/Card2.png";
const Card3 = "/assets/Placement/Card3.png";
const Card4 = "/assets/Placement/Card4.png";
const HeroImage1 = "/assets/Placement/Index1.png";
const HeroImage2 = "/assets/Placement/Index2.png";
const HeroImage3 = "/assets/Placement/Index3.png";
const HeadImage = "/assets/Placement/HeadImage.png";
const ProfilePictures = "/assets/Home/ProfilePicturesNew.svg";
const Idea = "/assets/Placement/Idea.png";
const Grid1 = "/assets/Placement/Grid1.png";
const Grid2 = "/assets/Placement/Grid2.png";
const Grid3 = "/assets/Placement/Grid3.png";
const Grid4 = "/assets/Placement/Grid4.png";

const INITIAL_CARD_COUNT = 8;

export default function PlacementPage({ darkMode, setDarkMode }) {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_CARD_COUNT);

  const totalCards = NewHallOfFrameInfos?.length || 0;
  const isExpanded = visibleCount >= totalCards;

  const handleToggleCards = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_CARD_COUNT);
      document.getElementById("placedStudents")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount(totalCards);
    }
  };

  const cardsInfo = [
    {
      img: Card1,
      title: "Technology & Software",
      category: "Tech",
      tag: "High Demand",
      desc: "Software engineering, Fullstack, AI/ML, Cloud computing, and product engineering tracks.",
    },
    {
      img: Card2,
      title: "Finance & Fintech",
      category: "Finance",
      tag: "Top Packages",
      desc: "Investment analysis, quantitative risk management, financial forecasting, and banking tech.",
    },
    {
      img: Card3,
      title: "Strategy & Consulting",
      category: "Consulting",
      tag: "Global Roles",
      desc: "Structured business problem-solving, tech consulting, and corporate business advisory.",
    },
    {
      img: Card4,
      title: "Manufacturing & SCM",
      category: "Operations",
      tag: "Rapid Growth",
      desc: "Next-gen smart logistics, operations excellence, automotive tech, and supply chain design.",
    },
  ];

  const heroStats = [
    { value: "500+", label: "Industry Mentors", icon: HeroImage1 },
    { value: "10k+", label: "Active Learners", icon: HeroImage2 },
    { value: "20k+", label: "Successful Hires", icon: HeroImage3 },
  ];

  const highlights = [
    {
      icon: Grid1,
      title: "Structured Curriculum",
      desc: "Step-by-step tracks curated with top tier engineering & product managers.",
      badge: "Industry Aligned",
    },
    {
      icon: Grid2,
      title: "100% Flexible & Remote",
      desc: "Access recorded lectures, live sessions, and doubt support from any device.",
      badge: "Self-Paced",
    },
    {
      icon: Grid3,
      title: "1-on-1 Mock Interviews",
      desc: "Realistic live mock interviews with real hiring managers before final placement rounds.",
      badge: "Confidence First",
    },
    {
      icon: Grid4,
      title: "Recognized Certification",
      desc: "Earn an industry-accredited credential verifiable on LinkedIn and corporate databases.",
      badge: "Accredited",
    },
  ];

  const filterTabs = ["All", "Tech", "Finance", "Consulting", "Operations"];

  const filteredCards =
    activeTab === "All"
      ? cardsInfo
      : cardsInfo.filter((item) => item.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Explore Placement Opportunities | Kre8ly</title>
        <meta
          name="description"
          content="Get placed at top companies like Amazon, TCS, Accenture, Natixis & more with Kre8ly’s placement cell."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.unifiedmentor.com/placement" />
      </Helmet>

      <main className="w-full bg-canvas text-content">
        {/* ================= HERO SECTION ================= */}
        <Section tone="canvas" space="lg" className="overflow-hidden pt-8 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  Over 100+ Hiring Partners Actively Recruiting
                </div>
              </Reveal>

              <Reveal direction="up" delay={70}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-content">
                  Turning Ambition Into{" "}
                  <span className="text-brand">
                    High-Growth Careers
                  </span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={140}>
                <p className="text-sm sm:text-base lg:text-lg text-content-secondary leading-relaxed max-w-2xl">
                  Bridge the gap between education and employment. Gain direct access to
                  tailored mentoring, verified project portfolios, and guaranteed interview
                  opportunities.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal direction="up" delay={200}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#placedStudents"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    View Placed Alumni <FaArrowRight className="text-xs" />
                  </a>
                  <a
                    href="#industries"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-line bg-surface px-6 text-sm font-semibold text-content hover:bg-surface-sunken transition-colors"
                  >
                    Browse Industries
                  </a>
                </div>
              </Reveal>

              {/* Stat Counters with Theme Contrast */}
              <Reveal direction="up" delay={260}>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-line">
                  {heroStats.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row items-center sm:items-start gap-2.5 p-3 rounded-card border border-line bg-surface shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-control bg-surface-sunken p-2 flex items-center justify-center shrink-0 border border-line">
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-full h-full object-contain dark:brightness-125"
                        />
                      </div>
                      <div className="text-center sm:text-left min-w-0">
                        <div className="text-base sm:text-lg font-bold text-content leading-tight">
                          {item.value}
                        </div>
                        <div className="text-[11px] text-content-secondary font-medium truncate">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Social Proof Strip */}
              <div className="inline-flex items-center gap-3 text-content-secondary text-xs sm:text-sm">
                <img
                  src={ProfilePictures}
                  alt="Placed Students"
                  className="h-7 w-auto object-contain"
                />
                <span>
                  Trusted by{" "}
                  <strong className="text-content font-semibold">100,000+</strong> learners
                  nationwide
                </span>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <Reveal direction="fade" className="w-full max-w-md lg:max-w-none">
                <div className="relative rounded-panel border border-line bg-surface p-4 sm:p-5 shadow-sm">
                  <img
                    src={HeadImage}
                    alt="Kre8ly Placement Opportunities"
                    className="w-full h-auto object-contain rounded-card"
                  />

                  {/* Floating Placement Pill */}
                  <div className="absolute -bottom-4 -left-2 sm:left-4 rounded-card border border-line bg-surface p-3 shadow-md flex items-center gap-3">
                    <div className="w-9 h-9 rounded-control bg-brand-subtle text-brand flex items-center justify-center text-lg shrink-0">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-content">93.4% Placement Rate</p>
                      <p className="text-[10px] text-content-secondary">
                        Within 6 months of completion
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ================= HIRING PARTNERS LOGO WALL ================= */}
        <Section tone="sunken" space="md" bleed>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Hiring partners"
              title="Our learners secure roles at 100+ product & service leaders"
              align="center"
            />
          </div>
          <Reveal direction="fade">
            <Slider darkMode={darkMode} />
          </Reveal>
        </Section>

        {/* ================= INDUSTRIES SECTION ================= */}
        <Section id="industries" tone="canvas" space="lg">
          <SectionHeader
            eyebrow="Career Tracks"
            title="Industries Offering Placements"
            lead="Curricula mapped to active hiring criteria and verified project portfolios."
            align="center"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-control text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-brand text-brand-fg shadow-sm"
                    : "border border-line bg-surface text-content-secondary hover:text-content hover:bg-surface-sunken"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCards.map((item, index) => (
              <Reveal key={index} direction="up" delay={index * 50}>
                <article className="group h-full flex flex-col justify-between rounded-card border border-line bg-surface p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-control bg-surface-sunken p-2.5 flex items-center justify-center border border-line shrink-0">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-control"
                        />
                      </div>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-brand-subtle text-brand border border-line">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold leading-snug text-content mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-content-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-line flex items-center justify-between text-xs font-semibold text-brand">
                    <span>Explore Track</span>
                    <FaArrowRight className="transform transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ================= ALUMNI WALL OF FAME (WITH SEE MORE TOGGLE) ================= */}
        <Section id="placedStudents" tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Hall of Fame"
            title="Meet Our Successfully Placed Alumni"
            lead="Real stories from graduates who cracked high-impact roles through our mentoring pipeline."
            align="center"
          />

          {/* Desktop/Tablet Compact Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {NewHallOfFrameInfos?.slice(0, visibleCount).map((data, index) => (
              <Reveal key={index} direction="up" delay={Math.min(index, 7) * 40}>
                <article className="h-full flex flex-col justify-between rounded-card border border-line bg-surface p-4 shadow-sm hover:border-brand/40 transition-all min-w-0 overflow-hidden">
                  <div className="min-w-0">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5 min-w-0">
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <img
                          src={data.profile.image}
                          alt={data.profile.alt || data.profile.name}
                          className="w-10 h-10 min-w-[2.5rem] rounded-full object-cover shrink-0 border border-line bg-surface-sunken"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-bold text-content truncate">
                            {data.profile.name}
                          </h3>
                          <p className="text-[11px] text-content-secondary truncate">
                            {data.company?.position}
                          </p>
                          <p className="text-[11px] font-semibold text-brand truncate">
                            @{data.company?.name}
                          </p>
                        </div>
                      </div>

                      {data.linkedinLink?.url && (
                        <a
                          href={data.linkedinLink.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-content-muted hover:text-brand transition-colors shrink-0 p-1"
                          title="LinkedIn Profile"
                        >
                          <FaLinkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Testimonial Quote */}
                    <div className="bg-surface-sunken rounded-control p-2.5 border border-line mb-2.5">
                      <p className="text-xs text-content-secondary italic leading-relaxed line-clamp-3 break-words">
                        "{data.description.text}"
                      </p>
                    </div>
                  </div>

                  {/* Rating & Verification */}
                  <div className="flex items-center justify-between pt-2 border-t border-line text-[11px]">
                    <div className="flex items-center gap-0.5 text-warning text-xs shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1 font-medium text-brand bg-brand-subtle px-2 py-0.5 rounded-full border border-line text-[10px] shrink-0">
                      <FaCheckCircle className="text-[9px]" />
                      <span>Verified</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Toggle Button for Desktop */}
          {totalCards > INITIAL_CARD_COUNT && (
            <div className="hidden sm:flex justify-center items-center mt-8">
              <button
                onClick={handleToggleCards}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-control font-semibold text-xs sm:text-sm bg-surface text-content border border-line hover:bg-surface-sunken shadow-sm transition-all"
              >
                {isExpanded ? (
                  <>
                    <span>Show Less</span>
                    <FaChevronUp className="text-xs" />
                  </>
                ) : (
                  <>
                    <span>See More Alumni ({totalCards - visibleCount} more)</span>
                    <FaChevronDown className="text-xs" />
                  </>
                )}
              </button>
            </div>
          )}

          {/* Mobile Swiper View */}
          <div className="sm:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={12}
              slidesPerView={1.15}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              className="pb-8"
            >
              {NewHallOfFrameInfos?.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-surface rounded-card border border-line p-4 flex flex-col justify-between shadow-sm min-h-[210px] overflow-hidden">
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <img
                            src={data.profile.image}
                            alt={data.profile.alt || data.profile.name}
                            className="w-10 h-10 min-w-[2.5rem] rounded-full object-cover shrink-0 border border-line"
                          />
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-bold text-content truncate">
                              {data.profile.name}
                            </h3>
                            <p className="text-[11px] text-content-secondary truncate">
                              {data.company?.position}
                            </p>
                            <p className="text-[11px] font-semibold text-brand truncate">
                              @{data.company?.name}
                            </p>
                          </div>
                        </div>
                        {data.linkedinLink?.url && (
                          <a
                            href={data.linkedinLink.url}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 p-1"
                          >
                            <FaLinkedin className="w-4 h-4 text-content-muted" />
                          </a>
                        )}
                      </div>

                      <p className="text-xs text-content-secondary italic mb-2 bg-surface-sunken p-2.5 rounded-control line-clamp-3 break-words border border-line">
                        "{data.description.text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-line">
                      <div className="flex text-warning text-[10px] gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span className="text-[10px] text-brand font-medium">
                        ✓ Verified
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Section>

        {/* ================= WHY CHOOSE OUR PROGRAM ================= */}
        <Section tone="canvas" space="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Main Brand Card */}
            <div className="lg:col-span-5 rounded-panel border border-line bg-brand-subtle p-7 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div>
                <Eyebrow>Career Accelerator</Eyebrow>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-content md:text-3xl">
                  Why Leading Candidates Choose Kre8ly
                </h3>
                <p className="mt-2.5 text-sm text-content-secondary leading-relaxed">
                  We don't just teach code or business theory; we prepare you for real-world day-one
                  delivery with dedicated recruitment cycles.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-line mt-6">
                <img
                  src={Idea}
                  alt="Mentorship"
                  className="w-20 h-20 object-contain"
                />
                <Link
                  to="/"
                  className="inline-flex h-11 items-center gap-2 rounded-control bg-brand px-5 text-sm font-semibold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                >
                  Enroll Now <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* 4 Feature Matrix */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((feat, index) => (
                <article
                  key={index}
                  className="bg-surface p-5 rounded-card border border-line hover:border-brand/40 shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-control bg-surface-sunken p-2 border border-line flex items-center justify-center shrink-0">
                        <img
                          src={feat.icon}
                          alt={feat.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-surface-sunken text-content-muted border border-line">
                        {feat.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-content mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-content-secondary leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </article>
              ))}
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