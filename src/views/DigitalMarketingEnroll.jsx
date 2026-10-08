import React from "react";
import Navbar from "../component/Navbar";
const Banner5 = "/assets/Enroll/Banner5.png";
import EnrollHeader from "../component/Enroll/EnrollHeader";
import EnrollPlan from "../component/Enroll/EnrollPlan";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const DigitalMarketingEnroll = ({ darkMode, setDarkMode, location }) => {

  const heading = "Digital Marketing Course Pricing"

  return (
    <>
      <Helmet>
        <title>Online Digital Marketing Course Fees & Pricing | Kre8ly</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content={`online digital marketing course fees, digital marketing course pricing, digital marketing course cost, digital marketing course fees in ${location},`}
        />

        <link rel="canonical" href="https://www.kre8ly.com/digital-marketing-enroll" />

        <meta
          name="description"
          content="Explore online digital marketing course fees & pricing. Learn SEO, PPC, social media, email marketing & more. Compare costs & choose the right course."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Best Digital Marketing Certification in ${location} with Placement`}
        />

        <meta
          property="og:description"
          content={`Join our top-rated Digital Marketing Certification in ${location}, featuring practical assignments and placement assistance to boost your career in digital marketing.`}
        />

        {/* <!-- Twitter --> */}

        <meta
          name="twitter:title"
          content={`Best Digital Marketing Certification in ${location} with Placement`}
        />
        <meta
          name="twitter:description"
          content={`Get certified in Digital Marketing with our top program in ${location}. Benefit from hands-on assignments and placement support to advance your career in marketing.`}
        />

        {/* <!-- Additional Meta Tags --> */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      
      <EnrollHeader HeaderImage={Banner5} heading={heading} location={location} />
      <EnrollPlan CourseName="Digital Marketing" />
      <Query />
      <ChatBot darkMode={darkMode} />
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default DigitalMarketingEnroll;
