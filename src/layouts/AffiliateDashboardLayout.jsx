import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "@/lib/router-compat";
import { IoIosMenu } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { FaRegCreditCard, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaUsersRays } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const LogoWhite = "/assets/NavBar/White%20Logo.png";
const LogoColor = "/assets/NavBar/Colored%20Logo.png";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.affiliate);
  const navigate = useNavigate();

  // Initialize dark mode
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) setIsDarkMode(stored === "true");
  }, []);

  const navItems = [
    { name: "Referral Links", path: "/dashboard", icon: FaUsersRays },
    { name: "Referrals", path: "/dashboard/referrals", icon: FaUsers },
    { name: "Payouts", path: "/dashboard/payouts", icon: FaRegCreditCard },
    { name: "Overview", path: "/dashboard/overview", icon: MdHome },
    { name: "Profile", path: "/dashboard/profile", icon: CgProfile },
  ];

  const handleLogout = () => {
    localStorage.removeItem("affiliateToken");
    navigate("/refer-and-earn"); // 👈 use your routing logic here
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode
          ? "bg-gradient-to-tr from-[#0a0b0e] to-[#20242c]"
          : "bg-gray-50"
      }`}
    >
      {/* ✅ Navbar (always on top of sidebar) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 shadow-md ${
          isDarkMode
            ? "bg-[#121212] text-gray-100"
            : "bg-[#E5E5E5] text-gray-800"
        }`}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden text-gray-500 hover:text-gray-800"
          >
            <IoIosMenu className="w-6 h-6" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={isDarkMode ? LogoWhite : LogoColor}
              alt="Kre8ly Company Logo"
              className={
                isDarkMode ? "w-40 object-contain" : "w-40 object-contain"
              }
            />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="font-semibold">{profile?.name || "Affiliate User"}</p>
            <p className="text-xs text-gray-400">
              {profile?.email || "user@example.com"}
            </p>
          </div>
          <Link to="/dashboard/profile">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-blue-500"
            />
          </Link>
        </div>
      </header>

      {/* ✅ Sidebar (behind navbar) */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 pt-20 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col justify-between
    ${isDarkMode ? "bg-black text-gray-100" : "bg-[#E5E5E5] text-gray-800"}
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0 z-40`} // 👈 z-40 keeps it below navbar
      >
        {/* --- Navigation Items --- */}
        <nav className="mt-4 space-y-2 md:pl-4 flex-1 overflow-y-auto">
          {navItems.map(({ name, path, icon: Icon }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center px-5 py-2 text-base rounded-l-md transition-colors duration-200 ${
                location.pathname === path
                  ? "border-l-4 border-[#496A9F] bg-[#17233A] text-white"
                  : isDarkMode
                  ? "text-gray-200 hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {name}
            </Link>
          ))}
        </nav>

        {/* --- Logout Button at Bottom --- */}
        <div
          className={`p-4 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <button
            onClick={handleLogout} // 🔥 implement your logout logic here
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-md transition-colors duration-200
        ${
          isDarkMode
            ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3H6.75A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21h6.75a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* ✅ Overlay (mobile only, clickable to close) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ✅ Main content area */}
      <main className="flex-1 mt-[70px] lg:ml-64 p-6 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
