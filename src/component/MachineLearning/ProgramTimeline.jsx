import React, { useState } from "react";

const ProgramTimeline = () => {
  const weeks1 = {
    programName: "One Month Course Program",
    weeks: [
      {
        number: 1,
        timeline: ["Day First", "Monday to Saturday", "Sunday"],
        includes: [
          "Induction Meet",
          "Self Paced Flexible Sessions",
          "Mentor Doubt Sessions",
        ],
      },
      {
        number: 2,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 3,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 4,
        timeline: ["Monday to Saturday", "Sunday", "Last Day"],
        includes: [
          "Self Paced Flexible Sessions",
          "Mentor Doubt Sessions",
          "HR Placement Sessions",
        ],
      },
    ],
  };
  const weeks2 = {
    programName: "Two Month Course Program",
    weeks: [
      {
        number: 1,
        timeline: ["Day First", "Monday to Saturday", "Sunday"],
        includes: [
          "Induction Meet",
          "Self Paced Flexible Sessions",
          "Mentor Doubt Sessions",
        ],
      },
      {
        number: 2,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 3,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 4,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 5,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: "6",
        timeline: ["Monday to Saturday", "Sunday", "Last Day"],
        includes: [
          "Self Paced Flexible Sessions",
          "Mentor Doubt Sessions",
          "HR Placement Sessions",
        ],
      },
    ],
  };
  const weeks3 = {
    programName: "Three Month Course Program",
    weeks: [
      {
        number: 1,
        timeline: ["Day First", "Monday to Saturday", "Sunday"],
        includes: [
          "Induction Meet",
          "Self Paced Flexible Sessions",
          "Mentor Doubt Sessions",
        ],
      },
      {
        number: 2,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 3,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 4,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 5,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: "6-12",
        timeline: ["Monday to Saturday", "Sunday", "Last Day"],
        includes: [
          "Self Paced Flexible Sessions",
          "Mentor Doubt Sessions",
          "HR Placement Sessions",
        ],
      },
    ],
  };
  const weeks4 = {
    programName: "Four Month Course Program",
    weeks: [
      {
        number: 1,
        timeline: ["Day First", "Monday to Saturday", "Sunday"],
        includes: [
          "Induction Meet",
          "Self Paced Flexible Sessions",
          "Mentor Doubt Sessions",
        ],
      },
      {
        number: 2,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 3,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 4,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: 5,
        timeline: ["Monday to Saturday", "Sunday"],
        includes: ["Self Paced Flexible Sessions", "Mentor Doubt Sessions"],
      },
      {
        number: "6-16",
        timeline: ["Monday to Saturday", "Sunday", "Last Day"],
        includes: [
          "Self Paced Flexible Sessions",
          "Mentor Doubt Sessions",
          "HR Placement Sessions",
        ],
      },
    ],
  };

  const [weekData, setWeekData] = useState(weeks1);
  const [activeMonth, setActiveMonth] = useState(1);

  const handleMonthChange = (month) => {
    if (month === 1) {
      setWeekData(weeks1);
    } else if (month === 2) {
      setWeekData(weeks2);
    } else if (month === 3) {
      setWeekData(weeks3);
    } else if (month === 4) {
      setWeekData(weeks4);
    }
    setActiveMonth(month);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="w-full"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-content mb-4">
          Program Timeline
        </h2>
        <p className="text-lg text-content-secondary max-w-2xl mx-auto">
          Each week has self-paced sessions and mentor doubt sessions, and the month ends with an HR placement session.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        className="p-4 w-full flex flex-col justify-center items-center rounded-xl"
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-surface rounded-2xl shadow-md px-4 py-4 md:w-fit mx-auto mb-8">
          {[1, 2, 3, 4].map((month) => (
            <button
              key={month}
              className={`relative transition-all duration-300 rounded-2xl 
        px-4 py-2 sm:px-7 sm:py-4 text-sm font-medium
        ${
          activeMonth === month
            ? "bg-gradient-to-r from-brand to-brand-active text-brand-fg shadow"
            : "text-content-secondary hover:bg-brand-subtle"
        }
      `}
              onClick={() => handleMonthChange(month)}
            >
              Month {month}
              {activeMonth === month && (
                <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-blue-600"></span>
              )}
            </button>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
          className="w-full p-3 rounded-sm"
        >
          <div className="w-full overflow-x-auto">
            <div className="w-full md:max-w-7xl mx-auto">
              <table className="w-full border-separate border-spacing-0 overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-brand to-brand-active text-brand-fg">
                    <th className="p-2 text-xs md:text-sm text-center w-[11rem] rounded-tl-2xl border-r border-line">
                      Weeks
                    </th>
                    <th className="p-2 text-xs md:text-sm text-center text-brand-fg font-semibold bg-gradient-to-r from-brand to-brand-active border-r border-line">
                      Timeline
                    </th>
                    <th className="p-2 text-xs md:text-sm text-center text-brand-fg font-semibold bg-gradient-to-r from-brand to-brand-active rounded-tr-2xl">
                      Includes
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {weekData.weeks.map((weekItem, rowIndex) => (
                    <tr
                      key={weekItem.number}
                      className="even:bg-brand-subtle odd:bg-surface"
                    >
                      {/* Week Column */}
                      <td
                        className={`bg-gradient-to-r from-brand to-brand-active text-brand-fg text-center p-2 font-semibold text-xs md:text-sm border-r border-line
            ${rowIndex === weekData.weeks.length - 1 ? "rounded-bl-2xl" : ""}
          `}
                      >
                        Week {weekItem.number}
                      </td>

                      {/* Timeline Column */}
                      <td className="border-r">
                        {weekItem.timeline.map((item, index) => (
                          <div
                            key={index}
                            className="text-center p-2 text-xs md:text-sm text-content-muted border-b last:border-none font-semibold"
                          >
                            {item}
                          </div>
                        ))}
                      </td>

                      {/* Includes Column */}
                      <td
                        className={`
              ${rowIndex === weekData.weeks.length - 1 ? "rounded-br-2xl" : ""}
            `}
                      >
                        {weekItem.includes.map((item, index) => (
                          <div
                            key={index}
                            className="text-center p-2 text-xs md:text-sm text-content-muted border-b last:border-none font-semibold"
                          >
                            {item}
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramTimeline;