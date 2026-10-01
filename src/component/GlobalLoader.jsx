import React, { useEffect } from "react";

function GlobalLoader({
  isVisible,
  gifSrc,
  alt = "Loading...",
  durationMs = 2000,
}) {
  useEffect(() => {
    // Lock scroll while loader is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const circumference = 314; // ~2 * Math.PI * 50

  return (
    <div
      className={
        `fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#05080F] transition-opacity duration-500 ` +
        (isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none")
      }
      aria-hidden={!isVisible}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Inline keyframes for forward fill */}
        <style>{`
          @keyframes ringFill {
            from { stroke-dashoffset: ${circumference}px; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes softPulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
        `}</style>
        {gifSrc ? (
          <>
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              <div
                className="absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl"
                style={{ animation: "softPulse 2.4s ease-in-out infinite" }}
              />
              <svg
                className="absolute inset-0"
                viewBox="0 0 120 120"
                role="img"
                aria-label="Loading"
              >
                <defs>
                  <linearGradient
                    id="loaderGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#22c55e1a"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#loaderGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  style={{
                    strokeDashoffset: `${circumference}px`,
                    animation: `ringFill ${durationMs}ms ease-out forwards`,
                  }}
                />
              </svg>
              <img
                src={gifSrc}
                alt={alt}
                className="absolute inset-0 m-auto w-24 h-24 object-contain sm:w-28 sm:h-28"
                loading="eager"
              />
            </div>
            <div className="mt-6 text-center">
              {/* <span className="text-2xl font-semibold bg-clip-text text-content ">
                Kre8ly
              </span> */}
              {/* <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Preparing your experience...
              </p> */}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <svg
                className="absolute inset-0"
                viewBox="0 0 120 120"
                role="img"
                aria-label="Loading"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#22c55e1a"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  style={{
                    strokeDashoffset: `${circumference}px`,
                    animation: `ringFill ${durationMs}ms ease-out forwards`,
                  }}
                />
              </svg>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              Loading...
            </p>
          </div>
        )}
        {/* <p className="text-sm text-gray-600 dark:text-gray-300">Loading...</p> */}
      </div>
    </div>
  );
}

export default GlobalLoader;
