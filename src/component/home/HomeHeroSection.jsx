"use client";

import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { LuCode, LuBarChart3, LuPenTool, LuBrainCircuit } from "react-icons/lu";
import "./hero.css";

const STATS = [
  { value: "1,00,000+", label: "Students" },
  { value: "95%", label: "Success Rate" },
  { value: "100+", label: "Companies" },
];

const PROGRAMS = [
  { href: "/web-development", name: "Web Development", meta: "Full stack - 6 months", Icon: LuCode },
  { href: "/data-science", name: "Data Science", meta: "Python, ML - 6 months", Icon: LuBarChart3 },
  { href: "/ui-ux-designer", name: "UI/UX Design", meta: "Figma, research - 4 months", Icon: LuPenTool },
  { href: "/machine-learning", name: "Machine Learning", meta: "Models, MLOps - 6 months", Icon: LuBrainCircuit },
];

export default function HomeHeroSection() {
  return (
    <section id="hero" className="relative isolate w-full overflow-hidden bg-canvas text-content">
      {/* Background: Dot grid + soft brand blur */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="k-dots absolute inset-0 text-content" />
        <div className="absolute right-[-8rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>

      {/* Sirf top padding trim ki gayi hai: pt-1 sm:pt-2 md:pt-3 lg:pt-3 */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pt-2 pb-10 sm:px-6 sm:pt-3 sm:pb-12 md:pt-4 md:pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8 lg:pt-3 lg:pb-14">
        {/* ---------------- Left Column ---------------- */}
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

          {/* Bridge SVG */}
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
            Live classes with working professionals, real projects, and placement support. Kre8ly&apos;s online
            certification courses are made for students and freshers in Lucknow, Indore, Patna, Coimbatore,
            and every other town where good training is hard to find.
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

        {/* ---------------- Right Column: Route ---------------- */}
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            {/* Continuous timeline line */}
            <span
              aria-hidden="true"
              className="k-route absolute bottom-3 left-[21px] top-3 w-[2px] text-brand/50"
            />

            <ol className="relative space-y-3">
              <li className="k-stop relative pl-12" style={{ "--i": "0" }}>
                <span
                  aria-hidden="true"
                  className="absolute left-[15px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-brand bg-canvas"
                />
                <span className="text-sm font-medium text-content-muted">College</span>
              </li>

              {PROGRAMS.map(({ href, name, meta, Icon }, i) => (
                <li key={href} className="k-stop relative pl-12" style={{ "--i": `${i + 1}` }}>
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

              <li className="k-stop relative pl-12" style={{ "--i": `${PROGRAMS.length + 1}` }}>
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
      </div>
    </section>
  );
}