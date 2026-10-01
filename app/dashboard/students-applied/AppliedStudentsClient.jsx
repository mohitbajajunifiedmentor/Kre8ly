"use client";

import AppliedStudents from "@/views/Admin/AppliedStudents";
import { RoleGuard } from "@/lib/guards";

export default function AppliedStudentsClient() {
  return (
    <RoleGuard allowedRoles={["superadmin","admin","sales"]}>
      <AppliedStudents  />
    </RoleGuard>
  );
}
