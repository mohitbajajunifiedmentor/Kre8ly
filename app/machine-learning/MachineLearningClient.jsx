"use client";

import MachineLearning from "@/views/MachineLearning";
import { useAppContext } from "@/lib/app-context";

export default function MachineLearningClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <MachineLearning darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
