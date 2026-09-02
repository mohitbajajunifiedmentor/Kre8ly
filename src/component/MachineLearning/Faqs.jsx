import React, { useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faqs = ({ varient = "", Faqs: items = [], darkMode }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const baseId = useId();

  const handleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full md:w-10/12">
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="text-center md:mb-16 mb-4"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div data-aos="fade-up" className="mx-auto">
        {items.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          const buttonId = `${baseId}-faq-${index}-button`;
          const panelId = `${baseId}-faq-${index}-panel`;

          return (
            // The `data-aos` element's className MUST stay constant.
            //
            // aos.css sets `[data-aos] { opacity: 0 }` and the AOS runtime
            // reveals it by adding an `aos-animate` class straight onto the
            // DOM node. React does not know about that class, so the moment a
            // re-render writes a *different* className string onto the same
            // element, `aos-animate` is wiped and the card drops back to
            // opacity 0 — it vanishes on click and only reappears when
            // scrolling makes AOS re-apply the class.
            //
            // So the animated wrapper is static, and every isOpen-dependent
            // class lives on an inner element that AOS never touches.
            <div data-aos="fade-up" key={index} className="mb-3">
              <div
                className={[
                  "overflow-hidden rounded-card border bg-surface",
                  "transition-[border-color,box-shadow] duration-200",
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

                  <FaChevronDown
                    aria-hidden="true"
                    className={[
                      "h-4 w-4 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-brand" : "text-content-muted",
                    ].join(" ")}
                  />
                </button>
              </h3>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-4 pb-6 pt-2 md:px-6"
                >
                  <p className="text-left text-base leading-relaxed text-content-secondary">
                    {faq.answer}
                  </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;