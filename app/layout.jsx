import Script from "next/script";

import "@/index.css";
import "@/App.css";

import Providers from "@/lib/Providers";
import { SITE_URL } from "@/lib/config";


/**
 * The site typeface.
 *
 * This is the download half of the font setting; the CSS half is `--font-sans`
 * in src/styles/tokens.css. Change BOTH or the browser will fetch one family
 * and the stylesheet will ask for another.
 *
 * Weights are trimmed to the seven the design actually uses. The previous
 * Poppins link requested 18 variants (nine weights x roman and italic) — most
 * were never referenced, and each one is a separate file the browser fetches.
 *
 * To swap the typeface:
 *   1. change FONT_FAMILY and FONT_WEIGHTS here
 *   2. change --font-sans in src/styles/tokens.css to the same family name
 *
 * Alternatives that suit this brand: "Inter", "Manrope", "DM Sans",
 * "Outfit", "Figtree".
 */
const FONT_FAMILY = "Manrope";
const FONT_WEIGHTS = "300;400;500;600;700;800";

const FONT_URL =
  `https://fonts.googleapis.com/css2?family=${FONT_FAMILY.replace(/ /g, "+")}` +
  `:wght@${FONT_WEIGHTS}&display=swap`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kre8ly: Online Certification Courses & Live Training",
    template: "%s",
  },
  description:
    "Kre8ly offers online certification courses, live training, fellowships and internships in Data Science, Machine Learning, Web Development, UI/UX and Digital Marketing.",
  applicationName: "Kre8ly",
  authors: [{ name: "Kre8ly" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  openGraph: {
    siteName: "Kre8ly",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  verification: {
    google: "9HflCi4Ty0tAnItWRUS5oU6zRmhARZLTjKdulM3gqgg",
    other: {
      "google-site-verification": [
        "9HflCi4Ty0tAnItWRUS5oU6zRmhARZLTjKdulM3gqgg",
        "fb3sIHf-o8TzucvU2lTz0m3HdJK8i7MR53wEfi2pq0w",
      ],
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-Z7KFLELMWS";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme, applied before first paint so there is no light-to-dark
            flash. Mirrors the resolution order in src/lib/app-context.jsx:
            explicit stored choice wins, otherwise follow the OS. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var s=localStorage.getItem('kre8ly-theme');" +
              "var d=(s==='dark')||((!s||s==='system')&&window.matchMedia('(prefers-color-scheme: dark)').matches);" +
              "var r=document.documentElement;" +
              "if(d){r.classList.add('dark');}" +
              "r.style.colorScheme=d?'dark':'light';}catch(e){}})();",
          }}
        />
        {/* Runs before first paint. Marks AOS as "expected to work" so the
            normal animations are unchanged, then arms a watchdog: if AOS has
            not initialised within 8s, the class is removed and
            src/lib/aos-safe.css makes every `data-aos` section visible.
            Without this, any JS failure leaves the whole page blank below the
            hero, because aos.css sets `opacity: 0` on 1,276 elements. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('aos-ready');" +
              "window.__aosWatchdog=setTimeout(function(){" +
              "if(!window.__aosReady){d.classList.remove('aos-ready');" +
              "console.warn('[aos-guard] AOS did not initialise within 8s - revealing content without animation.');}" +
              "},8000);})();",
          }}
        />
        {/* Loaded here with preconnect rather than an `@import` in index.css,
            which was render-blocking: first paint used to wait on the font. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONT_URL} />
      </head>
      <body>
        <Providers>{children}</Providers>

        {/* Google Analytics — same measurement ID as index.html, but loaded
            with strategy="afterInteractive" so it no longer competes with
            hydration for main-thread time. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}