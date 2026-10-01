// "use client";

// import Link from "next/link";
// import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
// import { LuCode, LuBarChart3, LuPenTool, LuBrainCircuit } from "react-icons/lu";
// import "./hero.css";

// /**
//  * Kre8ly home hero.
//  *
//  * Replaces the 358-line inline block that lived in `src/views/Home.jsx`
//  * (lines 436-793). All copy, both CTAs and every statistic are unchanged, and
//  * the routes `/courses` and `/fellowships` are preserved.
//  *
//  * Design notes:
//  *   - Built entirely on design tokens (`bg-canvas`, `text-content`, `brand`),
//  *     so it is light in light mode and properly dark in dark mode. The previous
//  *     version hard-coded a near-black background, which made the hero heavy
//  *     regardless of theme.
//  *   - One soft brand wash instead of three overlapping aurora blobs. Colour is
//  *     spent only where it carries meaning: the badge dot, one headline word,
//  *     the primary CTA and the program icons.
//  *   - The right column shows four real programs that link to real course
//  *     routes, replacing the mock "Program Dashboard" card. It is navigation the
//  *     visitor can actually use rather than invented progress data.
//  */

// const STATS = [
//   { value: "1,00,000+", label: "Students" },
//   { value: "95%", label: "Success Rate" },
//   { value: "100+", label: "Companies" },
// ];

// /** Routes match src/component/layout/nav-model.js exactly. */
// const PROGRAMS = [
//   { href: "/web-development", name: "Web Development", meta: "Full stack - 6 months", Icon: LuCode },
//   { href: "/data-science", name: "Data Science", meta: "Python, ML - 6 months", Icon: LuBarChart3 },
//   { href: "/ui-ux-designer", name: "UI/UX Design", meta: "Figma, research - 4 months", Icon: LuPenTool },
//   { href: "/machine-learning", name: "Machine Learning", meta: "Models, MLOps - 6 months", Icon: LuBrainCircuit },
// ];

// export default function HomeHeroSection() {
//   return (
//     <section id="hero" className="relative isolate w-full overflow-hidden bg-canvas text-content">
//       <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
//         <div className="k-wash absolute inset-0" />
//         <div className="k-dots absolute inset-0" />
//       </div>

//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
//         {/* ---------------- left ---------------- */}
//         <div className="text-center lg:text-left">
//           <span className="k-rise k-d1 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-content-secondary shadow-xs md:text-sm">
//             <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
//             Transform Your Career Today
//           </span>

//           <h1 className="k-rise k-d2 mt-6 text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-5xl xl:text-6xl">
//             Bridge the gap between
//             <br className="hidden sm:block" /> college <span className="text-brand">&amp; your career</span>
//           </h1>

//           <p className="k-rise k-d3 mx-auto mt-5 max-w-xl text-base leading-relaxed text-content-secondary lg:mx-0 lg:text-lg">
//             Live learning with industry experts, jobs at leading tech companies, and
//             real-world project experience.
//           </p>

//           <div className="k-rise k-d4 mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
//             <Link
//               href="/courses"
//               className="group inline-flex h-12 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
//             >
//               Explore Programs
//               <FiArrowRight
//                 aria-hidden="true"
//                 className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
//               />
//             </Link>
//             <Link
//               href="/fellowships"
//               className="inline-flex h-12 items-center justify-center rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors duration-200 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus md:text-base"
//             >
//               Apply for Internship
//             </Link>
//           </div>

//           <dl className="k-rise k-d5 mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-start">
//             {STATS.map((s) => (
//               <div key={s.label}>
//                 <dt className="sr-only">{s.label}</dt>
//                 <dd>
//                   <span className="block text-2xl font-bold tracking-tight md:text-3xl">
//                     {s.value}
//                   </span>
//                   <span aria-hidden="true" className="mt-0.5 block text-sm text-content-muted">
//                     {s.label}
//                   </span>
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>

//         {/* ---------------- right: real programs ---------------- */}
//         <div className="w-full">
//           <p className="k-rise k-d3 mb-3 text-xs font-semibold uppercase tracking-wider text-content-muted">
//             Popular programs
//           </p>

//           <ul className="space-y-2.5">
//             {PROGRAMS.map(({ href, name, meta, Icon }, i) => (
//               <li key={href} className={`k-rise k-d${i + 4}`}>
//                 <Link
//                   href={href}
//                   className="group flex items-center gap-4 rounded-card border border-line bg-surface p-4 shadow-xs transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-md focus-visible:outline-none focus-visible:shadow-focus"
//                 >
//                   <span
//                     aria-hidden="true"
//                     className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-brand-subtle text-brand"
//                   >
//                     <Icon className="h-5 w-5" />
//                   </span>

//                   <span className="min-w-0 flex-1">
//                     <span className="block truncate text-sm font-semibold text-content md:text-base">
//                       {name}
//                     </span>
//                     <span className="block truncate text-xs text-content-muted md:text-sm">
//                       {meta}
//                     </span>
//                   </span>

//                   <FiArrowUpRight
//                     aria-hidden="true"
//                     className="h-4 w-4 shrink-0 text-content-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <Link
//             href="/courses"
//             className="k-rise k-d7 mt-3 inline-flex items-center gap-1.5 rounded-control px-1 py-1 text-sm font-medium text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
//           >
//             View all programs
//             <FiArrowRight aria-hidden="true" className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }















"use client";

import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { LuCode, LuBarChart3, LuPenTool, LuBrainCircuit } from "react-icons/lu";
import "./hero.css";

/**
 * Kre8ly home hero (redesign).
 *
 * Concept: the headline says "bridge the gap between college & your career",
 * so the hero draws that bridge. An arc spans the headline, and the right
 * column is a route that runs from "College" down through the four programs
 * to "Career". Copy, stats and routes are unchanged.
 *
 * Built only on your existing tokens (canvas, surface, line, content, brand),
 * so it works in light and dark mode.
 */

const STATS = [
  { value: "1,00,000+", label: "Students" },
  { value: "95%", label: "Success Rate" },
  { value: "100+", label: "Companies" },
];

/** Routes match src/component/layout/nav-model.js exactly. */
const PROGRAMS = [
  { href: "/web-development", name: "Web Development", meta: "Full stack - 6 months", Icon: LuCode },
  { href: "/data-science", name: "Data Science", meta: "Python, ML - 6 months", Icon: LuBarChart3 },
  { href: "/ui-ux-designer", name: "UI/UX Design", meta: "Figma, research - 4 months", Icon: LuPenTool },
  { href: "/machine-learning", name: "Machine Learning", meta: "Models, MLOps - 6 months", Icon: LuBrainCircuit },
];

export default function HomeHeroSection() {
  return (
    <section id="hero" className="relative isolate w-full overflow-hidden bg-canvas text-content">
      {/* background: dot grid + one soft glow behind the route */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="k-dots absolute inset-0 text-content" />
        <div className="absolute right-[-8rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>

     <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pt-6 pb-16 sm:px-6 sm:pt-8 md:pt-10 md:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8 lg:pt-12 lg:pb-24">
        {/* ---------------- left ---------------- */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-content-secondary md:text-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Transform Your Career Today
          </span>

          <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl xl:text-[3.6rem]">
            Bridge the gap between
            <br className="hidden sm:block" /> college &amp; your career
          </h1>

          {/* the bridge: an arc spanning the headline */}
          <svg
            aria-hidden="true"
            viewBox="0 0 480 44"
            className="k-sweep mx-auto mt-3 h-8 w-full max-w-md text-brand sm:h-10 lg:mx-0"
            fill="none"
          >
            <path
              d="M8 36 C 130 -8, 350 -8, 472 36"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="1 9"
            />
            <circle cx="8" cy="36" r="5" fill="currentColor" />
            <circle cx="472" cy="36" r="5" fill="currentColor" />
          </svg>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-content-secondary lg:mx-0 lg:text-lg">
            Live learning with industry experts, jobs at leading tech companies, and
            real-world project experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/courses"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
            >
              Explore Programs
              <FiArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/fellowships"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-7 text-sm font-semibold text-content transition-colors duration-200 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus md:text-base"
            >
              Apply for Internship
            </Link>
          </div>

          <dl className="mx-auto mt-12 grid w-full max-w-md grid-cols-3 divide-x divide-line lg:mx-0">
            {STATS.map((s) => (
              <div key={s.label} className="px-2 text-center lg:px-6 lg:text-left lg:first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-lg font-bold tracking-tight sm:text-2xl">
                    {s.value}
                  </span>
                  <span aria-hidden="true" className="mt-0.5 block text-xs text-content-muted sm:text-sm">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------------- right: the route from college to career ---------------- */}
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <ol className="relative space-y-3">
            {/* dashed route line, node centres sit on x = 22px */}
            <span
              aria-hidden="true"
              className="k-route absolute bottom-3 left-[21px] top-3 w-[2px] text-brand/50"
            />

            <li className="k-stop relative pl-12" style={{ "--i": 0 }}>
              <span
                aria-hidden="true"
                className="absolute left-[15px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-brand bg-canvas"
              />
              <span className="text-sm font-medium text-content-muted">College</span>
            </li>

            {PROGRAMS.map(({ href, name, meta, Icon }, i) => (
              <li key={href} className="k-stop relative pl-12" style={{ "--i": i + 1 }}>
                <span
                  aria-hidden="true"
                  className="absolute left-[17px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand"
                />
                <Link
                  href={href}
                  className="group flex items-center gap-4 rounded-card border border-line bg-surface p-4 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md focus-visible:outline-none focus-visible:shadow-focus"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-control bg-brand-subtle text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-brand-fg"
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-content md:text-base">
                      {name}
                    </span>
                    <span className="block truncate text-xs text-content-muted md:text-sm">
                      {meta}
                    </span>
                  </span>

                  <FiArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-content-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </Link>
              </li>
            ))}

            <li className="k-stop relative pl-12" style={{ "--i": PROGRAMS.length + 1 }}>
              <span
                aria-hidden="true"
                className="absolute left-[15px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-brand bg-brand"
              />
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 rounded-control text-sm font-semibold text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
              >
                View all programs
                <FiArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}