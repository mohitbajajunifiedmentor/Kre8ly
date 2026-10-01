"use client";

import Home from "@/views/Home";
import { useAppContext } from "@/lib/app-context";

export default function HomeClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <Home darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
