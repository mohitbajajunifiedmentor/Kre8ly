import React from "react";
import { FellowshipHighlights } from "../../Utils/FellowShip/CommonJson/Common";
import { usePathname } from "next/navigation";

const iconsBgColors = [
  "bg-[#C7BDF6]",
  "bg-[#FFD2E1]",
  "bg-[#BADCFF]",
  "bg-[#FDEEB8]",
  "bg-[#FFD4BE]",
  "bg-[#9DE8CF]",
];

const VARIANT_CONTENT = {
  DataAnalystFellowship: {
    heading: "Perks of the Data Analyst Fellowship at Kre8ly",
    description:
      "Industry experience, mentor guidance and career support come with the program.",
  },
  FinancialAnalystFellowship: {
    heading: "Perks of the Financial Analyst Fellowship at Kre8ly",
    description:
      "Mentor guidance, practical experience and career support come with the program.",
  },
  BusinessAnalystFellowship: {
    heading: "Perks of the Internship at Kre8ly",
    description:
      "Mentorship, project work and career support are all included in the fellowship.",
  },
  DigitalMarketingFellowship: {
    heading: "Perks of the Digital Marketing Fellowship at Kre8ly",
    description:
      "Learn live with industry experts, run real campaigns and gain career support.",
  },
  "digital-marketing": {
    heading: "Perks of the Internship at Kre8ly",
    description:
      "Hands-on training, mentor access and career support are all part of the package.",
  },
  DataScienceFellowship: {
    heading: "Perks of the Internship at Kre8ly",
    description:
      "Mentor access, project work and job support all come with the fellowship.",
  },
};

const DEFAULT_CONTENT = {
  heading: "Perks of the Internship at Kre8ly",
  description:
    "Industry experience, mentor guidance and career support come with the program.",
};

const PerkCard = ({ icon, iconAlt, iconBg, text, textClassName }) => (
  <div
    className="flex items-center gap-4 bg-white dark:bg-surface rounded-lg p-6 w-full
               border-t border-[#7192D2] dark:border-primary relative
               hover:scale-105 transition-all duration-200 ease-in-out mt-4
               shadow-2xl dark:shadow-none"
  >
    <div
      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl p-2 flex justify-center items-center absolute ${iconBg}`}
    >
      <img
        src={icon}
        alt={iconAlt}
        loading="lazy"
        className="object-contain w-8 h-8"
      />
    </div>
    <p
      className={`text-content text-sm md:text-lg leading-relaxed break-words w-full ${textClassName}`}
    >
      {text}
    </p>
  </div>
);

const PerksOfInternship = ({ varient, variant }) => {
  const url = usePathname();
  const isDigitalMarketing = url === "/digital-marketing";

  // Determine active variant key
  const activeVariantKey =
    varient || variant || (isDigitalMarketing ? "digital-marketing" : null);

  const content = VARIANT_CONTENT[activeVariantKey] || DEFAULT_CONTENT;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="w-full h-full flex flex-col justify-center items-center gap-y-6 md:gap-y-16"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-content max-w-4xl mb-4">
          {content.heading}
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          {content.description}
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-10 lg:gap-x-20 md:gap-y-16 mx-auto w-full lg:w-[90%] z-10"
      >
        {FellowshipHighlights?.slice(0, 6)?.map((highlight, index) => (
          <PerkCard
            key={index}
            icon={highlight.icon}
            iconAlt={highlight.icon_alt || highlight.text}
            iconBg={iconsBgColors[index % iconsBgColors.length]}
            text={
              isDigitalMarketing && index === 4
                ? "100% Live Classes"
                : highlight.text
            }
            textClassName="text-right md:text-center"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10 lg:gap-x-36 md:gap-y-20 mx-auto w-full lg:w-[90%] z-10">
        {FellowshipHighlights?.slice(6, 8)?.map((highlight, index) => (
          <PerkCard
            key={index}
            icon={highlight.icon}
            iconAlt={highlight.icon_alt || highlight.text}
            iconBg={index === 0 ? "bg-[#EEF997]" : "bg-[#A3BEEE]"}
            text={highlight.text}
            textClassName="text-end pl-14 md:pl-0 md:text-center"
          />
        ))}
      </div>
    </div>
  );
};

export default PerksOfInternship;