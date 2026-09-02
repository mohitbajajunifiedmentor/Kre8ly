"use client";

import SuperAdmin from "@/views/Admin/SuperAdmin";
import { RoleGuard } from "@/lib/guards";

export default function SuperAdminClient() {
  return (
    <RoleGuard allowedRoles={["superadmin"]}>
      <SuperAdmin  />
    </RoleGuard>
  );
}
