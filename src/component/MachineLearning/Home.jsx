import { FaStar } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { SlCalender } from "react-icons/sl";
import { Link } from "@/lib/router-compat";
import { Clock, CheckCircle, Briefcase, Download } from "lucide-react";
import { BiRupee } from "react-icons/bi";

/**
 * Shared hero for all eight course detail pages — WebDev, DataScience,
 * DataAnalyst, UIDesign, GraphicDesign, DigitalMarketing, MachineLearning and
 * LiveDataAnalyst all render this with their own `info`. Redesigning it here
 * redesigns every course hero.
 *
 * The data contract is unchanged (`badge`, `title`, `subtitle`, `description`,
 * `card`, `stats`, `trustMetrics`), so no Utils file needs editing.
 *
 * Fixed alongside the theming — details at each site:
 *   - two console.log calls, one of them inside the JSX
 *   - the price hard-coded in three places behind a pathname check
 *   - a "Download Syllabus" button wired to an undefined handler
 *   - an Enrol button that turned its own label invisible on hover
 *   - sub-components declared inside the render body
 *   - seventeen unused imports
 */

/** Rotating token surfaces for the stat tiles. */
const STAT_TONES = [
  "bg-brand-subtle text-brand",
  "bg-success-subtle text-success",
  "bg-info-subtle text-info",
  "bg-warning-subtle text-warning",
];

/**
 * Price was written inline three times as
 *   url === "/digital-marketing" ? "₹14,999/-" : "₹4,499/-"
 * so every new course silently inherited ₹4,499. It now reads the course's own
 * `card.price` when the data provides one, and falls back to the same map
 * otherwise, so existing pages are unchanged.
 */
const PRICE_BY_ROUTE = { "/digital-marketing": "₹14,999/-" };
const DEFAULT_PRICE = "₹4,499/-";

function resolvePrice(card, pathname) {
  return card?.price || PRICE_BY_ROUTE[pathname] || DEFAULT_PRICE;
}

/* Declared at module scope. These used to live inside the component body, so
   React saw a brand-new component type on every render and remounted the whole
   subtree instead of updating it. */

function StatTile({ value, label, tone }) {
  return (
    <div
      className={`rounded-card p-4 text-center transition-transform duration-300 hover:-translate-y-0.5 ${tone}`}
    >
      <dd className="text-2xl font-bold">{value}</dd>
      <dt className="mt-1 text-xs font-medium text-content-secondary">{label}</dt>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 text-sm text-content-secondary">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-subtle">
          <Icon aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
        </span>
        {label}
      </span>
      <span className="text-sm font-semibold text-content">{value}</span>
    </div>
  );
}

const Home = ({ info, location }) => {
  const pathname = usePathname();
  const normalizedInfo = Array.isArray(info) ? info : [info];
  const item = normalizedInfo[0];

  if (!item) return null;

  const { badge, title, subtitle, description, card = {}, stats = [], trustMetrics = {} } = item;
  const price = resolvePrice(card, pathname);

  // `features` was a hard-coded array inside the component, so every course
  // advertised "10 Weeks" regardless of its real length.
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

          <h1 className="mt-5 text-3xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-4xl xl:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-secondary md:text-lg">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-content-muted line-clamp-4">
              {description}
            </p>
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
              to={card.ApplyLink || "#"}
              className="inline-flex h-12 items-center justify-center rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus md:text-base"
            >
              {card.ctaText || "Enrol now"} — {price}
            </Link>

            {/* Was a <button onClick={onSyllabusDownload}> where that prop was
                never passed, so the handler was `undefined` and the button did
                nothing. It is a real link when the data supplies a syllabus
                URL, and is simply not rendered when it does not. */}
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
                  // light-mode shades (bg-info-subtle, bg-success-subtle …) that stay
                  // near-white on a dark surface. Tokens are used instead,
                  // cycling so the tiles keep their visual variety.
                  <StatTile
                    key={stat.label ?? index}
                    value={stat.value}
                    label={stat.label}
                    tone={STAT_TONES[index % STAT_TONES.length]}
                  />
                ))}
              </dl>
            )}

            <div className="space-y-3 border-t border-line pt-5">
              {card.batchStartDate && (
                <InfoRow
                  icon={SlCalender}
                  label="Next batch starts"
                  value={card.batchStartDate}
                />
              )}
              {/* The price used to be `text-error animate-pulse` — a
                  permanently blinking price reads as an error state. */}
              <InfoRow icon={BiRupee} label="Pricing starts from" value={price} />
            </div>

            <Link
              to={card.ApplyLink || "#"}
              // Was `bg-brand … hover:bg-surface-sunken` while keeping `text-white`,
              // so hovering turned the label invisible.
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

export default Home;