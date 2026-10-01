"use client";

import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/component/ui/Section";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const POINTS = [
  {
    title: "Live Learning with Industry Engineers",
    body: "Direct real-time sprint sessions with developers and managers from tier-one product firms — no passive video lectures.",
  },
  {
    title: "Projects that Survive Tough Technical Rounds",
    body: "Architect production-grade cloud systems, pipelines, and apps that withstand deep architectural questioning during technical rounds.",
  },
  {
    title: "Uncompromising 1-on-1 Placement Coaching",
    body: "Comprehensive resume tailoring, mock technical drills with feedback loops, and warm introductions to hiring partners.",
  },
  {
    title: "Free Access to Career Acceleration Tools",
    body: "In-house ATS score simulators, CTC calculators, and resume builders bundled permanently into every enrollment.",
  },
];

export default function WhyChooseSection() {
  return (
    <Section tone="sunken" space="lg">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,24rem),1fr] lg:gap-16 xl:gap-20">
        
        {/* Left Sticky Heading Section */}
        <div className="lg:sticky lg:top-28 lg:self-start text-left">
          <Eyebrow>Why Kre8ly</Eyebrow>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-[1.12] text-content">
            Closing the distance between college and career
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-content-secondary">
            Traditional programs stop at issuing completion certificates. We prepare you
            for the critical evaluation that decides whether you receive a job offer.
          </p>

          <Link
            to="/fellowships"
            className="group mt-8 inline-flex h-11 items-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
          >
            Explore Fellowships
            <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right Flow Cards */}
        <ol className="space-y-4 sm:space-y-5 text-left">
          {POINTS.map((point, index) => (
            <motion.li
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <article className="group relative flex gap-4 sm:gap-6 rounded-card border border-line bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-md">
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-control bg-brand-subtle font-mono text-sm font-bold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-content leading-snug group-hover:text-brand transition-colors">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-content-secondary">
                    {point.body}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>

      </div>
    </Section>
  );
}