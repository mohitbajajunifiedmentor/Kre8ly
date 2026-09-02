"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import NavDropdown from "./NavDropdown";
import MobileNav from "./MobileNav";
import { PRIMARY_NAV, groupMoreItems, resolveActiveNav } from "./nav-model";
import { cn } from "@/component/ui/cn";

const LOGO_LIGHT = "/assets/NavBar/Colored%20Logo.png";
const LOGO_DARK = "/assets/NavBar/White%20Logo.png";

/**
 * Kre8ly primary navigation.
 *
 * Rebuilt from the previous 1,540-line component. Every route, label and
 * external portal link is preserved (see ./nav-model.js) — what changed is the
 * structure and the accessibility:
 *
 *   - dropdowns are keyboard-reachable (the old ones were hover-only)
 *   - the mobile drawer traps focus, locks scroll and restores focus on close
 *   - desktop and mobile render from one nav model instead of two duplicated
 *     component trees
 *   - active state is derived from the pathname rather than held in six
 *     separate pieces of state synced by an effect
 *   - colours come from design tokens, so it themes correctly in both modes
 */
export default function Navbar() {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeKey = resolveActiveNav(pathname);
  const moreGroups = groupMoreItems();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer when the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-control focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-brand-fg"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-surface/85 backdrop-blur-md",
          "transition-[border-color,box-shadow] duration-200",
          scrolled ? "border-line shadow-sm" : "border-transparent"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8"
        >
          <Link
            href="/"
            aria-label="Kre8ly home"
            className="flex shrink-0 items-center rounded-control focus-visible:outline-none focus-visible:shadow-focus"
          >
            {/* Two files so the mark stays legible on both themes; the wrong
                one is hidden rather than swapped in JS, which avoids a flash. */}
            <img src={LOGO_LIGHT} alt="Kre8ly" className="h-8 w-auto dark:hidden" />
            <img src={LOGO_DARK} alt="Kre8ly" className="hidden h-8 w-auto dark:block" />
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {PRIMARY_NAV.map((entry) =>
              entry.href ? (
                <Link
                  key={entry.key}
                  href={entry.href}
                  className={cn(
                    "rounded-control px-3 py-2 text-sm font-medium transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:shadow-focus",
                    activeKey === entry.key
                      ? "text-brand bg-brand-subtle"
                      : "text-content-secondary hover:text-content hover:bg-surface-sunken"
                  )}
                >
                  {entry.label}
                </Link>
              ) : (
                <NavDropdown
                  key={entry.key}
                  label={entry.label}
                  groups={entry.groups ?? [{ name: entry.label, items: entry.items }]}
                  active={activeKey === entry.key}
                />
              )
            )}
            <NavDropdown label="More" groups={moreGroups} active={activeKey === "More"} />
          </div>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Link
              href="/contact-us"
              className="hidden rounded-control px-3 py-2 text-sm font-medium text-content-secondary transition-colors hover:bg-surface-sunken hover:text-content focus-visible:outline-none focus-visible:shadow-focus md:inline-flex"
            >
              Contact
            </Link>
            <Link
              href="/refer-and-earn"
              className="hidden h-10 items-center rounded-control bg-brand px-4 text-sm font-medium text-brand-fg shadow-xs transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus sm:inline-flex"
            >
              Refer &amp; Earn
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-control text-content transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus lg:hidden"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        nav={PRIMARY_NAV}
        moreGroups={moreGroups}
      />
    </>
  );
}
