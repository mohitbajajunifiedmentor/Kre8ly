import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Banner2 = "/assets/Enroll/Banner2.png";
import EnrollHeader from "../component/Enroll/EnrollHeader";
import EnrollPlan from "../component/Enroll/EnrollPlan";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const DataScienceEnroll = ({ darkMode, setDarkMode, location }) => {

  const heading = "Data Science Course Pricing"

  return (
    <>
      <Helmet>
        <title>Online Data Science Course Fees & Price | Kre8ly</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content="Online Data Science Course Fees, Data Science Course Price, Data Science Course Fees, Online Data Science Course, Affordable Data Science Course, Data Science Course Cost Online"
        />

        <meta
          name="description"
          content="Discover Online Data Science Course Fees & Price at Kre8ly. Learn Python, ML, SQL & more with hands-on projects. Enroll now!"
        />

        <link rel="canonical" href="https://www.kre8ly.com/data-science-enroll" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta
          property="og:title"
          content="Kre8ly | Enroll in Data Science Course"
        />
        <meta
          property="og:description"
          content="Enroll now in Kre8ly's Data Science Course to acquire vital data science skills. Our online course offers in-depth training and practical experience to prepare you for a successful career in data science."
        />

        {/* <!-- Twitter --> */}
        <meta
          name="twitter:title"
          content="Kre8ly | Enroll in Data Science Course"
        />
        <meta
          name="twitter:description"
          content="Discover Kre8ly's Data Science Course. Enroll now to gain key skills in data science and advance your career with our comprehensive online training."
        />

        {/* <!-- Additional Meta Tags --> */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      
      <EnrollHeader HeaderImage={Banner2} heading={heading} location={location} />
      <EnrollPlan CourseName="Data Science" />
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default DataScienceEnroll;
