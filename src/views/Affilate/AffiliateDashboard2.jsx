import React, { useEffect, useState } from "react";
import { useNavigate } from "@/lib/router-compat";

const AffiliateDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    referrals: 0,
    earnings: 0,
    pending: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("affiliateToken");
    if (!token) {
      navigate("/affiliate/login");
      return;
    }

    // Fetch dashboard data
    const fetchStats = async () => {
      try {
        const res = await fetch("/affiliate/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (data.success) {
          setStats({
            referrals: data.referrals,
            earnings: data.earnings,
            pending: data.pending,
          });
        } else {
          alert("Failed to load dashboard");
        }
      } catch (err) {
        console.error(err);
        alert("Error fetching data");
      }
    };

    fetchStats();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Affiliate Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Total Referrals</h2>
          <p className="text-3xl font-bold text-blue-600">{stats.referrals}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Total Earnings</h2>
          <p className="text-3xl font-bold text-green-600">₹{stats.earnings}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Pending Payouts</h2>
          <p className="text-3xl font-bold text-yellow-600">₹{stats.pending}</p>
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("affiliateToken");
          navigate("/affiliate-login");
        }}
        className="mt-10 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default AffiliateDashboard;
