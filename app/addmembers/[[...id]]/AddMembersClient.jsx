"use client";

import AddMembers from "@/views/Admin/AddMembers";
import { RoleGuard } from "@/lib/guards";

export default function AddMembersClient() {
  return (
    <RoleGuard allowedRoles={["superadmin"]}>
      <AddMembers  />
    </RoleGuard>
  );
}
