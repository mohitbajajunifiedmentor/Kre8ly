"use client";

import DataAnalystFellowship from "@/views/fellowship/FellowShipPage/DataAnalystFellowship";
import { useAppContext } from "@/lib/app-context";

export default function DataAnalystFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DataAnalystFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
