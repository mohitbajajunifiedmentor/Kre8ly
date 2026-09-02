import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/router-compat";

// Prices keyed by the route they belong to, so the "current" and "struck
// through" values can never drift apart the way two parallel ternaries can.
const PRICING = {
  fellowship: { now: "₹399/-", was: "₹599/-" },
  digitalMarketing: { now: "₹14,999/-", was: "₹20,999/-" },
  default: { now: "₹4,499/-", was: "₹6,999/-" },
};

const getPricing = (url) => {
  if (/^\/fellowship(\/|$)/.test(url ?? "")) return PRICING.fellowship;
  if (url === "/digital-marketing") return PRICING.digitalMarketing;
  return PRICING.default;
};

const FloatingEnrollBar = ({ info, fellowship }) => {
  // was `window.location.pathname` — usePathname() returns the same value and
  // is safe during server rendering, so SSR and client markup match.
  const url = usePathname();

  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    let frame = null;

    const computeOverlap = () => {
      const hero = document.querySelector("section#hero");
      const nav = document.querySelector("nav");
      if (!hero || !nav) {
        setIsOverHero(false);
        return;
      }
      const heroRect = hero.getBoundingClientRect();
      const navHeight = nav.offsetHeight || 0;
      setIsOverHero(heroRect.bottom > navHeight);
    };

    // getBoundingClientRect on every scroll event forces layout; coalescing
    // into one measurement per frame keeps scrolling smooth.
    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        computeOverlap();
      });
    };

    computeOverlap();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // The bar is `fixed` and full width, so only one can ever be visible.
  const item = info?.[0];
  if (isOverHero || !item) return null;

  const { now, was } = getPricing(url);
  const href = fellowship
    ? "https://pages.razorpay.com/umweb2026"
    : item?.card?.ApplyLink;
  const isExternal = /^https?:\/\//.test(href ?? "");

  const ctaClass =
    "inline-block bg-brand text-brand-fg px-3 md:px-6 py-2 rounded-md font-semibold hover:bg-brand-hover transition";

  return (
    <div className="fixed bottom-14 md:bottom-0 left-0 w-full bg-white dark:bg-surface shadow-[0_-2px_10px_rgba(0,0,0,0.1)] dark:shadow-none border-t border-line dark:border-line-strong z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-16 py-3 text-sm md:text-base">
        {/* Cohort start date */}
        <div className="flex flex-col text-center md:text-left">
          <span className="text-content-secondary font-medium hidden md:block">
            Batch Start Date
          </span>
          <span className="text-content-secondary font-medium md:hidden">
            Batch
          </span>
          <span className="font-bold text-xs md:text-lg text-content">
            {item?.card?.batchStartDate}
          </span>
        </div>

        {/* Cost */}
        <div className="flex flex-col text-center">
          <span className="text-content-secondary font-medium hidden md:block">
            Program price starts from
          </span>
          <span className="text-content-secondary font-medium md:hidden">
            Price
          </span>
          <span className="font-bold text-xs md:text-lg text-success">
            {now}
          </span>
          <span className="line-through text-content-muted text-sm">{was}</span>
        </div>

        {/* CTA Button */}
        <div>
          {isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass}
            >
              Enroll Now →
            </a>
          ) : (
            <Link to={href} className={ctaClass}>
              Enroll Now →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingEnrollBar;