import Footer from "../component/Footer";
import PrivacyHeader from "../component/PrivacyHeader";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const HeaderImage = "/assets/Shipping-and-delivery/HeaderImg.png";
const HeaderImage2 = "/assets/privacy-policy-hero.jpg";

// Drives both the sidebar links and the section anchors, so a renamed section
// can never fall out of sync with its entry in the contents list.
const SECTIONS = [
  { id: "collect", title: "Information We Collect" },
  { id: "use", title: "How We Use Your Information" },
  { id: "protect", title: "How We Protect Your Information" },
  { id: "sharing", title: "Sharing of Information" },
  { id: "third-party", title: "Third-Party Links and Services" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
  { id: "grievance", title: "Grievance Redressal" },
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

const Privacy = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Privacy Policy, Kre8ly, Personal Information, Data Protection, User Privacy"
        />
        <link rel="canonical" href="https://unifiedmentor.com/privacy-policy" />
        <meta
          name="description"
          content="Read Kre8ly's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy matters to us."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kre8ly | Privacy Policy" />
        <meta
          property="og:description"
          content="Learn about how Kre8ly handles your personal information with our comprehensive Privacy Policy. Your privacy and data protection are our priorities."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kre8ly | Privacy Policy" />
        <meta
          name="twitter:description"
          content="Read Kre8ly's Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy is important to us."
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
              HeaderImage2={HeaderImage2}
              darkMode={darkMode}
              title="Privacy Policy"
              subtitle="Your privacy is our priority — here’s how we keep it safe."
              desc="Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our EdTech platform. By accessing and using our platform, you consent to the terms and practices described in this policy."
            />
          </section>

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 flex gap-10">
            {/* Sticky contents, matching the Terms page, so a reader can jump
                straight to the clause they came for. */}
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
              <Section id="collect" title="Information We Collect">
                <Body>
                  We may collect both personally identifiable information and
                  non-personally identifiable information from you when you use
                  our platform. This information may include but is not limited
                  to:
                </Body>
                <List>
                  <li>
                    Your name, email address, and contact information provided
                    during account registration.
                  </li>
                  <li>
                    Information about your usage of the platform, including
                    Courses taken, progress, quizzes, and assignments completed.
                  </li>
                  <li>
                    Device and browser information, IP address, and other
                    technical data collected automatically when you access the
                    platform.
                  </li>
                  <li>
                    Feedback, reviews, and comments you submit to us regarding
                    Courses and the platform.
                  </li>
                </List>
              </Section>

              <Section id="use" title="How We Use Your Information">
                <Body>
                  We use the information we collect for the following purposes:
                </Body>
                <List>
                  <li>
                    To create and manage your account on our platform, including
                    providing you with access to Courses and Course materials.
                  </li>
                  <li>
                    To communicate with you about your account, Course updates,
                    and platform-related announcements.
                  </li>
                  <li>
                    To analyze and improve our platform's performance, features,
                    and user experience.
                  </li>
                  <li>
                    To personalize your learning experience and suggest Courses
                    that may be of interest to you.
                  </li>
                  <li>
                    To respond to your inquiries, feedback, and support
                    requests.
                  </li>
                  <li>
                    To enforce our Terms and Conditions and protect the rights,
                    property, and safety of our platform and its users.
                  </li>
                </List>
              </Section>

              <Section id="protect" title="How We Protect Your Information">
                <Body>
                  We implement appropriate security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, or destruction. We use encryption, secure socket
                  layer technology (SSL), and regular security reviews to
                  safeguard your data. However, no method of transmission over
                  the internet or electronic storage is 100% secure, and we
                  cannot guarantee absolute security of your information.
                </Body>
              </Section>

              <Section id="sharing" title="Sharing of Information">
                <Body>
                  We may share your personal information with trusted
                  third-party service providers to help us operate and improve
                  our platform, as well as to process payments and provide
                  customer support. We do not sell, trade, or rent your personal
                  information to third parties for their marketing purposes.
                </Body>
              </Section>

              <Section id="third-party" title="Third-Party Links and Services">
                <Body>
                  Our platform may contain links to third-party websites or
                  services that are not owned or controlled by us. We are not
                  responsible for the privacy practices of these third-party
                  websites or services. We encourage you to review the privacy
                  policies of those third parties before providing any
                  information to them.
                </Body>
              </Section>

              <Section id="children" title="Children's Privacy">
                {/* Age limits are the clause parents actually come looking for,
                    so it gets a callout instead of sitting in body copy. */}
                <div className="border-l-4 border-warning bg-warning-subtle rounded-r-lg px-4 py-3 mb-4">
                  <p className="text-sm md:text-base text-content font-semibold">
                    Our platform is not intended for use by individuals under
                    the age of 13.
                  </p>
                </div>
                <Body>
                  If you are a parent or guardian and believe that your child
                  has provided us with personal information, please contact us
                  immediately, and we will take steps to remove that information
                  from our records.
                </Body>
              </Section>

              <Section id="changes" title="Changes to the Privacy Policy">
                <Body>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. We will notify you of any material changes
                  by posting the updated policy on this page, and the changes
                  will be effective immediately upon posting.
                </Body>
              </Section>

              <Section id="contact" title="Contact Us">
                <Body>
                  If you have any questions or concerns regarding this Privacy
                  Policy or your personal information, please get in touch:
                </Body>
                <a
                  href="mailto:info@kre8ly.com"
                  className="block sm:inline-block rounded-lg border border-line-strong px-4 py-3 hover:border-brand transition-colors"
                >
                  <span className="block text-xs uppercase tracking-wide text-content-muted mb-1">
                    Email
                  </span>
                  <span className="text-sm md:text-base font-medium text-content">
                    info@kre8ly.com
                  </span>
                </a>
              </Section>

              <Section id="grievance" title="Grievance Redressal Mechanism">
                <Body>
                  If you have any complaints, concerns, or grievances regarding
                  our platform, services, or handling of your information, you
                  may contact our Grievance Officer:
                </Body>
                {/* A definition list reads better than bullets here: each row
                    is a label and a value, not a list of similar items. */}
                <dl className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-lg border border-line-strong px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-content-muted mb-1">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:grievance@kre8ly.com"
                        className="text-sm md:text-base font-medium text-info hover:underline"
                      >
                        grievance@kre8ly.com
                      </a>
                    </dd>
                  </div>
                  <div className="rounded-lg border border-line-strong px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-content-muted mb-1">
                      Phone
                    </dt>
                    <dd>
                      <a
                        href="tel:+919518856261"
                        className="text-sm md:text-base font-medium text-info hover:underline"
                      >
                        +91 95188 56261
                      </a>
                    </dd>
                  </div>
                  <div className="rounded-lg border border-line-strong px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-content-muted mb-1">
                      Address
                    </dt>
                    <dd className="text-sm md:text-base font-medium text-content">
                      Gurugram, Haryana, India
                    </dd>
                  </div>
                  <div className="rounded-lg border border-line-strong px-4 py-3">
                    <dt className="text-xs uppercase tracking-wide text-content-muted mb-1">
                      Response Time
                    </dt>
                    <dd className="text-sm md:text-base font-medium text-content">
                      Within 48 hours
                      <span className="block text-xs font-normal text-content-muted mt-0.5">
                        maximum 15 days as per IT Rules 2021
                      </span>
                    </dd>
                  </div>
                </dl>
              </Section>
            </div>
          </div>

          <Query />
          <ChatBot darkMode={darkMode} />
        </main>
      </div>

      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default Privacy;