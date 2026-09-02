"use client";

import FrontendDeveloperFellowship from "@/views/fellowship/FellowShipPage/FrontendDeveloperFellowship";
import { useAppContext } from "@/lib/app-context";

export default function FrontendDeveloperFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <FrontendDeveloperFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
