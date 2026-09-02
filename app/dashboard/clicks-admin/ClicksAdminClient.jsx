"use client";

import ClicksAdmin from "@/views/Admin/ClicksAdmin";
import { RoleGuard } from "@/lib/guards";

export default function ClicksAdminClient() {
  return (
    <RoleGuard allowedRoles={["superadmin","admin"]}>
      <ClicksAdmin  />
    </RoleGuard>
  );
}
