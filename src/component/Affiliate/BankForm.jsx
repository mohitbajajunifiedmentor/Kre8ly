// src/components/BankForm.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Was "../redux/slices/bankSlice" — there is no `redux` folder; the slices
// live under src/Redux-setup/slices/.
import { saveBankDetails, fetchBankDetails } from "@/Redux-setup/slices/bankSlice";

const BankForm = () => {
  const dispatch = useDispatch();
  const { details, loading } = useSelector((s) => s.bank);

  const [form, setForm] = useState({
    accountHolderName: "",
    accountNumber: "",
    ifsc: "",
    upi: "",
  });

  useEffect(() => {
    dispatch(fetchBankDetails());
  }, [dispatch]);

  useEffect(() => {
    if (details) {
      setForm({
        accountHolderName: details.accountHolderName || "",
        accountNumber: details.accountNumber || "",
        ifsc: details.ifsc || "",
        upi: details.upi || "",
      });
    }
  }, [details]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveBankDetails(form));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Bank Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          name="accountHolderName"
          value={form.accountHolderName}
          onChange={handleChange}
          placeholder="Account Holder Name"
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="accountNumber"
          value={form.accountNumber}
          onChange={handleChange}
          placeholder="Account Number"
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="ifsc"
          value={form.ifsc}
          onChange={handleChange}
          placeholder="IFSC Code"
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="upi"
          value={form.upi}
          onChange={handleChange}
          placeholder="UPI ID (optional)"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Saving..." : "Save Bank Details"}
        </button>
      </form>
    </div>
  );
};

export default BankForm;
