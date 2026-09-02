"use client";

/**
 * Port of the provider tree from the old `src/main.jsx`.
 * `HelmetProvider` is gone — SEO is handled by the Next.js Metadata API.
 */

import "@/lib/browser-shim";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import AOS from "aos";

import { store } from "@/Redux-setup/store";
import { AppProvider } from "@/lib/app-context";
import AppShell from "@/lib/AppShell";

import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "@/lib/aos-safe.css"; // must come after aos.css
import "swiper/swiper-bundle.css";

const GOOGLE_CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
  "1023229424452-90r3ms222kievp80ma3mijr85vhuglem.apps.googleusercontent.com";

export default function Providers({ children }) {
  /**
   * AOS bootstrap — same options as the old App.jsx, but deliberately deferred
   * until after React has finished hydrating.
   *
   * Why the delay matters:
   *
   * AOS.init() walks the whole document and calls `el.classList.add("aos-init")`
   * (then "aos-animate") on every [data-aos] node — 1,276 of them here. The
   * browser re-serialises the class attribute on every classList mutation, which
   * also trims leading whitespace and collapses runs of spaces.
   *
   * This Providers component sits at the root, so its effect fires as soon as
   * *it* commits — while deeper parts of the tree may still be hydrating. AOS
   * then rewrites className on nodes React has not claimed yet, and when React
   * reaches them the DOM no longer matches what it rendered:
   *
   *   client : className={" rounded-lg shadow-lg mb-4 ..."}   <- JSX, leading space
   *   DOM    : className="rounded-lg shadow-lg mb-4 aos-init" <- AOS normalised it
   *
   * That is the hydration diff, and it is why the mismatches cluster on exactly
   * the elements carrying data-aos, showing "aos-init"/"aos-animate" plus
   * whitespace-only differences.
   *
   * Waiting for `load` and then two animation frames puts AOS.init() after the
   * hydration commit has painted, so it only ever mutates nodes React already
   * owns. Nothing about the animations themselves changes.
   */
  useEffect(() => {
    let cancelled = false;
    let raf1 = 0;
    let raf2 = 0;

    const start = () => {
      if (cancelled) return;

      AOS.init({ once: true, duration: 300, offset: 200 });

      // Tell the <head> watchdog that AOS is alive, so it stops waiting and
      // leaves the `aos-ready` class in place. If this never runs (a chunk
      // failed to parse, hydration threw, an extension mangled the bundle) the
      // watchdog strips `aos-ready` and src/lib/aos-safe.css reveals every
      // section instead of leaving the page blank below the hero.
      window.__aosReady = true;
      if (window.__aosWatchdog) {
        clearTimeout(window.__aosWatchdog);
        window.__aosWatchdog = null;
      }
      // Re-added in case the watchdog already fired on a slow load; AOS is up
      // now, so hand control back to it.
      document.documentElement.classList.add("aos-ready");
    };

    const schedule = () => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(start);
      });
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.removeEventListener("load", schedule);
    };
  }, []);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </GoogleOAuthProvider>
  );
}
