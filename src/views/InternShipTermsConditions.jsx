import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const HeaderImg2 = "/assets/Terms.png";
const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";
import PrivacyHeader from "../component/PrivacyHeader";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const InternShipTermsConditions = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>UnifiedMentor | Internship Terms & Conditions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="internship terms, internship conditions, UnifiedMentor internship, internship agreement, internship policies"
        />
        <meta
          name="description"
          content="Review the terms and conditions for internships at UnifiedMentor. Understand our policies, eligibility criteria, and guidelines for a successful internship experience."
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta
          property="og:title"
          content="UnifiedMentor | Internship Terms & Conditions"
        />
        <meta
          property="og:description"
          content="Explore the terms and conditions for internships at UnifiedMentor. Learn about our policies, eligibility, and guidelines to ensure a successful internship experience."
        />
        {/* <!-- Twitter --> */}
        <meta
          name="twitter:title"
          content="UnifiedMentor | Internship Terms & Conditions"
        />
        <meta
          name="twitter:description"
          content="Understand the terms and conditions for UnifiedMentor internships. Get details on our policies, eligibility, and guidelines to make the most of your internship opportunity."
        />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.kre8ly.com/internship-terms-and-conditions" />


      </Helmet>
      
      <div className="w-full bg-blue-900 flex flex-col items-center">
        <PrivacyHeader
          br1="Kre8ly"
          br2="Internship"
          br3="Terms and Conditions"
          HeaderImage={HeaderImage}
          HeaderImage2={HeaderImg2}
          variant="Terms"
        />
        <main className="w-full container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="my-8">
            <h2
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-lg md:text-3xl text-content font-bold text-center mb-6 dark:text-white">
              Internship Terms and Conditions
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-xs md:text-sm  mb-8 text-content  text-left">
              Welcome to unifiedmentor.com (referred to as the "Site" or
              "Kre8ly"), an online platform operated by UnifiedMentor
              Technologies (hereinafter referred to as "Kre8ly"). These
              terms and conditions ("Terms") constitute a legal agreement
              between you and UnifiedMentor. Your use of this Site signifies
              your unconditional acceptance of these Terms, including all terms,
              policies, and guidelines referenced herein. These Terms
              exclusively apply to your usage of this Site and do not supersede
              any other existing agreements with UnifiedMentor or its affiliated
              entities. If you are accessing the Site on behalf of an
              organization, you further confirm that you have the authority to
              accept these Terms on behalf of the entity, which also agrees to
              indemnify UnifiedMentor against any breaches of these Terms. If
              you do not agree with these terms, please refrain from using this
              Site.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="800"
              className="text-xs md:text-sm  mb-8 text-content text-left">
              Individuals who wish to use this Site to apply for opportunities
              posted on UnifiedMentor are herein referred to as "Applicant" or
              "Applicants" as context dictates.
            </p>
          </section>
          <section>
            <div className="mb-8">
              <h3 className=" font-bold text-left mb-4 text-lg md:text-3xl text-content">
                Key Terms & Conditions:
              </h3>
              <ul
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="800"
                className="list-none text-xs md:text-sm pl-5 text-content">
                <li className="mb-4">
                  <strong>1. Opportunity Offer:</strong> You will receive an
                  offer letter for your opportunity before the start date.
                </li>
                <li className="mb-4">
                  <strong>2. Swag Eligibility:</strong> Eligibility for swag
                  items is contingent on meeting specified requirements.
                  Additionally, if your code is found to be copied, you may be
                  disqualified from participating in future opportunities on
                  UnifiedMentor.
                </li>
                <li className="mb-4">
                  <strong>3. Stipend or Payment:</strong> This is an unpaid
                  internship program for both students and experienced
                  individuals.
                </li>
                <li className="mb-4">
                  <strong>4. Registration Data and Account Security:</strong> To
                  use the Site, you agree to: (a) provide accurate, up-to-date,
                  and complete information as prompted in any registration forms
                  on the Site ("Registration Data"); (b) keep the Registration
                  Data and any other information you provide to UnifiedMentor
                  accurate, current, and complete; (c) ensure the security of
                  your password and identification; (d) promptly report any
                  unauthorized account use or security breaches to us; (e)
                  assume responsibility for all activities under your account;
                  and (f) accept the risk of unauthorized access to the
                  Registration Data and any other information provided to
                  UnifiedMentor.
                </li>
                <li className="mb-4">
                  <strong>5. Jurisdiction:</strong> Any legal matters, license
                  agreements, or disputes arising from your use of this website
                  will be subject to Indian law and the exclusive jurisdiction
                  of Indian courts.
                </li>
                <li className="mb-4">
                  <strong>6. Document Fees:</strong> While we offer this
                  opportunity without charge, there are nominal expenses related
                  to document processing, such as offer letter creation,
                  internship certificate, and swag delivery. A plan-specific fee
                  is applicable for these services, while UnifiedMentor covers
                  other expenses such as webinars, training, and onboarding.
                </li>
              </ul>
              <p className="text-base md:text-xl mb-8 text-white text-left">
                {" "}
                Please read our complete Terms and Conditions for more details.
              </p>
            </div>
          </section>
          <Query />
          <ChatBot darkMode={darkMode} />
        </main>
      </div>
      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default InternShipTermsConditions;
