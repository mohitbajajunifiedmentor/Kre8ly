"use client";

import Reveal from "@/component/ui/Reveal";

/**
 * Section shell and headers.
 *
 * Built because every section on the site had become the same object: a centred
 * heading, a centred subtitle, then a grid of bordered cards on `bg-surface`.
 * 28 files repeat that heading block and 18 repeat that card shell. You could
 * swap any two sections and not notice, which is what a page with no visual
 * identity looks like.
 *
 * These primitives let sections differ from one another on purpose: tone,
 * rhythm and header alignment become choices rather than accidents.
 */

/** Vertical rhythm. Uniform padding everywhere makes a long page feel flat. */
const SPACE = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

/**
 * `tone` replaces the habit of alternating `bg-surface-sunken` on every other
 * section. `canvas` should stay the majority: a page where every band is tinted
 * gives nothing a ground to sit on.
 */
const TONE = {
  canvas: "bg-canvas",
  sunken: "bg-surface-sunken",
  wash: "bg-canvas",
};

export function Section({
  as: Tag = "section",
  tone = "canvas",
  space = "md",
  bleed = false,
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag className={`relative w-full ${TONE[tone]} ${SPACE[space]} ${className}`} {...rest}>
      {tone === "wash" ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, hsl(var(--k-brand) / 0.10), transparent 70%)",
          }}
        />
      ) : null}

      <div className={bleed ? "" : "mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"}>{children}</div>
    </Tag>
  );
}

/** Small uppercase label above a heading — a cheap way to give a section a name. */
export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-content-muted ${className}`}
    >
      <span aria-hidden="true" className="h-px w-6 bg-brand" />
      {children}
    </p>
  );
}

/**
 * @param {"left"|"center"} align  Left by default. Centred headings read as
 *        template; left-aligned ones give the page a spine.
 * @param {node} aside  Optional right-hand content, so the header row carries
 *        information instead of being dead space.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  aside = null,
  className = "",
}) {
  const centered = align === "center";

  return (
    <Reveal direction="up">
      <div
        className={[
          "mb-10 md:mb-14",
          centered ? "mx-auto max-w-3xlxl text-center" : "",
          !centered && aside
            ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            : "",
          className,
        ].join(" ")}
      >
        <div className={centered ? "" : "max-w-2xl"}>
          {eyebrow ? (
            <Eyebrow className={centered ? "justify-center" : ""}>{eyebrow}</Eyebrow>
          ) : null}

          {/* `text-balance` stops a two-line heading leaving one orphan word,
              which is most of what makes a heading look unconsidered. */}
          <h2
            className={`mt-4 text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-content md:text-4xl lg:text-[2.75rem] ${
              centered ? "text-balance" : "text-pretty"
            }`}
          >
            {title}
          </h2>

          {lead ? (
            <p className="mt-4 text-base leading-relaxed text-content-secondary md:text-lg">
              {lead}
            </p>
          ) : null}
        </div>

        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
    </Reveal>
  );
}

/**
 * Hairline rule for separating editorial rows. This is the replacement for a
 * card border: it groups content without boxing it.
 */
export function Hairline({ className = "" }) {
  return <span aria-hidden="true" className={`block h-px w-full bg-line ${className}`} />;
}