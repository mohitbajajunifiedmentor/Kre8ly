import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  DownloadCloud,
  RefreshCw,
  Monitor,
  Sparkles,
  Globe2,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Laptop,
  HelpCircle,
  FileCheck2
} from "lucide-react";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import { Link } from "@/lib/router-compat";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

/* --- Modern Compact Split Hero Section --- */
const DeliveryHeroSection = () => {
  return (
    <section className="relative w-full pt-10 sm:pt-14 md:pt-16 pb-6 md:pb-8 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Heading & Subtext */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/25 bg-brand/10 dark:bg-brand/15 text-brand text-xs font-semibold mb-2.5 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-brand" />
              <span>Digital Delivery & Fulfillment</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-content leading-tight"
            >
              Instant Access. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
                100% Digital Delivery.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-2.5 text-xs sm:text-sm md:text-base text-content-secondary max-w-xl leading-relaxed"
            >
              Kre8ly is a fully digital learning ecosystem. All course credentials, assessments, and learning modules are provisioned instantly online — no physical parcel shipping or delivery delays.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-4 flex flex-wrap items-center gap-3 text-xs text-content-muted"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Zero Shipping Fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Instant LMS Activation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Global 24/7 Access
              </span>
            </motion.div>
          </div>

          {/* Right Column: Fulfillment Overview Card */}
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
                    Fulfillment System Live
                  </span>
                </div>
                <span className="text-[10px] font-medium text-content-muted px-2 py-0.5 rounded-md bg-surface-variant/40">
                  Version 2026.1
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs font-bold text-content">Instant Provision</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Access granted immediately upon checkout confirmation.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-bold text-content">No Physical Mail</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Zero transit wait times or lost postal parcels.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <RefreshCw className="w-3.5 h-3.5 text-info" />
                    <span className="text-xs font-bold text-content">Course Updates</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Continuous curriculum updates pushed for free.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl border border-line/60 bg-surface/60 dark:bg-surface/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3.5 h-3.5 text-purple-500" />
                    <span className="text-xs font-bold text-content">Support SLA</span>
                  </div>
                  <p className="text-[11px] text-content-secondary leading-snug">
                    Access queries answered within 24-48 hours.
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

const ShippingDelivery = ({ darkMode, setDarkMode }) => {
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

  const featureCards = [
    {
      icon: Zap,
      title: "Immediate Access",
      desc: "Enroll in any course and receive LMS credentials in real-time. No processing delays or physical queues.",
    },
    {
      icon: RefreshCw,
      title: "Lifetime Updates",
      desc: "Receive free curriculum upgrades, refreshed practice sets, and module updates automatically on your LMS.",
    },
    {
      icon: Laptop,
      title: "Multi-Device Compatibility",
      desc: "Designed to run fluidly on laptops, tablets, and smartphones using standard web browsers without extra downloads.",
    },
    {
      icon: Globe2,
      title: "Accessible Worldwide",
      desc: "Learn from anywhere around the globe with high-speed video delivery and resilient cloud infrastructure.",
    },
    {
      icon: Sparkles,
      title: "Interactive Sandbox",
      desc: "Hands-on projects, real-world assessments, and portfolio tasks embedded straight into the browser.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Verification",
      desc: "Encrypted account authorization ensures only enrolled students have authenticated access to premium resources.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Shipping & Delivery Policy | Kre8ly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Kre8ly, EdTech, digital delivery policy, instant course access, LMS fulfillment"
        />
        <link
          rel="canonical"
          href="https://unifiedmentor.com/shipping-and-delivery"
        />
        <meta
          name="description"
          content="At Kre8ly, all courses and learning materials are delivered 100% digitally through our LMS, ensuring immediate access with zero physical shipping."
        />
        <meta name="robots" content="index, follow" />
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
          <DeliveryHeroSection />

          {/* Delivery Feature Grid */}
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-content tracking-tight mb-2">
                Fulfillment Built for Modern Learners
              </h2>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                Because all educational offerings are digital, delivery occurs over secure cloud channels without packaging or postal logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {featureCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-2xl border border-line bg-surface/80 dark:bg-surface/30 backdrop-blur-sm shadow-sm hover:border-brand/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-content mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Detailed Policy Clause Cards */}
          <section className="max-w-4xl mx-auto px-4 md:px-8 pb-12 sm:pb-16 space-y-5">
            
            {/* Clause 1: Delivery Mode */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 sm:p-7 rounded-2xl border border-line bg-surface/90 dark:bg-surface/40 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">
                  01
                </span>
                <h3 className="text-base sm:text-lg font-bold text-content">
                  Delivery Method & Timeline
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-3">
                Upon verified payment, you will receive an automated confirmation email containing your onboarding guide, access credentials, and course portal links. Access is generally instant, but please allow up to 10 minutes for automated LMS provisioning.
              </p>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                If credentials do not appear in your inbox within 15 minutes, check your spam/junk folders before reaching out to our dispatch team.
              </p>
            </motion.div>

            {/* Clause 2: System Specifications */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 sm:p-7 rounded-2xl border border-line bg-surface/90 dark:bg-surface/40 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">
                  02
                </span>
                <h3 className="text-base sm:text-lg font-bold text-content">
                  Technical Access Requirements
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed mb-3">
                To receive uninterrupted curriculum content, learners need:
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-xs sm:text-sm text-content-secondary leading-relaxed">
                <li>A functional desktop, laptop, or mobile tablet.</li>
                <li>A broadband internet connection capable of streaming 720p/1080p video content.</li>
                <li>An up-to-date web browser (Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge).</li>
              </ul>
            </motion.div>

            {/* Clause 3: No Physical Goods */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 sm:p-7 rounded-2xl border border-line bg-surface/90 dark:bg-surface/40 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-brand/10 text-brand text-xs font-bold flex items-center justify-center">
                  03
                </span>
                <h3 className="text-base sm:text-lg font-bold text-content">
                  Zero Physical Shipping Policy
                </h3>
              </div>
              <div className="p-3.5 rounded-xl bg-info/10 border border-info/20 text-info text-xs sm:text-sm flex gap-2.5 items-center mb-3">
                <FileCheck2 className="w-4 h-4 shrink-0" />
                <span>No physical books, USB drives, or physical DVDs will be shipped to your postal address.</span>
              </div>
              <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                All supplementary worksheets, assignments, code walkthroughs, and completion certificates are delivered entirely in downloadable digital formats (.pdf, .zip, .ipynb).
              </p>
            </motion.div>

            {/* Support and Inquiries Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-5 sm:p-7 rounded-2xl border border-line bg-surface/90 dark:bg-surface/40 backdrop-blur-sm shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-content mb-1">
                  Delivery Issues or Missing Access?
                </h3>
                <p className="text-xs sm:text-sm text-content-secondary">
                  If your course link hasn&apos;t arrived or your account requires activation, contact support:
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs sm:text-sm">
                  <a
                    href="mailto:info@kre8ly.com"
                    className="font-semibold text-brand hover:underline inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-4 h-4" />
                    info@kre8ly.com
                  </a>
                  <a
                    href="tel:+919518856261"
                    className="font-semibold text-brand hover:underline inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4" />
                    +91 95188 56261
                  </a>
                </div>
              </div>

              <Link
                to="/cancellation-and-refund"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-line bg-surface hover:border-brand text-xs sm:text-sm font-semibold text-content transition-all shrink-0"
              >
                Refund Policy
              </Link>
            </motion.div>

          </section>

          <Query />
        </main>
      </div>

      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default ShippingDelivery;