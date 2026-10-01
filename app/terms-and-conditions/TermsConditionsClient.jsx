"use client";

import TermsConditions from "@/views/TermsConditions";
import { useAppContext } from "@/lib/app-context";

export default function TermsConditionsClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <TermsConditions darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
