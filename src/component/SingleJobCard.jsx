import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { GoBriefcase } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

const SingleJobCard = ({ job, darkMode }) => {
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
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 card-hover smooth-transition max-w-2xl h-[400px] sm:h-[500px] flex flex-col">
      {/* Header with Company Logo and Basic Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
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
              className="w-full h-full bg-sky-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-base sm:text-lg"
              style={{ display: job?.companyLogo ? "none" : "flex" }}
            >
              {job?.companyName?.charAt(0) || "C"}
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
              {job?.title.length > 20
                ? job?.title.slice(0, 20) + "..."
                : job?.title}
            </h3>
            <p className="text-gray-600 font-medium text-sm sm:text-base">
              {job?.companyName}
            </p>
          </div>
        </div>

        {job?.available && (
          <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
            Available
          </span>
        )}
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
        <div className="flex items-center text-gray-600">
          <IoLocationOutline className="w-4 h-4 mr-1 sm:mr-2" />
          <span>
            {/* If district and job length is more than 10 then show only district */}
            {job?.district.length > 10
              ? job?.district
              : job?.district + ", " + job?.state}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <FaRegBuilding className="w-4 h-4 mr-1 sm:mr-2" />
          <span className="capitalize">
            {job?.typeofEmployment || "Full-time"}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <GoBriefcase className="w-4 h-4 mr-1 sm:mr-2" />
          <span className="capitalize">{getExperienceText()}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <MdOutlineCurrencyRupee className="w-4 h-4 mr-1 sm:mr-2" />
          <span className="font-semibold text-green-600">
            {job?.salary} LPA
          </span>
        </div>
      </div>

      {/* Skills */}
      {job?.skills && job.skills.length > 0 && (
        <div className="mb-3 sm:mb-4 flex flex-col items-start">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
            Required Skills:
          </h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {job.skills.slice(0, 10).map((skill, index) => (
              <span
                key={index}
                className="bg-sky-100 text-sky-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
              >
                {skill}
              </span>
            ))}

            {/* Show "+ X more skills" if there are more than 10 */}
            {job.skills.length > 10 && (
              <span className="bg-sky-100 text-sky-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                + {job.skills.length - 10} more skills
              </span>
            )}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="flex items-start flex-1 overflow-y-auto mb-2 sm:mb-0">
        <p className="text-gray-600 text-xs sm:text-sm leading-snug">
          {/* if description is charater length is more than 100 then show only 100 character and add ... */}
          {job?.description.length > 100
            ? job?.description.slice(0, 100) + "..."
            : job?.description}
        </p>
      </div>

      {/* Footer with Deadline and Apply Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto gap-2 sm:gap-0">
        <div className="text-xs sm:text-sm text-gray-500">
          <span>Deadline: {formatDate(job?.deadline)}</span>
        </div>

        <div className="flex space-x-2 sm:space-x-3 w-full sm:w-auto">
          <button className="w-1/2 sm:w-auto px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 smooth-transition text-xs sm:text-sm font-medium">
            Save Job
          </button>
          <a
            href={`https://jobs.unifiedmentor.com/jobs/${job?._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 sm:w-auto px-3 sm:px-6 py-1 sm:py-2 dark:bg-primary dark:text-content bg-brand hover:bg-brand-hover hover:bg-brand-hover dark:hover:text-white text-white  smooth-transition text-xs sm:text-sm font-medium rounded-lg text-center"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleJobCard;
