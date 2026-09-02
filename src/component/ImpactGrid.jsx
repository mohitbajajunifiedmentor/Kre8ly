import React from "react";
import { impact } from "../Utils/ImpactNumber";
import CountUp from "react-countup";

const ImpactGrid = () => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 md:-mt-20"
      >
        {impact.map((item, index) => (
          <div
            key={index}
            className={`w-full max-w-md p-2 rounded-lg bg-white dark:bg-surface
                        border border-transparent dark:border-line-strong
                        shadow-[1.83px_0.92px_4.58px_-2.29px_#0000001A,_1.83px_0px_6.87px_0px_#0000001A] dark:shadow-none
                        ${index >= 4 ? "lg:mx-44 col-span-1 lg:col-span-1" : ""}
                        ${index === 6 ? "col-span-2 lg:col-span-1" : ""}`}
          >
            <div
              data-aos="flip-down"
              data-aos-delay="0"
              data-aos-duration="800"
              className="flex flex-col justify-between gap-4 p-2"
            >
              <h6 className="text-2xl md:text-5xl font-semibold text-content">
                <CountUp
                  end={item.number}
                  duration={4}
                  decimals={item.number % 1 !== 0 ? 1 : 0}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  scrollSpyDelay={800}
                />
                <span className={item.color}>{item.suffix}</span>
              </h6>
              <p className="text-content-muted text-xs md:text-sm font-semibold">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactGrid;