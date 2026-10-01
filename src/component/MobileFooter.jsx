import React from "react";
import { FaWhatsapp, FaRegMoon } from "react-icons/fa";
import { MdCall, MdOutlineWbSunny } from "react-icons/md";
import { TbZoomQuestion } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "@/lib/router-compat";

const MobileFooter = ({ darkMode, setDarkMode }) => {
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-surface border-t  border-line flex justify-around py-2 shadow-md md:hidden z-50">
      {/* Call */}
      <a
  // href="tel:08645322947"
  href="tel:+919518856261"
  className="flex flex-col items-center text-sm text-content"
>
  <BiPhoneCall className="w-6 h-6" />
  <span className="text-[10px]">Call</span>
</a>

      {/* WhatsApp */}
      <a
        // href="https://api.whatsapp.com/send?phone=9108645322947"
        href="https://api.whatsapp.com/send?phone=09518856261"
        className="flex flex-col items-center text-sm text-content"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-6 h-6 text-content" />
        <span className="text-[10px]">WhatsApp</span>
      </a>

      {/* Query */}
      {/* <a
                href="https://query.unifiedmentor.com/"
                className="flex flex-col items-center text-sm text-content"
                target="_blank" rel="noopener noreferrer"
            >
                <TbZoomQuestion className="w-6 h-6" />
                <span className='text-[10px]'>Query</span>
            </a> */}

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="flex flex-col items-center text-blue-900 text-sm focus:outline-none text-content"
      >
        <div className="relative w-6 h-6">
          <FaRegMoon
            className={`absolute top-0 left-0 w-6 h-6 transition-all duration-500 transform ${
              darkMode
                ? "-translate-x-10 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          />
          <MdOutlineWbSunny
            className={`absolute top-0 left-0 text-warning  w-6 h-6 transition-all duration-500 transform ${
              darkMode
                ? "translate-y-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          />
        </div>
        <span className="text-[10px]">Theme</span>
      </button>
    </div>
  );
};

export default MobileFooter;