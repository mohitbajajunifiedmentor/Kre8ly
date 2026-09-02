"use client";

import UXUIDesignerEnroll from "@/views/UXUIDesignerEnroll";
import { useAppContext } from "@/lib/app-context";

export default function UXUIDesignerEnrollClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <UXUIDesignerEnroll darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
