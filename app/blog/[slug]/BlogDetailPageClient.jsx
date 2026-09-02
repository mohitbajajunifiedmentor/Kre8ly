"use client";

import BlogDetailPage from "@/views/BlogDetailPage";
import { useAppContext } from "@/lib/app-context";

export default function BlogDetailPageClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <BlogDetailPage darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
