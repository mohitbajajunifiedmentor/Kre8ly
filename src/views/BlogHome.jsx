import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import MobileFooter from "../component/MobileFooter";
import BlogCard from "../component/Blog/BlogCard";
import Query from "../component/Query/Query";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import Reveal from "@/component/ui/Reveal";

import { Helmet } from "@/lib/helmet-compat";
import { Link } from "@/lib/router-compat";
import { useSelector } from "react-redux";
import ApiRequest from "../Utils/Axios/Axios";

import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaFire, FaBookOpen } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function BlogHome({ darkMode, setDarkMode }) {
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);

  const [category, setCategory] = useState([]);
  const [selectedBlogData, setSelectedBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headlines, setHeadlines] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const byNewestFirst = (a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt);

  const getCategory = async () => {
    try {
      setLoading(true);
      const response = await ApiRequest.get("/category", {
        headers: { Authorization: `Bearer ${auth_token}` },
      });
      if (response.status === 200) {
        setCategory([...response.data].sort(byNewestFirst));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllBloges = async () => {
    try {
      setLoading(true);
      const response = await ApiRequest.get(`/blog/getAllBloges`, {
        headers: { Authorization: `Bearer ${auth_token}` },
      });
      if (response?.status === 200) {
        const sortedData = [...response.data].sort(byNewestFirst);
        setBlogData(sortedData);
        setSelectedBlogData(sortedData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
    getAllBloges();
  }, []);

  useEffect(() => {
    setHeadlines(
      blogData.map((item) => ({
        title: item?.title,
        _id: item?._id,
        slug: item?.slug,
      }))
    );
    setCurrentIndex(0);
  }, [blogData]);

  // Auto-advance headline ticker every 6s
  useEffect(() => {
    if (!headlines.length) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [headlines]);

  const handleNext = () => {
    if (!headlines.length) return;
    setCurrentIndex((prev) => (prev + 1) % headlines.length);
  };

  const handlePrev = () => {
    if (!headlines.length) return;
    setCurrentIndex((prev) => (prev - 1 + headlines.length) % headlines.length);
  };

  const showAll = () => {
    setActiveCategory(null);
    setSelectedBlogData(blogData);
  };

  const filterByCategory = (id) => {
    if (id === activeCategory) {
      showAll();
      return;
    }
    setActiveCategory(id);
    setSelectedBlogData(
      blogData?.filter((item) => item?.category_id?._id === id)
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Kre8ly Blog | Insights on Data Science, Tech, Marketing & Career
        </title>
        <link rel="canonical" href="https://www.kre8ly.com/our-blogs" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Discover insightful articles on Data Science, Technology, Marketing, Web Development, and Career Advice on the Kre8ly Blog."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO HEADER ================= */}
        <Section tone="canvas" space="lg" className="pt-8 md:pt-14 relative overflow-hidden">
          {/* Subtle Ambient Back Glows */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold">
                <FaBookOpen className="text-xs" />
                Knowledge &amp; Engineering Hub
              </div>
            </Reveal>

            <Reveal direction="up" delay={70}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-content">
                Discover Amazing <br />
                <span className="text-brand">Blog Stories &amp; Insights</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={140}>
              <p className="text-sm sm:text-base lg:text-lg text-content-secondary leading-relaxed max-w-2xl mx-auto">
                Explore deep dives, tech tutorials, and industry career playbooks written by
                engineers, product leaders, and digital mentors.
              </p>
            </Reveal>

            {/* ================= BREAKING NEWS TICKER ================= */}
            <Reveal direction="up" delay={200} className="w-full mt-4">
              <div className="rounded-panel border border-line bg-surface p-2.5 sm:p-3 shadow-sm flex items-center justify-between gap-3 text-left w-full overflow-hidden">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-control bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
                    <FaFire className="text-[10px] animate-bounce" />
                    Latest Post
                  </span>

                  <div className="min-w-0 flex-1 relative h-6 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="truncate"
                      >
                        {headlines.length > 0 ? (
                          <Link
                            to={`/blog/${headlines[currentIndex]?.slug}`}
                            className="text-xs sm:text-sm font-semibold text-content hover:text-brand transition-colors truncate block"
                          >
                            {headlines[currentIndex]?.title}
                          </Link>
                        ) : (
                          <span className="text-xs sm:text-sm text-content-secondary">
                            Welcome to Kre8ly Blog Insights!
                          </span>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Prev / Next controls */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous headline"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-control border border-line bg-surface hover:bg-surface-sunken text-content-secondary hover:text-content flex items-center justify-center transition-colors"
                  >
                    <IoIosArrowBack className="text-xs" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next headline"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-control border border-line bg-surface hover:bg-surface-sunken text-content-secondary hover:text-content flex items-center justify-center transition-colors"
                  >
                    <IoIosArrowForward className="text-xs" />
                  </button>
                </div>
              </div>
            </Reveal>

            {/* ================= CATEGORY CHIPS FILTER ================= */}
            <div className="w-full mt-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={showAll}
                  aria-pressed={activeCategory === null}
                  className={`px-4 py-2 rounded-control text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    activeCategory === null
                      ? "bg-brand text-brand-fg border-brand shadow-sm"
                      : "bg-surface border-line text-content-secondary hover:text-content hover:bg-surface-sunken"
                  }`}
                >
                  All Articles
                </button>

                {category?.map((item) => {
                  const isActive = activeCategory === item?._id;
                  return (
                    <button
                      key={item?._id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => filterByCategory(item?._id)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-control text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                        isActive
                          ? "bg-brand text-brand-fg border-brand shadow-sm"
                          : "bg-surface border-line text-content-secondary hover:text-content hover:bg-surface-sunken"
                      }`}
                    >
                      <span>{item?.title}</span>
                      {isActive && (
                        <IoCloseOutline className="text-sm shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        {/* ================= BLOG CARDS FEED ================= */}
        <Section tone="sunken" space="lg">
          {loading ? (
            /* Loading Skeleton */
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-card border border-line bg-surface p-5 animate-pulse flex flex-col gap-4"
                >
                  <div className="w-full aspect-[16/10] bg-surface-sunken rounded-control" />
                  <div className="w-1/3 h-4 bg-surface-sunken rounded" />
                  <div className="w-4/5 h-6 bg-surface-sunken rounded" />
                  <div className="w-full h-12 bg-surface-sunken rounded" />
                </div>
              ))}
            </div>
          ) : selectedBlogData?.length > 0 ? (
            <motion.div
              layout
              className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
            >
              <AnimatePresence>
                {selectedBlogData.map((item, index) => (
                  <motion.div
                    key={item?._id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95 }}
                    variants={cardVariants}
                    layout
                  >
                    <BlogCard
                      index={index}
                      id={item?._id}
                      slug={item?.slug}
                      BlogCardInfo={item}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <div className="max-w-md mx-auto text-center py-16">
              <div className="w-14 h-14 rounded-full bg-brand-subtle text-brand border border-line flex items-center justify-center mx-auto mb-3">
                <FaBookOpen className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-content mb-1">
                No Articles Found
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary mb-4">
                We couldn't find any stories published under this category yet.
              </p>
              <button
                type="button"
                onClick={showAll}
                className="inline-flex h-9 items-center justify-center px-4 rounded-control bg-brand text-brand-fg text-xs font-semibold shadow-sm hover:bg-brand-hover transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
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