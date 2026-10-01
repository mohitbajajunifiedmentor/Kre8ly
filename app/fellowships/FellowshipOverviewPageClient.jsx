"use client";

import FellowshipOverviewPage from "@/views/FellowshipOverviewPage";
import { useAppContext } from "@/lib/app-context";

export default function FellowshipOverviewPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <FellowshipOverviewPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
