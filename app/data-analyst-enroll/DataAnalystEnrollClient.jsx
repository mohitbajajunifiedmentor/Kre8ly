"use client";

import DataAnalystEnroll from "@/views/DataAnalystEnroll";
import { useAppContext } from "@/lib/app-context";

export default function DataAnalystEnrollClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DataAnalystEnroll darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
