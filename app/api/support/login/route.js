// app/api/support/login/route.js
import { NextResponse } from "next/server";
import {
  safeEqual,
  supportAuth,
  createSupportSession,
  SESSION_COOKIE,
} from "@/lib/ticketing";
import { isRateLimited } from "@/lib/rateLimit";

/**
 * The agent console used to hold the raw SUPPORT_ADMIN_KEY in sessionStorage
 * and attach it to every request, which meant the master key for the entire
 * support system was readable by any script on the page.
 *
 * The key is now posted once, here, and exchanged for a signed session cookie
 * that JavaScript cannot read. Nothing sensitive stays in the browser.
 *
 *   POST   { key }  -> sets the cookie
 *   GET             -> is my session still valid?
 *   DELETE          -> sign out
 */

export async function POST(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  // Without this, the key is brute-forceable at whatever rate the network
  // allows. The generic chat limiter is reused with a separate bucket.
  if (isRateLimited(`support-login:${ip}`)) {
    return NextResponse.json(
      { error: "Too many attempts. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  const expected = process.env.SUPPORT_ADMIN_KEY;
  if (!expected) {
    console.error("[support] SUPPORT_ADMIN_KEY is not set — nobody can sign in");
    return NextResponse.json(
      { error: "Support access is not configured on the server." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => null);
  const key = String(body?.key || "");

  if (!key || !safeEqual(key, expected)) {
    console.warn(`[support] sign-in rejected from ${ip}`);
    return NextResponse.json({ error: "That support key was not accepted." }, { status: 401 });
  }

  const session = createSupportSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, session.value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: session.maxAge,
  });
  return res;
}

export async function GET(req) {
  const auth = supportAuth(req);
  return NextResponse.json({ ok: auth.ok, reason: auth.reason }, { status: auth.ok ? 200 : 401 });
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return res;
}