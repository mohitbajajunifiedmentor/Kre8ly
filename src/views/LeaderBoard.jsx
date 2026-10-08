import React, { useState } from "react";
import { topPerformers, interns, interns_new } from "../Utils/leaderBoardData";
import Footer from "../component/Footer";
import MobileFooter from "../component/MobileFooter";
import Query from "../component/Query/Query";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import Reveal from "@/component/ui/Reveal";

import {
  FaLinkedin,
  FaStar,
  FaTrophy,
  FaMedal,
  FaChevronDown,
} from "react-icons/fa";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Helmet } from "@/lib/helmet-compat";

const PAGE_SIZE = 5;

// Clean, compact Top Performer Card
const PerformerCard = ({ user, rank }) => (
  <article className="group relative flex flex-col justify-between h-[360px] w-full rounded-card border border-line bg-surface p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-md overflow-hidden text-left">
    {/* Top Bar: Rank & Rating */}
    <div className="flex items-center justify-between gap-2">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-control bg-brand-subtle text-brand text-xs font-bold border border-line">
        <FaTrophy className="text-[11px]" />
        <span>Rank #{rank + 1}</span>
      </div>
      <div className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-control bg-surface-sunken border border-line text-content">
        <FaStar className="text-warning text-[11px]" />
        <span>{user?.rating}</span>
      </div>
    </div>

    {/* Center: Image & Details */}
    <div className="flex flex-col items-center text-center my-auto">
      <div className="relative mb-3.5">
        <img
          src={user?.image}
          alt={user?.fullName || user?.name}
          loading="lazy"
          className="w-24 h-24 rounded-full object-cover border-2 border-line bg-surface-sunken shadow-sm group-hover:scale-105 transition-transform duration-300"
        />
        {rank < 3 && (
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-brand text-brand-fg flex items-center justify-center text-xs shadow-md border-2 border-surface">
            <FaMedal className="text-[11px]" />
          </div>
        )}
      </div>

      <h3 className="text-base font-bold text-content leading-snug truncate max-w-[200px]">
        {user?.name}
      </h3>
      <p className="text-xs text-content-secondary mt-0.5 font-medium truncate max-w-[220px]">
        {user?.domain}
      </p>
    </div>

    {/* Bottom Footer: Connect */}
    <div className="pt-3 border-t border-line flex items-center justify-between">
      <span className="text-[11px] font-semibold text-content-muted uppercase tracking-wider">
        Verified Learner
      </span>
      {user?.linkedIn && (
        <a
          href={user.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${user?.name} on LinkedIn`}
          className="text-content-muted hover:text-brand transition-colors p-1"
        >
          <FaLinkedin className="text-base" />
        </a>
      )}
    </div>
  </article>
);

const LeaderBoard = ({ darkMode, setDarkMode }) => {
  const [visibleOld, setVisibleOld] = useState(PAGE_SIZE);
  const [visibleNew, setVisibleNew] = useState(PAGE_SIZE);
  const [activeMonth, setActiveMonth] = useState("Latest");

  const isOld = activeMonth === "Old";
  const sourceList = isOld ? interns : interns_new;
  const visibleCount = isOld ? visibleOld : visibleNew;
  const visibleInterns = sourceList.slice(0, visibleCount);
  const hasMore = visibleCount < sourceList.length;
  const swiperRef = useRef(null);

  const loadMoreInterns = () => {
    if (isOld) setVisibleOld((prev) => prev + PAGE_SIZE);
    else setVisibleNew((prev) => prev + PAGE_SIZE);
  };

  return (
    <>
      <Helmet>
        <title>Top Performers | Kre8ly Leaderboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the Kre8ly Leaderboard to see top-performing learners ranked by skills, scores, and achievements."
        />
        <link
          rel="canonical"
          href="https://www.kre8ly.com/leaderboard"
        />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO & SWIPER SECTION ================= */}
        <Section tone="canvas" space="lg" className="pt-8 md:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-5 text-left">
              <Reveal direction="up">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  Monthly Performance Honors
                </div>
              </Reveal>

              <Reveal direction="up" delay={70}>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-content">
                  Celebrating Our <br />
                  <span className="text-brand">Top Achievers</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={140}>
                <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                  Meet the front-runners of our cohort. These top performers
                  have proven their technical capability, teamwork, and project
                  excellence.
                </p>
              </Reveal>

              <Reveal direction="up" delay={200}>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#internsTable"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                  >
                    View All Rankings
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right: Featured Performers Carousel with Working Navigation */}
            <div className="lg:col-span-7 w-full relative">
              {/* Custom Arrow Buttons */}
              <div className="flex items-center justify-end gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Previous Slide"
                  className="w-9 h-9 rounded-control border border-line bg-surface text-content flex items-center justify-center hover:bg-surface-sunken hover:border-brand/40 transition-colors shadow-sm active:scale-95 z-20 cursor-pointer"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Next Slide"
                  className="w-9 h-9 rounded-control border border-line bg-surface text-content flex items-center justify-center hover:bg-surface-sunken hover:border-brand/40 transition-colors shadow-sm active:scale-95 z-20 cursor-pointer"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>

              <Reveal direction="fade" delay={150}>
                <Swiper
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  modules={[Pagination, A11y, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1.15}
                  pagination={{ clickable: true }}
                  loop={topPerformers.length > 3}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 2.2, spaceBetween: 20 },
                  }}
                  className="pb-10 w-full text-content"
                >
                  {topPerformers.map((user, index) => (
                    <SwiperSlide key={index}>
                      <PerformerCard user={user} rank={index} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* ================= INTERNS RANKING TABLE ================= */}
        <Section id="internsTable" tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Rankings & Scores"
            title="Top Performing Interns"
            lead="Comprehensive ranking based on evaluations, sprint submissions, and mentor reviews."
            align="center"
          />

          {/* Toggle Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-control bg-surface border border-line shadow-sm">
              {["Latest", "Old"].map((month) => (
                <button
                  key={month}
                  type="button"
                  onClick={() => setActiveMonth(month)}
                  className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-control transition-all duration-200 ${
                    activeMonth === month
                      ? "bg-brand text-brand-fg shadow-sm"
                      : "text-content-secondary hover:text-content"
                  }`}
                >
                  {month} Cohort
                </button>
              ))}
            </div>
          </div>

          {/* Table Container */}
          <div className="max-w-5xl mx-auto rounded-card border border-line bg-surface shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-line bg-surface-sunken/60 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-content-secondary">
                    <th className="py-3.5 px-4 sm:px-6 w-20 text-center">
                      Rank
                    </th>
                    <th className="py-3.5 px-4 sm:px-6">Candidate</th>
                    <th className="py-3.5 px-4 sm:px-6">Domain Track</th>
                    <th className="py-3.5 px-4 sm:px-6 text-center">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-xs sm:text-sm">
                  {visibleInterns.map((intern, index) => (
                    <tr
                      key={index}
                      className="hover:bg-surface-sunken/50 transition-colors"
                    >
                      {/* Rank Number */}
                      <td className="py-3.5 px-4 sm:px-6 text-center font-bold text-content-secondary">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-surface-sunken border border-line text-xs">
                          {index + 1}
                        </span>
                      </td>

                      {/* Candidate Avatar + Name + LinkedIn */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={intern.image}
                            alt={intern.name}
                            loading="lazy"
                            className="w-10 h-10 rounded-full object-cover shrink-0 border border-line bg-surface-sunken"
                          />
                          <div className="min-w-0">
                            <div className="font-semibold text-content truncate max-w-[180px] sm:max-w-none">
                              {intern.name}
                            </div>
                            {intern.linkedIn && (
                              <a
                                href={intern.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] text-content-muted hover:text-brand transition-colors mt-0.5"
                              >
                                <FaLinkedin className="text-xs" />
                                <span>Profile</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Domain Track */}
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-content-secondary">
                        <span className="inline-block px-2.5 py-1 rounded-control bg-surface-sunken border border-line text-xs">
                          {intern.domain}
                        </span>
                      </td>

                      {/* Rating */}
                      <td className="py-3.5 px-4 sm:px-6 text-center">
                        <div className="inline-flex items-center gap-1.5 font-bold text-content">
                          <FaStar className="text-warning text-xs" />
                          <span>{intern.rating}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="p-4 border-t border-line flex justify-center bg-surface-sunken/30">
                <button
                  type="button"
                  onClick={loadMoreInterns}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-control text-xs sm:text-sm font-semibold border border-line bg-surface text-content hover:bg-surface-sunken shadow-sm transition-all active:scale-95"
                >
                  <span>Load More Achievers</span>
                  <FaChevronDown className="text-[10px]" />
                </button>
              </div>
            )}
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

export default LeaderBoard;
