import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  UserCheck,
  Award,
  AlertTriangle,
  Shield,
  Phone,
  Calendar,
  ShieldAlert,
  CheckCircle2,
  Database,
  Lock,
  Ban,
  RefreshCw,
  GraduationCap,
  ChevronRight,
  Search,
  Mail,
  Scale
} from "lucide-react";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import { Link } from "@/lib/router-compat";

const SECTIONS = [
  { id: "general", title: "Terms and Conditions", icon: FileText },
  { id: "user-terms", title: "Additional Terms for Users", icon: UserCheck },
  { id: "ip", title: "Intellectual Property", icon: Award },
  { id: "liability", title: "Limitation of Liability", icon: AlertTriangle },
  { id: "indemnification", title: "Indemnification", icon: Shield },
  { id: "contact", title: "Contact Information", icon: Phone },
  { id: "effective-date", title: "Effective Date", icon: Calendar },
  { id: "warranties", title: "Disclaimer of Warranties", icon: ShieldAlert },
  { id: "conduct", title: "Rules of Conduct", icon: CheckCircle2 },
  { id: "data-consent", title: "Consent to Data Collection", icon: Database },
  { id: "content-ownership", title: "Ownership of Content", icon: Award },
  { id: "privacy", title: "Privacy and Protection", icon: Lock },
  { id: "restrictions", title: "User Restrictions", icon: Ban },
  { id: "modification", title: "Modification of Terms", icon: RefreshCw },
  { id: "internship", title: "Internship Terms", icon: GraduationCap },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

/* --- Modern Compact Split Hero Section --- */
const TermsHeroSection = () => {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    const match = SECTIONS.find((s) =>
      s.title.toLowerCase().includes(query.toLowerCase())
    );
    if (match) {
      const el = document.getElementById(match.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full pt-10 sm:pt-14 md:pt-16 pb-6 md:pb-8 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Heading & Search */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/25 bg-brand/10 dark:bg-brand/15 text-brand text-xs font-semibold mb-2.5 shadow-sm"
            >
              <Scale className="w-3.5 h-3.5 text-brand" />
              <span>Legal & User Guidelines</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-content leading-tight"
            >
              Terms of Service. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
                Fair, Clear & Binding.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-2.5 text-xs sm:text-sm md:text-base text-content-secondary max-w-xl leading-relaxed"
            >
              Please read these Terms and Conditions carefully before using Kre8ly. They define your rights, obligations, and internship rules across all our learning platforms.
            </motion.p>

            {/* In-Page Quick Filter */}
            <motion.form
              onSubmit={handleSearchSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-4 w-full max-w-md relative"
            >
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-content-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to clause (e.g., stipend, internship, refund)..."
                className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-surface/90 dark:bg-surface/50 border border-line focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-xs sm:text-sm text-content placeholder:text-content-muted shadow-sm outline-none"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-brand hover:bg-brand-hover text-white text-xs font-semibold shadow-sm transition-all"
              >
                Search
              </button>
            </motion.form>
          </div>

          {/* Right Column: Terms Highlight Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 w-full"
          >
            <div className="rounded-2xl border border-line bg-surface/90 dark:bg-surface/40 p-4 sm:p-5 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-line pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-content">
                    Agreement Overview
                  </span>
                </div>
                <span className="text-[10px] font-medium text-content-muted px-2 py-0.5 rounded-md bg-surface-variant/40">
                  Indian Jurisdiction
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs font-bold text-content">Internships</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Learning-oriented, merit rewards & guidelines.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-bold text-content">IP Protection</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    All curriculum and platform assets reserved.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-3.5 h-3.5 text-info" />
                    <span className="text-xs font-bold text-content">Data Safety</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Full adherence to India data privacy laws.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" />
                    <span className="text-xs font-bold text-content">Active Status</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Effective and updated for all users.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* --- Section UI Helpers --- */
const Section = ({ id, title, icon: Icon, children }) => (
  <motion.section
    id={id}
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    className="scroll-mt-20 py-5 border-b border-line/60 last:border-b-0"
  >
    <div className="flex items-center gap-2.5 mb-3.5">
      {Icon && (
        <span className="p-2 rounded-xl bg-brand/10 text-brand dark:bg-brand/20">
          <Icon className="w-4 h-4" />
        </span>
      )}
      <h2 className="text-lg lg:text-xl font-bold tracking-tight text-content">
        {title}
      </h2>
    </div>
    {children}
  </motion.section>
);

const Body = ({ children }) => (
  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-3 last:mb-0">
    {children}
  </p>
);

const List = ({ children }) => (
  <ul className="list-disc list-outside pl-5 space-y-2.5 my-3 text-xs sm:text-sm text-content-secondary leading-relaxed">
    {children}
  </ul>
);

const InternshipItem = ({ number, title, children }) => (
  <li className="flex gap-3 sm:gap-4">
    <span
      aria-hidden="true"
      className="shrink-0 w-8 h-8 rounded-full bg-brand/10 dark:bg-brand/20 text-brand font-bold flex items-center justify-center text-xs"
    >
      {number}
    </span>
    <div className="min-w-0 flex-1">
      <h3 className="text-sm sm:text-base font-semibold text-content mb-1.5">
        {title}
      </h3>
      <div className="text-xs sm:text-sm text-content-secondary leading-relaxed space-y-2.5">
        {children}
      </div>
    </div>
  </li>
);

/* --- Main Component --- */
const TermsConditions = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);

      const scrollPosition = window.scrollY + 160;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Reading Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-brand to-brand-hover transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className={`w-full min-h-screen ${
          darkMode ? "bg-custom-dark-gradient" : "bg-custom-light-gradient"
        }`}
      >
        <main className="w-full">
          {/* Top-aligned Split Hero Section */}
          <TermsHeroSection />

          {/* Main Content Layout with tight padding */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-8 flex gap-8 lg:gap-10 relative">
            {/* Sidebar Navigation */}
            <nav
              aria-label="Table of contents"
              className="hidden lg:block w-64 shrink-0"
            >
              <div className="sticky top-20 p-3.5 rounded-2xl bg-surface/80 dark:bg-surface/30 backdrop-blur-md border border-line shadow-sm max-h-[calc(100vh-6rem)] overflow-y-auto">
                <p className="text-[11px] font-bold uppercase tracking-wider text-content-muted mb-2 px-2">
                  On this page
                </p>
                <ul className="space-y-0.5">
                  {SECTIONS.map((s) => {
                    const isActive = activeSection === s.id;
                    const NavIcon = s.icon;
                    return (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className={`group flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-150 ${
                            isActive
                              ? "bg-brand/10 text-brand dark:bg-brand/20 font-bold"
                              : "text-content-secondary hover:text-content hover:bg-surface-variant/40"
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <NavIcon
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isActive ? "text-brand" : "text-content-muted group-hover:text-content"
                              }`}
                            />
                            <span className="truncate">{s.title}</span>
                          </span>
                          <ChevronRight
                            className={`w-3 h-3 transition-transform duration-150 ${
                              isActive ? "text-brand translate-x-0.5 opacity-100" : "opacity-0 -translate-x-1 group-hover:opacity-100"
                            }`}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>

            {/* Document Content Card */}
            <div className="min-w-0 flex-1 bg-surface/90 dark:bg-surface/50 backdrop-blur-sm rounded-2xl border border-line shadow-sm px-5 md:px-10 py-5 md:py-7">
              <Section id="general" title="Terms and Conditions" icon={FileText}>
                <Body>
                  By accessing and using this website (&quot;Kre8ly&quot;), you accept and agree to be bound by the following terms and conditions:
                </Body>
                <List>
                  <li>The content of this Website is for general information and educational purposes only. It is subject to change without notice.</li>
                  <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this Website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                  <li>Your use of any information or materials on this Website is entirely at your own risk, for which we shall not be liable. It shall be your responsibility to ensure that any products, services, or information available through this Website meet your specific requirements.</li>
                  <li>This Website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                  <li>All trademarks reproduced on this Website that are not the property of, or licensed to, the operator are acknowledged on the Website.</li>
                  <li>Unauthorized use of this Website may give rise to a claim for damages and/or be a criminal offense.</li>
                  <li>This Website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s).</li>
                  <li>We have no responsibility for the content of the linked website(s). Your use of this Website and any dispute arising out of such use is subject to the laws of Indian Government or other regulatory authority.</li>
                </List>
              </Section>

              <Section id="user-terms" title="Additional Terms for Users" icon={UserCheck}>
                <Body>As a user of this EdTech platform, you agree to the following terms:</Body>
                <List>
                  <li>You must be at least 18 years old or have the consent of a parent or legal guardian to use this platform.</li>
                  <li>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device to prevent unauthorized access to your account.</li>
                  <li>You must provide accurate and complete information when creating an account or making a purchase on this platform.</li>
                  <li>You agree not to use this platform for any illegal or unauthorized purpose, and you must comply with all applicable laws and regulations.</li>
                  <li>You will not share, sell, or distribute any Course materials, including but not limited to videos, quizzes, and assignments, without explicit permission from the platform or Course instructors.</li>
                  <li>You will not engage in any activity that may disrupt or interfere with the proper functioning of the platform, including but not limited to using automated scripts, bots, or any other unauthorized means to access the platform or its content.</li>
                  <li>You understand that the platform may use cookies and other tracking technologies to improve user experience and collect usage data. By using the platform, you consent to the use of cookies and tracking technologies as described in our Privacy Policy.</li>
                  <li>You acknowledge that some Courses on this platform may require additional software or hardware, and it is your responsibility to ensure you have access to the necessary tools to participate in the Course.</li>
                  <li>We reserve the right to suspend or terminate your account and access to the platform if you violate any of the terms and conditions outlined herein.</li>
                </List>
              </Section>

              <Section id="ip" title="Intellectual Property" icon={Award}>
                <Body>
                  All content available on this platform, including but not limited to Course materials, videos, text, graphics, logos, and images, are the intellectual property of the platform or its content providers and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, distribute, or display any of the platform&apos;s content without prior written permission from the platform or the respective content owners.
                </Body>
              </Section>

              <Section id="liability" title="Limitation of Liability" icon={AlertTriangle}>
                <Body>
                  In no event shall the EdTech platform, its affiliates, instructors, or partners be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use or inability to use the platform or its content. This limitation of liability applies to all claims, whether based on warranty, contract, tort, or any other legal theory.
                </Body>
              </Section>

              <Section id="indemnification" title="Indemnification" icon={Shield}>
                <Body>
                  You agree to indemnify and hold harmless the EdTech platform, its affiliates, instructors, and partners from any claims, damages, losses, liabilities, and expenses (including attorneys&apos; fees) arising out of your use of the platform or any violation of these terms and conditions.
                </Body>
                <Body>
                  We reserve the right to modify or amend these terms and conditions without any prior notice. Your continued use of the Website after any changes shall signify your acceptance of the modified terms and conditions.
                </Body>
              </Section>

              <Section id="contact" title="Contact Information" icon={Phone}>
                <Body>
                  If you have any questions or need assistance regarding our terms and conditions, please don&apos;t hesitate to contact us:
                </Body>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href="mailto:info@kre8ly.com"
                    className="flex-1 rounded-xl border border-line p-3 bg-surface hover:border-brand transition-colors flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-brand/10 text-brand">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-content-muted font-semibold">Email</span>
                      <span className="text-xs sm:text-sm font-medium text-content">info@kre8ly.com</span>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href="tel:+919518856261"
                    className="flex-1 rounded-xl border border-line p-3 bg-surface hover:border-brand transition-colors flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-brand/10 text-brand">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-content-muted font-semibold">Phone</span>
                      <span className="text-xs sm:text-sm font-medium text-content">+91 95188 56261</span>
                    </div>
                  </motion.a>
                </div>
              </Section>

              <Section id="effective-date" title="Effective Date for Policy" icon={Calendar}>
                <Body>
                  This Terms and Conditions policy is effective as of 04-08-2023. It is applicable to all users of the UnifiedMentor EdTech platform.
                </Body>
              </Section>

              <Section id="warranties" title="Disclaimer of Warranties" icon={ShieldAlert}>
                <Body>
                  UnifiedMentor shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the platform or its content. The platform and its content are provided &quot;as is&quot; and without any warranties of any kind, whether express or implied. UnifiedMentor disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
                </Body>
              </Section>

              <Section id="conduct" title="Rules of Conduct" icon={CheckCircle2}>
                <Body>As a user of the UnifiedMentor platform, you agree to adhere to the following rules of conduct:</Body>
                <List>
                  <li>Respect other users and instructors on the platform.</li>
                  <li>Do not share, distribute, or reproduce Course materials without permission.</li>
                  <li>Do not engage in any activities that may disrupt or harm the platform&apos;s functioning.</li>
                  <li>Do not violate any applicable laws or regulations while using the platform.</li>
                </List>
              </Section>

              <Section id="data-consent" title="Consent to Data Collection" icon={Database}>
                <Body>
                  Students acknowledge that Kre8ly may collect and use their images and placement details for inclusion in our marketing materials and online presence.
                </Body>
              </Section>

              <Section id="content-ownership" title="Ownership of Content" icon={Award}>
                <Body>
                  Kre8ly reserves the right to use, display, and reproduce student data, including images and placement success stories, for promotional purposes.
                </Body>
              </Section>

              <Section id="privacy" title="Privacy and Protection" icon={Lock}>
                <Body>
                  We are committed to safeguarding personal information and will handle all data in accordance with relevant data protection laws.
                </Body>
              </Section>

              <Section id="restrictions" title="User Restrictions" icon={Ban}>
                <Body>By using the UnifiedMentor platform, you agree to the following user restrictions:</Body>
                <List>
                  <li>You must be at least 18 years old or have the consent of a parent or legal guardian to use the platform.</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials and restricting access to your account.</li>
                  <li>You may not use the platform for any illegal or unauthorized purpose.</li>
                  <li>You may not access the platform using automated scripts, bots, or unauthorized means.</li>
                  <li>You may not violate any intellectual property rights or copyrights while using the platform.</li>
                </List>
                <p className="text-xs sm:text-sm text-content-secondary mt-3 leading-relaxed">
                  Please read our{" "}
                  <Link to="/privacy-policy" className="text-brand font-medium hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  for information on how we collect, use, and protect your personal information.
                </p>
              </Section>

              <Section id="modification" title="Modification of Terms" icon={RefreshCw}>
                <Body>
                  UnifiedMentor reserves the right to modify or update these terms and conditions at any time. The modified terms will be effective upon posting on this page. We recommend reviewing the terms regularly to stay informed about any changes.
                </Body>
              </Section>

              <Section id="internship" title="Internship Terms and Conditions" icon={GraduationCap}>
                <Body>
                  Welcome to unifiedmentor.com (referred to as the &quot;Site&quot; or &quot;Kre8ly&quot;), an online platform operated by UnifiedMentor Technologies. These terms constitute a legal agreement governing your participation in opportunities posted here.
                </Body>

                <ol className="list-none space-y-6 mt-6">
                  <InternshipItem number="1" title="Opportunity Offer">
                    <p>
                      Participants selected for the internship opportunity will receive an official offer letter prior to commencement, outlining domain, duration, and guidelines.
                    </p>
                  </InternshipItem>

                  <InternshipItem number="2" title="Swag & Rewards Eligibility">
                    <p>
                      Eligibility for swag items, rewards, or recognition is subject to fulfillment of specified performance requirements. Plagiarism or submission in violation of ethical guidelines will lead to disqualification.
                    </p>
                  </InternshipItem>

                  <InternshipItem number="3" title="Stipend Policy">
                    <div className="p-3.5 rounded-xl bg-warning/10 border border-warning/30 text-content text-xs sm:text-sm font-medium mb-2.5">
                      This is generally an unpaid learning and skill-development program. Performance-based stipends are discretionary and not guaranteed.
                    </div>
                    <ul className="list-disc list-outside ml-5 space-y-1.5 text-xs sm:text-sm text-content-secondary">
                      <li>Stipends are not guaranteed to every participant.</li>
                      <li>Typically, up to the top 10% of performers in each batch may be considered.</li>
                      <li>The maximum stipend amount may be up to ₹7,500 based on internal review.</li>
                    </ul>
                  </InternshipItem>

                  <InternshipItem number="4" title="Registration Data and Account Security">
                    <p>
                      Participants must provide true, complete details upon registration and are solely responsible for all actions conducted under their account credentials.
                    </p>
                  </InternshipItem>

                  <InternshipItem number="5" title="Jurisdiction and Governing Law">
                    <p>
                      Any disputes arising from participation or website use shall be governed by the laws of India under the exclusive jurisdiction of competent courts in India.
                    </p>
                  </InternshipItem>

                  <InternshipItem number="6" title="Platform Access & Administrative Fees">
                    <p>
                      Access to our digital ecosystem (LMS, Project Portal, ATS Resume Checker, Job portal) may involve an administrative fee depending on the plan chosen to cover server, infrastructure, and evaluation processing costs.
                    </p>
                  </InternshipItem>

                  <InternshipItem number="7" title="Platform Usage Policy">
                    <p>
                      Access is granted solely for learning purposes. Misuse or credential sharing may lead to immediate termination of platform privileges.
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