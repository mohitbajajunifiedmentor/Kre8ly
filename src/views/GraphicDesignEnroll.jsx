import React from "react";
import { Helmet } from "@/lib/helmet-compat";
import Navbar from "../component/Navbar";
import EnrollHeader from "../component/Enroll/EnrollHeader";
import EnrollPlan from "../component/Enroll/EnrollPlan";
import Query from "../component/Query/Query";
import Footer from "../component/Footer";
const Banner4 = "/assets/GraphicDesign/Banner5.png";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const GraphicDesignEnroll = ({ darkMode, setDarkMode, location }) => {

  const heading = "Graphic Design Course Pricing";

  return (
    <>
      <Helmet>
        <title>Graphic Design Course Fees | Kre8ly</title>
        <meta
          name="description"
          content="Kre8ly | UI/UX Designer Enroll"
        />
        <meta
          name="keywords"
          content="Kre8ly | UI/UX Designer Enroll"
        />
        <meta name="author" content="Kre8ly | UI/UX Designer Enroll" />
      </Helmet>
      
      <EnrollHeader HeaderImage={Banner4} heading={heading} location={location} />
      <EnrollPlan CourseName="Graphic Design" />
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default GraphicDesignEnroll;
