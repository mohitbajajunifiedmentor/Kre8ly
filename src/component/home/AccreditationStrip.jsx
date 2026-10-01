"use client";

import AccredationSwiper from "@/component/AccredationSwiper";
import { motion } from "framer-motion";

const ITEMS = [
  {
    light: "/assets/Accreditation/Iso_logo.png",
    dark: "/assets/Accreditation/Accreditation1_light.png",
    alt: "ISO 9001 certified, approved by MSME",
  },
  {
    light: "/assets/Accreditation/mca_logo.png",
    dark: "/assets/Accreditation/Accreditation2_light.png",
    alt: "Ministry of Corporate Affairs, Government of India",
  },
  {
    light: "/assets/Accreditation/Nasscom.png",
    dark: "/assets/Accreditation/Accreditation3_light.png",
    alt: "NASSCOM member",
  },
  {
    light: "/assets/Accreditation/Startup-india-logo1.png",
    dark: "/assets/Accreditation/Accreditation4_light.png",
    alt: "Startup India initiative",
  },
];

export default function AccreditationStrip() {
  return (
    <section
      aria-label="Accreditations"
      className="w-full border-y border-line bg-surface-sunken/40 px-4 py-8 md:px-6 md:py-10"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-6 text-xs font-bold uppercase tracking-widest text-content-muted">
          Recognised &amp; Accredited By Industry Authorities
        </p>

        {/* Mobile View */}
        <div className="md:hidden">
          <AccredationSwiper />
        </div>

        {/* Desktop View */}
        <ul className="hidden grid-cols-4 items-center gap-8 md:grid">
          {ITEMS.map((item, idx) => (
            <motion.li
              key={item.alt}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="flex items-center justify-center p-2"
            >
              <img
                src={item.light}
                alt={item.alt}
                loading="lazy"
                className="max-h-12 w-auto opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:hidden"
              />
              <img
                src={item.dark}
                alt={item.alt}
                loading="lazy"
                className="hidden max-h-12 w-auto opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:block"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}