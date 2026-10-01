"use client";

import GrievanceOfficer from "@/views/GrievanceOfficer";
import { useAppContext } from "@/lib/app-context";

export default function GrievanceOfficerClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <GrievanceOfficer darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
