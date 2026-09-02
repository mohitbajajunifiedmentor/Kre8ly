"use client";

import Privacy from "@/views/Privacy";
import { useAppContext } from "@/lib/app-context";

export default function PrivacyClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <Privacy darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
