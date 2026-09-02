"use client";

import LeaderBoard from "@/views/LeaderBoard";
import { useAppContext } from "@/lib/app-context";

export default function LeaderBoardClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <LeaderBoard darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
