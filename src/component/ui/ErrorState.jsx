"use client";

import Button from "./Button";
import { cn } from "./cn";

/**
 * User-facing error UI. The technical message is only rendered in development
 * so production users never see a stack trace or backend detail.
 */
export default function ErrorState({
  title = "Something went wrong",
  description = "We could not load this section. Please try again in a moment.",
  error = null,
  onRetry = null,
  className,
}) {
  const showDetail = process.env.NODE_ENV !== "production" && error;

  return (
    <div
      role="alert"
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "rounded-card border border-error/25 bg-error-subtle px-6 py-10",
        className
      )}
    >
      <h3 className="text-base font-semibold text-content">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-content-secondary">{description}</p>
      {showDetail && (
        <pre className="mt-4 max-w-full overflow-auto rounded-control bg-surface-sunken p-3 text-left text-xs text-content-muted">
          {String(error?.message ?? error)}
        </pre>
      )}
      {onRetry && (
        <Button variant="secondary" size="sm" className="mt-5" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
