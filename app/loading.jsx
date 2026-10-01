/**
 * Route-level loading UI. Server-rendered and dependency-free so it is part of
 * the initial HTML shell rather than something that waits for JS.
 * Colours match the existing palette (#3D207E / #EBEBEB).
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#05080F]">
      <span className="sr-only">Loading…</span>
      <div
        aria-hidden="true"
        className="h-12 w-12 rounded-full border-4 border-[#EBEBEB] border-t-[#3D207E] animate-spin"
      />
    </div>
  );
}
