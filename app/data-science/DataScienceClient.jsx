"use client";

import DataScience from "@/views/DataScience";
import { useAppContext } from "@/lib/app-context";

export default function DataScienceClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DataScience darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
