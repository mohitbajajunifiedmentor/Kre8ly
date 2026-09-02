import React, { useState } from "react";
import { motion } from "framer-motion";
const auth_image = "/assets/ReferAndEarn/auth_bg.jpg";
import ApiRequest from "../Utils/Axios/Axios";
import GoogleLoginButton from "./Affiliate/GoogleLoginButton";

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  // Signup form state
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await ApiRequest.post("/affiliate-auth/register", signupData);

      if (res?.data?.success) {
        alert("Signup successful, please login");
        // clear signup and switch to login view
        setSignupData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
        setIsSignIn(true);
      } else {
        alert(res?.data?.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await ApiRequest.post("/affiliate-auth/login", loginData);

      if (res?.status === 200) {
        localStorage.setItem("affiliateToken", res.data.token);
        alert("Login successful");
        onClose && onClose();
        // Redirect to dashboard
        window.location.href = "/affiliate-dashboard";
      } else {
        alert(res?.data?.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-surface rounded-2xl shadow-2xl w-full max-w-6xl flex overflow-hidden top-4 md:top-10"
      >
        {/* Background Image */}
        <img
          src={auth_image}
          alt=""
          className="hidden md:flex absolute h-full"
        />

        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-start w-1/2 p-10 z-10">
          <h2 className="text-[40px] text-content mb-4 text-left">
            {isSignIn
              ? "Log in to track your rewards and referrals."
              : "Sign up and start earning rewards today!"}
          </h2>
          <p className="text-gray-700 text-left">
            {isSignIn
              ? "Your dashboard, just a click away."
              : "Get access to exclusive content and rewards."}
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[#1d2b45] text-white p-16 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-200 hover:text-white border border-[#aeaeae] w-10 h-10 rounded-full"
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-2xl mb-2 flex justify-start items-center">
            {isSignIn ? "Log in" : "Sign Up"}
          </h2>
          <p className="text-sm mb-6 text-gray-300 flex justify-start items-center">
            {isSignIn
              ? "Sign in now and get access to exclusive content!"
              : "Create your account and start your journey with us."}
          </p>

          {/* Form */}
          <form
            className="space-y-2 "
            onSubmit={isSignIn ? handleLoginSubmit : handleSignupSubmit}
          >
            {/* Sign Up fields */}
            {!isSignIn && (
              <>
                <label
                  htmlFor="name"
                  className="flex justify-start items-center"
                >
                  Full Name
                </label>
                <input
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-[#aeaeae] outline-none "
                />

                <label
                  htmlFor="phone"
                  className="flex justify-start items-center"
                >
                  Phone
                </label>
                <input
                  name="phone"
                  value={signupData.phone}
                  onChange={handleSignupChange}
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-[#aeaeae] outline-none "
                />
              </>
            )}

            <label htmlFor="email" className="flex justify-start items-center">
              Email Address
            </label>
            <input
              name="email"
              value={isSignIn ? loginData.email : signupData.email}
              onChange={isSignIn ? handleLoginChange : handleSignupChange}
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-[#aeaeae] outline-none"
            />

            <label
              htmlFor="password"
              className="flex justify-start items-center"
            >
              Password
            </label>
            <input
              name="password"
              value={isSignIn ? loginData.password : signupData.password}
              onChange={isSignIn ? handleLoginChange : handleSignupChange}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-[#aeaeae] outline-none"
            />

            {!isSignIn && (
              <>
                <label
                  htmlFor="confirmPassword"
                  className="flex justify-start items-center"
                >
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-[#aeaeae] outline-none"
                />
              </>
            )}

            {/* {isSignIn && (
              <div className="text-sm flex justify-between">
                <span className="text-gray-400">
                  Forgot password?{" "}
                  <button className="text-blue-400 hover:underline">
                    Reset
                  </button>
                </span>
              </div>
            )} */}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-2 text-sm text-gray-400">or</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          {/* Google Login */}
          {/* <button className="w-full py-3 flex items-center justify-center gap-3 bg-white text-gray-800 rounded-md hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button> */}

          <GoogleLoginButton />

          {/* Switch Between Sign In & Sign Up */}
          <p className="text-sm text-gray-400 mt-6 text-center">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-blue-400 hover:underline"
            >
              {isSignIn ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
