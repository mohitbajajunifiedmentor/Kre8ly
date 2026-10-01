import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLinks, createLink } from "../../Redux-setup/actions/linkActions";
import { fetchCourses } from "../../Redux-setup/actions/courseActions";
import { useNavigate } from "@/lib/router-compat";
const coins_icons = "/assets/ReferAndEarn/coins_icon.svg";
const coins_dark = "/assets/ReferAndEarn/coins_dark.svg";
import {
  fetchProfile,
  getDashboard,
  getPayouts,
  getReferrals,
} from "../../Redux-setup/actions/affiliateActions";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "@/lib/router-compat";
const Live_course = "/assets/ReferAndEarn/Live_course.svg";
const kyc_image = "/assets/ReferAndEarn/kyc_image.svg";
const fellowship_image = "/assets/ReferAndEarn/fellowship_image.svg";
const course_image = "/assets/ReferAndEarn/course_image.svg";

const ReferralLinksPage = () => {
  const dispatch = useDispatch();
  const { links, loading } = useSelector((state) => state.affiliate);
  const { profile } = useSelector((state) => state.affiliate);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    dispatch(getDashboard());
    dispatch(getReferrals());
    dispatch(getPayouts());
  }, [dispatch]);

  useEffect(() => {
    // Check if darkMode is in localStorage and set the state
    const storedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (storedMode !== null) {
      setIsDarkMode(storedMode);
    }
  }, []); // Empty array means this runs only once when the component mounts

  const [courseId, setCourseId] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [expandedCourse, setExpandedCourse] = useState(null);
  const navigate = useNavigate();

  const ItemList = [
    {
      _id: 1,
      name: "Live Courses",
      category: "Live",
      commissionRate: 10,
      image: Live_course,
    },
    {
      _id: 2,
      name: "Courses",
      category: "Recorded",
      commissionRate: 10,
      image: course_image,
    },
    {
      _id: 3,
      name: "Fellowship",
      category: "Recorded",
      commissionRate: 10,
      image: fellowship_image,
    },
    {
      _id: 4,
      name: "Know your CTC (KYC)",
      category: "Product",
      commissionRate: 10,
      image: kyc_image,
    },
  ];

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchLinks());
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    alert("Referral link copied!");
  };

  const handleCreate = () => {
    if (!selectedCourse) {
      alert("Please select a course!");
      return;
    }
    dispatch(createLink(selectedCourse));
    setSelectedCourse("");
  };

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">
      {/* Profile section */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center mb-4 max-w-2xl ">
          <img
            src={isDarkMode ? coins_icons : coins_dark}
            alt=""
            className="mb-4 "
          />
          <h2 className="text-2xl ml-2 text-content mb-2">
            Hello {profile?.name} , Start by Choosing a course
          </h2>
          <p className="text-[#7B7B7B] dark:text-gray-400 text-center">
            Got friends who want to level up their career? Invite them to join
            Kre8ly and get rewarded for every successful signup or
            enrollment.
          </p>
        </div>
      </div>

      <hr className="border-line md:my-10" />

      <h2 className="text-xl mb-4 text-gray-900 dark:text-gray-100">
        Explore our Categories
      </h2>

      {/* we will add multiple cards */}
      {/* 🔹 Course Cards Section */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(ItemList) &&
          ItemList.map((item) => (
            <div
              key={item._id}
              className="border border-line rounded-lg shadow-md p-4 bg-surface flex flex-col justify-between hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* item Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-4"
              />

              <div className="flex justify-between items-center">
                {/* item Title */}
                <h3 className="text-base mb-2 text-gray-900 dark:text-gray-100">
                  {item.name}
                </h3>

                {/* Category */}
                {/* <span className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 inline-block mb-3">
                {item.category || "General"}
              </span> */}

                {/* Commission */}
                {/* <p className="text-sm mb-3">
                <span className="font-medium">Commission:</span>{" "}
                {(item.commissionRate || 0) * 100}%
              </p> */}

                {/* Create Link Button */}
                <Link
                  to={`/affiliate-dashboard/subcategories/${item._id}`}
                  className=" w-10 h-10 bg-[#355082] rounded-full flex items-center justify-center"
                >
                  <FaArrowRight className="text-white" />
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* {expandedCourse === item._id && (
        <div className="mt-4 border-t border-gray-300 dark:border-gray-700 pt-3">
          <h4 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Select Subcategory
          </h4>

          <div className="flex flex-col gap-2">
            {Array.isArray(courses) &&
              courses
                // .filter((course) => course.parentId === item._id) // assuming API gives parentId
                .map((sub) => (
                  <button
                    key={sub._id}
                    onClick={() => dispatch(createLink(sub._id))}
                    className="w-full px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded"
                  >
                    {sub.name}
                  </button>
                ))}
          </div>
        </div>
      )} */}

      {/* Dropdown to select course */}
      {/* <div className="mb-6 flex gap-2">
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="border border-line bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-3 py-2 rounded w-1/3"
        >
          <option value="">-- Select Course --</option>
          {Array.isArray(courses) &&
            courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course?.name}
              </option>
            ))}
        </select>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          + Create Link
        </button>
      </div> */}

      {/* 🔹 Referral Links Listing */}
      {/* <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-900 dark:text-gray-100">
        Your Referral Links
      </h3> */}
      {/* {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-line shadow-sm rounded-lg">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="p-2 border border-line">
                  Course
                </th>
                <th className="p-2 border border-line">
                  Referral Link
                </th>
                <th className="p-2 border border-line">
                  Clicks
                </th>
                <th className="p-2 border border-line">
                  Conversions
                </th>
                <th className="p-2 border border-line">
                  Commission %
                </th>
                <th className="p-2 border border-line">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(links) &&
                links.map((link) => {
                  const referralUrl = `${window.location.origin}/course/${link.course?._id}?ref=${link.code}`;
                  return (
                    <tr
                      key={link._id}
                      className="text-center odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-700"
                    >
                      <td className="p-2 border border-line">
                        {link.course?.name}
                      </td>
                      <td className="p-2 border border-line text-blue-600 dark:text-blue-400 underline break-words">
                        {referralUrl}
                      </td>
                      <td className="p-2 border border-line">
                        {link.clicks}
                      </td>
                      <td className="p-2 border border-line">
                        {link.conversions}
                      </td>
                      <td className="p-2 border border-line">
                        {(link.course?.commissionRate || 0) * 100}%
                      </td>
                      <td className="p-2 border border-line">
                        <button
                          onClick={() => handleCopy(referralUrl)}
                          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                          Copy
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )} */}
    </div>
  );
};

export default ReferralLinksPage;
