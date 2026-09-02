"use client";

import GraphicDesignPage from "@/views/GraphicDesignPage";
import { useAppContext } from "@/lib/app-context";

export default function GraphicDesignPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <GraphicDesignPage darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
