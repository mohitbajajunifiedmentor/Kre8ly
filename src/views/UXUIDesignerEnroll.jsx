import React from "react";
import Navbar from "../component/Navbar";
const Banner4 = "/assets/Enroll/Banner4.png";
import EnrollHeader from "../component/Enroll/EnrollHeader";
import EnrollPlan from "../component/Enroll/EnrollPlan";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";

const UXUIDesignerEnroll = ({ darkMode, setDarkMode, location }) => {

  const heading = "UI UX Design Course Pricing"

  return (
    <>
      <Helmet>
        <title>UI UX Design Course Fees & Pricing | Kre8ly</title>
        <meta
          name="description"
          content="Discover UI UX design course fees at Kre8ly. Get detailed pricing, expert-led training & career-ready skills to start your journey in design."
        />
        <meta
          name="keywords"
          content={`ui ux design course fees, ui ux course fees in ${location}, ui ux design course price, ui ux course cost, ui ux design course fee structure, ui ux course price comparison, ui ux design course fee list, cost of ui ux course in ${location}, ui ux course fees 2025, best ui ux course pricing`}
        />

        <link rel="canonical" href="https://www.unifiedmentor.com/ui-ux-designer-enroll" />


        <meta name="author" content="Kre8ly | UI/UX Designer Enroll" />
      </Helmet>
      
      <EnrollHeader HeaderImage={Banner4} heading={heading} location={location} />
      <EnrollPlan CourseName="UI/UX Designer" />
      <Query />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default UXUIDesignerEnroll;
