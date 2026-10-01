/**
 * Kre8ly navigation model.
 *
 * Extracted verbatim from the 1,540-line `src/component/Navbar.jsx`, where the
 * same arrays were declared inside the component body (so they were rebuilt on
 * every render) and duplicated between the desktop and mobile menus.
 *
 * Every route, label and external URL below is unchanged. Only the location
 * changed, so the desktop nav, the mobile drawer and the footer can now render
 * from one source instead of drifting apart.
 */

export const COURSE_ITEMS = [
  { link: "/web-development", text: "Web Development", id: "courses" },
  { link: "/data-science", text: "Data Science", id: "courses" },
  { link: "/digital-marketing", text: "Digital Marketing", id: "courses" },
  { link: "/machine-learning", text: "Machine Learning", id: "courses" },
  { link: "/ui-ux-designer", text: "UI/UX Designer", id: "courses" },
  { link: "/graphic-design", text: "Graphic Design", id: "courses" },
];

export const FELLOWSHIP_ITEMS = [
  { link: "/fellowship/full-stack-web-development", text: "Full Stack Development", id: "fellowship" },
  { link: "/fellowship/frontend-development", text: "Frontend Development", id: "fellowship" },
  { link: "/fellowship/backend-development", text: "Backend Development", id: "fellowship" },
  { link: "/fellowship/ui-ux-designer", text: "UI-UX Designer", id: "fellowship" },
  { link: "/fellowship/machine-learning", text: "Machine Learning", id: "fellowship" },
  { link: "/fellowship/data-analyst", text: "Data Analyst", id: "fellowship" },
  { link: "/fellowship/data-science", text: "Data Science", id: "fellowship" },
  { link: "/fellowship/digital-marketing", text: "Digital Marketing", id: "fellowship" },
  { link: "/fellowship/financial-analyst", text: "Financial Analyst", id: "fellowship" },
  { link: "/fellowship/business-analyst", text: "Business Analyst", id: "fellowship" },
];

export const CHAMPION_ITEMS = [
  { link: "/placement", text: "Placed Student", id: "placement" },
  { link: "/our-stories", text: "Our Stories", id: "stories" },
  { link: "/leaderboard", text: "LeaderBoard", id: "leaderBoard" },
];

export const COLLAB_ITEMS = [
  { link: "/mou", text: "Our Collabs", id: "mou" },
  { link: "/campus-ambassador", text: "Campus Ambassador", id: "Campus-Ambassador" },
];

/** External learner portals — these open in a new tab. */
export const PORTAL_ITEMS = [
  {
    link: "https://learning.unifiedmentor.com/s/authenticate",
    text: "Learning Portal",
    id: "learning-Portal",
    external: true,
  },
  {
    link: "https://projects.unifiedmentor.com/sign-in",
    text: "Project Portal",
    id: "Project-Portal",
    external: true,
  },
];

export const MORE_ITEMS = [
  { section: "Company", text: "Services", link: "/services" },
  { section: "Company", text: "Partner", link: "/partner" },
  { section: "Company", text: "Hire From Us", link: "/hire-from-us" },
  { section: "Company", text: "Press Releases", link: "/press-releases" },
  { section: "Company", text: "About Us", link: "/about" },
  { section: "Legal", text: "Privacy Policy", link: "/privacy-policy" },
  { section: "Legal", text: "Terms of Conditions", link: "/terms-and-conditions" },
  { section: "Legal", text: "Cancellation and Refund Policy", link: "/cancellation-and-refund" },
  { section: "Legal", text: "Shipping and Delivery", link: "/shipping-and-delivery" },
  { section: "Legal", text: "Grievance Officer", link: "/grievance-officer" },
  { section: "Support", text: "Contact Us", link: "/contact-us" },
];

/** Top-level nav, in display order. */
export const PRIMARY_NAV = [
  { key: "Home", label: "Home", href: "/" },
  {
    key: "Program",
    label: "Programs",
    groups: [
      { name: "Fellowships", items: FELLOWSHIP_ITEMS },
      { name: "Courses", items: COURSE_ITEMS },
    ],
  },
  { key: "Champions", label: "Champions", items: CHAMPION_ITEMS },
  { key: "Collabs", label: "Collabs", items: COLLAB_ITEMS },
  { key: "Blog", label: "Blog", href: "/our-blogs" },
  { key: "Student Portals", label: "Portals", items: PORTAL_ITEMS },
];

/** Group MORE_ITEMS by their `section` field, preserving declaration order. */
export function groupMoreItems() {
  const out = [];
  for (const item of MORE_ITEMS) {
    let group = out.find((g) => g.name === item.section);
    if (!group) {
      group = { name: item.section, items: [] };
      out.push(group);
    }
    group.items.push(item);
  }
  return out;
}

/**
 * Which top-level key is active for a given pathname.
 * Same precedence as the original effect in Navbar.jsx.
 */
export function resolveActiveNav(pathname) {
  if (!pathname) return "Home";
  if (pathname === "/") return "Home";

  if (COURSE_ITEMS.some((i) => pathname.includes(i.link))) return "Program";
  if (FELLOWSHIP_ITEMS.some((i) => pathname.includes(i.link))) return "Program";
  if (CHAMPION_ITEMS.some((i) => pathname === i.link)) return "Champions";
  if (COLLAB_ITEMS.some((i) => pathname === i.link)) return "Collabs";
  if (MORE_ITEMS.some((i) => pathname === i.link)) return "More";
  if (pathname.includes("/our-blogs")) return "Blog";

  return null;
}
