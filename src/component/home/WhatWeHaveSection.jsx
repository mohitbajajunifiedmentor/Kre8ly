"use client";

import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/component/ui/Section";
import { FiArrowUpRight } from "react-icons/fi";

const ITEMS = [
  {
    title: "Fellowship",
    blurb: "Work on real tasks while a mentor reviews your output. The Kre8ly fellowship ends with a project you can talk about in interviews.",
    meta: "10 Specialized Tracks",
    href: "/fellowships",
  },
  {
    title: "Courses",
    blurb: "Six career tracks, from full-stack development to graphic design, taught live with recordings if you miss a class.",
    meta: "6 Core Programs",
    href: "/courses",
  },
  {
    title: "ATS",
    blurb: "See how your resume reads to the applicant tracking systems many companies use before a person ever opens it.",
    meta: "Free Utility",
    href: "https://jobs.unifiedmentor.com/ats",
  },
  {
    title: "Resume Builder",
    blurb: "Build a clean, recruiter-friendly resume from ready templates and get mentor feedback before you apply.",
    meta: "Guided Tool",
    href: "https://jobs.unifiedmentor.com/student/dashboard",
  },
  {
    title: "Job Portal",
    blurb: "ABrowse openings from our hiring partners in one place instead of checking five different sites.",
    meta: "100+ Hiring Partners",
    href: "/jobs",
  },
  {
    title: "Know Your CTC",
    blurb: "Not sure what salary to ask for? Run your resume through our AI-powered checker. It reads your skills, experience and projects, then shows the salary range that roles like yours usually offer. You can go into interviews and offer discussions with a realistic number instead of a guess. It's an estimate to guide you, and a quick way to see which skills could raise it.",
    meta: "Salary Calculator",
    href: "https://kyc.unifiedmentor.com/",
  },
];

export default function WhatWeHaveSection() {
  return (
    <Section tone="canvas" space="lg">
      <SectionHeader
        eyebrow="What We Offer"
        title="Job-Oriented Online Courses, Fellowships, and Career Tools in One Place"
        lead="Most people in smaller cities don't lack talent. What they lack is a clear route from a degree to a first job. Our job-oriented online courses are built around the skills companies actually test for, and the tools below help you get through the interview door."
        align="left"
      />

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {ITEMS.map((item, index) => {
          const external = /^https?:\/\//.test(item.href);
          return (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <Link
                to={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-8 px-4 rounded-card transition-all duration-300 hover:bg-surface-sunken"
              >
                <div className="flex items-start sm:items-center gap-5 sm:gap-8">
                  {/* Tabular index number */}
                  <span className="font-mono text-2xl sm:text-3xl font-semibold tabular-nums text-content-muted group-hover:text-brand transition-colors duration-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-content group-hover:text-brand transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-content-secondary max-w-2xl leading-relaxed">
                      {item.blurb}
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-4 pl-12 sm:pl-0 shrink-0">
                  <span className="inline-block px-3 py-1 rounded-control bg-surface border border-line text-[11px] font-semibold uppercase tracking-wider text-content-secondary">
                    {item.meta}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-line bg-surface flex items-center justify-center text-content-muted transition-all duration-200 group-hover:border-brand group-hover:text-brand group-hover:translate-x-1">
                    <FiArrowUpRight className="text-base" />
                  </div>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}










// "use client";

// import { Link } from "@/lib/router-compat";
// import { FaUserGraduate } from "react-icons/fa";
// import { HiOutlineBookOpen, HiOutlineBuildingOffice2 } from "react-icons/hi2";
// import Reveal from "@/component/ui/Reveal";
// import { Section, SectionHeader } from "@/component/ui/Section";

// /**
//  * "What we have for you".
//  *
//  * A card grid, using the same card language as WhyChooseSection and the
//  * "What you get" block: `rounded-card` on `bg-surface`, a hairline border, the
//  * two-step `shadow-sm` token, and a lift on hover. Three sections that look
//  * like they were designed together rather than three different experiments.
//  *
//  * Two things worth keeping:
//  *
//  * 1. The whole card is the link. Previously only a small "Explore" label was
//  *    clickable — a ~70px target at the bottom of a card the user has already
//  *    decided to tap. The label stays as the visible affordance; the hit area is
//  *    the entire card.
//  *
//  * 2. No `data-aos`. Entrance is <Reveal>. The two must not be combined:
//  *    aos.css holds `[data-aos]` at opacity 0 and reveals it by writing a class
//  *    straight onto the DOM node, which React wipes on the next re-render — the
//  *    bug that made the FAQ cards vanish on click.
//  */

// /* Kept as inline SVG so nothing depends on an icon pack exporting these names. */
// const AtsIcon = (props) => (
//   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.8"
//       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//     />
//   </svg>
// );

// const ResumeIcon = (props) => (
//   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.8"
//       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//     />
//   </svg>
// );

// const CtcIcon = (props) => (
//   <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.8"
//       d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//     />
//   </svg>
// );

// /**
//  * Descriptions were copy-pasted in the original — Fellowship, Courses, ATS and
//  * Resume Builder all said "…enhance your resume using our builder", which is
//  * true of exactly one of them. Each card now says what that product does.
//  */
// const ITEMS = [
//   {
//     title: "Fellowship",
//     desc: "Work on real projects with an industry mentor and finish with something you can show an employer.",
//     meta: "10 tracks",
//     href: "/fellowships",
//     Icon: FaUserGraduate,
//     tone: "bg-brand-subtle text-brand",
//     edge: "hover:border-brand/35",
//   },
//   {
//     title: "Courses",
//     desc: "Structured, career-focused tracks in development, data, design and marketing — learn at your own pace.",
//     meta: "6 programmes",
//     href: "/courses",
//     Icon: HiOutlineBookOpen,
//     tone: "bg-success-subtle text-success",
//     edge: "hover:border-success/35",
//   },
//   {
//     title: "ATS Check",
//     desc: "See how your CV reads to an applicant tracking system before a recruiter ever opens it.",
//     meta: "Free",
//     href: "https://jobs.unifiedmentor.com/ats",
//     Icon: AtsIcon,
//     tone: "bg-info-subtle text-info",
//     edge: "hover:border-info/35",
//   },
//   {
//     title: "Resume Builder",
//     desc: "Build a clean, recruiter-ready resume from a guided template — no formatting work required.",
//     meta: "Free",
//     href: "https://jobs.unifiedmentor.com/student/dashboard",
//     Icon: ResumeIcon,
//     tone: "bg-warning-subtle text-warning",
//     edge: "hover:border-warning/35",
//   },
//   {
//     title: "Job Portal",
//     desc: "Browse openings from our hiring partners and apply directly with your Kre8ly profile.",
//     meta: "100+ partners",
//     href: "/jobs",
//     Icon: HiOutlineBuildingOffice2,
//     tone: "bg-brand-subtle text-brand",
//     edge: "hover:border-brand/35",
//   },
//   {
//     title: "Know your CTC",
//     desc: "See how an offer breaks down into take-home pay, deductions and benefits before you accept.",
//     meta: "Calculator",
//     href: "https://kyc.unifiedmentor.com/",
//     Icon: CtcIcon,
//     tone: "bg-error-subtle text-error",
//     edge: "hover:border-error/35",
//   },
// ];

// function ProductCard({ item, index }) {
//   const external = /^https?:\/\//.test(item.href);

//   return (
//     <Reveal direction="up" delay={Math.min(index, 5) * 70} className="h-full">
//       <Link
//         to={item.href}
//         // External tools open in a new tab so the user does not lose the page
//         // they were reading; `noopener` is required alongside `_blank`.
//         target={external ? "_blank" : undefined}
//         rel={external ? "noopener noreferrer" : undefined}
//         aria-label={`${item.title} — explore`}
//         className={[
//           "group flex h-full flex-col rounded-card border border-line bg-surface p-7 lg:p-8",
//           "shadow-sm transition-[transform,box-shadow,border-color] duration-300",
//           // Lift rather than scale: scaling a card resamples its text and
//           // softens it on non-retina screens.
//           "hover:-translate-y-1 hover:shadow-md",
//           item.edge,
//           "focus-visible:outline-none focus-visible:shadow-focus",
//         ].join(" ")}
//       >
//         <div className="flex items-start justify-between gap-4">
//           <span
//             aria-hidden="true"
//             className={`flex h-12 w-12 items-center justify-center rounded-control transition-transform duration-300 group-hover:scale-110 ${item.tone}`}
//           >
//             <item.Icon className="h-6 w-6" />
//           </span>

//           <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-content-muted">
//             {item.meta}
//           </span>
//         </div>

//         <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-content">
//           {item.title}
//         </h3>

//         <p className="mt-2.5 flex-1 text-sm leading-relaxed text-content-secondary">
//           {item.desc}
//         </p>

//         <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
//           Explore
//           <svg
//             aria-hidden="true"
//             className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//           </svg>
//         </span>
//       </Link>
//     </Reveal>
//   );
// }

// export default function WhatWeHaveSection() {
//   return (
//     <Section tone="sunken" space="lg">
//       <SectionHeader
//         eyebrow="What we offer"
//         title="Everything you need between college and your first offer"
//         lead="Career-focused programmes and tools that build practical skills — not just another certificate."
//       />

//       {/* Two columns at md: three cards at 768px leaves each about 230px wide
//           and the titles start wrapping awkwardly. */}
//       <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
//         {ITEMS.map((item, i) => (
//           <li key={item.title}>
//             <ProductCard item={item} index={i} />
//           </li>
//         ))}
//       </ul>
//     </Section>
//   );
// }