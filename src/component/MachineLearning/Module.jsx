import React, { useState } from "react";
import { FaAngleDown, FaAngleRight, FaCheckCircle } from "react-icons/fa";
import Forms from "../Forms/Forms";

const TABS = [
  { key: "Basic", label: "Basic Course" },
  { key: "Advance", label: "Advance Course" },
];

const MODULE_ACCENTS = [
  "bg-brand-subtle text-brand",
  "bg-info-subtle text-info",
  "bg-success-subtle text-success",
];

const syllabusTitle = (varient) => {
  switch (varient) {
    case "FinancialAnalyst":
      return "Financial Analyst Online Training Syllabus";
    case "MachineLearning":
      return "Machine Learning Online Training Syllabus";
    case "BusinessAnalystFellowship":
      return "Online Business Analyst Training and Certification Syllabus";
    case "DataScience":
      return "Full Data Science Course Syllabus";
    case "DataAnalystFellowship":
      return "Data Analyst Course Curriculum";
    case "DataAnalyst":
      return "Data Analyst Course";
    case "DigitalMarketing":
      return "Digital Marketing Course Syllabus";
    case "UI/UX":
      return "Online Course for UI UX Design Syllabus";
    case "FrontendDevelopment":
      return "Frontend Development Syllabus";
    case "BackendDevelopment":
      return "Backend Development Syllabus";
    case "GraphicDesign":
      return "Complete Graphic Design Course Syllabus";
    case "WebDevFellowship":
      return "Complete Web Development Course Syllabus";
    case "DigitalMarketingFellowship":
      return "Digital Marketing Course Syllabus";
    case "DataScienceFellowship":
      return "Data Science Full Course Syllabus Online";
    default:
      return "Data Analyst Fellowship Course";
  }
};

const syllabusSubHeading = (varient) => {
  switch (varient) {
    case "DataAnalystFellowship":
      return `You start with the basics and build toward dashboards and reporting. The Basic track covers the foundations, and the Advance track goes deeper into analytics and business intelligence.`;

    case "FinancialAnalyst":
      return `You start with how companies report their money and work up to analysis you can present with confidence. The Basic track builds the foundations, and the Advance track goes deeper.`;
    case "BusinessAnalystFellowship":
      return `You begin with what a business analyst does and build toward the tools and frameworks used on real projects. The Basic track covers the foundations, and the Advance track takes you deeper.`;
    case "DigitalMarketingFellowship":
      return "You start with how digital marketing works and where the jobs are, then move into organic and paid methods and the metrics that show whether they work.";
    case "DataScienceFellowship":
      return "The syllabus starts with statistics, probability and Python, then builds toward machine learning and project work. The Basic track covers the foundations, and the Advance track goes deeper.";
      default:
      return "Gain practical skills, industry knowledge, and hands-on experience to excel in your professional journey.";
  }
};

const ONLINE_MODE_POINTS = [
  "Attend live mentor sessions from anywhere",
  "Get lifetime access to course materials",
  "Receive feedback on your projects directly from mentors",
  "Learn through interactive assignments and case studies",
];

const Module = ({
  BasicModules = [],
  AdvanceModules = [],
  varient,
  setShowCurriculum,
  showCurriculum,
  onFormToggle,
}) => {
  const [active, setActive] = useState("Basic");
  const [closeForm, setCloseForm] = useState(false);

  const handleDownloadFile = () => {
    setCloseForm(true);
    onFormToggle?.(true);
  };

  const handleCloseForm = () => {
    setCloseForm(false);
    onFormToggle?.(false);
  };

  const showAll = Boolean(showCurriculum);
  const source = active === "Basic" ? BasicModules : AdvanceModules;
  const currentModules = showAll ? source : source.slice(0, 3);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="relative mx-auto flex w-full max-w-7xl flex-col px-2 md:px-10"
    >
      <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-content lg:text-4xl">
        {syllabusTitle(varient)}
      </h2>
      <p
        className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-content-secondary lg:text-lg"
        dangerouslySetInnerHTML={{ __html: syllabusSubHeading(varient) }}
      />

      {/* tabs */}
      <div
        role="tablist"
        aria-label="Course level"
        className="relative z-20 mx-auto mb-8 flex w-fit items-center gap-1 rounded-full border border-line bg-surface-sunken p-1"
      >
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            onClick={() => setActive(key)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:shadow-focus md:px-7 ${
              active === key
                ? "bg-brand text-brand-fg shadow-sm"
                : "text-content-secondary hover:text-content"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* modules */}
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="relative z-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {currentModules.map((modules, index) => (
          <article
            key={`${active}-${index}`}
            className={`h-full flex-col rounded-card border border-line bg-surface p-6 text-left shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-line-strong hover:shadow-md ${
              !showAll && index > 0 ? "hidden md:flex" : "flex"
            }`}
          >
            <span
              className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                MODULE_ACCENTS[index % MODULE_ACCENTS.length]
              }`}
            >
              {modules.ModuleName}
            </span>

            <h4 className="mb-4 text-lg font-bold leading-snug text-content">
              {modules.title}
            </h4>

            <ul className="space-y-2.5">
              {modules.topics?.map((topic, topicIndex) => (
                <li
                  key={topicIndex}
                  className="flex items-start gap-2 text-sm leading-relaxed text-content-secondary"
                >
                  <FaAngleRight
                    aria-hidden="true"
                    className="mt-1 h-3.5 w-3.5 shrink-0 text-brand"
                  />
                  <span>{topic}.</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        {/* fade + button; only the button is clickable */}
        {!showAll && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-48 items-end justify-center bg-gradient-to-t from-canvas to-transparent pb-2">
            <button
              type="button"
              onClick={handleDownloadFile}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-sm font-semibold text-content shadow-md transition-colors duration-200 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus md:text-base"
            >
              See Full Curriculum
              <FaAngleDown aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        )}

        {closeForm && (
          <div
            /* Scrim stays literally black: a themed token would turn near-white
               in dark mode, which is the opposite of a scrim. */
            className="fixed inset-0 z-50 flex h-full w-full items-center justify-start bg-black/50 backdrop-blur-sm"
          >
            <Forms
              setCloseForm={handleCloseForm}
              setShowCurriculum={setShowCurriculum}
            />
          </div>
        )}
      </div>

      {varient === "DataAnalystFellowship" && (
        <div className="mx-auto mt-14 w-full max-w-3xl">
          <p className="mb-10 text-center text-base leading-relaxed text-content-secondary lg:text-lg">
            Technical skills get you shortlisted, and problem-solving gets you
            through the interview. The fellowship trains both
          </p>

          <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-content lg:text-4xl">
            Online Data Analyst Internship Program and Training in India
          </h2>

          <p className="text-center text-base leading-relaxed text-content-secondary lg:text-lg">
            This online program is made for people who can't sit in a classroom
            at fixed hours. Join live sessions from home, and watch the
            recordings when your schedule or your internet connection doesn't
            cooperate.
          </p>

          <div className="mt-8 rounded-card border border-line bg-surface p-6 shadow-sm md:p-8">
            <p className="mb-5 font-semibold text-content">
              Why Choose the Online Mode:
            </p>

            <ul className="space-y-4">
              {ONLINE_MODE_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-content-secondary"
                >
                  <FaCheckCircle
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-brand"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center leading-7 text-content-secondary">
            You get the classroom experience without moving to a metro or paying
            for a hostel.
          </p>
        </div>
      )}
    </div>
  );
};

export default Module;
