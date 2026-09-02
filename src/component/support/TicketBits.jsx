"use client";

/**
 * Shared presentational bits for the support pages, so the user view and the
 * agent view can never drift into showing the same status two different ways.
 */

const STATUS_META = {
  open: { label: "Open", tone: "bg-info-subtle text-info border-info/25" },
  in_progress: { label: "In Progress", tone: "bg-brand-subtle text-brand border-brand/25" },
  waiting_for_user: {
    label: "Waiting for You",
    tone: "bg-warning-subtle text-warning border-warning/25",
  },
  resolved: { label: "Resolved", tone: "bg-success-subtle text-success border-success/25" },
  closed: { label: "Closed", tone: "bg-surface-sunken text-content-muted border-line" },
};

const PRIORITY_META = {
  low: { label: "Low", tone: "bg-surface-sunken text-content-muted border-line" },
  medium: { label: "Medium", tone: "bg-info-subtle text-info border-info/25" },
  high: { label: "High", tone: "bg-warning-subtle text-warning border-warning/25" },
  urgent: { label: "Urgent", tone: "bg-error-subtle text-error border-error/25" },
};

export const STATUS_ORDER = [
  "open",
  "in_progress",
  "waiting_for_user",
  "resolved",
  "closed",
];
export const PRIORITY_ORDER = ["low", "medium", "high", "urgent"];
export { STATUS_META, PRIORITY_META };

function Pill({ meta, fallback }) {
  const m = meta || { label: fallback, tone: "bg-surface-sunken text-content-muted border-line" };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${m.tone}`}
    >
      {/* A dot plus a word — status is never carried by colour alone. */}
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {m.label}
    </span>
  );
}

export function StatusBadge({ status }) {
  return <Pill meta={STATUS_META[status]} fallback={status} />;
}

export function PriorityBadge({ priority }) {
  return <Pill meta={PRIORITY_META[priority]} fallback={priority} />;
}

export function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Author styling for a thread entry. */
export const AUTHOR_META = {
  user: { label: "You", align: "right", tone: "bg-brand text-brand-fg" },
  bot: { label: "Assistant", align: "left", tone: "bg-surface border border-line text-content" },
  support: {
    label: "Support Team",
    align: "left",
    tone: "bg-success-subtle border border-success/25 text-content",
  },
  system: {
    label: "System",
    align: "center",
    tone: "bg-surface-sunken text-content-muted text-xs",
  },
};

export function Skeleton({ className = "" }) {
  return <div aria-hidden="true" className={`animate-pulse rounded-control bg-surface-sunken ${className}`} />;
}

export function EmptyState({ title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-card border border-dashed border-line bg-surface-raised px-6 py-14 text-center">
      <h3 className="text-base font-semibold text-content">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-sm text-sm text-content-secondary">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div
      role="alert"
      className="rounded-card border border-error/25 bg-error-subtle px-6 py-8 text-center"
    >
      <h3 className="text-base font-semibold text-content">Something went wrong</h3>
      <p className="mt-1.5 text-sm text-content-secondary">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex h-10 items-center rounded-control border border-line-strong bg-surface px-5 text-sm font-medium text-content transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:shadow-focus"
        >
          Try again
        </button>
      )}
    </div>
  );
}