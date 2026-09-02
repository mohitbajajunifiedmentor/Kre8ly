"use client";

import ServicePage from "@/views/ServicePage";
import { useAppContext } from "@/lib/app-context";

export default function ServicePageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <ServicePage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
