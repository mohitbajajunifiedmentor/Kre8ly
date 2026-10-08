/**
 * Single place for the URLs that were previously hard-coded inside
 * `src/Utils/Axios/Axios.js`, `src/Utils/Axios/CertificatesAxios.js` and
 * `src/Redux-setup/api.js`.
 *
 * The defaults are exactly the values the production Vite build shipped with,
 * so nothing changes if the env vars are absent. Setting the env vars lets you
 * point at a staging/local backend without editing code.
 *
 * All three are PUBLIC values (they are already visible in the browser bundle
 * today), hence NEXT_PUBLIC_. No secret is exposed here.
 */

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://official-website-mern-backend-1023229424452.asia-south2.run.app/api";

export const CERTIFICATE_API_BASE_URL =
  process.env.NEXT_PUBLIC_CERTIFICATE_API_URL ||
  "https://certificate-backend-peach.vercel.app/api/";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kre8ly.com";
