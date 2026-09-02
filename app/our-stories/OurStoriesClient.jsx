"use client";

import OurStories from "@/views/OurStories";
import { useAppContext } from "@/lib/app-context";

export default function OurStoriesClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <OurStories darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
