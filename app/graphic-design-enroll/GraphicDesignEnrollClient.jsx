"use client";

import GraphicDesignEnroll from "@/views/GraphicDesignEnroll";
import { useAppContext } from "@/lib/app-context";

export default function GraphicDesignEnrollClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <GraphicDesignEnroll darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
