"use client";

import DataScienceEnroll from "@/views/DataScienceEnroll";
import { useAppContext } from "@/lib/app-context";

export default function DataScienceEnrollClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DataScienceEnroll darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
