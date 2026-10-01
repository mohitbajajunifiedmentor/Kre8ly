import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  RotateCcw,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Ban,
  Clock,
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
const RefundHeroSection = () => {
  return (
    <section className="relative w-full pt-10 sm:pt-14 md:pt-16 pb-6 md:pb-8 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Heading & Key Notice */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/25 bg-brand/10 dark:bg-brand/15 text-brand text-xs font-semibold mb-2.5 shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5 text-brand" />
              <span>Transparent Enrolment Terms</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-content leading-tight"
            >
              Cancellation & Refund. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
                Stated Clearly & Plainly.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-2.5 text-xs sm:text-sm md:text-base text-content-secondary max-w-xl leading-relaxed"
            >
              At Kre8ly, we value mutual trust and transparency. Please review our course enrolment, cancellation, and support policies before purchasing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-4 flex flex-wrap items-center gap-3 text-xs text-content-muted"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Dedicated Learner Support
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Direct LMS Resolution
              </span>
            </motion.div>
          </div>

          {/* Right Column: Status Card */}
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
                    Policy Framework
                  </span>
                </div>
                <span className="text-[10px] font-medium text-content-muted px-2 py-0.5 rounded-md bg-surface-variant/40">
                  Version 2026.1
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Ban className="w-3.5 h-3.5 text-warning" />
                    <span className="text-xs font-bold text-content">Refund Clause</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Strict no-refund once course access is granted.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <HelpCircle className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs font-bold text-content">Support Desk</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Technical & curriculum issues solved fast.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 text-info" />
                    <span className="text-xs font-bold text-content">Curriculum</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Regular updates to courses and projects.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3.5 h-3.5 text-purple-500" />
                    <span className="text-xs font-bold text-content">Turnaround</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Inquiries resolved within 24-48 hours.
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

/* --- Modern Animated Card --- */
const PolicyCard = ({ number, title, icon: Icon, children }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    whileHover={{ y: -2 }}
    className="group flex flex-col sm:flex-row gap-4 sm:gap-5 bg-surface/90 dark:bg-surface/40 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-7 border border-line shadow-sm hover:border-brand/40 transition-all duration-200"
  >
    <div className="shrink-0">
      <span className="w-10 h-10 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand font-bold flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition-transform">
        {number}
      </span>
    </div>
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-2.5 mb-2.5">
        {Icon && <Icon className="w-4 h-4 text-brand" />}
        <h2 className="text-base sm:text-lg font-bold text-content tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </motion.div>
);

const Body = ({ children }) => (
  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-3 last:mb-0">
    {children}
  </p>
);

const Cancellation = ({ darkMode, setDarkMode }) => {
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
          <RefundHeroSection />

          <section className="max-w-4xl mx-auto py-6 sm:py-8 px-4 md:px-8">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-xs sm:text-sm md:text-base text-content-secondary mb-6 leading-relaxed bg-surface/60 dark:bg-surface/20 p-4 rounded-xl border border-line/60"
            >
              We strive to provide you with the best possible educational journey through our online programs and Learning Management System (LMS). Please review the key points below to understand our operational parameters regarding course commitments and adjustments.
            </motion.p>

            <div className="space-y-4 sm:space-y-5">
              <PolicyCard number="01" title="Cancellation & Refund Terms" icon={Ban}>
                <div className="border-l-4 border-warning bg-warning/10 rounded-r-xl px-3.5 py-2.5 mb-3">
                  <p className="text-xs sm:text-sm text-content font-semibold">
                    Kre8ly operates under a strict No Refund Policy for all Course enrolments.
                  </p>
                </div>
                <Body>
                  Once a course is purchased and LMS access credentials or learning resources have been provisioned, no refunds will be issued under any circumstances.
                </Body>
                <Body>
                  We encourage all learners to thoroughly evaluate course modules, prerequisites, and schedules prior to finalizing enrolment.
                </Body>
              </PolicyCard>

              <PolicyCard number="02" title="Course Support & Issue Resolution" icon={HelpCircle}>
                <Body>
                  If you encounter technical issues with your LMS dashboard, module playback difficulties, or have concerns regarding course delivery, our student success team is here to assist.
                </Body>
                <Body>
                  Please reach out directly to our dedicated support desk at{" "}
                  <a
                    href="mailto:info@kre8ly.com"
                    className="text-brand font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    info@kre8ly.com
                  </a>
                  . We will make every effort to diagnose and resolve your concern to keep your learning uninterrupted.
                </Body>
              </PolicyCard>

              <PolicyCard number="03" title="Curriculum & Platform Adjustments" icon={TrendingUp}>
                <Body>
                  We continuously update and elevate our educational materials, assignments, and practical exercises to match current industry standards. Consequently, syllabus structures, mentors, and program fees may be updated periodically without prior notice.
                </Body>
                <Body>
                  This policy applies exclusively to programs purchased directly on Kre8ly. If you enrolled through an authorized third-party partner or university affiliate, please consult their terms for registration details.
                </Body>
              </PolicyCard>
            </div>

            {/* Quick Contact & Escalation Box */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl border border-line bg-surface/80 dark:bg-surface/30 p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-content">
                  Have questions about this policy?
                </h3>
                <p className="text-xs sm:text-sm text-content-secondary">
                  Our admissions and student support desks are ready to assist you.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:info@kre8ly.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-semibold shadow-sm transition-all shrink-0"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </motion.a>
            </motion.div>
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

export default Cancellation;