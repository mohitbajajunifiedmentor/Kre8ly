"use client";

import SalesPricing from "@/views/Sales/SalesPricing";
import { Suspense } from "react";
import { useAppContext } from "@/lib/app-context";

function SalesPricingInner() {
  const { darkMode, setDarkMode, geoLocation } = useAppContext();
  return (
    <SalesPricing darkMode={darkMode} setDarkMode={setDarkMode} location={geoLocation} />
  );
}

// SalesPricing calls useSearchParams(), which needs a Suspense boundary above it.
export default function SalesPricingClient() {
  return (
    <Suspense fallback={null}>
      <SalesPricingInner />
    </Suspense>
  );
}
