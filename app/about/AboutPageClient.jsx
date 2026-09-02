"use client";

import AboutPage from "@/views/AboutPage";
import { useAppContext } from "@/lib/app-context";

export default function AboutPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <AboutPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
