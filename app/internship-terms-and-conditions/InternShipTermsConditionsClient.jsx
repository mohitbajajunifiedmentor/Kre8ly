"use client";

import InternShipTermsConditions from "@/views/InternShipTermsConditions";
import { useAppContext } from "@/lib/app-context";

export default function InternShipTermsConditionsClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <InternShipTermsConditions darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
