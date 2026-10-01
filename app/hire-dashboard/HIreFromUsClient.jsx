"use client";

import HIreFromUs from "@/views/Admin/HIreFromUs";
import { RoleGuard } from "@/lib/guards";

export default function HIreFromUsClient() {
  return (
    <RoleGuard allowedRoles={["superadmin","admin"]}>
      <HIreFromUs  />
    </RoleGuard>
  );
}
