import React, { useState } from "react";
import { topPerformers, interns, interns_new } from "../Utils/leaderBoardData";
import Footer from "../component/Footer";
import { FaLinkedin, FaStar } from "react-icons/fa";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Query from "../component/Query/Query";
import { Helmet } from "@/lib/helmet-compat";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const tag3 = "/assets/LeaderBoard/tag3.svg";

const PAGE_SIZE = 5;
const TABLE_HEADERS = ["RATING", "USER NAME", "DOMAIN"];

const sectionStylings = {
  title:
    "text-xl sm:text-2xl md:text-3xl text-content text-center font-semibold mb-4",
};

// Defined at module scope. When this lived inside LeaderBoard it was a new
// component type on every render, so React unmounted and remounted every
// Swiper slide (images re-fetching, animations restarting) on each state change.
const PerformerCard = ({ user }) => (
  <div className="relative mx-auto text-center rounded-b-md border-t-2 border-brand bg-surface shadow-sm shadow-slate-500 dark:shadow-none dark:border dark:border-line-strong h-96 w-full lg:scale-90 hover:scale-105 transition-all duration-300">
    <img
      src={tag3}
      alt=""
      aria-hidden="true"
      className="w-full h-[70px] absolute -top-3 object-contain"
    />

    <div className="absolute text-white font-semibold text-xs sm:text-sm w-full flex flex-col items-center top-[3px] gap-[8px]">
      <div>Rating: {user?.rating}</div>
    </div>

    <div className="flex items-center justify-center">
      <img
        src={user?.image}
        alt={user?.fullName || user?.name}
        loading="lazy"
        className="w-auto object-cover rounded-lg border-8 mt-20 border-line-strong h-44 lg:h-[180px]"
      />
    </div>

    <div className="w-full absolute bottom-0 left-0 rounded-b-md flex items-center justify-center">
      <div className="flex flex-col justify-between items-start gap-2 sm:gap-3 w-full p-7 sm:p-3">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold text-content">
            {user?.name?.length > 10
              ? `${user.name.slice(0, 10)}...`
              : user?.name}
          </p>
          {user?.linkedIn && (
            <a
              href={user.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${user?.name} on LinkedIn`}
            >
              <FaLinkedin className="text-[#0077B5] text-lg sm:text-xl" />
            </a>
          )}
        </div>
        <div className="text-content-secondary">
          <p className="text-sm font-medium">
            Domain:{" "}
            {user?.domain?.length > 15
              ? `${user.domain.slice(0, 15)}...`
              : user?.domain}
          </p>
        </div>
      </div>
    </div>
  </div>
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
          name="keywords"
          content="Kre8ly leaderboard, top learners, best performers, online learning rankings, student achievements, skills leaderboard, e-learning progress"
        />
        <meta
          name="description"
          content="Explore the Kre8ly Leaderboard to see top-performing learners ranked by skills, scores, and achievements. Join now and climb the ranks!"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/leaderboard"
        ></link>
      </Helmet>

      <div
        className={`min-h-screen ${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        }`}
      >
        <main>
          {/* Hero Section */}
          <section
            id="hero"
            className="flex flex-col lg:flex-row items-center justify-between gap-6 relative mb-14 bg-gradient-to-br from-brand via-brand-active to-brand-hover"
          >
            <div className="w-full lg:w-1/2 text-center lg:text-left mt-0 md:px-10">
              <h1
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="text-4xl lg:text-5xl font-extrabold text-brand-fg mb-6"
              >
                Celebrating Our <br />
                Top Achievers!
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="block text-xl lg:text-2xl text-brand-fg/90 mt-2"
              >
                <span className="block">
                  Meet the Best! Our top performers have
                </span>
                <span className="block mt-2">
                  earned rewards through skill and dedication.
                </span>
                <span className="block mt-2">
                  Keep learning and claim your spot!
                </span>
              </p>
            </div>

            {/* One Swiper for every width. The old code kept an `isMobile`
                state and rendered two nearly identical Swipers, which meant the
                server always rendered the desktop one and the client swapped it
                on mount — a hydration mismatch plus a resize listener for
                something breakpoints already do. */}
            <div
              data-aos="zoom-out-down"
              data-aos-delay="0"
              data-aos-duration="800"
              className="w-full lg:w-1/2 flex justify-center items-center p-6 md:p-0 lg:mb-12 md:px-10"
            >
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                loop={topPerformers.length > 3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 30 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pt-12 w-full max-w-full text-brand-fg"
                style={{
                  "--swiper-navigation-color": "currentColor",
                  "--swiper-pagination-color": "currentColor",
                }}
              >
                {topPerformers.map((user, index) => (
                  <SwiperSlide key={index}>
                    <PerformerCard user={user} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* Interns Section */}
          <section className="mb-8 lg:mb-12 px-4 sm:px-6 lg:px-8">
            <h2 className={sectionStylings.title}>Top Performing Interns</h2>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-surface rounded-2xl shadow-md dark:shadow-none border border-transparent dark:border-line-strong px-4 py-4 md:w-fit mx-auto mb-8">
              {["Latest", "Old"].map((month) => (
                <button
                  key={month}
                  type="button"
                  aria-pressed={activeMonth === month}
                  onClick={() => setActiveMonth(month)}
                  className={`relative transition-all duration-300 rounded-2xl
                    px-4 py-2 sm:px-7 sm:py-4 text-sm font-medium
                    ${
                      activeMonth === month
                        ? "bg-gradient-to-r from-brand to-brand-active text-brand-fg shadow"
                        : "text-content-secondary hover:bg-surface-sunken"
                    }`}
                >
                  {month} Months
                  {activeMonth === month && (
                    <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-brand"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="bg-surface rounded-lg mx-2 sm:mx-4 p-3 sm:p-6 shadow-lg dark:shadow-none border border-transparent dark:border-line-strong">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-br from-brand to-brand-active">
                      {TABLE_HEADERS.map((label, index) => (
                        <th
                          key={label}
                          className={`py-3 sm:py-4 px-2 sm:px-6 text-[10px] sm:text-sm md:text-base lg:text-lg font-bold text-brand-fg whitespace-nowrap text-center align-middle
                            ${index === 0 ? "rounded-tl-lg" : ""}
                            ${
                              index === TABLE_HEADERS.length - 1
                                ? "rounded-tr-lg"
                                : ""
                            }`}
                        >
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {visibleInterns.map((intern, index) => (
                      <tr
                        key={index}
                        className="border-b border-line last:border-b-0 hover:bg-surface-sunken text-start align-middle transition-colors"
                      >
                        {/* Rating */}
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-center relative">
                          <div className="flex flex-col items-center justify-center">
                            <FaStar className="text-warning text-3xl sm:text-4xl md:text-5xl" />
                            <span className="absolute text-sm sm:text-base md:text-lg font-bold text-black">
                              {intern.rating}
                            </span>
                          </div>
                        </td>

                        {/* User Name + LinkedIn */}
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-center md:w-72 lg:w-96">
                          <div className="flex flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3">
                            <img
                              src={intern.image}
                              alt={intern.name}
                              loading="lazy"
                              className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14 rounded-full object-cover hidden sm:block"
                            />
                            <div className="flex flex-col items-center sm:items-start gap-1">
                              <span className="text-sm sm:text-base md:text-lg font-semibold text-content">
                                {intern.name?.length > 15
                                  ? `${intern.name.slice(0, 15)}...`
                                  : intern.name}
                              </span>
                              {intern.linkedIn && (
                                <a
                                  href={intern.linkedIn}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${intern.name} on LinkedIn`}
                                  className="text-[#0077B5]"
                                >
                                  <FaLinkedin className="text-base sm:text-xl md:text-3xl" />
                                </a>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Domain */}
                        <td className="py-2 sm:py-4 px-2 sm:px-6 text-sm sm:text-base md:text-lg font-semibold text-content text-center">
                          {intern.domain}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="flex justify-center py-3 sm:py-4">
                  <button
                    type="button"
                    onClick={loadMoreInterns}
                    className="py-2 sm:py-3 px-3 sm:px-4 text-content border border-line-strong flex items-center gap-2 sm:gap-3 font-semibold justify-center rounded-md text-xs sm:text-sm md:text-base mx-auto hover:bg-surface-sunken hover:scale-105 transition-all duration-300"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
        <Query />
        <ChatBot darkMode={darkMode} />
        <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
};

export default LeaderBoard;