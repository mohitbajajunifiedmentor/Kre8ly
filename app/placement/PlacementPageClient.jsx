"use client";

import PlacementPage from "@/views/PlacementPage";
import { useAppContext } from "@/lib/app-context";

export default function PlacementPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <PlacementPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
