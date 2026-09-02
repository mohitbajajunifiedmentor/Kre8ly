"use client";

import CoursesPage from "@/views/CoursesPage";
import { useAppContext } from "@/lib/app-context";

export default function CoursesPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <CoursesPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
