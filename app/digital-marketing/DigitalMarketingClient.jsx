"use client";

import DigitalMarketing from "@/views/DigitalMarketing";
import { useAppContext } from "@/lib/app-context";

export default function DigitalMarketingClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DigitalMarketing darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
