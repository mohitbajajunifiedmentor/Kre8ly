// components/GoogleLoginButton.jsx
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import ApiRequest from "../../Utils/Axios/Axios";

const GoogleLoginButton = () => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google user:", decoded);

      const { email, name, sub: googleId, picture } = decoded;

      // Send Google user to backend
      const res = await ApiRequest.post("/affiliate-auth/google", {
        name,
        email,
        googleId,
        picture,
      });

      if (res.data.success) {
        localStorage.setItem("affiliateToken", res.data.token);
        alert("Login successful!");
        window.location.href = "/affiliate-dashboard";
      } else {
        alert("Login failed!");
      }
    } catch (err) {
      console.error("Google login error:", err);
      alert("Something went wrong with Google login.");
    }
  };

  const handleError = () => {
    alert("Google Sign-In failed. Please try again.");
  };

  return (
    <div className="w-full flex justify-center my-4">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default GoogleLoginButton;
