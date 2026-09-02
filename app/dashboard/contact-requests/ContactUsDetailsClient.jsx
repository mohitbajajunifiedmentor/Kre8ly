"use client";

import ContactUsDetails from "@/views/Admin/ContactUsDetails";
import { RoleGuard } from "@/lib/guards";

export default function ContactUsDetailsClient() {
  return (
    <RoleGuard allowedRoles={["superadmin","admin","sales"]}>
      <ContactUsDetails  />
    </RoleGuard>
  );
}
