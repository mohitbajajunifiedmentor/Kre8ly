"use client";

import UploadBlog from "@/views/BlogAdmin/UploadBlog";
import { RoleGuard } from "@/lib/guards";

export default function UploadBlogClient() {
  return (
    <RoleGuard allowedRoles={["superadmin","admin","marketer"]}>
      <UploadBlog  />
    </RoleGuard>
  );
}
