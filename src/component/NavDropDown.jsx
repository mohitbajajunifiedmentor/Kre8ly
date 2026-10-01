import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "@/lib/router-compat";
import { Link } from "@/lib/router-compat";

const Navlink = ({ overHero }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center gap-[2.5vw] mx-auto">
      <FlyoutLink
        to="#"
        FlyoutContent={ProgramItems}
        className="!p-0" // override internal padding if needed
      >
        <span
          className={`flex items-center gap-1 text-sm ${overHero ? "text-white" : "dark:text-white text-black"
            }`}
        >
          Program
          <svg
            className={`w-4 h-4 ${overHero ? "text-white" : "dark:text-white text-black"
              }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </FlyoutLink>

      <FlyoutLink to="#" FlyoutContent={HallOfFameItems} className="!p-0">
        <span
          className={`flex items-center gap-1 text-sm ${overHero ? "text-white" : "dark:text-white text-black"
            }`}
        >
          Champions
          <svg
            className={`w-4 h-4 ${overHero ? "text-white" : "dark:text-white text-black"
              }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </FlyoutLink>

      <FlyoutLink to="#" FlyoutContent={GrowWithUsItems} className="!p-0">
        <span
          className={`flex items-center gap-1 text-sm ${overHero ? "text-white" : "dark:text-white text-black"
            }`}
        >
          Partners
          <svg
            className={`w-4 h-4 ${overHero ? "text-white" : "dark:text-white text-black"
              }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </FlyoutLink>

      <button
        className={`flex items-center gap-1 text-sm ${overHero ? "text-white" : "dark:text-white text-black"
          }`}
        onClick={() => window.location.href = "https://blogs.unifiedmentor.com"}
      // onClick={() => navigate("https://blogs.unifiedmentor.com")}
      >
        Blog
      </button>

      <Link to={"/kyc_colleges_workshops"}>
        <button
          className={`flex items-center gap-1 text-sm ${overHero ? "text-white" : "dark:text-white text-black"
            }`}
        >
          <span className="min-[1000px]:max-[1120px]:hidden">
            KYC Workshop
          </span>

          {/* Ye text SIRF 1000px aur 1230px ke beech mein dikhega */}
          <span className="hidden min-[1000px]:max-[1121px]:inline">
            KYC
          </span>

        </button>
      </Link>

      <FlyoutLink to="#" FlyoutContent={MoreItems} className="!p-0">
        <span
          className={`flex items-center gap-1 text-sm ${overHero ? "text-white" : "dark:text-white text-black"
            }`}
        >
          More
          <svg
            className={`w-4 h-4 ${overHero ? "text-white" : "dark:text-white text-black"
              }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <Link to={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProgramItems = () => {
  return (
    <div className="w-auto max-w-xl bg-white p-6 shadow-xl flex gap-12">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Courses</h3>
        <Link
          to="/web-development"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Web Development
        </Link>
        <Link
          to="/data-science"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Data Science
        </Link>
        <Link
          to="/data-analyst"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Data Analyst
        </Link>
        <Link
          to="/digital-marketing"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Digital Marketing
        </Link>
        <Link
          to="/machine-learning"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Machine learning
        </Link>
        <Link
          to="/ui-ux-designer"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          UI/UX Designer
        </Link>
        <Link
          to="/graphic-design"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Graphic Design
        </Link>
        {/* <Link
          to="/livedataanalyst"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Live Data Analyst
        </Link> */}
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Fellowships</h3>
        <Link
          to="/fellowship/full-stack-web-development"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Full Stack Development
        </Link>
        <Link
          to="/fellowship/frontend-development"
          className="block text-sm hover:underline"
        >
          Frontend Development
        </Link>
        <Link
          to="/fellowship/backend-development"
          className="block text-sm hover:underline"
        >
          Backend Development
        </Link>
        <Link
          to="/fellowship/ui-ux-designer"
          className="block text-sm hover:underline"
        >
          UI/UX Designer
        </Link>
        <Link
          to="/fellowship/machine-learning"
          className="block text-sm hover:underline"
        >
          Machine Learning
        </Link>
        <Link
          to="/fellowship/data-analyst"
          className="block text-sm hover:underline"
        >
          Data Analyst
        </Link>
        <Link
          to="/fellowship/data-science"
          className="block text-sm hover:underline"
        >
          Data Science
        </Link>
        <Link
          to="/fellowship/digital-marketing"
          className="block text-sm hover:underline"
        >
          Digital Marketing
        </Link>
        <Link
          to="/fellowship/financial-analyst"
          className="block text-sm hover:underline"
        >
          Financial Analyst
        </Link>
        <Link
          to="/fellowship/business-analyst"
          className="block text-sm hover:underline"
        >
          Business Analyst
        </Link>
      </div>
      {/* <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button> */}
    </div>
  );
};
const HallOfFameItems = () => {
  return (
    <div className="w-auto max-w-xl bg-white p-6 shadow-xl flex gap-12">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Explore</h3>
        <Link
          to="/placement"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Placed Students
        </Link>
        <Link
          to="/our-stories"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Our Story
        </Link>
        <Link
          to="/leaderboard"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Leaderboard
        </Link>
      </div>
    </div>
  );
};
const GrowWithUsItems = () => {
  return (
    <div className="w-auto max-w-xl bg-white p-6 shadow-xl flex gap-12">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Explore</h3>
        <Link
          to="/mou"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Our Collabs
        </Link>
        <Link
          to="/campus-ambassador"
          className="block text-sm hover:underline whitespace-nowrap"
        >
          Campus Ambassador
        </Link>
      </div>
    </div>
  );
};
const MoreItems = () => {
  return (
    <div className="w-auto max-w-xl bg-white p-6 shadow-xl flex flex-col gap-6">
      {/* Columns container */}
      <div className="flex gap-12">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Company</h3>
          <Link
            to="/services"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Services
          </Link>
          <Link
            to="/careers"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Careers
          </Link>
          <Link
            to="/placement"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Placement
          </Link>
          <Link
            to="/hire-from-us"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Hire from us
          </Link>
          <Link
            to="/press-releases"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Press Releases
          </Link>
          <Link
            to="/about"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            About us
          </Link>
        </div>

        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">Legal</h3>
          <Link
            to="/privacy-policy"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Terms and Conditions
          </Link>
          <Link
            to="/cancellation-and-refund"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Refund Policy
          </Link>
          {/* <Link
            to="/shipping-and-delivery"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Shipping and Delivery
          </Link> */}
          <Link
            to="/grievance-officer"
            className="block text-sm hover:underline whitespace-nowrap"
          >
            Grievance Officer
          </Link>
          <div className="space-y-3">
            <h3 className="font-semibold">Support</h3>
            <Link
              to="/contact-us"
              className="block text-sm hover:underline whitespace-nowrap"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Button below columns */}
      <button
        onClick={() => window.open("https://jobs.unifiedmentor.com/", "_blank")}
        className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white"
      >
        Unified Job Portal
      </button>
    </div>
  );
};
export default Navlink;
