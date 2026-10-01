"use client";

import Career from "@/views/Career";
import { useAppContext } from "@/lib/app-context";

export default function CareerClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <Career darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
