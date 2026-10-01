"use client";

import UIUXFellowship from "@/views/fellowship/FellowShipPage/UIUXFellowship";
import { useAppContext } from "@/lib/app-context";

export default function UIUXFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <UIUXFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
