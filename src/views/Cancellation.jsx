import React from "react";
import Footer from "../component/Footer";
import PrivacyHeader from "../component/PrivacyHeader";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";
const HeaderImage2 = "/assets/Cancellation/Cancellation%20and%20Refund.jpg";

const PolicyCard = ({ number, title, children }) => (
  <div className="flex gap-4 md:gap-6 bg-surface rounded-xl p-5 md:p-7 border border-transparent dark:border-line-strong shadow-sm dark:shadow-none">
    <span
      aria-hidden="true"
      className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full bg-brand text-brand-fg font-bold flex items-center justify-center text-sm md:text-base"
    >
      {number}
    </span>
    <div className="min-w-0">
      <h2 className="text-base md:text-xl font-semibold text-content mb-3">
        {title}
      </h2>
      {children}
    </div>
  </div>
);

const Body = ({ children }) => (
  <p className="text-sm md:text-base text-content-secondary mb-3 last:mb-0 leading-relaxed">
    {children}
  </p>
);

const Cancellation = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>Cancellation and Refund Policy | Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="cancellation policy, refund policy, Kre8ly, course refund, cancellation request"
        />
        <meta
          name="description"
          content="Read Kre8ly's clear and fair cancellation and refund policy. Understand your options for cancellations and refund requests with ease."
        />
        <meta name="robots" content="index, follow" />
        {/* this still said UnifiedMentor while every other tag said Kre8ly */}
        <meta
          name="twitter:title"
          content="Kre8ly | Cancellation and Refund"
        />
        <meta
          name="twitter:description"
          content="Kre8ly's guide on cancellation and refund policies for online courses. Find out more about our process and policies."
        />
        <link
          rel="canonical"
          href="https://unifiedmentor.com/cancellation-and-refund"
        ></link>
      </Helmet>

      <main className="w-full">
        <section
          id="hero"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="w-full bg-gradient-to-br from-brand via-brand-active to-brand-hover"
        >
          <PrivacyHeader
            br1="Join Our Team"
            br2="at Kre8ly"
            HeaderImage={HeaderImage}
            HeaderImage2={HeaderImage2}
            darkMode={darkMode}
            title="Cancellation and Refund"
            subtitle="Our cancellation and refund terms, stated plainly."
            desc="At Kre8ly, we value your trust. This policy sets out exactly when cancellations and refunds apply, so you know where you stand before you enrol."
          />
        </section>

        <section
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="max-w-4xl mx-auto py-8 px-4 md:py-14 md:px-10"
        >
          <p className="text-base md:text-lg text-content mb-8 leading-relaxed">
            We strive to provide you with the best possible learning experience
            through our online Courses on the Learning Management System (LMS).
            Below is our Cancellation and Refund Policy to guide you through the
            process.
          </p>

          <div className="space-y-5 md:space-y-6">
            <PolicyCard number="1" title="Cancellation Policy">
              {/* The no-refund term is the one thing a reader must not miss, so
                  it gets a callout rather than sitting inside body copy. */}
              <div className="border-l-4 border-warning bg-warning-subtle rounded-r-lg px-4 py-3 mb-3">
                <p className="text-sm md:text-base text-content font-semibold">
                  Kre8ly operates under a strict No Refund Policy for all Course
                  enrolments.
                </p>
              </div>
              <Body>
                Once a Course is purchased, no refunds will be issued,
                regardless of the circumstances. Please review the Course
                details and ensure your commitment before making a purchase.
              </Body>
            </PolicyCard>

            <PolicyCard number="2" title="Incomplete Course or Dissatisfaction">
              <Body>
                If you encounter any technical issues that hinder your learning
                experience, or if you are dissatisfied with the Course content,
                please contact our support team at{" "}
                <a
                  href="mailto:info@kre8ly.com"
                  className="text-info hover:underline"
                >
                  info@kre8ly.com
                </a>
                . We will make every effort to resolve the issue and ensure your
                learning journey is smooth and fulfilling.
              </Body>
            </PolicyCard>

            <PolicyCard number="3" title="Changes to Course Content and Pricing">
              <Body>
                We continually update and improve our Course offerings to
                provide the latest and most relevant content. As a result, the
                Course content, instructors, or pricing may change without prior
                notice.
              </Body>
              <Body>
                This Cancellation and Refund Policy applies only to Courses
                purchased directly through Kre8ly. For Courses purchased through
                third-party platforms or affiliates, please refer to their
                respective policies.
              </Body>
            </PolicyCard>
          </div>

          <div className="mt-8 md:mt-10 rounded-xl border border-line-strong px-5 py-5 md:px-7 md:py-6">
            <p className="text-sm md:text-base text-content-secondary leading-relaxed">
              If you have any questions or concerns regarding this policy, reach
              out to our support team at{" "}
              <a
                href="mailto:info@kre8ly.com"
                className="text-info hover:underline font-medium"
              >
                info@kre8ly.com
              </a>{" "}
              and we will help you out.
            </p>
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

export default Cancellation;