"use client";

import ContactUs from "@/views/ContactUs";
import { useAppContext } from "@/lib/app-context";

export default function ContactUsClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <ContactUs darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
