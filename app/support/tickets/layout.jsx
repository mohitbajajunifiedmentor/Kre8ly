// app/support/tickets/layout.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supportAuthApi } from "@/lib/supportApi";
import { Spinner, BTN_GHOST } from "@/component/support/ui";
import Themes from "@/component/Themes/Themes";

export default function TicketsLayout({ children }) {
  const router = useRouter();
  const [authed, setAuthed] = useState(null); // null = checking

  useEffect(() => {
    let cancelled = false;
    supportAuthApi
      .check()
      .then((res) => {
        if (cancelled) return;
        if (res.ok) setAuthed(true);
        else router.replace("/support/login");
      })
      .catch(() => {
        if (!cancelled) router.replace("/support/login");
      });
    return () => {
      cancelled = true;
    };
  }, [router]);

  async function handleSignOut() {
    try {
      await supportAuthApi.logout();
    } finally {
      router.replace("/support/login");
    }
  }

  if (authed === null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas text-content-muted">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas text-content">
      <header className="sticky top-0 z-10 border-b border-line bg-canvas/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/support/tickets" className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
            <span className="text-[14px] font-semibold tracking-tight">Support console</span>
          </Link>

          <div className="flex items-center gap-1">
            {/* The console now follows the site theme, so it needs the same
                switcher — otherwise an agent on a dark OS gets a dark app and
                a console they cannot change. */}
            <Themes />
            <button onClick={handleSignOut} className={BTN_GHOST}>
              Sign out
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-6">{children}</main>
    </div>
  );
}