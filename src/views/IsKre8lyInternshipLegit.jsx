import React from "react";
import { Helmet } from "@/lib/helmet-compat";
import {
      CheckCircle2,
      HelpCircle,
      ChevronDown,
      ShieldCheck,
      BadgeIndianRupee,
      BriefcaseBusiness,
      ArrowRight
} from "lucide-react";
import { Link } from "@/lib/router-compat";

const IsKre8lyInternshipLegit = ({ darkMode }) => {

      const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                  {
                        "@type": "Question",
                        "name": "Is Kre8ly internship legit?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Kre8ly operates as a training-oriented internship platform offering skill development and project-based learning. Participation is subject to disclosed terms and individual engagement."
                        }
                  },
                  {
                        "@type": "Question",
                        "name": "Is Kre8ly internship paid?",
                        "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes, The Skill + Project Virtual internship programs are paid, and applicable fees are disclosed during enrollment and the internship is completely free."
                        }
                  }
            ]
      };

      return (
            <>
                  <Helmet>
                        <title>Is Kre8ly Internship Legit ?</title>
                        <meta
                              name="description"
                              content="Transparent overview of Kre8ly internship program."
                        />
                        <script type="application/ld+json">
                              {JSON.stringify(faqSchema)}
                        </script>
                  </Helmet>

                  <div className="min-h-screen font-sans text-slate-900 dark:text-slate-100 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-[#070A12] dark:via-[#070A12] dark:to-[#0B1020] transition-colors duration-300">
                        {/* Subtle background decor */}
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                              <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[140px] dark:bg-indigo-500/10" />
                              <div className="absolute -bottom-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-[140px] dark:bg-sky-400/10" />
                        </div>

                        <div className="relative">
                              {/* Hero */}
                              <header className="pt-24 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-6" id="hero">
                                    <div className="max-w-6xl mx-auto">
                                          <div className="max-w-3xl">
                                                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200">
                                                      <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-300" />
                                                      Transparent overview • Learn before you enroll
                                                </div>

                                                <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                                                      Is <span className="text-[#334C79] dark:text-indigo-300">Kre8ly</span>{" "}
                                                      Internship Legit?
                                                </h1>

                                                <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                                      Kre8ly operates as a skill-based, training-oriented internship platform focused on
                                                      practical learning exposure, project experience, and guided support for students and early-career learners.
                                                      Experiences can vary based on expectations and participation—this page breaks down the model clearly so you can decide confidently.
                                                </p>

                                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                                      <Link
                                                            to="/leaderboard"
                                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                                                      >
                                                            View stipend list <ArrowRight className="h-4 w-4" />
                                                      </Link>
                                                      <a
                                                            // href="https://api.whatsapp.com/send?phone=9108645322947"
                                                            href="https://api.whatsapp.com/send?phone=9518856261"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900"
                                                      >
                                                            Contact support
                                                      </a>
                                                </div>
                                          </div>

                                          {/* Quick facts */}
                                          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {[
                                                      {
                                                            icon: <ShieldCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />,
                                                            title: "Program nature",
                                                            body: "Training + project-based learning (not a job offer).",
                                                      },
                                                      {
                                                            icon: <BadgeIndianRupee className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />,
                                                            title: "Fees & disclosure",
                                                            body: "Fees, scope, and deliverables are shown during enrollment.",
                                                      },
                                                      {
                                                            icon: <BriefcaseBusiness className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />,
                                                            title: "Outcomes",
                                                            body: "Results depend on participation; no blanket guarantee of employment.",
                                                      },
                                                ].map((card) => (
                                                      <div
                                                            key={card.title}
                                                            className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50"
                                                      >
                                                            <div className="flex items-start gap-3">
                                                                  <div className="mt-0.5 rounded-xl bg-indigo-50 p-2 dark:bg-indigo-500/10">
                                                                        {card.icon}
                                                                  </div>
                                                                  <div>
                                                                        <p className="font-semibold">{card.title}</p>
                                                                        <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                                                              {card.body}
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </header>

                              {/* Content */}
                              <main className="px-4 sm:px-6 pb-20">
                                    <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
                                          {[
                                                {
                                                      title: "Overview of the Kre8ly Internship Program",
                                                      intro: (
                                                            <>
                                                                  The Kre8ly Skill+Project based Virtual internship Program is structured as a{" "}
                                                                  <strong>paid training and experiential learning program</strong> (not an employment offer). Opportunity-based job placement offers and top performers may receive batch-based stipends as per program terms.
                                                            </>
                                                      ),
                                                      bullets: [
                                                            "Fee-based enrollment",
                                                            "Learning-first and project-driven structure",
                                                            "No representation of guaranteed employment",
                                                            "Emphasis on portfolio building",
                                                      ],
                                                },
                                                {
                                                      title: "Is Kre8ly a Paid Internship?",
                                                      intro: (
                                                            <>
                                                                  Yes. Kre8ly internships are paid training & virtual internship programs. Program fees, scope, and deliverables are disclosed during the enrollment process.
                                                            </>
                                                      ),
                                                      bullets: [
                                                            "Review program details carefully",
                                                            "Ask questions before enrolling (contact support if needed)",
                                                            "Ensure your goals match the program structure",
                                                      ],
                                                },
                                                {
                                                      title: "Why Are There Mixed Reviews Online?",
                                                      intro: (
                                                            <>
                                                                  Reviews often reflect <strong>different expectations</strong>. Dissatisfaction can happen when someone expects outcomes outside the stated scope (for example: guaranteed stipend, free advanced training, or guaranteed placement without project effort). Outcomes depend on participation.
                                                            </>
                                                      ),
                                                      bullets: [
                                                            "Individual participation and consistency",
                                                            "Completion of assigned work",
                                                            "Engagement with resources and guidance channels",
                                                            "Performance in project submissions",
                                                            "Understanding the program’s deliverables upfront",
                                                      ],
                                                },
                                                {
                                                      title: "What Does the Kre8ly Internship Offer?",
                                                      intro: "Depending on the selected program and completion status, participants may receive:",
                                                      bullets: [
                                                            "Access to structured learning materials",
                                                            "Practical projects aligned with the chosen domain",
                                                            "Guidance or feedback through assigned channels",
                                                            "Completion documentation (Offer letter, ID Card, Certificate, LOR, Project Reports, NOC) subject to requirements",
                                                            "Swags & goodies delivered to your location (where applicable)",
                                                      ],
                                                      footer:
                                                            "Actual deliverables can vary by program and are not uniform across all participants.",
                                                },
                                                {
                                                      title: "Who Is the Kre8ly Internship Suitable For?",
                                                      intro: "The program may be suitable for individuals who:",
                                                      bullets: [
                                                            "Want hands-on learning experience",
                                                            "Understand and accept paid training models",
                                                            "Are self-driven and willing to participate actively",
                                                            "View internships primarily as learning opportunities",
                                                            "Are from non-IT backgrounds and want to switch domains",
                                                            "Are students, freshers, or career-gap candidates",
                                                      ],
                                                },
                                                {
                                                      title: "Who May Want to Consider Other Options?",
                                                      intro: "The program may not be suitable for individuals who:",
                                                      bullets: [
                                                            "Need guaranteed stipend internships",
                                                            "Expect guaranteed job placement (instead of opportunity-based placement)",
                                                            "Prefer fixed corporate internship structures",
                                                            "Cannot commit time to learning activities",
                                                            "Do not want to work on real-time/live projects",
                                                      ],
                                                },
                                                {
                                                      title: "Transparency and Informed Participation",
                                                      intro: "Kre8ly encourages prospective participants to decide based on:",
                                                      bullets: [
                                                            "Clear understanding of program structure",
                                                            "Review of disclosed terms and scope",
                                                            "Personal learning objectives",
                                                      ],
                                                      footer:
                                                            "Enroll only after you’re confident the program aligns with your expectations.",
                                                },
                                                {
                                                      title: "Final Summary",
                                                      intro: (
                                                            <>
                                                                  Kre8ly functions as a Skill + Project training-based virtual internship platform focused on learning, skills, and project exposure. It does not guarantee employment outcomes and is not positioned as a traditional job-based internship.
                                                            </>
                                                      ),
                                                      footer:
                                                            "Evaluate whether a paid, learning-oriented internship model aligns with your goals before enrolling.",
                                                },
                                          ].map((section) => (
                                                <section key={section.title} className="rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
                                                      <div className="p-6 sm:p-10">
                                                            <div className="flex items-start gap-3">
                                                                  <div className="mt-1 h-10 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-sky-400" />
                                                                  <div className="min-w-0">
                                                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                                                                              {section.title}
                                                                        </h2>
                                                                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                                                              {section.intro}
                                                                        </p>
                                                                  </div>
                                                            </div>

                                                            {section.bullets?.length ? (
                                                                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                        {section.bullets.map((item) => (
                                                                              <div
                                                                                    key={item}
                                                                                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-950/30"
                                                                              >
                                                                                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600 dark:text-emerald-400" />
                                                                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                                                                                          {item}
                                                                                    </p>
                                                                              </div>
                                                                        ))}
                                                                  </div>
                                                            ) : null}

                                                            {section.footer ? (
                                                                  <p className="mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                                                                        {section.footer}
                                                                  </p>
                                                            ) : null}

                                                            {section.title === "Overview of the Kre8ly Internship Program" ? (
                                                                  <div className="mt-6">
                                                                        <Link
                                                                              to="/leaderboard"
                                                                              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
                                                                        >
                                                                              Interns who got stipend list <ArrowRight className="h-4 w-4" />
                                                                        </Link>
                                                                  </div>
                                                            ) : null}

                                                            {section.title === "Is Kre8ly a Paid Internship?" ? (
                                                                  <div className="mt-6">
                                                                        <a
                                                                              // href="https://api.whatsapp.com/send?phone=9108645322947"
                                                                              href="https://api.whatsapp.com/send?phone=9518856261"
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
                                                                        >
                                                                              Contact us for clarification <ArrowRight className="h-4 w-4" />
                                                                        </a>
                                                                  </div>
                                                            ) : null}
                                                      </div>
                                                </section>
                                          ))}

                                          {/* FAQ */}
                                          <section className="pt-4">
                                                <div className="flex items-center justify-center gap-2 text-center">
                                                      <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                                                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                                            Frequently Asked Questions
                                                      </h2>
                                                </div>

                                                <div className="mt-6 grid grid-cols-1 gap-4">
                                                      {[
                                                            {
                                                                  q: "Is Kre8ly internship legit?",
                                                                  a: (
                                                                        <>
                                                                              Kre8ly operates as a training-oriented internship platform offering skill development and project-based learning. Participation is subject to disclosed terms and individual engagement.
                                                                        </>
                                                                  ),
                                                            },
                                                            {
                                                                  q: "Is Kre8ly internship paid or free?",
                                                                  a: (
                                                                        <>
                                                                              The Skill + Project Virtual programs are <strong>paid</strong>, and applicable fees are disclosed during enrollment. Some offerings may be free depending on the program; always confirm the exact plan during enrollment.
                                                                        </>
                                                                  ),
                                                            },
                                                            {
                                                                  q: "Does Kre8ly provide opportunity-based jobs or placements?",
                                                                  a: (
                                                                        <>
                                                                              Opportunity-based placements may be provided as per program terms. For the most accurate details for your cohort/program,{" "}
                                                                              <a
                                                                                    // href="https://api.whatsapp.com/send?phone=9108645322947"
                                                                                    href="https://api.whatsapp.com/send?phone=919518856261"
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="font-semibold text-indigo-700 underline underline-offset-4 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-200"
                                                                              >
                                                                                    contact support
                                                                              </a>
                                                                              .
                                                                        </>
                                                                  ),
                                                            },
                                                      ].map((item) => (
                                                            <details
                                                                  key={item.q}
                                                                  className="group rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-900/50"
                                                            >
                                                                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 dark:text-slate-100">
                                                                        <span className="text-base sm:text-lg">{item.q}</span>
                                                                        <ChevronDown className="h-5 w-5 flex-none text-indigo-600 transition-transform group-open:rotate-180 dark:text-indigo-300" />
                                                                  </summary>
                                                                  <div className="mt-4 border-t border-slate-200 pt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-300">
                                                                        {item.a}
                                                                  </div>
                                                            </details>
                                                      ))}
                                                </div>
                                          </section>
                                    </div>
                              </main>
                        </div>
                  </div>
            </>
      );
};

export default IsKre8lyInternshipLegit;