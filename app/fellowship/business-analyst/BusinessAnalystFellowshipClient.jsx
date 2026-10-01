"use client";

import BusinessAnalystFellowship from "@/views/fellowship/FellowShipPage/BusinessAnalystFellowship";
import { useAppContext } from "@/lib/app-context";

export default function BusinessAnalystFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <BusinessAnalystFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
