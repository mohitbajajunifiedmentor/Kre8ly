"use client";

import AffiliateTest from "@/views/AffiliateTest";
import { useAppContext } from "@/lib/app-context";

export default function AffiliateTestClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <AffiliateTest darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
