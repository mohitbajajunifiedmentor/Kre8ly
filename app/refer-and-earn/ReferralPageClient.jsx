"use client";

import ReferralPage from "@/views/ReferralPage";
import { useAppContext } from "@/lib/app-context";

export default function ReferralPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <ReferralPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
