import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const Banner1 = "/assets/Enroll/Banner1.png";
import EnrollHeader from "../component/Enroll/EnrollHeader";
import EnrollPlan from "../component/Enroll/EnrollPlan";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";
const WebDevelopmentEnroll = ({ darkMode, setDarkMode, location }) => {
  const heading = "Web Development Course Pricing";

  return (
    <>
      <Helmet>
        <title>Full Stack Web Development Course Fees | Kre8ly</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content={`full stack web development course fees, full stack developer course cost, web development course fees, full stack course pricing, full stack course fees in ${location}, affordable full stack web development course`}
        />

        <meta
          name="description"
          content="Start your Full Stack Web Development journey at just ₹4449! Learn HTML, CSS, JS, React & more with hands-on projects. Enroll now at Kre8ly!"
        />

        <link
          rel="canonical"
          href="https://www.unifiedmentor.com/web-development-enroll"
        />

        {/* <!-- Open Graph / Facebook --> */}

        <meta
          property="og:title"
          content="Kre8ly | Web Development Course Pricing"
        />

        <meta
          property="og:description"
          content="Discover the pricing for Kre8ly's Web Development Course. Find flexible and affordable options to start your journey to becoming a skilled web developer with our online course and certification."
        />

        {/* <!-- Twitter --> */}

        <meta
          name="twitter:title"
          content="Kre8ly | Web Development Course Pricing"
        />
        <meta
          name="twitter:description"
          content="Check out the pricing for Kre8ly's Web Development Course. Choose from flexible and affordable options to enhance your coding skills and advance your career with our online certification."
        />

        {/* <!-- Additional Meta Tags --> */}

        <meta name="robots" content="index, follow" />
      </Helmet>

      
      {/* <EnrollHeader HeaderImage={Banner1} heading={heading} location={location} /> */}
      <EnrollPlan CourseName="Web Development" darkMode={darkMode} />
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default WebDevelopmentEnroll;
