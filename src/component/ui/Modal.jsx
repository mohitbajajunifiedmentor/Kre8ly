"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { cn } from "./cn";

const SIZES = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

/**
 * Accessible dialog: Escape to close, click-outside to close, body scroll lock,
 * focus moved in on open and restored to the trigger on close, and focus
 * trapped inside while open.
 */
export default function Modal({
  open,
  onClose,
  title,
  description,
  size = "md",
  footer = null,
  children,
  className,
}) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose?.();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Defer so the panel exists before we move focus into it.
    const t = window.setTimeout(() => panelRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onKeyDown={handleKeyDown}
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px] animate-[fadeIn_150ms_ease-out]"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : undefined}
        tabIndex={-1}
        className={cn(
          "relative w-full bg-overlay text-content shadow-lg outline-none",
          "rounded-t-panel sm:rounded-panel border border-line",
          "max-h-[90vh] overflow-y-auto",
          SIZES[size] ?? SIZES.md,
          className
        )}
      >
        <div className="flex items-start justify-between gap-4 p-5 pb-3">
          <div className="space-y-1">
            {title && <h2 className="text-lg font-semibold text-content">{title}</h2>}
            {description && (
              <p className="text-sm text-content-secondary">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="shrink-0 rounded-control p-1.5 text-content-muted hover:bg-surface-sunken hover:text-content transition-colors focus-visible:outline-none focus-visible:shadow-focus"
          >
            <IoClose className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 pb-5">{children}</div>

        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-line px-5 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
