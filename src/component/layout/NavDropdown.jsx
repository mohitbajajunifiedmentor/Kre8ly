"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/component/ui/cn";

/**
 * Accessible dropdown for the desktop nav.
 *
 * Opens on hover (with a short close delay so the pointer can cross the gap)
 * and on click/Enter/Space for keyboard and touch users — the previous nav was
 * hover-only, which made the menus unreachable by keyboard.
 */
export default function NavDropdown({ label, groups, active }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const wrapRef = useRef(null);
  const menuId = useId();

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  const multi = groups.length > 1;

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 rounded-control px-3 py-2 text-sm font-medium",
          "transition-colors duration-150 focus-visible:outline-none focus-visible:shadow-focus",
          active
            ? "text-brand bg-brand-subtle"
            : "text-content-secondary hover:text-content hover:bg-surface-sunken"
        )}
      >
        {label}
        <FiChevronDown
          aria-hidden="true"
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {/* Always mounted, hidden with a class rather than conditionally rendered.
          Conditional mounting kept every dropdown link out of the server HTML,
          which would have removed ~30 internal links from what crawlers see and
          broken navigation entirely without JS. */}
      <div
        id={menuId}
        hidden={!open}
        className={cn(
          "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2",
          multi ? "w-[34rem]" : "w-60"
        )}
      >
          <div
            className={cn(
              "rounded-card border border-line bg-overlay p-2 shadow-lg",
              "animate-[fadeIn_120ms_ease-out]",
              multi && "grid grid-cols-2 gap-1"
            )}
          >
            {groups.map((group) => (
              <div key={group.name} className="p-1">
                {multi && (
                  <p className="px-2.5 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-wider text-content-muted">
                    {group.name}
                  </p>
                )}
                <ul className="space-y-0.5">
                  {group.items.map((item) => (
                    <li key={item.link}>
                      <Link
                        href={item.link}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between gap-2 rounded-control px-2.5 py-2 text-sm",
                          "text-content-secondary transition-colors duration-150",
                          "hover:bg-brand-subtle hover:text-brand",
                          "focus-visible:outline-none focus-visible:shadow-focus"
                        )}
                      >
                        <span>{item.text}</span>
                        {item.external && (
                          <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0 opacity-60" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
