import React, { useState } from "react";
import ApiRequest from "../../Utils/Axios/Axios";

const AffiliateLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   const res = await fetch("/affiliate-auth/login", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });
      const res = await ApiRequest.post("/affiliate-auth/login", formData);

      if (res.status === 200) {
        localStorage.setItem("affiliateToken", res.data.token); // Save JWT
        alert("Login successful");
        window.location.href = "/affiliate-dashboard"; // Redirect
      } else {
        alert(res.data.message || "Login failed");
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
        <h2 className="text-2xl font-bold mb-4 text-center">Affiliate Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-md"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/affiliate-signup" className="text-blue-600">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default AffiliateLogin;
