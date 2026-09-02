import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import BlogCard from "../component/Blog/BlogCard";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ApiRequest from "../Utils/Axios/Axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "@/lib/router-compat";
import { useSelector } from "react-redux";
import MobileFooter from "../component/MobileFooter";
import { IoCloseOutline } from "react-icons/io5";
import ChatBot from "@/component/ChatBot/ChatBot";

const BlogHome = ({ darkMode, setDarkMode }) => {
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);

  const [category, setCategory] = useState([]);
  const [selectedBlogData, setSelectedBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // was useState({}) while every read treats it as an array — see handleNext
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

  // Guarded: `% 0` is NaN, and once currentIndex is NaN every later click
  // stays NaN and the ticker never recovers.
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

  const chipClass = (isActive) =>
    `px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
      isActive
        ? "bg-brand text-brand-fg shadow-lg"
        : "bg-surface text-content hover:bg-surface-sunken shadow-md hover:shadow-lg"
    }`;

  return (
    <div>
      <Helmet>
        <title>
          Kre8ly Blog | Insights on Data Science, Tech, Marketing & Career
        </title>

        <link rel="canonical" href="https://www.unifiedmentor.com/our-blogs" />

        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Discover insightful articles on Data Science, Technology, Marketing, Web Development, and Career Advice on the Kre8ly Blog. Stay updated with the latest trends and tips."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kre8ly Blog | Insights on Data Science, Tech, Marketing & Career"
        />
        <meta
          property="og:description"
          content="Discover insightful articles on Data Science, Technology, Marketing, Web Development, and Career Advice on the Kre8ly Blog. Stay updated with the latest trends and tips."
        />
        <meta property="og:url" content="https://blog.unifiedmentor.com/" />
        <meta
          property="og:image"
          content="https://blog.unifiedmentor.com/wp-content/uploads/2023/09/Blue-with-Colorful-Confetti-Sports-Invitation-17.jpg"
        />
        <meta property="og:image:width" content="1654" />
        <meta property="og:image:height" content="1654" />
        <meta property="og:image:type" content="image/jpeg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@unifiedmentor" />
        <meta
          name="twitter:title"
          content="Kre8ly Blog | Insights on Data Science, Tech, Marketing & Career"
        />
        <meta
          name="twitter:description"
          content="Discover insightful articles on Data Science, Technology, Marketing, Web Development, and Career Advice on the Kre8ly Blog. Stay updated with the latest trends and tips."
        />
        <meta
          name="twitter:image"
          content="https://blog.unifiedmentor.com/wp-content/uploads/2023/09/Blue-with-Colorful-Confetti-Sports-Invitation-17.jpg"
        />
      </Helmet>

      <main className="w-full h-full relative flex flex-col items-center justify-center text-center">
        <section
          id="hero"
          className="w-full pt-10 relative bg-gradient-to-br from-brand via-brand-active to-brand-hover min-h-[38rem]"
        >
          <div className="text-center mb-10 animate-fadeInUp md:mt-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-fg mb-6 leading-tight">
              Discover Amazing
              {/* was text-transparent + bg-clip-text + bg-surface, which paints
                  the glyphs in the surface colour — dark text on the brand
                  gradient in dark mode. */}
              <span className="block text-brand-fg pb-4">Blog Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-fg max-w-3xl mx-auto leading-relaxed">
              Explore insights, tutorials, and industry trends from our expert
              writers across technology, career development, and digital
              innovation.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center">
              <AiOutlineLoading3Quarters
                className="animate-spin text-brand-fg"
                size={60}
              />
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-start md:justify-center py-3 px-2 mx-auto w-full gap-y-5 gap-x-4 mt-5 mb-10 overflow-x-auto no-scrollbar">
              {category?.map((item) => {
                const isActive = activeCategory === item?._id;
                return (
                  <button
                    type="button"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="800"
                    key={item?._id}
                    aria-pressed={isActive}
                    onClick={() => filterByCategory(item?._id)}
                    className={chipClass(isActive)}
                  >
                    <span className="flex flex-row items-center gap-2">
                      {item?.title}
                      {isActive && (
                        <IoCloseOutline className="text-lg" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                );
              })}

              <button
                type="button"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                aria-pressed={activeCategory === null}
                onClick={showAll}
                className={chipClass(activeCategory === null)}
              >
                All
              </button>
            </div>
          )}

          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="w-full h-full relative z-10 mb-12 flex justify-center items-center"
          >
            <div className="flex p-4 border border-line py-2 justify-between items-center rounded-xl text-brand-fg h-18 md:h-16 gap-2 relative z-10 max-w-7xl w-full">
              <div className="flex md:flex-row flex-col items-start md:items-center justify-start md:justify-center gap-2 md:gap-5">
                <div className="bg-success text-white p-2 rounded-lg w-fit md:w-40 text-[10px] sm:text-sm md:text-base animate-pulse hover:scale-105 transition-all duration-200">
                  Breaking News
                </div>
                <Link
                  to={`/blog/${headlines[currentIndex]?.slug}`}
                  className="text-xs md:text-base font-semibold underline text-start leading-normal underline-offset-4 text-brand-fg hover:no-underline"
                >
                  {headlines[currentIndex]?.title ||
                    "Welcome to Kre8ly Blog Page!"}
                </Link>
              </div>
              <div className="flex gap-1 md:gap-2 mt-auto md:mt-0">
                <button
                  type="button"
                  aria-label="Previous headline"
                  className="border border-brand-fg/40 w-7 h-7 hover:bg-brand-fg/20 md:w-8 md:h-8 rounded flex items-center justify-center cursor-pointer p-px transition-colors"
                  onClick={handlePrev}
                >
                  <IoIosArrowBack className="text-brand-fg" />
                </button>
                <button
                  type="button"
                  aria-label="Next headline"
                  className="border border-brand-fg/40 w-7 h-7 hover:bg-brand-fg/20 md:w-8 md:h-8 rounded flex items-center justify-center cursor-pointer p-px transition-colors"
                  onClick={handleNext}
                >
                  <IoIosArrowForward className="text-brand-fg" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-full relative z-10 md:mt-10 px-4 sm:px-6 md:px-10">
          {selectedBlogData?.length > 0 ? (
            <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {selectedBlogData.map((item, index) => (
                <BlogCard
                  key={item?._id}
                  index={index}
                  id={item?._id}
                  slug={item?.slug}
                  BlogCardInfo={item}
                />
              ))}
            </div>
          ) : (
            !loading && (
              <p className="text-content-secondary py-16">
                No posts in this category yet.
              </p>
            )
          )}
        </section>

        <Query />
        <ChatBot darkMode={darkMode} />
      </main>

      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default BlogHome;