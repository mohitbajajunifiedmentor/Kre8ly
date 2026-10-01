import React from "react";
import { SlCalender } from "react-icons/sl";

import { LiaRupeeSignSolid } from "react-icons/lia";

const CardJob = ({ job, darkMode, swiperColor, index, showcarousel }) => {
  // Helper function to get experience text
  const getExperienceText = () => {
    if (job?.experience) {
      return job.experience;
    }
    return "Not specified";
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover smooth-transition max-w-2xl h-[500px] flex flex-col">
      {/* Header with Company Logo and Basic Info */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            {job?.companyLogo ? (
              <img
                src={job.companyLogo}
                alt={`${job.companyName} logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = "flex";
                  }
                }}
              />
            ) : null}
            <div
              className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg"
              style={{ display: job?.companyLogo ? "none" : "flex" }}
            >
              {job?.companyName?.charAt(0) || "C"}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {job?.title}
            </h3>
            <p className="text-gray-600 font-medium">{job?.companyName}</p>
          </div>
        </div>

        {job?.available && (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Available
          </span>
        )}
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center text-gray-600">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>
            {job?.district}, {job?.state}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
            />
          </svg>
          <span className="capitalize">
            {job?.typeofEmployment || "Full-time"}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span className="capitalize">{getExperienceText()}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
          <span className="font-semibold text-green-600">
            {job?.salary} LPA
          </span>
        </div>
      </div>

      {/* Skills */}
      {job?.skills && job.skills.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Required Skills:
          </h4>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="mb-6 flex items-start">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {job?.description}
        </p>
      </div>

      {/* Footer with Deadline and Apply Button */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <div className="text-sm text-gray-500">
          <span>Deadline: {formatDate(job?.deadline)}</span>
        </div>

        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 smooth-transition text-sm font-medium">
            Save Job
          </button>
          <a
            href={`https://jobs.unifiedmentor.com/jobs/${job?._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 smooth-transition text-sm font-medium"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardJob;
