import { cn } from "./cn";

/**
 * Empty state: icon, what happened, why, and the one action that resolves it.
 * Replaces bare "No data found" strings.
 */
export default function EmptyState({
  icon = null,
  title,
  description,
  action = null,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        "rounded-card border border-dashed border-line bg-surface-raised",
        "px-6 py-12",
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-subtle text-brand [&>svg]:h-6 [&>svg]:w-6">
          {icon}
        </div>
      )}
      <h3 className="text-base font-semibold text-content">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-sm text-sm text-content-secondary">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
