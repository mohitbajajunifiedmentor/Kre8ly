import { useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "@/lib/router-compat";

export const NewMobileMoreSection = ({
  title,
  icon,
  items,
  toggleMobileMenu,
  isOpen,
  toggleSection,
  activeNav,
  activeNestedLinks,
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const { pathname } = useLocation();

  // Group items by section
  const groupedItems = useMemo(() => {
    const groups = {};
    items.forEach((item) => {
      if (!groups[item.section]) groups[item.section] = [];
      groups[item.section].push(item);
    });
    return groups;
  }, [items]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className="p-2  flex items-center flex-col cursor-pointer text-left"
        onClick={toggleSection}
      >
        <div className="flex items-start gap-2 justify-between w-full">
          <p
            className={`text-sm flex items-center gap-2 ${
              activeNav === title
                ? "text-[#6300e1] text-content-secondary"
                : "text-content"
            }`}
          >
            <span
              className={`${
                activeNav === title
                  ? "text-[#6300e1] text-content-secondary"
                  : "text-content"
              }`}
            >
              {icon}
            </span>
            {title}
          </p>
          <IoIosArrowDown
            className={`${isOpen ? "rotate-180" : ""} transition-all text-sm ${
              activeNav === title
                ? "text-[#6300e1] text-content-secondary"
                : "text-content"
            } duration-300`}
          />
        </div>
        <hr className="w-full mt-2 bg-white/50" />
      </div>

      {isOpen && (
        <>
          {Object.entries(groupedItems).map(
            ([section, sectionItems], index) => (
              <div key={index}>
                <div
                  className={`w-full flex justify-between items-center`}
                  onClick={() => {
                    if (activeSection === section) {
                      setActiveSection(null);
                    } else {
                      setActiveSection(section);
                    }
                  }}
                >
                  <p
                    className={`cursor-pointer block text-sm py-2 rounded-sm text-left px-2 w-full ml-6 ${
                      sectionItems.some((item) => pathname === item.link)
                        ? "text-[#6300e1] text-content-secondary"
                        : "text-content"
                    }`}
                  >
                    {section}
                  </p>

                  <IoIosArrowDown
                    className={`${
                      activeSection === section ? "rotate-180" : ""
                    } transition-all text-xs ${
                      sectionItems.some((item) => pathname === item.link)
                        ? "text-[#6300e1] text-content-secondary"
                        : "text-content"
                    } duration-300 mr-2.5`}
                  />
                </div>

                {activeSection === section && (
                  <div className="pl-4 mt-2">
                    {sectionItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.link}
                        className={`cursor-pointer text-xs block py-2 rounded-md text-left px-2 ml-6 ${
                          pathname === item.link ||
                          activeNestedLinks === item.text
                            ? "text-[#6300e1] text-content-secondary"
                            : "text-content"
                        }`}
                        onClick={() => toggleMobileMenu()}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};
