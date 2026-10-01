// // const Ellipse = "/assets/Ellipse.webp";

// const RoadTrack = "/assets/Road.png";
// const Airplane = "/assets/Airplane2.png";
// import React, { useRef, useEffect, useState } from "react";
// const RoadMapMobile = "/assets/GraphicDesign/RoadMapMobile.svg";
// // import { useGSAP } from "@gsap/react";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import gsap from "gsap";
// import { motion } from "framer-motion";
// import {
//   MessageCircle,
//   Edit3,
//   Palette,
//   Code,
//   Layout,
//   Building,
//   CheckCircle,
//   Rocket,
// } from "lucide-react";

// const CourseRoadmap = ({
//   ModuleInfo,
//   roadmapSteps,
//   // RoadmapIconList,
//   varient,
//   courseName,
// }) => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const trackPath = useRef(null);
//   const [trackHeight, setTrackHeight] = useState(0);
//   const [trackTop, setTrackTop] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset;
//       setScrollPosition(position);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (trackPath.current) {
//       setTrackHeight(trackPath.current.offsetHeight);
//       const rect = trackPath.current.getBoundingClientRect();
//       setTrackTop(rect.top + window.pageYOffset);
//     }
//   }, []);

//   useEffect(() => {
//     if (trackPath.current) {
//       const updateTrackMetrics = () => {
//         setTrackHeight(trackPath.current.offsetHeight);
//         const rect = trackPath.current.getBoundingClientRect();
//         setTrackTop(rect.top + window.pageYOffset);
//       };

//       updateTrackMetrics();
//       window.addEventListener("resize", updateTrackMetrics);
//       return () => window.removeEventListener("resize", updateTrackMetrics);
//     }
//   }, []);
//   const calculateAirplanePosition = () => {
//     if (trackHeight === 0) return 0;

//     const viewportHeight = window.innerHeight;
//     const scrollPercentage =
//       (scrollPosition + viewportHeight - trackTop) /
//       (trackHeight + viewportHeight);
//     const clampedPercentage = Math.max(0, Math.min(1, scrollPercentage));

//     return clampedPercentage * trackHeight;
//   };

//   const calculateProgressPercentage = () => {
//     if (trackHeight === 0) return 0;

//     const viewportHeight = window.innerHeight;
//     const scrollPercentage =
//       (scrollPosition + viewportHeight - trackTop) /
//       (trackHeight + viewportHeight);

//     const clampedPercentage = Math.max(0, Math.min(1, scrollPercentage));

//     return clampedPercentage * 100;
//   };

//   const subHeading = (variant) => {
//     switch (variant) {
//       case "DataAnalystFellowship":
//         return `
//         Our <b>Data Analytics Course Fellowship</b> is a structured and mentorship-based program that helps you become a job-ready data analyst. 
//         The fellowship covers everything from data cleaning, visualization, and statistics to advanced data storytelling and predictive analytics.
//         <br/><br/>
//         You’ll work on real projects guided by mentors from top tech companies. 
//         By the end of the fellowship, you’ll have a complete portfolio that helps you stand out in job interviews.
//       `;

//       default:
//         return "Our structured 8-step process ensures your project is delivered.";
//     }
//   };


//   // const roadmapSteps = [
//   //   {
//   //     id: 1,
//   //     title: "Discussion",
//   //     description:
//   //       "Do discussions to ensure that your web design is on the right path.",
//   //     icon: MessageCircle,
//   //     color: "blue",
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Planning",
//   //     description:
//   //       "Create sitemaps and wireframe.A sitemap is made with the information collected. A wireframe provides a visual description of a site.",
//   //     icon: Edit3,
//   //     color: "green",
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Visual Design",
//   //     description: "Web design should be according to the target audience.",
//   //     icon: Palette,
//   //     color: "purple",
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "Development",
//   //     description: "Developers develop and run codes on your site.",
//   //     icon: Code,
//   //     color: "orange",
//   //   },
//   //   {
//   //     id: 5,
//   //     title: "Framework",
//   //     description:
//   //       "Create a framework for your site by adding in pages required.",
//   //     icon: Layout,
//   //     color: "indigo",
//   //   },
//   //   {
//   //     id: 6,
//   //     title: "Site Building",
//   //     description: "Build your site by adding in an engaging and SEO content.",
//   //     icon: Building,
//   //     color: "teal",
//   //   },
//   //   {
//   //     id: 7,
//   //     title: "Testing",
//   //     description:
//   //       "Every page and link should be tested before launching the site to make sure nothing is broken.",
//   //     icon: CheckCircle,
//   //     color: "red",
//   //   },
//   //   {
//   //     id: 8,
//   //     title: "Launch",
//   //     description: "Launch your website to attract your audience.",
//   //     icon: Rocket,
//   //     color: "slate",
//   //   },
//   // ];

//   const colorClasses = {
//     blue: {
//       badge: "bg-info",
//       iconBg: "bg-info-subtle",
//       iconColor: "text-info",
//     },
//     green: {
//       badge: "bg-success",
//       iconBg: "bg-success-subtle",
//       iconColor: "text-success",
//     },
//     purple: {
//       badge: "bg-brand",
//       iconBg: "bg-brand-subtle",
//       iconColor: "text-brand",
//     },
//     orange: {
//       badge: "bg-warning",
//       iconBg: "bg-warning-subtle",
//       iconColor: "text-warning",
//     },
//     indigo: {
//       badge: "bg-brand",
//       iconBg: "bg-brand-subtle",
//       iconColor: "text-brand",
//     },
//     teal: {
//       badge: "bg-success",
//       iconBg: "bg-success-subtle",
//       iconColor: "text-success",
//     },
//     red: {
//       badge: "bg-error",
//       iconBg: "bg-error-subtle",
//       iconColor: "text-error",
//     },
//     slate: {
//       badge: "bg-slate-600",
//       iconBg: "bg-slate-50",
//       iconColor: "text-slate-600",
//     },
//   };

//   return (
//     <div className="w-full relative bg-transparent rounded-lg mb-6 mt-8">
//       <section className="">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div
//             data-aos="fade-up"
//             data-aos-delay="0"
//             data-aos-duration="800"
//             className="text-center md:mb-16 mb-4 "
//           >
//             <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4 mt-2">
//               {`${courseName}`}
//             </h2>
//             <p className="text-lg text-content-secondary max-w-2xl mx-auto"
//             dangerouslySetInnerHTML={{ __html: `${subHeading(varient)}` }}
//             />
             
            
//           </div>

//           {/* Desktop Timeline */}
//           <div
//             data-aos="fade-up"
//             data-aos-delay="0"
//             data-aos-duration="800"
//             className="hidden lg:block"
//           >
//             {/* First Row */}
//             <div className="relative md:mb-16 mb-4 ">
//               <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-sunken transform -translate-y-1/2"></div>
//               <div className="grid grid-cols-4 gap-8">
//                 {roadmapSteps.slice(0, 4).map((step, index) => (
//                   <RoadmapCard
//                     key={step.id}
//                     step={step}
//                     colorClasses={colorClasses}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Second Row */}
//             <div className="relative">
//               <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-surface-sunken transform -translate-y-1/2"></div>
//               <div className="grid grid-cols-4 gap-8">
//                 {roadmapSteps.slice(4, 8).map((step, index) => (
//                   <RoadmapCard
//                     key={step.id}
//                     step={step}
//                     colorClasses={colorClasses}
//                     index={index + 4}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Mobile Timeline */}
//           <div
//             data-aos="fade-up"
//             data-aos-delay="0"
//             data-aos-duration="800"
//             className="lg:hidden relative"
//             ref={trackPath}
//           >
//             {/* Scroll Progress Bar */}
//             <div className="absolute left-2 top-0 bottom-0 w-1 bg-surface-sunken rounded-full overflow-hidden z-0">
//               <div
//                 className="bg-brand w-full transition-all duration-300"
//                 style={{ height: `${calculateProgressPercentage()}%` }}
//               />
//             </div>

//             {/* Roadmap Steps */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="0"
//               data-aos-duration="800"
//               className="space-y-8 pl-8"
//             >
//               {roadmapSteps.map((step, index) => (
//                 <div key={step.id} className="relative flex items-center">
//                   <div
//                     data-aos="fade-up"
//                     data-aos-delay="0"
//                     data-aos-duration="800"
//                     className="absolute -left-[30px] top-6 w-4 h-4 bg-brand border-2 border-line rounded-full shadow-sm z-10"
//                   ></div>
//                   <RoadmapCard
//                     step={step}
//                     colorClasses={colorClasses}
//                     index={index}
//                     mobile
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* <figure
//         data-aos="zoom-in-down"
//         data-aos-delay="0"
//         data-aos-duration="800"
//         className="hidden md:block w-full mb-6 relative z-20">
//         <img
//           src={ModuleInfo[0]?.image}
//           alt={ModuleInfo[0]?.alt}
//           className="w-full h-full rounded-lg object-cover mx-auto"
//         />
//       </figure>
//       <figure
//         data-aos="fade-up"
//         data-aos-delay="0"
//         data-aos-duration="800"
//         className="md:hidden p-4">
//         <img
//           src={ModuleInfo[1]?.image}
//           alt={ModuleInfo[1]?.alt}
//           className="w-full h-auto md:hidden rounded-lg object-cover mx-auto"
//         />
//       </figure> */}
//       {/* <div
//         className="w-full md:hidden flex items-start justify-between flex-col gap-10 relative"
//         ref={trackPath}
//       >
//         <div className="absolute w-8 left-[0.3rem]">
//           <figure
//             className={`relative w-full ${
//               varient === "WebDev" ? "webDevPlane h-[60rem]" : ""
//             }
            
//             ${varient === "DataScience" ? "dataSciencePlane " : ""}

//             ${varient === "DigitalMarketing" ? "DigitalMarketingPlane" : ""}


//             ${varient === "MachineLearning" ? "MachineLearningPlane" : ""}

//             ${varient === "UiDesign" ? "UiDesignPlane" : ""}
//             ${varient === "Data Analyst" ? "UiDesignPlane" : ""}
//             ${varient === "graphic-design" ? "graphic-design-plane" : ""}`}
//           >
//             <img
//               src={RoadTrack}
//               alt="Road to Success"
//               className="w-full h-full"
//             />
//           </figure>
//         </div>
//         <figure className="">
//           <img
//             src={Airplane}
//             alt="Airplane"
//             className="w-20 h-auto absolute -left-[20px] z-30"
//             style={{
//               top: `${calculateAirplanePosition()}px`,
//               transition: "top 0.5s ease-out",
//             }}
//           />
//         </figure>

//         {RoadmapIconList?.map((roadmap, i) => (
//           <figure
//             key={i}
//             className="w-full relative z-20 flex items-center justify-start gap-6"
//           >
//             <img
//               className="w-10 h-10 object-cover rounded-full"
//               src={roadmap.Icon}
//               alt={roadmap.headText}
//             />
//             <figcaption className="text-base sm:text-lg font-bold text-content text-left">
//               <p className="text-primary">{roadmap.headText}</p>
//               <p className="text-secondary">{roadmap.text}</p>
//             </figcaption>
//           </figure>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// const RoadmapCard = ({ step, colorClasses, index, mobile = false }) => {
//   const IconComponent = step.icon;
//   const colors = colorClasses[step.color];

//   return (
//     <div className="bg-surface rounded-xl p-6 shadow-md border border-line relative z-10 transform hover:scale-105 transition-all duration-500">
//       <div className="flex items-center justify-between mb-4">
//         <div
//           className={`w-8 h-8 ${colors.badge} text-brand-fg rounded-full flex items-center justify-center text-sm font-semibold`}
//         >
//           {step.id}
//         </div>
//         <div
//           className={`w-10 h-10 ${colors.iconBg} rounded-lg flex items-center justify-center`}
//         >
//           <IconComponent className={`w-5 h-5 ${colors.iconColor}`} />
//         </div>
//       </div>
//       <h3 className="text-lg font-semibold text-content mb-2">{step.title}</h3>
//       <p className="text-sm text-content-secondary leading-relaxed">
//         {step.description}
//       </p>
//     </div>
//   );
// };

// export default CourseRoadmap;



import React, { useRef, useEffect, useState } from "react";

/**
 * Course roadmap (redesign).
 *
 *   - Cards are light (surface + border) with a thin coloured accent on top
 *     and a tinted icon tile. The step colour still comes from `step.color`
 *     through the same token map as before.
 *   - Desktop: the connector behind each row is now dashed and soft, cards lift
 *     on hover instead of scaling (scaling blurred the text), and all cards in
 *     a row have the same height.
 *   - Mobile: the scroll-progress timeline is kept, but progress is now
 *     computed from the timeline's own position inside a requestAnimationFrame
 *     handler, so it no longer re-renders on every raw scroll event.
 *   - Removed dead code: the airplane/road experiment, the commented step
 *     list, unused imports (framer-motion, lucide, image constants).
 *     Props are unchanged, so existing callers keep working.
 */

const subHeading = (variant) => {
  switch (variant) {
    case "DataAnalystFellowship":
      return `
        Our <b>Data Analytics Course Fellowship</b> is a structured and mentorship-based program that helps you become a job-ready data analyst. 
        The fellowship covers everything from data cleaning, visualization, and statistics to advanced data storytelling and predictive analytics.
        <br/><br/>
        You’ll work on real projects guided by mentors from top tech companies. 
        By the end of the fellowship, you’ll have a complete portfolio that helps you stand out in job interviews.
      `;

    default:
      return "Our structured 8-step process ensures your project is delivered.";
  }
};

const colorClasses = {
  blue: { badge: "bg-info", iconBg: "bg-info-subtle", iconColor: "text-info" },
  green: { badge: "bg-success", iconBg: "bg-success-subtle", iconColor: "text-success" },
  purple: { badge: "bg-brand", iconBg: "bg-brand-subtle", iconColor: "text-brand" },
  orange: { badge: "bg-warning", iconBg: "bg-warning-subtle", iconColor: "text-warning" },
  indigo: { badge: "bg-brand", iconBg: "bg-brand-subtle", iconColor: "text-brand" },
  teal: { badge: "bg-success", iconBg: "bg-success-subtle", iconColor: "text-success" },
  red: { badge: "bg-error", iconBg: "bg-error-subtle", iconColor: "text-error" },
  slate: { badge: "bg-slate-600", iconBg: "bg-slate-50", iconColor: "text-slate-600" },
};

// eslint-disable-next-line no-unused-vars
const CourseRoadmap = ({ ModuleInfo, roadmapSteps = [], varient, courseName }) => {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // mobile timeline progress (0-100), same formula as before
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const ratio = (vh - rect.top) / (rect.height + vh);
      setProgress(Math.max(0, Math.min(1, ratio)) * 100);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [roadmapSteps.length]);

  return (
    <div className="relative mb-6 mt-8 w-full rounded-lg bg-transparent">
      <section>
        <div className="mx-auto max-w-7xl px-2 md:px-6">
          {/* Header */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="800"
            className="mb-6 text-center md:mb-16"
          >
            <h2 className="mb-4 mt-2 text-3xl font-semibold tracking-tight text-content lg:text-4xl">
              {courseName}
            </h2>
            <p
              className="mx-auto max-w-2xl text-base leading-relaxed text-content-secondary lg:text-lg"
              dangerouslySetInnerHTML={{ __html: subHeading(varient) }}
            />
          </div>

          {/* Desktop timeline: two rows of four */}
          <div className="hidden space-y-10 lg:block">
            {[roadmapSteps.slice(0, 4), roadmapSteps.slice(4, 8)].map(
              (row, r) =>
                row.length > 0 && (
                  <div key={r} className="relative">
                    <div
                      aria-hidden="true"
                      className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-line-strong opacity-60"
                    />
                    <ul className="relative grid grid-cols-4 gap-8">
                      {row.map((step, i) => (
                        <li
                          key={step.id}
                          data-aos="fade-up"
                          data-aos-delay={i * 100}
                          data-aos-duration="800"
                          className="h-full"
                        >
                          <RoadmapCard step={step} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>

          {/* Mobile / tablet timeline */}
          <div ref={trackRef} className="relative lg:hidden">
            {/* progress rail */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-2 top-0 z-0 w-1 overflow-hidden rounded-full bg-surface-sunken"
            >
              <div
                className="w-full rounded-full bg-brand transition-[height] duration-300"
                style={{ height: `${progress}%` }}
              />
            </div>

            <ul className="space-y-6 pl-8">
              {roadmapSteps.map((step) => (
                <li
                  key={step.id}
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="800"
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[30px] top-7 z-10 h-4 w-4 rounded-full border-2 border-brand bg-canvas"
                  />
                  <RoadmapCard step={step} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const RoadmapCard = ({ step }) => {
  const IconComponent = step.icon;
  const colors = colorClasses[step.color] ?? colorClasses.purple;

  return (
    <article className="group relative z-10 flex h-full w-full flex-col overflow-hidden rounded-card border border-line bg-surface p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lg md:p-6">
      {/* colour accent on top */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 ${colors.badge} opacity-80`}
      />

      <div className="mb-4 flex items-center justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-control ${colors.iconBg} transition-transform duration-300 group-hover:scale-110`}
        >
          {IconComponent && <IconComponent className={`h-5 w-5 ${colors.iconColor}`} />}
        </div>
        <span
          aria-label={`Step ${step.id}`}
          className="text-3xl font-bold tabular-nums text-content-muted opacity-40"
        >
          {String(step.id).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold leading-snug text-content">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-content-secondary">
        {step.description}
      </p>
    </article>
  );
};

export default CourseRoadmap;