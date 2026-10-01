import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaAngleUp, FaUserCheck } from "react-icons/fa6";
const NewLogo = "/assets/logo.png";
import { Link, useLocation, useNavigate } from "@/lib/router-compat";
import { AiOutlineLoading } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import ApiRequest from "../../Utils/Axios/Axios";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCookies,
  removeRole,
  removeUserId,
  resetContactData,
  resetStudentData,
  resetUsersData,
  resetToken,
} from "../../Redux-setup/slice";

const SideBar = () => {
  const auth_token = useSelector((state) => state?.auth_token?.auth_token);
  const [activeLink, setActiveLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector((state) => state?.role?.role);
  const superadmin = [
    {
      id: 1,
      name: "Dashboard",
      path: "/superadmin/dashboard",
      icon: FaHome,
    },
    {
      id: 2,
      name: "Members",
      path: "/members",
      icon: FaUserCheck,
    },
    {
      id: 3,
      name: "Contact Requests",
      path: "/dashboard/contact-requests",
      icon: FaUserCheck,
    },
    {
      id: 4,
      name: "Student Applied",
      path: "/dashboard/students-applied",
      icon: FaUserCheck,
    },
    {
      id: 5,
      name: "Blog Admin",
      path: "/blog-admin",
      icon: FaUserCheck,
    },
    {
      id: 6,
      name: "Hire from Us",
      path: "/hire-dashboard",
      icon: FaUserCheck,
    },
    {
      id: 7,
      name: "Clicks Admin",
      path: "/clicks-admin",
      icon: FaUserCheck,
    },
  ];
  const adminRoutes = [
    {
      id: 1,
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: FaHome,
    },
    {
      id: 2,
      name: "Contact Requests",
      path: "/dashboard/contact-requests",
      icon: FaUserCheck,
    },
    {
      id: 3,
      name: "Student Applied",
      path: "/dashboard/students-applied",
      icon: FaUserCheck,
    },
    {
      id: 4,
      name: "Blog Admin",
      path: "/blog-admin",
      icon: FaUserCheck,
    },
    {
      id: 5,
      name: "Hire from Us",
      path: "/hire-dashboard",
      icon: FaUserCheck,
    },
    {
      id: 7,
      name: "Clicks Admin",
      path: "/dashboard/clicks-admin",
      icon: FaUserCheck,
    },
  ];

  const salesRoutes = [
    {
      id: 1,
      name: "Contact Requests",
      path: "/dashboard/contact-requests",
      icon: FaUserCheck,
    },
    {
      id: 2,
      name: "Student Applied",
      path: "/dashboard/students-applied",
      icon: FaUserCheck,
    },
  ];

  const roleLinks = {
    admin: adminRoutes,
    superadmin: superadmin,
    sales: salesRoutes,
  };

  const checkLinksMatch = (links) => {
    // console.log("links", links);
    if (Object.values(links).length) {
      if (links?.path) {
        // console.log("pathname", pathname.includes(links.path));
        return pathname.includes(links.path);
      }
    }
  };

  const checkInnerLinkMatch = (pathname, subItem) => {
    if (!pathname.includes(subItem.path)) {
      return false;
    }
    return true;
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await ApiRequest.get("/auth/logout", {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });
      if (response.status === 200) {
        dispatch(removeRole());
        dispatch(removeUserId());
        dispatch(resetUsersData());
        dispatch(resetStudentData());
        dispatch(resetContactData());
        dispatch(removeCookies());
        dispatch(resetToken());
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full pt-24 md:pt-5 p-5 bg-custom-dark-gradient">
      {" "}
      <div className="flex flex-col items-center justify-start w-full h-full">
        {/* Profile Section */}
        <figure className="flex items-center justify-start w-full mb-8 rounded-lg relative">
          <img src={NewLogo} alt="User Profile" className="w-auto h-16" />
        </figure>

        {/* Navigation Section */}
        <nav className="w-full flex-1">
          <div className="text-white text-lg font-semibold">Menu</div>
          <div className="w-full h-full justify-between flex items-start flex-col pb-6">
            {role && roleLinks[role] && (
              <div className="mt-4 flex justify-start items-start flex-col gap-3 w-full">
                {roleLinks[role].map((item) => (
                  <div key={item.id} className="w-full">
                    <Link
                      to={item.path}
                      className="text-white flex justify-between items-center w-full cursor-pointer"
                      onClick={() => setActiveLink(item.id)}
                    >
                      <div
                        className={`flex shrink-0 items-center py-2 px-3 justify-start gap-2 w-full  ${
                          checkLinksMatch(item) && "bg-[#3D207E] rounded-md"
                        }`}
                      >
                        <item.icon size={25} />
                        <span className={`ml-2 text-lg`}>{item.name}</span>
                      </div>
                      {item.innerLinks && (
                        <FaAngleUp
                          size={25}
                          className={`text-white transition-transform ${
                            activeLink === item.id ? "" : "rotate-180"
                          }`}
                        />
                      )}
                    </Link>

                    {/* Render sub-links if available */}
                    {item.innerLinks && activeLink === item.id && (
                      <div className="ml-4 flex flex-col items-start justify-start gap-1 mt-2">
                        {item.innerLinks.map((subItem) => (
                          <Link
                            to={subItem.path}
                            key={subItem.id}
                            className="dark:text-darkText text-lightText"
                          >
                            <div
                              className={`flex items-center py-2 ${
                                checkInnerLinkMatch(pathname, subItem)
                                  ? "bg-[#3D207E] rounded-md"
                                  : ""
                              }`}
                            >
                              <subItem.icon size={20} />
                              <span className="ml-2 text-md">
                                {subItem.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <button
              className="text-white flex items-center justify-start gap-2 py-2 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isLoading}
              onClick={handleLogout}
            >
              {isLoading ? (
                <AiOutlineLoading className="animate-spin" />
              ) : (
                <IoLogOut size={25} />
              )}
              <span className="ml-2 text-lg">Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
