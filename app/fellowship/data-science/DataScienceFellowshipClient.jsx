"use client";

import DataScienceFellowship from "@/views/fellowship/FellowShipPage/DataScienceFellowship";
import { useAppContext } from "@/lib/app-context";

export default function DataScienceFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <DataScienceFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
