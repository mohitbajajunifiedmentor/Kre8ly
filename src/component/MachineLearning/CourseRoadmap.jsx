import React, { useRef, useEffect, useState } from "react";

const subHeading = (variant) => {
  switch (variant) {
    case "DataAnalystFellowship":
      return `The fellowship follows the same steps a real analytics team goes through, so by the end the process feels familiar. You do each step on actual datasets, and a mentor checks your work along the way.`;
    case "FinancialAnalystFellowship":
      return `Each project follows the steps a finance team would actually take, so the routine feels familiar by the time you apply for jobs. A mentor reviews your work at every stage.`;
    case "BusinessAnalystFellowship":
      return `The fellowship follows the path a real business analysis project takes. You practise each stage on a case, and a mentor reviews your work before you move on.`;
    case "DigitalMarketingFellowship":
      return `The fellowship follows the stages of a real campaign. You do each one on a live project and get mentor feedback before moving ahead.`;
    case "DataScienceFellowship":
      return `Every project follows the same eight stages a data team goes through. You practise them in Python on real datasets, and a mentor reviews your work along the way.`;
    default:
      return "Our structured 8-step process ensures your project is delivered.";
  }
};

const colorClasses = {
  blue: { badge: "bg-info", iconBg: "bg-info-subtle", iconColor: "text-info" },
  green: {
    badge: "bg-success",
    iconBg: "bg-success-subtle",
    iconColor: "text-success",
  },
  purple: {
    badge: "bg-brand",
    iconBg: "bg-brand-subtle",
    iconColor: "text-brand",
  },
  orange: {
    badge: "bg-warning",
    iconBg: "bg-warning-subtle",
    iconColor: "text-warning",
  },
  indigo: {
    badge: "bg-brand",
    iconBg: "bg-brand-subtle",
    iconColor: "text-brand",
  },
  teal: {
    badge: "bg-success",
    iconBg: "bg-success-subtle",
    iconColor: "text-success",
  },
  red: {
    badge: "bg-error",
    iconBg: "bg-error-subtle",
    iconColor: "text-error",
  },
  slate: {
    badge: "bg-slate-600",
    iconBg: "bg-slate-50",
    iconColor: "text-slate-600",
  },
};

// eslint-disable-next-line no-unused-vars
const CourseRoadmap = ({
  ModuleInfo,
  roadmapSteps = [],
  varient,
  variant,
  courseName,
}) => {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const activeVariant = varient || variant;

  // mobile timeline progress (0-100)
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
            className="mb-8 text-center md:mb-14"
          >
            <h2 className="mb-3.5 mt-2 text-3xl font-semibold leading-normal tracking-tight text-content lg:text-4xl">
              {courseName}
            </h2>
            <p
              className="mx-auto max-w-2xl text-base leading-relaxed text-content-secondary lg:text-lg"
              dangerouslySetInnerHTML={{ __html: subHeading(activeVariant) }}
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
                ),
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
          {IconComponent && (
            <IconComponent className={`h-5 w-5 ${colors.iconColor}`} />
          )}
        </div>
        <span
          aria-label={`Step ${step.id}`}
          className="text-3xl font-bold tabular-nums text-content-muted opacity-40"
        >
          {String(step.id).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold leading-normal text-content">
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed text-content-secondary">
        {step.description}
      </p>
    </article>
  );
};

export default CourseRoadmap;
