import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
// const diwali_banner = "/assets/diwali_banner.svg";

const SignUpBanner = () => {
  const [payments, setPayments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [source, setSource] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ New loading state

  useEffect(() => {
    let fallbackTimer;
    const socket = io(
      "https://webhook-pern-1023229424452.asia-south2.run.app",
      {
        transports: ["websocket", "polling"],
        timeout: 10000,
      }
    );

    socket.on("connect", () => {
      // console.log("✅ Socket connected:", socket.id);
      setSocketConnected(true);
    });

    socket.on("disconnect", () => {
      // console.log("❌ Socket disconnected");
      setSocketConnected(false);
    });

    socket.on("connect_error", (error) => {
      // console.error("❌ Socket connection error:", error);
      setSocketConnected(false);
    });

    socket.on("newPayment", (paymentData) => {
      // console.log("💰 Real-time payment received:", paymentData);
      clearTimeout(fallbackTimer);
      setLoading(false); // ✅ Stop loading once we get data

      setPayments((prev) => {
        if (prev.some((p) => p.payment_id === paymentData.payment_id)) {
          return prev;
        }
        const newPayments = [...prev, paymentData];
        setCurrentIndex(newPayments.length - 1);
        return newPayments;
      });

      setSource("today");

      setTimeout(() => {
        setSource("yesterday");
      }, 5000);
    });

    fallbackTimer = setTimeout(async () => {
      // console.log("⏱️ Triggering fallback API call...");
      try {
        const res = await axios.get(
          "https://webhook-pern-1023229424452.asia-south2.run.app/get-payment"
        );
        const data = res.data.data || [];
        // console.log("📊 Fallback data received:", data.length, "payments");

        if (data.length > 0) {
          setPayments(data);
          setSource("yesterday");
        }
      } catch (err) {
        console.error("❌ Fallback fetch failed:", err);
      } finally {
        setLoading(false); // ✅ Stop loading after fallback
      }
    }, 8000);

    return () => {
      clearTimeout(fallbackTimer);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (payments.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % payments.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [payments.length]);

  const currentPayment = payments[currentIndex];

  return (
    <div className="bg-black dark:bg-white text-[10px] md:text-sm w-auto text-white dark:text-black flex flex-col pt-2 items-center justify-center -mt-6 mb-2 top-0 z-50 -mx-4 md:-mx-10">
      {/* <div className="">
        <img src={diwali_banner} alt="Fire Icon" className="h-10 md:h-full w-[72rem] md:w-full object-cover"/>
      </div> */}
      <p className="text-center flex items-center justify-center p-1">
        {loading ? (
          <span className="italic text-white dark:text-black"></span>
        ) : currentPayment ? (
          <span>
            {currentPayment.customer_name || "Unknown User"}{" "}
            {source === "today" && (
              <span className="font-bold text-red-500 animate-pulse">Now</span>
            )}{" "}
            has officially enrolled in the{" "}
            {currentPayment.internship || "Unknown Course"} program at Unified
            Mentor! 🥳 🎉
          </span>
        ) : (
          <span className="italic text-gray-400">
            No recent enrollments yet
          </span>
        )}
      </p>
    </div>
  );
};

export default SignUpBanner;
