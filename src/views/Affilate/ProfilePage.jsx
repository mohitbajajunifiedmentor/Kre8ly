import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  updateProfile,
  fetchBankDetails,
  saveBankDetails,
} from "../../Redux-setup/actions/affiliateActions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { profile, loading: userLoading } = useSelector(
    (state) => state.affiliate
  );
  const { bank, loading: bankLoading } = useSelector(
    (state) => state.affiliate
  );

  // console.log("profile", profile);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    accountHolderName: "",
    accountNumber: "",
    ifsc: "",
    pan: "",
  });

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchBankDetails());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setForm((prev) => ({
        ...prev,
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
      }));
    }
  }, [profile]);

  useEffect(() => {
    if (bank) {
      setForm((prev) => ({
        ...prev,
        accountHolderName: bank.accountHolderName || "",
        accountNumber: bank.accountNumber || "",
        ifsc: bank.ifsc || "",
        pan: bank.pan || "",
      }));
    }
  }, [bank]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // console.log("form", form);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Save both profile and bank
  //   dispatch(updateProfile({ name: form.name, phone: form.phone }));
  //   dispatch(
  //     saveBankDetails({
  //       accountHolderName: form.accountHolderName,
  //       accountNumber: form.accountNumber,
  //       ifsc: form.ifsc,
  //       pan: form.pan,
  //     })
  //   );
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // split personal & bank data
    const { name, email, phone, pan, accountHolderName, accountNumber, ifsc } =
      form;

    await dispatch(updateProfile({ name, email, phone, pan }));
    await dispatch(
      saveBankDetails({ accountHolderName, accountNumber, ifsc, pan })
    );
  };

  return (
    <div className="bg-inherit py-6 px-4 md:py-10 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Avatar */}
        <div className="flex flex-col items-center mb-6">
          {/* <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-gray-700 mb-4"
          /> */}
          <h1 className="text-2xl font-semibold text-[#000000] dark:text-white ">
            Hello{" "}
            <span className=" text-[#000000] dark:text-white font-bold">
              {profile?.name}
            </span>{" "}
            ,
          </h1>
          <p className="text-gray-400 text-center mt-2 max-w-md text-sm md:text-base">
            Got friends who want to level up their career? Invite them to join
            Kre8ly and get rewarded for every successful signup or
            enrollment.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {/* Personal Details */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Personal Details
            </h3>
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-line bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              disabled
              className="w-full border border-line p-2 rounded bg-gray-100 dark:bg-gray-700 cursor-not-allowed text-gray-600 dark:text-gray-300"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-line bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Bank Details */}
          <div className="col-span-2 mt-4 md:mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Bank Details
            </h3>
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Account Holder Name
            </label>
            <input
              type="text"
              name="accountHolderName"
              value={form.accountHolderName}
              onChange={handleChange}
              className="w-full border border-line bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              className="w-full border border-line bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              IFSC Code
            </label>
            <input
              type="text"
              name="ifsc"
              value={form.ifsc}
              onChange={handleChange}
              className="w-full border border-line bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              PAN Card
            </label>
            <input
              type="text"
              name="pan"
              value={form.pan}
              onChange={handleChange}
              className="w-full border border-line bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <div className="col-span-2 flex flex-col md:flex-row md:justify-start mt-6 gap-3">
            <button
              type="submit"
              disabled={userLoading}
              className="w-full md:w-auto bg-[#395172] text-white px-6 py-2 rounded disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {userLoading ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => dispatch(fetchProfile())}
              className="w-full md:w-auto bg-transparent border border-line text-gray-700 dark:text-gray-200 px-6 py-2 rounded focus:outline-none"
            >
              Refresh
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
