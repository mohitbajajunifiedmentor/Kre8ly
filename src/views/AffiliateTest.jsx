import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "@/lib/router-compat";
import ApiRequest from "../Utils/Axios/Axios";
import Faqs from "../component/MachineLearning/Faqs";
import { ReferAndEarnFaqs } from "../Utils/Faqs/ReferAndEarn";
import Footer from "../component/Footer";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";
const WebDev = "/assets/Web%20development.png";
const DataScience = "/assets/Data%20Science.jpg";
const DigitalMarketing = "/assets/Digital%20Marketing.jpg";
const MachineLearning = "/assets/Machine%20Learning.jpg";
const UXUIDesigner = "/assets/UI%20Designer.jpg";
const DataAnalyst = "/assets/Data%20Analysts.jpg";
const GraphicDesign = "/assets/Graphic%20Design.jpg";
const Financial = "/assets/fellowship/Financial%20Analyst.jpg";
const Business = "/assets/fellowship/Business%20Analyst.jpg";
const FrontEnd = "/assets/fellowship/Front-End%20Development.jpg";
const BackEnd = "/assets/fellowship/Back-End%20Development.jpg";
const Research = "/assets/fellowship/Research%20Analyst.jpg";
const CyberSecurityImage = "/assets/UpComingCoursesImage/Cyber%20Security.jpg";
const BlockChainImage = "/assets/UpComingCoursesImage/Block-Chain%20Development.jpg";
const fellowshipWeb = "/assets/Full%20Stack%20Web%20Development.jpg";
const DataScienceFell = "/assets/Data%20Science%20Fellow.jpg";
const MachineLearnFellow = "/assets/fellowship/Machine%20Learning%20(1).jpg";
const DigitalMarketingFellow = "/assets/fellowship/Digital%20Marketing%20(1).jpg";
const UIFellow = "/assets/fellowship/UI%20Designing%20Fellow.jpg";

function AffiliateTest({ darkMode, setDarkMode }) {
  const { courseId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const affiliateCode = queryParams.get("ref");
  // fetch course details
  const [course, setCourse] = useState({});
  useEffect(() => {
    const fetchCourse = async () => {
      const res = await ApiRequest.get(`/courses/${courseId}`);
      setCourse(res.data?.course);
    };
    fetchCourse();
  }, [courseId]);

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    batch: "",
    occupation: "",
    internship: course?.name,
    address: "",
    state: "",
  });

  // validation state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // run simple validation on change
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? "" : "This field is required",
    }));
  };

  useEffect(() => {
    // keep internship synced with course name when course loads
    setFormData((prev) => ({ ...prev, internship: course?.name || "" }));
  }, [course?.name]);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? "" : "This field is required",
    }));
  };

  const isFormValid = () => {
    const required = [
      "customerName",
      "customerEmail",
      "customerPhone",
      "batch",
      "occupation",
      "internship",
      "address",
      "state",
    ];
    for (const key of required) {
      if (!formData[key] || !String(formData[key]).trim()) return false;
    }
    // basic email format check
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.customerEmail
    );
    if (!emailValid) return false;
    return true;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK");
      return;
    }

    try {
      const res = await ApiRequest.post("/payment/create-order", {
        course_id: courseId,
        affiliate_code: affiliateCode,
        ...formData,
      });

      const order = res.data.order;        
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Course Checkout",
        description: `Payment for course ${courseId}`,
        order_id: order.id,
        prefill: {
          name: formData.customerName,
          email: formData.customerEmail,
          contact: formData.customerPhone,
        },
        notes: order.notes,
        handler: function (response) {
          // Verify payment on backend
          
          
          // axios.post("http://localhost:5000/payment/verify", {
          //   ...response,
          //   courseId,
          //   affiliateCode,
          // });
          // Redirect to Thank You page (use appropriate routing method)
          window.location.href = `/thank-you`;
        },
        theme: { color: "#3399cc" },
      };
      
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("❌ Payment failed:", error);
      alert("Payment failed!");
    }
  };

  // write a switch case for each course image

  let courseImage;
  switch (course?.name) {
    case "Web Development":
      courseImage = WebDev;
      break;
    case "Data Science":
      courseImage = DataScience;
      break;
    case "Digital Marketing":
      courseImage = DigitalMarketing;
      break;
    case "Machine Learning":
      courseImage = MachineLearning;
      break;
    case "UI/UX Designer":
      courseImage = UXUIDesigner;
      break;
    case "Data Analyst":
      courseImage = DataAnalyst;
      break;
    case "Graphic Design":
      courseImage = GraphicDesign;
      break;
    case "Financial Analyst":
      courseImage = Financial;
      break;
    case "Business Analyst":
      courseImage = Business;
      break;
    case "Front-End Development":
      courseImage = FrontEnd;
      break;
    case "Back-End Development":
      courseImage = BackEnd;
      break;
    case "Research Analyst":
      courseImage = Research;
      break;
    default:
      courseImage = WebDev;
      break;
  }

  return (
    <>
      <div
        className={`min-h-screen transition-colors duration-300 flex flex-col md:flex-row ${
          darkMode ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* Left Section */}
        <div
          className={`md:w-1/2 p-8 flex flex-col justify-center items-center ${
            darkMode ? "bg-transparent" : "bg-gray-100"
          }`}
        >
          <div className="w-full max-w-md">
            <div className="bg-gray-300 rounded-lg h-48 md:h-64 mb-6">
              <img
                src={courseImage}
                alt={course?.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{course?.name}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {course?.description}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`md:w-1/2 p-8 md:p-12 rounded-md ${
            darkMode ? "bg-[#071427]" : "bg-white"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Course Details
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="customerName"
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? "text-slate-200" : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <input
                  id="customerName"
                  type="text"
                  name="customerName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Full Name"
                  className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                />
                {touched.customerName && errors.customerName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.customerName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="customerPhone"
                  className={`block text-sm font-medium mb-1 ${
                    darkMode ? "text-slate-200" : "text-gray-700"
                  }`}
                >
                  Phone
                </label>
                <input
                  id="customerPhone"
                  type="text"
                  name="customerPhone"
                  placeholder="Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-gray-900 border-gray-300"
                  }`}
                />
                {touched.customerPhone && errors.customerPhone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.customerPhone}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <label
                htmlFor="customerEmail"
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-slate-200" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                id="customerEmail"
                type="email"
                name="customerEmail"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              />
              {touched.customerEmail && errors.customerEmail && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.customerEmail}
                </p>
              )}
            </div>

            {/* Row 3 */}
            <div>
              <label
                htmlFor="batch"
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-slate-200" : "text-gray-700"
                }`}
              >
                Preferred Batch
              </label>
              <input
                id="batch"
                type="text"
                name="batch"
                placeholder="Preferred Batch"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              />
              {touched.batch && errors.batch && (
                <p className="mt-1 text-sm text-red-500">{errors.batch}</p>
              )}
            </div>

            {/* Row 4 */}
            <div>
              <label
                htmlFor="occupation"
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-slate-200" : "text-gray-700"
                }`}
              >
                Occupation
              </label>
              <input
                id="occupation"
                type="text"
                name="occupation"
                placeholder="Occupation"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              />
              {touched.occupation && errors.occupation && (
                <p className="mt-1 text-sm text-red-500">{errors.occupation}</p>
              )}
            </div>

            {/* Row 5 */}
            <div>
              <label
                htmlFor="internship"
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-slate-200" : "text-gray-700"
                }`}
              >
                Preferred Internship
              </label>
              <input
                id="internship"
                type="text"
                name="internship"
                value={formData.internship}
                placeholder="Preferred Internship"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
                disabled
              />
              {touched.internship && errors.internship && (
                <p className="mt-1 text-sm text-red-500">{errors.internship}</p>
              )}
            </div>

            {/* Row 6 */}
            <div>
              <label
                htmlFor="address"
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-slate-200" : "text-gray-700"
                }`}
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              />
              {touched.address && errors.address && (
                <p className="mt-1 text-sm text-red-500">{errors.address}</p>
              )}
            </div>

            {/* Row 7 */}
            <div>
              <label
                htmlFor="state"
                className={`block text-sm font-medium mb-1 ${
                  darkMode ? "text-slate-200" : "text-gray-700"
                }`}
              >
                State
              </label>
              <input
                id="state"
                type="text"
                name="state"
                placeholder="State"
                onChange={handleChange}
                onBlur={handleBlur}
                className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-gray-900 border-gray-300"
                }`}
              />
              {touched.state && errors.state && (
                <p className="mt-1 text-sm text-red-500">{errors.state}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full font-medium py-3 rounded-md mt-6 ${
                isFormValid()
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-300 text-white cursor-not-allowed"
              }`}
            >
              {isFormValid() ? "Pay Now" : "Fill all required fields"}
            </button>
          </form>
        </div>
      </div>
      <div>
        <section className="w-full h-full flex flex-col items-center justify-center gap-10 z-10 my-4 md:my-10">
          <Faqs
            varient="refer and earn"
            Faqs={ReferAndEarnFaqs}
            darkMode={darkMode}
          />
        </section>
        <Footer />
        <Query />
        <ChatBot darkMode={darkMode} />
        <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
}

export default AffiliateTest;
