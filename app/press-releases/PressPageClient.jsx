"use client";

import PressPage from "@/views/PressPage";
import { useAppContext } from "@/lib/app-context";

export default function PressPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <PressPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
