"use client";

import MouPage from "@/views/MouPage";
import { useAppContext } from "@/lib/app-context";

export default function MouPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <MouPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
