"use client";

/**
 * Nested-route equivalent of the old:
 *   <Route element={<AffilateProtected />}>
 *     <Route path="/affiliate-dashboard" element={<AffiliateDashboardLayout />}>
 *
 * `OutletProvider` feeds the App Router's `children` into the `<Outlet />` that
 * `AffiliateDashboardLayout` already renders, so that component is unmodified.
 */

import AffiliateDashboardLayout from "@/layouts/AffiliateDashboardLayout";
import { OutletProvider } from "@/lib/router-compat";
import { AffiliateGuard } from "@/lib/guards";

export default function AffiliateLayoutClient({ children }) {
  return (
    <AffiliateGuard>
      <OutletProvider value={children}>
        <AffiliateDashboardLayout />
      </OutletProvider>
    </AffiliateGuard>
  );
}
