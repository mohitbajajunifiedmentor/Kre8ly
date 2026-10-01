"use client";

import IsKre8lyInternshipLegit from "@/views/IsKre8lyInternshipLegit";
import { useAppContext } from "@/lib/app-context";

export default function IsKre8lyInternshipLegitClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <IsKre8lyInternshipLegit darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
