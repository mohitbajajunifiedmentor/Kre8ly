"use client";

import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { LuCode, LuBarChart3, LuPenTool, LuBrainCircuit } from "react-icons/lu";
import "./hero.css";

/**
 * Kre8ly home hero.
 *
 * Replaces the 358-line inline block that lived in `src/views/Home.jsx`
 * (lines 436-793). All copy, both CTAs and every statistic are unchanged, and
 * the routes `/courses` and `/fellowships` are preserved.
 *
 * Design notes:
 *   - Built entirely on design tokens (`bg-canvas`, `text-content`, `brand`),
 *     so it is light in light mode and properly dark in dark mode. The previous
 *     version hard-coded a near-black background, which made the hero heavy
 *     regardless of theme.
 *   - One soft brand wash instead of three overlapping aurora blobs. Colour is
 *     spent only where it carries meaning: the badge dot, one headline word,
 *     the primary CTA and the program icons.
 *   - The right column shows four real programs that link to real course
 *     routes, replacing the mock "Program Dashboard" card. It is navigation the
 *     visitor can actually use rather than invented progress data.
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="k-wash absolute inset-0" />
        <div className="k-dots absolute inset-0" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* ---------------- left ---------------- */}
        <div className="text-center lg:text-left">
          <span className="k-rise k-d1 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-content-secondary shadow-xs md:text-sm">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
            Transform Your Career Today
          </span>

          <h1 className="k-rise k-d2 mt-6 text-[2rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-5xl xl:text-6xl">
            Bridge the gap between
            <br className="hidden sm:block" /> college <span className="text-brand">&amp; your career</span>
          </h1>

          <p className="k-rise k-d3 mx-auto mt-5 max-w-xl text-base leading-relaxed text-content-secondary lg:mx-0 lg:text-lg">
            Live learning with industry experts, jobs at leading tech companies, and
            real-world project experience.
          </p>

          <div className="k-rise k-d4 mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/courses"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
            >
              Explore Programs
              <FiArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/fellowships"
              className="inline-flex h-12 items-center justify-center rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors duration-200 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus md:text-base"
            >
              Apply for Internship
            </Link>
          </div>

          <dl className="k-rise k-d5 mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-start">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold tracking-tight md:text-3xl">
                    {s.value}
                  </span>
                  <span aria-hidden="true" className="mt-0.5 block text-sm text-content-muted">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------------- right: real programs ---------------- */}
        <div className="w-full">
          <p className="k-rise k-d3 mb-3 text-xs font-semibold uppercase tracking-wider text-content-muted">
            Popular programs
          </p>

          <ul className="space-y-2.5">
            {PROGRAMS.map(({ href, name, meta, Icon }, i) => (
              <li key={href} className={`k-rise k-d${i + 4}`}>
                <Link
                  href={href}
                  className="group flex items-center gap-4 rounded-card border border-line bg-surface p-4 shadow-xs transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-md focus-visible:outline-none focus-visible:shadow-focus"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-brand-subtle text-brand"
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
                    className="h-4 w-4 shrink-0 text-content-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/courses"
            className="k-rise k-d7 mt-3 inline-flex items-center gap-1.5 rounded-control px-1 py-1 text-sm font-medium text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
          >
            View all programs
            <FiArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}