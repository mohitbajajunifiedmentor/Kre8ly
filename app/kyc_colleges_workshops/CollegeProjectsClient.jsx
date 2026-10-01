"use client";

import CollegeProjects from "@/views/KYCCollegesWorkshops/CollegeProjects";
import { useAppContext } from "@/lib/app-context";

export default function CollegeProjectsClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <CollegeProjects darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
