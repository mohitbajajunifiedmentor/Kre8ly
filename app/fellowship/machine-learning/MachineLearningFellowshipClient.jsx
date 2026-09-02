"use client";

import MachineLearningFellowship from "@/views/fellowship/FellowShipPage/MachineLearningFellowship";
import { useAppContext } from "@/lib/app-context";

export default function MachineLearningFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <MachineLearningFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
