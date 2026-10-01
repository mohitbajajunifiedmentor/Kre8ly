"use client";

// Design tokens for the support console.
//
// Rewritten to use the site's theme tokens instead of hard-coded hex. The
// console was dark-only — every colour was a literal like #0D0F13 — so it
// ignored the theme switch entirely and looked wrong next to the rest of the
// product in light mode.
//
// Nothing here defines a colour. `bg-surface`, `text-content`, `border-line`
// and the status tones all resolve through src/styles/tokens.css, which is
// authored for both modes. Changing --brand-h re-themes this console too.
//
// Colour still only appears where it carries meaning: status, priority, and an
// SLA breach. Nothing decorative.

export const STATUS_META = {
  open: {
    label: "Open",
    dot: "bg-warning",
    text: "text-warning",
    ring: "ring-warning/30",
  },
  in_progress: {
    label: "In progress",
    dot: "bg-info",
    text: "text-info",
    ring: "ring-info/30",
  },
  waiting_for_user: {
    label: "Waiting on user",
    dot: "bg-brand",
    text: "text-brand",
    ring: "ring-brand/30",
  },
  resolved: {
    label: "Resolved",
    dot: "bg-success",
    text: "text-success",
    ring: "ring-success/30",
  },
  closed: {
    label: "Closed",
    dot: "bg-content-muted",
    text: "text-content-muted",
    ring: "ring-line-strong",
  },
};

export const PRIORITY_META = {
  urgent: { label: "Urgent", text: "text-error", bg: "bg-error-subtle", ring: "ring-error/25" },
  high: { label: "High", text: "text-warning", bg: "bg-warning-subtle", ring: "ring-warning/25" },
  medium: { label: "Medium", text: "text-info", bg: "bg-info-subtle", ring: "ring-info/25" },
  low: { label: "Low", text: "text-content-muted", bg: "bg-surface-sunken", ring: "ring-line" },
};

export const STATUS_ORDER = ["open", "in_progress", "waiting_for_user", "resolved", "closed"];
export const PRIORITY_ORDER = ["urgent", "high", "medium", "low"];

export function StatusBadge({ status }) {
  const m = STATUS_META[status] || STATUS_META.open;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-surface-sunken px-2.5 py-1 text-xs font-medium ring-1 ${m.ring} ${m.text}`}
    >
      {/* A dot AND a word: status is never carried by colour alone. */}
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${m.dot}`} />
      {m.label}
    </span>
  );
}

export function PriorityBadge({ priority }) {
  const m = PRIORITY_META[priority] || PRIORITY_META.medium;
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ring-1 ${m.ring} ${m.text} ${m.bg}`}
    >
      {m.label}
    </span>
  );
}

export function TicketNumber({ children, className = "" }) {
  return (
    <span className={`font-mono text-[13px] tracking-tight text-content-secondary ${className}`}>
      {children}
    </span>
  );
}

export function Timestamp({ value }) {
  if (!value) return <span className="text-content-muted">—</span>;
  const d = new Date(value);
  const diffMin = Math.round((Date.now() - d.getTime()) / 60000);
  let rel;
  if (diffMin < 1) rel = "just now";
  else if (diffMin < 60) rel = `${diffMin}m ago`;
  else if (diffMin < 60 * 24) rel = `${Math.round(diffMin / 60)}h ago`;
  else rel = d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  return (
    <span className="font-mono text-[12px] text-content-muted" title={d.toLocaleString()}>
      {rel}
    </span>
  );
}

export function Spinner({ className = "" }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    />
  );
}

export function EmptyState({ title, body }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 rounded-card border border-dashed border-line px-6 py-16 text-center">
      <p className="text-sm font-medium text-content">{title}</p>
      {body ? <p className="max-w-sm text-[13px] text-content-secondary">{body}</p> : null}
    </div>
  );
}

export function Banner({ tone = "error", children }) {
  const tones = {
    error: "border-error/30 bg-error-subtle text-error",
    info: "border-info/30 bg-info-subtle text-info",
    success: "border-success/30 bg-success-subtle text-success",
  };
  return (
    <div
      role={tone === "error" ? "alert" : "status"}
      className={`rounded-control border px-3 py-2 text-[13px] ${tones[tone] || tones.error}`}
    >
      {children}
    </div>
  );
}

/* Shared control classes. Keeping them here stops each page inventing its own
   input styling and drifting apart. */
export const INPUT =
  "w-full rounded-control border border-line bg-surface px-3 py-2 text-[13px] text-content outline-none " +
  "placeholder:text-content-muted focus:border-brand focus:shadow-focus";

export const SELECT =
  "rounded-control border border-line bg-surface px-2.5 py-2 text-[13px] text-content outline-none focus:border-brand";

export const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-control bg-brand px-3.5 py-2 text-[13px] font-medium " +
  "text-brand-fg transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50 " +
  "focus-visible:outline-none focus-visible:shadow-focus";

export const BTN_GHOST =
  "inline-flex items-center gap-2 rounded-control px-3 py-1.5 text-[13px] text-content-secondary " +
  "transition-colors hover:bg-surface-sunken hover:text-content focus-visible:outline-none focus-visible:shadow-focus";