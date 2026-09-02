"use client";

import DigitalMarketingEnroll from "@/views/DigitalMarketingEnroll";
import { useAppContext } from "@/lib/app-context";

export default function DigitalMarketingEnrollClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DigitalMarketingEnroll darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
