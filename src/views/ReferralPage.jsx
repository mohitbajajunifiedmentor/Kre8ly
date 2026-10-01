import React, { useState } from "react";
import { motion } from "framer-motion";
const bg_image = "/assets/ReferAndEarn/BackgroundImage.png";
const hero1 = "/assets/ReferAndEarn/hero1.svg";
const hero2 = "/assets/ReferAndEarn/hero2_updated.svg";
const hero2_1 = "/assets/ReferAndEarn/hero2.1.svg";
const hero2_2 = "/assets/ReferAndEarn/hero2.2.svg";
import AuthModal from "../component/AuthModal";
import Timeline from "../component/Affiliate/TimeLine";
import Faqs from "../component/MachineLearning/Faqs";
import Footer from "../component/Footer";
import Query from "../component/Query/Query";
import MobileFooter from "../component/MobileFooter";
import { ReferAndEarnFaqs } from "../Utils/Faqs/ReferAndEarn";
import ChatBot from "@/component/ChatBot/ChatBot";

const ReferralPage = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-canvas text-content">
      {/* Hero Section */}
      <section className="relative text-white pt-20 px-6 text-center">
        {/* Background image with position absolute */}
        <img
          src={bg_image}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Container with relative positioning for correct stacking */}
        <div className="relative max-w-3xl mx-auto z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Refer Your Friends & <span className="text-blue-400">Earn</span>{" "}
            Exciting Rewards!
          </h1>
          <p className="mb-8 text-gray-300">
            Got friends who want to level up their career? Invite them to join
            Kre8ly and get rewarded for every successful signup or
            enrollment.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 bg-white text-[#0c172c] hover:bg-white/80 rounded-lg font-semibold shadow-md"
          >
            Earn Now
          </button>
          <AuthModal isOpen={open} onClose={() => setOpen(false)} />
        </div>

        {/* Floating Cards (like invite, earnings, graph) */}
        <div className="relative mt-12 flex justify-center gap-6 max-w-5xl mx-auto">
          {/* Invite Card */}
          <motion.div className="flex items-end">
            <img src={hero1} alt="" />
          </motion.div>

          {/* Earnings Card */}
          {/* Earnings Card */}
          <motion.div className="flex items-end relative">
            <img src={hero2} alt="Main Hero" className="w-full h-auto" />
          </motion.div>

          {/* Graph Placeholder */}
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg w-72"
          >
            <h4 className="font-semibold mb-2">Your Daily Earning Report</h4>
            <div className="w-full h-32 bg-gray-800 rounded-md flex items-center justify-center text-gray-400">
              📊 Graph Placeholder
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Refer Your Friends & <span className="text-blue-600">Earn</span>{" "}
          Exciting Rewards!
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12">
          <div className="flex flex-col items-start text-left max-w-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="ml-3 font-semibold text-lg">Select Your Course</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Choose from courses, mentorships, and more to promote.
            </p>
          </div>

          <div className="flex flex-col items-start text-left max-w-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="ml-3 font-semibold text-lg">
                Generate Your Referral Link
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Get your unique referral link and start sharing to earn rewards.
            </p>
          </div>
        </div>
      </section> */}

      <Timeline />

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Benefits Your Friends & <span className="text-blue-600">Earn</span>{" "}
            Exciting!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Instant Payouts",
                desc: "Withdraw your rewards instantly after every signup.",
              },
              {
                title: "Infinite Rewards",
                desc: "Refer unlimited friends and maximize your income.",
              },
              {
                title: "Exclusive Bonuses",
                desc: "Unlock special bonuses for top referrers.",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 text-white flex items-center justify-center rounded-full">
                  🎁
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-full flex flex-col items-center justify-center gap-10 z-10 my-4 md:my-10">
        <Faqs varient="refer and earn" Faqs={ReferAndEarnFaqs} />
      </section>
      <Footer />
      <Query />
      <ChatBot darkMode={darkMode} />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default ReferralPage;
