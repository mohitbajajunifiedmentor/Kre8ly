import React, { useMemo, useState } from "react";
import { Link } from "@/lib/router-compat";
import { CourseCardInfos } from "../Utils/CourseCardInfos";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

/**
 * Courses listing.
 *
 * Rebuilt on design tokens. The previous version branched on the `darkMode`
 * prop in ~40 separate ternaries — including several that returned the *same*
 * value for both branches (`darkMode ? "text-white" : "text-white"`), and a
 * hero whose light-mode gradient was slate/sky/indigo while dark mode fell back
 * to `bg-inherit`. All of that is gone; the props are still accepted so the
 * route wrapper does not change.
 *
 * Behavioural fixes made along the way are commented at each site.
 */
const CoursesPage = ({ darkMode, setDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Development", "Data", "Design", "Marketing", "AI/ML"];

  const courseCategories = {
    "Web Development": "Development",
    "Data Science": "Data",
    "Digital Marketing": "Marketing",
    "Machine Learning": "AI/ML",
    "UX/UI Designer": "Design",
    "Graphic Design": "Design",
    "Data Analyst": "Data",
  };

  // Was `useState` + `useEffect` mirroring the source array into state, which
  // rendered twice on every keystroke and could show a stale list for a frame.
  // The filtered list is derived from the inputs, so it belongs in useMemo.
  const filteredCourses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return CourseCardInfos.filter((course) => {
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.tools.some((tool) => tool.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === "All" ||
        courseCategories[course.title] === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const hasFilters = Boolean(searchQuery) || selectedCategory !== "All";

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-canvas text-content">
      {/* ---------------- hero ---------------- */}
      <section id="hero" className="relative isolate overflow-hidden border-b border-line">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% -10%, hsl(var(--k-brand) / 0.14), transparent 70%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-content-secondary shadow-xs md:text-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
              {CourseCardInfos.length} programs
            </span>

            <h1 className="mt-6 text-3xl font-bold tracking-[-0.02em] sm:text-5xl">
              Explore our <span className="text-brand">courses</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-content-secondary md:text-lg">
              Master in-demand skills with comprehensive online certification courses
              designed by industry experts.
            </p>

            <div className="mx-auto mt-8 max-w-2xl">
              {/* The input had no label at all — screen readers announced an
                  unlabelled textbox. */}
              <label htmlFor="course-search" className="sr-only">
                Search courses, skills or technologies
              </label>
              <div className="relative">
                <FaSearch
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-content-muted"
                />
                <input
                  id="course-search"
                  type="search"
                  placeholder="Search courses, skills, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-control border border-line bg-surface py-3.5 pl-12 pr-4 text-base text-content shadow-xs transition-colors placeholder:text-content-muted focus:border-brand focus:outline-none focus:shadow-focus"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- filters ---------------- */}
      {/* `top-0` used to tuck this bar underneath the sticky 4rem navbar.
          `top-16` parks it directly below. */}
      <div className="sticky top-16 z-20 border-b border-line bg-surface/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-content-secondary">
              <FaFilter aria-hidden="true" className="text-sm" />
              <span className="text-sm font-medium">Filter by</span>
            </div>

            <div
              role="group"
              aria-label="Filter courses by category"
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={active}
                    className={[
                      "rounded-control px-3.5 py-2 text-sm font-medium transition-colors duration-150",
                      "focus-visible:outline-none focus-visible:shadow-focus",
                      active
                        ? "bg-brand text-brand-fg shadow-xs"
                        : "bg-surface-sunken text-content-secondary hover:bg-brand-subtle hover:text-brand",
                    ].join(" ")}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-2 rounded-control px-3 py-2 text-sm text-content-secondary transition-colors hover:bg-surface-sunken hover:text-content focus-visible:outline-none focus-visible:shadow-focus"
              >
                <FaTimes aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ---------------- grid ---------------- */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Announced politely so the count updates reach screen readers as the
            user types, without stealing focus. */}
        <p aria-live="polite" className="sr-only">
          {filteredCourses.length} courses found
        </p>

        {filteredCourses.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-line bg-surface-raised px-6 py-16 text-center">
            <div
              aria-hidden="true"
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-subtle text-brand"
            >
              <FaSearch className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-content">No courses found</h3>
            <p className="mt-1.5 max-w-sm text-sm text-content-secondary">
              Try a different search term, or clear the filters to see all{" "}
              {CourseCardInfos.length} courses.
            </p>
            {/* The old empty state was a dead end — it described the problem but
                offered no way out. */}
            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 inline-flex h-10 items-center rounded-control bg-brand px-5 text-sm font-medium text-brand-fg transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                {filteredCourses.length} course
                {filteredCourses.length !== 1 ? "s" : ""} available
              </h2>
              <p className="mt-1 text-content-secondary">
                Find the one that fits where you want to go next.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <article
                  key={course.id}
                  className="group relative flex flex-col overflow-hidden rounded-card border border-line bg-surface shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-md"
                >
                  <div className="relative h-44 overflow-hidden bg-surface-sunken">
                    <img
                      src={course.image}
                      alt={course.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {course.live && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-success px-2.5 py-1 text-xs font-semibold text-white">
                        {/* The whole badge used to `animate-pulse`, which made
                            the word itself flicker and hurt readability. Only
                            the dot pulses now. */}
                        <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        LIVE
                      </span>
                    )}

                    {course.tag && (
                      <span className="absolute right-3 top-3 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-brand-fg">
                        {course.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-content">{course.title}</h3>
                    <p className="mt-2 text-sm text-content-secondary">{course.alt}</p>

                    {course.batch && (
                      <p className="mt-3 text-sm font-medium text-content-muted">
                        {course.batch}
                      </p>
                    )}

                    <div className="mt-5">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-content-muted">
                        What you&apos;ll learn
                      </h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {course.tools.slice(0, 4).map((tool, idx) => (
                          <li
                            key={idx}
                            className="rounded-full bg-surface-sunken px-2.5 py-1 text-xs text-content-secondary"
                          >
                            {tool}
                          </li>
                        ))}
                        {course.tools.length > 4 && (
                          <li className="rounded-full bg-brand-subtle px-2.5 py-1 text-xs font-medium text-brand">
                            +{course.tools.length - 4} more
                          </li>
                        )}
                      </ul>
                    </div>

                    <Link
                      to={course.link}
                      // Every card had the same "Explore Course" text, so a
                      // screen-reader link list read as seven identical entries.
                      aria-label={`Explore ${course.title}`}
                      className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-control bg-brand text-sm font-semibold text-brand-fg transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                    >
                      Explore course
                      <IoIosArrowForward
                        aria-hidden="true"
                        className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ---------------- closing CTA ---------------- */}
      <section className="border-t border-line bg-surface-sunken py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to start your learning journey?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-content-secondary">
            Join thousands of students who have transformed their careers with our
            courses.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/fellowships"
              className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
            >
              Browse fellowships
              <IoIosArrowForward aria-hidden="true" className="ml-1.5" />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex h-12 items-center justify-center rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus"
            >
              Talk to a counsellor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;