import { cn } from "./cn";

/**
 * Status badge. Every variant pairs a colour with a text label, so status is
 * never communicated by colour alone.
 */
const TONES = {
  neutral: "bg-surface-sunken text-content-secondary border-line",
  brand: "bg-brand-subtle text-brand border-brand/20",
  success: "bg-success-subtle text-success border-success/20",
  warning: "bg-warning-subtle text-warning border-warning/20",
  error: "bg-error-subtle text-error border-error/20",
  info: "bg-info-subtle text-info border-info/20",
};

export default function Badge({ tone = "neutral", dot = false, className, children, ...rest }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5",
        "text-xs font-medium whitespace-nowrap",
        TONES[tone] ?? TONES.neutral,
        className
      )}
      {...rest}
    >
      {dot && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
