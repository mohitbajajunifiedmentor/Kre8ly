import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const FaqForFellowship = ({ Faqs, darkMode }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {Faqs.map((faq, index) => (
        <div
          key={index}
          className=" rounded-lg shadow-lg mb-4 overflow-hidden bg-surface"
        >
          <button
            className="w-full text-left p-6 focus:outline-none hover:bg-brand hover:bg-brand-hover hover:text-primary transition duration-300"
            onClick={() => handleFaq(index)}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm md:text-lg font-semibold pr-4 dark:text-white">
                {faq.question}
              </h4>
              <div>
                <FaChevronUp
                  className={`${
                    openFaqIndex === index ? "rotate-180" : ""
                  } transition-all duration-300 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>
          </button>
          {openFaqIndex === index && (
            <div className="px-6 pb-6 text-content-secondary pt-2">
              <p className="text-sm md:text-base text-left">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqForFellowship;
