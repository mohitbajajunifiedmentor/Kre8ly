"use client";

import AffiliateDashboard from "@/views/Affilate/AffiliateDashboard";
import { useAppContext } from "@/lib/app-context";

export default function AffiliateDashboardClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <AffiliateDashboard darkMode={darkMode} />
  );
}
