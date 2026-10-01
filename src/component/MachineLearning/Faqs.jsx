import React, { useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Faqs = ({ varient = "", Faqs: items = [], darkMode }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const baseId = useId();

  const handleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full md:w-10/12">
      {/* Overskrift */}
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-center md:mb-16 mb-6"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Spørgsmål og svar */}
      <div data-aos="fade-up" className="mx-auto space-y-3">
        {items.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          const buttonId = `${baseId}-faq-${index}-button`;
          const panelId = `${baseId}-faq-${index}-panel`;

          return (
            <div data-aos="fade-up" key={index}>
              <div
                className={[
                  "overflow-hidden rounded-card border bg-surface",
                  "transition-all duration-300",
                  isOpen
                    ? "border-brand/40 shadow-sm"
                    : "border-line hover:border-line-strong",
                ].join(" ")}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => handleFaq(index)}
                    className={[
                      "flex w-full items-center justify-between gap-4 p-4 md:p-6 text-left",
                      "transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:shadow-focus",
                      isOpen ? "bg-brand-subtle" : "hover:bg-surface-sunken",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "text-base font-semibold",
                        isOpen ? "text-brand" : "text-content",
                      ].join(" ")}
                    >
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="shrink-0"
                    >
                      <FaChevronDown
                        aria-hidden="true"
                        className={[
                          "h-4 w-4 shrink-0 transition-colors duration-200",
                          isOpen ? "text-brand" : "text-content-muted",
                        ].join(" ")}
                      />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6 pt-2 md:px-6">
                        <p className="text-left text-base leading-relaxed text-content-secondary">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;