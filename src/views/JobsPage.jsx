import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaFilter,
  FaTimes,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaBuilding,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import SingleJobCard from "../component/SingleJobCard";
import { Link } from "@/lib/router-compat";

const JobsPage = ({ darkMode, setDarkMode }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [salaryRange, setSalaryRange] = useState("All");

  const locations = [
    "All",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Remote",
  ];
  const employmentTypes = [
    "All",
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Freelance",
  ];
  const experienceLevels = [
    "All",
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Executive",
  ];
  const salaryRanges = [
    "All",
    "0-5 LPA",
    "5-10 LPA",
    "10-15 LPA",
    "15-25 LPA",
    "25+ LPA",
  ];

  // Fetch jobs data
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://job-portal-backend-1023229424452.asia-south2.run.app/api/jobs/show?pageNumber=1&keyword=&cat=&location=&state=&district=&level=&type="
        );
        setJobs(response.data.jobs || []);
        setFilteredJobs(response.data.jobs || []);
        setIsLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch job data");
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = jobs;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (job.skills &&
            job.skills.some((skill) =>
              skill.toLowerCase().includes(searchQuery.toLowerCase())
            ))
      );
    }

    // Filter by location
    if (selectedLocation !== "All") {
      if (selectedLocation === "Remote") {
        filtered = filtered.filter(
          (job) =>
            job.district.toLowerCase().includes("remote") ||
            job.state.toLowerCase().includes("remote")
        );
      } else {
        filtered = filtered.filter(
          (job) =>
            job.district === selectedLocation || job.state === selectedLocation
        );
      }
    }

    // Filter by employment type
    if (selectedType !== "All") {
      filtered = filtered.filter(
        (job) => job.typeofEmployment === selectedType
      );
    }

    // Filter by experience level
    if (selectedExperience !== "All") {
      filtered = filtered.filter((job) => {
        const exp = job.experience?.toLowerCase() || "";
        if (selectedExperience === "Entry Level")
          return exp.includes("fresher") || exp.includes("entry");
        if (selectedExperience === "Mid Level")
          return exp.includes("mid") || exp.includes("2-5");
        if (selectedExperience === "Senior Level")
          return exp.includes("senior") || exp.includes("5+");
        if (selectedExperience === "Executive")
          return exp.includes("executive") || exp.includes("10+");
        return true;
      });
    }

    // Filter by salary range
    if (salaryRange !== "All") {
      filtered = filtered.filter((job) => {
        const salary = parseFloat(job.salary) || 0;
        if (salaryRange === "0-5 LPA") return salary >= 0 && salary <= 5;
        if (salaryRange === "5-10 LPA") return salary > 5 && salary <= 10;
        if (salaryRange === "10-15 LPA") return salary > 10 && salary <= 15;
        if (salaryRange === "15-25 LPA") return salary > 15 && salary <= 25;
        if (salaryRange === "25+ LPA") return salary > 25;
        return true;
      });
    }

    setFilteredJobs(filtered);
  }, [
    jobs,
    searchQuery,
    selectedLocation,
    selectedType,
    selectedExperience,
    salaryRange,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedLocation("All");
    setSelectedType("All");
    setSelectedExperience("All");
    setSalaryRange("All");
  };

  const hasActiveFilters = () => {
    return (
      searchQuery ||
      selectedLocation !== "All" ||
      selectedType !== "All" ||
      selectedExperience !== "All" ||
      salaryRange !== "All"
    );
  };

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "dark bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p
            className={`text-xl ${
              darkMode ? "text-gray-300" : "text-content-secondary"
            }`}
          >
            Loading job listings...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "dark bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h3
            className={`text-2xl font-semibold mb-2 ${
              darkMode ? "text-gray-300" : "text-content-secondary"
            }`}
          >
            Error Loading Jobs
          </h3>
          <p
            className={`text-lg ${
              darkMode ? "text-content-muted" : "text-content-muted"
            }`}
          >
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <main
      className={` min-h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <section
        id="hero"
        className={`relative overflow-hidden ${
          darkMode
            ? "bg-inherit"
            : "bg-gradient-to-br from-brand via-brand-active to-brand-hover"
        }`}
      >
        <div className="absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <FaBriefcase
                className={`text-6xl ${darkMode ? "text-brand-fg" : "text-brand-fg"}`}
              />
            </div>
            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 ${
                darkMode ? "text-brand-fg" : "text-brand-fg"
              }`}
            >
              Find Your Dream Job
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-brand-fg"
              }`}
            >
              Discover exciting career opportunities with top companies across
              India
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-content-muted text-xl" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-brand-fg placeholder-gray-400"
                      : "bg-surface border-gray-300 text-content placeholder-gray-500"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div
        className={`sticky top-0 z-10 ${
          darkMode
            ? "bg-gray-800 border-b border-gray-700"
            : "bg-surface border-b border-gray-200"
        } shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FaFilter
                className={`text-lg ${
                  darkMode ? "text-content-muted" : "text-content-secondary"
                }`}
              />
              <span
                className={`font-medium ${
                  darkMode ? "text-gray-300" : "text-content-secondary"
                }`}
              >
                Filters:
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className={`px-3 py-2 rounded-lg border text-sm ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-gray-300"
                    : "bg-surface border-gray-300 text-content-secondary"
                }`}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              {/* Employment Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`px-3 py-2 rounded-lg border text-sm ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-gray-300"
                    : "bg-surface border-gray-300 text-content-secondary"
                }`}
              >
                {employmentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* Experience Level Filter */}
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className={`px-3 py-2 rounded-lg border text-sm ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-gray-300"
                    : "bg-surface border-gray-300 text-content-secondary"
                }`}
              >
                {experienceLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>

              {/* Salary Range Filter */}
              <select
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
                className={`px-3 py-2 rounded-lg border text-sm ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-gray-300"
                    : "bg-surface border-gray-300 text-content-secondary"
                }`}
              >
                {salaryRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {hasActiveFilters() && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-content-secondary hover:text-content transition-colors"
              >
                <FaTimes />
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <div
              className={`text-6xl mb-4 ${
                darkMode ? "text-content-secondary" : "text-content-muted"
              }`}
            >
              🔍
            </div>
            <h3
              className={`text-2xl font-semibold mb-2 ${
                darkMode ? "text-gray-300" : "text-content-secondary"
              }`}
            >
              No jobs found
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-content-muted" : "text-content-muted"
              }`}
            >
              {hasActiveFilters()
                ? "Try adjusting your filters to find more opportunities."
                : "Check back later for new job postings."}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-content"
                }`}
              >
                {filteredJobs.length} Job{filteredJobs.length !== 1 ? "s" : ""}{" "}
                Available
              </h2>
              <p className={`${darkMode ? "text-content-muted" : "text-content-secondary"}`}>
                {hasActiveFilters() && "Showing filtered results"}
              </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <div key={job._id} className="w-full">
                  <SingleJobCard
                    job={job}
                    index={index}
                    darkMode={darkMode}
                    swiperColor={[]}
                  />
                </div>
              ))}
            </div>

            {/* Load More Button (if needed) */}
            {filteredJobs.length > 0 && (
              <div className="text-center mt-12">
                <Link
                  to={"https://jobs.unifiedmentor.com/"}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    darkMode
                      ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
                      : "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
                  }`}
                >
                  Load More Jobs
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} py-20`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-content"
            }`}
          >
            Looking for Talent?
          </h2>
          <p
            className={`text-xl mb-8 ${
              darkMode ? "text-gray-300" : "text-content-secondary"
            }`}
          >
            Post your job openings and find the perfect candidates for your team
          </p>
          <a
            href="https://jobs.unifiedmentor.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
              darkMode
                ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
                : "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
            }`}
          >
            Post a Job
            <IoIosArrowForward className="ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default JobsPage;