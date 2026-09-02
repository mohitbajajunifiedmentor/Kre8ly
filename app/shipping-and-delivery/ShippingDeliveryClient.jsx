"use client";

import ShippingDelivery from "@/views/ShippingDelivery";
import { useAppContext } from "@/lib/app-context";

export default function ShippingDeliveryClient() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <ShippingDelivery darkMode={darkMode} setDarkMode={setDarkMode} />
  );
}
