import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/router-compat";

const Certificates = "/assets/machineLearning/Certificates3.jpg";
const GoogleCertiDM = "/assets/machineLearning/GoogleCertiDM.png";
const HotspotCertiDM = "/assets/machineLearning/HotspotCertiDM.png";
const futureSkillsCertiDM = "/assets/machineLearning/futureSkillsCertiDM.png";

const cardsData = [
  {
    title: "Card One",
    company: "Google",
    details:
      "Course Completion Certificate is awarded to you for the dedication and time you have provided to learn and enhance your skills during your training.",
    image: GoogleCertiDM,
  },
  {
    title: "Card Two",
    company: "HubSpot",
    details:
      "Course Completion Certificate is awarded to you for the dedication and time you have provided to learn and enhance your skills during your training.",
    image: HotspotCertiDM,
  },
  {
    title: "Card Three",
    company: "Future Skills",
    details:
      "Course Completion Certificate is awarded to you for the dedication and time you have provided to learn and enhance your skills during your training.",
    image: futureSkillsCertiDM,
  },
];

const Certificate = ({ CourseName = "", location = "", varient, variant }) => {
  const url = usePathname();
  const activeVariant = varient || variant;

  const isDataAnalyst =
    activeVariant === "DataAnalystFellowship" ||
    activeVariant === "DataAnalyst" ||
    CourseName === "Data Analyst Fellowship" ||
    CourseName === "Data Analyst";

  const isFinancialAnalyst =
    activeVariant === "FinancialAnalyst" ||
    activeVariant === "FinancialAnalystFellowship" ||
    CourseName === "Financial Analyst Fellowship" ||
    CourseName === "Financial Analyst";

  const isBusinessAnalyst =
    activeVariant === "BusinessAnalyst" ||
    activeVariant === "BusinessAnalystFellowship" ||
    CourseName === "Business Analyst Fellowship" ||
    CourseName === "Business Analyst";

  const isDigitalMarketing =
    activeVariant === "DigitalMarketing" ||
    activeVariant === "DigitalMarketingFellowship" ||
    activeVariant === "digital-marketing" ||
    CourseName === "Digital Marketing Fellowship" ||
    CourseName === "Digital Marketing";

  const isDataScience =
    activeVariant === "DataScience" ||
    activeVariant === "DataScienceFellowship" ||
    activeVariant === "data-science" ||
    CourseName === "Data Science Fellowship" ||
    CourseName === "Data Science";

  // Merged headings prevent the generic top H2 from rendering
  const hasMergedHeading =
    isDataAnalyst ||
    isFinancialAnalyst ||
    isBusinessAnalyst ||
    isDigitalMarketing ||
    isDataScience;

  const renderContent = () => {
    if (isDataScience) {
      return (
        <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-content tracking-tight mb-4">
            Data Science Fellowship Certificate
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-content-secondary mb-6">
            When you finish, you receive a Kre8ly certificate for your resume and LinkedIn profile. What gives it weight is the project work behind it. It helps whether you&apos;re aiming for a tech company, an analytics firm, a startup or freelance work.
          </p>

          {/* Benefits Grid */}
          <div className="space-y-4 my-6">
            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Industry Recognition</h4>
                <p className="text-sm text-content-secondary">
                  A certificate you can show to recruiters and hiring partners.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Portfolio Projects</h4>
                <p className="text-sm text-content-secondary">
                  Six projects you can walk through in interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Lifetime Access</h4>
                <p className="text-sm text-content-secondary">
                  Keep your certificate and course materials.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Career Support</h4>
                <p className="text-sm text-content-secondary">
                  Placement assistance and interview preparation.
                </p>
              </div>
            </div>
          </div>

          {/* Internal links line */}
          <p className="text-sm md:text-base leading-relaxed text-content-secondary mt-8 pt-6 border-t border-line/60">
            Exploring other tracks? See our{" "}
            <Link to="/fellowship/data-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Data Analyst fellowship
            </Link>
            ,{" "}
            <Link to="/fellowship/business-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Business Analyst fellowship
            </Link>{" "}
            or{" "}
            <Link to="/fellowship/machine-learning" className="font-medium text-brand underline hover:text-brand-hover">
              Machine Learning course
            </Link>
            .
          </p>
        </div>
      );
    }

    if (isDigitalMarketing) {
      return (
        <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-content tracking-tight mb-4">
            Digital Marketing Fellowship Certificate
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-content-secondary mb-6">
            On completing the program, you receive a Kre8ly certificate for your resume and LinkedIn profile. It sits alongside the projects you built, which is what agencies and clients tend to look at. It&apos;s useful whether you want to join an agency, work in a company&apos;s marketing team or freelance.
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Industry Recognition</h4>
                <p className="text-sm text-content-secondary">
                  A certificate to show recruiters and clients.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Portfolio Projects</h4>
                <p className="text-sm text-content-secondary">
                  Campaign and analytics work you can present in interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Lifetime Access</h4>
                <p className="text-sm text-content-secondary">
                  Keep your certificate and course materials.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Career Support</h4>
                <p className="text-sm text-content-secondary">
                  Placement assistance and interview preparation.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-content-secondary mt-8 pt-6 border-t border-line/60">
            Looking at other tracks? See our{" "}
            <Link to="/fellowship/data-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Data Analyst fellowship
            </Link>
            ,{" "}
            <Link to="/fellowship/business-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Business Analyst fellowship
            </Link>{" "}
            or{" "}
            <Link to="/fellowship/data-science" className="font-medium text-brand underline hover:text-brand-hover">
              Data Science course
            </Link>
            .
          </p>
        </div>
      );
    }

    if (isBusinessAnalyst) {
      return (
        <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-content tracking-tight mb-4">
            Business Analyst Online Internship Certification Program
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-content-secondary mb-6">
            On completing the program, you receive a Kre8ly certificate for your resume and LinkedIn profile. It&apos;s backed by documented project work, so you have something concrete to discuss in interviews. It&apos;s useful whether you&apos;re aiming for an IT services company, a bank, an e-commerce firm or a startup.
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Industry Recognition</h4>
                <p className="text-sm text-content-secondary">
                  A certificate you can show to recruiters and add to LinkedIn.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Portfolio Projects</h4>
                <p className="text-sm text-content-secondary">
                  Documented projects you can walk through in interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Lifetime Access</h4>
                <p className="text-sm text-content-secondary">
                  Keep your certificate and course materials.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Career Support</h4>
                <p className="text-sm text-content-secondary">
                  Placement assistance and interview preparation.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-content-secondary mt-8 pt-6 border-t border-line/60">
            Looking at other tracks? Try our{" "}
            <Link to="/fellowship/data-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Data Analyst fellowship
            </Link>
            ,{" "}
            <Link to="/fellowship/financial-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Financial Analyst fellowship
            </Link>{" "}
            or{" "}
            <Link to="/digital-marketing" className="font-medium text-brand underline hover:text-brand-hover">
              Digital Marketing certification
            </Link>
            .
          </p>
        </div>
      );
    }

    if (isFinancialAnalyst) {
      return (
        <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-content tracking-tight mb-4">
            Financial Analyst Fellowship Certificate
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-content-secondary mb-6">
            When you complete the program, you receive a Kre8ly certificate you can add to your resume and LinkedIn profile. It comes with project work behind it, which is what hiring managers like to see. It&apos;s useful whether you&apos;re aiming for a bank, a company finance team, a consulting or accounting firm, or freelance work.
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Industry Recognition</h4>
                <p className="text-sm text-content-secondary">
                  A certificate you can share with recruiters and hiring partners.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Portfolio Projects</h4>
                <p className="text-sm text-content-secondary">
                  Finance projects you can walk through in interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Lifetime Access</h4>
                <p className="text-sm text-content-secondary">
                  Keep your certificate and course materials.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Career Support</h4>
                <p className="text-sm text-content-secondary">
                  Job placement assistance and interview preparation.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-content-secondary mt-8 pt-6 border-t border-line/60">
            Exploring other tracks? See our{" "}
            <Link to="/fellowship/data-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Data Analyst fellowship
            </Link>
            ,{" "}
            <Link to="/fellowship/business-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Business Analyst fellowship
            </Link>{" "}
            or{" "}
            <Link to="/fellowship/data-science" className="font-medium text-brand underline hover:text-brand-hover">
              Data Science course
            </Link>
            .
          </p>
        </div>
      );
    }

    if (isDataAnalyst) {
      return (
        <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-content tracking-tight mb-4">
            Data Analyst Internship Certification Online in India
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-content-secondary mb-6">
            When you complete the program, you receive a Kre8ly certificate for
            your resume and LinkedIn profile. It comes with project work
            behind it, which is what recruiters tend to look at. It helps
            whether you&apos;re aiming for a tech company, an agency or freelance
            projects.
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-success-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Industry Recognition</h4>
                <p className="text-sm text-content-secondary">
                  A certificate you can share with recruiters and hiring partners.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Portfolio Projects</h4>
                <p className="text-sm text-content-secondary">
                  Professional projects you can show in interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-brand-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Lifetime Access</h4>
                <p className="text-sm text-content-secondary">
                  Keep your certificate and course materials.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3.5">
              <div className="w-6 h-6 bg-warning-subtle rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-content">Career Support</h4>
                <p className="text-sm text-content-secondary">
                  Job placement assistance and interview preparation.
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-content-secondary mt-8 pt-6 border-t border-line/60">
            Looking at other tracks? See our{" "}
            <Link to="/fellowship/data-science" className="font-medium text-brand underline hover:text-brand-hover">
              Data Science fellowship
            </Link>
            ,{" "}
            <Link to="/fellowship/business-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Business Analyst fellowship
            </Link>
            ,{" "}
            <Link to="/fellowship/financial-analyst" className="font-medium text-brand underline hover:text-brand-hover">
              Financial Analyst fellowship
            </Link>{" "}
            or{" "}
            <Link to="/digital-marketing" className="font-medium text-brand underline hover:text-brand-hover">
              Digital Marketing certification
            </Link>
            .
          </p>
        </div>
      );
    }

    // Default fallback
    return (
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
        <h2 className="text-xl md:text-2xl font-semibold text-content mb-4 my-4">
          {CourseName} Course Certificate
        </h2>
        <p className="text-sm md:text-base text-content-secondary w-full leading-relaxed">
          We are pleased to provide a thorough certification program that takes candidates on an immersive and skill-focused journey. This {CourseName} certification accelerates your professional progress whether you&apos;re hoping to land a position in a tech firm, join a creative agency, or start working on freelancing projects.
        </p>
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 md:py-16">
      {/* Shows generic heading only for tracks without their own merged headings */}
      {!hasMergedHeading && (
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-content my-4">
            Course Certificate
          </h2>
          <p className="text-lg text-content-secondary max-w-2xl mx-auto">
            We are pleased to provide a thorough certification program that takes
            candidates on an immersive and skill-focused journey.
          </p>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-16">
          {/* Certificate Frame */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface p-3 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src={Certificates}
                alt={`${CourseName} Certificate Preview`}
                loading="lazy"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="w-full md:w-1/2 text-left">
            {renderContent()}
          </div>
        </div>

        {/* Partner Cards for Digital Marketing */}
        {url === "/digital-marketing" && (
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="group relative w-full max-w-sm bg-surface shadow-md rounded-xl overflow-hidden border border-line transition-all duration-300 hover:scale-105"
              >
                <img
                  src={card.image}
                  alt={card.company}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-surface/95 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                  <h4 className="text-lg font-bold mb-2 text-content">{card.company}</h4>
                  <p className="text-sm text-content-secondary">{card.details}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificate;