"use client";

import Certificates from "@/views/Certificates";
import { useAppContext } from "@/lib/app-context";

export default function CertificatesClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <Certificates darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
