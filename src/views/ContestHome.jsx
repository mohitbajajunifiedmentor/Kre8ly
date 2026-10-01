import React, { useEffect, useState, useRef } from "react";
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

import { CiClock2 } from "react-icons/ci";
import { 
  FaArrowRight, 
  FaGift, 
  FaAward, 
  FaChalkboardTeacher, 
  FaUsers, 
  FaRocket,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Assets
const HeroImage = "/assets/Contest/HeroNew.svg";
const Grid1 = "/assets/Contest/ImageGrid1.svg";
const Grid2 = "/assets/Contest/ImageGrid2.svg";
const Grid3 = "/assets/Contest/ImageGrid3.svg";
const Grid4 = "/assets/Contest/ImageGrid4.svg";
const Icon1 = "/assets/Contest/Icon1.png";
const Icon2 = "/assets/Contest/Icon2.png";
const Icon3 = "/assets/Contest/Icon3.png";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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

export default function ContestHome({ darkMode, setDarkMode }) {
  const [totalSeconds, setTotalSeconds] = useState(1 * 24 * 60 * 60);
  const [time, setTime] = useState({ hours: "24", minutes: "00", seconds: "00" });
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 0) return 1 * 24 * 60 * 60;

        const hours = Math.floor(prev / 3600);
        const minutes = Math.floor((prev % 3600) / 60);
        const seconds = prev % 60;

        setTime({
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      icon: <FaChalkboardTeacher className="text-xl" />,
      title: "5+ Masterclasses & Webinars",
      highlight: "INTERACT",
      desc: "Live interactive sessions with seasoned leaders for exponential career clarity.",
      badge: "Mentorship",
    },
    {
      icon: <FaRocket className="text-xl" />,
      title: "15+ High-Impact Contests",
      highlight: "EXECUTE",
      desc: "Master modern marketing, outreach tactics, and community development.",
      badge: "Skill Building",
    },
    {
      icon: <FaGift className="text-xl" />,
      title: "₹ 7 Lacs Cash Rewards",
      highlight: "EARN",
      desc: "Earn performance-linked cash stipends, gadgets, and valuable goodies.",
      badge: "Rewards Pool",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Become a Campus Ambassador | Kre8ly Internship Program</title>
        <meta
          name="description"
          content="Join Kre8ly's Campus Ambassador Program! Gain leadership skills, earn cash rewards, and lead your college community."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://unifiedmentor.com/campus-ambassador" />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <Section tone="canvas" space="lg" className="relative overflow-hidden pt-8 md:pt-14">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  Campus Ambassador Cohort 2026
                </div>
              </Reveal>

              <Reveal direction="up" delay={70}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-content">
                  Be the Face of <br />
                  <span className="text-brand">Kre8ly in Your College</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={140}>
                <p className="text-sm sm:text-base lg:text-lg text-content-secondary leading-relaxed max-w-2xl">
                  Represent Kre8ly on your campus. Cultivate real-world marketing and leadership
                  chops, unlock exclusive cash bounties, and bypass regular entry filters for direct
                  internship tracks.
                </p>
              </Reveal>

              {/* Countdown Timer Display */}
              <Reveal direction="up" delay={180}>
                <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-card border border-line bg-surface max-w-fit shadow-sm">
                  <div className="flex items-center gap-2 text-content-secondary text-xs sm:text-sm font-medium">
                    <CiClock2 className="text-lg text-brand" />
                    <span>Direct Entry Closes In:</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-sm sm:text-base font-bold text-brand">
                    <span className="px-2 py-0.5 rounded bg-brand-subtle border border-line">
                      {time.hours}h
                    </span>
                    <span>:</span>
                    <span className="px-2 py-0.5 rounded bg-brand-subtle border border-line">
                      {time.minutes}m
                    </span>
                    <span>:</span>
                    <span className="px-2 py-0.5 rounded bg-brand-subtle border border-line">
                      {time.seconds}s
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Action Button */}
              <Reveal direction="up" delay={220}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://forms.gle/Cv39xjPXrpF3ky216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    Apply Now for Free <FaArrowRight className="text-xs" />
                  </a>
                  <a
                    href="#programDetails"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-line bg-surface px-6 text-sm font-semibold text-content hover:bg-surface-sunken transition-colors"
                  >
                    Explore Perks
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <Reveal direction="fade" className="w-full max-w-md lg:max-w-none">
                <div className="relative rounded-panel border border-line bg-surface p-4 sm:p-6 shadow-sm overflow-hidden">
                  <img
                    src={HeroImage}
                    alt="Campus Ambassador Illustration"
                    className="w-full h-auto object-contain rounded-card"
                  />
                  <div className="absolute -bottom-2 -left-2 sm:left-4 rounded-card border border-line bg-surface p-3 shadow-md flex items-center gap-3">
                    <div className="w-9 h-9 rounded-control bg-brand-subtle text-brand flex items-center justify-center text-lg shrink-0">
                      <FaAward />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-content">Certificate + LOR</p>
                      <p className="text-[10px] text-content-secondary">
                        Recognized by corporate leaders
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ================= 3-COLUMN METRICS BENTO ================= */}
        <Section id="programDetails" tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Community of Top 1%"
            title="A 60-Day High-Growth Transformative Journey"
            lead="Empower your peers to upskill while gaining tangible experience in marketing, community management, and product outreach."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mt-4">
            {metrics.map((item, idx) => (
              <motion.article
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="rounded-card border border-line bg-surface p-6 shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:border-brand/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-control bg-surface-sunken p-2 border border-line flex items-center justify-center text-brand shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-subtle text-brand border border-line">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-content leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-line flex items-center text-xs font-semibold text-brand">
                  <span>{item.highlight}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* ================= REWARDS GRID SECTION ================= */}
        <Section tone="canvas" space="lg">
          <SectionHeader
            eyebrow="Exciting Perks"
            title="Rewards in Store for Top Ambassadors"
            lead="Hard work should always be acknowledged. Earn exciting tangible rewards, subscriptions, and certifications."
            align="center"
          />

          <GridComponent />
        </Section>

        {/* ================= WHAT WILL YOU BRING (RESPONSIBILITIES) ================= */}
        <Section tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Role & Responsibilities"
            title="What Will You Bring to the Table?"
            lead="Here is what an everyday journey as a Kre8ly ambassador looks like."
            align="center"
          />

          <FlexComponent />
        </Section>

        {/* ================= AMBASSADOR STORIES ================= */}
        <Section tone="canvas" space="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 max-w-6xl mx-auto">
            <SectionHeader
              eyebrow="Hall of Fame"
              title="Ambassadors Who Are Making Us Proud"
              lead="Hear firsthand how leading the Kre8ly student chapter boosted their careers."
            />
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-control border border-line bg-surface text-content flex items-center justify-center hover:bg-surface-sunken transition-colors shadow-sm"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-control border border-line bg-surface text-content flex items-center justify-center hover:bg-surface-sunken transition-colors shadow-sm"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto overflow-hidden">
            <CardSwipper swiperRef={swiperRef} />
          </div>
        </Section>

        {/* ================= BOTTOM CTA BANNER ================= */}
        <Section tone="sunken" space="lg">
          <div className="max-w-4xl mx-auto rounded-panel border border-line bg-brand-subtle p-8 sm:p-10 text-center flex flex-col items-center justify-center gap-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-brand/10 blur-2xl pointer-events-none" />

            <Eyebrow>Step Into Campus Leadership</Eyebrow>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-content max-w-xl">
              Ready to Kickstart Your Ambassador Journey?
            </h2>
            <p className="text-xs sm:text-sm text-content-secondary max-w-md">
              Applications review takes less than 48 hours. Submit your profile today to access the direct selection round.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://forms.gle/Cv39xjPXrpF3ky216"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-7 text-sm font-semibold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
              >
                Apply as Ambassador <FaArrowRight className="text-xs" />
              </a>
              <Link
                to="/"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-line bg-surface px-6 text-sm font-semibold text-content hover:bg-surface-sunken transition-colors"
              >
                Know More About Kre8ly
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

// Redesigned Rewards Grid
const GridComponent = () => {
  const gridItems = [
    {
      img: Grid1,
      title: "Free Kre8ly Certification Trainings",
      desc: "Full complimentary access to top technical & soft-skills cohorts.",
    },
    {
      img: Grid2,
      title: "Letter of Recommendation (LOR)",
      desc: "Accredited performance recommendations signed by senior executive leadership.",
    },
    {
      img: Grid3,
      title: "Amazon & Flipkart Gift Vouchers",
      desc: "Redeemable cash vouchers & premium OTT subscriptions based on milestones.",
    },
    {
      img: Grid4,
      title: "Exclusive Branded Merchandise",
      desc: "Collector-grade Kre8ly hoodies, tees, stickers, and tech accessories.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-4">
      {gridItems.map((item, index) => (
        <motion.article
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className="rounded-card border border-line bg-surface p-5 shadow-sm hover:border-brand/40 hover:shadow-md transition-all flex flex-col justify-between text-left"
        >
          <div>
            <div className="w-full aspect-[4/3] rounded-control bg-surface-sunken border border-line p-3 flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="text-base font-bold text-content leading-snug mb-1.5">
              {item.title}
            </h4>
            <p className="text-xs text-content-secondary leading-relaxed">
              {item.desc}
            </p>
          </div>
          <div className="pt-3 mt-4 border-t border-line flex items-center gap-1.5 text-[11px] font-semibold text-brand">
            <FaCheckCircle className="text-[10px]" />
            <span>Guaranteed Incentive</span>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

// Redesigned Role Cards (FlexComponent)
const FlexComponent = () => {
  const itemsArray = [
    {
      img: Icon1,
      title: "Upskill Your College",
      text: "Guide and inspire fellow students to access practical industry-focused training tracks.",
    },
    {
      img: Icon2,
      title: "Host Campus Meetups",
      text: "Organize engaging online & offline knowledge sharing sessions to spread the learning culture.",
    },
    {
      img: Icon3,
      title: "Lead Digital Campaigns",
      text: "Leverage your social platforms to amplify Kre8ly challenges, hackathons, and webinars.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mt-4">
      {itemsArray.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={cardVariants}
          whileHover={{ y: -4 }}
          className="rounded-card border border-line bg-surface p-6 shadow-sm flex flex-col items-center text-center hover:border-brand/40 transition-all"
        >
          <div className="w-16 h-16 rounded-full bg-surface-sunken border border-line flex items-center justify-center p-3 mb-4 shadow-inner">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-base font-bold text-content mb-2">
            {item.title}
          </h4>
          <p className="text-xs text-content-secondary leading-relaxed max-w-xs">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

// Redesigned Testimonials Swiper
const CardSwipper = ({ swiperRef }) => {
  const userProfile = [
    {
      id: 1,
      text: "Leading the campus chapter helped me sharpen my communication and marketing instinct while networking with cross-college peers. The cash rewards and merchandise were a fantastic bonus!",
      author: {
        name: "B.B. Sathya",
        college: "Paaval Engineering College",
        rewards: "Amazon Vouchers, Kre8ly Goodies, ₹3100 Cash",
      },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 2,
      text: "The mentorship I received from senior growth managers during the program gave me immense confidence. Representing Kre8ly on campus directly helped me during my campus placement rounds.",
      author: {
        name: "Aditi Singh",
        college: "XYZ Institute of Technology",
        rewards: "Smartwatch, Direct Interview Pass, ₹4500 Cash",
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 3,
      text: "Organizing webinar watch parties and technical workshops taught me practical project management. I was awarded the Best Ambassador of the Quarter recognition!",
      author: {
        name: "Rahul Sharma",
        college: "ABC University",
        rewards: "Letter of Recommendation, Merchandise, ₹2000 Cash",
      },
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop",
    },
  ];

  return (
    <Swiper
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="pb-10 w-full"
    >
      {userProfile.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="rounded-panel border border-line bg-surface p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-10 text-left">
            {/* Quote details */}
            <div className="flex-1 min-w-0">
              <RiDoubleQuotesL className="text-3xl text-brand mb-2 opacity-70" />
              <p className="text-sm sm:text-base text-content italic leading-relaxed mb-5">
                "{item.text}"
              </p>
              <div>
                <h4 className="text-base font-bold text-content">
                  {item.author.name}
                </h4>
                <p className="text-xs text-content-secondary">
                  {item.author.college}
                </p>
                <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded bg-brand-subtle text-brand text-[11px] font-semibold border border-line">
                  <FaGift className="text-[10px]" />
                  <span>Rewards: {item.author.rewards}</span>
                </div>
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-line bg-surface-sunken shrink-0 shadow-md">
              <img
                src={item.image}
                alt={item.author.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};