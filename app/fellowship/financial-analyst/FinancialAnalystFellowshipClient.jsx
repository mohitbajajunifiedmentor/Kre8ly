"use client";

import FinancialAnalystFellowship from "@/views/fellowship/FellowShipPage/FinancialAnalystFellowship";
import { useAppContext } from "@/lib/app-context";

export default function FinancialAnalystFellowshipClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <FinancialAnalystFellowship darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
