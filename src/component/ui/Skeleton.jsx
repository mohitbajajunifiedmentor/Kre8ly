import { cn } from "./cn";

/**
 * Content-shaped loading placeholder. Preferred over a spinner because it
 * reserves the final layout, so nothing shifts when the data lands (CLS).
 */
export default function Skeleton({ className, ...rest }) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-control bg-surface-sunken", className)}
      {...rest}
    />
  );
}

export function SkeletonText({ lines = 3, className }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-3.5", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }) {
  return (
    <div className={cn("rounded-card border border-line bg-surface p-5 space-y-4", className)}>
      <Skeleton className="h-32 w-full rounded-control" />
      <Skeleton className="h-4 w-1/2" />
      <SkeletonText lines={2} />
    </div>
  );
}
