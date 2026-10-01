// import React, { useEffect, useState } from "react";
// import { FaAngleDown, FaAngleRight } from "react-icons/fa";
// import Forms from "../Forms/Forms";
// // const Ellipse = "/assets/Ellipse.webp";

// const Module = ({
//   BasicModules = [],
//   AdvanceModules = [],
//   varient,
//   setShowCurriculum,
//   showCurriculum,
//   onFormToggle,
// }) => {
//   const [active, setActive] = useState("Basic");
//   const [showBasicData, setShowBasicData] = useState(BasicModules.slice(0, 3));
//   const [showAdvanceData, setShowAdvanceData] = useState(
//     AdvanceModules.slice(0, 3)
//   );
//   const [showAll, setShowAll] = useState(false);
//   const [closeForm, setCloseForm] = useState(false);

//   const [activeTab, setActiveTab] = useState("Basic Course");
//   const tabs = ["Basic Course", "Advance Course"];
//   const handleDownloadFile = () => {
//     setCloseForm(true);
//     onFormToggle(true);
//   };

//   const handleCloseForm = () => {
//     setCloseForm(false);
//     onFormToggle(false);
//   };

//   // const showAllModules = () => {
//   //   if (!showAll) {
//   //     setShowAll(true);
//   //     setShowBasicData(BasicModules);
//   //     setShowAdvanceData(AdvanceModules);
//   //   } else {
//   //     setShowAll(false);
//   //     setShowBasicData(BasicModules.slice(0, 3));
//   //     setShowAdvanceData(AdvanceModules.slice(0, 3));
//   //   }
//   // };

//   const showAllModules = () => {
//     setShowAll(true);
//     setShowBasicData(BasicModules);
//     setShowAdvanceData(AdvanceModules);
//   };

//   // Trigger showAllModules when showCurriculum becomes true
//   useEffect(() => {
//     if (showCurriculum) {
//       showAllModules();
//     } else {
//       setShowAll(false);
//       setShowBasicData(BasicModules.slice(0, 3));
//       setShowAdvanceData(AdvanceModules.slice(0, 3));
//     }
//   }, [showCurriculum, BasicModules, AdvanceModules]);

//   const handleClick = () => {
//     setActive((prev) => (prev === "Basic" ? "Advance" : "Basic"));
//   };

//   const syllabusTitle = (variant) => {
//     switch (variant) {
//       case "FinancialAnalyst":
//         return "Financial Analyst Online Training Syllabus";
//       case "MachineLearning":
//         return "Machine Learning Online Training Syllabus";
//       case "BusinessAnalyst":
//         return "Business Analyst Course Syllabus";
//       case "DataScience":
//         return "Full Data Science Course Syllabus";
//       case "DataAnalystFellowship":
//         return "Data Analyst Fellowship Course";
//       case "DataAnalyst":
//         return "Data Analyst Course";
//       case "DigitalMarketing":
//         return "Digital Marketing Course Syllabus";
//       case "UI/UX":
//         return "Online Course for UI UX Design Syllabus";
//       case "FrontendDevelopment":
//         return "Frontend Development Syllabus";
//       case "BackendDevelopment":
//         return "Backend Development Syllabus";
//       case "GraphicDesign":
//         return "Complete Graphic Design Course Syllabus";
//       case "WebDevFellowship":
//         return "Complete Web Development Course Syllabus"
//       default:
//         return "Data Analyst Fellowship Course";
//     }
//   };


//   const syllabusSubHeading = (variant) => {
//     switch (variant) {
//       case "DataAnalystFellowship":
//         return `Our <b> Data Analyst Fellowship Course </b> provides a complete learning roadmap for aspiring analysts. You’ll start with the basics and move toward advanced analytics, dashboards, and reporting.`;
//       default:
//         return "Gain practical skills, industry knowledge, and hands-on experience to excel in your professional journey.";
//     }
//   };

//   const currentModules = active === "Basic" ? showBasicData : showAdvanceData;

//   const ModuleColors = [
//     "bg-brand-subtle text-brand border-brand/30",
//     "bg-error-subtle text-error border-error/30",
//     "bg-brand-subtle text-brand border-brand/30",
//   ];

//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-delay="0"
//       data-aos-duration="800"
//       className="w-full md:px-10 flex flex-col relative"
//     >
//       <h2 className=" text-3xl lg:text-4xl font-semibold text-content mb-4 text-content text-center">
//         {syllabusTitle(varient)}
//       </h2>
//       <p
//         className="text-lg text-content-secondary max-w-2xl mx-auto mb-3"
//         dangerouslySetInnerHTML={{ __html: `${syllabusSubHeading(varient)}` }}
//       />


//       <div
//         data-aos="fade-up"
//         data-aos-delay="0"
//         data-aos-duration="800"
//         className="flex items-center justify-between cursor-pointer relative w-full mx-auto z-20"
//         onClick={handleClick}
//       >
//         {/* <div
//           className={`absolute top-1 bottom-1 left-1 right-1 w-[calc(50%-8px)] bg-surface border border-brand/40 rounded-full transition-transform duration-300  ${
//             active === "Advance" ? "transform translate-x-[calc(100%+4px)]" : ""
//           }`}
//         ></div> */}
//         {/* <div className="relative z-10 w-1/2 text-center">
//           <div
//             className={
//               active === "Basic"
//                 ? "text-content text-xs md:text-sm"
//                 : "text-content text-xs md:text-sm"
//             }
//           >
//             Basic Course
//           </div>
//         </div>
//         <div className="relative z-10 w-1/2 text-center">
//           <div
//             className={
//               active === "Advance"
//                 ? "text-content text-xs md:text-sm"
//                 : "text-content text-xs md:text-sm"
//             }
//           >
//             Advance Course
//           </div>
//         </div> */}

//         <div className="flex items-center justify-center gap-6 bg-surface rounded-2xl shadow-md p-6 w-fit mx-auto mb-8">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-7 py-4  text-sm font-medium rounded-2xl relative transition-all duration-300
//               ${activeTab === tab
//                   ? "bg-gradient-to-r from-brand to-brand-active text-white shadow"
//                   : "text-content-secondary hover:bg-brand-subtle"
//                 }`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-blue-600"></span>
//               )}
//             </button>
//           ))}
//         </div>


//       </div>
//       <div
//         data-aos="zoom-out-up"
//         data-aos-delay="0"
//         data-aos-duration="800"
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-20"
//       >
//         {currentModules?.map((modules, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl shadow p-6 flex flex-col gap-3 ${ModuleColors[index % ModuleColors.length]
//               } 
//       ${!showAll && index > 0 ? "hidden md:block" : "block"}`} // 👈 This line controls visibility
//           >
//             <p
//               className={`text-sm text-left ${ModuleColors[index % ModuleColors.length]
//                 }`}
//             >
//               {modules.ModuleName}
//             </p>
//             <h4 className="text-lg font-bold text-content pb-4 text-left">
//               {modules.title}
//             </h4>
//             {modules.topics?.map((topic, topicIndex) => (
//               <p
//                 key={topicIndex}
//                 className="text-sm text-content flex items-start gap-2 text-left"
//               >
//                 <FaAngleRight />
//                 {topic}.
//               </p>
//             ))}
//           </div>
//         ))}

//         {!showCurriculum && (
//           <div className="flex items-end justify-center absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-surface to-transparent">
//             <button
//               onClick={() => handleDownloadFile()}
//               className="text-content font-semibold textsm flex items-center gap-2 text-sm md:text-base mb-6"
//             >
//               See Full Curriculum <FaAngleDown />
//             </button>
//           </div>
//         )}

//         {closeForm && (
//           <div
//             /* Scrim stays literally black: a themed token would turn near-white
//                in dark mode, which is the opposite of a scrim. */
//             className="fixed top-0 w-full h-full z-50 bg-black/50 backdrop-blur-sm flex items-center justify-start"
//           >
//             <Forms
//               setCloseForm={handleCloseForm}
//               setShowCurriculum={setShowCurriculum}
//             />
//           </div>
//         )}
//       </div>

//       {varient === "DataAnalystFellowship" && (
//         <>
//           <p className="text-lg text-content-secondary max-w-2xl mx-auto my-8">
//             This fellowship focuses on both technical and problem-solving skills, ensuring you
//             become a confident data analyst.
//           </p>

//           <h2 className=" text-3xl lg:text-4xl font-semibold text-content mb-4 text-content text-center mt-8">
//             Data Analyst Fellowship Course Online
//           </h2>

//           <p className="text-lg text-content-secondary mt-4 max-w-3xl m-auto ">
//             The Data Analyst Fellowship Course Online is perfect for learners who want flexibility
//             and personal guidance. You can learn at your own pace through live and recorded sessions.
//           </p>

//           <div className="text-white max-w-3xl m-auto">
//             <p className="flex items-star font-semibold text-content mb-4 text-content text-center mt-8">
//               Why Choose the Online Mode:
//             </p>

//             <ul className="space-y-4 ml-5">
//               <li className="flex items-start gap-3 text-content-secondary">
//                 <span className="text-xl">•</span>
//                 <span>Attend live mentor sessions from anywhere</span>
//               </li>

//               <li className="flex items-start gap-3 text-content-secondary">
//                 <span className="text-xl">•</span>
//                 <span>Access lifetime course materials</span>
//               </li>

//               <li className="flex items-start gap-3 text-content-secondary">
//                 <span className="text-xl">•</span>
//                 <span>Get feedback on your projects directly from mentors</span>
//               </li>

//               <li className="flex items-start gap-3 text-content-secondary">
//                 <span className="text-xl">•</span>
//                 <span>Learn through interactive assignments and case studies</span>
//               </li>
//             </ul>
//           </div>

//           <p className="mt-6 leading-7 text-content-secondary m-auto max-w-3xl">
//             This online fellowship brings you the classroom experience virtually,
//             making learning effective and convenient.
//           </p>
//         </>
//       )}



//     </div>


//   );
// };

// export default Module;.



import React, { useState } from "react";
import { FaAngleDown, FaAngleRight, FaCheckCircle } from "react-icons/fa";
import Forms from "../Forms/Forms";

/**
 * Curriculum / syllabus section (redesign).
 *
 * Design
 *   - Tabs are a pill-shaped segmented control (the old one had a hard-coded
 *     blue arrow and a heavy gradient).
 *   - Module cards are light: neutral surface + border, with a small tinted
 *     chip for the module name. Colours cycle brand / info / success instead
 *     of putting the error (red) colour on the middle card.
 *   - "See Full Curriculum" is a clear pill button over a soft fade.
 *   - The fellowship extra content is a tidy card with check-icon list items.
 *
 * Bugs fixed
 *   - The tabs kept TWO pieces of state: the buttons set `activeTab`, but the
 *     cards used `active`, which was flipped by an onClick on the wrapper div.
 *     Clicking the tab that was already selected switched the content anyway.
 *     There is now one `active` state driven by the tab buttons.
 *   - Cards used `hidden md:block` while also being `flex flex-col`, which
 *     dropped the flex layout on desktop. Now `hidden md:flex`.
 *   - The "See Full Curriculum" overlay covered the whole grid (`h-full`) and
 *     blocked clicks on the cards. It is now a bottom fade with
 *     pointer-events-none; only the button is clickable.
 *   - The fellowship list wrapper had `text-white`, unreadable on light
 *     backgrounds. Removed.
 *
 * Cleanup
 *   - The two useState copies of the module lists plus the effect that kept
 *     them in sync are replaced by values derived from props.
 *   - Removed dead/commented code. Props and behaviour are unchanged.
 */

const TABS = [
  { key: "Basic", label: "Basic Course" },
  { key: "Advance", label: "Advance Course" },
];

const MODULE_ACCENTS = [
  "bg-brand-subtle text-brand",
  "bg-info-subtle text-info",
  "bg-success-subtle text-success",
];

const syllabusTitle = (variant) => {
  switch (variant) {
    case "FinancialAnalyst":
      return "Financial Analyst Online Training Syllabus";
    case "MachineLearning":
      return "Machine Learning Online Training Syllabus";
    case "BusinessAnalyst":
      return "Business Analyst Course Syllabus";
    case "DataScience":
      return "Full Data Science Course Syllabus";
    case "DataAnalystFellowship":
      return "Data Analyst Fellowship Course";
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
    default:
      return "Data Analyst Fellowship Course";
  }
};

const syllabusSubHeading = (variant) => {
  switch (variant) {
    case "DataAnalystFellowship":
      return `Our <b> Data Analyst Fellowship Course </b> provides a complete learning roadmap for aspiring analysts. You’ll start with the basics and move toward advanced analytics, dashboards, and reporting.`;
    default:
      return "Gain practical skills, industry knowledge, and hands-on experience to excel in your professional journey.";
  }
};

const ONLINE_MODE_POINTS = [
  "Attend live mentor sessions from anywhere",
  "Access lifetime course materials",
  "Get feedback on your projects directly from mentors",
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
            This fellowship focuses on both technical and problem-solving
            skills, ensuring you become a confident data analyst.
          </p>

          <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-content lg:text-4xl">
            Data Analyst Fellowship Course Online
          </h2>

          <p className="text-center text-base leading-relaxed text-content-secondary lg:text-lg">
            The Data Analyst Fellowship Course Online is perfect for learners
            who want flexibility and personal guidance. You can learn at your
            own pace through live and recorded sessions.
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
            This online fellowship brings you the classroom experience
            virtually, making learning effective and convenient.
          </p>
        </div>
      )}
    </div>
  );
};

export default Module;