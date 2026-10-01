"use client";

import { useEffect, useRef, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { useAppContext } from "@/lib/app-context";
import { cn } from "@/component/ui/cn";
import { FLOATING_SLOT_2, FLOATING_Z_THEME } from "@/component/ui/floating-stack";

/**
 * Kre8ly theme switcher — light / dark / system.
 *
 * Replaces the old two-state toggle, which was `hidden md:block` (so mobile had
 * no way to change theme at all) and had no system option.
 *
 * Props are still accepted for compatibility with the existing call site in
 * src/lib/AppShell.jsx, but the component now reads from context directly.
 */

const OPTIONS = [
  { value: "light", label: "Light", Icon: FiSun },
  { value: "dark", label: "Dark", Icon: FiMoon },
  { value: "system", label: "System", Icon: FiMonitor },
];

export default function Themes() {
  const { theme, setTheme, resolvedTheme } = useAppContext();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Until mounted, `theme` is the "system" placeholder rather than the stored
  // choice, so render the button without a checked state to avoid a mismatch.
  const active = mounted ? theme : null;
  const CurrentIcon =
    !mounted || theme === "system" ? FiMonitor : resolvedTheme === "dark" ? FiMoon : FiSun;

  return (
    <div ref={wrapRef} className={cn(FLOATING_SLOT_2, FLOATING_Z_THEME)}>
      {open && (
        <div
          role="menu"
          aria-label="Colour theme"
          className="absolute bottom-full right-0 mb-2 w-40 overflow-hidden rounded-card border border-line bg-overlay p-1 shadow-lg animate-[fadeIn_120ms_ease-out]"
        >
          {OPTIONS.map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              role="menuitemradio"
              aria-checked={active === value}
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-control px-3 py-2 text-sm transition-colors",
                "focus-visible:outline-none focus-visible:shadow-focus",
                active === value
                  ? "bg-brand-subtle text-brand font-medium"
                  : "text-content-secondary hover:bg-surface-sunken hover:text-content"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {label}
              {active === value && (
                <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 rounded-full bg-brand" />
              )}
            </button>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Change colour theme (current: ${mounted ? theme : "system"})`}
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full",
          "border border-line bg-surface text-content shadow-md",
          "transition-transform duration-200 hover:scale-105 active:scale-95",
          "focus-visible:outline-none focus-visible:shadow-focus"
        )}
      >
        <CurrentIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}