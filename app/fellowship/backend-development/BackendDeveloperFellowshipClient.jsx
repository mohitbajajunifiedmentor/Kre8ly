"use client";

import BackendDeveloperFellowship from "@/views/fellowship/FellowShipPage/BackendDeveloperFellowship";
import { useAppContext } from "@/lib/app-context";

export default function BackendDeveloperFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <BackendDeveloperFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
