"use client";

import JobsPage from "@/views/JobsPage";
import { useAppContext } from "@/lib/app-context";

export default function JobsPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <JobsPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
