"use client";

import MachineLearningEnroll from "@/views/MachineLearningEnroll";
import { useAppContext } from "@/lib/app-context";

export default function MachineLearningEnrollClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <MachineLearningEnroll darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}
