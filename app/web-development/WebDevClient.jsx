"use client";

import WebDev from "@/views/WebDev";
import { useAppContext } from "@/lib/app-context";

export default function WebDevClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <WebDev darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
