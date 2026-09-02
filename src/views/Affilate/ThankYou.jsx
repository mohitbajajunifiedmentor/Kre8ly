import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "@/lib/router-compat";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] to-[#1F232A] flex flex-col items-center justify-center text-white px-6">
      {/* Success Icon Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="flex items-center justify-center bg-green-600 rounded-full p-4 shadow-lg mb-6"
      >
        <CheckCircle2 className="w-14 h-14 text-white" />
      </motion.div>

      {/* Thank You Message */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Payment Successful
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-gray-300 mb-8 text-center max-w-xl"
      >
        Thank you for your purchase! We’ve sent you an email confirmation with
        your payment details. You can now access your course and start learning!
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <button
          onClick={() => navigate("/courses")}
          className="bg-[#223353] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
        >
          Go to My Courses
        </button>

        <button
          onClick={() => navigate("/")}
          className="border border-gray-400 hover:bg-gray-800 px-6 py-3 rounded-xl font-semibold transition"
        >
          Back to Home
        </button>
      </motion.div>

      {/* Footer */}
      <p className="mt-12 text-gray-400 text-sm text-center">
        Need help?{" "}
        <a href="/contact-us" className="text-blue-400 hover:underline">
          Contact Support
        </a>
      </p>
    </div>
  );
};

export default ThankYou;
