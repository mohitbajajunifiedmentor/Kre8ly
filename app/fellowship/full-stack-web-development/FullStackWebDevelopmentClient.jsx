"use client";

import FullStackWebDevelopment from "@/views/fellowship/FellowShipPage/FullStackWebDevelopment";
import { useAppContext } from "@/lib/app-context";

export default function FullStackWebDevelopmentClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <FullStackWebDevelopment darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
