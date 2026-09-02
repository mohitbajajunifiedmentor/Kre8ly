"use client";

import EditCategory from "@/views/BlogAdmin/EditCategory";
import { RoleGuard } from "@/lib/guards";

export default function EditCategoryClient() {
  return (
    <RoleGuard allowedRoles={["superadmin","admin","marketer"]}>
      <EditCategory  />
    </RoleGuard>
  );
}
