import { useState, useEffect, useCallback } from "react";
const Logo2 = "/assets/Logo2.png";
const Logo1 = "/assets/Logo1.gif";
const NewLogo = "/assets/logo.png";
// const NewLogo = "/assets/newLogo2.gif";
import { Link, useLocation, useNavigate } from "@/lib/router-compat";
import ApiRequest from "../../Utils/Axios/Axios";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
const LogoColor = "/assets/NavBar/Colored%20Logo.png";
const LogoWhite = "/assets/NavBar/White%20Logo.png";

const NavBarAdmin = ({ darkMode }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  // Was a bare `localStorage.getItem("role")` during render, which does not
  // exist on the server. Read it after mount instead so SSR and hydration match.
  const [getLocalStorageRole, setGetLocalStorageRole] = useState(null);
  useEffect(() => {
    setGetLocalStorageRole(localStorage.getItem("role"));
  }, []);

  const auth_token = useSelector((state) => state?.auth_token?.auth_token);

  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Was `useState(window.innerWidth < 768)`. Seeded to false so the server and
  // the first client render agree; the existing resize effect corrects it.
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const [selectedNav, setSelectedNav] = useState("");
  const SuperAdmin_NAV_LINK = [
    { id: "operations", title: "Operations", link: "/superadmin/dashboard" },
    {
      id: "contact-details",
      title: "Contact Details",
      link: "/dashboard/contact-requests",
    },
    {
      id: "students-applied",
      title: "Students Applied",
      link: "/dashboard/students-applied",
    },
    {
      id: "blog-admin",
      title: "Blog Admin",
      link: "/blog-admin",
    },
  ];
  const Admin_Nav_Links = [
    {
      id: "student-applied",
      title: "Student Applied",
      link: "/dashboard/students-applied",
    },
    {
      id: "contact-details",
      title: "Contact Details",
      link: "/dashboard/contact-requests",
    },
    {
      id: "blog-admin",
      title: "Blog Admin",
      link: "/blog-admin",
    },
  ];


  useEffect(() => {
    if (getLocalStorageRole === "superadmin") {
      if (location.pathname.includes("/superadmin/dashboard")) {
        // console.log(location.pathname.includes("/superadmin/dashboard"));
        setSelectedNav("/superadmin/dashboard");
        return;
      }

      const currentLink = SuperAdmin_NAV_LINK.find(
        (link) => location.pathname === link.link
      );
      setSelectedNav(currentLink ? currentLink.link : ""); // Use `link`
    }

    if (getLocalStorageRole === "admin") {
      const currentAdminLink = Admin_Nav_Links.find(
        (link) => location.pathname === link.link
      );

      setSelectedNav(currentAdminLink ? currentAdminLink.link : "");

      if (location.pathname.includes("/blog-admin")) {
        // console.log("true");
        setSelectedNav("/blog-admin");
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await ApiRequest.get("/auth/logout", {
        headers: {
          "Authorization": `Bearer ${auth_token}`,
        }
      });
      if (response.status === 200) {
        navigate("/login");
        cookies.remove("auth_token");
        localStorage.removeItem("role");
        localStorage.removeItem("userId");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [navigate, cookies]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white dark:  py-4 px-4 md:px-10 text-content dark:text-[#fff]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <figure className="flex items-center w-full max-h-[5rem]">
            <img
              src={darkMode ? LogoWhite : LogoColor}
              alt="Company Logo"
              className={
                darkMode ? "w-52 object-contain" : "w-52 object-contain"
              }
            />
          </figure>
        </Link>
        {isMobile ? (
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 border-white border">
                {getLocalStorageRole === "superadmin" && (
                  <>
                    <Link
                      to="/superadmin/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-[#381D76]"
                      onClick={toggleMenu}
                    >
                      Operations
                    </Link>
                    <Link
                      to="/superadmin/dashboard/contact-requests"
                      className="block px-4 py-2 text-sm hover:bg-[#381D76]"
                    >
                      Contact Details
                    </Link>
                    <Link
                      to="/superadmin/dashboard/students-applied"
                      className="block px-4 py-2 text-sm hover:bg-[#381D76]"
                      onClick={toggleMenu}
                    >
                      Students Applied
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleMenu();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-[#381D76]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging Out..." : "Logout"}
                    </button>
                  </>
                )}
                {getLocalStorageRole === "admin" && (
                  <>
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-[#381D76]"
                      onClick={toggleMenu}
                    >
                      Students Applied
                    </Link>
                    <Link
                      to="/dashboard/contact-requests"
                      // to="/dashboard/contact-request"
                      className="block px-4 py-2 text-sm hover:bg-[#381D76]"
                    >
                      Contact Details
                    </Link>
                    <Link
                      to="/blog-admin"
                      className="block px-4 py-2 text-sm hover:bg-[#381D76]"
                      onClick={toggleMenu}
                    >
                      Blog Admin
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleMenu();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-[#381D76]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging Out..." : "Logout"}
                    </button>
                  </>
                )}

                {!getLocalStorageRole && (
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm hover:bg-[#381D76]"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {getLocalStorageRole === "superadmin" && (
              <div className="flex gap-4 justify-center items-center">
                {SuperAdmin_NAV_LINK.map((links) => (
                  <NavLinks
                    key={links.id}
                    name={links.title}
                    link={links.link}
                    active={selectedNav === links.link}
                  />
                ))}
                <button
                  onClick={handleLogout}
                  className="bg-primary text-black px-6 py-2 rounded-full font-bold hover:bg-[#381D76] hover:scale-105 hover:text-primary transition duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging Out..." : "Logout"}
                </button>
              </div>
            )}

            {getLocalStorageRole === "admin" && (
              <>
                {Admin_Nav_Links.map((links) => (
                  <NavLinks
                    key={links.id}
                    name={links.title}
                    link={links.link}
                    active={selectedNav === links.link}
                  />
                ))}

                <button
                  onClick={handleLogout}
                  className="bg-primary text-black px-6 py-2 rounded-full font-bold hover:bg-[#381D76] hover:scale-105 hover:text-primary transition duration0"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging Out..." : "Logout"}
                </button>
              </>
            )}

            {!getLocalStorageRole && (
              <Link to="/login">
                <button className="text-white dark:text-content bg-brand dark:bg-white hover:bg-brand-hover dark:hover:text-white hover:bg-brand-hover  hover:text-primary py-3 px-4  flex items-center font-bold w-full justify-center rounded-md text-sm md:text-base transition-all duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ name, link, active }) => {
  return (
    <li
      className={`cursor-pointer text-white text-base-text list-none ${active ? "underline underline-offset-8 leading-3 font-semibold" : ""
        } hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out`}
      style={{
        transitionProperty: "text-decoration, text-underline-offset",
      }}
    >
      <Link to={link}>{name}</Link>
    </li>
  );
};

export default NavBarAdmin;
