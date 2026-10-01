import React from "react";
import Footer from "../component/Footer";
import { Helmet } from "@/lib/helmet-compat";
import Query from "../component/Query/Query";
import { Link } from "@/lib/router-compat";
import MobileFooter from "../component/MobileFooter";
import ChatBot from "@/component/ChatBot/ChatBot";

import { Section, SectionHeader, Eyebrow } from "@/component/ui/Section";
import Reveal from "@/component/ui/Reveal";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const ServiceGif = "/assets/ServicePage/ServiceImage.svg";
const SoftwareGif = "/assets/ServicePage/Image1.svg";
const WebGif = "/assets/ServicePage/Image%202.svg";
const MobileGif = "/assets/ServicePage/Image%203.svg";
const DigitalGif = "/assets/ServicePage/Image%204.svg";

const SERVICES = [
  {
    id: 1,
    title: "Software Development",
    tag: "Custom Architecture",
    description:
      "Our software development team specializes in creating tailored solutions to address your unique business requirements. Whether you need robust enterprise software or sleek, user-friendly applications, we have the expertise to deliver. We understand that technology is at the core of your business, and we're here to help you stay ahead of the curve with cutting-edge software solutions that drive success.",
    img: SoftwareGif,
    img_alt:
      "Kre8ly Software Development – Offering tailored software solutions that ensure flawless mobile and web application performance",
  },
  {
    id: 2,
    title: "Web Development",
    tag: "Modern Web Apps",
    description:
      "Our web development experts build responsive, user-friendly websites that leave a lasting impression. From corporate sites to e-commerce platforms, we create stunning online experiences for your audience. We focus on delivering websites that not only look great but also function seamlessly, ensuring that your online presence is a true asset to your business. Let us transform your web presence and elevate your brand.",
    img: WebGif,
    img_alt:
      "Kre8ly Web Development – Providing responsive and visually stunning website solutions using CSS, HTML, and JavaScript",
  },
  {
    id: 3,
    title: "Mobile Development",
    tag: "iOS & Android",
    description:
      "We specialize in creating mobile apps for both iOS and Android platforms. Our apps are designed to enhance user experience, boost engagement, and help you connect with your target audience. Mobile apps have become essential tools for businesses, and we're here to provide you with innovative solutions that set you apart in the mobile landscape. Whether it's a consumer-facing app or a business tool, we have the expertise to make it a success.",
    img: MobileGif,
    img_alt:
      "Kre8ly Mobile Development – Delivering responsive mobile app solutions with modern UI and seamless functionality",
  },
  {
    id: 4,
    title: "Digital Marketing",
    tag: "Growth & SEO",
    description:
      "We specialize in crafting digital marketing strategies that elevate your brand's online presence across multiple platforms. Our services are designed to enhance visibility, boost engagement, and help you connect with your target audience effectively. In today's digital age, a strong online presence is essential for business success, and we're here to provide innovative solutions that set you apart in the digital landscape. Whether it's SEO, social media marketing, or content creation, we have the expertise to drive your business forward.",
    img: DigitalGif,
    img_alt:
      "Kre8ly Digital Marketing – Delivering strategic digital marketing solutions to grow your brand and online presence",
  },
];

const ServicePage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Helmet>
        <title>Kre8ly | Full-Service Digital Solutions</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="canonical" href="https://www.unifiedmentor.com/services" />
        <meta
          name="keywords"
          content="web development services, software development, mobile app development, digital marketing services"
        />
        <meta
          name="description"
          content="Get top-notch Web, Software, Mobile App Development & Digital Marketing services from Kre8ly. Scalable, smart, and tailored to your business needs."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="w-full bg-canvas text-content min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <Section tone="canvas" space="lg" className="relative overflow-hidden pt-8 md:pt-14">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col gap-4 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle border border-line text-brand text-xs sm:text-sm font-semibold max-w-fit">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Enterprise &amp; Startup Solutions
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-content mb-2 leading-tight">
                Welcome to Kre8ly
              </h1>

              <p className="block text-lg sm:text-xl lg:text-2xl text-brand font-medium">
                Your Partner in Digital Excellence
              </p>

              <p className="text-sm sm:text-base md:text-lg text-content-secondary mt-2 leading-relaxed max-w-2xl">
                At Kre8ly, our mission is to empower businesses to thrive in the digital age
                through innovative, cutting-edge solutions. We specialize in transforming your online
                presence to drive growth and success. By partnering with us, you’ll gain the expertise
                needed to navigate the digital landscape confidently and achieve your business goals
                effectively.
              </p>

              <div className="pt-4 flex items-center gap-3">
                <Link
                  to="/contact-us"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
                >
                  Start a Project
                  <FiArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#servicesList"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-control border border-line bg-surface px-6 text-sm font-semibold text-content transition-all duration-200 hover:bg-surface-sunken"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* Right Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 flex items-center justify-center"
            >
              <div className="relative rounded-panel border border-line bg-surface p-4 sm:p-6 shadow-sm w-full max-w-md lg:max-w-none">
                <img
                  src={ServiceGif}
                  alt="Kre8ly Digital Services"
                  className="w-full h-auto object-cover rounded-card"
                />
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ================= SERVICES SHOWCASE ================= */}
        <Section id="servicesList" tone="sunken" space="lg">
          <SectionHeader
            eyebrow="Our Capabilities"
            title={
              <>
                Our Top <span className="text-brand">Services</span>
              </>
            }
            lead="We are your trusted partner for a wide range of IT services. Discover how we can empower your business:"
            align="center"
          />

          <div className="max-w-6xl mx-auto flex flex-col gap-10 mt-8">
            {SERVICES.map((service, index) => {
              const imageFirst = index % 2 === 1;

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="group rounded-panel border border-line bg-surface p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand/40"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    
                    {/* Media Column */}
                    <div
                      className={`md:col-span-5 flex items-center justify-center ${
                        imageFirst ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <div className="w-full aspect-[4/3] rounded-card border border-line bg-surface-sunken p-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={service.img}
                          alt={service.img_alt}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`md:col-span-7 flex flex-col items-start text-left ${
                        imageFirst ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-control bg-brand-subtle text-brand border border-line text-xs font-semibold uppercase tracking-wider mb-3">
                        <FiCheckCircle className="text-[11px]" />
                        <span>{service.tag}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-content mb-3 leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-6 pt-4 border-t border-line w-full flex items-center justify-between">
                        <Link
                          to="/contact-us"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                        >
                          Request Consultation &rarr;
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </div>
        </Section>

        {/* ================= WHY CHOOSE US CTA ================= */}
        <Section tone="canvas" space="lg">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto rounded-panel border border-line bg-brand-subtle p-8 sm:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-brand/10 blur-2xl pointer-events-none" />

            <div className="max-w-xl">
              <Eyebrow>Digital Growth Partner</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-content mt-2 mb-3">
                Why Choose Us?
              </h2>
              <p className="text-base md:text-lg text-content-secondary leading-relaxed">
                With a strong commitment to quality and innovation, we are your ideal partner
                for all your IT service needs. Join us in achieving excellence in the digital
                world.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact-us"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-control bg-brand px-6 text-sm font-semibold text-brand-fg shadow-sm transition-all duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:shadow-focus"
              >
                Get Started
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </Section>

        {/* Global Components */}
        <Query darkMode={darkMode} />
        <ChatBot darkMode={darkMode} />
      </main>

      <Footer />
      <MobileFooter darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default ServicePage;