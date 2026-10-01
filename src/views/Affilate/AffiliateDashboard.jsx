import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashboard,
  getReferrals,
  getPayouts,
  createPayoutRequest,
  fetchProfile,
} from "../../Redux-setup/actions/affiliateActions";
import { Link } from "@/lib/router-compat";
const star = "/assets/ReferAndEarn/star_icon.svg";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { GiErlenmeyer, GiTakeMyMoney } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

const AffiliateDashboard = () => {
  const dispatch = useDispatch();
  const { dashboard, referrals, payouts, loading, error } = useSelector(
    (state) => state.affiliate
  );

  // console.log("Dashboard Data:", dashboard);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(getDashboard());
    dispatch(getReferrals());
    dispatch(getPayouts());
  }, [dispatch]);

  if (loading)
    return <p className="text-gray-700 dark:text-gray-200">Loading...</p>;
  if (error)
    return (
      <p className="text-red-600 dark:text-red-400">Error: {error.message}</p>
    );

  return (
    <div className="p-6 space-y-10 text-gray-800 dark:text-gray-200">
      <div className="flex items-center justify-between">
        <div className="max-w-4xl">
          <h1 className="text-xl">Your Referral Overview</h1>
          <p className="text-sm whitespace-nowrap">
            Got friends who want to level up their career? Invite them to join
            Kre8ly and get rewarded for every successful signup or
            enrollment. <img src={star} alt="Group4" className="" /> 20 rewards
            points = 20
          </p>
        </div>

        <Link
          to={"/affiliate-dashboard"}
          className="px-4 py-2 bg-[#223353] text-white rounded"
        >
          + Start Affiliation
        </Link>
      </div>

      <hr className="border-gray-300 dark:border-gray-700" />
      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white dark:bg-[#0F1218] shadow rounded flex gap-4">
          <IoWalletOutline className="text-2xl text-gray-600 dark:text-gray-300 " />
          <div>
            <h3 className="text-gray-600 dark:text-gray-300">Total Earnings</h3>
            <p className="text-xl font-bold">
              ₹{dashboard?.total_earnings || 0}
            </p>
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-[#0F1218] shadow rounded flex gap-4">
          <IoWalletOutline className="text-2xl text-gray-600 dark:text-gray-300 " />
          <div>
            <h3 className="text-gray-600 dark:text-gray-300">
              Available Balance
            </h3>
            <p className="text-xl font-bold">
              ₹{dashboard?.available_balance || 0}
            </p>
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-[#0F1218] shadow rounded flex gap-4">
          <IoWalletOutline className="text-2xl text-gray-600 dark:text-gray-300 " />
          <div>
            <h3 className="text-gray-600 dark:text-gray-300">
              Total Referrals
            </h3>
            <p className="text-xl font-bold">{referrals?.total || 0}</p>
          </div>
        </div>
      </div>

      {/* Referrals Table */}
      <div className="bg-surface shadow rounded p-4 ">
        <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
          Referrals
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="dark:bg-[#0D0F15]">
              <tr className="">
                <th className=" p-2 text-left ">
                  <div className="flex items-center gap-2">
                    <FaRegUser />
                    Name
                  </div>
                </th>
                <th className=" p-2 text-left ">
                  <div className="flex items-center gap-2">
                    <FaUserGraduate />
                    Course
                  </div>
                </th>
                <th className=" p-2 text-left">
                  <div className="flex items-center gap-2">
                    <MdOutlineEmail className="w-6 h-6" />
                    Email
                  </div>
                </th>

                <th className=" p-2 text-left">
                  <div className="flex items-center gap-2">
                    <GiTakeMyMoney className="w-6 h-6" />
                    Amount
                  </div>
                </th>
                <th className=" p-2 text-left">
                  <div className="flex items-center gap-2">
                    <GiErlenmeyer className="w-6 h-6" />
                    Status
                  </div>
                </th>
                <th className=" p-2 text-left">
                  <div className="flex items-center gap-2">
                    <SlCalender className="" />
                    Date
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(referrals?.items) && referrals.items.length > 0 ? (
                referrals.items.map((r) => (
                  <tr
                    key={r._id}
                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-[#181B22] dark:even:bg-gray-800"
                  >
                    <td className="border border-line p-2">
                      {r.notes?.customer_name}
                    </td>
                    <td className="border border-line p-2">
                      {r.course_id?.name}
                    </td>
                    <td className="border border-line p-2">
                      {r.notes?.customer_email}
                    </td>
                    <td className="border border-line p-2">
                      ₹{r.amount}
                    </td>
                    <td
                      className={`border border-line p-2 capitalize ${
                        r.wallet_status === "available"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {r.wallet_status}
                    </td>
                    <td className="border border-line p-2">
                      {r.payment_date
                        ? new Date(r.payment_date).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border p-2 text-center" colSpan="5">
                    No referrals found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payouts Table */}
      {/* <div className="bg-surface shadow rounded p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            Payouts
          </h2>
          <button
            onClick={() => dispatch(createPayoutRequest())}
            className="mt-3 md:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Request Payout
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-line">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-2 text-left">Amount</th>
                <th className="border p-2 text-left">Status</th>
                <th className="border p-2 text-left">Requested On</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(payouts) && payouts.length > 0 ? (
                payouts.map((p) => (
                  <tr
                    key={p._id}
                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-700"
                  >
                    <td className="border border-line p-2">
                      ₹{p.amount}
                    </td>
                    <td className="border border-line p-2">
                      {p.status}
                    </td>
                    <td className="border border-line p-2">
                      {p.createdAt
                        ? new Date(p.createdAt).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border p-2 text-center" colSpan="3">
                    No payouts yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default AffiliateDashboard;
