import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Users, 
  FileText, 
  AlertCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight,
  Search,
  CheckCircle2,
  Calendar,
  EyeOff,
  ArrowRight,
  Shield
} from "lucide-react";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const SECTIONS = [
  { id: "collect", title: "Information We Collect", icon: Eye },
  { id: "use", title: "How We Use Information", icon: FileText },
  { id: "protect", title: "Data Protection & Security", icon: Lock },
  { id: "sharing", title: "Information Sharing", icon: Users },
  { id: "third-party", title: "Third-Party Services", icon: ShieldCheck },
  { id: "children", title: "Children's Privacy", icon: AlertCircle },
  { id: "changes", title: "Changes to This Policy", icon: FileText },
  { id: "contact", title: "Contact Us", icon: Mail },
  { id: "grievance", title: "Grievance Redressal", icon: ShieldCheck },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

/* --- Modern Compact Split Hero Section --- */
const ModernHeroSection = () => {
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
              <Shield className="w-3.5 h-3.5 text-brand" />
              <span>Trust, Compliance & Privacy</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-content leading-tight"
            >
              Your Privacy Matters. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
                Transparent & Secure.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-2.5 text-xs sm:text-sm md:text-base text-content-secondary max-w-xl leading-relaxed"
            >
              We treat your educational data with uncompromising care. Zero data selling, full IT Rules (2021) compliance, and encrypted workflows.
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
                placeholder="Jump to topic (e.g. data collection, grievance)..."
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

          {/* Right Column: Live Security & Verification Card */}
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
                    Security Guardrails Active
                  </span>
                </div>
                <span className="text-[10px] font-medium text-content-muted px-2 py-0.5 rounded-md bg-surface-variant/40">
                  Version 2026.1
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-bold text-content">IT Rules 2021</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Fully compliant redressal within 48 hours.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <EyeOff className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs font-bold text-content">Zero Ads Policy</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Your personal information is never sold.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Lock className="w-3.5 h-3.5 text-info" />
                    <span className="text-xs font-bold text-content">SSL/TLS 256-bit</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    End-to-end cryptographic transmission.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" />
                    <span className="text-xs font-bold text-content">Updated Policy</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Reviewed and aligned with new norms.
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

const List = ({ items }) => (
  <ul className="space-y-2.5 my-3">
    {items.map((item, idx) => (
      <motion.li
        key={idx}
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.04 }}
        className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondary leading-relaxed"
      >
        <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
        <span>{item}</span>
      </motion.li>
    ))}
  </ul>
);

/* --- Main Component --- */
const Privacy = ({ darkMode, setDarkMode }) => {
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
        <title>Privacy Policy - Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Privacy Policy, Kre8ly, Personal Information, Data Protection, User Privacy"
        />
        <link rel="canonical" href="https://unifiedmentor.com/privacy-policy" />
        <meta
          name="description"
          content="Read Kre8ly's Privacy Policy to understand how we collect, use, and protect your personal information."
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
          <ModernHeroSection />

          {/* Main Content Layout with tight padding */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-8 flex gap-8 lg:gap-10 relative">
            {/* Sidebar Navigation */}
            <nav
              aria-label="Table of contents"
              className="hidden lg:block w-64 shrink-0"
            >
              <div className="sticky top-20 p-3.5 rounded-2xl bg-surface/80 dark:bg-surface/30 backdrop-blur-md border border-line shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-wider text-content-muted mb-2 px-2">
                  Table of Contents
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
                            <NavIcon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-brand" : "text-content-muted group-hover:text-content"}`} />
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
              <Section id="collect" title="Information We Collect" icon={Eye}>
                <Body>
                  We may collect both personally identifiable information and non-personally identifiable information from you when you interact with our platform:
                </Body>
                <List
                  items={[
                    "Personal identifiers such as name, email address, and phone number provided during account registration.",
                    "Information about your usage of the platform, including courses taken, module progression, quiz submissions, and assignment evaluations.",
                    "Device and browser diagnostics, IP address, and other technical telemetry collected automatically upon access.",
                    "Feedback, forum messages, survey responses, and customer support inquiries submitted by you."
                  ]}
                />
              </Section>

              <Section id="use" title="How We Use Information" icon={FileText}>
                <Body>
                  We use the information we collect to optimize our learning platform and provide seamless educational services:
                </Body>
                <List
                  items={[
                    "To build and administer your student profile, ensuring continuous access to learning modules.",
                    "To communicate critical system alerts, syllabus improvements, and program announcements.",
                    "To analyze platform interaction metrics and elevate our pedagogical standards.",
                    "To personalize recommendations based on your learning milestones.",
                    "To resolve questions and offer dedicated support."
                  ]}
                />
              </Section>

              <Section id="protect" title="Data Protection & Security" icon={Lock}>
                <Body>
                  We implement robust technical and procedural safeguards to preserve data integrity and prevent unauthorized access, alteration, disclosure, or destruction. We utilize SSL/TLS transmission encryption, secure tokenization, and strict access controls.
                </Body>
                <div className="p-3.5 rounded-xl bg-info/10 border border-info/20 text-info text-xs sm:text-sm flex gap-2.5 items-center mt-2.5">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>While we enforce strict industry safeguards, no transmission over the internet is completely infallible; we continuously monitor and patch potential vulnerabilities.</span>
                </div>
              </Section>

              <Section id="sharing" title="Information Sharing" icon={Users}>
                <Body>
                  We do not sell, rent, or trade your personal information to third parties for independent marketing. We only share information with certified infrastructure vendors (such as payment processing engines, hosting partners, and support systems) required to deliver our educational services.
                </Body>
              </Section>

              <Section id="third-party" title="Third-Party Services" icon={ShieldCheck}>
                <Body>
                  Our services may link to third-party tools, code repositories, or reference materials. Kre8ly is not accountable for the distinct policies or terms governing those external sites. We suggest inspecting their individual privacy documentation before sharing sensitive data.
                </Body>
              </Section>

              <Section id="children" title="Children's Privacy" icon={AlertCircle}>
                <div className="p-3.5 rounded-xl bg-warning/10 border border-warning/30 flex items-start gap-2.5 mb-3">
                  <AlertCircle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-content mb-0.5">Age Requirement Notice</h4>
                    <p className="text-xs text-content-secondary">
                      Our platform is not intended for use by individuals under the age of 13.
                    </p>
                  </div>
                </div>
                <Body>
                  If you are a parent or guardian and suspect your child has registered an account or provided identifiable information, please contact us immediately to facilitate immediate deletion.
                </Body>
              </Section>

              <Section id="changes" title="Changes to This Policy" icon={FileText}>
                <Body>
                  We review and update this Privacy Policy to reflect advancements in our platform and legal landscape. Revisions take effect promptly upon publishing here, signified by the updated revision timeline at the top.
                </Body>
              </Section>

              <Section id="contact" title="Contact Us" icon={Mail}>
                <Body>
                  If you have inquiries, questions, or comments regarding this policy, feel free to reach out to our team:
                </Body>
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href="mailto:info@kre8ly.com"
                  className="inline-flex items-center gap-3 rounded-xl border border-line p-3 bg-surface hover:border-brand transition-colors mt-2"
                >
                  <div className="p-2 rounded-lg bg-brand/10 text-brand">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-content-muted font-semibold">General Inquiries</span>
                    <span className="text-xs sm:text-sm font-medium text-content">info@kre8ly.com</span>
                  </div>
                </motion.a>
              </Section>

              <Section id="grievance" title="Grievance Redressal" icon={ShieldCheck}>
                <Body>
                  In accordance with the Information Technology Act and applicable rules, users may direct complaints or escalations directly to our appointed Grievance Officer:
                </Body>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <motion.div whileHover={{ y: -1 }} className="p-3 rounded-xl border border-line bg-surface/50">
                    <div className="flex items-center gap-2 text-content-muted mb-0.5">
                      <Mail className="w-3.5 h-3.5 text-brand" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">Email</span>
                    </div>
                    <a href="mailto:grievance@kre8ly.com" className="text-xs sm:text-sm font-semibold text-brand hover:underline">
                      grievance@kre8ly.com
                    </a>
                  </motion.div>

                  <motion.div whileHover={{ y: -1 }} className="p-3 rounded-xl border border-line bg-surface/50">
                    <div className="flex items-center gap-2 text-content-muted mb-0.5">
                      <Phone className="w-3.5 h-3.5 text-brand" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">Phone</span>
                    </div>
                    <a href="tel:+919518856261" className="text-xs sm:text-sm font-semibold text-brand hover:underline">
                      +91 95188 56261
                    </a>
                  </motion.div>

                  <motion.div whileHover={{ y: -1 }} className="p-3 rounded-xl border border-line bg-surface/50">
                    <div className="flex items-center gap-2 text-content-muted mb-0.5">
                      <MapPin className="w-3.5 h-3.5 text-brand" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">Address</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-content">
                      Gurugram, Haryana, India
                    </p>
                  </motion.div>

                  <motion.div whileHover={{ y: -1 }} className="p-3 rounded-xl border border-line bg-surface/50">
                    <div className="flex items-center gap-2 text-content-muted mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-brand" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">Response Window</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-content">
                      Within 48 hours
                      <span className="block text-[10px] font-normal text-content-muted">Max 15 days as per IT Rules 2021</span>
                    </p>
                  </motion.div>
                </div>
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