"use client";

import WebDevelopmentEnroll from "@/views/WebDevelopmentEnroll";
import { useAppContext } from "@/lib/app-context";

export default function WebDevelopmentEnrollClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <WebDevelopmentEnroll darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
