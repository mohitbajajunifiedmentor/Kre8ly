import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
const coins_icons = "/assets/ReferAndEarn/coins_icon.svg";
const coins_dark = "/assets/ReferAndEarn/coins_dark.svg";
import {
  fetchBankDetails,
  fetchProfile,
  getDashboard,
} from "../../Redux-setup/actions/affiliateActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@/lib/router-compat";

const PayoutsPage = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { dashboard, bank } = useSelector((state) => state.affiliate);

  const [bankDetails, setBankDetails] = useState({
    pan: bank?.pan || "",
    accountNumber: bank?.accountNumber || "",
    accountHolder: bank?.accountHolderName || "",
    ifscCode: bank?.ifsc || "",
  });

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchBankDetails());
    dispatch(getDashboard());
    dispatch(fetchProfile());
  }, [dispatch]);

  // compute the next upcoming 10th of month (if today <= 10 -> this month's 10th, else next month's 10th)
  const getNextTenth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0-indexed

    const thisMonthTenth = new Date(year, month, 10);
    let target;
    if (now.getDate() <= 10) {
      target = thisMonthTenth;
    } else {
      // move to next month
      const nextMonth = new Date(year, month + 1, 10);
      target = nextMonth;
    }

    // format like: 10th October, 2025
    const day = target.getDate();
    const daySuffix = (d) => {
      if (d >= 11 && d <= 13) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${day}${daySuffix(day)} ${
      monthNames[target.getMonth()]
    }, ${target.getFullYear()}`;
  };

  const handleChange = (e) => {
    setBankDetails({ ...bankDetails, [e.target.name]: e.target.value });
  };

  // const handleEditToggle = () => setIsEditing(!isEditing);

  useEffect(() => {
    // Check if darkMode is in localStorage and set the state
    const storedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (storedMode !== null) {
      setIsDarkMode(storedMode);
    }
  }, []);

  return (
    <div className="min-h-screen bg-inherit px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-8">
        {/* Amount Section */}
        <div className="p-6 md:p-8 rounded-2xl shadow-md border dark:border-gray-700 border-gray-200 bg-surface">
          <h2 className="text-center text-lg mb-2 flex items-center justify-center gap-3 text-content-secondary">
            <img
              src={isDarkMode ? coins_icons : coins_dark}
              alt=""
              className="mb-4 "
            />
            Total Amount to be withdrawn
          </h2>
          <h1 className="text-center text-4xl md:text-5xl font-bold text-content mb-3">
            ₹ {dashboard?.available_balance}
          </h1>
          <p className="text-center text-sm mb-6 text-content-secondary">
            Amount to be Credited in your Bank Account till{" "}
            <span className="text-content font-semibold">
              {getNextTenth()}
            </span>
          </p>
          <div className="flex justify-center">
            <Link
              to={"/affiliate-dashboard/profile"}
              className="bg-[#223353] transition px-6 py-3 rounded-lg font-medium text-white"
            >
              Change Bank Account
            </Link>
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="p-6 md:p-8 rounded-2xl shadow-md border dark:border-gray-700 border-gray-200 bg-surface">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-content">
              Your Bank Details
            </h3>
            <Link
              to={"/affiliate-dashboard/profile"}
              className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center gap-2"
            >
              <Pencil size={16} /> Edit
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Number */}
            <div>
              <label className="block text-sm mb-2 text-content-secondary">
                Account Number
              </label>
              <input
                type="text"
                name="accountNumber"
                placeholder="Enter Account Number"
                value={bankDetails.accountNumber}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border ${
                  !isEditing
                    ? "opacity-70 cursor-not-allowed border-line"
                    : "border-line"
                }`}
              />
            </div>

            {/* Account Holder */}
            <div>
              <label className="block text-sm mb-2 text-content-secondary">
                Account Holder's Name
              </label>
              <input
                type="text"
                name="accountHolder"
                placeholder="Enter Account Holder's Name"
                value={bankDetails.accountHolder}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border ${
                  !isEditing
                    ? "opacity-70 cursor-not-allowed border-line"
                    : "border-line"
                }`}
              />
            </div>

            {/* IFSC Code */}
            <div>
              <label className="block text-sm mb-2 text-content-secondary">
                IFSC Code
              </label>
              <input
                type="text"
                name="ifscCode"
                placeholder="Enter IFSC Code"
                value={bankDetails.ifscCode}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border ${
                  !isEditing
                    ? "opacity-70 cursor-not-allowed border-line"
                    : "border-line"
                }`}
              />
            </div>

            {/* Bank Name */}
            <div>
              <label className="block text-sm mb-2 text-content-secondary">
                Pan Number
              </label>
              <input
                type="text"
                name="pan"
                placeholder="Enter Pan Number"
                value={bankDetails.pan}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border ${
                  !isEditing
                    ? "opacity-70 cursor-not-allowed border-line"
                    : "border-line"
                }`}
              />
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-end mt-6">
              <button
                onClick={handleEditToggle}
                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg text-sm font-medium text-white"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PayoutsPage;
