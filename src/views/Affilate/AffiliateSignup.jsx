import React, { useState } from "react";
import ApiRequest from "../../Utils/Axios/Axios";

const AffiliateSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await ApiRequest.post("/affiliate-auth/register", formData);

      if (res.data.success) {
        alert("Signup successful, please login");
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Affiliate Signup
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 mb-3 border rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 mb-3 border rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 border rounded-md"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <a href="/affiliate-login" className="text-blue-600">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default AffiliateSignup;
