"use client";

import { forwardRef } from "react";
import { cn } from "./cn";

/**
 * The single button in the Kre8ly system.
 *
 * Every variant shares the same height scale, radius, focus ring and disabled
 * treatment, so a primary button on the dashboard is the same object as a
 * primary button on the marketing site.
 */

const VARIANTS = {
  primary:
    "bg-brand text-brand-fg hover:bg-brand-hover active:bg-brand-active shadow-xs",
  secondary:
    "bg-surface-raised text-content border border-line hover:bg-surface-sunken hover:border-line-strong",
  outline:
    "bg-transparent text-brand border border-brand/40 hover:bg-brand-subtle hover:border-brand",
  ghost: "bg-transparent text-content-secondary hover:bg-surface-sunken hover:text-content",
  danger: "bg-error text-white hover:brightness-95 active:brightness-90 shadow-xs",
  success: "bg-success text-white hover:brightness-95 active:brightness-90 shadow-xs",
};

const SIZES = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
  icon: "h-11 w-11 p-0",
};

const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    leadingIcon = null,
    trailingIcon = null,
    fullWidth = false,
    className,
    children,
    type = "button",
    ...rest
  },
  ref
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-control font-medium",
        "transition-colors duration-150 select-none",
        "focus-visible:outline-none focus-visible:shadow-focus",
        "disabled:opacity-50 disabled:pointer-events-none",
        VARIANTS[variant] ?? VARIANTS.primary,
        SIZES[size] ?? SIZES.md,
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin"
        />
      )}
      {!loading && leadingIcon}
      {size !== "icon" && children}
      {size === "icon" && !loading && children}
      {!loading && trailingIcon}
    </button>
  );
});

export default Button;
