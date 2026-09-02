// src/pages/DashboardOverview.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboard,
  getReferrals,
  getPayouts,
  createPayoutRequest,
} from "../../Redux-setup/actions/affiliateActions";

const DashboardOverview = () => {
  const dispatch = useDispatch();
  const { dashboard, referrals, loading, error } = useSelector(
    (state) => state.affiliate
  );

  useEffect(() => {
    dispatch(getDashboard());
    dispatch(getReferrals());
    dispatch(getPayouts());
  }, [dispatch]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        Loading dashboard...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 dark:text-red-400">{error}</p>
    );
  }

  if (!dashboard) {
    return null;
  }

  const totalEarnings = Number(dashboard.total_earnings) || 0;
  const availableBalance = Number(dashboard.available_balance) || 0;
  const pendingAmount = totalEarnings - availableBalance;

  const stats = [
    {
      title: "Total Referrals",
      value: referrals?.total || 0,
      color: "bg-blue-500",
    },
    {
      title: "Total Earnings",
      value: `₹${totalEarnings}`,
      color: "bg-green-500",
    },
    {
      title: "Pending Amount",
      value: `₹${pendingAmount}`,
      color: "bg-yellow-500",
    },
    {
      title: "Available Balance",
      value: `₹${availableBalance}`,
      color: "bg-indigo-500",
    },
    {
      title: "Withdrawn",
      value: `₹${dashboard.withdrawn_amount || 0}`,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="p-6 rounded-xl shadow-md bg-surface flex items-center"
          >
            <div
              className={`${stat.color} w-12 h-12 flex items-center justify-center rounded-full text-white text-lg font-bold`}
            >
              {stat.value.toString().charAt(0)}
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {stat.title}
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
