import React from "react";
import Footer from "../component/Footer";
import PrivacyHeader from "../component/PrivacyHeader";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import { Link } from "@/lib/router-compat";

const HeaderImg2 = "/assets/Terms%20and%20Conditions.jpg";
const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";

// Drives both the sidebar links and the section anchors, so a renamed section
// can never fall out of sync with its entry in the contents list.
const SECTIONS = [
  { id: "general", title: "Terms and Conditions" },
  { id: "user-terms", title: "Additional Terms for Users" },
  { id: "ip", title: "Intellectual Property" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "contact", title: "Contact Information" },
  { id: "effective-date", title: "Effective Date" },
  { id: "warranties", title: "Disclaimer of Warranties" },
  { id: "conduct", title: "Rules of Conduct" },
  { id: "data-consent", title: "Consent to Data Collection" },
  { id: "content-ownership", title: "Ownership of Content" },
  { id: "privacy", title: "Privacy and Protection" },
  { id: "restrictions", title: "User Restrictions" },
  { id: "modification", title: "Modification of Terms" },
  { id: "internship", title: "Internship Terms" },
];

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="scroll-mt-24 py-7 border-b border-line last:border-b-0"
  >
    <h2 className="text-lg lg:text-2xl font-semibold text-content mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const Body = ({ children }) => (
  <p className="text-sm md:text-base text-content-secondary mb-4 last:mb-0 leading-relaxed">
    {children}
  </p>
);

const List = ({ children }) => (
  <ul className="list-disc list-outside pl-5 space-y-3 text-sm md:text-base text-content-secondary leading-relaxed">
    {children}
  </ul>
);

const InternshipItem = ({ number, title, children }) => (
  <li className="flex gap-4 md:gap-5">
    <span
      aria-hidden="true"
      className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand text-brand-fg font-bold flex items-center justify-center text-sm"
    >
      {number}
    </span>
    <div className="min-w-0 flex-1">
      <h3 className="text-base md:text-lg font-semibold text-content mb-2">
        {title}
      </h3>
      <div className="text-sm md:text-base text-content-secondary leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  </li>
);

const TermsConditions = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Kre8ly</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="terms and conditions, Kre8ly, internship terms and conditions"
          name="keywords"
        />
        <meta
          content="Explore the terms and conditions for using Kre8ly's platform. Understand your rights, obligations, and rules for using our educational services."
          name="description"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://unifiedmentor.com/terms-and-conditions"
        />
      </Helmet>

      <div
        className={`w-full ${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        }`}
      >
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
              HeaderImage2={HeaderImg2}
              darkMode={darkMode}
              title="Terms and Conditions"
              subtitle="Clear guidelines for using our services responsibly and securely."
              desc="These Terms and Conditions outline the rules, responsibilities, and legal agreements between you and Kre8ly. By accessing our services, you agree to follow these terms designed to ensure fairness, transparency, and a safe user experience."
            />
          </section>

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 flex gap-10">
            {/* Sticky contents — 15 legal sections in one column is unreadable
                without a way to jump straight to the relevant clause. */}
            <nav
              aria-label="On this page"
              className="hidden lg:block w-64 shrink-0"
            >
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-wide text-content-muted mb-3">
                  On this page
                </p>
                <ul className="space-y-1 border-l border-line">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block -ml-px border-l-2 border-transparent hover:border-brand pl-3 py-1.5 text-sm text-content-secondary hover:text-content transition-colors"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="min-w-0 flex-1 bg-surface rounded-2xl border border-transparent dark:border-line-strong shadow-sm dark:shadow-none px-5 md:px-10 py-2 md:py-4">
              <Section id="general" title="Terms and Conditions">
                <Body>
                  By accessing and using this website ("Kre8ly"), you accept and
                  agree to be bound by the following terms and conditions:
                </Body>
                <List>
                  <li>
                    The content of this Website is for general information and
                    educational purposes only. It is subject to change without
                    notice.
                  </li>
                  <li>
                    Neither we nor any third parties provide any warranty or
                    guarantee as to the accuracy, timeliness, performance,
                    completeness, or suitability of the information and
                    materials found or offered on this Website for any
                    particular purpose. You acknowledge that such information
                    and materials may contain inaccuracies or errors, and we
                    expressly exclude liability for any such inaccuracies or
                    errors to the fullest extent permitted by law.
                  </li>
                  <li>
                    Your use of any information or materials on this Website is
                    entirely at your own risk, for which we shall not be liable.
                    It shall be your responsibility to ensure that any products,
                    services, or information available through this Website meet
                    your specific requirements.
                  </li>
                  <li>
                    This Website contains material that is owned by or licensed
                    to us. This material includes, but is not limited to, the
                    design, layout, look, appearance, and graphics. Reproduction
                    is prohibited other than in accordance with the copyright
                    notice, which forms part of these terms and conditions.
                  </li>
                  <li>
                    All trademarks reproduced on this Website that are not the
                    property of, or licensed to, the operator are acknowledged
                    on the Website.
                  </li>
                  <li>
                    Unauthorized use of this Website may give rise to a claim
                    for damages and/or be a criminal offense.
                  </li>
                  <li>
                    This Website may also include links to other websites. These
                    links are provided for your convenience to provide further
                    information. They do not signify that we endorse the
                    website(s).
                  </li>
                  <li>
                    We have no responsibility for the content of the linked
                    website(s). Your use of this Website and any dispute arising
                    out of such use is subject to the laws of Indian Government
                    or other regulatory authority.
                  </li>
                </List>
              </Section>

              <Section id="user-terms" title="Additional Terms for Users">
                <Body>
                  As a user of this EdTech platform, you agree to the following
                  terms:
                </Body>
                <List>
                  <li>
                    You must be at least 18 years old or have the consent of a
                    parent or legal guardian to use this platform.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account and password and for restricting access to your
                    computer or device to prevent unauthorized access to your
                    account.
                  </li>
                  <li>
                    You must provide accurate and complete information when
                    creating an account or making a purchase on this platform.
                  </li>
                  <li>
                    You agree not to use this platform for any illegal or
                    unauthorized purpose, and you must comply with all
                    applicable laws and regulations.
                  </li>
                  <li>
                    You will not share, sell, or distribute any Course
                    materials, including but not limited to videos, quizzes, and
                    assignments, without explicit permission from the platform
                    or Course instructors.
                  </li>
                  <li>
                    You will not engage in any activity that may disrupt or
                    interfere with the proper functioning of the platform,
                    including but not limited to using automated scripts, bots,
                    or any other unauthorized means to access the platform or
                    its content.
                  </li>
                  <li>
                    You understand that the platform may use cookies and other
                    tracking technologies to improve user experience and collect
                    usage data. By using the platform, you consent to the use of
                    cookies and tracking technologies as described in our
                    Privacy Policy.
                  </li>
                  <li>
                    You acknowledge that some Courses on this platform may
                    require additional software or hardware, and it is your
                    responsibility to ensure you have access to the necessary
                    tools to participate in the Course.
                  </li>
                  <li>
                    We reserve the right to suspend or terminate your account
                    and access to the platform if you violate any of the terms
                    and conditions outlined herein.
                  </li>
                </List>
              </Section>

              <Section id="ip" title="Intellectual Property">
                <Body>
                  All content available on this platform, including but not
                  limited to Course materials, videos, text, graphics, logos,
                  and images, are the intellectual property of the platform or
                  its content providers and are protected by copyright,
                  trademark, and other intellectual property laws. You may not
                  use, reproduce, distribute, or display any of the platform's
                  content without prior written permission from the platform or
                  the respective content owners.
                </Body>
              </Section>

              <Section id="liability" title="Limitation of Liability">
                <Body>
                  In no event shall the EdTech platform, its affiliates,
                  instructors, or partners be liable for any direct, indirect,
                  incidental, special, or consequential damages arising out of
                  or in connection with your use or inability to use the
                  platform or its content. This limitation of liability applies
                  to all claims, whether based on warranty, contract, tort, or
                  any other legal theory.
                </Body>
              </Section>

              <Section id="indemnification" title="Indemnification">
                <Body>
                  You agree to indemnify and hold harmless the EdTech platform,
                  its affiliates, instructors, and partners from any claims,
                  damages, losses, liabilities, and expenses (including
                  attorneys' fees) arising out of your use of the platform or
                  any violation of these terms and conditions.
                </Body>
                <Body>
                  We reserve the right to modify or amend these terms and
                  conditions without any prior notice. Your continued use of the
                  Website after any changes shall signify your acceptance of the
                  modified terms and conditions.
                </Body>
              </Section>

              <Section id="contact" title="Contact Information">
                <Body>
                  If you have any questions or need assistance regarding our
                  terms and conditions, please don't hesitate to contact us:
                </Body>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="mailto:info@kre8ly.com"
                    className="flex-1 rounded-lg border border-line-strong px-4 py-3 hover:border-brand transition-colors"
                  >
                    <span className="block text-xs uppercase tracking-wide text-content-muted mb-1">
                      Email
                    </span>
                    <span className="text-sm md:text-base font-medium text-content">
                      info@kre8ly.com
                    </span>
                  </a>
                  <a
                    href="tel:+919518856261"
                    className="flex-1 rounded-lg border border-line-strong px-4 py-3 hover:border-brand transition-colors"
                  >
                    <span className="block text-xs uppercase tracking-wide text-content-muted mb-1">
                      Phone
                    </span>
                    <span className="text-sm md:text-base font-medium text-content">
                      +91 95188 56261
                    </span>
                  </a>
                </div>
              </Section>

              <Section id="effective-date" title="Effective Date for Policy">
                <Body>
                  This Terms and Conditions policy is effective as of
                  04-08-2023. It is applicable to all users of the UnifiedMentor
                  EdTech platform.
                </Body>
              </Section>

              <Section
                id="warranties"
                title="Limitation of Liability and Disclaimer of Warranties"
              >
                <Body>
                  UnifiedMentor shall not be liable for any direct, indirect,
                  incidental, consequential, or special damages arising out of
                  or in connection with your use of the platform or its content.
                  The platform and its content are provided "as is" and without
                  any warranties of any kind, whether express or implied.
                  UnifiedMentor disclaims all warranties, including but not
                  limited to merchantability, fitness for a particular purpose,
                  and non-infringement.
                </Body>
              </Section>

              <Section id="conduct" title="Rules of Conduct">
                <Body>
                  As a user of the UnifiedMentor platform, you agree to adhere
                  to the following rules of conduct:
                </Body>
                <List>
                  <li>Respect other users and instructors on the platform.</li>
                  <li>
                    Do not share, distribute, or reproduce Course materials
                    without permission.
                  </li>
                  <li>
                    Do not engage in any activities that may disrupt or harm the
                    platform's functioning.
                  </li>
                  <li>
                    Do not violate any applicable laws or regulations while
                    using the platform.
                  </li>
                </List>
              </Section>

              <Section id="data-consent" title="Consent to Data Collection">
                <Body>
                  Students acknowledge that Kre8ly may collect and use their
                  images and placement details for inclusion in our marketing
                  materials and online presence.
                </Body>
              </Section>

              <Section id="content-ownership" title="Ownership of Content">
                <Body>
                  Kre8ly reserves the right to use, display, and reproduce
                  student data, including images and placement success stories,
                  for promotional purposes.
                </Body>
              </Section>

              <Section id="privacy" title="Privacy and Protection">
                <Body>
                  We are committed to safeguarding personal information and will
                  handle all data in accordance with relevant data protection
                  laws.
                </Body>
              </Section>

              <Section id="restrictions" title="User Restrictions">
                <Body>
                  By using the UnifiedMentor platform, you agree to the
                  following user restrictions:
                </Body>
                <List>
                  <li>
                    You must be at least 18 years old or have the consent of a
                    parent or legal guardian to use the platform.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account credentials and restricting access to your
                    account.
                  </li>
                  <li>
                    You may not use the platform for any illegal or unauthorized
                    purpose.
                  </li>
                  <li>
                    You may not access the platform using automated scripts,
                    bots, or unauthorized means.
                  </li>
                  <li>
                    You may not violate any intellectual property rights or
                    copyrights while using the platform.
                  </li>
                </List>
                <p className="text-sm md:text-base text-content-secondary mt-4 leading-relaxed">
                  Please read our{" "}
                  <Link
                    to="/privacy-policy"
                    className="text-info hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for information on how we collect, use, and protect your
                  personal information.
                </p>
              </Section>

              <Section id="modification" title="Modification of Terms">
                <Body>
                  UnifiedMentor reserves the right to modify or update these
                  terms and conditions at any time. The modified terms will be
                  effective upon posting on this page. We recommend reviewing
                  the terms regularly to stay informed about any changes.
                </Body>
              </Section>

              <Section id="internship" title="Internship Terms and Conditions">
                <Body>
                  Welcome to unifiedmentor.com (referred to as the "Site" or
                  "Kre8ly"), an online platform operated by UnifiedMentor
                  Technologies (hereinafter referred to as "Kre8ly"). These
                  terms and conditions ("Terms") constitute a legal agreement
                  between you and UnifiedMentor. Your use of this Site signifies
                  your unconditional acceptance of these Terms, including all
                  terms, policies, and guidelines referenced herein. These Terms
                  exclusively apply to your usage of this Site and do not
                  supersede any other existing agreements with UnifiedMentor or
                  its affiliated entities. If you are accessing the Site on
                  behalf of an organization, you further confirm that you have
                  the authority to accept these Terms on behalf of the entity,
                  which also agrees to indemnify UnifiedMentor against any
                  breaches of these Terms. If you do not agree with these terms,
                  please refrain from using this Site.
                </Body>
                <Body>
                  Individuals who wish to use this Site to apply for
                  opportunities posted on UnifiedMentor are herein referred to
                  as "Applicant" or "Applicants" as context dictates.
                </Body>

                <ol className="list-none space-y-7 mt-8">
                  <InternshipItem number="1" title="Opportunity Offer">
                    <p>
                      Participants selected for the internship opportunity will
                      receive an official offer letter prior to the commencement
                      date of the program. The offer letter will outline
                      essential details such as internship domain, duration, and
                      participation guidelines.
                    </p>
                  </InternshipItem>

                  <InternshipItem
                    number="2"
                    title="Swag &amp; Rewards Eligibility"
                  >
                    <p>
                      Eligibility for swag items, rewards, or recognition is
                      subject to fulfillment of specified participation and
                      performance requirements during the internship program.
                    </p>
                    <p>
                      Kre8ly maintains a strict policy regarding original work
                      and ethical participation. If any submitted code, project,
                      or assignment is found to be copied, plagiarized, or
                      submitted in violation of program guidelines, the
                      participant may be disqualified from rewards and may
                      become ineligible for future opportunities offered by
                      Kre8ly.
                    </p>
                  </InternshipItem>

                  <InternshipItem number="3" title="Stipend Policy">
                    {/* The unpaid-by-default term is the one a participant must
                        not miss, so it is called out rather than buried. */}
                    <div className="border-l-4 border-warning bg-warning-subtle rounded-r-lg px-4 py-3">
                      <p className="text-sm md:text-base text-content font-semibold">
                        This is generally an unpaid internship program.
                        Performance-based stipends are discretionary and not
                        guaranteed.
                      </p>
                    </div>
                    <p>
                      The internship program is primarily designed as a learning
                      and skill development opportunity and is generally
                      considered an unpaid internship program for both students
                      and experienced participants. However, performance-based
                      stipends may be awarded at the discretion of Kre8ly.
                    </p>
                    <p className="font-semibold text-content">
                      Key points regarding stipends:
                    </p>
                    <ul className="list-disc list-outside ml-5 space-y-2">
                      <li>Stipends are not guaranteed to every participant.</li>
                      <li>
                        Only the top-performing participants in each batch may
                        be considered.
                      </li>
                      <li>
                        Typically, up to the top 10% of the batch may be
                        eligible for stipend consideration.
                      </li>
                      <li>
                        The stipend amount may vary depending on individual
                        performance and participation.
                      </li>
                      <li>The maximum stipend amount may be up to ₹7,500.</li>
                    </ul>
                    <p className="text-sm italic text-content-muted">
                      * Kre8ly reserves the right to determine stipend
                      eligibility based on internal evaluation and program
                      guidelines.
                    </p>
                  </InternshipItem>

                  <InternshipItem
                    number="4"
                    title="Registration Data and Account Security"
                  >
                    <p>
                      To access and use the Kre8ly platform, participants agree
                      to:
                    </p>
                    <ul className="list-disc list-outside ml-5 space-y-2">
                      <li>
                        Provide accurate, complete, and up to date information
                        during registration.
                      </li>
                      <li>
                        Maintain and update their registration information as
                        necessary.
                      </li>
                      <li>
                        Ensure the confidentiality and security of login
                        credentials.
                      </li>
                      <li>
                        Immediately notify Kre8ly of unauthorized use of their
                        account.
                      </li>
                      <li>
                        Accept responsibility for all activities conducted under
                        their account.
                      </li>
                      <li>
                        Acknowledge risks associated with unauthorized access to
                        provided information.
                      </li>
                    </ul>
                  </InternshipItem>

                  <InternshipItem
                    number="5"
                    title="Jurisdiction and Governing Law"
                  >
                    <p>
                      Any disputes, claims, or legal matters arising from
                      participation in the internship program or use of the
                      Kre8ly website shall be governed by the laws of India. All
                      legal proceedings shall fall under the exclusive
                      jurisdiction of the competent courts in India.
                    </p>
                  </InternshipItem>

                  <InternshipItem
                    number="6"
                    title="Platform Access &amp; Administrative Fees"
                  >
                    <p>
                      Kre8ly provides access to various digital platforms
                      designed to enhance the learning and internship
                      experience. These platforms may include:
                    </p>
                    <ul className="list-disc list-outside ml-5 space-y-2">
                      <li>Learning Management System (LMS)</li>
                      <li>Project portal for assignments and evaluation</li>
                      <li>Technical servers or infrastructure access</li>
                      <li>ATS CV score checker</li>
                      <li>Resume builder tools</li>
                      <li>Job portal and opportunity listings</li>
                      <li>Internship documentation systems</li>
                    </ul>
                    <p>
                      A platform or administrative fee may apply depending on
                      the selected plan to support technology infrastructure,
                      server hosting, content delivery, documentation
                      processing, and operational services. Participants are
                      informed of any applicable fees during the enrollment
                      process.
                    </p>
                  </InternshipItem>

                  <InternshipItem number="7" title="Platform Usage Policy">
                    <p>
                      Access to Kre8ly’s digital platforms is provided solely
                      for learning and internship-related purposes. Unauthorized
                      use, sharing of login credentials, or misuse of platform
                      resources may result in suspension or termination of
                      access at the discretion of Kre8ly.
                    </p>
                  </InternshipItem>
                </ol>
              </Section>
            </div>
          </div>

          <Query />
        </main>
      </div>

      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default TermsConditions;