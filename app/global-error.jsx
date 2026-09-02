"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Poppins, sans-serif", padding: "48px", textAlign: "center" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "12px" }}>Something went wrong</h1>
        <p style={{ color: "#52527A", marginBottom: "24px" }}>
          An unexpected error occurred while loading Kre8ly.
        </p>
        <button
          onClick={() => reset()}
          style={{
            padding: "10px 24px",
            borderRadius: "999px",
            background: "#3D207E",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
