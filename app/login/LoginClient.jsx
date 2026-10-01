"use client";

import Login from "@/views/Admin/Login";
import { useAppContext } from "@/lib/app-context";

export default function LoginClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <Login darkMode={darkMode} />
  );
}
