import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const bg_image = "/assets/ReferAndEarn/BackgroundImage.png";
const HeroImage = "/assets/KYCCollegesWorkshops/HeroImage.jpeg";
const Logo = "/assets/KYCCollegesWorkshops/Logo.png";
import AuthModal from "./AuthModal";
const hero1 = "/assets/ReferAndEarn/hero1.svg";
const hero2 = "/assets/ReferAndEarn/hero2_updated.svg";
import HeroSection from "./AboutUs/HeroSection";
const leftHeroSectionImage = "/assets/HomePage/leftHeroSectionImage.png";
const rightHeroSectionImage = "/assets/HomePage/rightHeroSectionImage.png";
import { Link } from "@/lib/router-compat";
const HeroSectionBgImage = "/assets/Home/HeroSectionBgImage.png";
const HomeHeroSwipper = () => {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
  const intervalRef = useRef(null);

  // ✅ useMemo so slides re-create na ho har render me
  const slides = useMemo(() => [
      {
        id: 1,
        content: (
          <section className="relative w-full min-h-[90vh] bg-[#0f172a] bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0f172a_100%)] text-white flex flex-col items-center justify-center px-6 overflow-hidden py-12 lg:py-20">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <div style={{ backgroundImage: `url(${HeroSectionBgImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="absolute inset-0 opacity-20 z-0"></div>

            {/* --- Left Side Decorations (Hidden on Mobile) --- */}
            <div className="hidden xl:block absolute left-0 bottom-0 z-20">
              <div className="relative">
                {/* Main Student Image */}
                <img
                  src={leftHeroSectionImage}
                  alt="Student"
                  className="w-80 2xl:w-96 h-auto drop-shadow-2xl relative z-10 block"
                />
              </div>
            </div>

            {/* --- Center Content --- */}
            <div className="z-10 text-center max-w-4xl flex flex-col items-center">
              {/* Top Badge */}
              <div className="inline-flex mb-6 px-4 py-1.5 border border-[#969696] rounded-full bg-slate-800/30 items-center gap-2">
                <div className="w-5 h-5 bg-[#D9D9D9] rounded-full border-2 border-slate-600"></div>
                <span className="text-xs md:text-sm font-semibold font-Poppins text-[#FFFFFF]">Transform Your Career Today</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-[46px] font-Poppins font-semibold leading-tight md:leading-[56px] tracking-tight mb-4">
                Bridge The Gap Between College <br className="hidden md:block" /> & Your Career
              </h1>

              <p className="text-[#E2E2E2] text-sm md:text-lg font-Poppins mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                Live Learning with Industry Experts, Jobs at Leading Tech Companies, and Real-World Project Experience.
              </p>

              {/* Action Buttons - Stacked on Mobile, Row on Desktop */}
              <div className="flex flex-col sm:flex-row items-center justify-center mb-10 mt-2 rounded-xl sm:rounded-full overflow-hidden w-full sm:w-fit mx-auto border border-slate-700 bg-brand">
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-10 py-3.5 font-Poppins bg-white text-content font-semibold text-[16px] text-center hover:bg-slate-200 transition-colors"
                >
                  Explore Programs
                </Link>
                <Link
                  to="/fellowships"
                  className="w-full sm:w-auto px-10 py-3.5 font-Poppins text-white font-semibold text-[16px] text-center hover:bg-slate-800 transition-colors border-t sm:border-t-0 sm:border-l border-slate-700"
                >
                  Apply for Internships
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0f172a] overflow-hidden shadow-sm"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?u=${i+10}`}
                        alt="Student Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-slate-400 font-medium font-Poppins">
                  Trusted by <span className="text-white font-semibold">2000+ Students</span> and job seekers
                </p>
              </div>
            </div>

            {/* --- Right Side Dashboard (Hidden on Mobile) --- */}
            <div className="hidden xl:block absolute right-0 bottom-0 z-20">
              <img
                src={rightHeroSectionImage}
                alt="Dashboard"
                className="w-80 2xl:w-[400px] h-auto drop-shadow-2xl"
              />
            </div>
          </section>
        )
      },
      {
        id: 2,
        content: (
          <section className="relative text-white pt-20 px-6 text-center min-h-[90vh] flex flex-col justify-center overflow-hidden">
            {/* Background */}
            <img
              src={bg_image}
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Content */}
            <div className="relative max-w-3xl mx-auto z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Refer Your Friends &{" "}
                <span className="text-blue-400">Earn</span> Exciting Rewards!
              </h1>

              <p className="mb-8 text-gray-300 px-4">
                Got friends who want to level up their career? Invite them to
                join Kre8ly and get rewarded for every successful
                signup or enrollment.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="px-8 py-3 bg-white text-[#0c172c] hover:bg-white/80 rounded-lg font-semibold shadow-md"
              >
                Earn Now
              </button>

              <AuthModal
                isOpen={open}
                onClose={() => setOpen(false)}
              />
            </div>

            {/* Floating Images - Adjusted for Mobile */}
            <div className="relative mt-12 flex flex-col md:flex-row justify-center items-center gap-6 max-w-5xl mx-auto z-10 px-4">
              <motion.div
                className="flex items-end w-40 md:w-auto"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img src={hero1} alt="Invite Card" className="w-full h-auto" />
              </motion.div>

              <motion.div
                className="flex items-end relative w-40 md:w-auto"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <img
                  src={hero2}
                  alt="Earnings Card"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </section>
        ),
      },
      {
        id: 3,
        content: (
          <section className="relative min-h-[90vh] overflow-hidden">
            <img
              src={HeroImage}
              alt="College"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
              style={{
                background:
                  "linear-gradient(168.25deg, #000000 -16.03%, #4A4A4A 20.5%, #1D2B45 57.04%)",
                mixBlendMode: "hard-light",
              }}
            >
              <div className="absolute top-10 left-4 md:left-10 flex items-start gap-4 z-40">
                {/* Vertical Line */}
                <div className="w-1 h-12 md:h-16 bg-white"></div>
                {/* Text */}
                <div className="text-white text-left font-Poppins">
                  <h2 className="text-sm md:text-xl font-medium leading-tight max-w-[200px] md:max-w-none">
                    Vaish mahila mahavidyalay College
                  </h2>
                  <p className="text-lg md:text-xl mt-1">Rohtak</p>
                </div>
              </div>

              <div className="w-16 h-16 md:w-20 md:h-20 mb-6">
                <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
              </div>

              <h1 className="text-white text-2xl md:text-[42px] font-medium max-w-xs md:max-w-full">
                KYC Colleges Workshops
              </h1>
            </div>
          </section>
        ),
      },
      {
        id: 4,
        content: (
          <HeroSection />
        ),
      },

    ], [open]);

  // ✅ Auto Slide
 const startSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startSlider();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);


  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-[#0f172a]">

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          className="w-full h-full absolute top-0 left-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {slides[current].content}
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation - Responsive dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-2 md:space-x-3 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-6 md:w-10 h-[2px] md:h-[3px] transition-all duration-300 ${current === index
              ? "bg-white scale-110"
              : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHeroSwipper;