import React from "react";

const IndustryExperts = ({ CarouselInfo, varient }) => {
  const experts =
    CarouselInfo?.filter((item) => item?.varient === varient) ?? [];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      className="w-full flex flex-wrap justify-center items-stretch gap-4 rounded-md p-4 overflow-hidden"
    >
      {experts.map((item, index) => (
        <div
          key={index}
          className="card card-enter mentor-card bg-white dark:bg-surface border border-transparent dark:border-line-strong rounded-xl shadow-md dark:shadow-none p-4 sm:p-6 w-full sm:w-[300px] transform hover:scale-105 transition-all duration-500"
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="gradient-border">
              <div className="profile-image w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-brand to-brand-active rounded-full flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                <img
                  src={item.profile.profileImageUrl}
                  alt={item.profile.profile_alt || item.profile.name}
                  loading="lazy"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-content mb-1">
              {item.profile.name}
            </h3>
            <p className="text-content-secondary text-sm mb-2">
              {item.profile.jobTitle}
            </p>
            <p className="text-content-muted text-xs sm:text-sm italic leading-relaxed px-2 sm:px-0">
              {item.profile.quote}
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
            {item?.techstack?.map((skill, skillIndex) => (
              <img
                key={skillIndex}
                src={skill?.image}
                alt={skill?.alt || ""}
                loading="lazy"
                className="w-6 h-6 mr-1"
              />
            ))}
          </div>

          {/* LinkedIn Button */}
          <div className="text-center">
            <a
              href={item.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.profile.name} on LinkedIn`}
              className="linkedin-btn bg-[#0A66C2] text-white p-2 sm:p-3 rounded-full hover:opacity-90 inline-flex items-center justify-center transition-opacity"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryExperts;