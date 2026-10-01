"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { cn } from "@/component/ui/cn";

/**
 * Mobile navigation drawer.
 *
 * Replaces the previous mobile menu, which duplicated the whole desktop link
 * tree in a second set of components. This renders from the same nav model, so
 * the two can no longer drift apart.
 *
 * Accessibility: body scroll lock, Escape to close, focus trapped while open,
 * focus restored to the trigger on close, and every section is a real
 * <button aria-expanded> rather than a div.
 */
function Section({ label, groups, defaultOpen = false, onNavigate }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 py-3.5 text-left text-[15px] font-medium text-content focus-visible:outline-none focus-visible:shadow-focus rounded-control"
      >
        {label}
        <FiChevronDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 shrink-0 text-content-muted transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="pb-3 space-y-3">
          {groups.map((group) => (
            <div key={group.name}>
              {groups.length > 1 && (
                <p className="px-1 pb-1 text-[11px] font-semibold uppercase tracking-wider text-content-muted">
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
                      onClick={onNavigate}
                      className="flex items-center justify-between gap-2 rounded-control px-3 py-2.5 text-sm text-content-secondary transition-colors hover:bg-brand-subtle hover:text-brand focus-visible:outline-none focus-visible:shadow-focus"
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
      )}
    </div>
  );
}

export default function MobileNav({ open, onClose, nav, moreGroups }) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const f = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => panelRef.current?.focus(), 0);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-[90]">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 animate-[fadeIn_150ms_ease-out]"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
        className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-surface shadow-lg outline-none"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="text-base font-semibold text-content">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-control p-1.5 text-content-muted transition-colors hover:bg-surface-sunken hover:text-content focus-visible:outline-none focus-visible:shadow-focus"
          >
            <IoClose className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5">
          {nav.map((entry) =>
            entry.href ? (
              <Link
                key={entry.key}
                href={entry.href}
                onClick={onClose}
                className="block border-b border-line py-3.5 text-[15px] font-medium text-content focus-visible:outline-none focus-visible:shadow-focus rounded-control"
              >
                {entry.label}
              </Link>
            ) : (
              <Section
                key={entry.key}
                label={entry.label}
                groups={entry.groups ?? [{ name: entry.label, items: entry.items }]}
                onNavigate={onClose}
              />
            )
          )}
          <Section label="More" groups={moreGroups} onNavigate={onClose} />
        </nav>

        <div className="border-t border-line p-5">
          <Link
            href="/refer-and-earn"
            onClick={onClose}
            className="flex h-11 w-full items-center justify-center rounded-control bg-brand px-5 text-sm font-medium text-brand-fg shadow-xs transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
          >
            Refer &amp; Earn
          </Link>
        </div>
      </div>
    </div>
  );
}
