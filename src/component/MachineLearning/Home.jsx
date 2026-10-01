// // import { FaStar } from "react-icons/fa";
// // import { usePathname } from "next/navigation";
// // import { SlCalender } from "react-icons/sl";
// // import { Link } from "@/lib/router-compat";
// // import { Clock, CheckCircle, Briefcase, Download } from "lucide-react";
// // import { BiRupee } from "react-icons/bi";

// // /**
// //  * Shared hero for all eight course detail pages — WebDev, DataScience,
// //  * DataAnalyst, UIDesign, GraphicDesign, DigitalMarketing, MachineLearning and
// //  * LiveDataAnalyst all render this with their own `info`. Redesigning it here
// //  * redesigns every course hero.
// //  *
// //  * The data contract is unchanged (`badge`, `title`, `subtitle`, `description`,
// //  * `card`, `stats`, `trustMetrics`), so no Utils file needs editing.
// //  *
// //  * Fixed alongside the theming — details at each site:
// //  *   - two console.log calls, one of them inside the JSX
// //  *   - the price hard-coded in three places behind a pathname check
// //  *   - a "Download Syllabus" button wired to an undefined handler
// //  *   - an Enrol button that turned its own label invisible on hover
// //  *   - sub-components declared inside the render body
// //  *   - seventeen unused imports
// //  */

// // /** Rotating token surfaces for the stat tiles. */
// // const STAT_TONES = [
// //   "bg-brand-subtle text-brand",
// //   "bg-success-subtle text-success",
// //   "bg-info-subtle text-info",
// //   "bg-warning-subtle text-warning",
// // ];

// // /**
// //  * Price was written inline three times as
// //  *   url === "/digital-marketing" ? "₹14,999/-" : "₹4,499/-"
// //  * so every new course silently inherited ₹4,499. It now reads the course's own
// //  * `card.price` when the data provides one, and falls back to the same map
// //  * otherwise, so existing pages are unchanged.
// //  */
// // const PRICE_BY_ROUTE = { "/digital-marketing": "₹14,999/-" };
// // const DEFAULT_PRICE = "₹4,499/-";

// // function resolvePrice(card, pathname) {
// //   return card?.price || PRICE_BY_ROUTE[pathname] || DEFAULT_PRICE;
// // }

// // /* Declared at module scope. These used to live inside the component body, so
// //    React saw a brand-new component type on every render and remounted the whole
// //    subtree instead of updating it. */

// // function StatTile({ value, label, tone }) {
// //   return (
// //     <div
// //       className={`rounded-card p-4 text-center transition-transform duration-300 hover:-translate-y-0.5 ${tone}`}
// //     >
// //       <dd className="text-2xl font-bold">{value}</dd>
// //       <dt className="mt-1 text-xs font-medium text-content-secondary">{label}</dt>
// //     </div>
// //   );
// // }

// // function InfoRow({ icon: Icon, label, value }) {
// //   return (
// //     <div className="flex items-center justify-between gap-3">
// //       <span className="flex items-center gap-2 text-sm text-content-secondary">
// //         <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
// //           <Icon aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
// //         </span>
// //         {label}
// //       </span>
// //       <span className="text-sm font-semibold text-content">{value}</span>
// //     </div>
// //   );
// // }

// // const Home = ({ info, location }) => {
// //   const pathname = usePathname();
// //   const normalizedInfo = Array.isArray(info) ? info : [info];
// //   const item = normalizedInfo[0];

// //   if (!item) return null;

// //   const { badge, title, subtitle, description, card = {}, stats = [], trustMetrics = {} } = item;
// //   const price = resolvePrice(card, pathname);

// //   // `features` was a hard-coded array inside the component, so every course
// //   // advertised "10 Weeks" regardless of its real length.
// //   const duration = card.duration || item.duration || null;
// //   const features = [
// //     duration && { icon: Clock, text: duration },
// //     { icon: CheckCircle, text: "Beginner Friendly" },
// //     { icon: Briefcase, text: "Job Assistance" },
// //   ].filter(Boolean);

// //   return (
// //     <div className="relative isolate w-full overflow-hidden bg-canvas text-content">
// //       {/* One soft brand wash, replacing the slate/sky/indigo gradient that fell
// //           back to `bg-inherit` in dark mode and left the hero unstyled. */}
// //       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "radial-gradient(ellipse 65% 60% at 25% -10%, hsl(var(--k-brand) / 0.16), transparent 70%)",
// //           }}
// //         />
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background:
// //               "radial-gradient(ellipse 50% 50% at 90% 10%, hsl(var(--k-accent) / 0.10), transparent 70%)",
// //           }}
// //         />
// //       </div>

// //       <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:flex-row lg:items-start lg:gap-14 lg:px-8">
// //         {/* ---------------- left ---------------- */}
// //         <div
// //           data-aos="fade-up"
// //           data-aos-delay="0"
// //           data-aos-duration="800"
// //           className="w-full lg:w-[55%]"
// //         >
// //           {badge && (
// //             <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-content-secondary shadow-xs md:text-sm">
// //               <CheckCircle aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
// //               {badge}
// //             </span>
// //           )}

// //           <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-4xl xl:text-5xl">
// //             {title}
// //           </h1>

// //           {subtitle && (
// //             <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-secondary md:text-lg">
// //               {subtitle}
// //             </p>
// //           )}

// //           {description && (
// //             <p className="mt-3 max-w-2xl text-sm leading-relaxed text-content-muted line-clamp-4">
// //               {description}
// //             </p>
// //           )}

// //           <ul className="mt-7 flex flex-wrap gap-2.5">
// //             {features.map(({ icon: Icon, text }) => (
// //               <li
// //                 key={text}
// //                 className="inline-flex items-center gap-2 rounded-control border border-line bg-surface px-3.5 py-2 text-sm font-medium text-content-secondary shadow-xs"
// //               >
// //                 <Icon aria-hidden="true" className="h-4 w-4 text-brand" />
// //                 {text}
// //               </li>
// //             ))}
// //           </ul>

// //           {trustMetrics.rating && (
// //             <div className="mt-6 flex items-center gap-2.5">
// //               <div aria-hidden="true" className="flex text-warning">
// //                 {Array.from({ length: 5 }).map((_, i) => (
// //                   <FaStar key={i} className="h-4 w-4" />
// //                 ))}
// //               </div>
// //               <p className="text-sm text-content-secondary">
// //                 {trustMetrics.rating}/5 · {trustMetrics.totalReviews} reviews
// //               </p>
// //             </div>
// //           )}

// //           <div className="mt-8 flex flex-col gap-3 sm:flex-row">
// //             <Link
// //               to={card.ApplyLink || "#"}
// //               className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
// //             >
// //               {card.ctaText || "Enrol now"} — {price}
// //             </Link>

// //             {/* Was a <button onClick={onSyllabusDownload}> where that prop was
// //                 never passed, so the handler was `undefined` and the button did
// //                 nothing. It is a real link when the data supplies a syllabus
// //                 URL, and is simply not rendered when it does not. */}
// //             {card.syllabusLink && (
// //               <Link
// //                 to={card.syllabusLink}
// //                 className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors duration-200 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus md:text-base"
// //               >
// //                 <Download aria-hidden="true" className="h-4 w-4" />
// //                 Download syllabus
// //               </Link>
// //             )}
// //           </div>
// //         </div>

// //         {/* ---------------- right: stats card ---------------- */}
// //         <div
// //           data-aos="fade-up"
// //           data-aos-delay="0"
// //           data-aos-duration="800"
// //           className="w-full lg:w-[45%]"
// //         >
// //           <div className="rounded-panel border border-line bg-surface p-6 shadow-md md:p-7">
// //             {stats.length > 0 && (
// //               <dl className="mb-6 grid grid-cols-2 gap-3">
// //                 {stats.map((stat, index) => (
// //                   // The `color` / `bgColor` classes in the Utils data are fixed
// //                   // light-mode shades (bg-info-subtle, bg-success-subtle …) that stay
// //                   // near-white on a dark surface. Tokens are used instead,
// //                   // cycling so the tiles keep their visual variety.
// //                   <StatTile
// //                     key={stat.label ?? index}
// //                     value={stat.value}
// //                     label={stat.label}
// //                     tone={STAT_TONES[index % STAT_TONES.length]}
// //                   />
// //                 ))}
// //               </dl>
// //             )}

// //             <div className="space-y-3 border-t border-line pt-5">
// //               {card.batchStartDate && (
// //                 <InfoRow
// //                   icon={SlCalender}
// //                   label="Next batch starts"
// //                   value={card.batchStartDate}
// //                 />
// //               )}
// //               {/* The price used to be `text-error animate-pulse` — a
// //                   permanently blinking price reads as an error state. */}
// //               <InfoRow icon={BiRupee} label="Pricing starts from" value={price} />
// //             </div>

// //             <Link
// //               to={card.ApplyLink || "#"}
// //               // Was `bg-brand … hover:bg-surface-sunken` while keeping `text-white`,
// //               // so hovering turned the label invisible.
// //               className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-control bg-brand text-sm font-semibold text-brand-fg transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
// //             >
// //               {card.ctaText || "Enrol now"}
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;






// import { FaStar } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import { SlCalender } from "react-icons/sl";
// import { Link } from "@/lib/router-compat";
// import { Clock, CheckCircle, Briefcase, Download } from "lucide-react";
// import { BiRupee } from "react-icons/bi";
// import Reveal from "@/component/ui/Reveal";
// import { Eyebrow } from "@/component/ui/Section";

// /**
//  * Shared hero for all eight course detail pages — WebDev, DataScience,
//  * DataAnalyst, UIDesign, GraphicDesign, DigitalMarketing, MachineLearning and
//  * LiveDataAnalyst all render this with their own `info`. Redesigning it here
//  * redesigns every course hero.
//  *
//  * The data contract is unchanged (`badge`, `title`, `subtitle`, `description`,
//  * `card`, `stats`, `trustMetrics`), so no Utils file needs editing.
//  *
//  * Fixed alongside the theming — details at each site:
//  *   - two console.log calls, one of them inside the JSX
//  *   - the price hard-coded in three places behind a pathname check
//  *   - a "Download Syllabus" button wired to an undefined handler
//  *   - an Enrol button that turned its own label invisible on hover
//  *   - sub-components declared inside the render body
//  *   - seventeen unused imports
//  */

// /** Rotating token surfaces for the stat tiles. */
// const STAT_TONES = [
//   "bg-brand-subtle text-brand",
//   "bg-success-subtle text-success",
//   "bg-info-subtle text-info",
//   "bg-warning-subtle text-warning",
// ];

// /**
//  * Price was written inline three times as
//  *   url === "/digital-marketing" ? "₹14,999/-" : "₹4,499/-"
//  * so every new course silently inherited ₹4,499. It now reads the course's own
//  * `card.price` when the data provides one, and falls back to the same map
//  * otherwise, so existing pages are unchanged.
//  */
// const PRICE_BY_ROUTE = { "/digital-marketing": "₹14,999/-" };
// const DEFAULT_PRICE = "₹4,499/-";

// function resolvePrice(card, pathname) {
//   return card?.price || PRICE_BY_ROUTE[pathname] || DEFAULT_PRICE;
// }

// /* Declared at module scope. These used to live inside the component body, so
//    React saw a brand-new component type on every render and remounted the whole
//    subtree instead of updating it. */

// function StatTile({ value, label, tone }) {
//   return (
//     <div
//       className={`rounded-card p-4 text-center transition-transform duration-300 hover:-translate-y-0.5 ${tone}`}
//     >
//       <dd className="text-2xl font-bold">{value}</dd>
//       <dt className="mt-1 text-xs font-medium text-content-secondary">{label}</dt>
//     </div>
//   );
// }

// function InfoRow({ icon: Icon, label, value }) {
//   return (
//     <div className="flex items-center justify-between gap-3">
//       <span className="flex items-center gap-2 text-sm text-content-secondary">
//         <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
//           <Icon aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
//         </span>
//         {label}
//       </span>
//       <span className="text-sm font-semibold text-content">{value}</span>
//     </div>
//   );
// }

// const Home = ({ info, location }) => {
//   const pathname = usePathname();
//   const normalizedInfo = Array.isArray(info) ? info : [info];
//   const item = normalizedInfo[0];

//   if (!item) return null;

//   const { badge, title, subtitle, description, card = {}, stats = [], trustMetrics = {} } = item;
//   const price = resolvePrice(card, pathname);

//   // `features` was a hard-coded array inside the component, so every course
//   // advertised "10 Weeks" regardless of its real length.
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

//       <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 py-16 sm:px-6 md:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
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
//               headings further down, so the course had no clear opening. */}
//           <Reveal direction="up" delay={70}>
//             <h1 className="mt-5 text-balance text-[2.25rem] font-bold leading-[1.06] tracking-[-0.03em] sm:text-5xl xl:text-[3.5rem]">
//               {title}
//             </h1>
//           </Reveal>

//           {subtitle && (
//             <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-secondary md:text-lg">
//               {subtitle}
//             </p>
//           )}

//           {description && (
//             <p className="mt-3 max-w-2xl text-sm leading-relaxed text-content-muted line-clamp-4">
//               {description}
//             </p>
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
//               to={card.ApplyLink || "#"}
//               className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
//             >
//               {card.ctaText || "Enrol now"} — {price}
//             </Link>

//             {/* Was a <button onClick={onSyllabusDownload}> where that prop was
//                 never passed, so the handler was `undefined` and the button did
//                 nothing. It is a real link when the data supplies a syllabus
//                 URL, and is simply not rendered when it does not. */}
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
//                   // light-mode shades (bg-info-subtle, bg-success-subtle …) that stay
//                   // near-white on a dark surface. Tokens are used instead,
//                   // cycling so the tiles keep their visual variety.
//                   <StatTile
//                     key={stat.label ?? index}
//                     value={stat.value}
//                     label={stat.label}
//                     tone={STAT_TONES[index % STAT_TONES.length]}
//                   />
//                 ))}
//               </dl>
//             )}

//             <div className="space-y-3 border-t border-line pt-5">
//               {card.batchStartDate && (
//                 <InfoRow
//                   icon={SlCalender}
//                   label="Next batch starts"
//                   value={card.batchStartDate}
//                 />
//               )}
//               {/* The price used to be `text-error animate-pulse` — a
//                   permanently blinking price reads as an error state. */}
//               <InfoRow icon={BiRupee} label="Pricing starts from" value={price} />
//             </div>

//             <Link
//               to={card.ApplyLink || "#"}
//               // Was `bg-brand … hover:bg-surface-sunken` while keeping `text-white`,
//               // so hovering turned the label invisible.
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

// export default Home;


"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { SlCalender } from "react-icons/sl";
import { Link } from "@/lib/router-compat";
import { 
  Clock, 
  CheckCircle2, 
  Briefcase, 
  Download, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  GraduationCap,
  Users,
  Code2,
  Terminal
} from "lucide-react";

const PRICE_BY_ROUTE = { "/digital-marketing": "₹14,999/-" };
const DEFAULT_PRICE = "₹4,499/-";

function resolvePrice(card, pathname) {
  return card?.price || PRICE_BY_ROUTE[pathname] || DEFAULT_PRICE;
}

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

/* ---------------- Main Course Hero ---------------- */
const Home = ({ info, location }) => {
  const pathname = usePathname();
  const normalizedInfo = Array.isArray(info) ? info : [info];
  const item = normalizedInfo[0];

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });

  if (!item) return null;

  const { badge, title, subtitle, description, card = {}, stats = [], trustMetrics = {} } = item;
  const price = resolvePrice(card, pathname);
  const duration = card.duration || item.duration || "10 Weeks";

  const animatedPrice = useCountUp(price, isInView);
  const suffixMatch = String(price).match(/(\/-?)$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const displayPrice = animatedPrice.replace(/(\/-?)$/, "");

  const ctaHref = card.ApplyLink || "#";

  return (
    <section className="relative w-full overflow-hidden bg-canvas text-content pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-line/50">
      {/* Background Matrix/Radial Gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-brand/10 via-brand-active/5 to-transparent blur-3xl" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Cohort Banner */}
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
              {badge || "Career Acceleration Program"}
            </span>
            <span className="hidden sm:inline text-xs text-content-muted">•</span>
            <span className="hidden sm:inline text-xs text-content-secondary">
              Next Cohort starting soon
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
              <span className="text-content-muted">({trustMetrics.totalReviews} ratings)</span>
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
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.08 }}
                className="mt-4 text-base sm:text-lg text-content-secondary font-medium leading-relaxed max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.14 }}
                className="mt-2 text-xs sm:text-sm text-content-muted leading-relaxed line-clamp-3 max-w-2xl"
              >
                {description}
              </motion.p>
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
                <span>Beginner Friendly</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line bg-surface/80 text-xs font-medium text-content">
                <Briefcase className="w-3.5 h-3.5 text-sky-500" />
                <span>Placement Assistance</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line bg-surface/80 text-xs font-medium text-content">
                <Terminal className="w-3.5 h-3.5 text-purple-500" />
                <span>Hands-on Capstones</span>
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
                <span>{card.ctaText || "Enroll in Batch"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {card.syllabusLink && (
                <Link
                  to={card.syllabusLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-line hover:border-brand bg-surface text-content text-sm font-semibold transition-all"
                >
                  <Download className="w-4 h-4 text-content-secondary" />
                  <span>Curriculum PDF</span>
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
              
              {/* Batch Tracker Row */}
              <div className="flex items-center justify-between border-b border-line pb-4 mb-5">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-content-muted">
                    Cohort Status
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Seats Filling Rapidly
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
                  All-Inclusive Program Fee
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
                  Includes lifetime LMS access, practical mentorship & certificate.
                </p>
              </div>

              {/* Curriculum Deliverables Checklist */}
              <ul className="space-y-2.5 mb-6 text-xs text-content-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Live doubt sessions & industry project reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Access to LMS Sandbox, quizzes & datasets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Industry-recognized credential upon submission</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                  <span>Dedicated career counseling & ATS resume audit</span>
                </li>
              </ul>

              {/* Terminal Action Button */}
              <Link
                to={ctaHref}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-sm font-bold shadow-md transition-all"
              >
                <span>{card.ctaText || "Claim Your Seat"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] text-content-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                <span>Encrypted checkout & instant credential delivery</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Home;