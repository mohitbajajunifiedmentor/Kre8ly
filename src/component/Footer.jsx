import { useState, useEffect } from "react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "@/lib/router-compat";

const Logo = "/assets/NavBar/White%20Logo.png";
const LogoLight = "/assets/NavBar/Colored%20Logo.png";

const OurCourse = [
  { name: "Full Stack Developer Course", url: "/web-development" },
  { name: "Data Science Course", url: "/data-science" },
  { name: "Digital Marketing Course", url: "/digital-marketing" },
  { name: "Machine Learning Course", url: "/machine-learning" },
  { name: "UX/UI Designer Course", url: "/ui-ux-designer" },
  { name: "Graphic Design Course", url: "/graphic-design" },
];

const socialLinks = [
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/unifiedmentor" },
  { icon: FaFacebookF, url: "https://www.facebook.com/Unifiedmentor" },
  { icon: FaTwitter, url: "https://twitter.com/unifiedmentor" },
  { icon: FaInstagram, url: "https://instagram.com/_unifiedmentor" },
  { icon: FaYoutube, url: "https://www.youtube.com/@_Unifiedmentor" },
];

const onlineCourse = [
  { name: "Services", url: "/services" },
  { name: "Careers", url: "/careers" },
  { name: "Placement", url: "/placement" },
  { name: "Hire From Us", url: "/hire-from-us" },
  { name: "Press Releases", url: "/press-releases" },
  { name: "About Us", url: "/about" },
];

const QuickLinks = [
  { name: "Blog", url: "https://blogs.unifiedmentor.com/" },
  { name: "Services", url: "/services" },
  { name: "Careers", url: "/careers" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Terms and Conditions", url: "/terms-and-conditions" },
  { name: "Grievance Officer", url: "/grievance-officer" },
  { name: "Cancellation and Refund Policy", url: "/cancellation-and-refund" },
  { name: "Placement", url: "/placement" },
  { name: "Shipping and Delivery", url: "/shipping-and-delivery" },
  { name: "Contact Us", url: "/contact-us" },
];

// Target Keywords grouped by landing page for indexing & SEO
const seoKeywordGroups = [
  {
    title: "General Programs & Certifications",
    url: "/",
    keywords: [
      "online certification courses",
      "job oriented online courses",
      "career transformation programs",
      "skill development courses",
      "professional certification courses",
      "tech fellowship programs",
      "courses for working professionals",
      "online courses for freshers",
      "practical skill development courses",
      "Kre8ly courses",
      "Kre8ly fellowship",
      "Kre8ly reviews",
    ],
  },
  {
    title: "Data Analyst Fellowship",
    url: "/fellowship/data-analyst",
    keywords: [
      "data analyst internship programs",
      "data analyst internship course online",
      "affordable data analyst internship in india",
      "online data analyst internship program",
      "online data analyst internship program training",
      "online data analyst internship program courses in india",
      "data-analyst internship program & fellowship",
      "data analyst internship certfication online in india",
    ],
  },
  {
    title: "Financial Analyst Fellowship",
    url: "/fellowship/financial-analyst",
    keywords: [
      "online financial analyst internship program",
      "financial analysis training program",
      "Investment banking internship online in india for freshers",
      "financial analyst internship program",
      "financial analyst internship for freshers",
      "online financial analyst internship",
      "financial analysis internship training program",
    ],
  },
  {
    title: "Business Analyst Fellowship",
    url: "/fellowship/business-analyst",
    keywords: [
      "business analyst internship",
      "business analyst internship for freshers",
      "online business analyst training & certification",
      "business analyst internship program",
      "business analyst online internship certification program",
    ],
  },
  {
    title: "Digital Marketing Fellowship",
    url: "/fellowship/digital-marketing",
    keywords: [
      "digital marketing internship courses online",
      "online digital marketing courses",
      "facebook digital marketing internship",
      "remote digital marketing internship jobs",
      "social media marketing internship work from home",
      "digital marketing internship for freshers work from home",
      "amazon digital marketing internship",
      "digital marketing internship program",
    ],
  },
  {
    title: "Data Science Fellowship",
    url: "/fellowship/data-science",
    keywords: [
      "data science internship program in india",
      "online data science internship program",
      "data science internship jobs in India",
      "data science internship program",
      "data science internship training for students",
      "data science internship for freshers",
      "data science internship for undergraduates",
    ],
  },
];

const Footer = () => {
  const [, setGetLocalStorageRole] = useState(null);

  useEffect(() => {
    setGetLocalStorageRole(localStorage.getItem("role"));
  }, []);

  return (
    <footer className="bg-surface-sunken text-content border-t border-line py-12 px-4 relative z-20">
      <div className="w-full px-4">
        <div className="w-full">
          <Link to="/" className="w-1/2 md:w-auto">
            <figure className="relative w-fit md:h-[5rem] -ml-1.5 md:ml-auto md:mb-10 inline-block">
              <img
                src={LogoLight}
                alt="Kre8ly Logo"
                className="w-24 md:w-[11.3rem] object-contain logo-float dark:hidden"
              />
              <img
                src={Logo}
                alt="Kre8ly Logo"
                aria-hidden="true"
                className="hidden w-24 md:w-[11.3rem] object-contain logo-float dark:block"
              />
            </figure>
          </Link>
          <p className="mb-4 text-[10px] md:text-base text-content-secondary">
            Join thousands who have transformed their lives with our high-quality online Courses. Whether you&apos;re acquiring new skills, enhancing your career, or pursuing a passion, we have the perfect Course for you. Benefit from expert instructors, flexible learning options, and a supportive community. Start your journey to success today with our comprehensive and engaging programs.
          </p>
        </div>

        <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm md:text-xl font-bold mb-4">Our Courses</h4>
            <ul className="grid grid-cols-1 gap-2">
              {OurCourse.map((course) => (
                <li key={course.name} className="flex items-center">
                  <FaAngleRight className="w-4 h-4 mr-1" />
                  <Link
                    to={course.url}
                    className="text-content-secondary hover:text-brand transition-colors text-xs md:text-sm"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm md:text-xl font-bold mb-4">Company</h4>
            <ul className="grid grid-cols-1 gap-2">
              {onlineCourse.map((course) => (
                <li key={course.name} className="flex items-center">
                  <Link to={course.url}>
                    <div className="flex items-center gap-2">
                      <FaAngleRight className="w-4 h-4 mr-1" />
                      <span className="text-content-secondary text-xs md:text-sm mt-1">
                        {course.name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm md:text-xl font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-2">
              {QuickLinks.map((link) => (
                <li key={link.name} className="flex items-center">
                  <FaAngleRight className="w-4 h-4 mr-1" />
                  <Link
                    to={link.url}
                    className="text-content-secondary hover:text-brand transition-colors text-xs md:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Get In Touch Section */}
          <div className="flex flex-col items-start justify-start gap-4">
            <h4 className="text-sm md:text-xl font-bold mb-4">Get In Touch</h4>
            <p className="flex items-center gap-4 mb-2 text-xs md:text-sm">
              <FaPhone className="w-5 h-5 text-brand shrink-0" />
              +919518856261
            </p>
            <p className="flex items-center gap-4 mb-2 text-xs md:text-sm">
              <FaEnvelope className="w-5 h-5 text-brand shrink-0" />
              hello@kre8ly.com
            </p>
            <p className="flex items-center gap-4 mb-2 text-xs md:text-sm">
              <FaLocationDot className="w-5 h-5 text-brand shrink-0" />
              Cyber City, WeWork DLF Forum, DLF Phase 3, Gurugram, Haryana 122002
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Link"
                >
                  <link.icon className="w-5 h-5 text-content-muted hover:text-brand transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="md:w-[400px] 2xl:w-[750px] h-64 overflow-hidden rounded-lg shadow-lg lg:ml-40">
            <iframe
              title="Kre8ly office location"
              className="w-[800px] h-[450px] border-0 rounded-lg shadow-lg"
              src="https://www.google.com/maps?q=Kre8ly%2C%20DLF%20Cyber%20City%2C%20DLF%20Phase%203%2C%20Gurugram%2C%20Haryana%20122002&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SEO INDEXING KEYWORDS SECTION                                 */}
        {/* Option A: Completely Hidden visually via 'sr-only' class       */}
        {/* (Crawlable in HTML DOM for search bots, hidden from users)     */}
        {/* ============================================================== */}
        <section
          aria-label="Popular Programs and Keywords"
          className="sr-only select-none"
        >
          {seoKeywordGroups.map((group, index) => (
            <div key={index} className="my-2">
              <h5>{group.title}</h5>
              <ul>
                {group.keywords.map((kw, kwIdx) => (
                  <li key={kwIdx}>
                    <Link to={group.url}>{kw}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* ============================================================== */}
        {/* Option B (Recommended Safe SEO): Collapsible Drawer             */}
        {/* Clean, zero visual clutter, 100% compliant with Google Search   */}
        {/* ============================================================== */}
        <div className="mt-10 border-t border-line/60 pt-4">
          <details className="group text-xs text-content-muted cursor-pointer">
            <summary className="flex items-center justify-between font-medium hover:text-content transition-colors select-none py-1">
              <span>Popular Searches &amp; Certified Programs</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-surface border border-line group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2 pb-4 text-[11px] leading-relaxed">
              {seoKeywordGroups.map((group, idx) => (
                <div key={idx} className="space-y-1.5">
                  <p className="font-semibold text-content">{group.title}</p>
                  <ul className="flex flex-wrap gap-x-2 gap-y-1">
                    {group.keywords.map((kw, kwIdx) => (
                      <li key={kwIdx}>
                        <Link
                          to={group.url}
                          className="hover:text-brand transition-colors underline decoration-line hover:decoration-brand"
                        >
                          {kw}
                        </Link>
                        {kwIdx < group.keywords.length - 1 && (
                          <span className="text-line ml-1.5">•</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        </div>

        <div className="mb-6 mt-4">
          <p className="text-content-muted text-left text-xs md:text-sm">
            © 2025-2026, Kre8ly Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;