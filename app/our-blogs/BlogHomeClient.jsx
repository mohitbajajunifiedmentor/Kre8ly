"use client";

import BlogHome from "@/views/BlogHome";
import { useAppContext } from "@/lib/app-context";

export default function BlogHomeClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <BlogHome darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
