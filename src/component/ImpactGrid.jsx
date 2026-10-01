import React from "react";
import { impact } from "../Utils/ImpactNumber";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const ImpactGrid = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      {/* Auto-responsive, perfectly balanced flex/grid */}
      <div className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6">
        {impact.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              delay: index * 0.08,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4 }}
            className="w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1.25rem)] min-w-[140px] max-w-[260px] flex-grow flex flex-col justify-between p-5 rounded-card bg-surface border border-line shadow-sm hover:border-brand/40 hover:shadow-md transition-all duration-300 text-center"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-content">
                <CountUp
                  end={item.number}
                  duration={3}
                  decimals={item.number % 1 !== 0 ? 1 : 0}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
                <span className={`ml-0.5 ${item.color || "text-brand"}`}>
                  {item.suffix}
                </span>
              </h3>
            </div>

            <p className="mt-2 text-xs sm:text-sm font-medium text-content-secondary leading-snug">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImpactGrid;