# Unified Mentor — Next.js (App Router)

Migrated from Vite 5 + React 18 + react-router-dom 6 to **Next.js 16.3.1** (App Router,
Turbopack) + React 19.

The application was **preserved, not rewritten**. All 271 source files kept their logic,
JSX, Tailwind classes and file names. Only import specifiers were codemodded.

---

## Quick start

```bash
npm install --legacy-peer-deps
cp .env.example .env.local     # optional — every value has a working default
npm run dev                    # http://localhost:3000

npm run build && npm start     # production
npm run lint
```

> `--legacy-peer-deps` is needed because a few older dependencies
> (`react-tilt`, `react-player`, `@ckeditor/*`) still declare a React 18 peer range.
> They work correctly on React 19; only the peer metadata is stale.

---

## Restoring the real assets

Assets live in **`public/assets/`** (not `src/assets/`). The folder structure and every
filename inside it are identical to the original Vite `src/assets` folder.

```bash
rm -rf public/assets
cp -r /path/to/original/src/assets public/assets
rm -rf .next          # IMPORTANT: Turbopack caches the placeholders
npm run build
```

That is the only step — no code changes. See **`MISSING_ASSETS.md`** for the full
973-file inventory.

### Why assets moved to `public/`

Vite resolves `import img from "../assets/x.png"` to a **string URL**. Next.js and
Turbopack resolve the same statement to a **`StaticImageData` object**
(`{ src, width, height, blurDataURL }`).

That difference is silent: the build succeeds, but `<img src={img} />` renders
`src="[object Object]"` and `` url(${img}) `` in an inline style produces a broken URL.
On the homepage alone this affected 235 images.

The fix moves the files to `public/assets/` and rewrites all **1,622** asset imports to
plain string constants:

```diff
- import Logo from "../assets/NavBar/Colored Logo.png";
+ const Logo = "/assets/NavBar/Colored%20Logo.png";
```

This restores Vite's exact semantics. Strings work in `<img src>`, in template literals,
inside `src/Utils/*` data modules and when passed through props — so no call site needed
editing. Spaces in filenames are percent-encoded; the files on disk keep their original
names.

The trade-off is that these images bypass `next/image` build-time optimisation — the same
position the Vite build was in. Converting the hot ones (hero, above-the-fold) to
`next/image` with explicit `width`/`height` is the recommended follow-up.

---

## Project structure

```
app/                        # App Router — routing + SEO only
├── layout.jsx              # <html>, metadata, fonts, GA, Providers
├── page.jsx                # /
├── loading.jsx             # route-level spinner (server-rendered)
├── error.jsx               # route error boundary
├── global-error.jsx        # root error boundary
├── not-found.jsx           # replaces <Route path="*">
├── sitemap.js              # replaces src/generate-sitemap.js
├── robots.js               # replaces public/robots.txt
└── <route>/
    ├── page.jsx            # SERVER component: exports `metadata`
    └── <Name>Client.jsx    # CLIENT boundary: reads context, renders the view

public/
└── assets/                 # 973 placeholders — replace with the originals

src/
├── views/                  # was src/pages (see "Why the rename" below)
├── component/              # unchanged
├── Utils/                  # unchanged (data modules + axios instances)
├── Hooks/                  # unchanged
├── Redux-setup/            # unchanged (store, slices, RTK Query)
├── layouts/                # unchanged
├── index.css / App.css     # unchanged
└── lib/                    # NEW — the compatibility layer
```

### Why `src/pages` became `src/views`

Next.js treats `pages/` or `src/pages/` as the **Pages Router**. With `app/` at the
project root, keeping `src/pages` produced:

```
Error: `pages` and `app` directories should be under the same folder
```

The folder was renamed and 78 files had their import paths updated automatically.
Nothing else about those files changed.

---

## The compatibility layer (`src/lib/`)

Rather than rewriting 80 router files and 52 SEO blocks by hand, the migration
re-implements the APIs those files already called.

| Module | What it does |
| --- | --- |
| `router-compat.jsx` | `react-router-dom` surface on `next/link` + `next/navigation`: `Link`, `NavLink` (incl. the `className`/`children` render-prop API), `HashLink`, `useNavigate`, `useLocation`, `useParams`, `useSearchParams`, `Navigate`, `Outlet` |
| `helmet-compat.jsx` | `<Helmet>` renders `null` and applies tags to `document.head` after mount. Real SEO comes from the Metadata API. |
| `app-context.jsx` | `darkMode` / `setDarkMode` / `geoLocation` — the state that lived in `App.jsx` |
| `AppShell.jsx` | Port of `MainLayout`: navbar selection, gradient wrapper, footfall tracking, scroll-to-top |
| `Providers.jsx` | Port of `main.jsx`: Redux, Google OAuth, ToastContainer, AOS init |
| `guards.jsx` | `RoleGuard` + `AffiliateGuard` — same selectors and redirects as `App.jsx` |
| `config.js` | API base URLs, env-overridable, defaults identical to the Vite build |
| `blog-metadata.js` | Server-side `generateMetadata` for `/blog/[slug]` |
| `browser-shim.js` | No-op `localStorage`/`sessionStorage` on the server |

**Codemod applied:**

```
"react-router-dom"        →  "@/lib/router-compat"     (79 files)
"react-router-hash-link"  →  "@/lib/router-compat"     (1 file)
"react-helmet-async"      →  "@/lib/helmet-compat"     (52 files)
import.meta.env.VITE_*    →  process.env.NEXT_PUBLIC_* (1 file)
CRLF                      →  LF                        (268 files)
```

Two notes on `router-compat`:

- **`useLocation` deliberately avoids `useSearchParams()`.** It is called from the
  Navbar; routing it through `useSearchParams` would opt every page in the site out of
  static rendering. Pathname comes from `usePathname()`; the query string is read from
  the browser after mount, which is the only place the old SPA could read it anyway.
- **`Outlet` resolves through `OutletProvider`**, so `AffiliateDashboardLayout` — which
  renders `<Outlet />` — works completely unmodified inside a Next `layout.jsx`.

---

## Server vs Client Components

`"use client"` appears **only** on the 76 route wrappers and 6 `src/lib` files —
never on the ~110 files in `src/component/` or the 91 in `src/views/`.

Each route is a server component that exports `metadata`, then hands off to a thin
client wrapper:

```jsx
// app/about/page.jsx  — SERVER
export const metadata = { title: "…", alternates: { canonical: "…" }, /* … */ };
export default function Page() { return <AboutPageClient />; }

// app/about/AboutPageClient.jsx — CLIENT
"use client";
export default function AboutPageClient() {
  const { darkMode, setDarkMode } = useAppContext();
  return <AboutPage darkMode={darkMode} setDarkMode={setDarkMode} />;
}
```

Page component signatures are unchanged: they still receive `darkMode`, `setDarkMode`
and `location` exactly as they did when `App.jsx` passed them down.

---

## SEO

Previously `react-helmet-async` ran client-side only, so crawlers that do not execute
JS saw the generic `index.html` title on **every** page. Now:

- **49 titles, 48 descriptions, 42 canonicals** extracted from the existing Helmet
  blocks into server-rendered `metadata` exports
- `/blog/[slug]` uses `generateMetadata` — real per-post title, description, canonical
  and OG image, revalidated every 5 minutes
- `app/sitemap.js` — 49 public URLs plus live blog slugs; **no** admin, dashboard,
  affiliate or auth routes
- `app/robots.js` — disallows the 14 private prefixes that became real server URLs

---

## Environment variables

Every value has a default matching the Vite build, so the app runs with no `.env` file.

| Variable | Scope | Previously |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | public | hard-coded in `Axios.js`, `api.js` |
| `NEXT_PUBLIC_CERTIFICATE_API_URL` | public | hard-coded in `CertificatesAxios.js` |
| `NEXT_PUBLIC_SITE_URL` | public | — |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | public | `VITE_RAZORPAY_KEY_ID` |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | public | hard-coded in `main.jsx` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | public | hard-coded in `index.html` |

This project talks to a separate external backend and has **no server-only secrets**.
If you add one (Razorpay key *secret*, DB URL, JWT signing key), declare it **without**
the `NEXT_PUBLIC_` prefix so it never reaches the browser.

---

## SSR fixes applied

The Vite app was 100% client-rendered, so some code read browser APIs during render.
Those same lines now also run on the server. Eleven call sites were adjusted:

| File(s) | Change |
| --- | --- |
| `EnrollPlan`, `FloatingEnrollBar`, `FellowshipHomeSection`, `PerksOfInternship`, ML `Projects` / `BuildSkill` / `Home` / `Certificate` | `window.location.pathname` → `usePathname()` (same value, SSR-safe, no hydration mismatch) |
| `Footer`, `Admin/NavBar` | render-phase `localStorage.getItem("role")` → `useState` + `useEffect` |
| `Admin/NavBar` | `useState(window.innerWidth < 768)` → `useState(false)`; the existing resize effect corrects it |
| `SmoothFollower` | module-level `window.innerWidth` guarded with `typeof window` |

`src/lib/browser-shim.js` is a safety net for the remaining ~60 storage reads that
already sit inside effects and handlers.

---

## Known follow-ups

1. **Restore the real assets** into `public/assets/`, then `rm -rf .next` and rebuild.
   Nothing can be visually verified until then.
2. **Self-host Poppins with `next/font/google`.** It is currently loaded from the
   Google Fonts CDN in `app/layout.jsx` with `preconnect`. The self-hosted version
   removes a third-party round trip and the font-swap layout shift; it was reverted
   only because the migration environment had no network access to `fonts.googleapis.com`.
3. **`<img>` → `next/image`** — 290 lint warnings. A real LCP win, but a separate task.
4. **Smoke-test `/blog-admin/upload-blog`** — CKEditor and Jodit compile fine but the
   route is role-guarded and could not be exercised headlessly.
5. **Check the browser console for hydration warnings** on a few pages once assets land.
6. **Pre-existing bug, not migration-related:** `src/component/Enroll/EnrollPlan.jsx`
   puts Framer Motion props (`initial`, `animate`, `variants`) on plain `<div>` and
   `<h2>` elements instead of `motion.div` / `motion.h2`. They leak into the DOM as
   `variants="[object Object]"` and the animations never run. Present in the Vite code
   too; six occurrences on `/web-development-enroll`.

---

## "Only the hero renders" — the AOS visibility trap (fixed)

### What it looked like

Same code, no source changes: one day the whole page rendered, the next day only
the hero and the fixed bottom bar were visible, with a tall blank gap between them.
The terminal showed `GET / 200` with no errors.

### Why it happened

Two independent things had to line up.

**1. Something broke the JavaScript.** The browser console showed a cluster of parse
errors in *vendor* chunks:

```
Uncaught SyntaxError: Unexpected end of input          (node_modules_next_di…js)
Uncaught SyntaxError: Invalid regular expression: missing /
Uncaught SyntaxError: missing ) after argument list
Uncaught SyntaxError: Missing initializer in const declaration  (node_modules_@reduxjs…js)
```

Several *different* syntax errors at *different mid-file offsets* across many chunks is
the signature of a source rewriter mangling the bundle — not a truncated download,
which only ever produces "Unexpected end of input" at the very end. The dev server
itself compiled fine, so the damage happened between the server and the browser.

The culprit announces itself in the terminal on startup:

```
Console Ninja extension is connected to Next.js
⚠ Console Ninja Turbopack support is a PRO feature, currently available to
  community users while in preview
```

Console Ninja instruments the JS the dev server serves. Its Turbopack support is still
preview-grade, and it was corrupting vendor chunks. This is also why the bug appeared
"without changing the code" — it depends on whether the extension is attached, which
version it is, and whether it had already cached an instrumented build.

**2. AOS turned a JS failure into a blank page.** `aos/dist/aos.css` contains:

```css
[data-aos^=fade][data-aos^=fade] { opacity: 0 }
[data-aos^=zoom][data-aos^=zoom] { opacity: 0 }
```

Elements only become visible once AOS's JS adds `.aos-animate`. This site has
**1,276 `data-aos` attributes across 72 components**. `AOS.init()` runs in a
`useEffect` in `src/lib/Providers.jsx` — so when hydration never happens, every one of
those elements stays at `opacity: 0` **forever**.

The hero survives because it is the one section with no `data-aos` on its wrapper.
Measured on the served HTML: the first `data-aos` appears at **byte 40,762 of 255,316**.
Everything before it renders; everything after it is invisible. The fixed bottom bar
(`Themes.jsx`, also no `data-aos`) stays visible too — which is exactly what the
screenshot showed.

**The markup was never missing.** It was all in the HTML, at `opacity: 0`.

### The fix

A broken animation must never permanently hide content.

- **`src/lib/aos-safe.css`** (new) neutralises the `opacity: 0` rules whenever
  `<html>` lacks the `aos-ready` class. Imported *after* `aos.css` in `Providers.jsx`,
  with `!important` so cascade order cannot defeat it.
- **`app/layout.jsx`** gained a tiny inline `<head>` script that runs before first
  paint. It adds `aos-ready` immediately — so when JS is healthy the animations are
  **byte-for-byte unchanged, with no flash** — and arms a 3-second watchdog.
- **`src/lib/Providers.jsx`** sets `window.__aosReady` and clears the watchdog once
  `AOS.init()` succeeds.

If AOS has not reported back within 3s, the watchdog strips `aos-ready`, logs
`[aos-guard] AOS did not initialise within 3s`, and every section becomes visible —
unanimated, but readable. Worst case is now "no animations", not "blank page".

- **`.vscode/settings.json`** (new) sets
  `"console-ninja.toolsToEnableSupportAutomaticallyFor": { "next.js": false }`,
  which keeps the extension installed and usable elsewhere while leaving this
  project's bundles alone.

### Verified

| Check | Result |
| --- | --- |
| Guard rule + AOS `opacity:0` rule both present in served CSS | yes (10 stylesheets, 226 KB) |
| Cascade with `html.aos-ready` (JS healthy) | hero `opacity:1`, sections `opacity:0` → AOS animates them in, unchanged |
| Cascade without `aos-ready` (JS broken) | hero `opacity:1`, **sections `opacity:1`** |
| Watchdog, `AOS.init()` succeeded | class stays `aos-ready` after 3.4s |
| Watchdog, Providers never ran | class cleared after 3.4s, warning logged |
| 8 consecutive reloads of `/` | 256,381 bytes every time, identical |
| Guard present on `/about`, `/placement`, `/fellowship`, `/machine-learning` | yes |
| `npm run build` + `npm start` | ✓ 72/72, 0 errors |
| `npm run dev`, cold `.next` | 0 hydration/DOM/key warnings |

### If it happens again

The guard reveals the content, so the page stays usable — but the underlying JS is
still broken and interactivity (menus, sliders, forms) will not work. Check the browser
console for chunk parse errors, and look for `[aos-guard]` in the console: it firing is
the signal that hydration did not complete.

## Invalid DOM properties (fixed)

Chunks of raw HTML/SVG had been pasted straight into JSX, so React was silently
dropping the attributes — the styling and SVG strokes they were meant to apply never
took effect. This showed up as `Invalid DOM property` warnings in `next dev`.

277 attributes were renamed to their React equivalents across 30 files:

| Attribute | React name | Count |
| --- | --- | --- |
| `class` | `className` | 177 |
| `fill-rule` | `fillRule` | 24 |
| `clip-rule` | `clipRule` | 24 |
| `stroke-width` | `strokeWidth` | 18 |
| `stroke-linecap` | `strokeLinecap` | 14 |
| `stroke-linejoin` | `strokeLinejoin` | 14 |
| `stroke-dasharray` | `strokeDasharray` | 2 |
| `allowfullscreen` | `allowFullScreen` | 1 |
| `frameborder` | `frameBorder` | 1 |

Only JSX attribute positions were touched. Raw HTML inside template literals — the
YouTube embed string in `src/views/BlogAdmin/UploadBlog.jsx` and its DOMPurify
allow-list — deliberately keeps the lowercase HTML spelling.

### Missing `key` props (fixed)

Seven lists were rendering without keys. Two were subtle:

- `FellowshipHomeSection.jsx` and `MachineLearning/Home.jsx` put `key` on `<StatItem>`
  *inside* a pointless `<>` fragment, so the actual list child was the un-keyed fragment.
  The fragment was removed and the key moved onto the returned element.
- `MachineLearning/Technologies.jsx` used `key={tech.id}`, but those data objects have
  no `id` field — every key was `undefined`. Switched to `tech.name`.

The rest (`Home.jsx`, `PlacementPage.jsx`, `FloatingEnrollBar.jsx`, `IndustryExperts.jsx`)
simply had no `key` at all.

Verified: `next dev` across 8 pages now logs zero `Invalid DOM property`, zero key
warnings and zero hydration mismatches.

## Dependency changes

**Removed** (each verified unused by grepping actual `import` statements, not filenames):
`vite`, `@vitejs/plugin-react`, `react-router-dom`, `react-router-hash-link`,
`react-helmet-async`, `slate`, `slate-history`, `slate-react`, `three`,
`@tsparticles/react`, `@tsparticles/slim`, `@tinymce/tinymce-react`, `motion`,
`eslint-plugin-react-refresh`.

**Updated:** `framer-motion` 10 → 12, `react-toastify` 10 → 11 (React 19 compatibility).

**Pinned:** `react-icons` to exactly `5.2.1`. Version 5.7 renamed `SiCss3` → `SiCss`,
which broke `src/component/Cards.jsx` at build time.
