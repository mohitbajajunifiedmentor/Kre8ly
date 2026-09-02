import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "@/lib/router-compat";
import { IoSearch, IoTrendingUpOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";

const courses = [
  { name: "Web Development", path: "/web-development" },
  { name: "Data Science", path: "/data-science" },
  { name: "UI/UX Design", path: "/ui-ux-designer" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Machine Learning", path: "/machine-learning" },
  { name: "Graphic Design", path: "/graphic-design" },
];

function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random());
}

const SearchBar = ({ overHero }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [randomCourses, setRandomCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const navigate = useNavigate();
  const wrapperRef = useRef();
  const inputRef = useRef(null);

  const handleOutSideClick = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsFocused(false);
      setSearchQuery("");
      inputRef.current?.blur(); // FIX: Added optional chaining
    }
  };

  // useEffect(() => {
  //     const handleScroll = () => {
  //         setIsFocused(false);
  //         setSearchQuery('');
  //         if (inputRef.current) {
  //             inputRef.current.blur(); // Blur input on scroll
  //         }
  //     };

  //     if (isFocused) {
  //         window.addEventListener('scroll', handleScroll);
  //     }

  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, [isFocused]);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);
    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, []);

  useEffect(() => {
    const shuffled = shuffleArray([...courses]);
    setRandomCourses(shuffled.slice(0, 4));
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = courses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses([]);
    }
  }, [searchQuery]);

  return (
    <div ref={wrapperRef} className="relative z-50">
      {/* Search Icon Button */}
      <button
        className={`p-2 ${
          overHero
            ? "bg-white text-content"
            : "dark:bg-white dark:text-content bg-brand text-white"
        }   rounded-full shadow-md hover:scale-105 transition-all duration-300`}
        onClick={() => {
          setIsFocused(true);
          setTimeout(() => inputRef.current?.focus(), 50); // slight delay to allow input to mount
        }}
      >
        <IoSearch className="text-2xl" />
      </button>

      {/* Dropdown Box (conditionally rendered) */}
      {isFocused && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => {
              setIsFocused(false);
              setSearchQuery("");
              inputRef.current?.blur(); // FIX: Added optional chaining
            }}
          />

          {/* Search Box */}
          <div
            className="absolute left-0 md:left-[-14rem] w-[95%] md:w-[22rem] 
                        bg-white rounded-xl mt-4 p-5 z-50 text-black shadow-2xl 
                        border border-gray-200 animate-slideFadeDown"
          >
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Courses"
              className="w-full px-4 py-2 mb-4 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D2B45] text-black bg-white"
            />

            {searchQuery && (
              <>
                <h4 className="font-semibold text-gray-700 mb-2">Courses</h4>
                <hr className="mb-3" />
                <div className="flex flex-wrap gap-3 mb-4">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(course.path);
                          setIsFocused(false);
                          setSearchQuery("");
                          inputRef.current?.blur(); // FIX: Added optional chaining
                        }}
                        className="bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 flex items-center gap-2 text-sm"
                      >
                        <GrCertificate /> {course.name}
                      </button>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No Courses found</p>
                  )}
                </div>
              </>
            )}

            <h4 className="font-semibold text-gray-700 mb-2">
              Trending Courses
            </h4>
            <hr className="mb-3" />
            <div className="flex flex-wrap gap-2">
              {randomCourses.map((course, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(course.path);
                    setIsFocused(false);
                    setSearchQuery("");
                    inputRef.current?.blur(); // FIX: Added optional chaining
                  }}
                  className="bg-gray-100 rounded-full px-3 py-2 hover:bg-gray-200 flex items-center gap-2 text-sm"
                >
                  <IoTrendingUpOutline /> {course.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
