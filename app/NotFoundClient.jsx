"use client";

/**
 * Replaces the old catch-all `<Route path="*" element={<ErrorPage />} />`.
 * ErrorPage pulls in the Navbar/Footer tree, which is interactive, so it has to
 * sit behind a client boundary.
 */
import ErrorPage from "@/views/ErrorPage";

export default function NotFoundClient() {
  return <ErrorPage />;
}
