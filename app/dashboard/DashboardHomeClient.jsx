"use client";

import DashboardHome from "@/views/Admin/DashboardHome";
import { RoleGuard } from "@/lib/guards";

export default function DashboardHomeClient() {
  return (
    <RoleGuard allowedRoles={["superadmin","admin"]}>
      <DashboardHome  />
    </RoleGuard>
  );
}
