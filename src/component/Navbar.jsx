import React, { useState, useEffect, useRef, useMemo } from "react";
// const Logo = "/assets/logo.png";
const DiwaliLogo = "/assets/DiwaliLogo.gif";
const ChristmasGif = "/assets/Christmas.gif";
const Logo = "/assets/LogoChristmas.png";
const LightLogo = "/assets/LightLogochristmas1.png";
// const DiwaliLogo = "/assets/DiwaliLogo2.gif";
// const DiwaliLogo = "/assets/Logo.mp4";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
const LogoDark = "/assets/LogoDark.png";
const LogoWhite = "/assets/NavBar/White%20Logo.png";
const LogoColor = "/assets/NavBar/Colored%20Logo.png";
import { GoHome } from "react-icons/go";
import { CiGrid42 } from "react-icons/ci";
import { MdAutoGraph } from "react-icons/md";
import { PiArticleNyTimesThin } from "react-icons/pi";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { GrArticle } from "react-icons/gr";

import { Link, Navigate, useLocation } from "@/lib/router-compat";
import {
  FaCaretDown,
  FaBars,
  FaArrowRight,
  FaCaretRight,
  FaUserGraduate,
} from "react-icons/fa";
import {
  IoIosArrowDown,
  IoIosStarOutline,
  IoMdArrowDropdown,
} from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NewMobileMoreSection } from "./NewMobileMoreSection";
import SearchBar from "./SearchBar";
import { IoPersonOutline } from "react-icons/io5";
import SignUpBanner from "./SignUpBanner";
import NavDropDown from "./NavDropDown";

const Navbar = ({ darkMode }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const dropDownRefPrograms = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("Home");
  const [activeNestedLinks, setActiveNestedLinks] = useState("");
  const [isProgramActive, setIsProgramActive] = useState(false);
  const [isOverHero, setIsOverHero] = useState(false);
  const [kycpageActive, setKycPageActive] = useState(false);

  // const theme = localStorage.getItem("darkMode")

  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    const computeOverlap = () => {
      const hero = document.querySelector("section#hero");
      const nav = document.querySelector("nav");

      if (!hero || !nav) {
        setIsOverHero(false);
        return;
      }

      const heroRect = hero.getBoundingClientRect();
      const navHeight = nav.offsetHeight || 0;

      // If the bottom of hero is still below the top of the viewport plus nav height, we are over hero
      const overHeroNow = heroRect.bottom > navHeight;
      setIsOverHero(overHeroNow);
    };

    computeOverlap();

    if (location.pathname.includes("/kyc-colleges-workshops")) {
      setKycPageActive(true);
    } else {
      setKycPageActive(false);
    }

    const onScroll = () => computeOverlap();
    const onResize = () => computeOverlap();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [location.pathname]);

  useEffect(() => {
    // gsap.set(mobileMenuRef.current, { display: "none", opacity: 0, x: 100, ease: "power3.out" });

    if (isMobileMenuOpen && !isClosing) {
      gsap.set(mobileMenuRef.current, {
        display: "block",
        opacity: 0,
        x: 100,
      });
      gsap.to(mobileMenuRef.current, {
        duration: 0.5,
        opacity: 1,
        x: 0,
        ease: "power3.out",
      });
    } else if (isClosing) {
      gsap.to(mobileMenuRef.current, {
        duration: 0.5,
        opacity: 0,
        x: 100,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
          setIsMobileMenuOpen(false); // Update state after animation
          setIsClosing(false); // Reset closing state
        },
      });
    }
  }, [isMobileMenuOpen, isClosing]);

  const CourseItems = [
    { link: "/web-development", text: "Web Development", id: "courses" },
    { link: "/data-science", text: "Data Science", id: "courses" },
    { link: "/digital-marketing", text: "Digital Marketing", id: "courses" },
    { link: "/machine-learning", text: "Machine Learning", id: "courses" },
    { link: "/ui-ux-designer", text: "UI/UX Designer", id: "courses" },
    { link: "/graphic-design", text: "Graphic Design", id: "courses" },
    // { link: "/livedataanalyst", text: "Live Data Analyst", id: "courses" },
    // { link: "/data-analyst", text: "Data Analyst",id:"courses" },
  ];

  const FellowShip = [
    {
      link: "/fellowship/full-stack-web-development",
      text: "Full Stack Development",
      id: "fellowship",
    },
    {
      link: "/fellowship/frontend-development",
      text: "Frontend Development",
      id: "fellowship",
    },
    {
      link: "/fellowship/backend-development",
      text: "Backend Development",
      id: "fellowship",
    },
    {
      link: "/fellowship/ui-ux-designer",
      text: "UI-UX Designer",
      id: "fellowship",
    },
    {
      link: "/fellowship/machine-learning",
      text: "Machine Learning",
      id: "fellowship",
    },
    {
      link: "/fellowship/data-analyst",
      text: "Data Analyst",
      id: "fellowship",
    },
    {
      link: "/fellowship/data-science",
      text: "Data Science",
      id: "fellowship",
    },
    {
      link: "/fellowship/digital-marketing",
      text: "Digital Marketing",
      id: "fellowship",
    },
    {
      link: "/fellowship/financial-analyst",
      text: "Financial Analyst",
      id: "fellowship",
    },
    {
      link: "/fellowship/business-analyst",
      text: "Business Analyst",
      id: "fellowship",
    },
  ];

  const ProgramItems = [
    {
      name: "Fellowships",
      Links: [...FellowShip],
      id: 1,
    },
    {
      name: "Courses",
      Links: [...CourseItems],
      id: 2,
    },
  ];

  const items = [
    // Company Section
    { section: "Company", text: "Services", link: "/services" },
    { section: "Company", text: "Partner", link: "/partner" },
    // { section: "Company", text: "Placement", link: "/placement" },
    { section: "Company", text: "Hire From Us", link: "/hire-from-us" },
    { section: "Company", text: "Press Releases", link: "/press-releases" },
    { section: "Company", text: "About Us", link: "/about" },

    // Legal Section
    { section: "Legal", text: "Privacy Policy", link: "/privacy-policy" },
    {
      section: "Legal",
      text: "Terms of Conditions",
      link: "/terms-and-conditions",
    },
    {
      section: "Legal",
      text: "Cancellation and Refund Policy",
      link: "/cancellation-and-refund",
    },
    {
      section: "Legal",
      text: "Shipping and Delivery",
      link: "/shipping-and-delivery",
    },
    {
      section: "Legal",
      text: "Grievance Officer",
      link: "/grievance-officer",
    },

    // Resources Section
    // { section: "Resources", text: "Blog", link: "/our-blogs" },

    // //Other
    // { section: "Others", text: "Refer & Earn", link: "/refer-and-earn" },
    // { section: "Others", text: "LeaderBoard", link: "/leaderBoard" },

    // Support Section
    { section: "Support", text: "Contact Us", link: "/contact-us" },
  ];

  useEffect(() => {
    // Reset states
    setActiveNav("Home");
    setIsProgramActive(false);
    setActiveNestedLinks(null);

    // Handle Home page
    if (location.pathname === "/") {
      setActiveNav("Home");
      return;
    }

    // Check Program (Courses and Fellowships)
    const isCourseActive = CourseItems.some((item) =>
      location.pathname.includes(item.link)
    );
    const isFellowshipActive = FellowShip.some((item) =>
      location.pathname.includes(item.link)
    );
    if (isCourseActive) {
      setActiveNav("Program");
      setIsProgramActive(true);
      setActiveNestedLinks("courses");
      return;
    }
    if (isFellowshipActive) {
      setActiveNav("Program");
      setIsProgramActive(true);
      setActiveNestedLinks("fellowship");
      return;
    }

    // Check Champions
    const hallOfFameLink = hallOfFameItems.find(
      (item) => location.pathname === item.link
    );
    if (hallOfFameLink) {
      setActiveNav("Champions");
      setActiveNestedLinks(hallOfFameLink.text);
      return;
    }

    // Check Collabs
    const growWithUsLink = growWithUsItems.find(
      (item) => location.pathname === item.link
    );
    if (growWithUsLink) {
      setActiveNav("Collabs");
      setActiveNestedLinks(growWithUsLink.text);
      return;
    }

    // Check More items
    const more = items.find((item) => item.link === location.pathname);
    if (more) {
      setActiveNav("More");
      setActiveNestedLinks(more.text);
      return;
    }

    // Check Student Portals
    const lmsLink = lmsItems.find((item) => location.pathname === item.link);
    if (lmsLink) {
      setActiveNav("Student Portals");
      setActiveNestedLinks(lmsLink.text);
      return;
    }

    // Check Blog
    if (location.pathname.includes("/our-blogs")) {
      setActiveNav("Blog");
      setActiveNestedLinks("Blog");
    }
  }, [location.pathname]);

  // console.log(activeNav);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true); // Trigger closing animation
    } else {
      setIsMobileMenuOpen(true); // Open menu immediately
    }
  };

  const hallOfFameItems = [
    { link: "/placement", text: "Placed Student", id: "placement" },
    { link: "/our-stories", text: "Our Stories", id: "stories" },
    { link: "/leaderboard", text: "LeaderBoard", id: "leaderBoard" },
  ];

  const growWithUsItems = [
    { link: "/mou", text: "Our Collabs", id: "mou" },
    {
      link: "/campus-ambassador",
      text: "Campus Ambassador",
      id: "Campus-Ambassador",
    },
  ];

  const lmsItems = [
    {
      link: "https://learning.unifiedmentor.com/s/authenticate",
      text: "Learning Portal",
      id: "learning-Portal",
    },
    {
      link: "https://projects.unifiedmentor.com/sign-in",
      text: "Project Portal",
      id: "Project-Portal",
    },
  ];

  const overHero = isOverHero; // readable alias

  return (
    <>
      <nav
        className={`w-full sticky top-0 z-50 py-4 px-4 md:px-10 shadow-xs shadow-secondary ${overHero
          ? "bg-brand text-white"
          : "bg-surface text-content dark:text-[#fff] "
          }`}
      >
        <SignUpBanner />
        {/* Desktop menu */}
        <div className="w-full items-center justify-between hidden lg:flex max-h-[2rem] mt-4">
          <Link to="/" className="w-auto">
            <figure className="flex items-center justify-center w-full">
              {/* <img
                src={overHero ? DiwaliLogo : darkMode ? DiwaliLogo : LogoColor}
                alt="Kre8ly Company Logo"
                className={`object-contain ${overHero ? "w-52 " : "ml-6 w-40"}`}
              /> */}
              <img
                src={overHero ? LogoWhite : darkMode ? LogoWhite : LogoColor}
                alt="Kre8ly Logo"
                className=" w-40 object-cover"
              />
              {/* <div className=" relative">
                  <img src={ChristmasGif} alt=""  className="w-40 object-cover"
                  /> */}


              {/* <img
                src={overHero ? Logo : darkMode ? Logo : LightLogo}
                alt="Kre8ly Logo"
                className="w-40 object-cover"
              /> */}





              {/* </div> */}
            </figure>
          </Link>

          <div className="hidden lg:flex items-center justify-between gap-3 w-4/5">
            <div className="flex items-center gap-5 mx-auto text-lg">
              {/* <NavLink to="/" text="Home" /> */}
              {/* <NewNavDropdown
                title="Program"
                items={ProgramItems}
                isActive={activeDropdown === "Program"}
                toggleDropdown={(state) => {
                  if (state === undefined) {
                    toggleDropdown("Program");
                  } else {
                    setActiveDropdown(state ? "Program" : null);
                  }
                }}
                dropdownRef={dropDownRefPrograms}
                activeNav={activeNav}
                activeNestedLinks={activeNestedLinks}
                setActiveNestedLinks={setActiveNestedLinks}
                isProgramActive={isProgramActive} // Pass the new state
                overHero={overHero}
              />
              <DropdownMenu
                title="Champions"
                items={hallOfFameItems}
                isActive={activeDropdown === "Champions"}
                toggleDropdown={() => toggleDropdown("Champions")}
                activeNav={activeNav}
                activeNestedLinks={activeNestedLinks}
                overHero={overHero}
              />
              <DropdownMenu
                title="Collabs"
                items={growWithUsItems}
                isActive={activeDropdown === "Collabs"}
                toggleDropdown={() => toggleDropdown("Collabs")}
                activeNav={activeNav}
                activeNestedLinks={activeNestedLinks}
                overHero={overHero}
              />

              <NavLink to="/our-blogs" text="Blog" active={activeNav} />

              <MoreDropDown
                title="More"
                items={items}
                isActive={activeDropdown === "More"}
                toggleDropdown={() => toggleDropdown("More")}
                activeNav={activeNav}
                activeNestedLinks={activeNestedLinks}
                overHero={overHero}
              /> */}
              <NavDropDown overHero={overHero} />
            </div>
            <button
              onClick={() => (window.location.href = "/refer-and-earn")}
              className={`py-3 px-4 flex items-center gap-3 font-semibold justify-center rounded-md text-sm transition duration-300 border-[0.5px] ${overHero
                ? "border-[#A6A6A6] text-white hover:bg-white hover:text-content"
                : "border-line-strong dark:border-[#A6A6A6] text-content hover:bg-brand hover:text-white dark:hover:bg-white dark:hover:text-content"
                }`}
            >
              {/* Become an Affiliate */}
              <span className="min-[1000px]:max-[1249px]:hidden">
                Become an Affiliate
              </span>

              {/* Ye text SIRF 1000px aur 1230px ke beech mein dikhega */}
              <span className="hidden min-[1000px]:max-[1250px]:inline">
                Affiliate
              </span>
            </button>
            <div className="flex items-center space-x-4">
              <DropDownButton
                title="Login"
                items={lmsItems}
                isActive={activeDropdown === "Login"}
                toggleDropdown={() => toggleDropdown("Login")}
                activeNav={activeNav}
                overHero={overHero}
              />

              {/* <button
                onClick={() =>
                  (window.location.href = "https://jobs.unifiedmentor.com/")
                }
                className={`py-3 px-4  flex items-center gap-3 font-semibold justify-center rounded-md text-sm  md:w-auto mx-auto transition duration-300 ${
                  overHero
                    ? "text-content bg-white hover:bg-surface-sunken"
                    : "text-white dark:text-content bg-brand dark:bg-white hover:bg-brand-hover dark:hover:text-white hover:bg-brand-hover  hover:text-primary"
                }`}
              >
                {" "}
                Job seeker
              </button> */}
            </div>
            <div className="flex items-center">
              <SearchBar overHero={overHero} />
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <div className=" lg:hidden flex items-center justify-center gap-2 w-full">
          {/* Mobile menu icon */}
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="w-auto h-[2rem]">
              <figure className="w-full max-h-[5rem] flex justify-center items-center">

                {/* <img
                  src={overHero ? Logo : darkMode ? Logo : LightLogo}
                  alt="Kre8ly Logo"
                  className=" w-28 object-cover "
                /> */}

                <img
                  src={overHero ? LogoWhite : darkMode ? LogoWhite : LogoColor}
                  alt="Kre8ly Logo"
                  className=" w-28 object-cover"
                />
                {/* <img
                src={overHero ? DiwaliLogo : darkMode ? DiwaliLogo : LogoColor}
                alt="Kre8ly Company Logo"
                className={`object-cover ${overHero ? "w-40 mt-[-1rem] ml-[-1rem]" : "w-28"}`}
              /> */}
              </figure>
            </Link>
            <div className="block ">
              <button
                onClick={toggleMobileMenu}
                className="text-lg focus:outline-none"
              >
                <FaBars
                  className={
                    overHero
                      ? "text-white text-lg"
                      : darkMode
                        ? "text-white text-lg"
                        : "text-content text-lg"
                  }
                />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {(isMobileMenuOpen || isClosing) && (
            <MobileMenu
              ref={mobileMenuRef}
              CourseItems={CourseItems}
              hallOfFameItems={hallOfFameItems}
              growWithUsItems={growWithUsItems}
              lmsItems={lmsItems}
              toggleMobileMenu={toggleMobileMenu}
              isOpen={isMobileMenuOpen}
              FellowShip={FellowShip}
              ProgramItems={ProgramItems}
              moreItems={items}
              activeNav={activeNav}
              activeNestedLinks={activeNestedLinks}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const DropdownItem = ({
  item,
  pathname,
  activeNestedLinks,
  toggleDropdown,
  isExternal = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // se
  const commonProps = {
    className: "block py-2 px-4 relative",
  };

  if (isExternal) {
    return (
      <a
        href={item.link}
        target="_blank"
        {...commonProps}
        onClick={() => toggleDropdown(false)}
      >
        <span className="hover:text-[#6300e1] hover:underline ">
          {item.text}
        </span>
      </a>
    );
  }

  return (
    <Link
      to={item.link === "#" ? "" : item.link}
      onClick={(e) => {
        if (item.link === "#") e.preventDefault();
        toggleDropdown(false);
      }}
      {...commonProps}
    >
      {item.text}
    </Link>
  );
};

const DropdownMenu = ({
  title,
  items,
  isActive,
  toggleDropdown,
  activeNav,
  activeNestedLinks,
  overHero,
}) => {
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    toggleDropdown(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    toggleDropdown(false);
    setIsHovered(false);
  };

  return (
    <div
      className={`relative flex items-center gap-2 text-sm cursor-pointer select-none ${activeNav === title
        ? "text-[#6300e1] text-content-secondary"
        : overHero
          ? "text-white"
          : "text-content"
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        textDecoration: "none",
        transition: "0.4s",
      }}
    >
      <span className="relative">
        {title}
        <span
          className={`absolute -bottom-2 h-1 bg-[#A6A6A6] transition-all duration-400 ${isHovered ? "w-full left-0" : "w-0 left-1/2"
            }`}
          style={{
            transform: isHovered ? "none" : "translateX(-50%)",
            transition: "all 0.4s",
          }}
        />
        {activeNav === title && (
          <span className="absolute -bottom-2 h-1 bg-[#A6A6A6] w-full left-0" />
        )}
      </span>

      {isActive && (
        <div
          className={`absolute top-[1.5rem] w-60 bg-transparent h-36 flex justify-center items-center`}
        >
          <div className="bg-primary text-sm text-[#102140] border border-gray-400 rounded-lg shadow-lg z-10 w-full">
            {items.map((item, index) => (
              <DropdownItem
                key={index}
                item={item}
                pathname={pathname}
                activeNestedLinks={activeNestedLinks}
                toggleDropdown={toggleDropdown}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DropDownButton = ({
  title,
  items,
  isActive,
  toggleDropdown,
  activeNav,
  activeNestedLinks,
  overHero,
}) => {
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    toggleDropdown(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    toggleDropdown(false);
    setIsHovered(false);
  };

  return (
    <div
      className={`relative flex items-center gap-2  text-sm border ${overHero ? "" : "border-navyColor dark:border-white"
        } hover:dark:border-line-strong  rounded-lg  px-5 py-3 cursor-pointer group select-none hover:bg-[#111827] hover:bg-surface-sunken hover:text-white dark:hover:text-white ${items?.find((item) => item.text === activeNav)
          ? overHero
            ? "text-[#111827] bg-white"
            : "text-content-secondary"
          : overHero
            ? "text-[#111827] bg-white"
            : "text-content"
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        textDecoration: "none",
        transition: "0.4s",
      }}
    >
      <span
        className={`font-semibold ${overHero ? "text-[#111827]" : "text-navyColor dark:text-white"
          } group-hover:text-white relative`}
      >
        {title}
        <span
          className={`absolute -bottom-2 h-1 transition-all duration-400 ${isHovered ? "w-full left-0" : "w-0 left-1/2"
            }`}
          style={{
            transform: isHovered ? "none" : "translateX(-50%)",
            transition: "all 0.4s",
          }}
        />
        {items?.find((item) => item.text === activeNav) && (
          <span className="absolute -bottom-2 h-1 w-full left-0" />
        )}
      </span>

      {isActive && (
        <div
          className={`absolute top-4 -left-10 mt-3 w-36 bg-transparent h-36 flex justify-center items-center `}
        >
          <div className="bg-primary text-content dark:text-[#102140] border text-xs md:text-sm border-gray-400 rounded-lg shadow-lg z-10 w-full">
            {items.map((item, index) => (
              <DropdownItem
                key={index}
                item={item}
                pathname={pathname}
                activeNestedLinks={activeNestedLinks}
                toggleDropdown={toggleDropdown}
                isExternal={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MoreDropDown = ({
  title,
  items = [],
  isActive,
  toggleDropdown,
  activeNav,
  activeNestedLinks,
  overHero,
}) => {
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const groupedItems = useMemo(() => {
    const groups = {};
    items.forEach((item) => {
      if (!groups[item.section]) groups[item.section] = [];
      groups[item.section].push(item);
    });
    return groups;
  }, [items]);

  // Highlight the title if activeNav is "More" or if the current pathname matches any item link
  const isHighlighted =
    activeNav === "More" || items.some((item) => item.link === pathname);

  const handleMouseEnter = () => {
    toggleDropdown(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    toggleDropdown(false);
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex items-center gap-2 text-sm rounded-md px-4 dark:hover:text-secondary py-3 cursor-pointer select-none ${isHighlighted
          ? "text-[#6300e1] text-content-secondary"
          : overHero
            ? "text-white"
            : "text-content"
          }`}
        style={{
          textDecoration: "none",
          transition: "0.4s",
        }}
      >
        <span className="flex items-center gap-2 relative">
          {title}
          <span
            className={`absolute -bottom-2 h-1 bg-[#A6A6A6] transition-all duration-400 ${isHovered ? "w-full left-0" : "w-0 left-1/2"
              }`}
            style={{
              transform: isHovered ? "none" : "translateX(-50%)",
              transition: "all 0.4s",
            }}
          />
          {isHighlighted && (
            <span className="absolute -bottom-2 h-1 bg-[#A6A6A6] w-full left-0" />
          )}
        </span>
      </div>
      {/* Buffer zone */}
      <div className="absolute top-full left-0 w-full h-4" />
      {isActive && (
        <div className="fixed top-[6rem] right-0 left-0 w-screen rounded-md bg-primary border-t border-gray-300 shadow-lg z-50 px-8 py-8 overflow-y-auto">
          <div className="w-full grid grid-cols-3 gap-12">
            {Object.entries(groupedItems).map(([section, links], index) => (
              <div key={index}>
                <h4 className="text-base font-semibold mb-3 text-black uppercase underline">
                  {section}
                </h4>
                <ul className="space-y-1 text-[#102140] text-lg">
                  {links.map((link, i) => (
                    <li key={i}>
                      <DropdownItem
                        item={link}
                        pathname={pathname}
                        activeNestedLinks={activeNestedLinks}
                        toggleDropdown={toggleDropdown}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ to, text, active }) => {
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  // Highlight if pathname matches 'to' exactly or if active matches text
  const isActive = pathname === to || active === text;

  return (
    <Link
      to={to}
      className={` dark:hover:text-secondary text-sm p-2 rounded-sm text-center relative ${isActive ? "text-[#6300e1] text-content-secondary" : ""
        }`}
      style={{
        textDecoration: "none",
        transition: "0.4s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      <span
        className={`absolute bottom-0 h-1 bg-[#A6A6A6] transition-all duration-400 ${isHovered ? "w-full left-0" : "w-0 left-1/2"
          }`}
        style={{
          transform: isHovered ? "none" : "translateX(-50%)",
          transition: "all 0.4s",
        }}
      />
      {isActive && (
        <span className="absolute bottom-0 h-1 bg-[#A6A6A6] w-full left-0" />
      )}
    </Link>
  );
};

// const NavLink = ({ to, text, active }) => {
//   const removeSlash = to.replace("/", "");

//   return (
//     <Link
//       to={to}
//       className={` hover:text-secondary dark:hover:text-secondary  text-sm p-2 rounded-sm text-center ${active.includes(`${removeSlash}`)
//         ? "text-[#6300e1] text-content-secondary underline underline-offset-8"
//         : ""
//         } `}
//     >
//       {text}
//     </Link>
//   );
// };

// const ActionButton = ({ text, link, className }) => (
//   <Link to={link} target="_blank">
//     <button
//       className={`bg-primary text-black rounded-full font-bold hover:bg-[#381D76]  hover:text-primary transition duration-300 flex items-center gap-1 ${className} justify-center`}
//     >
//       {text} <FaArrowRight />
//     </button>
//   </Link>
// );

// eslint-disable-next-line react/display-name
const MobileMenu = React.forwardRef(
  (
    {
      CourseItems,
      hallOfFameItems,
      growWithUsItems,
      lmsItems,
      toggleMobileMenu,
      FellowShip,
      isOpen,
      ProgramItems,
      moreItems,
      activeNav,
      activeNestedLinks,
    },
    ref
  ) => {
    const [activeMobileSection, setActiveMobileSection] = useState(null);
    const { pathname } = useLocation();

    const toggleSection = (section) => {
      setActiveMobileSection(activeMobileSection === section ? null : section);
    };

    return (
      <div
        ref={ref}
        className={`lg:hidden fixed top-0 right-0 bg-white dark:bg-[#102140] text-[#fff] py-4 px-4 z-20 h-screen overflow-y-auto w-3/4 `}
      >
        <div className="flex flex-col gap-4">
          {/* <button className="text-2xl mb-4 text-white pt-4 focus:outline-none w-full flex justify-end">
          <FaTimes onClick={toggleMobileMenu} />
        </button> */}
          <div className="flex items-center justify-end">
            <div
              onClick={toggleMobileMenu}
              className="relative w-8 h-8 cursor-pointer"
            >
              {/* Line 1 */}
              <span
                className={`absolute block h-[2px] w-4 bg-[#1C4980] dark:bg-white rounded-full transition-transform duration-500 ease-in-out ${isOpen ? "rotate-45 top-4" : "top-2"
                  }`}
              ></span>
              {/* Line 2 */}
              <span
                className={`absolute block h-[2px] w-4 bg-[#1C4980] dark:bg-white rounded-full transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-0" : "top-4"
                  }`}
              ></span>
              {/* Line 3 */}
              <span
                className={`absolute block h-[2px] w-4 bg-[#1C4980] dark:bg-white rounded-full transition-transform duration-500 ease-in-out ${isOpen ? "-rotate-45 top-4" : "top-6"
                  }`}
              ></span>
            </div>
          </div>
          <Link
            to={"/"}
            className={`p-2 rounded-sm text-left ${activeNav === "Home"
              ? "text-[#6300e1] text-content-secondary"
              : "text-content"
              }`}
            onClick={() => toggleMobileMenu()}
          >
            <div className="flex flex-row items-center gap-2 text-sm dark:text-white text-content relative">
              <GoHome className="text-content" /> Home
              {/* {activeNav === "Home" && (
                <span className="absolute bottom-0 h-1 bg-[#A6A6A6] w-full left-0" />
              )} */}
            </div>
            <hr className="w-full mt-2 bg-surface-sunken dark:bg-white/50" />
          </Link>
          {/* <MobileMenuSection title="Courses" items={CourseItems} /> */}
          <NewMobileMenuSection
            icon={<CiGrid42 />}
            title="Programs"
            items={ProgramItems}
            toggleMobileMenu={toggleMobileMenu}
            isOpen={activeMobileSection === "Programs"}
            toggleSection={() => toggleSection("Programs")}
            activeNav={activeNav}
            activeNestedLinks={activeNestedLinks}
          />
          {/* <MobileMenuSection title="Fellowship" items={FellowShip} /> */}
          <MobileMenuSection
            icon={<IoIosStarOutline />}
            title="Champions"
            items={hallOfFameItems}
            toggleMobileMenu={toggleMobileMenu}
            isOpen={activeMobileSection === "Champions"}
            toggleSection={() => toggleSection("Champions")}
            activeNav={activeNav}
            activeNestedLinks={activeNestedLinks}
          />
          <MobileMenuSection
            icon={<MdAutoGraph />}
            title="Collabs"
            items={growWithUsItems}
            toggleMobileMenu={toggleMobileMenu}
            isOpen={activeMobileSection === "Collabs"}
            toggleSection={() => toggleSection("Collabs")}
            activeNav={activeNav}
            activeNestedLinks={activeNestedLinks}
          />
          <MobileMenuSection
            icon={<IoPersonOutline />}
            title="Student Portals"
            items={lmsItems}
            toggleMobileMenu={toggleMobileMenu}
            isOpen={activeMobileSection === "Student Portals"}
            toggleSection={() => toggleSection("Student Portals")}
            activeNav={activeNav}
            activeNestedLinks={activeNestedLinks}
          />
          {/* <NavLink to="/about" text="About" /> */}
          {/* <NavLink to="https://blog.unifiedmentor.com/" text="Blog" /> */}
          <Link
            to={"https://blogs.unifiedmentor.com/"}
            className={`p-2 rounded-sm text-left ${activeNav === "Blog"
              ? "text-[#6300e1] text-content-secondary"
              : "text-content"
              }`}
            onClick={() => toggleMobileMenu()}
          >
            <div className="flex items-center gap-2 relative">
              <GrArticle
                className={`text-content text-sm  ${activeNav === "Blog"
                  ? "text-[#6300e1] text-content-secondary"
                  : "text-content"
                  }`}
              />
              Blog
              {/* {activeNav === "Blog" && (
                <span className="absolute bottom-0 h-1 bg-[#A6A6A6] w-full left-0" />
              )} */}
            </div>
            <hr className="w-full mt-2 bg-surface-sunken dark:bg-white/50" />
          </Link>

          <Link
            to="/kyc_colleges_workshops"
            onClick={() => toggleMobileMenu()}
            className={`p-2 rounded-sm text-left ${activeNav === "kyc"
              ? "text-[#6300e1] text-content-secondary"
              : "text-content"
              }`}
          >
            <div className="flex items-center gap-2 relative">
              <RiMoneyRupeeCircleLine
                className={`text-sm ${activeNav === "kyc"
                  ? "text-[#6300e1] text-content-secondary"
                  : "text-content"
                  }`}
              />
              KYC Workshop
            </div>

            {activeNav === "kyc" && (
              <span className="block h-[2px] bg-[#6300e1] dark:bg-secondary mt-2 w-full" />
            )}
            <hr className="w-full mt-2 bg-surface-sunken dark:bg-white/50" />
          </Link>


          <NewMobileMoreSection
            icon={<PiDotsSixVerticalBold />}
            title="More"
            items={moreItems}
            toggleMobileMenu={toggleMobileMenu}
            isOpen={activeMobileSection === "More"}
            toggleSection={() => toggleSection("More")}
            activeNav={activeNav}
            activeNestedLinks={activeNestedLinks}
          />
          {/* <Link
          to={"/mou"}
          className=" hover:text-secondary text-2xl font-bold  p-2 rounded-sm text-left"
        >
          Our Collabs
          <hr className="w-full mt-2 bg-white/50" />
        </Link> */}

          {/* <NavLink to="/campus-ambassador" text="Student Program" /> */}
          <div className="flex  flex-col gap-4 justify-center items-center w-full">
            {/* <p className="text-2xl  font-bold w-full p-2">
            I\'m a
            <hr className="w-full mt-2 bg-white/50" />
          </p> */}
            <Link to="/refer-and-earn">
              <button className="dark:bg-transparent dark:border dark:border-white text-xs dark:text-white bg-transparent border border-line-strong text-content px-8 py-2 rounded-md hover:bg-brand hover:text-white transition duration-300 flex justify-center items-center gap-2">
                Become an Affiliate
              </button>
            </Link>
            <Link to={"https://jobs.unifiedmentor.com/"} target="_blank">
              <button className="dark:bg-primary bg-brand  text-sm dark:text-black  px-8 py-2 rounded-md text-white hover:bg-[#381D76] hover:text-primary transition duration-300 flex justify-center items-center gap-2">
                Job Seeker
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

const MobileDropdownItem = ({
  item,
  pathname,
  activeNestedLinks,
  toggleMobileMenu,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={item.link}
      className={`block py-2 rounded-sm text-left px-2 ml-6 text-xs relative ${pathname === item.link || activeNestedLinks === item.text
        ? "text-[#6300e1] text-content-secondary"
        : "text-content"
        }`}
      onClick={() => toggleMobileMenu()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textDecoration: "none",
        transition: "0.4s",
      }}
    >
      {item.text}
      <span
        className={`absolute bottom-0 h-1 bg-[#A6A6A6] transition-all duration-400 ${isHovered ? "w-full left-0" : "w-0 left-1/2"
          }`}
        style={{
          transform: isHovered ? "none" : "translateX(-50%)",
          transition: "all 0.4s",
        }}
      />
      {/* {(pathname === item.link || activeNestedLinks === item.text) && (
        <span className="absolute bottom-0 h-1 bg-[#A6A6A6] w-full left-0" />
      )} */}
    </Link>
  );
};

const MobileMenuSection = ({
  title,
  icon,
  items,
  toggleMobileMenu,
  isOpen,
  toggleSection,
  activeNav,
  activeNestedLinks,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className={`p-2 text-sm flex items-center flex-col cursor-pointer text-left ${activeNav === title
          ? "text-[#6300e1] text-content-secondary"
          : "text-content"
          }`}
        onClick={toggleSection}
      >
        <div className="flex items-start gap-2 justify-between w-full">
          <p
            className={`text-sm flex items-center gap-2 relative ${activeNav === title
              ? "text-[#6300e1] text-content-secondary"
              : "text-content"
              }`}
          >
            <span className="text-content text-sm">
              {icon}
            </span>
            {title}
            {/* {activeNav === title && (
              <span className="absolute bottom-0 h-1 bg-[#A6A6A6] w-1/2 left-0" />
            )} */}
          </p>
          <IoIosArrowDown
            className={`${isOpen ? "rotate-180" : ""} transition-all text-sm ${activeNav === title
              ? "text-[#6300e1] text-content-secondary"
              : "text-content"
              } duration-300`}
          />
        </div>
        <hr className="w-full mt-2 bg-surface-sunken dark:bg-white/50" />
      </div>
      {isOpen &&
        items.map((item, index) => (
          <MobileDropdownItem
            key={index}
            item={item}
            pathname={pathname}
            activeNestedLinks={activeNestedLinks}
            toggleMobileMenu={toggleMobileMenu}
          />
        ))}
    </div>
  );
};

// const NewNavDropdown = ({
//   title,
//   items,
//   activeNav,
//   dropdownRef,
//   isActive,
//   toggleDropdown,
//   activeNestedLinks,
//   setActiveNestedLinks,
// }) => {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleMouseEnter = (itemName) => {
//     setHoveredItem(itemName);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   const handleMainMouseEnter = () => {
//     toggleDropdown(true);
//   };

//   const handleMainMouseLeave = () => {
//     if (!hoveredItem) {
//       toggleDropdown(false);
//     }
//   };

//   return (
//     <div
//       className="relative"
//       ref={dropdownRef}
//       onMouseEnter={handleMainMouseEnter}
//       onMouseLeave={handleMainMouseLeave}
//     >
//       <div
//         className={`flex items-center gap-2 cursor-pointer select-none hover:text-gray-400 ${
//           items?.find((item) => item.text === activeNav)
//             ? "text-secondary underline underline-offset-8"
//             : "text-primary"
//         }`}
//         onClick={() => toggleDropdown(!isActive)}
//       >
//         <span>{title}</span>
//         <FaCaretDown />
//       </div>

//       {isActive && (
//         <div
//           className="absolute top-5 -left-14 mt-2 w-48 bg-primary text-[#102140] border border-gray-400 rounded-lg shadow-lg z-10"
//           onMouseLeave={() => {
//             handleMouseLeave();
//             toggleDropdown(false);
//           }}
//         >
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => handleMouseEnter(item.name)}
//             >
//               <div className="py-2 px-4  flex justify-between items-center cursor-pointer">
//                 {item.name} <FaCaretRight />
//               </div>

//               {hoveredItem === item.name && (
//                 <div
//                   className="absolute left-[100%] top-0 min-w-80 min-h-64  bg-transparent text-[#102140]  flex justify-around items-center"
//                   onMouseLeave={() => setHoveredItem(null)}
//                 >
//                   <div className=" bg-white max-w-64 w-full text-[#102140] border border-gray-400 rounded-lg shadow-lg ">
//                     {item.Links.map((subItem, subIndex) => (
//                       <Link
//                         key={subIndex}
//                         to={subItem.link}
//                         className="block py-2 px-4 "
//                         onClick={() => {
//                           handleMouseLeave();
//                           toggleDropdown(false);
//                           setActiveNestedLinks &&
//                             setActiveNestedLinks(subItem.id);
//                         }}
//                       >
//                         {subItem.text}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

const NewNavDropdown = ({
  title,
  items,
  activeNav,
  dropdownRef,
  isActive,
  toggleDropdown,
  activeNestedLinks,
  setActiveNestedLinks,
  isProgramActive,
  overHero,
}) => {
  const { pathname } = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  // Highlight the title if activeNav is "Program" or if the current pathname matches any item link
  const isHighlighted =
    isProgramActive ||
    items.some((item) =>
      item.Links.some((subItem) => pathname === subItem.link)
    );

  const handleMouseEnter = () => {
    toggleDropdown(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    toggleDropdown(false);
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex items-center gap-2 text-sm rounded-md px-4 dark:hover:text-secondary py-3 cursor-pointer select-none ${isHighlighted
          ? "text-[#6300e1] text-content-secondary"
          : overHero
            ? "text-white"
            : "text-content"
          }`}
        style={{
          textDecoration: "none",
          transition: "0.4s",
        }}
      >
        <span className="flex items-center gap-2 relative">
          {title}
          <span
            className={`absolute -bottom-2 h-1 bg-[#A6A6A6] transition-all duration-400 ${isHovered ? "w-full left-0" : "w-0 left-1/2"
              }`}
            style={{
              transform: isHovered ? "none" : "translateX(-50%)",
              transition: "all 0.4s",
            }}
          />
          {isHighlighted && (
            <span className="absolute -bottom-2 h-1 bg-[#A6A6A6] w-full left-0" />
          )}
        </span>
      </div>
      {/* Buffer zone */}
      <div className="absolute top-full left-0 w-full h-4" />
      {isActive && (
        <div className="fixed top-[6rem] right-0 left-0 w-screen rounded-md bg-primary border-t border-gray-300 shadow-lg z-50 px-8 py-8 overflow-y-auto">
          <div className="w-full grid grid-cols-2 gap-12">
            {items.map((item, index) => (
              <div key={index}>
                <h4 className="text-base font-semibold mb-3 text-black uppercase underline">
                  {item.name}
                </h4>
                <ul className="space-y-1 text-[#102140] text-lg">
                  {item.Links.map((link, i) => (
                    <li key={i}>
                      <DropdownItem
                        item={link}
                        pathname={pathname}
                        activeNestedLinks={activeNestedLinks}
                        toggleDropdown={toggleDropdown}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const NewMobileMenuSection = ({
  title,
  icon,
  items,
  toggleMobileMenu,
  isOpen,
  toggleSection,
  activeNav,
  activeNestedLinks,
}) => {
  const [activeCategory, setActiveCategory] = useState(null); // To track the active category (Course/Fellowship)
  const { pathname } = useLocation();

  // Check if any nested link is active to highlight the title
  const isTitleActive =
    activeNav === title ||
    items.some((item) =>
      item.Links.some((subItem) => pathname === subItem.link)
    );

  return (
    <div className="flex flex-col gap-4 w-full text-sm">
      <div
        className="p-2 flex items-center flex-col cursor-pointer text-left"
        onClick={toggleSection}
      >
        <div className="flex items-start gap-2 justify-between w-full">
          <p
            className={`text-sm flex items-center gap-2 relative ${isTitleActive
              ? "text-[#6300e1] text-content-secondary"
              : "text-content"
              }`}
          >
            <span
              className={`${isTitleActive
                ? "text-[#6300e1] text-content-secondary"
                : "text-content"
                }`}
            >
              {icon}
            </span>
            {title}
            {/* {isTitleActive && (
              <span className="absolute bottom-0 h-1 bg-[#A6A6A6] w-1/2 left-0" />
            )} */}
          </p>
          <IoIosArrowDown
            className={`${isOpen ? "rotate-180" : ""} transition-all text-sm ${isTitleActive
              ? "text-[#6300e1] text-content-secondary"
              : "text-content"
              } duration-300`}
          />
        </div>
        <hr className="w-full mt-2 bg-surface-sunken dark:bg-white/50" />
      </div>

      {isOpen && (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <div
                className="w-full flex justify-between items-center"
                onClick={() => {
                  // Toggle visibility of subcategories
                  if (activeCategory === item.id) {
                    setActiveCategory(null); // Close the section if clicked again
                  } else {
                    setActiveCategory(item.id);
                  }
                }}
              >
                <p
                  className={`cursor-pointer block text-xs py-2 rounded-sm text-left px-2 w-full ml-6 relative ${item.Links.some((subItem) => pathname === subItem.link)
                    ? "text-[#6300e1] text-content-secondary"
                    : "text-content"
                    }`}
                >
                  {item.name}
                  {/* {item.Links.some((subItem) => pathname === subItem.link) && (
                    <span className="absolute bottom-0 h-1 bg-[#A6A6A6] w-1/2 left-0" />
                  )} */}
                </p>
                <IoIosArrowDown
                  className={`${activeCategory === item.id ? "rotate-180" : ""
                    } transition-all duration-300 mr-2.5 ${item.Links.some((subItem) => pathname === subItem.link)
                      ? "text-[#6300e1] text-content-secondary"
                      : "text-content"
                    } text-xs`}
                />
              </div>

              {activeCategory === item.id && (
                <div className="pl-4">
                  {item.Links.map((linkItem, index) => (
                    <div key={index}>
                      <MobileDropdownItem
                        item={linkItem}
                        pathname={pathname}
                        activeNestedLinks={activeNestedLinks}
                        toggleMobileMenu={toggleMobileMenu}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
