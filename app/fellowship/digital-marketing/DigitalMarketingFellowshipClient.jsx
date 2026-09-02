"use client";

import DigitalMarketingFellowship from "@/views/fellowship/FellowShipPage/DigitalMarketingFellowship";
import { useAppContext } from "@/lib/app-context";

export default function DigitalMarketingFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DigitalMarketingFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
