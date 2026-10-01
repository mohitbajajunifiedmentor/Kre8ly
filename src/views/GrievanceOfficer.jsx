import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Send,
  HelpCircle,
  Scale,
  Sparkles
} from "lucide-react";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

/* --- Modern Compact Split Hero Section --- */
const GrievanceHeroSection = () => {
  return (
    <section className="relative w-full pt-10 sm:pt-14 md:pt-16 pb-6 md:pb-8 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Heading & Legal Redressal Badge */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/25 bg-brand/10 dark:bg-brand/15 text-brand text-xs font-semibold mb-2.5 shadow-sm"
            >
              <Scale className="w-3.5 h-3.5 text-brand" />
              <span>Statutory Compliance & Escalation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-content leading-tight"
            >
              Grievance Redressal. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
                Fair, Prompt & Accountable.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-2.5 text-xs sm:text-sm md:text-base text-content-secondary max-w-xl leading-relaxed"
            >
              In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021, our designated Grievance Officer ensures consumer concerns are resolved fairly and expeditiously.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-4 flex flex-wrap items-center gap-3 text-xs text-content-muted"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                48-Hour Acknowledgment
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                IT Rules 2021 Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Transparent Escalation
              </span>
            </motion.div>
          </div>

          {/* Right Column: Redressal Summary Card */}
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
                    Grievance Cell Active
                  </span>
                </div>
                <span className="text-[10px] font-medium text-content-muted px-2 py-0.5 rounded-md bg-surface-variant/40">
                  IT Act Mandate
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs font-bold text-content">Acknowledgment</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Logged & confirmed within 48 business hours.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-bold text-content">Max Resolution</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Final closure within 15 statutory days.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-3.5 h-3.5 text-info" />
                    <span className="text-xs font-bold text-content">Ticket Tracking</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Reference docket ID provided for each filing.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Scale className="w-3.5 h-3.5 text-purple-500" />
                    <span className="text-xs font-bold text-content">Jurisdiction</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Governed under laws & courts in India.
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

const GrievanceOfficer = ({ darkMode, setDarkMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Grievance Officer | Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Contact Kre8ly's designated Grievance Officer for issues, inquiries, or statutory escalations."
        />
        <meta
          name="keywords"
          content="Grievance Officer, IT Rules 2021, Redressal Mechanism, Kre8ly grievances, complaints"
        />
        <link rel="canonical" href="https://unifiedmentor.com/grievance-redressal" />
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
          <GrievanceHeroSection />

          {/* Grievance Body Container */}
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
            
            {/* Officer Details Grid */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface/90 dark:bg-surface/40 backdrop-blur-md rounded-2xl border border-line shadow-sm p-6 md:p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-xl bg-brand/10 text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-lg lg:text-xl font-bold tracking-tight text-content">
                    Designated Grievance Officer
                  </h2>
                  <p className="text-xs text-content-muted">
                    Point of contact under Rule 3(2) of the Information Technology Rules, 2021
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-6">
                If you have complaints regarding content infringement, user conduct, terms violations, or unresolved support disputes, you can contact our officer directly using the channels below:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Email Card */}
                <motion.a
                  whileHover={{ y: -2 }}
                  href="mailto:grievance@kre8ly.com"
                  className="p-4 rounded-xl border border-line bg-surface/60 dark:bg-surface/20 hover:border-brand/40 transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-brand/10 text-brand shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-content-muted mb-0.5">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-brand hover:underline break-all">
                      grievance@kre8ly.com
                    </span>
                    <span className="block text-[11px] text-content-muted mt-0.5">
                      Direct nodal inbox
                    </span>
                  </div>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  whileHover={{ y: -2 }}
                  href="tel:+919518856261"
                  className="p-4 rounded-xl border border-line bg-surface/60 dark:bg-surface/20 hover:border-brand/40 transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-brand/10 text-brand shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-content-muted mb-0.5">
                      Direct Helpline
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-brand hover:underline">
                      +91 95188 56261
                    </span>
                    <span className="block text-[11px] text-content-muted mt-0.5">
                      Mon–Fri (10:00 AM – 6:00 PM IST)
                    </span>
                  </div>
                </motion.a>

                {/* Address Card */}
                <div className="p-4 rounded-xl border border-line bg-surface/60 dark:bg-surface/20 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand/10 text-brand shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-content-muted mb-0.5">
                      Registered Address
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-content">
                      Gurugram, Haryana, India
                    </span>
                    <span className="block text-[11px] text-content-muted mt-0.5">
                      UnifiedMentor Technologies Pvt. Ltd.
                    </span>
                  </div>
                </div>

                {/* Turnaround Card */}
                <div className="p-4 rounded-xl border border-line bg-surface/60 dark:bg-surface/20 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand/10 text-brand shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-content-muted mb-0.5">
                      Statutory Timelines
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-content">
                      Within 48 hours acknowledgment
                    </span>
                    <span className="block text-[11px] text-content-muted mt-0.5">
                      Max 15 days resolution as per IT Rules 2021
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How to File a Grievance - Step Guide */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-surface/90 dark:bg-surface/40 backdrop-blur-md rounded-2xl border border-line shadow-sm p-6 md:p-8"
            >
              <h3 className="text-base sm:text-lg font-bold text-content mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand" />
                How to Submit an Official Grievance
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-line/60 bg-surface/50">
                  <span className="w-7 h-7 rounded-lg bg-brand/10 text-brand text-xs font-bold flex items-center justify-center mb-2">
                    01
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-content mb-1">
                    Send Email with Details
                  </h4>
                  <p className="text-[11px] sm:text-xs text-content-secondary leading-relaxed">
                    Write to grievance@kre8ly.com with your registered user ID, email address, transaction reference, and a clear description of the issue.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-line/60 bg-surface/50">
                  <span className="w-7 h-7 rounded-lg bg-brand/10 text-brand text-xs font-bold flex items-center justify-center mb-2">
                    02
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-content mb-1">
                    Docket Number Issued
                  </h4>
                  <p className="text-[11px] sm:text-xs text-content-secondary leading-relaxed">
                    Our team will verify your filing and issue a unique complaint tracking number within 48 business hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-line/60 bg-surface/50">
                  <span className="w-7 h-7 rounded-lg bg-brand/10 text-brand text-xs font-bold flex items-center justify-center mb-2">
                    03
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-content mb-1">
                    Formal Investigation
                  </h4>
                  <p className="text-[11px] sm:text-xs text-content-secondary leading-relaxed">
                    The Grievance Officer will conduct a thorough review and issue a definitive resolution notice within 15 calendar days.
                  </p>
                </div>
              </div>

              {/* Informational Callout */}
              <div className="mt-5 p-3.5 rounded-xl bg-info/10 border border-info/20 text-info text-xs sm:text-sm flex gap-2.5 items-center">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>
                  For regular queries regarding learning dashboards or assignments, please write to <strong>info@kre8ly.com</strong> before initiating formal grievance escalations.
                </span>
              </div>
            </motion.div>

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

export default GrievanceOfficer;