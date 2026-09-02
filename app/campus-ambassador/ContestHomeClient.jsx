"use client";

import ContestHome from "@/views/ContestHome";
import { useAppContext } from "@/lib/app-context";

export default function ContestHomeClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <ContestHome darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
