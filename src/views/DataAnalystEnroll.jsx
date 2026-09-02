import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Banner3 = "/assets/Enroll/Banner3.png";
import EnrollPlan from "../component/Enroll/EnrollPlan";
import EnrollHeader from "../component/Enroll/EnrollHeader";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const DataAnalystEnroll = ({ darkMode, setDarkMode, location }) => {

  const heading = "Data Analyst Course Pricing";

  return (
    <>
      <Helmet>
        <title>Online Data Analyst Course Fees & Pricing | Kre8ly</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content="Kre8ly, enroll data analyst course, data analysis enrollment, online course registration, data science training"
        />

        <meta
          name="description"
          content="Start your journey with Kre8ly's Data Analyst Course by enrolling today. Our online course offers comprehensive training in data analysis, providing you with the skills needed to excel in the data science field."
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta
          property="og:title"
          content="Kre8ly | Enroll in Data Analyst Course"
        />
        <meta
          property="og:description"
          content="Enroll now in Kre8ly's Data Analyst Course and gain essential data analysis skills. Our online program prepares you for a successful career in data science with expert instruction and hands-on experience."
        />

        {/* <!-- Twitter --> */}
        <meta
          name="twitter:title"
          content="Kre8ly | Enroll in Data Analyst Course"
        />
        <meta
          name="twitter:description"
          content="Enroll in Kre8ly's Data Analyst Course to develop crucial skills in data analysis. Join now and start your path to becoming a data science expert with our online course."
        />
        {/* <!-- Additional Meta Tags --> */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      
      <EnrollHeader HeaderImage={Banner3} heading={heading} location={location} />
      <EnrollPlan CourseName="Data Analyst" />
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default DataAnalystEnroll;
