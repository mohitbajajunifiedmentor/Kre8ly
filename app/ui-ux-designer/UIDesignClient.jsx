"use client";

import UIDesign from "@/views/UIDesign";
import { useAppContext } from "@/lib/app-context";

export default function UIDesignClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <UIDesign darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
