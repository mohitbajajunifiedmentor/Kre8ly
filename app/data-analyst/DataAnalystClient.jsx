"use client";

import DataAnalyst from "@/views/DataAnalyst";
import { useAppContext } from "@/lib/app-context";

export default function DataAnalystClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DataAnalyst darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
