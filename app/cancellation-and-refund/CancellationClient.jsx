"use client";

import Cancellation from "@/views/Cancellation";
import { useAppContext } from "@/lib/app-context";

export default function CancellationClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <Cancellation darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
