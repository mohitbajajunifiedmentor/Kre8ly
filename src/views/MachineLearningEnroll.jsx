import React from "react";
import Navbar from "../component/Navbar";
const Banner6 = "/assets/Enroll/Banner6.png";
import EnrollHeader from "../component/Enroll/EnrollHeader";
import EnrollPlan from "../component/Enroll/EnrollPlan";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const MachineLearningEnroll = ({ darkMode, setDarkMode, location }) => {

  const heading = " Machine Learning Course Pricing"

  return (
    <>
      <Helmet>
        <title>Machine Learning Course Fees & Packages  | Kre8ly</title>
        <meta
          name="description"
          content="Get complete details on Machine Learning Course Fees at Kre8ly. Affordable pricing, expert guidance, and flexible learning options available."
        />
        <meta
          name="keywords"
          content="machine learning course fees, machine learning course price, ML course fees, machine learning online course cost, AI course fees"
        />

        <link rel="canonical" href="https://www.kre8ly.com/machine-learning-enroll" />


        <meta
          name="author"
          content="Kre8ly | Machine Learning Enroll"
        />
      </Helmet>
      
      <EnrollHeader HeaderImage={Banner6} heading={heading} location={location} />
      <EnrollPlan CourseName="Machine Learning" />
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default MachineLearningEnroll;
