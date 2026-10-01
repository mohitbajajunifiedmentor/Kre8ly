"use client";

/**
 * Direct port of `MainLayout` + the wrapper <div> from the old `App.jsx`.
 * Same navbar-selection rules, same background gradient class, same footfall
 * tracking call, same scroll-to-top-on-navigation behaviour.
 */

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/component/layout/Navbar";
import NavBarAdmin from "@/component/Admin/NavBar";
import Themes from "@/component/Themes/Themes";
import useFootfallTracker from "@/Hooks/useFootfallTracker";
import { useAppContext } from "@/lib/app-context";

// Routes that render no navbar at all (dashboards / admin panels).
const NO_NAVBAR_ROUTES = [
  "/dashboard",
  "/superadmin/dashboard",
  "/admin/dashboard",
  "/dashboard/students-applied",
  "/dashboard/contact-requests",
  "/hire-dashboard",
  "/members",
  "/addmembers",
  "/blog-admin",
  "/blog-admin/edit-category",
  "/blog-admin/add-category",
  "/blog-admin/upload-blog",
];

// Routes that render the admin navbar instead of the public one.
const ADMIN_ROUTES = ["/login"];

function ScrollToTop({ pathname }) {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function AppShell({ children }) {
  const pathname = usePathname() || "/";
  const { darkMode, setDarkMode } = useAppContext();

  const referrer = typeof document !== "undefined" ? document.referrer : "";
  useFootfallTracker({ page: pathname, referrer });

  const isNoNavbarRoute = NO_NAVBAR_ROUTES.some((r) => pathname.startsWith(r));
  const isAdminRoute = ADMIN_ROUTES.some((r) => pathname.startsWith(r));

  return (
    <div className="min-h-screen bg-canvas text-content">
      <ScrollToTop pathname={pathname} />
      <Themes darkMode={darkMode} setDarkMode={setDarkMode} />
      {isNoNavbarRoute ? null : isAdminRoute ? (
        <NavBarAdmin darkMode={darkMode} />
      ) : (
        <Navbar />
      )}
      <main id="main">{children}</main>
    </div>
  );
}
