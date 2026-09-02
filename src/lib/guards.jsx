"use client";

/**
 * Port of the three guard components that lived inside `App.jsx`:
 *   ProtectedRoute    — requires *some* session (role / userId / token)
 *   RoleBasedRoute    — requires the role to be in `allowedRoles`
 *   AffilateProtected — falls back to the public /refer-and-earn page
 *
 * Behaviour is unchanged: the same Redux selectors, the same redirect targets.
 * The only difference is *where* the check runs — previously it was a
 * `<Route element={...}>` wrapper, now it wraps the page inside its own route.
 *
 * The guard renders nothing until the client has mounted, so the server-rendered
 * HTML for a protected route is empty rather than a flash of protected content.
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import ReferralPage from "@/views/ReferralPage";
import { useAppContext } from "@/lib/app-context";

export function RoleGuard({ allowedRoles, children }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const role = useSelector((state) => state.role?.role);
  const userId = useSelector((state) => state.role?.userId);
  const cookies = useSelector((state) => state?.role?.cookies);

  // Original ProtectedRoute: redirect only when *all three* are falsy.
  const hasSession = Boolean(role || userId || cookies);
  const roleAllowed = !allowedRoles || allowedRoles.includes(role);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (!hasSession || !roleAllowed) router.replace("/login");
  }, [mounted, hasSession, roleAllowed, router]);

  if (!mounted || !hasSession || !roleAllowed) return null;
  return children;
}

export function AffiliateGuard({ children }) {
  const [state, setState] = useState("pending"); // pending | allowed | denied
  const { darkMode, setDarkMode } = useAppContext();

  useEffect(() => {
    setState(localStorage.getItem("affiliateToken") ? "allowed" : "denied");
  }, []);

  if (state === "pending") return null;
  if (state === "denied") {
    // Original behaviour: render the public referral page in place, no redirect.
    return <ReferralPage darkMode={darkMode} setDarkMode={setDarkMode} />;
  }
  return children;
}
