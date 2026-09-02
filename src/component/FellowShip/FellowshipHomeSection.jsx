import { Link } from "@/lib/router-compat";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { Clock, CheckCircle, Briefcase, Download } from "lucide-react";
import { BiRupee } from "react-icons/bi";

/**
 * Shared hero for all ten fellowship detail pages
 * (src/views/fellowship/FellowShipPage/*.jsx render this with their own
 * `PageDetails`). Redesigning it here redesigns every fellowship hero.
 *
 * The data contract is unchanged — `badge`, `headings`, `card`, `stats`,
 * `trustMetrics` are read exactly as before, so no Utils file needs editing.
 *
 * Fixed alongside the theming (details at each site):
 *   - a `console.log` of the whole PageDetails object on every render
 *   - a "Download Syllabus" button wired to an undefined handler
 *   - an Enrol button that turned its own label invisible on hover
 *   - eight unused imports, incl. react-tilt and framer-motion
 *   - `dark:from-inherit dark:via-inherit dark:to-inherit` repeated five times
 */

const ENROL_LINK = "https://pages.razorpay.com/umweb2026";

/** Rotating token surfaces for the stat tiles. */
const STAT_TONES = [
  "bg-brand-subtle text-brand",
  "bg-success-subtle text-success",
  "bg-info-subtle text-info",
  "bg-warning-subtle text-warning",
];

const FellowshipHomeSection = ({ PageDetails }) => {
  const items = Array.isArray(PageDetails) ? PageDetails : [];
  const item = items[0];

  if (!item) return null;

  const { badge, headings = {}, card = {}, stats = [], trustMetrics = {} } = item;

  // `features` was a hard-coded array declared inside the component, so every
  // fellowship advertised "10 Weeks" regardless of its real length. It now
  // reads the track's own duration when the data provides one.
  const duration = card.duration || item.duration || null;
  const features = [
    duration && { icon: Clock, text: duration },
    { icon: CheckCircle, text: "Beginner Friendly" },
    { icon: Briefcase, text: "Job Assistance" },
  ].filter(Boolean);

  return (
    <div className="relative isolate w-full overflow-hidden bg-canvas text-content">
      {/* One soft brand wash, replacing the slate/sky/indigo gradient that fell
          back to `bg-inherit` in dark mode and left the hero unstyled. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 60% at 25% -10%, hsl(var(--k-brand) / 0.16), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 90% 10%, hsl(var(--k-accent) / 0.10), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:flex-row lg:items-start lg:gap-14 lg:px-8">
        {/* ---------------- left ---------------- */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="w-full lg:w-[55%]"
        >
          {badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-content-secondary shadow-xs md:text-sm">
              <CheckCircle aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
              {badge}
            </span>
          )}

          <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl xl:text-5xl">
            {headings.title}
          </h1>

          {headings.subtitle && (
            <p className="mt-3 text-lg font-medium text-brand md:text-xl">
              {headings.subtitle}
            </p>
          )}

          {headings.description && (
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed text-content-secondary"
              // The copy in the Utils files contains inline markup, so this
              // stays as-is. Content is authored in-repo, not user-supplied.
              dangerouslySetInnerHTML={{ __html: headings.description }}
            />
          )}

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {features.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="inline-flex items-center gap-2 rounded-control border border-line bg-surface px-3.5 py-2 text-sm font-medium text-content-secondary shadow-xs"
              >
                <Icon aria-hidden="true" className="h-4 w-4 text-brand" />
                {text}
              </li>
            ))}
          </ul>

          {trustMetrics.rating && (
            <div className="mt-6 flex items-center gap-2.5">
              <div aria-hidden="true" className="flex text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm text-content-secondary">
                {trustMetrics.rating}/5 · {trustMetrics.totalReviews} reviews
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={card.ApplyLink || ENROL_LINK}
              className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
            >
              {card.ctaText || "Enrol now"}
            </Link>

            {/* Was a <button onClick={onSyllabusDownload}> where that prop was
                never passed — the handler was `undefined`, so the button did
                nothing at all. It is a real link when the data supplies a
                syllabus URL, and is simply not rendered when it does not. */}
            {card.syllabusLink && (
              <Link
                to={card.syllabusLink}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-control border border-line-strong bg-surface px-6 text-sm font-semibold text-content transition-colors duration-200 hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus md:text-base"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Download syllabus
              </Link>
            )}
          </div>
        </div>

        {/* ---------------- right: stats card ---------------- */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="w-full lg:w-[45%]"
        >
          <div className="rounded-panel border border-line bg-surface p-6 shadow-md md:p-7">
            {stats.length > 0 && (
              <dl className="mb-6 grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  // The `color` / `bgColor` classes in the Utils data are fixed
                  // light-mode Tailwind shades (bg-sky-50, bg-green-50 …) that
                  // stay near-white on a dark surface. Tokens are used instead,
                  // cycling so the tiles keep their visual variety.
                  <div
                    key={stat.label ?? index}
                    className={[
                      "rounded-card p-4 text-center transition-transform duration-300 hover:-translate-y-0.5",
                      STAT_TONES[index % STAT_TONES.length],
                    ].join(" ")}
                  >
                    <dd className="text-2xl font-bold">{stat.value}</dd>
                    <dt className="mt-1 text-xs font-medium text-content-secondary">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            )}

            <div className="space-y-3 border-t border-line pt-5">
              {card.batchStartDate && (
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-sm text-content-secondary">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
                      <SlCalender aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
                    </span>
                    Next batch starts
                  </span>
                  <span className="text-sm font-semibold text-content">
                    {card.batchStartDate}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-sm text-content-secondary">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
                    <BiRupee aria-hidden="true" className="h-4 w-4 text-brand" />
                  </span>
                  Pricing starts from
                </span>
                {/* Was `text-red-500 animate-pulse` — a permanently blinking
                    price reads as an error state and never stops moving. */}
                <span className="text-sm font-semibold text-brand">₹399/-</span>
              </div>
            </div>

            <Link
              to={card.ApplyLink || ENROL_LINK}
              // Was `bg-sky-900 ... hover:bg-gray-100` while keeping
              // `text-white`, so hovering turned the label invisible.
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-control bg-brand text-sm font-semibold text-brand-fg transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
            >
              {card.ctaText || "Enrol now"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FellowshipHomeSection;