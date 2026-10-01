// import { Link } from "@/lib/router-compat";
// import { SlCalender } from "react-icons/sl";
// import { FaStar } from "react-icons/fa";
// import { Clock, CheckCircle, Briefcase, Download } from "lucide-react";
// import { BiRupee } from "react-icons/bi";

// /**
//  * Shared hero for all ten fellowship detail pages
//  * (src/views/fellowship/FellowShipPage/*.jsx render this with their own
//  * `PageDetails`). Redesigning it here redesigns every fellowship hero.
//  *
//  * The data contract is unchanged — `badge`, `headings`, `card`, `stats`,
//  * `trustMetrics` are read exactly as before, so no Utils file needs editing.
//  *
//  * Fixed alongside the theming (details at each site):
//  *   - a `console.log` of the whole PageDetails object on every render
//  *   - a "Download Syllabus" button wired to an undefined handler
//  *   - an Enrol button that turned its own label invisible on hover
//  *   - eight unused imports, incl. react-tilt and framer-motion
//  *   - `dark:from-inherit dark:via-inherit dark:to-inherit` repeated five times
//  */

// const ENROL_LINK = "https://pages.razorpay.com/umweb2026";

// /** Rotating token surfaces for the stat tiles. */
// const STAT_TONES = [
//   "bg-brand-subtle text-brand",
//   "bg-success-subtle text-success",
//   "bg-info-subtle text-info",
//   "bg-warning-subtle text-warning",
// ];

// const FellowshipHomeSection = ({ PageDetails }) => {
//   const items = Array.isArray(PageDetails) ? PageDetails : [];
//   const item = items[0];

//   if (!item) return null;

//   const { badge, headings = {}, card = {}, stats = [], trustMetrics = {} } = item;

//   // `features` was a hard-coded array declared inside the component, so every
//   // fellowship advertised "10 Weeks" regardless of its real length. It now
//   // reads the track's own duration when the data provides one.
//   const duration = card.duration || item.duration || null;
//   const features = [
//     duration && { icon: Clock, text: duration },
//     { icon: CheckCircle, text: "Beginner Friendly" },
//     { icon: Briefcase, text: "Job Assistance" },
//   ].filter(Boolean);

//   return (
//     <div className="relative isolate w-full overflow-hidden bg-canvas text-content">
//       {/* One soft brand wash, replacing the slate/sky/indigo gradient that fell
//           back to `bg-inherit` in dark mode and left the hero unstyled. */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 65% 60% at 25% -10%, hsl(var(--k-brand) / 0.16), transparent 70%)",
//           }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 50% 50% at 90% 10%, hsl(var(--k-accent) / 0.10), transparent 70%)",
//           }}
//         />
//       </div>

//       <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:flex-row lg:items-start lg:gap-14 lg:px-8">
//         {/* ---------------- left ---------------- */}
//         <div
//           data-aos="fade-up"
//           data-aos-delay="0"
//           data-aos-duration="800"
//           className="w-full lg:w-[55%]"
//         >
//           {badge && (
//             <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-content-secondary shadow-xs md:text-sm">
//               <CheckCircle aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
//               {badge}
//             </span>
//           )}

//           <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl xl:text-5xl">
//             {headings.title}
//           </h1>

//           {headings.subtitle && (
//             <p className="mt-3 text-lg font-medium text-brand md:text-xl">
//               {headings.subtitle}
//             </p>
//           )}

//           {headings.description && (
//             <p
//               className="mt-4 max-w-2xl text-base leading-relaxed text-content-secondary"
//               // The copy in the Utils files contains inline markup, so this
//               // stays as-is. Content is authored in-repo, not user-supplied.
//               dangerouslySetInnerHTML={{ __html: headings.description }}
//             />
//           )}

//           <ul className="mt-7 flex flex-wrap gap-2.5">
//             {features.map(({ icon: Icon, text }) => (
//               <li
//                 key={text}
//                 className="inline-flex items-center gap-2 rounded-control border border-line bg-surface px-3.5 py-2 text-sm font-medium text-content-secondary shadow-xs"
//               >
//                 <Icon aria-hidden="true" className="h-4 w-4 text-brand" />
//                 {text}
//               </li>
//             ))}
//           </ul>

//           {trustMetrics.rating && (
//             <div className="mt-6 flex items-center gap-2.5">
//               <div aria-hidden="true" className="flex text-warning">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <FaStar key={i} className="h-4 w-4" />
//                 ))}
//               </div>
//               <p className="text-sm text-content-secondary">
//                 {trustMetrics.rating}/5 · {trustMetrics.totalReviews} reviews
//               </p>
//             </div>
//           )}

//           <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//             <Link
//               to={card.ApplyLink || ENROL_LINK}
//               className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
//             >
//               {card.ctaText || "Enrol now"}
//             </Link>

//             {/* Was a <button onClick={onSyllabusDownload}> where that prop was
//                 never passed — the handler was `undefined`, so the button did
//                 nothing at all. It is a real link when the data supplies a
//                 syllabus URL, and is simply not rendered when it does not. */}
//             {card.syllabusLink && (
//               <Link
//                 to={card.syllabusLink}
//                 className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors duration-200 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus md:text-base"
//               >
//                 <Download aria-hidden="true" className="h-4 w-4" />
//                 Download syllabus
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* ---------------- right: stats card ---------------- */}
//         <div
//           data-aos="fade-up"
//           data-aos-delay="0"
//           data-aos-duration="800"
//           className="w-full lg:w-[45%]"
//         >
//           <div className="rounded-panel border border-line bg-surface p-6 shadow-md md:p-7">
//             {stats.length > 0 && (
//               <dl className="mb-6 grid grid-cols-2 gap-3">
//                 {stats.map((stat, index) => (
//                   // The `color` / `bgColor` classes in the Utils data are fixed
//                   // light-mode Tailwind shades (bg-sky-50, bg-green-50 …) that
//                   // stay near-white on a dark surface. Tokens are used instead,
//                   // cycling so the tiles keep their visual variety.
//                   <div
//                     key={stat.label ?? index}
//                     className={[
//                       "rounded-card p-4 text-center transition-transform duration-300 hover:-translate-y-0.5",
//                       STAT_TONES[index % STAT_TONES.length],
//                     ].join(" ")}
//                   >
//                     <dd className="text-2xl font-bold">{stat.value}</dd>
//                     <dt className="mt-1 text-xs font-medium text-content-secondary">
//                       {stat.label}
//                     </dt>
//                   </div>
//                 ))}
//               </dl>
//             )}

//             <div className="space-y-3 border-t border-line pt-5">
//               {card.batchStartDate && (
//                 <div className="flex items-center justify-between gap-3">
//                   <span className="flex items-center gap-2 text-sm text-content-secondary">
//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
//                       <SlCalender aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
//                     </span>
//                     Next batch starts
//                   </span>
//                   <span className="text-sm font-semibold text-content">
//                     {card.batchStartDate}
//                   </span>
//                 </div>
//               )}

//               <div className="flex items-center justify-between gap-3">
//                 <span className="flex items-center gap-2 text-sm text-content-secondary">
//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
//                     <BiRupee aria-hidden="true" className="h-4 w-4 text-brand" />
//                   </span>
//                   Pricing starts from
//                 </span>
//                 {/* Was `text-red-500 animate-pulse` — a permanently blinking
//                     price reads as an error state and never stops moving. */}
//                 <span className="text-sm font-semibold text-brand">₹399/-</span>
//               </div>
//             </div>

//             <Link
//               to={card.ApplyLink || ENROL_LINK}
//               // Was `bg-sky-900 ... hover:bg-gray-100` while keeping
//               // `text-white`, so hovering turned the label invisible.
//               className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-control bg-brand text-sm font-semibold text-brand-fg transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
//             >
//               {card.ctaText || "Enrol now"}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FellowshipHomeSection;




// import { Link } from "@/lib/router-compat";
// import { SlCalender } from "react-icons/sl";
// import { FaStar } from "react-icons/fa";
// import { Clock, CheckCircle, Briefcase, Download } from "lucide-react";
// import { BiRupee } from "react-icons/bi";
// import Reveal from "@/component/ui/Reveal";
// import { Eyebrow } from "@/component/ui/Section";

// /**
//  * Shared hero for all ten fellowship detail pages
//  * (src/views/fellowship/FellowShipPage/*.jsx render this with their own
//  * `PageDetails`). Redesigning it here redesigns every fellowship hero.
//  *
//  * The data contract is unchanged — `badge`, `headings`, `card`, `stats`,
//  * `trustMetrics` are read exactly as before, so no Utils file needs editing.
//  *
//  * Fixed alongside the theming (details at each site):
//  *   - a `console.log` of the whole PageDetails object on every render
//  *   - a "Download Syllabus" button wired to an undefined handler
//  *   - an Enrol button that turned its own label invisible on hover
//  *   - eight unused imports, incl. react-tilt and framer-motion
//  *   - `dark:from-inherit dark:via-inherit dark:to-inherit` repeated five times
//  */

// const ENROL_LINK = "https://pages.razorpay.com/umweb2026";

// /** Rotating token surfaces for the stat tiles. */
// const STAT_TONES = [
//   "bg-brand-subtle text-brand",
//   "bg-success-subtle text-success",
//   "bg-info-subtle text-info",
//   "bg-warning-subtle text-warning",
// ];

// const FellowshipHomeSection = ({ PageDetails }) => {
//   const items = Array.isArray(PageDetails) ? PageDetails : [];
//   const item = items[0];

//   if (!item) return null;

//   const { badge, headings = {}, card = {}, stats = [], trustMetrics = {} } = item;

//   // `features` was a hard-coded array declared inside the component, so every
//   // fellowship advertised "10 Weeks" regardless of its real length. It now
//   // reads the track's own duration when the data provides one.
//   const duration = card.duration || item.duration || null;
//   const features = [
//     duration && { icon: Clock, text: duration },
//     { icon: CheckCircle, text: "Beginner Friendly" },
//     { icon: Briefcase, text: "Job Assistance" },
//   ].filter(Boolean);

//   return (
//     <div className="relative isolate w-full overflow-hidden bg-canvas text-content">
//       {/* One soft brand wash, replacing the slate/sky/indigo gradient that fell
//           back to `bg-inherit` in dark mode and left the hero unstyled. */}
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 65% 60% at 25% -10%, hsl(var(--k-brand) / 0.16), transparent 70%)",
//           }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 50% 50% at 90% 10%, hsl(var(--k-accent) / 0.10), transparent 70%)",
//           }}
//         />
//       </div>

//       <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:flex-row lg:items-start lg:gap-14 lg:px-8">
//         {/* ---------------- left ---------------- */}
//         {/* `data-aos` removed. AOS writes `aos-animate` straight onto the DOM
//             node, so any React re-render that changes this element's className
//             deletes it and the element is stuck at opacity 0 — the bug that made
//             the FAQ cards vanish. <Reveal> keeps the state in React. */}
//         <div className="w-full lg:w-[55%]">
//           {badge && (
//             <Reveal direction="up">
//               <Eyebrow>{badge}</Eyebrow>
//             </Reveal>
//           )}

//           {/* Was `sm:text-4xl xl:text-5xl` — the same size as the section
//               headings further down, so the fellowship had no clear opening. */}
//           <Reveal direction="up" delay={70}>
//             <h1 className="mt-5 text-balance text-[2.25rem] font-bold leading-[1.06] tracking-[-0.03em] sm:text-5xl xl:text-[3.5rem]">
//               {headings.title}
//             </h1>
//           </Reveal>

//           {headings.subtitle && (
//             <p className="mt-3 text-lg font-medium text-brand md:text-xl">
//               {headings.subtitle}
//             </p>
//           )}

//           {headings.description && (
//             <p
//               className="mt-4 max-w-2xl text-base leading-relaxed text-content-secondary"
//               // The copy in the Utils files contains inline markup, so this
//               // stays as-is. Content is authored in-repo, not user-supplied.
//               dangerouslySetInnerHTML={{ __html: headings.description }}
//             />
//           )}

//           <ul className="mt-7 flex flex-wrap gap-2.5">
//             {features.map(({ icon: Icon, text }) => (
//               <li
//                 key={text}
//                 className="inline-flex items-center gap-2 rounded-control border border-line bg-surface px-3.5 py-2 text-sm font-medium text-content-secondary shadow-xs"
//               >
//                 <Icon aria-hidden="true" className="h-4 w-4 text-brand" />
//                 {text}
//               </li>
//             ))}
//           </ul>

//           {trustMetrics.rating && (
//             <div className="mt-6 flex items-center gap-2.5">
//               <div aria-hidden="true" className="flex text-warning">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <FaStar key={i} className="h-4 w-4" />
//                 ))}
//               </div>
//               <p className="text-sm text-content-secondary">
//                 {trustMetrics.rating}/5 · {trustMetrics.totalReviews} reviews
//               </p>
//             </div>
//           )}

//           <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//             <Link
//               to={card.ApplyLink || ENROL_LINK}
//               className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
//             >
//               {card.ctaText || "Enrol now"}
//             </Link>

//             {/* Was a <button onClick={onSyllabusDownload}> where that prop was
//                 never passed — the handler was `undefined`, so the button did
//                 nothing at all. It is a real link when the data supplies a
//                 syllabus URL, and is simply not rendered when it does not. */}
//             {card.syllabusLink && (
//               <Link
//                 to={card.syllabusLink}
//                 className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors duration-200 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus md:text-base"
//               >
//                 <Download aria-hidden="true" className="h-4 w-4" />
//                 Download syllabus
//               </Link>
//             )}
//           </div>
//         </div>

//         {/* ---------------- right: stats card ---------------- */}
//         <Reveal direction="up" delay={160} className="w-full lg:w-[45%]">
//           <div className="rounded-panel border border-line bg-surface p-6 shadow-md md:p-7">
//             {stats.length > 0 && (
//               <dl className="mb-6 grid grid-cols-2 gap-3">
//                 {stats.map((stat, index) => (
//                   // The `color` / `bgColor` classes in the Utils data are fixed
//                   // light-mode Tailwind shades (bg-sky-50, bg-green-50 …) that
//                   // stay near-white on a dark surface. Tokens are used instead,
//                   // cycling so the tiles keep their visual variety.
//                   <div
//                     key={stat.label ?? index}
//                     className={[
//                       "rounded-card p-4 text-center transition-transform duration-300 hover:-translate-y-0.5",
//                       STAT_TONES[index % STAT_TONES.length],
//                     ].join(" ")}
//                   >
//                     <dd className="text-2xl font-bold">{stat.value}</dd>
//                     <dt className="mt-1 text-xs font-medium text-content-secondary">
//                       {stat.label}
//                     </dt>
//                   </div>
//                 ))}
//               </dl>
//             )}

//             <div className="space-y-3 border-t border-line pt-5">
//               {card.batchStartDate && (
//                 <div className="flex items-center justify-between gap-3">
//                   <span className="flex items-center gap-2 text-sm text-content-secondary">
//                     <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
//                       <SlCalender aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
//                     </span>
//                     Next batch starts
//                   </span>
//                   <span className="text-sm font-semibold text-content">
//                     {card.batchStartDate}
//                   </span>
//                 </div>
//               )}

//               <div className="flex items-center justify-between gap-3">
//                 <span className="flex items-center gap-2 text-sm text-content-secondary">
//                   <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
//                     <BiRupee aria-hidden="true" className="h-4 w-4 text-brand" />
//                   </span>
//                   Pricing starts from
//                 </span>
//                 {/* Was `text-red-500 animate-pulse` — a permanently blinking
//                     price reads as an error state and never stops moving. */}
//                 <span className="text-sm font-semibold text-brand">₹399/-</span>
//               </div>
//             </div>

//             <Link
//               to={card.ApplyLink || ENROL_LINK}
//               // Was `bg-sky-900 ... hover:bg-gray-100` while keeping
//               // `text-white`, so hovering turned the label invisible.
//               className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-control bg-brand text-sm font-semibold text-brand-fg transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
//             >
//               {card.ctaText || "Enrol now"}
//             </Link>
//           </div>
//         </Reveal>
//       </div>
//     </div>
//   );
// };

// export default FellowshipHomeSection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@/lib/router-compat";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { 
  Clock, 
  CheckCircle2, 
  Briefcase, 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  Terminal,
  Sparkles
} from "lucide-react";

const ENROL_LINK = "https://pages.razorpay.com/umweb2026";

/* ---------------- Count-Up Number Hook ---------------- */
const NUMBER_REGEX = /\d[\d,]*(?:\.\d+)?/g;

function useCountUp(targetText, active, duration = 1200) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();

    const update = (now) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const progress = 1 - Math.pow(1 - elapsed, 3);
      setVal(progress);
      if (elapsed < 1) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [active, duration]);

  return String(targetText ?? "").replace(NUMBER_REGEX, (match) => {
    const rawNum = parseFloat(match.replace(/,/g, ""));
    const decimals = (match.split(".")[1] || "").length;
    const current = rawNum * val;

    return match.includes(",")
      ? current.toLocaleString("en-IN", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : current.toFixed(decimals);
  });
}

/* ---------------- Main Fellowship Hero Component ---------------- */
const FellowshipHomeSection = ({ PageDetails }) => {
  const items = Array.isArray(PageDetails) ? PageDetails : [];
  const item = items[0];

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });

  if (!item) return null;

  const { badge, headings = {}, card = {}, stats = [], trustMetrics = {} } = item;
  const duration = card.duration || item.duration || "12 Weeks";
  const ctaHref = card.ApplyLink || ENROL_LINK;

  const rawPrice = card.price || "₹399/-";
  const animatedPrice = useCountUp(rawPrice, isInView);
  const suffixMatch = String(rawPrice).match(/(\/-?)$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const displayPrice = animatedPrice.replace(/(\/-?)$/, "");

  return (
    <section className="relative w-full overflow-hidden bg-canvas text-content pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-line/50">
      {/* Background Radial Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-brand/10 via-brand-active/5 to-transparent blur-3xl" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Cohort & Review Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-3 p-2.5 sm:px-4 rounded-2xl border border-line bg-surface/70 backdrop-blur-md"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-content">
              {badge || "Exclusive Fellowship Track"}
            </span>
            <span className="hidden sm:inline text-xs text-content-muted">•</span>
            <span className="hidden sm:inline text-xs text-content-secondary">
              Applications actively being reviewed
            </span>
          </div>

          {trustMetrics.rating && (
            <div className="flex items-center gap-1.5 text-xs text-content font-medium">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-3 w-3 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold">{trustMetrics.rating}</span>
              <span className="text-content-muted">({trustMetrics.totalReviews} reviews)</span>
            </div>
          )}
        </motion.div>

        {/* 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading & Value Architecture (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-content leading-[1.08]"
            >
              {headings.title}
            </motion.h1>

            {headings.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.08 }}
                className="mt-4 text-base sm:text-lg font-semibold text-brand leading-relaxed max-w-2xl"
              >
                {headings.subtitle}
              </motion.p>
            )}

            {headings.description && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.14 }}
                className="mt-3 text-xs sm:text-sm text-content-secondary leading-relaxed max-w-2xl prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: headings.description }}
              />
            )}

            {/* Quick Spec Tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-2.5 w-full"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line bg-surface/80 text-xs font-medium text-content">
                <Clock className="w-3.5 h-3.5 text-brand" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line bg-surface/80 text-xs font-medium text-content">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Beginner to Advanced</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line bg-surface/80 text-xs font-medium text-content">
                <Briefcase className="w-3.5 h-3.5 text-sky-500" />
                <span>Placement Assistance</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line bg-surface/80 text-xs font-medium text-content">
                <Terminal className="w-3.5 h-3.5 text-purple-500" />
                <span>Production Workflows</span>
              </div>
            </motion.div>

            {/* Micro Stats Matrix */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full"
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl border border-line/70 bg-surface/50 backdrop-blur-sm text-left hover:border-brand/40 transition-colors"
                  >
                    <span className="block text-xl sm:text-2xl font-black text-content tabular-nums">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] font-semibold text-content-muted mt-0.5 line-clamp-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            >
              <Link
                to={ctaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm sm:text-base font-bold shadow-md shadow-brand/25 transition-all"
              >
                <span>{card.ctaText || "Enrol Now"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {card.syllabusLink && (
                <Link
                  to={card.syllabusLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-line hover:border-brand bg-surface text-content text-sm font-semibold transition-all"
                >
                  <Download className="w-4 h-4 text-content-secondary" />
                  <span>Download Syllabus</span>
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right Column: Checkout & Admittance Terminal (5 Cols) */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <div className="rounded-3xl border border-line bg-surface/90 dark:bg-surface/50 p-6 sm:p-7 shadow-xl backdrop-blur-xl">
              
              {/* Cohort Tracker Row */}
              <div className="flex items-center justify-between border-b border-line pb-4 mb-5">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-content-muted">
                    Cohort Status
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Seats Limited
                  </span>
                </div>
                {card.batchStartDate && (
                  <div className="text-right">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-content-muted">
                      Start Date
                    </span>
                    <span className="text-xs font-semibold text-content flex items-center gap-1 mt-0.5">
                      <SlCalender className="w-3 h-3 text-brand" />
                      {card.batchStartDate}
                    </span>
                  </div>
                )}
              </div>

              {/* Price Reveal Box */}
              <div className="p-4 rounded-2xl bg-brand/5 dark:bg-brand/10 border border-brand/20 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                  All-Inclusive Fellowship Fee
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-content tabular-nums">
                    {displayPrice}
                  </span>
                  {suffix && (
                    <span className="text-sm font-bold text-content-muted">
                      {suffix}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-content-secondary mt-1">
                  Includes full mentorship access, capstone evaluations & certification.
                </p>
              </div>

              {/* Fellowship Deliverables Checklist */}
              <ul className="space-y-2.5 mb-6 text-xs text-content-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>1-on-1 industry mentor guidance & code reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Real-world client projects & engineering sprints</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Verified Fellowship Completion Certificate</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Dedicated referral network & career prep</span>
                </li>
              </ul>

              {/* Terminal Action Button */}
              <Link
                to={ctaHref}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-bold shadow-md transition-all"
              >
                <span>{card.ctaText || "Enrol Now"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] text-content-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                <span>Secure payment powered by Razorpay</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FellowshipHomeSection;