import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PrivacyHeader from "../component/PrivacyHeader";
const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";
const HeaderImage2 = "/assets/privacy-policy-hero.jpg";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const GrievanceOfficer = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>Grievance Officer | Kre8ly</title>
        <meta
          name="description"
          content="Contact our grievance officer for complaints or concerns related to services."
        />
      </Helmet>

      <main className="w-full">
        {/* HERO SECTION (Same as Privacy) */}
        <section className="w-full bg-gradient-to-br from-brand via-brand-active to-brand-hover">
          <PrivacyHeader
            br1="Need Help?"
            br2="We’re Here"
            HeaderImage={HeaderImage}
            HeaderImage2={HeaderImage2}
            darkMode={darkMode}
            title="Grievance Redressal"
            subtitle="Your concerns matter — we’re here to resolve them."
            desc="If you have any complaints, issues, or concerns regarding our services, please reach out to our grievance officer. We are committed to resolving your concerns promptly and transparently."
          />
        </section>

        {/* CONTENT SECTION */}
        <section className="py-6 px-4 md:py-12 md:px-10">
          <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10">

            <h3 className="text-lg lg:text-2xl font-semibold text-content mb-4">
              Grievance Officer Details
            </h3>

            <p className="text-base md:text-lg mb-6 dark:text-white">
              For any complaints, feedback, or issues related to our platform or services, please contact:
            </p>

            <div className="space-y-4 text-sm md:text-base text-content dark:text-gray-200">
              
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:grievance@kre8ly.com"
                  className="text-info hover:underline"
                >
                  grievance@kre8ly.com
                </a>
              </div>

              <div>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919518856261"
                  className="text-info hover:underline"
                >
                  +91 9518856261
                </a>
              </div>

              <div>
                <strong>Address:</strong> Gurugram, Haryana, India
              </div>

              <div>
                <strong>Response Time:</strong> Within 48 hours (maximum 15 days as per IT Rules 2021)
              </div>

            </div>
          </div>
        </section>

        <Query />
        <ChatBot darkMode={darkMode} />
      </main>

      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default GrievanceOfficer;