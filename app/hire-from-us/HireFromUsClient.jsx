"use client";

import HireFromUs from "@/views/HireFromUs";
import { useAppContext } from "@/lib/app-context";

export default function HireFromUsClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <HireFromUs darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
