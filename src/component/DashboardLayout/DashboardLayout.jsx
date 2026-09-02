import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import SideBar from "../SideBar/SideBar";

const DashboardLayout = ({ children }) => {

  // console.log("DashboardLayout -> children", children)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row w-full bg-custom-dark-gradient  overflow-hidden">
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-custom-dark-gradient ">
        <h1 className="text-darkText text-xl font-bold">Dashboard</h1>
        <button
          className="text-darkText/50  hover:text-darkText hover:focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <HiOutlineMenuAlt2 size={35} />
        </button>
      </div>
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 ease-in-out
        md:relative md:w-1/5 md:translate-x-0
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        bg-darkSideBar  border-r 
      `}
      >
        <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-darkText/20 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <main
        className="flex-1 md:w-4/5 pt-20 p-4 md:p-5 overflow-y-auto h-screen custom-scrollbar"
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
