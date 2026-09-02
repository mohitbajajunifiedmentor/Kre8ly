import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "@/lib/router-compat";
import { useDispatch, useSelector } from "react-redux";
// import { fetchSubCategories } from "../../Redux-setup/actions/courseActions";
// import { createLink } from "../../Redux-setup/actions/linkActions";
const course_image = "/assets/ReferAndEarn/course_img.svg";
const insta = "/assets/ReferAndEarn/insta.svg";
const facebook = "/assets/ReferAndEarn/facebook.svg";
const whatsapp = "/assets/ReferAndEarn/whatsapp.svg";
import ApiRequest from "../../Utils/Axios/Axios";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "@/lib/router-compat";

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

const SubCategoriesPage = () => {
  const { categoriesId } = useParams(); // get course/category id from URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setSelectedSub("");
    setReferalCode("");
  };

  const { courses: allSubcategories, loading } = useSelector(
    (state) => state.affiliate
  );

  const [selectedSub, setSelectedSub] = useState("");
  const [referalCode, setReferalCode] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const generateReferral = (length = 8) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < length; i++)
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    return code;
  };

  // Example: If you want to load subcategories from API
  // useEffect(() => {
  //   if (categoriesId) {
  //     dispatch(fetchSubCategories(categoriesId));
  //   }
  // }, [dispatch, categoriesId]);

  // If categoriesId === 2, filter subcategories, else show empty
  const subcategories = categoriesId === "2" ? allSubcategories : [];

  // const handleCreateLink = async (subId) => {
  //   const token = localStorage.getItem("affiliateToken");

  //   if (!token) {
  //     return alert("Please log in to create an affiliate link.");
  //   }

  //   try {
  //     // Optional: show loader if you have one
  //     // setLoading(true);

  //     // Step 1️⃣: Fetch existing affiliate links
  //     const listRes = await ApiRequest.get("/affiliate", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     // console.log("Affiliate List Response:", listRes?.data);

  //     if (!listRes?.data) {
  //       throw new Error("Failed to fetch affiliate links.");
  //     }

  //     const links = listRes?.data?.links || [];

  //     // Step 2️⃣: Check if a link already exists for this course
  //     const existing = links.find(
  //       (l) =>
  //         String(l.course) === String(subId) ||
  //         (l.course && l.course._id && String(l.course._id) === String(subId))
  //     );

  //     if (existing) {
  //       const finalLink =
  //         existing.link ||
  //         `${window.location.origin}/course/${subId}?ref=${
  //           existing.code || existing._id
  //         }`;

  //       setSelectedSub(subId);
  //       setReferalCode(existing.code || existing._id || "");
  //       setLinkUrl(finalLink);
  //       openModal();
  //       return;
  //     }

  //     // Step 3️⃣: Create a new affiliate link if none exists
  //     const res = await ApiRequest.post(
  //       "/affiliate",
  //       { courseId: subId },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     console.log("Affiliate Create Response:", res?.data);

  //     if (!res?.data?.landingUrl) {
  //       throw new Error("Failed to create affiliate link.");
  //     }

  //     const link = res?.data;
  //     const finalLink =
  //       link.landingUrl ||
  //       `${window.location.origin}/course/${subId}?ref=${
  //         link.code || link._id
  //       }`;

  //     setSelectedSub(subId);
  //     setReferalCode(link.code || link._id || "");
  //     setLinkUrl(finalLink);
  //     openModal();
  //   } catch (err) {
  //     console.error("Affiliate Link Error:", err);

  //     // Extract a meaningful message
  //     const message =
  //       err.response?.data?.message ||
  //       err.message ||
  //       "Something went wrong while creating the affiliate link.";

  //     // Handle unauthorized case specifically
  //     if (err.response?.status === 401) {
  //       alert("Your session has expired. Please log in again.");
  //       localStorage.removeItem("affiliateToken");
  //       window.location.href = "/affiliate-login";
  //       return;
  //     }

  //     alert(message);
  //   }
  // };

  const handleCreateLink = async (subId) => {
    const token = localStorage.getItem("affiliateToken");

    if (!token) {
      return alert("Please log in to create an affiliate link.");
    }

    try {
      // Create or fetch affiliate link for this course
      const res = await ApiRequest.post(
        "/affiliate",
        { courseId: subId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const { landingUrl, affiliateCode } = res?.data;

      if (!landingUrl || !affiliateCode) {
        throw new Error("Failed to get affiliate link from server.");
      }

      // Set states and open modal
      setSelectedSub(subId);
      setReferalCode(affiliateCode);
      setLinkUrl(landingUrl);
      openModal();
    } catch (err) {
      console.error("Affiliate Link Error:", err);

      const message =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong while creating the affiliate link.";

      if (err.response?.status === 401) {
        alert("Your session has expired. Please log in again.");
        localStorage.removeItem("affiliateToken");
        window.location.href = "/affiliate-login";
        return;
      }

      alert(message);
    }
  };

  const getCourseImage = (name = "") => {
    const lower = name.toLowerCase();
    if (lower.includes("web")) return WebDev;
    if (lower.includes("data science")) return DataScience;
    if (lower.includes("digital marketing")) return DigitalMarketing;
    if (lower.includes("machine learning")) return MachineLearning;
    if (lower.includes("ui") || lower.includes("ux")) return UXUIDesigner;
    if (lower.includes("data analyst")) return DataAnalyst;
    if (lower.includes("graphic")) return GraphicDesign;
    if (lower.includes("financial")) return Financial;
    if (lower.includes("business")) return Business;
    if (lower.includes("front")) return FrontEnd;
    if (lower.includes("back")) return BackEnd;
    if (lower.includes("research")) return Research;
    if (lower.includes("cyber")) return CyberSecurityImage;
    if (lower.includes("block")) return BlockChainImage;
    if (lower.includes("fellowship web")) return fellowshipWeb;
    if (lower.includes("data science fellow")) return DataScienceFell;
    if (lower.includes("ml fellow")) return MachineLearnFellow;
    if (lower.includes("digital marketing fellow"))
      return DigitalMarketingFellow;
    if (lower.includes("ui fellow")) return UIFellow;
    return course_image;
  };

  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Subcategories
      </h2>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 ">
          <div
            className={`w-full max-w-4xl rounded-lg shadow-lg p-4 md:px-20 md:py-12 transition-colors duration-300
      bg-white text-gray-900 dark:bg-[#1A212A] dark:text-white`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-base md:text-lg">
                Link Copied — Share with your friends
              </h2>
              <button
                onClick={closeModal}
                className="text-2xl leading-none bg-[#395172] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#2e405b] transition"
              >
                ×
              </button>
            </div>

            {/* Link + Copy Button */}
            <div className="my-3 flex flex-col md:flex-row gap-3">
              <input
                type="text"
                value={
                  linkUrl ||
                  (selectedSub
                    ? `${window.location.origin}/course/${selectedSub}?ref=${referalCode}`
                    : "")
                }
                readOnly
                className="w-1/2 p-3 rounded text-sm border border-gray-300 dark:border-gray-700
          bg-gray-100 dark:bg-[#252d38] text-content placeholder-gray-500"
              />
              <button
                className="p-2 rounded bg-[#395172] text-white text-sm hover:bg-[#2e405b] transition"
                onClick={() => {
                  const toCopy =
                    linkUrl ||
                    (selectedSub
                      ? `${window.location.origin}/course/${selectedSub}?ref=${referalCode}`
                      : "");
                  if (toCopy)
                    navigator.clipboard
                      .writeText(toCopy)
                      .then(() => alert("Link copied!"));
                }}
              >
                Copy Link
              </button>
            </div>

            {/* Social Share Buttons */}
            <div className="flex flex-wrap gap-10 mb-4">
              <Link to={""}>
                <img src={whatsapp} alt="" />
              </Link>
              <Link to={""}>
                <img src={facebook} alt="" />
              </Link>
              <Link to={""}>
                <img src={insta} alt="" />
              </Link>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-8">
              <div className="flex-1 border-t border-line"></div>
              <h2 className="text-sm md:text-base text-gray-600 dark:text-[#B7B7B7] whitespace-nowrap">
                Share via Email
              </h2>
              <div className="flex-1 border-t border-line"></div>
            </div>

            <p className="text-base text-content-secondary md:mb-4">
              Invite a friend via email
            </p>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-1/2 p-2 rounded-l border border-gray-300 dark:border-gray-700
          bg-gray-100 dark:bg-[#252d38] text-content placeholder-gray-500"
              />
              <button className="bg-[#395172] text-sm text-white px-4 py-2.5 rounded-r hover:bg-[#2e405b] transition">
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : (
        <>
          {Array.isArray(subcategories) && subcategories.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subcategories.map((sub) => (
                <div
                  key={sub._id}
                  className="border border-line rounded-lg shadow-md p-4 bg-surface flex flex-col justify-between hover:scale-105 transition duration-300 ease-in-out"
                >
                  {/* Image */}
                  <img
                    src={getCourseImage(sub.name)}
                    alt={sub.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />

                  <div className="flex justify-between items-center">
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                      {sub.name}
                    </h3>

                    {/* Commission */}
                    {/* <p className="text-sm mb-3">
                  <span className="font-medium">Commission:</span>
                  {(sub.commissionRate || 0) * 100}%
                </p> */}

                    {/* Button */}
                    <button
                      onClick={() => handleCreateLink(sub._id)}
                      className=" w-10 h-10 bg-[#355082] rounded-full flex items-center justify-center"
                    >
                      <FaArrowRight className="text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className=" p-4 bg-inherit dark:bg-gray-800 flex flex-col items-center justify-center px-6 w-full">
                {/* Animated Logo / Heading */}
                <h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-6xl font-bold mb-4 text-center"
                >
                  🚀 Coming <span className="text-indigo-400">Soon</span>
                </h1>

                <p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-[#7B7B7B] dark:text-gray-400 mb-10 text-center max-w-md"
                >
                  We’re working hard to bring you something amazing! Stay tuned
                  for the launch.
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SubCategoriesPage;
