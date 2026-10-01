"use client";

import BlogAdmin from "@/views/BlogAdmin/BlogAdmin";
import { RoleGuard } from "@/lib/guards";

export default function BlogAdminClient() {
  return (
    <RoleGuard allowedRoles={["superadmin","admin","marketer"]}>
      <BlogAdmin  />
    </RoleGuard>
  );
}
